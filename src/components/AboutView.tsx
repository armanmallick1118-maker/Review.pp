import React from 'react';
import { playHudClick } from '../utils/audio';

interface AboutViewProps {
  onStartBooking: () => void;
  openAiAssistant: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onStartBooking, openAiAssistant }) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-12">
      <header className="text-center space-y-4 border-b border-white/10 pb-8">
        <span className="px-3 py-1 rounded-full bg-[#CCFF00] text-black font-mono text-xs font-black tracking-widest uppercase">
          ABOUT ECO-EXPEDITIONS
        </span>
        <h1 className="font-space text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
          Protecting Earth's Biospheres Through Neural Synchronization
        </h1>
        <p className="font-mono text-sm md:text-base text-white/70 max-w-2xl mx-auto uppercase font-bold tracking-wide">
          We pioneer zero-impact biosphere tourism by combining advanced neural telemetry, aeroponic habitats, and 100% transparent carbon credit re-wilding.
        </p>
      </header>

      {/* 3 Core Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-3 bg-[#0A0A0A]">
          <div className="w-12 h-12 rounded-2xl bg-[#CCFF00] text-black flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-2xl">eco</span>
          </div>
          <h3 className="font-space text-xl font-black uppercase text-white tracking-tight">100% Net-Positive</h3>
          <p className="text-xs text-white/60 font-light leading-relaxed">
            Every expedition direct-funds local habitat restoration, micro-forest rewilding, and carbon capture technology.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-3 bg-[#0A0A0A]">
          <div className="w-12 h-12 rounded-2xl bg-[#CCFF00] text-black flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-2xl">sensors</span>
          </div>
          <h3 className="font-space text-xl font-black uppercase text-white tracking-tight">Non-Invasive Links</h3>
          <p className="text-xs text-white/60 font-light leading-relaxed">
            Experience natural ecosystems through subtle bio-haptic feedback without disturbing fragile wildlife habitats.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-3 bg-[#0A0A0A]">
          <div className="w-12 h-12 rounded-2xl bg-[#CCFF00] text-black flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-2xl">satellite_alt</span>
          </div>
          <h3 className="font-space text-xl font-black uppercase text-white tracking-tight">Live Telemetry</h3>
          <p className="text-xs text-white/60 font-light leading-relaxed">
            All biospheres transmit live O2 purity, flora density, and atmospheric pressure data directly to satellite feeds.
          </p>
        </div>
      </section>

      {/* Interactive FAQ */}
      <section className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 bg-[#0A0A0A]">
        <h2 className="font-space text-2xl font-black uppercase text-white tracking-tight flex items-center gap-2">
          <span className="material-symbols-outlined text-[#CCFF00]">help</span>
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <details className="group border-b border-white/10 pb-4 cursor-pointer">
            <summary className="font-space text-base font-bold uppercase tracking-tight text-white group-hover:text-[#CCFF00] transition-colors list-none flex justify-between items-center">
              <span>What is Neural-Link Synchronization?</span>
              <span className="material-symbols-outlined text-[#CCFF00]">expand_more</span>
            </summary>
            <p className="text-xs text-white/60 mt-3 leading-relaxed font-light">
              Neural-Link Synchronization is our non-invasive bio-haptic connection that aligns your circadian rhythm and sensory perception with the natural bio-pulses of the biosphere pod.
            </p>
          </details>

          <details className="group border-b border-white/10 pb-4 cursor-pointer">
            <summary className="font-space text-base font-bold uppercase tracking-tight text-white group-hover:text-[#CCFF00] transition-colors list-none flex justify-between items-center">
              <span>How are Carbon Credits calculated?</span>
              <span className="material-symbols-outlined text-[#CCFF00]">expand_more</span>
            </summary>
            <p className="text-xs text-white/60 mt-3 leading-relaxed font-light">
              1 Carbon Credit (CR) equals $1.20 USD equivalent. Each booking includes a mandatory carbon offset tier that funds verified ecosystem restoration.
            </p>
          </details>

          <details className="group border-b border-white/10 pb-4 cursor-pointer">
            <summary className="font-space text-base font-bold uppercase tracking-tight text-white group-hover:text-[#CCFF00] transition-colors list-none flex justify-between items-center">
              <span>Can I customize my expedition pod?</span>
              <span className="material-symbols-outlined text-[#CCFF00]">expand_more</span>
            </summary>
            <p className="text-xs text-white/60 mt-3 leading-relaxed font-light">
              Yes! You can choose between the standard Observer Shell or upgrade to the Deep Immersion Chrysalis or Quantum Biosphere Capsule with zero-G float beds.
            </p>
          </details>
        </div>

        <div className="pt-4 flex justify-between items-center">
          <span className="font-mono text-xs text-white/50 uppercase font-bold tracking-widest">Have more questions?</span>
          <button
            onClick={() => {
              playHudClick();
              openAiAssistant();
            }}
            className="px-4 py-2 bg-[#CCFF00] text-black font-space font-black text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all cursor-pointer shadow-[0_0_15px_rgba(204,255,0,0.3)]"
          >
            Ask NOVA AI Assistant
          </button>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="text-center py-8">
        <button
          onClick={() => {
            playHudClick();
            onStartBooking();
          }}
          className="px-8 py-4 bg-[#CCFF00] text-black font-space font-black text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(204,255,0,0.3)] cursor-pointer"
        >
          Initialize Your Synchronization Protocol
        </button>
      </div>
    </div>
  );
};
