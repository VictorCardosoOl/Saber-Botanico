import React from 'react';
import { PLANTS, ARCHIVE_HERO } from '../constants';
import PlantCard from './PlantCard';

const FilterButton: React.FC<{ label: string; isActive?: boolean }> = ({ label, isActive }) => (
  <button 
    className={`glass-panel border-white/60 px-5 py-2 rounded-full flex items-center gap-2 group cursor-pointer transition-colors shadow-sm ${isActive ? 'bg-white/80' : 'bg-white/40 hover:bg-white/80'}`}
    aria-pressed={isActive}
  >
    <span className="text-sm font-medium text-charcoal/80">{label}</span>
    <span className="material-symbols-outlined text-[18px] text-charcoal/40 group-hover:text-charcoal">
      {isActive ? 'check' : 'keyboard_arrow_down'}
    </span>
  </button>
);

const Pagination: React.FC = () => (
  <nav className="mt-16 flex justify-center" aria-label="Navegação de páginas">
    <div className="glass-panel bg-white/40 border border-white/50 rounded-lg p-2 flex gap-2 shadow-sm">
        <button className="w-10 h-10 flex items-center justify-center rounded hover:bg-white/50 text-charcoal/60 transition-colors" aria-label="Página anterior">
            <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded bg-[#4cb2e6] text-white shadow-md font-bold" aria-current="page">1</button>
        <button className="w-10 h-10 flex items-center justify-center rounded hover:bg-white/50 text-charcoal transition-colors">2</button>
        <button className="w-10 h-10 flex items-center justify-center rounded hover:bg-white/50 text-charcoal transition-colors">3</button>
        <button className="w-10 h-10 flex items-center justify-center rounded hover:bg-white/50 text-charcoal/60 transition-colors" aria-label="Próxima página">
            <span className="material-symbols-outlined">chevron_right</span>
        </button>
    </div>
  </nav>
);

const ArchiveSection: React.FC = () => {
  return (
    <section id="archive" className="relative flex flex-col items-center w-full py-20 bg-gradient-to-br from-[#fbfcf8] via-[#f4f7f9] to-[#eef2f6] dark:from-[#0f171e] dark:via-[#131d26] dark:to-[#16222c]">
      {/* Background Ambience */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/30 rounded-full blur-[100px] dark:bg-blue-900/10"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-100/30 rounded-full blur-[100px] dark:bg-purple-900/10"></div>
      </div>

      <div className="max-w-[1200px] w-full px-4 md:px-8">
        
        {/* Archive Hero */}
        <div className="mt-8 mb-12 relative overflow-hidden rounded-2xl border border-white/60 dark:border-white/10 shadow-lg group">
             <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80"></div>
             {/* Matte Film */}
             <div className="relative w-full h-[400px]">
                <div className="absolute inset-0 bg-white/10 mix-blend-soft-light pointer-events-none z-20"></div>
                <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-105" 
                    style={{backgroundImage: `url('${ARCHIVE_HERO}')`}}
                    role="img"
                    aria-label="Destaque da coleção: plantas em ambiente de estufa minimalista"
                ></div>
             </div>
             <div className="absolute bottom-0 left-0 z-30 p-8 md:p-12">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-white uppercase bg-white/20 backdrop-blur-md rounded-full border border-white/30">Volume III</span>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2 drop-shadow-md font-sans">Arquivo Curado em Cristal</h1>
                <p className="text-white/90 text-lg max-w-lg font-light leading-relaxed">
                    Explore nossa coleção meticulosamente curada de flora rara através de um prisma de transparência refinada.
                </p>
             </div>
        </div>

        {/* Intro */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4 font-sans">Raridades Etnobotânicas</h2>
            <div className="h-1 w-20 bg-[#4cb2e6]/40 rounded-full mb-6"></div>
            <p className="text-charcoal/70 dark:text-white/70 max-w-2xl text-lg leading-relaxed">
                Preservadas em cristal digital. Cada espécime é apresentado com fidelidade de qualidade de galeria, envolto em uma interface virtual projetada para imitar a pureza do vidro polido.
            </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" role="group" aria-label="Filtros de categoria">
             <button className="glass-panel bg-white/80 border-white/60 px-5 py-2 rounded-full flex items-center gap-2 group cursor-default transition-colors shadow-sm">
                <span className="text-sm font-semibold text-charcoal">Todos os Espécimes</span>
                <span className="material-symbols-outlined text-[18px] text-charcoal/60">filter_list</span>
            </button>
            {['Orchidaceae', 'Araceae', 'Cactaceae', 'Ferns'].map(cat => (
                <FilterButton key={cat} label={cat} />
            ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PLANTS.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
            ))}
        </div>

        <Pagination />

      </div>
    </section>
  );
};

export default ArchiveSection;