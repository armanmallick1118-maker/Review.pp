import React, { useState } from 'react';
import { Sector } from '../types';
import { SECTORS_DATA } from '../data/destinations';
import { playHudClick } from '../utils/audio';

interface DestinationsExplorerProps {
  onSelectSector: (sector: Sector) => void;
  onCompareSector: (sector: Sector) => void;
  compareList: Sector[];
  onRemoveFromCompare: (id: string) => void;
}

const REGIONS = ['All', 'Sky Cities', 'Deep Sea Habs', 'Forest Nodes', 'Orbital Shards'];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`material-symbols-outlined text-sm ${
            i < full ? 'text-[#CCFF00]' : i === full && half ? 'text-[#CCFF00]' : 'text-white/20'
          }`}
          style={{ fontVariationSettings: i === full && half ? "'FILL' 0" : "'FILL' 1" }}
        >
          star
        </span>
      ))}
      <span className="font-mono text-[#CCFF00] text-xs font-bold ml-1">{rating}</span>
    </div>
  );
};

export const DestinationsExplorer: React.FC<DestinationsExplorerProps> = ({
  onSelectSector,
  onCompareSector,
  compareList,
  onRemoveFromCompare,
}) => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'rating' | 'price_asc' | 'price_desc'>('rating');

  const priceToNumber = (price: string): number => {
    const match = price.match(/[\d.]+/g);
    if (!match) return 0;
    const num = parseFloat(match[0]);
    if (price.includes('Cr')) return num * 1_00_00_000;
    if (price.includes('L')) return num * 1_00_000;
    return num;
  };

  const filtered = SECTORS_DATA
    .filter((s) => {
      const regionMatch = selectedRegion === 'All' || s.region === selectedRegion;
      const searchMatch = search === '' ||
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.locationTag.toLowerCase().includes(search.toLowerCase());
      return regionMatch && searchMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.expertRating - a.expertRating;
      if (sortBy === 'price_asc') return priceToNumber(a.estimatedPrice) - priceToNumber(b.estimatedPrice);
      if (sortBy === 'price_desc') return priceToNumber(b.estimatedPrice) - priceToNumber(a.estimatedPrice);
      return 0;
    });

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div>
        <div className="text-[#CCFF00] font-mono text-xs font-bold uppercase tracking-widest mb-2">
          // {filtered.length} PROPERTIES FOUND
        </div>
        <h2 className="font-space text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
          Browse Listings
        </h2>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-grow">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-base">search</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by city or property name..."
            className="w-full bg-[#111] border border-white/10 rounded-full py-3 pl-11 pr-5 text-sm text-white placeholder-white/30 focus:border-[#CCFF00] focus:outline-none transition-colors"
          />
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          className="bg-[#111] border border-white/10 rounded-full py-3 px-5 text-sm text-white focus:border-[#CCFF00] focus:outline-none transition-colors"
        >
          <option value="rating">Sort: Highest Rated</option>
          <option value="price_asc">Sort: Price Low to High</option>
          <option value="price_desc">Sort: Price High to Low</option>
        </select>
      </div>

      {/* Region Filter Chips */}
      <div className="flex gap-2 flex-wrap">
        {REGIONS.map((r) => (
          <button
            key={r}
            onClick={() => {
              playHudClick();
              setSelectedRegion(r);
            }}
            className={`px-4 py-1.5 rounded-full font-mono text-xs font-bold uppercase transition-all cursor-pointer ${
              selectedRegion === r
                ? 'bg-[#CCFF00] text-black shadow-[0_0_15px_rgba(204,255,0,0.3)]'
                : 'bg-[#111] border border-white/10 text-white/60 hover:text-white hover:border-white/30'
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((sector) => {
          const inCompare = !!compareList.find(s => s.id === sector.id);
          return (
            <div
              key={sector.id}
              className="group bg-[#111] border border-white/10 rounded-3xl overflow-hidden flex flex-col hover:border-[#CCFF00]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,255,0,0.08)]"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden cursor-pointer" onClick={() => { playHudClick(); onSelectSector(sector); }}>
                <img
                  src={sector.imgUrl}
                  alt={sector.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                  {sector.discountPercent && sector.discountPercent > 0 ? (
                    <span className="bg-[#FF0055] text-white px-2.5 py-1 rounded-full text-[10px] font-black uppercase">
                      {sector.discountPercent}% Discount
                    </span>
                  ) : null}
                </div>

                {/* Rating Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur px-3 py-1.5 rounded-xl border border-[#CCFF00]/30 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#CCFF00] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-[#CCFF00] font-bold text-sm">{sector.expertRating}/5</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-1">
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">{sector.locationTag}</span>
                </div>

                <h3
                  className="font-space text-xl font-black uppercase tracking-tighter text-white mb-2 cursor-pointer hover:text-[#CCFF00] transition-colors line-clamp-1"
                  onClick={() => { playHudClick(); onSelectSector(sector); }}
                >
                  {sector.name}
                </h3>

                {/* Key Amenities */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {sector.nearbyStation && (
                    <div className="flex items-center gap-1.5 text-white/60">
                      <span className="material-symbols-outlined text-[#CCFF00] text-sm">train</span>
                      <span className="text-xs truncate">{sector.nearbyStation}</span>
                    </div>
                  )}
                  {sector.nearbySchool && (
                    <div className="flex items-center gap-1.5 text-white/60">
                      <span className="material-symbols-outlined text-[#CCFF00] text-sm">school</span>
                      <span className="text-xs truncate">{sector.nearbySchool}</span>
                    </div>
                  )}
                  {sector.roadCondition && (
                    <div className="flex items-center gap-1.5 text-white/60">
                      <span className="material-symbols-outlined text-[#CCFF00] text-sm">add_road</span>
                      <span className="text-xs truncate">{sector.roadCondition}</span>
                    </div>
                  )}
                  {sector.nearbyDairy && (
                    <div className="flex items-center gap-1.5 text-white/60">
                      <span className="material-symbols-outlined text-[#CCFF00] text-sm">storefront</span>
                      <span className="text-xs truncate">{sector.nearbyDairy}</span>
                    </div>
                  )}
                </div>

                <StarRating rating={sector.expertRating} />

                <div className="mt-3 mb-5">
                  <div className="font-space text-xl font-black text-[#CCFF00]">{sector.estimatedPrice}</div>
                  <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Estimated Market Price</div>
                </div>

                {/* CTAs */}
                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() => { playHudClick(); onSelectSector(sector); }}
                    className="flex-grow py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-all"
                  >
                    Read Review
                  </button>
                  <button
                    onClick={() => {
                      playHudClick();
                      if (inCompare) {
                        onRemoveFromCompare(sector.id);
                      } else {
                        onCompareSector(sector);
                      }
                    }}
                    className={`px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-1.5 ${
                      inCompare
                        ? 'bg-[#CCFF00] text-black border border-[#CCFF00]'
                        : 'border border-white/20 text-white hover:border-[#CCFF00] hover:text-[#CCFF00]'
                    }`}
                    title={inCompare ? 'Remove from Compare' : 'Add to Compare'}
                  >
                    <span className="material-symbols-outlined text-sm">compare_arrows</span>
                    <span className="hidden sm:inline">{inCompare ? 'Added' : 'Compare'}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-24">
          <span className="material-symbols-outlined text-5xl text-white/20 mb-4 block">search_off</span>
          <p className="text-white/50">No properties match your filters. Try adjusting your search.</p>
        </div>
      )}
    </div>
  );
};
