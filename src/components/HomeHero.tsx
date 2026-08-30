import React, { useState, useEffect } from 'react';
import { Sector } from '../types';
import { SECTORS_DATA } from '../data/destinations';
import { playHudClick } from '../utils/audio';

interface HomeHeroProps {
  onExploreClick: () => void;
  onSelectSector: (sector: Sector) => void;
  onCompareSector: (sector: Sector) => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  onExploreClick,
  onSelectSector,
  onCompareSector
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProperties = SECTORS_DATA.slice(0, 5); // Use first 5 for the big slider

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProperties.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredProperties.length]);

  const currentProperty = featuredProperties[currentSlide];

  return (
    <div className="w-full space-y-16">
      {/* Primary Hero Section - Big Screen Beautiful Location Carousel */}
      <section className="relative rounded-[36px] overflow-hidden h-[600px] md:h-[700px] bg-[#0A0A0A] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] group">
        
        {/* Background Images */}
        {featuredProperties.map((prop, index) => (
          <div
            key={prop.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 scale-105 group-hover:scale-100"
              style={{ backgroundImage: `url('${prop.heroImgUrl}')` }}
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-16 max-w-[1280px] mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#CCFF00]/40 text-[#CCFF00] font-mono text-xs uppercase font-bold tracking-widest mb-6">
            <span className="material-symbols-outlined text-sm">star</span>
            FEATURED PROPERTY
          </div>

          <h1 className="font-space text-5xl md:text-7xl font-black text-white mb-4 uppercase tracking-tighter drop-shadow-lg">
            {currentProperty?.name}
          </h1>

          <p className="max-w-2xl text-base md:text-xl text-white/90 font-light leading-relaxed mb-8 drop-shadow-md line-clamp-2">
            {currentProperty?.expertVerdict}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                playHudClick();
                if(currentProperty) onSelectSector(currentProperty);
              }}
              className="px-8 py-4 bg-[#CCFF00] text-black font-black uppercase tracking-tighter rounded-full hover:bg-white transition-colors cursor-pointer flex items-center gap-2 shadow-[0_0_30px_rgba(204,255,0,0.25)] text-sm"
            >
              <span className="material-symbols-outlined text-lg">visibility</span>
              Read Full Review
            </button>

            <button
              onClick={() => {
                playHudClick();
                onExploreClick();
              }}
              className="px-8 py-4 border border-white/40 bg-black/40 backdrop-blur-md font-bold uppercase tracking-tighter rounded-full text-white hover:border-[#CCFF00] hover:text-[#CCFF00] transition-colors cursor-pointer flex items-center gap-2 text-sm"
            >
              <span className="material-symbols-outlined text-base">grid_view</span>
              Browse All Listings
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
          {featuredProperties.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-12 h-1.5 rounded-full transition-all ${
                idx === currentSlide ? 'bg-[#CCFF00] shadow-[0_0_10px_rgba(204,255,0,0.8)]' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Trust & Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
        <div className="bg-[#111] border border-white/5 p-6 rounded-2xl">
          <div className="text-[#CCFF00] text-xs font-bold uppercase tracking-widest mb-2">Properties Reviewed</div>
          <div className="text-4xl md:text-5xl font-bold tracking-tighter text-white">500+</div>
          <div className="mt-4 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-[#CCFF00] w-[100%]" />
          </div>
        </div>

        <div className="bg-[#111] border border-white/5 p-6 rounded-2xl">
          <div className="text-[#CCFF00] text-xs font-bold uppercase tracking-widest mb-2">Expert Ratings</div>
          <div className="text-4xl md:text-5xl font-bold tracking-tighter text-white">4.8<span className="text-xl text-white/40">/5</span></div>
          <div className="mt-4 flex gap-1 items-end h-6">
             <div className="w-full bg-[#CCFF00] h-[90%]" />
             <div className="w-full bg-[#CCFF00] h-[95%]" />
             <div className="w-full bg-[#CCFF00] h-[85%]" />
             <div className="w-full bg-[#CCFF00] h-[100%]" />
             <div className="w-full bg-[#CCFF00] h-[90%]" />
          </div>
        </div>

        <div className="bg-[#111] border border-white/5 p-6 rounded-2xl">
          <div className="text-[#CCFF00] text-xs font-bold uppercase tracking-widest mb-2">Cities Covered</div>
          <div className="text-4xl md:text-5xl font-bold tracking-tighter text-white">25<span className="text-xl text-white/40"> Pan-India</span></div>
          <div className="mt-4 text-[10px] text-white/50 uppercase tracking-widest">Metro & Tier-2</div>
        </div>

        <div className="bg-[#111] border border-white/5 p-6 rounded-2xl">
          <div className="text-[#CCFF00] text-xs font-bold uppercase tracking-widest mb-2">Verified Insights</div>
          <div className="text-4xl md:text-5xl font-bold tracking-tighter text-[#CCFF00]">100%</div>
          <div className="mt-4 text-[10px] text-white/50 uppercase tracking-widest">Unbiased & Objective</div>
        </div>
      </section>

      {/* Featured Sector Showcase Grid */}
      <section>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
          <div>
            <div className="text-[#CCFF00] font-mono text-xs font-bold uppercase tracking-widest mb-2">
              // TOP_RATED_PROPERTIES
            </div>
            <h2 className="font-space text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
              Highly Recommended
            </h2>
          </div>
          <button
            onClick={() => {
              playHudClick();
              onExploreClick();
            }}
            className="px-5 py-2.5 border border-white/20 rounded-full font-bold uppercase text-xs tracking-widest text-white hover:border-[#CCFF00] hover:text-[#CCFF00] transition-colors cursor-pointer flex items-center gap-2"
          >
            <span>View All Properties</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SECTORS_DATA.slice(2, 5).map((sector, index) => {
            const isFeaturedPopular = index === 1;
            return (
              <div
                key={sector.id}
                onClick={() => {
                  playHudClick();
                  onSelectSector(sector);
                }}
                className={`p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isFeaturedPopular
                    ? 'bg-[#CCFF00] text-black scale-105 shadow-[0_0_50px_rgba(204,255,0,0.25)]'
                    : 'bg-[#151515] text-white border border-white/5 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-bold uppercase tracking-widest ${isFeaturedPopular ? 'text-black/70' : 'text-white/50'}`}>
                      {sector.locationTag}
                    </span>
                    {isFeaturedPopular && (
                      <span className="bg-black text-[#CCFF00] px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-widest">
                        Top Pick
                      </span>
                    )}
                  </div>

                  <div className="h-44 rounded-2xl overflow-hidden mb-6 relative">
                    <img
                      src={sector.imgUrl}
                      alt={sector.altText}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur px-2 py-1 rounded-md border border-[#CCFF00]/30 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[#CCFF00] text-[10px]">star</span>
                      <span className="text-[#CCFF00] font-mono text-[10px] font-bold">{sector.expertRating}/5</span>
                    </div>
                  </div>

                  <h3 className={`font-space text-2xl font-black uppercase tracking-tighter mb-2 ${isFeaturedPopular ? 'text-black' : 'text-white'}`}>
                    {sector.name}
                  </h3>
                  <p className={`font-sans text-sm line-clamp-2 mb-6 ${isFeaturedPopular ? 'text-black/80 font-medium' : 'text-white/60'}`}>
                    {sector.description}
                  </p>
                </div>

                <div>
                  <div className={`text-xl font-bold mb-6 font-space tracking-tighter ${isFeaturedPopular ? 'text-black' : 'text-[#CCFF00]'}`}>
                    {sector.estimatedPrice} <span className="text-xs opacity-60 font-mono block mt-1">ESTIMATED</span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      className={`flex-grow py-3.5 rounded-xl font-black uppercase text-xs tracking-widest transition-colors ${
                        isFeaturedPopular
                          ? 'bg-black text-[#CCFF00] hover:bg-neutral-900'
                          : 'bg-[#CCFF00] text-black hover:bg-white'
                      }`}
                    >
                      Read Review
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        playHudClick();
                        onCompareSector(sector);
                      }}
                      className={`px-4 py-3.5 rounded-xl font-black uppercase text-xs tracking-widest transition-colors flex justify-center items-center ${
                        isFeaturedPopular
                          ? 'border border-black/20 text-black hover:bg-black/10'
                          : 'border border-white/20 text-white hover:bg-white hover:text-black'
                      }`}
                      title="Add to Compare"
                    >
                      <span className="material-symbols-outlined text-sm">compare_arrows</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Smart Comparison Banner */}
      <section className="p-8 md:p-12 rounded-[32px] bg-[#0A0A0A] border border-[#CCFF00]/30 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 shadow-[0_0_40px_rgba(204,255,0,0.1)]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#CCFF00]/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="space-y-3 text-center md:text-left z-10">
          <div className="text-[#CCFF00] font-mono text-xs font-bold uppercase tracking-widest">
            // AI_ASSISTED_RESEARCH
          </div>
          <h3 className="font-space text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">
            Smart Property Comparison
          </h3>
          <p className="text-white/70 text-sm max-w-xl font-light">
            Select multiple properties and use our NOVA AI assistant to get an objective, side-by-side analysis of pros, cons, and long-term value.
          </p>
        </div>

        <button
          onClick={() => {
            playHudClick();
            onExploreClick();
          }}
          className="px-8 py-4 bg-[#CCFF00] text-black font-space font-black uppercase text-xs tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] flex-shrink-0 cursor-pointer flex items-center gap-2 z-10"
        >
          <span className="material-symbols-outlined text-base">balance</span>
          Start Comparing
        </button>
      </section>
    </div>
  );
};
