import React, { useMemo, useState, useCallback } from 'react';
import { useScrollVisibility } from '../hooks/useScrollVisibility';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../constants';
import Tooltip from './Tooltip';
import Magnetic from './Magnetic'; // Importando efeito magnético
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
      <div className="relative flex items-center justify-center size-10 border border-white/10 rounded-full bg-white/[0.02] backdrop-blur-sm group-hover:border-gold/30 transition-colors duration-500">
        <span className="material-symbols-outlined text-[20px] text-gold group-hover:rotate-180 transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)]">spa</span>
      </div>
    </Magnetic>
    <div className="flex flex-col">
      <h2 className="text-lg font-serif font-medium leading-none tracking-[0.05em] text-paper group-hover:text-gold transition-colors duration-500">Saber</h2>
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
            <span className={`text-[10px] tracking-[0.2em] font-mono uppercase transition-all duration-500 ${isActive ? "text-gold" : "text-white/50 group-hover:text-white"}`}>
              {link.label}
            </span>
            <span className={`absolute bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold transition-all duration-500 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-75"}`}></span>
          </Link>
        );
      })}
    </nav>
  );
};

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isVisible = useScrollVisibility({ threshold: 10 });
  const location = useLocation();
  
  const headerClasses = useMemo(() => {
    const isScrolled = typeof window !== 'undefined' ? window.scrollY > 20 : false;
    
    // Glassmorphism condicional
    // Se o menu mobile estiver aberto, removemos o fundo do header para ele "sumir" na sobreposição, mantendo apenas o botão visível
    const bgClass = isMobileMenuOpen 
      ? 'bg-transparent border-transparent' 
      : (isVisible && isScrolled ? 'bg-forest-dark/80 backdrop-blur-xl border-b border-white/[0.03] shadow-sm' : 'bg-transparent border-transparent');
    
    return `fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] px-6 md:px-12 py-4 ${bgClass} ${!isMobileMenuOpen && !isVisible ? '-translate-y-full' : 'translate-y-0'}`;
  }, [isVisible, isMobileMenuOpen]);

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
                  className="relative z-[70] text-gold-light p-4 -m-4 focus:outline-none group" // Aumentei a área de toque para o Magnetic funcionar melhor
                  onClick={toggleMenu}
                  aria-label={isMobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
                >
                  <div className="flex flex-col gap-1.5 items-end">
                      <span className={`block h-px bg-current transition-all duration-500 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2.5 bg-gold' : 'w-8 bg-white/70 group-hover:w-6'}`}></span>
                      <span className={`block h-px bg-current transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0 scale-0' : 'w-5 bg-white/70'}`}></span>
                      <span className={`block h-px bg-current transition-all duration-500 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2.5 bg-gold' : 'w-8 bg-white/70 group-hover:w-4'}`}></span>
                  </div>
                </button>
              </Magnetic>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Full Screen Curtain */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[50] bg-forest-dark flex flex-col justify-center items-center overflow-hidden"
          >
            {/* Background Texture for Detail */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/noise.png')] mix-blend-overlay"></div>
            
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
                        className={`text-5xl md:text-7xl font-serif tracking-tighter ${isActive ? 'text-gold italic' : 'text-paper hover:text-white transition-colors'}`}
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
               className="absolute bottom-12 flex flex-col items-center gap-4"
            >
               <div className="w-px h-12 bg-white/10"></div>
               <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30">
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