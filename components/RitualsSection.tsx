import React from 'react';
import { RITUALS, CARE_HERO } from '../constants';

const RitualsSection: React.FC = () => {
  return (
    <section id="rituals" className="relative bg-[#FDFBF7] text-charcoal font-sans min-h-screen overflow-hidden">
      {/* Background Image Header - Altura responsiva */}
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('${CARE_HERO}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#FDFBF7]"></div>
        
        <div className="container absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-24 flex flex-col justify-end h-full">
            <div className="flex items-center gap-2 text-white/80 font-mono text-xs uppercase tracking-[0.2em] mb-4">
                <span className="w-2 h-2 rounded-full border border-gold bg-gold"></span>
                <span>Módulo 02: Manutenção</span>
            </div>
            <h1 className="text-fluid-h2 font-serif font-light text-white leading-none drop-shadow-lg">
                Rituais de Luminosidade & <br/><span className="italic text-gold-light">Hidratação</span>
            </h1>
        </div>
      </div>

      <div className="container relative z-10 py-16 md:py-24 flex flex-col gap-24">
        
        {/* Intro */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 pb-8 border-b border-gold/20">
            <p className="text-charcoal/70 font-light text-lg max-w-2xl leading-relaxed">
                Instruções de calibração de precisão para iluminação atmosférica e níveis de umidade, garantindo vitalidade botânica ideal. A observação diária é a ferramenta mais valiosa do curador.
            </p>
            <button className="group flex items-center justify-center gap-2 px-6 py-3 border border-charcoal/10 hover:border-gold transition-all bg-white hover:bg-[#F2EFE9] shadow-sm whitespace-nowrap">
                <span className="font-mono text-xs uppercase tracking-widest text-gray-500 group-hover:text-gold">Salvar Guia</span>
                <span className="material-symbols-outlined text-sm text-gray-400 group-hover:text-gold">download</span>
            </button>
        </div>

        {/* Luminosity Chart */}
        <div className="flex flex-col gap-10">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gray-200 pb-4 gap-4">
                <div className="flex items-center gap-4">
                    <div className="size-12 border border-gold/30 rounded-full flex items-center justify-center bg-gold/5 shrink-0">
                        <span className="material-symbols-outlined text-gold">light_mode</span>
                    </div>
                    <h2 className="text-fluid-h3 font-serif font-light text-charcoal">Espectro de Luminosidade</h2>
                </div>
                <span className="font-mono text-xs text-gold uppercase tracking-widest">Unidade: Foot-Candles (FC)</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-10">
                {/* Chart Visual */}
                <div className="lg:col-span-8 bg-white p-8 border border-gray-200 relative overflow-hidden group hover:border-gold/30 transition-colors shadow-sm rounded-sm">
                    <div className="flex justify-between items-end mb-12">
                        <h3 className="font-mono text-sm uppercase tracking-widest text-gray-400">Análise de Espectro</h3>
                        <div className="text-right">
                            <div className="text-3xl font-serif text-gold">800 - 2000</div>
                            <div className="text-xs font-mono text-gray-400 uppercase">Faixa Alvo (Lux)</div>
                        </div>
                    </div>
                    
                    <div className="relative py-10 px-2 overflow-x-auto">
                         {/* Spectrum Line */}
                        <div className="h-px w-full min-w-[300px] bg-gradient-to-r from-charcoal/20 via-gold to-charcoal/20"></div>
                        <div className="absolute top-0 w-full min-w-[300px] h-full pointer-events-none flex justify-between px-0 text-center">
                            {['Baixa', 'Média', 'Indireta', 'Sol Direto'].map((label, i) => (
                                <div key={i} className={`relative flex flex-col items-center mt-6 ${i === 2 ? '-translate-y-4' : ''}`}>
                                     {i === 2 ? (
                                        <>
                                            <div className="size-3 rounded-full border border-gold bg-gold shadow-[0_0_15px_rgba(197,160,40,0.6)] mb-2 z-10"></div>
                                            <div className="w-px h-6 bg-gold mb-2"></div>
                                            <span className="font-mono text-xs uppercase tracking-widest text-gold font-bold">{label}</span>
                                        </>
                                     ) : (
                                         <>
                                            <div className="w-px h-4 bg-charcoal/20 mb-2"></div>
                                            <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">{label}</span>
                                         </>
                                     )}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                     <div className="mt-8 border-t border-dashed border-gray-200 pt-6">
                        <p className="font-serif italic text-lg text-gray-500 text-center max-w-lg mx-auto">
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
                         <div key={idx} className={`p-6 border transition-all duration-300 group rounded-sm ${item.active ? 'bg-[#F2EFE9] border-gold/30' : 'bg-white border-gray-200 hover:border-gold/50'}`}>
                             <div className="flex items-start justify-between mb-4">
                                <h4 className={`font-mono text-xs uppercase tracking-widest ${item.active ? 'text-gold font-bold' : 'text-charcoal'}`}>{item.zone}</h4>
                                <span className={`material-symbols-outlined ${item.active ? 'text-gold' : 'text-gray-400'}`}>{item.icon}</span>
                             </div>
                             <p className="text-sm font-light text-charcoal leading-relaxed">{item.desc}</p>
                         </div>
                     ))}
                </div>
            </div>
        </div>

        {/* Hydration Rituals */}
        <div className="flex flex-col gap-10">
             <div className="flex items-baseline justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center gap-4">
                    <div className="size-12 border border-gold/30 rounded-full flex items-center justify-center bg-gold/5 shrink-0">
                        <span className="material-symbols-outlined text-gold">water_drop</span>
                    </div>
                    <h2 className="text-fluid-h3 font-serif font-light text-charcoal">Rituais de Hidratação</h2>
                </div>
                <span className="font-mono text-xs text-gold uppercase tracking-widest hidden sm:block">Sensor: Higrômetro</span>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {RITUALS.map((ritual, idx) => (
                    <div key={ritual.id} className={`group relative border p-8 transition-all duration-500 flex flex-col rounded-sm ${idx === 1 ? 'bg-[#F2EFE9] border-gold/40' : 'bg-white border-gray-200 hover:border-gold/40 hover:shadow-lg'}`}>
                         <div className="absolute top-6 right-6 opacity-20">
                            <span className="material-symbols-outlined text-4xl text-gold">{ritual.icon}</span>
                         </div>
                         <div className="mb-6">
                            <span className={`font-mono text-[10px] uppercase tracking-[0.2em] px-2 py-1 ${idx === 1 ? 'text-gold-dark border border-gold/30 bg-white/50' : 'text-gray-400 border border-gray-200'}`}>
                                Frequência: {['Baixa', 'Média', 'Alta'][idx]}
                            </span>
                         </div>
                         <h3 className={`text-2xl font-serif mb-4 ${idx === 1 ? 'text-gold-dark' : 'text-charcoal group-hover:text-gold'}`}>{ritual.title}</h3>
                         <div className="w-8 h-px bg-gold mb-6"></div>
                         <p className="text-sm font-light text-gray-500 leading-relaxed mb-8 flex-grow">
                             {ritual.description}
                         </p>
                         <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest ${idx === 1 ? 'text-gold-dark font-bold' : 'text-gold'}`}>
                            <span>{ritual.frequency}</span>
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
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