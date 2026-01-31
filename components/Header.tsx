import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  const linkClass = (path: string) => `
    text-sm tracking-widest font-light transition-colors uppercase
    ${isActive(path) ? 'text-primary font-medium' : 'text-text-muted hover:text-primary'}
  `;

  return (
    <header className="glass-nav fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap px-6 py-5 md:px-12 lg:px-24 transition-all duration-300">
      <div className="flex items-center gap-4">
        <Link to="/" className="relative flex items-center justify-center size-10 group">
          <div className="absolute inset-0 border border-primary/30 rounded-full animate-spin-slow" style={{ animationDuration: '10s' }}></div>
          <span className="material-symbols-outlined text-[24px] text-primary">spa</span>
        </Link>
        <Link to="/">
          <h2 className="text-xl font-bold leading-tight tracking-[0.05em] font-luxury text-primary-light uppercase">Saber Botânico</h2>
        </Link>
      </div>

      <div className="hidden md:flex flex-1 justify-end gap-10 items-center">
        <nav className="flex items-center gap-8">
          <Link to="/" className={linkClass('/')}>Home</Link>
          <Link to="/glosario" className={linkClass('/glosario')}>Glosário</Link>
          <Link to="/vasos" className={linkClass('/vasos')}>Vasos</Link>
          <Link to="/solo" className={linkClass('/solo')}>Solo</Link>
          <Link to="/cuidados" className={linkClass('/cuidados')}>Rega & Luz</Link>
        </nav>
        
        <button className="gold-border-btn flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-sm h-10 px-6 transition-all text-primary-light text-xs font-bold uppercase tracking-[0.15em]">
          <span className="truncate">Member Login</span>
        </button>
      </div>

      <div className="md:hidden flex items-center">
        <button className="text-primary-light">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;