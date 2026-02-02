import React from 'react';
import { HERO_IMAGE } from '../constants';

const HeroSection: React.FC = () => {
  return (
    // Usa min-h-[100svh] para lidar com a barra de endereço do mobile corretamente
    <section id="hero" className="relative min-h-[100svh] w-full flex flex-col pt-24 pb-12 overflow-hidden bg-forest-dark justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-30 mix-blend-overlay"></div>
      <div className="absolute -top-20 -right-20 w-[clamp(300px,40vw,600px)] h-[clamp(300px,40vw,600px)] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container relative z-10 flex-1 flex flex-col justify-center">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">
          
          {/* Text Content */}
          <div className="flex flex-col gap-10 lg:col-span-6 xl:col-span-5 z-10 animate-fade-in-up">
            <div className="flex flex-col gap-6 text-left">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8 bg-gold/60"></div>
                <span className="text-gold text-[10px] font-mono uppercase tracking-widest-xl">Coleção Privada</span>
              </div>
              
              {/* Tipografia Fluida via classe customizada no index.html */}
              <h1 className="text-white text-fluid-h1 font-serif font-light tracking-tighter">
                Cultivando <br/>
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark pr-4">Arte Viva</span>
              </h1>
              
              <h2 className="text-sage-light text-lg font-light leading-relaxed max-w-[480px] font-sans border-l border-gold/10 pl-6 tracking-wide">
                Experimente o epítome do luxo botânico. Guias curados para a flora mais rara, projetados para o conhecedor moderno.
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-6">
              <button className="group flex min-w-[180px] cursor-pointer items-center justify-center rounded-sm h-14 px-8 border border-gold/40 hover:bg-gold/5 hover:border-gold transition-all duration-500 text-gold-light text-xs font-mono uppercase tracking-widest">
                <span className="mr-3">Explorar Galeria</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform font-light">arrow_forward</span>
              </button>
              <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-sm h-14 px-8 text-sage hover:text-white transition-colors text-xs font-mono uppercase tracking-widest border-b border-transparent hover:border-gold/30">
                Concierge
              </button>
            </div>

            <div className="mt-8 lg:mt-16 pt-8 border-t border-white/5">
              <p className="text-[10px] text-gold/40 font-mono uppercase tracking-widest mb-6">Destaque Editorial</p>
              <div className="flex flex-wrap items-center gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                <span className="font-serif text-2xl italic text-white tracking-tighter">Vogue Living</span>
                <span className="font-serif text-2xl font-bold text-white tracking-tighter">AD</span>
                <span className="font-sans text-lg font-bold tracking-[0.2em] text-white">ELLE</span>
                <span className="font-serif text-2xl text-white tracking-tight">Monocle</span>
              </div>
            </div>
          </div>

          {/* Hero Image - Grid Placement */}
          <div className="relative w-full lg:col-span-6 lg:col-start-7 xl:col-start-7 flex justify-center lg:justify-end group perspective-1000">
            <div className="relative w-full max-w-[500px] lg:max-w-full aspect-[4/5]">
               <div className="absolute inset-0 border border-gold/10 rounded-t-[10rem] rounded-b-sm translate-x-4 translate-y-4 z-0 transition-transform duration-1000 group-hover:translate-x-2 group-hover:translate-y-2"></div>
               <div className="relative z-10 w-full h-full overflow-hidden rounded-t-[10rem] rounded-b-sm shadow-2xl shadow-black/80 border border-white/5 bg-forest-dark">
                  <div 
                    className="w-full h-full bg-center bg-no-repeat bg-cover transform transition-transform duration-[2s] ease-out group-hover:scale-105" 
                    style={{backgroundImage: `url("${HERO_IMAGE}")`, filter: 'brightness(0.85) contrast(1.05) saturate(0.9)'}}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-transparent"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 glass-panel border-t border-white/5 backdrop-blur-xl">
                    <div className="flex items-end justify-between">
                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-bold text-gold uppercase tracking-widest-xl">Espécime Raro</span>
                        <span className="text-3xl font-serif italic text-white tracking-tighter">Monstera Albo</span>
                        <div className="flex gap-2 mt-1">
                          <span className="px-2 py-0.5 border border-white/10 text-[9px] text-white/60 uppercase tracking-widest rounded-sm">Variegata</span>
                          <span className="px-2 py-0.5 border border-white/10 text-[9px] text-white/60 uppercase tracking-widest rounded-sm">Interior</span>
                        </div>
                      </div>
                      <button className="size-10 md:size-12 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-forest-dark transition-all duration-500 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined font-light text-xl">arrow_outward</span>
                      </button>
                    </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Footer Grid */}
      <div className="mt-12 lg:mt-auto container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-white/5">
          {[
            {icon: 'verified', title: 'Autenticidade', desc: 'Linhagem verificada.'},
            {icon: 'water_drop', title: 'Hidratação', desc: 'Cronogramas de precisão.'},
            {icon: 'wb_twilight', title: 'Iluminação', desc: 'Análises espectrais.'},
            {icon: 'auto_stories', title: 'Arquivo', desc: 'Índice mestre.'}
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col gap-3 p-4 hover:bg-white/5 transition-colors rounded-sm cursor-default group">
              <span className="material-symbols-outlined text-gold/80 text-2xl font-light group-hover:scale-110 transition-transform origin-left">{item.icon}</span>
              <div>
                <h3 className="font-mono text-gold-light text-[10px] font-bold uppercase tracking-widest mb-1">{item.title}</h3>
                <p className="text-[10px] text-sage font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;