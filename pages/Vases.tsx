import React from 'react';
import { VASES_HERO, VASE_TERRACOTTA, VASE_CERAMIC, VASE_TECH } from '../constants';

const Vases: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper text-ink">
       
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

          {/* 3. Materials Grid */}
          <div className="mb-40">
             <div className="flex items-center justify-between mb-16">
                <h3 className="text-4xl font-serif text-ink tracking-tight">Matéria Prima</h3>
                <span className="hidden md:block h-px flex-1 bg-ink/10 mx-12"></span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold-dark">Seletor de Materiais</span>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
                {/* Card 1 */}
                <div className="group relative bg-white hover:bg-[#FDFBF7] transition-all duration-700 p-12 flex flex-col h-full">
                   <div className="h-56 relative overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-1000">
                      <div className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-[1.5s]" style={{ backgroundImage: `url('${VASE_TERRACOTTA}')` }}></div>
                   </div>
                   <div className="flex-1">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-gold-dark mb-2 block">O Clássico</span>
                      <h4 className="font-serif text-3xl mb-4 text-ink">Terracota</h4>
                      <p className="text-sm font-light text-ink/60 leading-relaxed mb-8">
                         Barro cozido não esmaltado. Permite que a água e o ar passem pelas paredes, criando um ambiente respirável.
                      </p>
                   </div>
                   <div className="pt-6 border-t border-ink/5">
                      <ul className="space-y-3">
                         <li className="flex items-center gap-3 text-xs font-mono uppercase text-ink/50 tracking-wide">
                            <span className="w-1 h-1 rounded-full bg-gold"></span> Ideal para Cactos
                         </li>
                         <li className="flex items-center gap-3 text-xs font-mono uppercase text-ink/50 tracking-wide">
                            <span className="w-1 h-1 rounded-full bg-gold"></span> Secagem Rápida
                         </li>
                      </ul>
                   </div>
                </div>

                {/* Card 2 */}
                <div className="group relative bg-white hover:bg-[#FDFBF7] transition-all duration-700 p-12 flex flex-col h-full">
                   <div className="h-56 relative overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-1000">
                      <div className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-[1.5s]" style={{ backgroundImage: `url('${VASE_CERAMIC}')` }}></div>
                   </div>
                   <div className="flex-1">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-gold-dark mb-2 block">Estético</span>
                      <h4 className="font-serif text-3xl mb-4 text-ink">Cerâmica</h4>
                      <p className="text-sm font-light text-ink/60 leading-relaxed mb-8">
                         Barro selado com vidro fundido. Retém a umidade consistentemente e oferece variedade estética infinita.
                      </p>
                   </div>
                   <div className="pt-6 border-t border-ink/5">
                      <ul className="space-y-3">
                         <li className="flex items-center gap-3 text-xs font-mono uppercase text-ink/50 tracking-wide">
                            <span className="w-1 h-1 rounded-full bg-gold"></span> Ideal para Tropicais
                         </li>
                         <li className="flex items-center gap-3 text-xs font-mono uppercase text-ink/50 tracking-wide">
                            <span className="w-1 h-1 rounded-full bg-gold"></span> Retenção Média
                         </li>
                      </ul>
                   </div>
                </div>

                {/* Card 3 */}
                <div className="group relative bg-white hover:bg-[#FDFBF7] transition-all duration-700 p-12 flex flex-col h-full">
                   <div className="h-56 relative overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-1000">
                      <div className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-[1.5s]" style={{ backgroundImage: `url('${VASE_TECH}')` }}></div>
                   </div>
                   <div className="flex-1">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-gold-dark mb-2 block">Moderno</span>
                      <h4 className="font-serif text-3xl mb-4 text-ink">Compósito</h4>
                      <p className="text-sm font-light text-ink/60 leading-relaxed mb-8">
                         Polímeros, fibra de vidro ou concreto leve. Durabilidade extrema e peso reduzido para grandes espécimes.
                      </p>
                   </div>
                   <div className="pt-6 border-t border-ink/5">
                      <ul className="space-y-3">
                         <li className="flex items-center gap-3 text-xs font-mono uppercase text-ink/50 tracking-wide">
                            <span className="w-1 h-1 rounded-full bg-gold"></span> Uso Misto
                         </li>
                         <li className="flex items-center gap-3 text-xs font-mono uppercase text-ink/50 tracking-wide">
                            <span className="w-1 h-1 rounded-full bg-gold"></span> Alta Resistência
                         </li>
                      </ul>
                   </div>
                </div>
             </div>
          </div>

          {/* 4. Anatomy Blueprint - Dark Mode */}
          <div className="bg-forest-deep text-paper p-10 md:p-20 rounded-sm relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-5"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-center">
                  <div className="flex-1">
                      <span className="text-gold font-mono text-[10px] uppercase tracking-widest-xl mb-6 block">Engenharia Botânica</span>
                      <h2 className="text-5xl md:text-6xl font-serif text-white mb-8 tracking-tighter">Anatomia do<br/>Plantio Perfeito</h2>
                      <p className="font-sans font-light text-lg text-white/60 leading-loose mb-12 max-w-md">
                          Um vaso saudável é um ecossistema em camadas. Negligenciar a base é convidar o desastre fúngico.
                      </p>
                      
                      <div className="grid gap-6">
                          {[
                              { label: 'Zona da Raiz', val: '60%', desc: 'Expansão e absorção de nutrientes.' },
                              { label: 'Zona de Tampão', val: '20%', desc: 'Margem de segurança contra compactação.' },
                              { label: 'Zona de Drenagem', val: '20%', desc: 'Camada crítica para fluxo de água.' }
                          ].map((stat, idx) => (
                              <div key={idx} className="flex items-center gap-6 group cursor-default">
                                  <span className="font-serif text-3xl text-gold/80 w-16 group-hover:text-gold transition-colors">{stat.val}</span>
                                  <div className="h-px bg-white/10 flex-1 group-hover:bg-gold/30 transition-colors"></div>
                                  <div className="w-48">
                                      <h5 className="font-mono text-[10px] uppercase tracking-widest text-white mb-1">{stat.label}</h5>
                                      <p className="text-[10px] text-white/40">{stat.desc}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* Diagram Visual - Technical Look */}
                  <div className="flex-1 w-full max-w-md">
                      <div className="relative border border-white/20 h-[550px] w-full rounded-b-[6rem] p-4 flex flex-col justify-end backdrop-blur-sm bg-white/[0.02]">
                          
                          {/* Arrows/Labels */}
                          <div className="absolute -right-4 md:-right-16 top-24 flex items-center gap-3">
                              <span className="w-8 md:w-12 h-px bg-gold/50"></span>
                              <span className="font-mono text-[9px] uppercase text-gold tracking-widest">Borda (2cm)</span>
                          </div>

                          {/* Layers */}
                          <div className="w-full flex-1 border-t border-dashed border-white/10 bg-gradient-to-b from-transparent to-[#4a3b32]/30 relative group overflow-hidden">
                              <div className="absolute inset-0 flex items-center justify-center text-white/10 font-serif text-5xl opacity-0 group-hover:opacity-100 transition-opacity select-none tracking-tighter italic">Flora</div>
                          </div>
                          
                          <div className="w-full h-40 border-t border-dashed border-white/10 bg-[#5d4a3c]/40 flex items-center justify-center relative hover:bg-[#5d4a3c]/60 transition-colors cursor-help">
                              <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">Substrato Orgânico</span>
                              <div className="absolute left-4 top-4 text-[9px] text-white/30 font-serif italic">III.</div>
                          </div>
                          
                          <div className="w-full h-8 border-t border-dashed border-white/10 bg-white/10 flex items-center justify-center relative hover:bg-white/20 transition-colors">
                              <span className="font-mono text-[9px] uppercase tracking-widest text-white/60">Manta</span>
                              <div className="absolute left-4 top-2 text-[9px] text-white/30 font-serif italic">II.</div>
                          </div>
                          
                          <div className="w-full h-24 border-t border-dashed border-white/10 bg-stone-500/30 rounded-b-[5rem] flex items-center justify-center relative hover:bg-stone-500/50 transition-colors">
                               <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">Argila Expandida</span>
                               <div className="absolute left-4 top-4 text-[9px] text-white/30 font-serif italic">I.</div>
                               {/* Hole */}
                               <div className="absolute bottom-0 w-6 h-3 bg-forest-deep rounded-t-full border-t border-white/20 mb-3"></div>
                          </div>

                      </div>
                      <div className="text-center mt-8">
                          <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">Fig 2.1 - Corte Transversal Ideal</p>
                      </div>
                  </div>
              </div>
          </div>

       </div>
    </div>
  );
};

export default Vases;