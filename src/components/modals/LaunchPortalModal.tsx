import React, { useState } from 'react';
import { Sector } from '../../types';
import { SECTORS_DATA } from '../../data/destinations';
import { playHudClick } from '../../utils/audio';

interface LaunchPortalModalProps {
  onClose: () => void;
  onSelectSector: (sector: Sector) => void;
}

export const LaunchPortalModal: React.FC<LaunchPortalModalProps> = ({
  onClose,
  onSelectSector,
}) => {
  const [activeSector, setActiveSector] = useState<Sector>(SECTORS_DATA[0]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#050505] border border-white/20 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(204,255,0,0.15)] flex flex-col max-h-[90vh]">
        {/* HUD Top Bar */}
        <div className="bg-[#0A0A0A] px-6 py-4 border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#CCFF00] animate-ping" />
            <h2 className="font-space text-lg font-black text-[#CCFF00] tracking-tighter uppercase">
              ORBITAL TELEMETRY PORTAL // SAT-GRID v4.8
            </h2>
          </div>
          <button
            onClick={() => {
              playHudClick();
              onClose();
            }}
            className="p-1 text-white/60 hover:text-[#CCFF00] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* HUD Main Content */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 lg:grid-cols-3 gap-6 flex-grow">
          {/* Orbital Radar Screen */}
          <div className="lg:col-span-2 bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 relative flex flex-col justify-between min-h-[340px] ambient-grid">
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#CCFF00] text-sm">satellite_alt</span>
              <span className="font-mono text-xs text-white/80 uppercase font-bold tracking-widest">SAT-GRID: ORBITAL APEX 04</span>
            </div>

            {/* Radar Sweep Animation Graphic */}
            <div className="relative w-full h-64 flex items-center justify-center my-4 overflow-hidden">
              <div className="w-56 h-56 rounded-full border border-[#CCFF00]/30 relative flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border border-[#CCFF00]/20 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-[#CCFF00]/10" />
                </div>
                {/* Crosshairs */}
                <div className="absolute inset-x-0 h-[1px] bg-[#CCFF00]/20" />
                <div className="absolute inset-y-0 w-[1px] bg-[#CCFF00]/20" />

                {/* Clickable Sector Pings */}
                {SECTORS_DATA.map((sector, index) => {
                  const offsets = [
                    { top: '25%', left: '30%' },
                    { top: '70%', left: '65%' },
                    { top: '45%', left: '75%' },
                    { top: '80%', left: '20%' },
                  ];
                  const isSelected = activeSector.id === sector.id;
                  return (
                    <button
                      key={sector.id}
                      onClick={() => {
                        playHudClick();
                        setActiveSector(sector);
                      }}
                      style={offsets[index % offsets.length]}
                      className={`absolute group cursor-pointer ${
                        isSelected ? 'z-20' : 'z-10'
                      }`}
                    >
                      <div className="relative flex items-center justify-center">
                        <span
                          className={`w-4 h-4 rounded-full ${
                            isSelected
                              ? 'bg-[#CCFF00] shadow-[0_0_15px_#CCFF00]'
                              : 'bg-white/40 opacity-70 group-hover:opacity-100'
                          }`}
                        />
                        {isSelected && (
                          <span className="absolute w-8 h-8 rounded-full border border-[#CCFF00] animate-ping" />
                        )}
                      </div>
                      <span className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] uppercase font-bold text-black bg-[#CCFF00] px-2 py-0.5 rounded-full shadow-md">
                        {sector.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between items-center font-mono text-[10px] text-white/50">
              <span>LAT: 45.3920 N | LON: 122.6840 W</span>
              <span className="text-[#CCFF00] font-bold">LIVE SAT STREAM ACTIVE</span>
            </div>
          </div>

          {/* Active Sector Telemetry Inspection */}
          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="px-2.5 py-1 rounded-full bg-[#CCFF00] text-black font-mono text-[10px] font-black uppercase">
                  {activeSector.region}
                </span>
                <span className="font-mono text-[10px] text-white/50">
                  {activeSector.locationTag}
                </span>
              </div>

              <h3 className="font-space text-3xl font-black uppercase tracking-tighter text-white mb-2">
                {activeSector.name}
              </h3>
              <p className="text-xs text-white/70 line-clamp-3 mb-6 font-light">
                {activeSector.description}
              </p>

              {/* Stats Box */}
              <div className="space-y-2 bg-[#111] p-4 rounded-xl border border-white/10 mb-6 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-white/50">O2 PURITY:</span>
                  <span className="text-[#CCFF00] font-bold">{activeSector.o2Purity || '99.8%'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">ELEVATION/DEPTH:</span>
                  <span className="text-white font-bold">{activeSector.depthOrHeight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">SYNC RATE:</span>
                  <span className="text-[#CCFF00] font-black">{activeSector.priceCredits} CR</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                playHudClick();
                onSelectSector(activeSector);
                onClose();
              }}
              className="w-full py-4 bg-[#CCFF00] text-black font-space font-black text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] cursor-pointer"
            >
              Teleport to Sector Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
