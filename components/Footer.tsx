import React from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080a08] text-[#E5E5E5] overflow-hidden pt-24 pb-8 border-t border-white/5">
      {/* Background Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
      
      {/* Container Principal */}
      <div className="container relative z-10 px-6 md:px-12">
        
        {/* Top Grid: Columns with separators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0 mb-32 border-b border-white/10 pb-12 md:border-b-0 md:pb-0">
          
          {/* Col 1: Brand/Context */}
          <div className="flex flex-col justify-between md:pr-12 md:border-r border-white/10 min-h-[160px]">
             <div>
               <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 block mb-3">
                 Saber Botânico | Vol. II
               </span>
               <h3 className="font-serif text-3xl leading-tight text-[#E5E5E5]">
                 Enciclopédia <br/> Viva
               </h3>
             </div>
             <p className="font-sans text-sm text-white/50 mt-8 md:mt-0">
               {currentYear} © Edição Digital
             </p>
          </div>

          {/* Col 2: Call to Action / Location style */}
          <div className="flex flex-col justify-between md:px-12 md:border-r border-white/10 min-h-[160px]">
             <div>
               <span className="font-serif text-2xl text-[#E5E5E5] block mb-2">
                 Arquivo<br/>Principal
               </span>
             </div>
             <Link to="/glosario" className="group flex items-center gap-2 text-[#E5E5E5] hover:text-gold transition-colors">
               <span className="material-symbols-outlined text-4xl font-light group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">
                 arrow_outward
               </span>
             </Link>
          </div>

          {/* Col 3: Socials (Centered in column visually) */}
          <div className="flex flex-col justify-center items-start md:items-center md:px-12 md:border-r border-white/10 min-h-[160px]">
             <div className="flex flex-col gap-6">
               {SOCIAL_LINKS.map((social) => (
                 <a 
                   key={social.platform}
                   href={social.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group flex items-center gap-4 text-[#E5E5E5] hover:text-gold transition-colors"
                 >
                   <i className={`fa-brands fa-${social.platform.toLowerCase()} text-lg hidden`}></i> {/* Fallback if using FA */}
                   <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">
                      {social.platform}
                   </span>
                 </a>
               ))}
             </div>
          </div>

          {/* Col 4: Navigation Links */}
          <div className="flex flex-col justify-between md:pl-12 min-h-[160px]">
             <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 block mb-6">
               Diretrizes
             </span>
             <nav className="flex flex-col gap-3">
               {NAVIGATION_LINKS.map((link) => (
                 <Link 
                   key={link.path} 
                   to={link.path}
                   className="font-sans text-lg text-[#E5E5E5] hover:text-gold hover:pl-2 transition-all duration-300"
                 >
                   {link.label}
                 </Link>
               ))}
             </nav>
          </div>

        </div>

        {/* Massive Typography - "The Monster Effect" */}
        <div className="relative w-full border-b border-white/10 mb-6 overflow-hidden">
           <h1 className="font-serif text-[18vw] md:text-[21vw] leading-[0.75] text-[#E5E5E5] text-center tracking-tighter opacity-90 select-none mix-blend-lighten pointer-events-none transform translate-y-4 md:translate-y-8">
             SABER
           </h1>
           {/* Decorative line above text visually simulating the line in reference */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#E5E5E5] mt-8 hidden md:block"></div>
        </div>

        {/* Bottom Bar: Legal & Secondary Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 text-[10px] font-mono uppercase tracking-[0.1em] text-white/30">
           <div className="flex gap-1 items-center">
              <span className="material-symbols-outlined text-sm animate-spin-slow">spa</span>
              <span>Design Biofílico</span>
           </div>
           
           <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Créditos</a>
           </div>

           <div className="text-right">
              <span>L'EFFET MONSTRE</span>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;