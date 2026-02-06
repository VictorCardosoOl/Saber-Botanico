import React, { useMemo, useState, useCallback } from 'react';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../constants';
import Tooltip from './Tooltip';
import Magnetic from './Magnetic';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { LUXURY_EASE } from './Animation';

// --- Variantes de Animação ---

const menuVariants: Variants = {
  closed: {
    y: "-100%",
    transition: {
      duration: 0.8,
      ease: LUXURY_EASE,
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  open: {
    y: "0%",
    transition: {
      duration: 0.8,
      ease: LUXURY_EASE,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const linkVariants: Variants = {
  closed: { 
    y: 80, 
    opacity: 0,
    rotateX: -20,
    transition: { duration: 0.4 } 
  },
  open: { 
    y: 0, 
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.8, ease: LUXURY_EASE } 
  }
};

// --- Componentes Auxiliares ---

const Logo: React.FC = () => (
  <Link to="/" className="flex items-center gap-4 group shrink-0 z-50">
    <Magnetic>
      <div className="relative flex items-center justify-center size-10 border border-white/10 rounded-full bg-white/[0.05] backdrop-blur-md group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <span className="material-symbols-outlined text-[20px] text-gold group-hover:rotate-180 transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]">spa</span>
      </div>
    </Magnetic>
    <div className="flex flex-col">
      <h2 className="text-lg font-serif font-medium leading-none tracking-[0.05em] text-paper group-hover:text-gold transition-colors duration-500 drop-shadow-sm">Saber</h2>
    </div>
  </Link>
);

const DesktopNavLinks: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="flex items-center gap-10 xl:gap-16">
      {NAVIGATION_LINKS.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <Link key={link.path} to={link.path} className="relative group py-4">
            <span className={`text-[10px] tracking-[0.2em] font-mono uppercase transition-all duration-500 ${isActive ? "text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" : "text-white/50 group-hover:text-white"}`}>
              {link.label}
            </span>
            <span className={`absolute bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold transition-all duration-500 shadow-[0_0_5px_rgba(212,175,55,0.8)] ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-75"}`}></span>
          </Link>
        );
      })}
    </nav>
  );
};

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Hook de Scroll Otimizado
  const { isScrollingUp, scrollPosition } = useScrollDirection();
  
  const location = useLocation();
  
  // Lógica de Visibilidade Inteligente:
  // 1. Sempre visível no topo (scrollPosition < 50)
  // 2. Visível ao rolar para cima
  // 3. Oculto ao rolar para baixo (se não estiver no topo)
  // 4. Sempre visível se o menu mobile estiver aberto
  const isVisible = isMobileMenuOpen || isScrollingUp || scrollPosition < 50;

  const headerClasses = useMemo(() => {
    const isScrolled = scrollPosition > 20;
    
    // Performance: Removemos sombras pesadas e blur excessivo durante scroll rápido
    const bgClass = isMobileMenuOpen 
      ? 'bg-transparent border-transparent' 
      : (isScrolled 
          ? 'bg-forest-dark/80 backdrop-blur-md border-b border-white/[0.08] shadow-sm' 
          : 'bg-transparent border-transparent');
    
    // Transform class para esconder/mostrar
    const transformClass = isVisible ? 'translate-y-0' : '-translate-y-full';

    return `fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] px-6 md:px-12 py-4 ${bgClass} ${transformClass}`;
  }, [scrollPosition, isMobileMenuOpen, isVisible]);

  const toggleMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <>
      <header className={headerClasses}>
        <div className="w-full max-w-[1920px] mx-auto flex items-center justify-between">
          <Logo />

          <div className="hidden lg:flex flex-1 justify-center">
            <DesktopNavLinks />
          </div>

          <div className="flex items-center gap-8 shrink-0 z-50">
            <Tooltip content="Buscar no Arquivo" position="bottom">
              <Link to="/glosario" className="hidden md:flex items-center justify-center text-white/40 hover:text-gold transition-colors duration-300">
                <span className="material-symbols-outlined text-[20px] font-light">search</span>
              </Link>
            </Tooltip>
            
            <div className="lg:hidden">
              <Magnetic strength={20}>
                <button 
                  className="relative z-[70] text-gold-light p-4 -m-4 focus:outline-none group" 
                  onClick={toggleMenu}
                  aria-label={isMobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
                >
                  <div className="flex flex-col gap-1.5 items-end">
                      <span className={`block h-px bg-current transition-all duration-500 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2.5 bg-gold shadow-[0_0_5px_rgba(212,175,55,1)]' : 'w-8 bg-white/70 group-hover:w-6'}`}></span>
                      <span className={`block h-px bg-current transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0 scale-0' : 'w-5 bg-white/70'}`}></span>
                      <span className={`block h-px bg-current transition-all duration-500 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2.5 bg-gold shadow-[0_0_5px_rgba(212,175,55,1)]' : 'w-8 bg-white/70 group-hover:w-4'}`}></span>
                  </div>
                </button>
              </Magnetic>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[50] flex flex-col justify-center items-center overflow-hidden"
          >
            {/* Otimização: Uso de gradiente simples ao invés de SVG Filter pesado no menu mobile para evitar travamento */}
            <div className="absolute inset-0 bg-forest-dark/98 backdrop-blur-xl"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.05),_transparent_70%)] pointer-events-none"></div>

            <nav className="flex flex-col gap-8 items-center relative z-10">
              {NAVIGATION_LINKS.map((link) => {
                 const isActive = location.pathname === link.path;
                 
                 return (
                  <motion.div key={link.path} variants={linkVariants} className="overflow-hidden">
                    <Link 
                      to={link.path} 
                      onClick={closeMenu}
                      className="block"
                    >
                      <motion.div
                        className={`text-5xl md:text-7xl font-serif tracking-tighter ${isActive ? 'text-gold italic drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'text-paper hover:text-white transition-colors'}`}
                        whileHover={{ 
                          scale: 1.05, 
                          skewX: -5,
                          color: "#CFB783", // Gold default
                          transition: { duration: 0.3 } 
                        }}
                        whileTap={{ 
                          scale: 0.95, 
                          color: "#8F7A48", // Gold dark
                          opacity: 0.8
                        }}
                      >
                        {link.label}
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div 
               variants={linkVariants}
               className="absolute bottom-12 flex flex-col items-center gap-4 relative z-10"
            >
               <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
               <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30 drop-shadow-sm">
                  Saber Botânico
               </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;