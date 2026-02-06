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

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram': return Instagram;
      case 'pinterest': return Linkedin;
      case 'twitter': return Twitter;
      default: return Globe;
    }
  };

  return (
    <footer className="relative bg-premium-black text-stone-400 overflow-hidden font-sans selection:bg-gold/30 selection:text-white border-t border-white/5">
      
      {/* --- 1. Deep Ambient Light (Backlight for Glass) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Blob Dourado Suave */}
          <div className="absolute top-0 right-1/4 w-[50vw] h-[50vw] bg-gold/5 rounded-full blur-[120px] mix-blend-screen opacity-20 animate-pulse-subtle"></div>
          {/* Blob Floresta Profunda */}
          <div className="absolute bottom-0 left-1/4 w-[60vw] h-[60vw] bg-forest-light/10 rounded-full blur-[150px] mix-blend-screen opacity-30"></div>
      </div>

      {/* --- 2. Submerged Typography (Liquid Distortion) --- */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 leading-none">
        {/* Aplicação da classe 'liquid-filter' para distorção orgânica no SVG global */}
        <span className="text-[25vw] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/[0.03] to-transparent tracking-tighter opacity-60 block translate-y-[15%] liquid-filter scale-y-125">
          SABER
        </span>
      </div>

      {/* --- 3. The Glass Surface (Overlay Layer) --- */}
      {/* Backdrop Blur alto cria a sensação de vidro fosco espesso sobre o texto e luzes */}
      <div className="relative z-10 backdrop-blur-[40px] bg-premium-black/40">
        
        {/* Inline Liquid Noise Texture */}
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none z-0">
            <svg className='w-full h-full'>
                <filter id='footerLiquidNoise'>
                    <feTurbulence 
                        type='fractalNoise' 
                        baseFrequency='0.65' 
                        numOctaves='4' 
                        stitchTiles='stitch'
                    />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width='100%' height='100%' filter='url(#footerLiquidNoise)' />
            </svg>
        </div>

        {/* --- Main Content --- */}
        <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-12 pt-40 pb-32">
          
          {/* Top Divider with subtle sheen */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-0 lg:divide-x divide-white/5">
            
            {/* Col 1: Identity */}
            <div className="flex flex-col justify-between pr-8 min-h-[240px] group/brand">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 mb-6 block border-l border-gold/20 pl-3">
                  Est. {currentYear}
                </span>
                <div className="flex items-center gap-4 mb-4">
                   <div className="p-3 rounded-full bg-white/[0.03] border border-white/5 group-hover/brand:border-gold/30 transition-colors duration-500 backdrop-blur-md">
                      <Leaf className="w-5 h-5 text-gold" strokeWidth={1} />
                   </div>
                   <h2 className="text-3xl font-serif text-stone-100 leading-tight tracking-tight">
                      Saber<br/>Botânico
                   </h2>
                </div>
              </div>
              <div>
                 <p className="font-serif italic text-lg text-stone-500 font-light mb-2">
                   Digital Arboretum
                 </p>
                 <p className="text-xs text-stone-600 uppercase tracking-widest max-w-[200px] leading-relaxed">
                   Cultivando conhecimento,<br/> uma folha de cada vez.
                 </p>
              </div>
            </div>

            {/* Col 2: Location & CTA */}
            <div className="flex flex-col justify-between lg:px-12 min-h-[240px]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 mb-6 block">
                  Estúdio
                </span>
                <address className="not-italic text-stone-300 leading-relaxed mb-6 font-light">
                  Av. Paulista, 1000<br />
                  São Paulo, SP — Brasil
                </address>
                <a 
                  href="mailto:contato@saberbotanico.com" 
                  className="group inline-flex items-center gap-2 text-stone-100 hover:text-white transition-colors duration-300"
                >
                  <div className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="border-b border-white/10 group-hover:border-gold/50 pb-0.5 transition-all text-sm tracking-wide">
                    contato@saberbotanico.com
                  </span>
                </a>
              </div>
              
              <a href="#/glosario" className="group mt-10 inline-flex items-center justify-between w-full p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all cursor-pointer rounded-sm backdrop-blur-sm shadow-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <span className="font-serif text-xl text-stone-200 group-hover:text-gold transition-colors duration-300">
                  Iniciar Coleção
                </span>
                <div className="bg-white/5 rounded-full p-2 group-hover:bg-gold group-hover:text-premium-black transition-all duration-300 rotate-0 group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            </div>

            {/* Col 3: Social Links */}
            <div className="flex flex-col lg:px-12 min-h-[240px]">
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 mb-8 block">
                Conexão
              </span>
              <ul className="space-y-6">
                {SOCIAL_LINKS.map((item) => {
                  const Icon = getSocialIcon(item.platform);
                  return (
                    <li key={item.platform}>
                      <a 
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center gap-4 group cursor-pointer w-fit"
                      >
                        <div className="relative">
                           <div className="absolute inset-0 bg-gold blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                           <div className="relative p-2 border border-white/10 rounded-full group-hover:border-gold/50 transition-all duration-300 bg-white/[0.02]">
                             <Icon className="w-4 h-4 text-stone-500 group-hover:text-gold transition-colors" strokeWidth={1.5} />
                           </div>
                        </div>
                        <span className="text-sm font-medium text-stone-400 group-hover:text-white group-hover:tracking-widest transition-all duration-500">
                          {item.platform}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Col 4: Menu & Credits */}
            <div className="flex flex-col justify-between lg:pl-12 min-h-[240px]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 mb-8 block">
                  Índice
                </span>
                <nav className="flex flex-col gap-4">
                  {NAVIGATION_LINKS.map((link) => (
                    <Link 
                      key={link.path} 
                      to={link.path}
                      className="text-lg font-serif text-stone-300 hover:text-gold hover:translate-x-2 transition-all duration-500 w-fit flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-gold transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
              
              <div className="mt-16 pt-6 border-t border-white/5">
                 <div className="flex flex-col gap-2">
                   <p className="text-[10px] text-stone-600 uppercase tracking-wider">
                     © {currentYear} Saber Botânico.
                   </p>
                   <div className="flex gap-4">
                     <span className="text-[10px] text-stone-700 hover:text-stone-500 cursor-pointer transition-colors">
                       Privacidade
                     </span>
                     <span className="text-[10px] text-stone-700 hover:text-stone-500 cursor-pointer transition-colors">
                       Termos
                     </span>
                   </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;