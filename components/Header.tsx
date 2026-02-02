import React, { useMemo, useState, useCallback } from 'react';
import { useScrollVisibility } from '../hooks/useScrollVisibility';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../constants';
import Tooltip from './Tooltip';

const Logo: React.FC = () => (
  <Link to="/" className="flex items-center gap-4 group shrink-0" aria-label="Saber Botânico Home">
    <div className="relative flex items-center justify-center size-10 transition-transform group-hover:scale-105">
      <div className="absolute inset-0 border border-gold/30 rounded-full animate-spin-slow"></div>
      <span className="material-symbols-outlined text-[24px] text-gold">spa</span>
    </div>
    <div className="flex flex-col">
      <h2 className="text-xl font-bold leading-none tracking-[0.05em] font-serif text-gold-light uppercase">Saber Botânico</h2>
      <span className="text-[0.6rem] uppercase tracking-[0.25em] text-gold/60 mt-1">Série Obsidiana</span>
    </div>
  </Link>
);

const NavLinks: React.FC = () => {
  const location = useLocation();
  
  const getLinkClasses = useCallback((path: string): string => {
    const isActive = location.pathname === path;
    
    return `
      text-xs tracking-[0.2em] font-medium uppercase transition-colors relative py-2
      ${isActive 
        ? "text-gold font-bold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-gold after:rounded-full" 
        : "text-gray-400 hover:text-gold"}
    `.trim().replace(/\s+/g, ' '); // Hygiene: Minimizar espaços extras
  }, [location.pathname]);

  return (
    <nav className="flex items-center gap-8 xl:gap-12">
      {NAVIGATION_LINKS.map((link) => (
        <Link key={link.path} to={link.path} className={getLinkClasses(link.path)}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isVisible = useScrollVisibility({ threshold: 10 });
  const location = useLocation();
  
  const headerClasses = useMemo(() => {
    const bgClass = isMobileMenuOpen ? 'bg-forest-dark' : 'bg-forest-dark/80 backdrop-blur-md';
    const transformClass = isVisible ? 'translate-y-0' : '-translate-y-full';
    
    return `fixed top-0 left-0 right-0 z-[60] transition-transform duration-300 ease-in-out border-b border-gold/10 ${bgClass} ${transformClass}`;
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
        <div className="container h-20 flex items-center justify-between">
          <Logo />

          <div className="hidden lg:flex flex-1 justify-center px-8">
            <NavLinks />
          </div>

          <div className="flex items-center gap-4 xl:gap-6 shrink-0">
            <Tooltip content="Pesquisar no Glosário" position="bottom">
              <Link to="/glosario" className="hidden md:flex items-center border border-white/10 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-sm group hover:border-gold/30 transition-colors" aria-label="Search">
                <span className="material-symbols-outlined text-lg text-gray-400 group-hover:text-gold transition-colors">search</span>
                <span className="text-xs text-gray-500 ml-2 font-sans tracking-wide">Buscar...</span>
              </Link>
            </Tooltip>
            
            <Tooltip content="Conteúdo Exclusivo" position="bottom">
              <button className="gold-border-btn hidden md:flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-sm h-9 px-4 transition-all text-gold-light text-[10px] font-bold uppercase tracking-[0.15em] border border-gold/60 hover:bg-gold/10">
                Assinar
              </button>
            </Tooltip>
            
            <div className="lg:hidden flex items-center">
              <button 
                className="text-gold-light p-2 relative z-50 focus:outline-none" 
                aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                onClick={toggleMenu}
              >
                <span className={`material-symbols-outlined text-3xl transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                  {isMobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-forest-dark lg:hidden transition-all duration-500 ease-in-out flex flex-col pt-20 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex-1 flex flex-col px-8 pb-10 overflow-y-auto">
           <nav className="flex flex-col gap-6 items-center justify-center flex-1 py-10">
            {NAVIGATION_LINKS.map((link, idx) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-3xl font-serif transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
                onClick={closeMenu}
              >
                <span className={location.pathname === link.path ? 'text-gold italic border-b border-gold/30 pb-1' : 'text-gold-light hover:text-white'}>
                  {link.label}
                </span>
              </Link>
            ))}
             <Link 
              to="/glosario" 
              className={`mt-8 flex items-center gap-3 text-gold/60 text-sm font-sans uppercase tracking-widest border border-gold/20 px-6 py-3 rounded-full transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: '500ms' }}
              onClick={closeMenu}
            >
                <span className="material-symbols-outlined text-sm">search</span>
                Buscar no Glosário
             </Link>
          </nav>
          
          <div className={`text-center transition-all duration-700 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <button className="text-gold-light text-xs font-bold uppercase tracking-[0.15em] border border-gold/60 px-8 py-3 mb-8 hover:bg-gold/10 w-full max-w-xs mx-auto" onClick={closeMenu}>
                Assinar Newsletter
            </button>
             <p className="text-gold/20 text-[10px] font-mono uppercase tracking-widest">
                Série Obsidiana © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;