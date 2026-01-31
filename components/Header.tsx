import React from 'react';
import { useScrollVisibility } from '../hooks/useScrollVisibility';
import { Link, useLocation } from 'react-router-dom';

const Logo = () => (
  <Link to="/" className="flex items-center gap-4 group">
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

const NavLinks = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  const linkClass = (path: string) => `
    text-xs tracking-[0.2em] font-medium uppercase transition-colors relative
    ${isActive(path) ? 'text-gold font-bold' : 'text-gray-400 hover:text-gold'}
    ${isActive(path) ? "after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-gold after:rounded-full" : ''}
  `;

  return (
    <nav className="flex items-center gap-8">
      <Link to="/" className={linkClass('/')}>Home</Link>
      <Link to="/glosario" className={linkClass('/glosario')}>Glosário</Link>
      <Link to="/vasos" className={linkClass('/vasos')}>Vasos</Link>
      <Link to="/solo" className={linkClass('/solo')}>Solo</Link>
      <Link to="/cuidados" className={linkClass('/cuidados')}>Rega & Luz</Link>
    </nav>
  );
};

const Header: React.FC = () => {
  const isVisible = useScrollVisibility({ threshold: 10 });

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out bg-forest-dark/80 backdrop-blur-md border-b border-gold/10 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 py-5 flex items-center justify-between">
        <Logo />

        <div className="hidden lg:flex flex-1 justify-center gap-10 items-center">
          <NavLinks />
        </div>

        <div className="flex items-center gap-6">
          <Link to="/glosario" className="hidden md:flex items-center border border-white/10 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-sm group hover:border-gold/30 transition-colors">
            <span className="material-symbols-outlined text-lg text-gray-400 group-hover:text-gold transition-colors">search</span>
            <span className="text-xs text-gray-500 ml-2 font-sans tracking-wide">Buscar planta...</span>
          </Link>
          
          <button className="gold-border-btn hidden md:flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-sm h-9 px-4 transition-all text-gold-light text-[10px] font-bold uppercase tracking-[0.15em] border border-gold/60 hover:bg-gold/10">
            Fórum
          </button>
          
          <div className="md:hidden flex items-center">
            <button className="text-gold-light" aria-label="Abrir menu">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;