import React from 'react';
import { playHudClick } from '../utils/audio';

interface FooterProps {
  onNavigate: (tab: 'home' | 'destinations' | 'experiences' | 'compare' | 'about') => void;
  openModal: (modal: 'neural_check' | 'ai_assistant') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, openModal }) => {
  return (
    <footer className="w-full py-12 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto bg-[#050505] border-t border-white/10 z-10 relative mt-16">
      <div className="flex flex-col items-center md:items-start gap-1 mb-6 md:mb-0">
        <div className="font-space text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse shadow-[0_0_8px_#CCFF00]" />
          PROP<span className="text-[#CCFF00]">REVIEW</span>
        </div>
        <p className="font-mono text-[10px] text-[#CCFF00] font-bold tracking-widest uppercase">
          Unbiased Indian Real Estate Insights
        </p>
      </div>

      <nav className="flex flex-wrap justify-center md:justify-end gap-6 mb-6 md:mb-0 text-xs font-mono uppercase font-bold text-white/70">
        <button
          onClick={() => {
            playHudClick();
            onNavigate('destinations');
          }}
          className="hover:text-[#CCFF00] transition-all cursor-pointer"
        >
          Browse Listings
        </button>
        <button
          onClick={() => {
            playHudClick();
            onNavigate('compare');
          }}
          className="hover:text-[#CCFF00] transition-all cursor-pointer"
        >
          Compare Properties
        </button>
        <button
          onClick={() => {
            playHudClick();
            openModal('ai_assistant');
          }}
          className="hover:text-[#CCFF00] transition-all cursor-pointer"
        >
          Ask NOVA AI
        </button>
        <button
          onClick={() => {
            playHudClick();
            onNavigate('about');
          }}
          className="hover:text-[#CCFF00] transition-all cursor-pointer"
        >
          About
        </button>
      </nav>

      <div className="w-full md:w-auto text-center md:text-right mt-4 md:mt-0">
        <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
          © 2026 PROPREVIEW. ALL INSIGHTS ARE INDEPENDENT & OBJECTIVE.
        </p>
      </div>
    </footer>
  );
};
