import React, { useEffect, useState } from 'react';
import { ARCHIVE_HERO } from '../constants';
import { PlantService } from '../services/plantService';
import { PlantSpecimen } from '../types';
import Tooltip from './Tooltip';
import PlantCard from './PlantCard';

const ArchiveSection: React.FC = () => {
  const [featuredPlants, setFeaturedPlants] = useState<PlantSpecimen[]>([]);

  useEffect(() => {
    const loadPlants = async () => {
        const data = await PlantService.getFeatured(3);
        setFeaturedPlants(data);
    };
    loadPlants();
  }, []);

  return (
    <section id="archive" className="relative flex flex-col items-center w-full py-24 bg-[#F9F7F2] overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-sage/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="container px-6">
        
        <div className="mt-8 mb-20 relative overflow-hidden rounded-sm group">
             <div className="relative w-full h-[350px] md:h-[450px]">
                {/* Imagem semântica para SEO/Link direto */}
                <img 
                    src={ARCHIVE_HERO}
                    alt="Coleção de Arquivo Botânico"
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 filter brightness-90 grayscale-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
             </div>
             <div className="absolute bottom-0 left-0 z-30 p-10 md:p-16 w-full pointer-events-none">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div>
                        <span className="inline-block px-4 py-1 mb-4 text-[10px] font-mono font-bold tracking-widest-xl text-white uppercase border border-white/20 backdrop-blur-sm">Volume III</span>
                        <h1 className="text-5xl md:text-6xl font-serif text-white tracking-tighter mb-4 leading-none">Arquivo <span className="italic">Curado</span></h1>
                        <p className="text-white/80 text-lg font-light leading-relaxed max-w-lg">
                            Explore nossa coleção meticulosamente catalogada de flora rara através de um prisma de transparência refinada.
                        </p>
                    </div>
                    <div className="hidden md:block pointer-events-auto">
                        <button className="text-white font-mono text-[10px] uppercase tracking-widest border-b border-white/50 hover:border-white pb-1 transition-all duration-300 hover:tracking-[0.25em]">Ver Catálogo Completo</button>
                    </div>
                </div>
             </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border-b border-charcoal/5 pb-8">
            <h2 className="text-2xl font-serif text-charcoal tracking-tight">Raridades Etnobotânicas</h2>
            
            <div className="flex flex-wrap justify-center gap-3">
                 <Tooltip content="Limpar todos os filtros">
                    <button className="px-5 py-2 rounded-full border border-charcoal/10 hover:border-gold/50 flex items-center gap-2 group transition-all duration-300 bg-white hover:shadow-sm hover:-translate-y-0.5 active:scale-95">
                        <span className="text-xs font-mono uppercase tracking-widest text-charcoal/60 group-hover:text-charcoal">Todos</span>
                    </button>
                 </Tooltip>
                {['Orchidaceae', 'Araceae', 'Cactaceae', 'Ferns'].map(cat => (
                    <button key={cat} className="px-5 py-2 rounded-full border border-transparent hover:border-charcoal/10 bg-transparent hover:bg-white flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 active:scale-95">
                        <span className="text-xs font-mono uppercase tracking-widest text-charcoal/40 hover:text-charcoal">{cat}</span>
                    </button>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPlants.map((plant) => (
                <div key={plant.id} className="h-full">
                    <PlantCard plant={plant} />
                </div>
            ))}
        </div>

        <div className="mt-20 flex justify-center">
            <div className="flex gap-8 items-center font-mono text-xs text-charcoal/40">
                <button className="hover:text-gold transition-all duration-300 hover:tracking-widest hover:-translate-x-1">PREV</button>
                <div className="flex gap-4">
                    <span className="text-gold font-bold">01</span>
                    <span className="hover:text-charcoal cursor-pointer">02</span>
                    <span className="hover:text-charcoal cursor-pointer">03</span>
                </div>
                <button className="hover:text-gold transition-all duration-300 hover:tracking-widest hover:translate-x-1">NEXT</button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ArchiveSection;
