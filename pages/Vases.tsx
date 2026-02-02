import React from 'react';
import { VASES_HERO } from '../constants';
import MaterialsGrid from '../components/MaterialsGrid';
import AnatomyDiagram from '../components/AnatomyDiagram';
import SEO from '../components/SEO';

const Vases: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper text-ink">
       <SEO title="Vasos e Estruturas" description="Guia sobre a arquitetura dos vasos e como a escolha do material impacta a saúde das raízes e o design do ambiente." />
       
       {/* 1. Hero Section - Full Width & Cinematic */}
       <section className="relative w-full min-h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-forest-dark py-20">
          <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          
          {/* Background Image Parallax-ish */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 grayscale mix-blend-multiply"
            style={{ backgroundImage: `url('${VASES_HERO}')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/40 to-transparent"></div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto container">
             <div className="inline-flex items-center gap-3 border border-white/10 rounded-full px-5 py-1.5 mb-8 backdrop-blur-md bg-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
                <span className="text-gold-light font-mono text-[10px] uppercase tracking-widest-xl">Volume IV: Estrutura</span>
             </div>
             <h1 className="text-fluid-h1 font-serif text-white mb-8 tracking-tighter leading-none">
                O Recipiente <br/> <span className="italic text-gold font-light">Sagrado</span>
             </h1>
             <p className="font-alt text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto font-light">
                "Um vaso não é apenas um contêiner; é a fronteira entre o mundo selvagem e o domesticado."
             </p>
          </div>
       </section>

       <div className="container py-24 md:py-32">
          
          {/* 2. Intro Text */}
          <div className="flex flex-col md:flex-row gap-20 items-start mb-40 border-b border-ink/5 pb-24">
             <div className="w-full md:w-1/3 sticky top-32">
                <h2 className="text-5xl font-serif text-ink mb-6 tracking-tight leading-none">A Arquitetura <br/>da Raiz</h2>
                <div className="w-16 h-px bg-gold mb-6"></div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink/40">
                   Leitura Obrigatória
                </p>
             </div>
             <div className="w-full md:w-2/3 columns-1 md:columns-2 gap-12 space-y-12">
                <p className="font-sans text-lg font-light text-ink/80 leading-loose text-justify first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-gold-dark">
                   Antes de considerar a estética visual que complementa seu interior, o jardineiro experiente considera a física da porosidade e a drenagem. O erro mais comum do neófito é priorizar a forma sobre a função, condenando a raiz à asfixia em recipientes sem saída.
                </p>
                <div className="bg-[#F2EFE9] p-10 break-inside-avoid relative">
                   <span className="absolute top-0 left-0 w-full h-1 bg-gold/20"></span> 
                   <p className="font-serif italic text-2xl text-ink/90 leading-normal">
                      "A beleza de um vaso deve ser igualada apenas pela sua capacidade de desaparecer, deixando a planta brilhar."
                   </p>
                </div>
             </div>
          </div>

          <MaterialsGrid />
          <AnatomyDiagram />

       </div>
    </div>
  );
};

export default Vases;