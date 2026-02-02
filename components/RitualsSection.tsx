import React from 'react';
import { RITUALS, CARE_HERO } from '../constants';

const RitualsSection: React.FC = () => {
  return (
    <section id="rituals" className="relative bg-paper text-charcoal font-sans min-h-screen overflow-hidden">
      {/* Background Image Header */}
      <div className="relative h-[45vh] md:h-[55vh] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('${CARE_HERO}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-paper"></div>
        
        <div className="container absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-24 flex flex-col justify-end h-full z-10">
            <div className="flex items-center gap-3 text-white/90 font-mono text-[10px] uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full border border-white bg-transparent"></span>
                <span>Módulo 02: Manutenção</span>
            </div>
            <h1 className="text-fluid-h2 font-serif font-light text-white leading-none drop-shadow-md tracking-tighter">
                Rituais de Luminosidade & <br/><span className="italic text-gold-light font-medium">Hidratação</span>
            </h1>
        </div>
      </div>

      <div className="container relative z-10 py-20 md:py-32 flex flex-col gap-32">
        
        {/* Intro */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 pb-12 border-b border-gold/10">
            <p className="text-charcoal/80 font-serif text-2xl max-w-3xl leading-relaxed">
                Instruções de calibração de precisão para iluminação atmosférica e níveis de umidade. <span className="text-sage italic">A observação diária é a ferramenta mais valiosa do curador.</span>
            </p>
            <button className="group flex items-center justify-center gap-3 px-8 py-4 border border-charcoal/5 hover:border-gold transition-all bg-white hover:bg-[#F2EFE9] shadow-sm whitespace-nowrap">
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-gold">Salvar Guia</span>
                <span className="material-symbols-outlined text-sm text-gray-400 group-hover:text-gold font-light">download</span>
            </button>
        </div>

        {/* Luminosity Chart */}
        <div className="flex flex-col gap-12">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
                <div className="flex items-center gap-6">
                    <div className="size-16 border border-gold/20 rounded-full flex items-center justify-center bg-gold/5 shrink-0 text-gold-dark">
                        <span className="material-symbols-outlined text-3xl font-thin">light_mode</span>
                    </div>
                    <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-gold-dark mb-1 block">Fator Essencial</span>
                        <h2 className="text-4xl font-serif font-light text-charcoal tracking-tight">Espectro de Luz</h2>
                    </div>
                </div>
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest border border-gray-200 px-3 py-1 rounded-full">Unidade: Foot-Candles (FC)</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12">
                {/* Chart Visual */}
                <div className="lg:col-span-8 bg-white p-10 border border-gray-100 shadow-sm rounded-sm relative overflow-hidden">
                    <div className="flex justify-between items-end mb-16">
                        <h3 className="font-mono text-[10px] uppercase tracking-widest text-gray-400">Análise de Espectro</h3>
                        <div className="text-right">
                            <div className="text-4xl font-serif text-gold-dark">800 - 2000</div>
                            <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mt-1">Faixa Alvo (Lux)</div>
                        </div>
                    </div>
                    
                    <div className="relative py-8 px-4">
                         {/* Spectrum Line */}
                        <div className="h-px w-full bg-gradient-to-r from-charcoal/10 via-gold to-charcoal/10 relative">
                             <div className="absolute top-1/2 left-[60%] -translate-y-1/2 w-3 h-3 bg-gold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.8)] border border-white"></div>
                        </div>
                        
                        <div className="flex justify-between mt-8 text-center px-4">
                            {['Sombra', 'Luz Indireta', 'Luz Filtrada', 'Sol Pleno'].map((label, i) => (
                                <div key={i} className={`flex flex-col items-center ${i === 2 ? 'opacity-100' : 'opacity-40'}`}>
                                     <div className="w-px h-4 bg-charcoal/20 mb-3"></div>
                                     <span className={`font-mono text-[9px] uppercase tracking-widest ${i === 2 ? 'text-gold-dark font-bold' : 'text-charcoal'}`}>{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                     <div className="mt-12 pt-8 border-t border-dashed border-gray-100">
                        <p className="font-serif italic text-lg text-gray-400 text-center max-w-lg mx-auto leading-relaxed">
                            "O posicionamento ideal imita a luz solar filtrada de uma copa de floresta — difusa, consistente e suave."
                        </p>
                    </div>
                </div>

                {/* Legend */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                     {[
                         {zone: 'Zona A: Direta', icon: 'wb_sunny', desc: 'Radiação solar não filtrada. Necessária para espécies áridas.'},
                         {zone: 'Zona B: Indireta', icon: 'filter_drama', desc: 'O padrão ouro. A luz passa através de uma cortina transparente.', active: true},
                         {zone: 'Zona C: Baixa', icon: 'bedtime', desc: 'Iluminação ambiente longe das janelas.'}
                     ].map((item, idx) => (
                         <div key={idx} className={`p-8 border transition-all duration-500 group rounded-sm hover:translate-x-1 ${item.active ? 'bg-[#FDFBF7] border-gold/40' : 'bg-white border-transparent hover:border-gold/20 shadow-sm'}`}>
                             <div className="flex items-start justify-between mb-3">
                                <h4 className={`font-mono text-[10px] uppercase tracking-widest ${item.active ? 'text-gold-dark font-bold' : 'text-charcoal/60'}`}>{item.zone}</h4>
                                <span className={`material-symbols-outlined text-lg ${item.active ? 'text-gold' : 'text-gray-300'}`}>{item.icon}</span>
                             </div>
                             <p className="text-sm font-light text-charcoal/80 leading-relaxed">{item.desc}</p>
                         </div>
                     ))}
                </div>
            </div>
        </div>

        {/* Hydration Rituals */}
        <div className="flex flex-col gap-12">
             <div className="flex items-end justify-between border-b border-gold/10 pb-6">
                <div className="flex items-center gap-6">
                    <div className="size-16 border border-gold/20 rounded-full flex items-center justify-center bg-gold/5 shrink-0 text-gold-dark">
                        <span className="material-symbols-outlined text-3xl font-thin">water_drop</span>
                    </div>
                    <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-gold-dark mb-1 block">Fator Vital</span>
                        <h2 className="text-4xl font-serif font-light text-charcoal tracking-tight">Hidratação</h2>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {RITUALS.map((ritual, idx) => (
                    <div key={ritual.id} className={`group relative p-10 transition-all duration-700 flex flex-col rounded-sm border ${idx === 1 ? 'bg-[#FDFBF7] border-gold/30' : 'bg-white border-gray-100 hover:border-gold/20 hover:shadow-lg'}`}>
                         <div className="mb-8 flex justify-between items-start">
                            <span className={`font-mono text-[9px] uppercase tracking-widest px-2 py-1 border ${idx === 1 ? 'text-gold-dark border-gold/30' : 'text-gray-400 border-gray-200'}`}>
                                {['Baixa', 'Média', 'Alta'][idx]} Frequência
                            </span>
                            <span className="material-symbols-outlined text-3xl text-gold/20 group-hover:text-gold/50 transition-colors">{ritual.icon}</span>
                         </div>
                         
                         <h3 className="text-2xl font-serif mb-6 text-charcoal group-hover:text-gold-dark transition-colors">{ritual.title}</h3>
                         
                         <p className="text-sm font-light text-gray-500 leading-loose mb-10 flex-grow border-l border-gray-100 pl-4 group-hover:border-gold/30 transition-colors">
                             {ritual.description}
                         </p>
                         
                         <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-6 group-hover:border-gold/10">
                            <span className={`font-mono text-[10px] uppercase tracking-widest ${idx === 1 ? 'text-gold-dark' : 'text-gray-400'}`}>{ritual.frequency}</span>
                            <span className="material-symbols-outlined text-lg text-gold-dark opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">arrow_right_alt</span>
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