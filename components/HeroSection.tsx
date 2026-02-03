import React from 'react';
import { HERO_IMAGE } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-forest-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none z-20"></div>
      
      {/* Organic Light Blurs */}
      <div className="absolute top-0 right-0 w-[50vw] h-[80vh] bg-gradient-to-b from-gold/5 to-transparent blur-[120px] pointer-events-none opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[60vh] bg-forest-light/10 blur-[100px] pointer-events-none"></div>

      <div className="container relative z-10 h-full flex flex-col justify-center items-center">
        
        {/* Main Composition */}
        <div className="relative w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-0 mt-8 lg:mt-0">
          
          {/* Text Layer - Left but overlapping */}
          <div className="relative z-20 lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mix-blend-normal">
             <div className="inline-flex items-center gap-3 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <span className="w-2 h-2 rounded-full border border-gold/50"></span>
                <span className="text-gold/80 text-[10px] font-mono uppercase tracking-[0.3em]">Série Botânica N.01</span>
             </div>

             <h1 className="font-serif text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] text-paper tracking-tighter mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
               Natureza <br/>
               <span className="italic font-light text-gold-light opacity-90 ml-4 lg:ml-12 block transform lg:-translate-x-4">Esculpida</span>
             </h1>

             <p className="max-w-md font-sans text-sm md:text-base font-light text-sage-light leading-loose tracking-wide mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Uma exploração digital da flora rara. Onde a ciência biológica encontra a estética do silêncio.
             </p>

             <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <button className="relative overflow-hidden group px-8 py-4 bg-transparent border border-paper/20 rounded-full hover:border-gold/50 transition-colors">
                   <span className="relative z-10 text-[10px] font-mono uppercase tracking-widest text-paper group-hover:text-gold transition-colors">Entrar na Galeria</span>
                   <div className="absolute inset-0 bg-white/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                </button>
             </div>
          </div>

          {/* Image Layer - Right / Asymmetric */}
          <div className="relative z-10 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full max-w-[400px] lg:max-w-[480px] aspect-[3/4] group">
             {/* Decorative Lines */}
             <div className="absolute -top-12 -right-12 w-full h-full border border-white/5 rounded-t-full rounded-b-full hidden lg:block animate-pulse-subtle"></div>
             
             {/* Main Image Container */}
             <div className="relative w-full h-full overflow-hidden rounded-t-[200px] rounded-b-[10px] shadow-2xl shadow-black/50">
                <div 
                  className="w-full h-full bg-cover bg-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s] ease-out"
                  style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
                ></div>
                {/* Texture Overlay on Image */}
                <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 to-transparent opacity-60"></div>
                
                {/* Floating Caption inside image */}
                <div className="absolute bottom-8 left-0 w-full text-center">
                   <p className="font-serif italic text-2xl text-white/90">Monstera Albo</p>
                   <p className="font-mono text-[9px] uppercase tracking-widest text-white/50 mt-1">Variegata . 2024</p>
                </div>
             </div>

             {/* Floating "Badge" Element */}
             <div className="absolute -bottom-6 -left-6 lg:bottom-12 lg:-left-12 size-24 md:size-32 bg-forest-deep rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md shadow-xl animate-spin-slow">
                <svg className="w-full h-full p-2" viewBox="0 0 100 100">
                   <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                   <text className="text-[10px] uppercase font-mono tracking-[0.3em] fill-gold-light">
                      <textPath href="#curve">
                         Curadoria . Botânica . Rituais .
                      </textPath>
                   </text>
                </svg>
                <span className="material-symbols-outlined absolute text-gold text-2xl">spa</span>
             </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 mix-blend-difference animate-bounce">
           <span className="text-[9px] font-mono uppercase tracking-widest text-paper">Explorar</span>
           <span className="h-12 w-px bg-paper"></span>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;