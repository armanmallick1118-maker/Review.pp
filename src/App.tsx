import React, { useState } from 'react';
import { Sector } from './types';
import { SECTORS_DATA } from './data/destinations';
import { setSoundEnabled, getSoundEnabled } from './utils/audio';

import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { HomeHero } from './components/HomeHero';
import { DestinationsExplorer } from './components/DestinationsExplorer';
import { ExperienceDetail } from './components/ExperienceDetail';
import { CompareView } from './components/CompareView';
import { AboutView } from './components/AboutView';

import { NeuralCheckModal } from './components/modals/NeuralCheckModal';
import { AiAssistantDrawer } from './components/modals/AiAssistantDrawer';

export function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'destinations' | 'experiences' | 'compare' | 'about'>('home');
  const [selectedSector, setSelectedSector] = useState<Sector>(SECTORS_DATA[2]); 
  
  const [compareList, setCompareList] = useState<Sector[]>([]);

  const [soundEnabled, setSoundEnabledState] = useState<boolean>(true);

  const [activeModal, setActiveModal] = useState<
    'neural_check' | 'ai_assistant' | null
  >(null);


  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabledState(next);
    setSoundEnabled(next);
  };

  const handleSelectSector = (sector: Sector) => {
    setSelectedSector(sector);
    setActiveTab('experiences');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompareSector = (sector: Sector) => {
    setCompareList(prev => {
      if (prev.find(s => s.id === sector.id)) return prev;
      return [...prev, sector];
    });
    setActiveTab('compare');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleRemoveFromCompare = (sectorId: string) => {
    setCompareList(prev => prev.filter(s => s.id !== sectorId));
  };

  return (
    <div className="relative min-h-screen text-white bg-[#050505] overflow-x-hidden font-sans">
      {/* Animated Bio-Particle Background */}
      <ParticleCanvas />

      {/* Main Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openModal={(m) => setActiveModal(m as any)}
        soundEnabled={soundEnabled}
        toggleSound={toggleSound}
        compareCount={compareList.length}
      />

      {/* View Content Container */}
      <main className="relative z-10 pt-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto min-h-[calc(100vh-200px)]">
        {activeTab === 'home' && (
          <HomeHero
            onExploreClick={() => setActiveTab('destinations')}
            onSelectSector={handleSelectSector}
            onCompareSector={handleCompareSector}
          />
        )}

        {activeTab === 'destinations' && (
          <DestinationsExplorer
            onSelectSector={handleSelectSector}
            onCompareSector={handleCompareSector}
            compareList={compareList}
            onRemoveFromCompare={handleRemoveFromCompare}
          />
        )}

        {activeTab === 'experiences' && (
          <ExperienceDetail
            sector={selectedSector}
            onCompareSector={handleCompareSector}
            isInCompareList={!!compareList.find(s => s.id === selectedSector.id)}
          />
        )}

        {activeTab === 'compare' && (
          <CompareView
            compareList={compareList}
            onRemoveFromCompare={handleRemoveFromCompare}
            onExploreClick={() => setActiveTab('destinations')}
          />
        )}

        {activeTab === 'about' && (
          <AboutView
            onStartBooking={() => setActiveTab('destinations')}
            openAiAssistant={() => setActiveModal('ai_assistant')}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={(tab) => setActiveTab(tab as any)}
        openModal={(m) => setActiveModal(m as any)}
      />

      {/* MODAL POPUPS */}
      {activeModal === 'neural_check' && (
        <NeuralCheckModal
          onClose={() => setActiveModal(null)}
          onProceedToBooking={() => setActiveTab('destinations')}
        />
      )}

      {activeModal === 'ai_assistant' && (
        <AiAssistantDrawer
          onClose={() => setActiveModal(null)}
          sectorContext={selectedSector?.name}
          compareContext={compareList}
        />
      )}
    </div>
  );
}

export default App;
