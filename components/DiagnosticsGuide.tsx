import React, { useState } from 'react';
import { DIAGNOSTICS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const DiagnosticsGuide: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(DIAGNOSTICS[0].id);

  const activeDiagnostic = DIAGNOSTICS.find(d => d.id === activeId) || DIAGNOSTICS[0];

  return (
    <section className="py-24 bg-paper relative overflow-hidden">
      <div className="container relative z-10 px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <span className="text-gold-dark font-mono text-[10px] uppercase tracking-widest-xl block mb-4">Clínica Visual</span>
           <h2 className="text-fluid-h2 font-serif text-charcoal mb-6">Diagnóstico Interativo</h2>
           <p className="text-charcoal/60 font-light leading-relaxed">
              As plantas se comunicam através de sinais visuais. Selecione o sintoma que você observa para receber a prescrição do curador.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sidebar Menu - Symptoms */}
            <div className="lg:col-span-4 flex flex-col gap-3">
                <h3 className="font-mono text-xs uppercase tracking-widest text-charcoal/40 mb-4 px-2">Sintomas Observados</h3>
                {DIAGNOSTICS.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveId(item.id)}
                        className={`text-left px-6 py-4 rounded-sm border transition-all duration-300 flex items-center justify-between group ${
                            activeId === item.id 
                            ? 'bg-white border-gold/40 shadow-md translate-x-2' 
                            : 'bg-transparent border-transparent hover:bg-white/50 hover:border-charcoal/5'
                        }`}
                    >
                        <span className={`font-serif text-lg ${activeId === item.id ? 'text-charcoal' : 'text-charcoal/60'}`}>
                            {item.title}
                        </span>
                        <span className={`text-xs font-mono uppercase tracking-wider ${activeId === item.id ? 'text-gold-dark' : 'text-charcoal/40'}`}>
                            {activeId === item.id ? 'Selecionado' : 'Ver'}
                        </span>
                    </button>
                ))}
            </div>

            {/* Active Content Area */}
            <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeDiagnostic.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="bg-white rounded-sm shadow-xl border border-gold/10 overflow-hidden flex flex-col md:flex-row"
                    >
                        {/* Image */}
                        <div className="w-full md:w-5/12 h-64 md:h-auto relative bg-gray-100">
                             <div 
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url('${activeDiagnostic.imageUrl}')` }}
                             ></div>
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r"></div>
                             
                             <div className="absolute bottom-6 left-6 text-white">
                                <span className="inline-block px-2 py-1 border border-white/30 text-[10px] font-mono font-bold uppercase tracking-widest rounded-sm mb-2 backdrop-blur-sm">
                                    Sinal Clínico
                                </span>
                                <p className="font-serif text-2xl italic">{activeDiagnostic.visualCue}</p>
                             </div>
                        </div>

                        {/* Text Content */}
                        <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                            <div className="mb-8">
                                <h4 className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-gold-dark mb-3">
                                    <span className="material-symbols-outlined text-sm">search</span>
                                    Causa Provável
                                </h4>
                                <p className="text-lg font-serif text-charcoal leading-relaxed">
                                    {activeDiagnostic.cause}
                                </p>
                            </div>

                            <div className="bg-[#F9F7F2] p-6 rounded-sm border-l-2 border-sage">
                                <h4 className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-sage-dark mb-3">
                                    <span className="material-symbols-outlined text-sm">healing</span>
                                    Prescrição do Curador
                                </h4>
                                <p className="text-sm font-light text-charcoal/80 leading-loose">
                                    {activeDiagnostic.solution}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

        </div>
        
        <div className="mt-16 text-center">
           <p className="font-serif italic text-charcoal/40 text-lg">
              "A cura começa com a observação meticulosa."
           </p>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticsGuide;