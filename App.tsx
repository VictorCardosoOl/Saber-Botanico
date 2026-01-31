import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SoilSection from './components/SoilSection';
import RitualsSection from './components/RitualsSection';
import ArchiveSection from './components/ArchiveSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full">
        <HeroSection />
        <SoilSection />
        <RitualsSection />
        <ArchiveSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;