import React from 'react';
import { Sector } from '../types';
import { playHudClick } from '../utils/audio';

interface ExperienceDetailProps {
  sector: Sector;
  onCompareSector: (sector: Sector) => void;
  isInCompareList: boolean;
}

const StarRating: React.FC<{ rating: number; large?: boolean }> = ({ rating, large }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const size = large ? 'text-2xl' : 'text-sm';
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`material-symbols-outlined ${size} ${
            i < full ? 'text-[#CCFF00]' : i === full && half ? 'text-[#CCFF00]' : 'text-white/20'
          }`}
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      ))}
      <span className={`font-mono text-[#CCFF00] font-bold ml-1 ${large ? 'text-2xl' : 'text-xs'}`}>{rating}/5</span>
    </div>
  );
};

export const ExperienceDetail: React.FC<ExperienceDetailProps> = ({
  sector,
  onCompareSector,
  isInCompareList,
}) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[420px] md:h-[560px] rounded-[36px] overflow-hidden mb-12 shadow-2xl border border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{ backgroundImage: `url('${sector.heroImgUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        <div className="relative h-full flex flex-col justify-end p-6 md:p-12 max-w-[1280px] mx-auto z-10">
          <div className="flex gap-3 mb-4 flex-wrap">
            <div className="inline-flex items-center gap-2 bg-black/80 backdrop-blur-md rounded-full px-4 py-1.5 border border-[#CCFF00]/40">
              <span className="material-symbols-outlined text-[#CCFF00] text-sm">location_on</span>
              <span className="font-mono text-xs text-[#CCFF00] font-black tracking-widest uppercase">
                {sector.locationTag}
              </span>
            </div>
            {sector.discountPercent && sector.discountPercent > 0 ? (
              <div className="inline-flex items-center gap-2 bg-[#FF0055] rounded-full px-4 py-1.5 border border-white/20">
                <span className="font-mono text-xs text-white font-black tracking-widest uppercase">
                  {sector.discountPercent}% OFF — Price Advantage
                </span>
              </div>
            ) : null}
          </div>

          <h1 className="font-space text-4xl md:text-7xl font-black text-white mb-4 uppercase tracking-tighter drop-shadow-md">
            {sector.name}
          </h1>

          <p className="text-base md:text-xl text-white/80 max-w-3xl line-clamp-3 font-light leading-relaxed mb-6">
            {sector.description}
          </p>

          <StarRating rating={sector.expertRating} large />
        </div>
      </section>

      {/* Main Layout Grid */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Content Column */}
        <div className="flex-1 space-y-12">

          {/* Expert Verdict */}
          <section>
            <h2 className="font-space text-3xl font-black uppercase tracking-tighter text-white mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
              <span className="material-symbols-outlined text-[#CCFF00]">verified</span>
              Expert Verdict
            </h2>
            <div className="bg-[#111] border border-[#CCFF00]/20 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#CCFF00]/5 blur-2xl rounded-full -mr-12 -mt-12" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[#CCFF00]">person</span>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#CCFF00] uppercase tracking-widest font-bold mb-2">EXPERT ANALYSIS</div>
                  <p className="text-white/90 text-lg leading-relaxed italic">"{sector.expertVerdict}"</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pros & Cons */}
          <section>
            <h2 className="font-space text-3xl font-black uppercase tracking-tighter text-white mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
              <span className="material-symbols-outlined text-[#CCFF00]">balance</span>
              Pros & Cons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pros */}
              <div className="bg-[#0A1A0A] border border-green-500/20 rounded-3xl p-6">
                <div className="font-mono text-xs text-green-400 font-bold uppercase tracking-widest mb-4">✓ Advantages</div>
                <ul className="space-y-3">
                  {sector.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
                      <span className="material-symbols-outlined text-green-400 text-base mt-0.5 flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="text-sm leading-relaxed">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Cons */}
              <div className="bg-[#1A0A0A] border border-red-500/20 rounded-3xl p-6">
                <div className="font-mono text-xs text-red-400 font-bold uppercase tracking-widest mb-4">✕ Disadvantages</div>
                <ul className="space-y-3">
                  {sector.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
                      <span className="material-symbols-outlined text-red-400 text-base mt-0.5 flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
                      <span className="text-sm leading-relaxed">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Locality Info */}
          <section>
            <h2 className="font-space text-3xl font-black uppercase tracking-tighter text-white mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
              <span className="material-symbols-outlined text-[#CCFF00]">location_city</span>
              Locality & Connectivity
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sector.roadCondition && (
                <div className="bg-[#111] border border-white/10 p-5 rounded-2xl flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#CCFF00]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#CCFF00] text-xl">add_road</span>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Road Condition</div>
                    <div className="text-white font-bold text-sm mt-0.5">{sector.roadCondition}</div>
                  </div>
                </div>
              )}
              {sector.nearbySchool && (
                <div className="bg-[#111] border border-white/10 p-5 rounded-2xl flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#CCFF00]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#CCFF00] text-xl">school</span>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Nearby School</div>
                    <div className="text-white font-bold text-sm mt-0.5">{sector.nearbySchool}</div>
                  </div>
                </div>
              )}
              {sector.nearbyStation && (
                <div className="bg-[#111] border border-white/10 p-5 rounded-2xl flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#CCFF00]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#CCFF00] text-xl">train</span>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Railway / Metro</div>
                    <div className="text-white font-bold text-sm mt-0.5">{sector.nearbyStation}</div>
                  </div>
                </div>
              )}
              {sector.nearbyDairy && (
                <div className="bg-[#111] border border-white/10 p-5 rounded-2xl flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#CCFF00]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#CCFF00] text-xl">storefront</span>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Daily Essentials</div>
                    <div className="text-white font-bold text-sm mt-0.5">{sector.nearbyDairy}</div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Sticky Sidebar - Expert Summary */}
        <div className="w-full lg:w-[380px] flex-shrink-0">
          <div className="sticky top-[95px] bg-[#0A0A0A] p-8 rounded-3xl flex flex-col gap-6 border border-[#CCFF00]/30 shadow-[0_0_40px_rgba(204,255,0,0.08)]">
            <div>
              <div className="font-mono text-[10px] text-[#CCFF00] uppercase tracking-widest font-bold mb-2">REVIEW SUMMARY</div>
              <h3 className="font-space text-2xl font-black uppercase tracking-tighter text-white">{sector.name}</h3>
              <p className="text-xs text-white/50 mt-1">{sector.locationTag}</p>
            </div>

            {/* Score */}
            <div className="bg-[#111] p-5 rounded-2xl border border-white/10">
              <div className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-2">Expert Score</div>
              <StarRating rating={sector.expertRating} large />
              <div className="text-xs text-white/50 mt-2">Based on location, connectivity, legal clarity & value.</div>
            </div>

            {/* Estimated Price */}
            <div className="bg-[#111] p-5 rounded-2xl border border-white/10">
              <div className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-1">Estimated Market Price</div>
              <div className="font-space text-2xl font-black text-[#CCFF00]">{sector.estimatedPrice}</div>
              {sector.discountPercent && sector.discountPercent > 0 ? (
                <div className="mt-2 inline-block bg-[#FF0055] px-3 py-1 rounded-full text-[10px] font-black text-white uppercase">
                  {sector.discountPercent}% price advantage spotted
                </div>
              ) : null}
            </div>

            {/* Add to Compare */}
            <button
              onClick={() => {
                playHudClick();
                onCompareSector(sector);
              }}
              disabled={isInCompareList}
              className={`w-full py-4 rounded-full font-space font-black text-sm uppercase tracking-widest flex justify-center items-center gap-2 cursor-pointer transition-all ${
                isInCompareList
                  ? 'bg-[#CCFF00] text-black cursor-default'
                  : 'bg-white/5 border border-[#CCFF00] text-[#CCFF00] hover:bg-[#CCFF00] hover:text-black shadow-[0_0_20px_rgba(204,255,0,0.15)]'
              }`}
            >
              <span className="material-symbols-outlined text-xl">compare_arrows</span>
              {isInCompareList ? 'Added to Compare ✓' : 'Add to Comparison'}
            </button>

            {/* Disclaimer */}
            <p className="text-center text-[10px] text-white/30 font-mono leading-relaxed">
              Prices are indicative estimates. Conduct independent due diligence and legal verification before any purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
