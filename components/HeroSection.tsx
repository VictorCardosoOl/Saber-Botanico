import React from 'react';
import { HERO_IMAGE } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col pt-24 pb-12 overflow-hidden bg-forest-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-20"></div>
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-32">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col-reverse lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col gap-10 flex-1 lg:max-w-[50%] z-10 animate-fade-in-up">
            <div className="flex flex-col gap-6 text-left">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-[1px] w-12 bg-gold/50"></div>
                <span className="text-gold text-xs font-serif italic tracking-wider">A Coleção Privada</span>
              </div>
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.1] tracking-[-0.01em]">
                Cultivando <br/>
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">Arte Viva</span>
              </h1>
              <h2 className="text-sage text-lg font-light leading-relaxed mt-4 max-w-[500px] font-sans border-l border-gold/20 pl-6">
                Experimente o epítome do luxo botânico. Guias curados para a flora mais rara, projetados para o conhecedor moderno.
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-4">
              <button className="group flex min-w-[180px] cursor-pointer items-center justify-center rounded-sm h-14 px-8 border border-gold/60 hover:bg-gold/10 hover:border-gold-light transition-all text-gold-light text-sm font-sans uppercase tracking-[0.1em]">
                <span className="mr-3">Explorar Galeria</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-sm h-14 px-8 text-sage hover:text-white transition-colors text-sm font-sans uppercase tracking-[0.1em] border-b border-transparent hover:border-gold/50">
                Concierge de Cuidados
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="text-xs text-gold/60 uppercase tracking-[0.2em] mb-4">Destaque Em</p>
              <div className="flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="font-serif text-xl italic text-white">Vogue Living</span>
                <span className="font-serif text-xl font-bold text-white">AD</span>
                <span className="font-sans text-lg font-bold tracking-widest text-white">ELLE DECOR</span>
                <span className="font-serif text-xl text-white">Monocle</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full flex-1 lg:h-auto flex justify-center lg:justify-end group perspective-1000">
            <div className="absolute -inset-4 border border-gold/20 rounded-t-[10rem] rounded-b-xl translate-x-4 translate-y-4 z-0"></div>
            <div className="relative z-10 w-full overflow-hidden rounded-t-[10rem] rounded-b-xl shadow-2xl shadow-black/80 aspect-[4/5] border border-white/5 bg-forest-dark">
              <div 
                className="w-full h-full bg-center bg-no-repeat bg-cover transform transition-transform duration-[2s] group-hover:scale-105" 
                style={{backgroundImage: `url("${HERO_IMAGE}")`, filter: 'brightness(0.9) contrast(1.1)'}}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 glass-panel border-t border-white/10">
                <div className="flex items-end justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-gold uppercase tracking-[0.25em]">Espécime Raro</span>
                    <span className="text-2xl font-serif italic text-white">Monstera Albo</span>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-0.5 border border-white/20 text-[10px] text-white/70 uppercase tracking-wider rounded-sm">Variegata</span>
                      <span className="px-2 py-0.5 border border-white/20 text-[10px] text-white/70 uppercase tracking-wider rounded-sm">Interior</span>
                    </div>
                  </div>
                  <button className="size-12 rounded-full border border-gold/50 text-gold hover:bg-gold hover:text-forest-dark transition-all flex items-center justify-center">
                    <span className="material-symbols-outlined font-light">arrow_outward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Footer Grid */}
      <div className="mt-auto px-6 md:px-16 lg:px-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-white/5">
          {[
            {icon: 'verified', title: 'Autenticidade', desc: 'Linhagem verificada por IA.'},
            {icon: 'water_drop', title: 'Hidratação', desc: 'Cronogramas de precisão.'},
            {icon: 'wb_twilight', title: 'Iluminação', desc: 'Análises ideais.'},
            {icon: 'auto_stories', title: 'Arquivo', desc: 'Índice botânico mestre.'}
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col gap-3 p-4 hover:bg-white/5 transition-colors rounded-sm cursor-default group">
              <span className="material-symbols-outlined text-gold text-2xl font-light group-hover:scale-110 transition-transform origin-left">{item.icon}</span>
              <div>
                <h3 className="font-sans text-gold-light text-xs font-bold uppercase tracking-wider mb-1">{item.title}</h3>
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