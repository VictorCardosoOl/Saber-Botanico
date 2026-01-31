import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-paper border-t border-gold/20 py-16 px-6 relative overflow-hidden text-ink">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        
        <div className="flex items-center gap-4">
          <div className="size-12 border border-ink/10 flex items-center justify-center rounded-sm">
            <span className="material-symbols-outlined text-3xl text-gold-dark">spa</span>
          </div>
          <div>
            <span className="font-serif text-2xl tracking-tight text-ink block">Saber Botânico</span>
            <span className="text-[10px] uppercase tracking-widest text-ink/50">Concierge Digital</span>
          </div>
        </div>

        <div className="flex gap-8">
            {['Instagram', 'Pinterest', 'Twitter'].map(social => (
                <a key={social} href="#" className="text-ink/50 hover:text-gold-dark transition-colors text-xs uppercase tracking-widest font-mono">{social}</a>
            ))}
        </div>

        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink/40">© 2024 Vida Botânica de Alto Padrão</p>
      </div>
    </footer>
  );
};

export default Footer;