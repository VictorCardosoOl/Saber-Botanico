import React from 'react';
import { DIAGNOSTICS } from '../constants';

const DiagnosticsGuide: React.FC = () => {
  return (
    <section className="py-24 bg-paper relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <span className="text-gold-dark font-mono text-[10px] uppercase tracking-widest-xl block mb-4">Clínica Visual</span>
           <h2 className="text-fluid-h2 font-serif text-charcoal mb-6">Diagnóstico Botânico</h2>
           <p className="text-charcoal/60 font-light leading-relaxed">
              As plantas se comunicam através de sinais visuais. Aprenda a ler a linguagem silenciosa das folhas para restaurar o equilíbrio do seu jardim.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {DIAGNOSTICS.map((item) => (
              <div key={item.id} className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gold/20">
                 {/* Image Area with Overlay */}
                 <div className="relative h-48 overflow-hidden">
                    <div 
                       className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                       style={{ backgroundImage: `url('${item.imageUrl}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-forest-dark/60 group-hover:bg-transparent transition-colors duration-500"></div>
                    
                    {/* Floating Label */}
                    <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                       <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-widest text-red-800 rounded-sm mb-2 shadow-sm">
                          {item.visualCue}
                       </span>
                       <h3 className="text-xl font-serif text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-md">
                          {item.title}
                       </h3>
                    </div>
                 </div>

                 <div className="p-6">
                    <div className="mb-6">
                       <h4 className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-gold-dark mb-2">
                          <span className="material-symbols-outlined text-sm">search</span>
                          Causa Provável
                       </h4>
                       <p className="text-sm font-light text-charcoal/80 leading-relaxed border-l-2 border-gold/20 pl-3">
                          {item.cause}
                       </p>
                    </div>

                    <div>
                       <h4 className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-sage-dark mb-2">
                          <span className="material-symbols-outlined text-sm">healing</span>
                          Prescrição
                       </h4>
                       <p className="text-sm font-medium text-charcoal leading-relaxed">
                          {item.solution}
                       </p>
                    </div>
                 </div>
              </div>
           ))}
        </div>
        
        <div className="mt-16 text-center">
           <p className="font-serif italic text-charcoal/40 text-lg">
              "A cura começa com a observação."
           </p>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticsGuide;