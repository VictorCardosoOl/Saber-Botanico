import React from 'react';
import { VASES_HERO } from '../constants';
import MaterialsGrid from '../components/MaterialsGrid';
import AnatomyDiagram from '../components/AnatomyDiagram';
import SEO from '../components/SEO';
import { PageTransition, Reveal } from '../components/Animation';

const Vases: React.FC = () => {
  return (
    <PageTransition className="min-h-screen bg-forest-dark text-paper">
       <SEO title="Vasos e Estruturas" description="Guia sobre a arquitetura dos vasos e como a escolha do material impacta a saúde das raízes e o design do ambiente." />
       
       {/* 1. Hero Section - Cinematic */}
       <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Background Image Parallax-ish */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay"
            style={{ backgroundImage: `url('${VASES_HERO}')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/80 via-transparent to-forest-dark"></div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto container mt-20">
             <Reveal>
                <div className="inline-flex items-center gap-3 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-md bg-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
                    <span className="text-gold-light font-mono text-[10px] uppercase tracking-widest-xl">Volume IV: Estrutura</span>
                </div>
                <h1 className="text-fluid-h1 font-serif text-white mb-6 tracking-tighter leading-none">
                    O Recipiente <br/> <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold">Sagrado</span>
                </h1>
             </Reveal>
          </div>
       </section>

       <div className="container py-24 md:py-32 px-6">
          <MaterialsGrid />
          <AnatomyDiagram />
       </div>
    </PageTransition>
  );
};

export default Vases;