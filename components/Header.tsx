import React, { useMemo, useState, useCallback } from 'react';
import { useScrollVisibility } from '../hooks/useScrollVisibility';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../constants';
import Tooltip from './Tooltip';
import { motion, useScroll, useSpring } from 'framer-motion';

const Logo: React.FC = () => (
  <Link to="/" className="flex items-center gap-3 group shrink-0" aria-label="Saber Botânico Home">
    <div className="relative flex items-center justify-center size-8">
      <span className="material-symbols-outlined text-[24px] text-gold group-hover:rotate-180 transition-transform duration-700">spa</span>
    </div>
    <div className="flex flex-col">
      <h2 className="text-lg font-bold leading-none tracking-[0.1em] font-serif text-paper uppercase">Saber</h2>
      <span className="text-[0.5rem] uppercase tracking-[0.3em] text-gold/80 mt-0.5">Botânico</span>
    </div>
  </Link>
);

const NavLinks: React.FC = () => {
  const location = useLocation();
  
  const getLinkClasses = useCallback((path: string): string => {
    const isActive = location.pathname === path;
    return `
      text-[10px] tracking-[0.25em] font-mono uppercase transition-colors duration-500 relative py-2 inline-block
      ${isActive ? "text-gold" : "text-white/60 hover:text-white"}
      before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-gold before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-500 before:origin-right hover:before:origin-left
      ${isActive ? "before:scale-x-100" : ""}
    `.trim().replace(/\s+/g, ' ');
  }, [location.pathname]);

  return (
    <nav className="flex items-center gap-8 xl:gap-12">
      {NAVIGATION_LINKS.map((link) => (
        <Link key={link.path} to={link.path}>
          <motion.span 
            className={getLinkClasses(link.path)}
            whileHover={{ scale: 1.1, textShadow: "0 0 8px rgba(212, 175, 55, 0.4)" }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {link.label}
          </motion.span>
        </Link>
      ))}
    </nav>
  );
};

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isVisible = useScrollVisibility({ threshold: 10 });
  const location = useLocation();
  
  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const headerClasses = useMemo(() => {
    // Usar fundo transparente no topo, e vidro fosco ao rolar
    const bgClass = isMobileMenuOpen ? 'bg-forest-dark' : (window.scrollY > 50 ? 'bg-forest-dark/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent border-transparent');
    const transformClass = isVisible ? 'translate-y-0' : '-translate-y-full';
    
    return `fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-in-out px-4 md:px-8 py-4 ${bgClass} ${transformClass}`;
  }, [isVisible, isMobileMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => {
      const newState = !prev;
      document.body.style.overflow = newState ? 'hidden' : '';
      return newState;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, []);

  return (
    <>
      <header className={headerClasses}>
        <div className="w-full max-w-[1920px] mx-auto flex items-center justify-between">
          <Logo />

          <div className="hidden lg:flex flex-1 justify-center px-8">
            <NavLinks />
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <Tooltip content="Buscar" position="bottom">
              <Link to="/glosario" className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-white/10 hover:border-gold/50 transition-colors group">
                <span className="material-symbols-outlined text-[18px] text-white/60 group-hover:text-gold transition-colors">search</span>
              </Link>
            </Tooltip>
            
            <div className="lg:hidden flex items-center">
              <button 
                className="text-gold-light p-2 relative z-50 focus:outline-none" 
                aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                onClick={toggleMenu}
              >
                <div className="flex flex-col gap-1.5 items-end">
                    <span className={`block h-px bg-gold transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-8'}`}></span>
                    <span className={`block h-px bg-gold transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-6'}`}></span>
                    <span className={`block h-px bg-gold transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2.5' : 'w-4'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Reading Progress Bar - UX Detail */}
        {!isMobileMenuOpen && (
           <motion.div
             className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold origin-left"
             style={{ scaleX }}
           />
        )}
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-forest-dark lg:hidden transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col pt-24 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none translate-y-4'
        }`}
      >
        <div className="flex-1 flex flex-col px-8 pb-10 overflow-y-auto">
           <nav className="flex flex-col gap-8 items-center justify-center flex-1 py-10">
            {NAVIGATION_LINKS.map((link, idx) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-4xl font-serif font-light transition-all duration-700 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${100 + idx * 50}ms` }}
                onClick={closeMenu}
              >
                <span className={location.pathname === link.path ? 'text-gold italic' : 'text-paper hover:text-gold transition-colors'}>
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;