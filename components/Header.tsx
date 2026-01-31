import React, { useState, useEffect, useRef } from 'react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScroll = lastScrollY.current;
      
      // Lógica de Visibilidade:
      // 1. Sempre visível se estiver no topo (ou scroll negativo em mobile iOS)
      // 2. Ocultar se rolar para baixo E já tiver passado de um pequeno limiar (10px)
      // 3. Mostrar se rolar para cima
      if (currentScrollY <= 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScroll && currentScrollY > 10) {
        setIsVisible(false);
      } else if (currentScrollY < lastScroll) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    // Otimização de Performance com requestAnimationFrame
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out bg-forest-dark/80 backdrop-blur-md border-b border-gold/10 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="relative flex items-center justify-center size-10">
            <div className="absolute inset-0 border border-gold/30 rounded-full animate-spin-slow"></div>
            <span className="material-symbols-outlined text-[24px] text-gold">spa</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold leading-none tracking-[0.05em] font-serif text-gold-light uppercase">Saber Botânico</h2>
            <span className="text-[0.6rem] uppercase tracking-[0.25em] text-gold/60 mt-1">Série Obsidiana</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-center gap-10 items-center">
          <nav className="flex items-center gap-8">
            <a href="#hero" className="text-xs tracking-[0.2em] font-medium text-gray-400 hover:text-gold transition-colors uppercase">Coleção</a>
            <a href="#soil" className="text-xs tracking-[0.2em] font-medium text-gray-400 hover:text-gold transition-colors uppercase">Ateliê</a>
            <a href="#rituals" className="text-xs tracking-[0.2em] font-bold text-gold relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-gold after:rounded-full">Jornal</a>
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
           <div className="hidden md:flex items-center border border-white/10 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-sm group hover:border-gold/30 transition-colors">
            <span className="material-symbols-outlined text-lg text-gray-400 group-hover:text-gold transition-colors">search</span>
            <input 
              className="bg-transparent border-none text-xs text-white placeholder-gray-500 focus:ring-0 w-24 lg:w-32 ml-2 font-sans tracking-wide focus:outline-none" 
              placeholder="Buscar..." 
              type="text"
            />
          </div>
          <button className="gold-border-btn hidden md:flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-sm h-9 px-4 transition-all text-gold-light text-[10px] font-bold uppercase tracking-[0.15em] border border-gold/60 hover:bg-gold/10">
            Acesso Membros
          </button>
           <div className="md:hidden flex items-center">
            <button className="text-gold-light">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;