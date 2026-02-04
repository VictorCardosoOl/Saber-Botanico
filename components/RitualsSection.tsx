import React from 'react';
import { RITUALS, CARE_HERO } from '../constants';
import { motion } from 'framer-motion';
import { Reveal } from './Animation';

const RitualsSection: React.FC = () => {
  return (
    <section id="rituals" className="relative bg-forest-dark text-paper font-sans min-h-screen overflow-hidden">
      
      {/* Editorial Header */}
      <div className="relative h-[60vh] w-full overflow-hidden flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity" 
          style={{ backgroundImage: `url('${CARE_HERO}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest-dark/80 to-transparent"></div>
        
        <div className="container relative z-10 px-6">
            <Reveal>
                <div className="flex items-center gap-3 text-gold/80 font-mono text-[10px] uppercase tracking-widest mb-6">
                    <span className="w-12 h-px bg-gold/50"></span>
                    <span>Módulo 02: Manutenção</span>
                </div>
                <h1 className="text-fluid-h1 font-serif font-light text-white leading-[0.9] tracking-tighter max-w-4xl">
                    Rituais de <br/>
                    <span className="italic text-gold ml-20">Preservação</span>
                </h1>
            </Reveal>
        </div>
      </div>

      <div className="container relative z-10 py-24 md:py-32 flex flex-col gap-40 px-6">
        
        {/* LUMINOSITY INSTRUMENT PANEL */}
        <div className="flex flex-col gap-16">
            <Reveal className="flex justify-between items-end border-b border-white/10 pb-6">
                <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gold-dark mb-2 block">Parâmetro 01</span>
                    <h2 className="text-4xl font-serif font-light text-white tracking-tight">Espectro de Luz</h2>
                </div>
                <div className="hidden md:block">
                     <span className="font-mono text-[10px] text-white/30 uppercase border border-white/10 px-3 py-1 rounded-full">Output: Foot-Candles (FC)</span>
                </div>
            </Reveal>

            <div className="grid lg:grid-cols-12 gap-12">
                {/* Chart Visual - Dark Mode UI */}
                <div className="lg:col-span-8 bg-white/[0.02] border border-white/5 p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
                    {/* Background Grid Lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                    <div className="relative z-10 flex justify-between items-end mb-20">
                        <h3 className="font-mono text-[10px] uppercase tracking-widest text-white/40">Análise de Fótons</h3>
                        <div className="text-right">
                            <div className="text-5xl font-serif text-gold tabular-nums">1.2k</div>
                            <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest mt-1">Lúmens Ideais</div>
                        </div>
                    </div>
                    
                    <div className="relative py-8">
                         {/* Gradient Spectrum Bar */}
                        <div className="h-px w-full bg-gradient-to-r from-white/5 via-gold to-white/5 relative mb-2">
                             <motion.div 
                                initial={{ left: '0%' }}
                                whileInView={{ left: '60%' }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,1)]"
                             ></motion.div>
                        </div>
                        <div className="flex justify-between w-full text-[9px] font-mono uppercase text-white/20 tracking-widest">
                            <span>0 FC</span>
                            <span>500 FC</span>
                            <span>1000 FC</span>
                            <span>2000 FC+</span>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 mt-12 text-center">
                        {['Sombra', 'Indireta', 'Filtrada', 'Pleno'].map((label, i) => (
                            <div key={i} className={`pt-4 border-t ${i === 2 ? 'border-gold text-gold' : 'border-white/10 text-white/30'}`}>
                                 <span className="font-mono text-[9px] uppercase tracking-widest block">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Legend Cards */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                     {[
                         {zone: 'Zona A: Direta', desc: 'Radiação solar plena. Apenas para Cactáceas e suculentas adaptadas.'},
                         {zone: 'Zona B: Indireta', desc: 'O padrão ouro. Luz refletida ou difusa, ideal para 90% da coleção.', active: true},
                         {zone: 'Zona C: Penumbra', desc: 'Luz residual. Adequada para Zamioculcas e Sansevierias.'}
                     ].map((item, idx) => (
                         <div key={idx} className={`p-6 border transition-all duration-500 group ${item.active ? 'bg-white/[0.03] border-gold/30' : 'bg-transparent border-white/5 hover:border-white/20'}`}>
                             <div className="flex items-center gap-3 mb-2">
                                <span className={`w-1.5 h-1.5 rounded-full ${item.active ? 'bg-gold' : 'bg-white/10'}`}></span>
                                <h4 className={`font-mono text-[10px] uppercase tracking-widest ${item.active ? 'text-white' : 'text-white/50'}`}>{item.zone}</h4>
                             </div>
                             <p className="text-sm font-light text-white/60 leading-relaxed pl-5">{item.desc}</p>
                         </div>
                     ))}
                </div>
            </div>
        </div>

        {/* HYDRATION SYSTEM */}
        <div className="flex flex-col gap-12">
             <Reveal className="flex items-end justify-between border-b border-white/10 pb-6">
                <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gold-dark mb-2 block">Parâmetro 02</span>
                    <h2 className="text-4xl font-serif font-light text-white tracking-tight">Ciclos Hídricos</h2>
                </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                {RITUALS.map((ritual, idx) => (
                    <div key={ritual.id} className="group relative p-10 bg-forest-dark hover:bg-white/[0.02] transition-colors duration-500 flex flex-col">
                         <div className="mb-8 flex justify-between items-start opacity-50 group-hover:opacity-100 transition-opacity">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-gold-dark">
                                0{idx + 1}
                            </span>
                            <span className="material-symbols-outlined text-2xl text-white">{ritual.icon}</span>
                         </div>
                         
                         <h3 className="text-2xl font-serif mb-6 text-paper">{ritual.title}</h3>
                         
                         <p className="text-sm font-light text-white/50 leading-loose mb-10 flex-grow">
                             {ritual.description}
                         </p>
                         
                         <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-gold">{ritual.frequency}</span>
                         </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default RitualsSection;