import React, { useState } from 'react';
import { playHudClick } from '../utils/audio';

interface NavbarProps {
  activeTab: 'home' | 'destinations' | 'experiences' | 'compare' | 'about';
  setActiveTab: (tab: 'home' | 'destinations' | 'experiences' | 'compare' | 'about') => void;
  openModal: (modal: 'neural_check' | 'ai_assistant') => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  compareCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  openModal,
  soundEnabled,
  toggleSound,
  compareCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: 'home' | 'destinations' | 'experiences' | 'compare' | 'about') => {
    playHudClick();
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-10 py-5 max-w-[1280px] mx-auto left-0 right-0 bg-[#050505]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)] transition-transform duration-300">
      {/* Brand Logo */}
      <button
        onClick={() => handleNavClick('home')}
        className="font-space text-xl md:text-2xl font-black tracking-tighter text-white uppercase flex items-center gap-2 group text-left cursor-pointer"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] animate-pulse shadow-[0_0_12px_#CCFF00]" />
        PROP<span className="text-[#CCFF00]">REVIEW</span>
      </button>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-6 lg:gap-8 items-center font-sans text-xs font-bold uppercase tracking-widest">
        <button
          onClick={() => handleNavClick('home')}
          className={`transition-colors duration-200 cursor-pointer ${
            activeTab === 'home'
              ? 'text-[#CCFF00] font-black opacity-100 border-b-2 border-[#CCFF00] pb-0.5'
              : 'text-white/60 hover:text-white opacity-80'
          }`}
        >
          Home
        </button>
        <button
          onClick={() => handleNavClick('destinations')}
          className={`transition-colors duration-200 cursor-pointer ${
            activeTab === 'destinations'
              ? 'text-[#CCFF00] font-black opacity-100 border-b-2 border-[#CCFF00] pb-0.5'
              : 'text-white/60 hover:text-white opacity-80'
          }`}
        >
          Listings
        </button>
        <button
          onClick={() => handleNavClick('compare')}
          className={`transition-colors duration-200 cursor-pointer flex items-center gap-1 ${
            activeTab === 'compare'
              ? 'text-[#CCFF00] font-black opacity-100 border-b-2 border-[#CCFF00] pb-0.5'
              : 'text-white/60 hover:text-white opacity-80'
          }`}
        >
          Compare {compareCount > 0 && <span className="bg-[#CCFF00] text-black px-1.5 py-0.5 rounded-full text-[10px]">{compareCount}</span>}
        </button>
        <button
          onClick={() => handleNavClick('about')}
          className={`transition-colors duration-200 cursor-pointer ${
            activeTab === 'about'
              ? 'text-[#CCFF00] font-black opacity-100 border-b-2 border-[#CCFF00] pb-0.5'
              : 'text-white/60 hover:text-white opacity-80'
          }`}
        >
          About
        </button>
      </nav>

      {/* Right Action Controls */}
      <div className="flex items-center gap-2.5 md:gap-4">
        {/* Sound FX Toggle */}
        <button
          onClick={() => {
            toggleSound();
            playHudClick();
          }}
          title={soundEnabled ? 'Disable UI Audio' : 'Enable UI Audio'}
          className="p-2 rounded-full bg-[#111] border border-white/10 text-white/70 hover:text-[#CCFF00] hover:border-[#CCFF00]/40 transition-all cursor-pointer flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-base">
            {soundEnabled ? 'volume_up' : 'volume_off'}
          </span>
        </button>

        {/* AI Bio-Assistant Trigger */}
        <button
          onClick={() => {
            playHudClick();
            openModal('ai_assistant');
          }}
          title="Open AI Real Estate Assistant"
          className="px-3.5 py-1.5 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/40 text-[#CCFF00] text-xs font-mono font-bold hover:bg-[#CCFF00] hover:text-black transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(204,255,0,0.15)]"
        >
          <span className="material-symbols-outlined text-sm">auto_awesome</span>
          <span className="hidden sm:inline uppercase">NOVA AI</span>
        </button>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-white hover:text-[#CCFF00]"
        >
          <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl z-50">
          <button
            onClick={() => handleNavClick('home')}
            className={`text-left py-2 font-space text-lg uppercase tracking-tighter ${activeTab === 'home' ? 'text-[#CCFF00] font-black' : 'text-white'}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('destinations')}
            className={`text-left py-2 font-space text-lg uppercase tracking-tighter ${activeTab === 'destinations' ? 'text-[#CCFF00] font-black' : 'text-white'}`}
          >
            Listings
          </button>
          <button
            onClick={() => handleNavClick('compare')}
            className={`text-left py-2 flex justify-between items-center font-space text-lg uppercase tracking-tighter ${activeTab === 'compare' ? 'text-[#CCFF00] font-black' : 'text-white'}`}
          >
            <span>Compare</span>
            {compareCount > 0 && <span className="bg-[#CCFF00] text-black px-2 py-1 rounded-full text-xs">{compareCount}</span>}
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`text-left py-2 font-space text-lg uppercase tracking-tighter ${activeTab === 'about' ? 'text-[#CCFF00] font-black' : 'text-white'}`}
          >
            About
          </button>
        </div>
      )}
    </header>
  );
};
