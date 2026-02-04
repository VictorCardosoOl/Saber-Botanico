import React from 'react';
import { 
  ArrowUpRight, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Globe, 
  Mail,
  Leaf
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Mapeamento de ícones para as plataformas definidas em constants.ts
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram': return Instagram;
      case 'pinterest': return Linkedin; // Placeholder conforme design original
      case 'twitter': return Twitter;
      default: return Globe;
    }
  };

  return (
    <footer className="relative bg-premium-black text-stone-400 overflow-hidden font-sans selection:bg-stone-700 selection:text-white border-t border-white/5">
      
      {/* --- 1. Texture Layer (Noise) --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay z-0">
        <svg className='w-full h-full'>
            <filter id='noiseFilter'>
                <feTurbulence 
                    type='fractalNoise' 
                    baseFrequency='0.8' 
                    numOctaves='3' 
                    stitchTiles='stitch'
                />
            </filter>
            <rect width='100%' height='100%' filter='url(#noiseFilter)' />
        </svg>
      </div>

      {/* --- 2. Background Typography --- */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 leading-none">
        <span className="text-[22vw] font-serif font-bold text-premium-dark tracking-tighter mix-blend-color-dodge opacity-60 block translate-y-[5%]">
          SABER
        </span>
      </div>

      {/* --- 3. Main Content --- */}
      <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-12 pt-32 pb-24">
        
        {/* Top Border for Structure */}
        <div className="w-full h-px bg-white/10 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 lg:divide-x divide-white/5">
          
          {/* Col 1: Identity */}
          <div className="flex flex-col justify-between pr-8 min-h-[240px]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 mb-4 block">
                Est. {currentYear}
              </span>
              <div className="flex items-center gap-3 mb-2">
                 <Leaf className="w-6 h-6 text-gold" strokeWidth={1} />
                 <h2 className="text-3xl md:text-4xl font-serif text-stone-100 leading-tight">
                    Saber Botânico
                 </h2>
              </div>
              <p className="font-serif italic text-lg text-stone-500 font-light">
                Digital Arboretum
              </p>
            </div>
            <div className="mt-8 md:mt-0">
               <p className="text-xs text-stone-600 uppercase tracking-widest max-w-[200px]">
                 Cultivando conhecimento, uma folha de cada vez.
               </p>
            </div>
          </div>

          {/* Col 2: Location & CTA */}
          <div className="flex flex-col justify-between lg:px-8 min-h-[240px]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 mb-6 block">
                Estúdio
              </span>
              <address className="not-italic text-stone-300 leading-relaxed mb-6">
                Av. Paulista, 1000<br />
                São Paulo, SP — Brasil
              </address>
              <a 
                href="mailto:contato@saberbotanico.com" 
                className="group inline-flex items-center gap-2 text-stone-100 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="border-b border-stone-700 group-hover:border-white pb-0.5 transition-all">
                  contato@saberbotanico.com
                </span>
              </a>
            </div>
            
            <a href="#/glosario" className="group mt-8 inline-flex items-center justify-between w-full py-4 border-t border-white/10 hover:bg-white/5 transition-colors cursor-pointer active:scale-[0.99] duration-200">
              <span className="font-serif text-xl text-stone-200 group-hover:pl-2 transition-all duration-500">
                Iniciar Coleção
              </span>
              <div className="bg-white/10 rounded-full p-2 group-hover:bg-gold group-hover:text-premium-black transition-all duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </a>
          </div>

          {/* Col 3: Social Links */}
          <div className="flex flex-col lg:px-8 min-h-[240px]">
            <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 mb-6 block">
              Conexão
            </span>
            <ul className="space-y-4">
              {SOCIAL_LINKS.map((item) => {
                const Icon = getSocialIcon(item.platform);
                return (
                  <li key={item.platform}>
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center gap-4 group cursor-pointer"
                    >
                      <div className="p-2 border border-white/10 rounded-full group-hover:border-stone-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/5">
                        <Icon className="w-4 h-4 text-stone-500 group-hover:text-stone-100 transition-colors" />
                      </div>
                      <span className="text-sm font-medium text-stone-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                        {item.platform}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 4: Menu & Credits */}
          <div className="flex flex-col justify-between lg:pl-8 min-h-[240px]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 mb-6 block">
                Índice
              </span>
              <nav className="flex flex-col gap-3">
                {NAVIGATION_LINKS.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    className="text-lg text-stone-300 hover:text-white hover:translate-x-2 transition-transform duration-300 w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div className="mt-12 pt-4 border-t border-white/10">
               <div className="flex justify-between items-end">
                 <p className="text-[10px] text-stone-600 uppercase tracking-wider">
                   © {currentYear} Saber Botânico.
                 </p>
                 <span className="text-[10px] text-stone-700 hover:text-stone-500 cursor-pointer transition-colors">
                   Privacidade & Termos
                 </span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;