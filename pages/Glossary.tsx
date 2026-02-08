import React, { useState, useEffect } from 'react';
import { PlantService } from '../services/plantService';
import { PlantSpecimen } from '../types';
import PlantCard from '../components/PlantCard';
import PlantModal from '../components/PlantModal';
import PlantCardSkeleton from '../components/PlantCardSkeleton';
import { useDebounce } from '../hooks/useDebounce';
import SEO from '../components/SEO';
import { PageTransition, Reveal } from '../components/Animation';
import { AnimatePresence } from 'framer-motion';

const Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [plants, setPlants] = useState<PlantSpecimen[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPlant, setSelectedPlant] = useState<PlantSpecimen | null>(null);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    let isMounted = true;

    const fetchPlants = async () => {
      setIsLoading(true);
      try {
        const [results] = await Promise.all([
           PlantService.search(debouncedSearchTerm),
           new Promise(resolve => setTimeout(resolve, 600)) // Leve aumento no delay para suavidade
        ]);
        
        if (isMounted) {
          setPlants(results);
        }
      } catch (error) {
        console.error("Failed to fetch plants", error);
        if (isMounted) setPlants([]);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchPlants();

    return () => {
      isMounted = false;
    };
  }, [debouncedSearchTerm]);

  const handleCloseModal = () => setSelectedPlant(null);

  const seoTitle = selectedPlant ? selectedPlant.name : "Glosário Botânico";
  const seoDescription = selectedPlant 
    ? `Detalhes botânicos, origem e rituais de cuidado para ${selectedPlant.name} (${selectedPlant.scientificName}).` 
    : "Explore nossa enciclopédia viva de espécies raras e exóticas.";

  return (
    <PageTransition className="min-h-screen pt-40 pb-32 bg-paper">
      <SEO title={seoTitle} description={seoDescription} />
      
      {/* Texture Layer */}
      <div className="fixed inset-0 opacity-[0.3] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply z-0"></div>

      <div className="container px-6 relative z-10 min-h-[60vh]">
        
        {/* Header Editorial */}
        <div className="flex flex-col items-center mb-32 max-w-5xl mx-auto text-center">
          <Reveal>
              <div className="inline-flex items-center gap-6 mb-10 opacity-70">
                 <span className="text-gold-dark font-mono text-[10px] uppercase tracking-[0.3em]">Arquivo Botânico</span>
                 <span className="w-16 h-px bg-gold-dark/40"></span>
                 <span className="text-gold-dark font-mono text-[10px] uppercase tracking-[0.3em]">Coleção Aberta</span>
              </div>
              <h1 className="text-fluid-h1 font-serif text-forest-dark mb-10 tracking-tighter leading-[0.9]">
                Índice de <br/><span className="font-display-italic text-gold-dark">Espécimes</span>
              </h1>
              <p className="text-body-editorial text-forest-dark/80 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                Uma enciclopédia viva. Descubra a proveniência, rituais e a poesia biológica de cada espécie catalogada.
              </p>
          </Reveal>
        </div>

        {/* Search Interface - Minimalist Underline Style */}
        <Reveal delay={0.1} className="sticky top-28 z-40 mb-32 max-w-2xl mx-auto">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Pesquisar por nome científico..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-forest-dark placeholder-forest-dark/20 py-4 pl-12 pr-6 focus:outline-none border-b border-forest-dark/10 focus:border-gold transition-all duration-700 font-serif text-3xl md:text-4xl tracking-tight"
              aria-label="Pesquisar plantas"
            />
            <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-gold opacity-50 text-2xl group-focus-within:text-gold-dark transition-colors duration-500" aria-hidden="true">search</span>
          </div>
          
          <div className="flex justify-between items-center mt-6">
             <div className="h-px w-full max-w-[100px] bg-transparent"></div> {/* Spacer */}
             {!isLoading && (
                 <span className="text-[9px] font-mono uppercase tracking-widest text-forest-dark/30 animate-fade-in">
                    {plants.length} {plants.length === 1 ? 'Espécime Encontrado' : 'Espécimes Encontrados'}
                 </span>
             )}
          </div>
        </Reveal>

        {/* Grid System */}
        {isLoading ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
              {Array.from({ length: 6 }).map((_, i) => (
                 <div key={i} className="opacity-40">
                    <PlantCardSkeleton />
                 </div>
              ))}
           </div>
        ) : plants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {plants.map((plant, index) => (
              <Reveal key={plant.id} delay={index * 0.05}>
                  <div className="h-full">
                    <PlantCard plant={plant} onClick={() => setSelectedPlant(plant)} />
                  </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-40 opacity-60">
             <span className="material-symbols-outlined text-6xl mb-6 text-gold/30 font-thin">spa</span>
             <p className="text-3xl font-display-italic text-forest-dark/40">Nenhum resultado para "{searchTerm}"</p>
             <button 
                onClick={() => setSearchTerm('')} 
                className="mt-6 text-xs font-mono uppercase tracking-widest border-b border-forest-dark/20 hover:border-gold hover:text-gold transition-all"
             >
                Limpar filtros
             </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedPlant && (
          <PlantModal plant={selectedPlant} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Glossary;