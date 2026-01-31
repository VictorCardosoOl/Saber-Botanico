import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-primary/20 py-16 px-6 relative overflow-hidden text-text-main bg-forest-dark/50 backdrop-blur-sm">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        
        <div className="flex items-center gap-4">
          <div className="size-12 border border-primary/30 flex items-center justify-center rounded-sm">
            <span className="material-symbols-outlined text-3xl text-primary">spa</span>
          </div>
          <div>
            <span className="font-serif text-2xl tracking-tight text-primary-light block">Saber Botânico</span>
            <span className="text-[10px] uppercase tracking-widest text-text-muted">Concierge Digital</span>
          </div>
        </div>

        <div className="flex gap-8">
            {['Instagram', 'Pinterest', 'Twitter'].map(social => (
                <a key={social} href="#" className="text-text-muted hover:text-primary transition-colors text-xs uppercase tracking-widest font-luxury">{social}</a>
            ))}
        </div>

        <p className="font-display text-[10px] uppercase tracking-[0.2em] text-text-muted/60">© 2024 Luxury Botanical Life</p>
      </div>
    </footer>
  );
};

export default Footer;