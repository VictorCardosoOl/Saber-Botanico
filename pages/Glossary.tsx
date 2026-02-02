import React, { useState, useMemo } from 'react';
import { PLANTS } from '../constants';
import { PlantSpecimen } from '../types';
import PlantCard from '../components/PlantCard';
import PlantModal from '../components/PlantModal';
import { useDebounce } from '../hooks/useDebounce';

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
    <section className="min-h-screen pt-32 pb-20 bg-[#F9F7F2]">
      <div className="container px-6">
        
        {/* Header Glossary */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
             <span className="h-px w-8 bg-gold-dark/40"></span>
             <span className="text-gold-dark font-mono text-[10px] uppercase tracking-widest-xl">Arquivo Botânico</span>
             <span className="h-px w-8 bg-gold-dark/40"></span>
          </div>
          <h1 className="text-fluid-h1 font-serif text-charcoal mb-8 tracking-tighter leading-none">Glosário de <span className="italic text-gold-dark">Espécies</span></h1>
          <p className="text-charcoal/60 font-sans text-lg font-light leading-relaxed">
            Uma enciclopédia viva. Descubra a proveniência, rituais e a poesia biológica de cada espécime.
          </p>
        </div>

        {/* Search Bar - Minimalist */}
        <div className="max-w-xl mx-auto mb-20 relative group">
          <input 
            type="text" 
            placeholder="Pesquisar por nome científico ou comum..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border-b border-charcoal/10 py-4 pl-12 pr-6 text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-gold transition-colors font-sans text-lg font-light tracking-wide rounded-none"
            aria-label="Pesquisar plantas"
          />
          <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-charcoal/30 group-hover:text-gold transition-colors" aria-hidden="true">search</span>
        </div>

        {/* Grid */}
        {filteredPlants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredPlants.map((plant) => (
              <div 
                key={plant.id} 
                onClick={() => setSelectedPlant(plant)} 
                className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold/20 rounded-sm"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedPlant(plant)}
                aria-label={`Ver detalhes de ${plant.name}`}
              >
                <PlantCard plant={plant} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 opacity-50">
             <span className="material-symbols-outlined text-4xl mb-4 text-charcoal/30">spa</span>
             <p className="text-lg font-serif italic text-charcoal/60">Nenhum espécime encontrado no arquivo.</p>
          </div>
        )}
      </div>

      {selectedPlant && (
        <PlantModal plant={selectedPlant} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Glossary;