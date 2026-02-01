import React from 'react';
import { VASES_HERO, VASE_TERRACOTTA, VASE_CERAMIC, VASE_TECH } from '../constants';

const Vases: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper text-ink">
       
       {/* 1. Hero Section - Full Width & Cinematic */}
       <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden bg-forest-dark">
          <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          
          {/* Background Image Parallax-ish */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
            style={{ backgroundImage: `url('${VASES_HERO}')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/50 to-transparent"></div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
             <div className="inline-flex items-center gap-2 border border-gold/30 rounded-full px-4 py-1 mb-6 backdrop-blur-sm bg-forest-dark/30">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
                <span className="text-gold font-mono text-[10px] uppercase tracking-[0.25em]">Volume IV: Estrutura</span>
             </div>
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-tight leading-none">
                O Recipiente <br/> <span className="italic text-gold-light">Sagrado</span>
             </h1>
             <p className="font-alt text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                "Um vaso não é apenas um contêiner; é a fronteira entre o mundo selvagem e o domesticado. A escolha correta define a longevidade da sua coleção."
             </p>
          </div>
       </section>

       <div className="max-w-[1400px] mx-auto px-6 py-24">
          
          {/* 2. Intro Text */}
          <div className="flex flex-col md:flex-row gap-16 items-start mb-32 border-b border-ink/10 pb-20">
             <div className="w-full md:w-1/3">
                <h2 className="text-4xl font-serif text-ink mb-4">A Arquitetura <br/>da Raiz</h2>
                <div className="w-12 h-1 bg-gold mb-6"></div>
                <p className="font-sans text-xs font-bold uppercase tracking-widest text-ink/40">
                   Leitura Obrigatória para Curadores
                </p>
             </div>
             <div className="w-full md:w-2/3 columns-1 md:columns-2 gap-8 space-y-8">
                <p className="font-alt text-xl text-ink/80 leading-relaxed text-justify">
                   Antes de considerar a estética visual que complementa seu interior, o jardineiro experiente considera a física da porosidade e a drenagem. O erro mais comum do neófito é priorizar a forma sobre a função, condenando a raiz à asfixia em recipientes sem saída.
                </p>
                <div className="bg-sage/10 p-6 border-l-2 border-sage break-inside-avoid">
                   <p className="font-serif italic text-lg text-ink">
                      "A beleza de um vaso deve ser igualada apenas pela sua capacidade de desaparecer, deixando a planta brilhar."
                   </p>
                </div>
             </div>
          </div>

          {/* 3. Materials Grid */}
          <div className="mb-32">
             <div className="flex items-center justify-between mb-12">
                <h3 className="text-3xl font-serif text-ink">Matéria Prima</h3>
                <span className="hidden md:block h-px flex-1 bg-ink/10 mx-8"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-gold-dark">Seletor de Materiais</span>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="group relative bg-[#FDFBF7] border border-ink/10 hover:border-gold/50 transition-all duration-500 overflow-hidden">
                   <div className="h-48 relative overflow-hidden">
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${VASE_TERRACOTTA}')` }}></div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-ink backdrop-blur-sm">Terracota</div>
                   </div>
                   <div className="p-8">
                      <h4 className="font-serif text-2xl mb-3 group-hover:text-gold-dark transition-colors">O Clássico Poroso</h4>
                      <p className="text-sm text-ink/70 leading-relaxed mb-6">
                         Barro cozido não esmaltado. Permite que a água e o ar passem pelas paredes.
                      </p>
                      <ul className="space-y-2 mb-6">
                         <li className="flex items-center gap-2 text-xs font-mono uppercase text-ink/50">
                            <span className="material-symbols-outlined text-sm">check</span> Ideal para Cactos/Suculentas
                         </li>
                         <li className="flex items-center gap-2 text-xs font-mono uppercase text-ink/50">
                            <span className="material-symbols-outlined text-sm">check</span> Secagem Rápida
                         </li>
                      </ul>
                   </div>
                </div>

                {/* Card 2 */}
                <div className="group relative bg-[#FDFBF7] border border-ink/10 hover:border-gold/50 transition-all duration-500 overflow-hidden">
                   <div className="h-48 relative overflow-hidden">
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${VASE_CERAMIC}')` }}></div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-ink backdrop-blur-sm">Cerâmica Esmaltada</div>
                   </div>
                   <div className="p-8">
                      <h4 className="font-serif text-2xl mb-3 group-hover:text-gold-dark transition-colors">Retenção & Estilo</h4>
                      <p className="text-sm text-ink/70 leading-relaxed mb-6">
                         Barro selado com vidro fundido. Retém a umidade e oferece variedade estética infinita.
                      </p>
                      <ul className="space-y-2 mb-6">
                         <li className="flex items-center gap-2 text-xs font-mono uppercase text-ink/50">
                            <span className="material-symbols-outlined text-sm">check</span> Ideal para Tropicais
                         </li>
                         <li className="flex items-center gap-2 text-xs font-mono uppercase text-ink/50">
                            <span className="material-symbols-outlined text-sm">check</span> Menor Frequência de Rega
                         </li>
                      </ul>
                   </div>
                </div>

                {/* Card 3 */}
                <div className="group relative bg-[#FDFBF7] border border-ink/10 hover:border-gold/50 transition-all duration-500 overflow-hidden">
                   <div className="h-48 relative overflow-hidden">
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${VASE_TECH}')` }}></div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <div className="absolute bottom-4 left-4 bg-ink text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest backdrop-blur-sm">Compósito/Técnico</div>
                   </div>
                   <div className="p-8">
                      <h4 className="font-serif text-2xl mb-3 group-hover:text-gold-dark transition-colors">Leveza Moderna</h4>
                      <p className="text-sm text-ink/70 leading-relaxed mb-6">
                         Polímeros, fibra de vidro ou concreto leve. Durabilidade extrema e peso reduzido.
                      </p>
                      <ul className="space-y-2 mb-6">
                         <li className="flex items-center gap-2 text-xs font-mono uppercase text-ink/50">
                            <span className="material-symbols-outlined text-sm">check</span> Grandes Espécimes
                         </li>
                         <li className="flex items-center gap-2 text-xs font-mono uppercase text-ink/50">
                            <span className="material-symbols-outlined text-sm">check</span> Uso Interno/Externo
                         </li>
                      </ul>
                   </div>
                </div>
             </div>
          </div>

          {/* 4. Anatomy Blueprint */}
          <div className="bg-ink text-paper p-8 md:p-16 rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                  <div className="flex-1">
                      <span className="text-gold font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Engenharia Botânica</span>
                      <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Anatomia do<br/>Plantio Perfeito</h2>
                      <p className="font-alt text-lg text-white/70 leading-relaxed mb-8 max-w-md">
                          Um vaso saudável é um ecossistema em camadas. Negligenciar a base é convidar o desastre fúngico.
                      </p>
                      
                      <div className="space-y-4">
                          {[
                              { label: 'Zona da Raiz', val: '60%', desc: 'Área livre para expansão e absorção de nutrientes.' },
                              { label: 'Zona de Tampão', val: '20%', desc: 'Margem de segurança para evitar compactação.' },
                              { label: 'Zona de Drenagem', val: '20%', desc: 'Camada crítica para fluxo de água.' }
                          ].map((stat, idx) => (
                              <div key={idx} className="flex items-center gap-4 border-b border-white/10 pb-4">
                                  <span className="font-mono text-2xl text-gold">{stat.val}</span>
                                  <div>
                                      <h5 className="font-sans font-bold text-xs uppercase tracking-widest text-white">{stat.label}</h5>
                                      <p className="text-xs text-white/50">{stat.desc}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* Diagram Visual */}
                  <div className="flex-1 w-full max-w-md">
                      <div className="relative border-2 border-white/30 h-[500px] w-full rounded-b-[4rem] p-2 flex flex-col justify-end backdrop-blur-sm bg-white/5">
                          
                          {/* Arrows/Labels */}
                          <div className="absolute -right-4 md:-right-12 top-20 flex items-center gap-2">
                              <span className="w-8 md:w-12 h-px bg-gold"></span>
                              <span className="font-mono text-[10px] uppercase text-gold">Borda de Rega (2cm)</span>
                          </div>

                          {/* Layers */}
                          <div className="w-full flex-1 border-t border-dashed border-white/20 bg-gradient-to-b from-transparent to-[#4a3b32]/40 relative group">
                              <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif text-4xl opacity-0 group-hover:opacity-100 transition-opacity select-none">Flora</div>
                          </div>
                          
                          <div className="w-full h-32 border-t border-dashed border-white/20 bg-[#5d4a3c]/60 flex items-center justify-center relative hover:bg-[#5d4a3c]/80 transition-colors cursor-help">
                              <span className="font-mono text-xs uppercase tracking-widest text-white/80">Substrato Orgânico</span>
                              <div className="absolute left-4 top-4 text-[10px] text-white/40">III.</div>
                          </div>
                          
                          <div className="w-full h-8 border-t border-dashed border-white/20 bg-white/20 flex items-center justify-center relative hover:bg-white/30 transition-colors">
                              <span className="font-mono text-[10px] uppercase tracking-widest text-white/80">Manta Bidim</span>
                              <div className="absolute left-4 top-2 text-[10px] text-white/40">II.</div>
                          </div>
                          
                          <div className="w-full h-20 border-t border-dashed border-white/20 bg-stone-500/50 rounded-b-[3.5rem] flex items-center justify-center relative hover:bg-stone-500/70 transition-colors">
                               <span className="font-mono text-xs uppercase tracking-widest text-white/80">Argila Expandida</span>
                               <div className="absolute left-4 top-4 text-[10px] text-white/40">I.</div>
                               {/* Hole */}
                               <div className="absolute bottom-0 w-8 h-4 bg-ink rounded-t-full border-t border-white/30 mb-2"></div>
                          </div>

                      </div>
                      <div className="text-center mt-6">
                          <p className="font-serif italic text-white/60">Fig 2.1 - Corte Transversal Ideal</p>
                      </div>
                  </div>
              </div>
          </div>

          {/* 5. Form Guide */}
          <div className="mt-32 grid md:grid-cols-2 gap-12">
             <div className="border border-gold/20 p-8 bg-[#FDFBF7]">
                <div className="flex justify-between items-start mb-6">
                   <h4 className="font-serif text-2xl text-ink">Forma Cilíndrica</h4>
                   <span className="material-symbols-outlined text-gold">crop_portrait</span>
                </div>
                <p className="font-alt text-lg text-ink/70 mb-4">
                   Paredes retas maximizam o volume do solo. Ideal para plantas com raízes profundas e pivotantes (ex: Ficus, Árvores pequenas).
                </p>
                <div className="w-full h-px bg-gold/20 my-4"></div>
                <span className="font-mono text-xs uppercase tracking-widest text-gold-dark">Estabilidade: Alta</span>
             </div>

             <div className="border border-gold/20 p-8 bg-[#FDFBF7]">
                <div className="flex justify-between items-start mb-6">
                   <h4 className="font-serif text-2xl text-ink">Forma Cônica/Bacia</h4>
                   <span className="material-symbols-outlined text-gold">all_inclusive</span>
                </div>
                <p className="font-alt text-lg text-ink/70 mb-4">
                   Boca larga e fundo raso. Perfeito para raízes fibrosas superficiais e rizomas (ex: Samambaias, Suculentas, Bonsai).
                </p>
                <div className="w-full h-px bg-gold/20 my-4"></div>
                <span className="font-mono text-xs uppercase tracking-widest text-gold-dark">Evaporação: Rápida</span>
             </div>
          </div>

       </div>
    </div>
  );
};

export default Vases;