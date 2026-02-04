import React from 'react';

const AnatomyDiagram: React.FC = () => {
  return (
    <div className="relative border border-white/10 p-8 md:p-16 rounded-sm bg-forest-dark overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Text Side */}
            <div>
                <div className="inline-block px-3 py-1 border border-gold/30 rounded-full mb-8 bg-gold/5">
                    <span className="text-gold font-mono text-[10px] uppercase tracking-widest block">Engenharia de Sistemas</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-serif text-paper mb-10 tracking-tighter leading-none">
                    Corte Transversal <br/>
                    <span className="text-white/20 italic">do Ecossistema</span>
                </h2>
                
                <p className="font-sans font-light text-lg text-white/60 leading-loose mb-12 max-w-md border-l border-white/10 pl-6">
                    A estratificação correta do vaso simula o lençol freático natural. Cada camada desempenha uma função hidráulica específica.
                </p>
                
                <div className="space-y-8">
                    {[
                        { label: 'Zona Superior', func: 'Troca Gasosa', detail: 'Evaporação superficial e oxigenação.' },
                        { label: 'Núcleo Radicular', func: 'Nutrição', detail: 'Onde ocorre a troca catiônica (CTC).' },
                        { label: 'Base Drenante', func: 'Escoamento', detail: 'Prevenção de estagnação hídrica.' }
                    ].map((stat, idx) => (
                        <div key={idx} className="flex gap-6 group">
                            <span className="font-mono text-xl text-gold/40 group-hover:text-gold transition-colors">0{idx + 1}</span>
                            <div>
                                <h5 className="font-serif text-xl text-paper mb-1">{stat.label}</h5>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold-dark">{stat.func}</span>
                                    <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                                    <span className="text-xs text-white/40">{stat.detail}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Visual Diagram - Blueprint Style */}
            <div className="relative w-full aspect-[3/4] md:aspect-square flex items-center justify-center">
                 {/* Container Shape */}
                 <div className="relative w-64 h-96 border-2 border-white/20 border-t-0 rounded-b-[4rem] backdrop-blur-sm bg-white/[0.01] overflow-hidden group">
                      
                      {/* Layer 3: Soil */}
                      <div className="absolute top-0 w-full h-[60%] bg-[#8B5E3C] opacity-20 border-b border-white/10 group-hover:opacity-30 transition-opacity">
                         <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-mono text-[10px] text-white/30 tracking-widest rotate-90 md:rotate-0">SUBSTRATO</span>
                         </div>
                      </div>

                      {/* Layer 2: Filter */}
                      <div className="absolute bottom-[20%] w-full h-[5%] bg-white/10 border-y border-white/5 border-dashed"></div>

                      {/* Layer 1: Drainage */}
                      <div className="absolute bottom-0 w-full h-[20%] bg-stone-500/20 group-hover:bg-stone-500/30 transition-colors">
                         <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-mono text-[10px] text-white/30 tracking-widest rotate-90 md:rotate-0">ARGILA</span>
                         </div>
                      </div>

                      {/* Water Level Indicator (Animated) */}
                      <div className="absolute bottom-0 w-full h-2 bg-blue-400/50 animate-pulse"></div>
                 </div>

                 {/* Callout Lines */}
                 <div className="absolute top-20 right-10 md:right-20 w-12 h-px bg-white/20"></div>
                 <div className="absolute bottom-10 left-10 md:left-20 w-12 h-px bg-white/20"></div>
            </div>
        </div>
    </div>
  );
};

export default AnatomyDiagram;