import React, { useState, useMemo } from 'react';
import { PLANTS } from '../constants';
import { PlantSpecimen } from '../types';
import PlantCard from '../components/PlantCard';
import PlantModal from '../components/PlantModal';
import { useDebounce } from '../hooks/useDebounce';
import SEO from '../components/SEO';
import { PageTransition, Reveal } from '../components/Animation';

const Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPlant, setSelectedPlant] = useState<PlantSpecimen | null>(null);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filteredPlants = useMemo(() => {
    const term = debouncedSearchTerm.toLowerCase().trim();
    if (!term) return PLANTS;
    
    return PLANTS.filter(plant => 
      plant.name.toLowerCase().includes(term) ||
      plant.scientificName.toLowerCase().includes(term)
    );
  }, [debouncedSearchTerm]);

  const handleCloseModal = () => setSelectedPlant(null);

  return (
    <PageTransition className="min-h-screen pt-32 pb-20 bg-paper">
      <SEO title="Glosário Botânico" description="Explore nossa enciclopédia viva de espécies raras e exóticas. Detalhes técnicos, rituais de cuidado e história biológica." />
      
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-[0.4] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply z-0"></div>

      <div className="container px-6 relative z-10">
        
        {/* Header Glossary */}
        <div className="flex flex-col items-center mb-24 max-w-4xl mx-auto text-center">
          <Reveal>
              <div className="inline-flex items-center gap-4 mb-6 opacity-60">
                 <span className="text-gold-dark font-mono text-[10px] uppercase tracking-[0.3em]">Arquivo Botânico</span>
                 <span className="w-12 h-px bg-gold-dark"></span>
                 <span className="text-gold-dark font-mono text-[10px] uppercase tracking-[0.3em]">Vol. I</span>
              </div>
              <h1 className="text-fluid-h1 font-serif text-forest-dark mb-8 tracking-tighter leading-none">
                Índice de <br/><span className="italic text-gold-dark/90">Espécimes</span>
              </h1>
              <p className="text-forest-dark/60 font-sans text-lg font-light leading-relaxed max-w-2xl mx-auto">
                Uma enciclopédia viva. Descubra a proveniência, rituais e a poesia biológica de cada espécie catalogada em nosso santuário.
              </p>
          </Reveal>
        </div>

        {/* Search Bar - Minimalist Spotlight */}
        <Reveal delay={0.2} className="sticky top-28 z-40 mb-20 max-w-2xl mx-auto">
          <div className="relative group shadow-2xl shadow-forest-dark/10">
            <input 
              type="text" 
              placeholder="Pesquisar por nome científico ou comum..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-forest-dark/95 backdrop-blur-md text-paper placeholder-white/30 py-6 pl-16 pr-6 focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 font-serif text-xl tracking-wide rounded-sm border border-white/10"
              aria-label="Pesquisar plantas"
            />
            <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-gold opacity-80" aria-hidden="true">search</span>
            
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="text-center mt-4">
             <span className="text-[9px] font-mono uppercase tracking-widest text-forest-dark/40">
                {filteredPlants.length} Espécimes Encontrados
             </span>
          </div>
        </Reveal>

        {/* Grid */}
        {filteredPlants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredPlants.map((plant, index) => (
              <Reveal key={plant.id} delay={index * 0.05}>
                  <button 
                    onClick={() => setSelectedPlant(plant)} 
                    className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold/20 rounded-sm text-left block w-full p-0 border-none bg-transparent group perspective-1000"
                    aria-label={`Ver detalhes de ${plant.name}`}
                  >
                    <PlantCard plant={plant} />
                  </button>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 opacity-50">
             <span className="material-symbols-outlined text-6xl mb-6 text-forest-dark/20 font-thin">spa</span>
             <p className="text-2xl font-serif italic text-forest-dark/40">Nenhum espécime encontrado.</p>
          </div>
        )}
      </div>

      {selectedPlant && (
        <PlantModal plant={selectedPlant} onClose={handleCloseModal} />
      )}
    </PageTransition>
  );
};

export default Glossary;