import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-paper border-t border-gold/20 py-16 text-ink">
      <div className="container relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex items-center gap-4">
          <div className="size-12 border border-ink/10 flex items-center justify-center rounded-sm shrink-0">
            <span className="material-symbols-outlined text-3xl text-gold-dark">spa</span>
          </div>
          <div>
            <span className="font-serif text-2xl tracking-tight text-ink block">Saber Botânico</span>
            <span className="text-[10px] uppercase tracking-widest text-ink/50">Concierge Digital</span>
          </div>
        </div>

        <div className="flex gap-8">
            {SOCIAL_LINKS.map(social => (
                <a 
                  key={social.platform} 
                  href={social.url} 
                  className="text-ink/50 hover:text-gold-dark transition-colors text-xs uppercase tracking-widest font-mono"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.platform}
                </a>
            ))}
        </div>

        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink/40 text-center md:text-right">© {currentYear} Vida Botânica de Alto Padrão</p>
      </div>
    </footer>
  );
};

export default Footer;