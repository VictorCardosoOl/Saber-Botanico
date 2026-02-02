import React from 'react';

const AnatomyDiagram: React.FC = () => {
  return (
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
  );
};

export default AnatomyDiagram;