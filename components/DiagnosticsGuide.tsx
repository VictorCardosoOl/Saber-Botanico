import React, { useState } from 'react';
import { DIAGNOSTICS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const DiagnosticsGuide: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(DIAGNOSTICS[0].id);
  const activeDiagnostic = DIAGNOSTICS.find(d => d.id === activeId) || DIAGNOSTICS[0];

  return (
    <section className="py-32 bg-forest-deep relative overflow-hidden text-paper">
      <div className="container relative z-10 px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
           <div className="max-w-2xl">
              <span className="text-gold font-mono text-[10px] uppercase tracking-widest-xl block mb-4">Clínica Botânica</span>
              <h2 className="text-5xl font-serif text-white mb-6 tracking-tight">Diagnóstico Visual</h2>
              <p className="text-white/60 font-light leading-relaxed">
                 As plantas se comunicam através de sinais silenciosos. Identifique o sintoma para acessar o protocolo de recuperação.
              </p>
           </div>
           <div className="hidden md:block">
              <span className="material-symbols-outlined text-4xl text-white/10">local_hospital</span>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Sidebar / Menu */}
            <div className="lg:col-span-4 flex flex-col">
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-6 pl-4 border-l border-white/10">Sintomatologia</h3>
                <div className="space-y-2">
                    {DIAGNOSTICS.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveId(item.id)}
                            className={`w-full text-left px-6 py-5 border-l-2 transition-all duration-300 flex items-center justify-between group ${
                                activeId === item.id 
                                ? 'border-gold bg-white/[0.03]' 
                                : 'border-white/10 hover:border-white/30 hover:bg-white/[0.01]'
                            }`}
                        >
                            <span className={`font-serif text-lg tracking-wide ${activeId === item.id ? 'text-white' : 'text-white/50 group-hover:text-white/80'}`}>
                                {item.title}
                            </span>
                            {activeId === item.id && (
                                <span className="material-symbols-outlined text-gold text-sm animate-pulse">arrow_right</span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Active Content Area - Card Style */}
            <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeDiagnostic.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-paper text-forest-dark rounded-sm overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                    >
                        {/* Image */}
                        <div className="w-full md:w-5/12 h-64 md:h-auto relative bg-gray-200">
                             <div 
                                className="absolute inset-0 bg-cover bg-center grayscale contrast-125"
                                style={{ backgroundImage: `url('${activeDiagnostic.imageUrl}')` }}
                             ></div>
                             <div className="absolute inset-0 bg-forest-dark/20 mix-blend-multiply"></div>
                             
                             <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                                <span className="inline-block px-2 py-1 bg-white/90 text-[9px] font-mono font-bold uppercase tracking-widest text-forest-dark backdrop-blur-sm">
                                    Fig. {activeDiagnostic.id}
                                </span>
                             </div>
                        </div>

                        {/* Text Content */}
                        <div className="w-full md:w-7/12 p-10 md:p-16 flex flex-col justify-center bg-paper relative">
                            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                                <span className="material-symbols-outlined text-9xl">medical_services</span>
                            </div>

                            <div className="mb-10 relative z-10">
                                <h4 className="font-mono text-[10px] uppercase tracking-widest text-gold-dark mb-2">
                                    Manifestação Visual
                                </h4>
                                <p className="text-3xl font-serif text-forest-dark italic mb-6">
                                    "{activeDiagnostic.visualCue}"
                                </p>
                                <p className="text-sm font-sans text-forest-dark/70 leading-relaxed border-l border-gold/30 pl-4">
                                    <strong className="text-forest-dark block text-xs uppercase tracking-wide mb-1">Diagnóstico:</strong>
                                    {activeDiagnostic.cause}
                                </p>
                            </div>

                            <div className="bg-forest-light/5 p-6 border border-forest-dark/5 relative z-10">
                                <h4 className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-forest-dark mb-3">
                                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                                    Protocolo de Correção
                                </h4>
                                <p className="text-base font-light text-forest-dark leading-loose">
                                    {activeDiagnostic.solution}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

        </div>
      </div>
    </section>
  );
};

export default DiagnosticsGuide;