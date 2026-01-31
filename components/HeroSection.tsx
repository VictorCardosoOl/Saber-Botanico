import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="px-6 md:px-16 lg:px-32 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[1400px] flex-1">
        <div className="@container">
          <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-24 py-12 lg:py-24 items-center">
            
            {/* Text Content */}
            <div className="flex flex-col gap-10 flex-1 lg:max-w-[50%] z-10">
              <div className="flex flex-col gap-6 text-left">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-[1px] w-12 bg-primary/50"></div>
                  <span className="text-primary text-xs font-serif italic tracking-wider">The Private Collection</span>
                </div>
                <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.1] tracking-[-0.01em]">
                  Cultivating <br/>
                  <span className="italic text-gold-gradient font-normal">Living Art</span>
                </h1>
                <h2 className="text-text-muted text-lg font-light leading-relaxed mt-4 max-w-[500px] font-display border-l border-primary/20 pl-6">
                  Experience the epitome of botanical luxury. Curated guides for the rarest flora, designed for the modern connoisseur.
                </h2>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 mt-4">
                <Link to="/glosario" className="gold-border-btn group flex min-w-[180px] cursor-pointer items-center justify-center rounded-sm h-14 px-8 hover:scale-[1.02] transition-transform text-primary-light text-sm font-luxury uppercase tracking-[0.1em]">
                  <span className="mr-3">Explore Gallery</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link to="/cuidados" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-sm h-14 px-8 text-text-muted hover:text-white transition-colors text-sm font-luxury uppercase tracking-[0.1em] border-b border-transparent hover:border-primary/50">
                  <span className="truncate">Care Concierge</span>
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-xs text-primary/60 uppercase tracking-[0.2em] mb-4">Featured In</p>
                <div className="flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  <span className="font-serif text-xl italic text-white">Vogue Living</span>
                  <span className="font-serif text-xl font-bold text-white">AD</span>
                  <span className="font-display text-lg font-bold tracking-widest text-white">ELLE DECOR</span>
                  <span className="font-serif text-xl text-white">Monocle</span>
                </div>
              </div>
            </div>

            {/* Visual Image */}
            <div className="relative w-full flex-1 lg:h-auto flex justify-center lg:justify-end group perspective-1000">
              <div className="absolute -inset-4 border border-primary/20 rounded-t-[10rem] rounded-b-xl translate-x-4 translate-y-4 z-0"></div>
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="relative z-10 w-full overflow-hidden rounded-t-[10rem] rounded-b-xl shadow-2xl shadow-black/80 aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] border border-white/5">
                <div 
                  className="w-full h-full bg-center bg-no-repeat bg-cover transform transition-transform duration-1000 group-hover:scale-105" 
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGZbyvX8Kg4nE0OZTuAXQOkqnBZdCl2CCk2rSB06Q0FHRlGRVt9m_9ihDDnOr4ikBt8c9AQulAOJiKuRa0CA0gN-YdqfCwYmrfws1-IQrXRJL77p495xCM5IkSVB7DSsUHTCQBx61kD2Yb9x3wTznRi1QfrrGNWVQXRDsGDAM0hO2f4HzUK9a1DcPI98WiewC1gS6tbq7xWDhJ0MoQ_eVK2sKMlNGgwXel0u4_RZMK7m4HCcCdt0f-7gAVquzKG8EKRAHZT_m63PLj")',
                    filter: 'brightness(0.9) contrast(1.1)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 glass-card border-t border-white/10 backdrop-blur-xl">
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-[0.25em]">Rare Specimen</span>
                      <span className="text-2xl font-serif italic text-white">Monstera Albo</span>
                      <div className="flex gap-2 mt-2">
                        <span className="px-2 py-0.5 border border-white/20 text-[10px] text-white/70 uppercase tracking-wider rounded-sm">Variegated</span>
                        <span className="px-2 py-0.5 border border-white/20 text-[10px] text-white/70 uppercase tracking-wider rounded-sm">Indoor</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <button className="size-12 rounded-full border border-primary/50 text-primary hover:bg-primary hover:text-forest-dark transition-all flex items-center justify-center">
                        <span className="material-symbols-outlined font-light">arrow_outward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-8 opacity-60"></div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
            <div className="flex flex-col gap-3 p-6 border border-white/5 hover:border-primary/30 transition-colors bg-white/[0.02]">
              <span className="material-symbols-outlined text-primary text-2xl font-light">verified</span>
              <div>
                <h3 className="font-luxury text-primary-light text-sm uppercase tracking-wider mb-1">Authenticity</h3>
                <p className="text-xs text-text-muted font-light leading-relaxed">AI-verified botanical lineage identification.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-6 border border-white/5 hover:border-primary/30 transition-colors bg-white/[0.02]">
              <span className="material-symbols-outlined text-primary text-2xl font-light">water_drop</span>
              <div>
                <h3 className="font-luxury text-primary-light text-sm uppercase tracking-wider mb-1">Hydration</h3>
                <p className="text-xs text-text-muted font-light leading-relaxed">Precision watering schedules for elite flora.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-6 border border-white/5 hover:border-primary/30 transition-colors bg-white/[0.02]">
              <span className="material-symbols-outlined text-primary text-2xl font-light">wb_twilight</span>
              <div>
                <h3 className="font-luxury text-primary-light text-sm uppercase tracking-wider mb-1">Illumination</h3>
                <p className="text-xs text-text-muted font-light leading-relaxed">Optimal light positioning analytics.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-6 border border-white/5 hover:border-primary/30 transition-colors bg-white/[0.02]">
              <span className="material-symbols-outlined text-primary text-2xl font-light">auto_stories</span>
              <div>
                <h3 className="font-luxury text-primary-light text-sm uppercase tracking-wider mb-1">Archive</h3>
                <p className="text-xs text-text-muted font-light leading-relaxed">Access the complete master botanical index.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;