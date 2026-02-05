import React, { useMemo, useState, useCallback } from 'react';
import { useScrollVisibility } from '../hooks/useScrollVisibility';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../constants';
import Tooltip from './Tooltip';
import { motion, AnimatePresence } from 'framer-motion';

// Componentes extraídos para evitar re-declaração no render
const Logo: React.FC = () => (
  <Link to="/" className="flex items-center gap-4 group shrink-0 z-50">
    <div className="relative flex items-center justify-center size-10 border border-white/10 rounded-full bg-white/[0.02] backdrop-blur-sm group-hover:border-gold/30 transition-colors duration-500">
      <span className="material-symbols-outlined text-[20px] text-gold group-hover:rotate-180 transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)]">spa</span>
    </div>
    <div className="flex flex-col">
      <h2 className="text-lg font-serif font-medium leading-none tracking-[0.05em] text-paper group-hover:text-gold transition-colors duration-500">Saber</h2>
    </div>
  </Link>
);

const NavLinks: React.FC = () => {
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
    
    // Glassmorphism refinado
    const bgClass = isMobileMenuOpen 
      ? 'bg-forest-dark' 
      : (isVisible && isScrolled ? 'bg-forest-dark/70 backdrop-blur-xl border-b border-white/[0.03]' : 'bg-transparent border-transparent');
    
    return `fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] px-6 md:px-12 py-4 ${bgClass} ${isVisible ? 'translate-y-0' : '-translate-y-full'}`;
  }, [isVisible, isMobileMenuOpen]);

  const toggleMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <>
      <header className={headerClasses}>
        <div className="w-full max-w-[1920px] mx-auto flex items-center justify-between">
          <Logo />

          <div className="hidden lg:flex flex-1 justify-center">
            <NavLinks />
          </div>

          <div className="flex items-center gap-8 shrink-0 z-50">
            <Tooltip content="Buscar no Arquivo" position="bottom">
              <Link to="/glosario" className="hidden md:flex items-center justify-center text-white/40 hover:text-gold transition-colors duration-300">
                <span className="material-symbols-outlined text-[20px] font-light">search</span>
              </Link>
            </Tooltip>
            
            <div className="lg:hidden">
              <button 
                className="text-gold-light p-2 focus:outline-none group" 
                onClick={toggleMenu}
                aria-label={isMobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
              >
                <div className="flex flex-col gap-1.5 items-end">
                    <span className={`block h-px bg-current transition-all duration-500 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2 bg-gold' : 'w-8 bg-white/70 group-hover:w-6'}`}></span>
                    <span className={`block h-px bg-current transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0' : 'w-5 bg-white/70'}`}></span>
                    <span className={`block h-px bg-current transition-all duration-500 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2 bg-gold' : 'w-8 bg-white/70 group-hover:w-4'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-forest-dark flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col gap-6 items-center">
              {NAVIGATION_LINKS.map((link, idx) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={closeMenu}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.1 + (idx * 0.1), duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className={`text-5xl md:text-6xl font-serif tracking-tight ${location.pathname === link.path ? 'text-gold italic' : 'text-paper hover:text-gold/50 transition-colors'}`}
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}
            </nav>
            <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               transition={{ delay: 0.6 }}
               className="absolute bottom-12 text-[10px] font-mono uppercase tracking-[0.3em] text-white/30"
            >
               Saber Botânico
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
