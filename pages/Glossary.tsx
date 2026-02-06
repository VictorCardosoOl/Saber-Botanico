import React, { useState, useEffect } from 'react';
import { PlantService } from '../services/plantService';
import { PlantSpecimen } from '../types';
import PlantCard from '../components/PlantCard';
import PlantModal from '../components/PlantModal';
import PlantCardSkeleton from '../components/PlantCardSkeleton';
import { useDebounce } from '../hooks/useDebounce';
import SEO from '../components/SEO';
import { PageTransition, Reveal } from '../components/Animation';

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
           new Promise(resolve => setTimeout(resolve, 400)) 
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

  return (
    <PageTransition className="min-h-screen pt-32 pb-20 bg-paper">
      <SEO title="Glosário Botânico" description="Explore nossa enciclopédia viva de espécies raras e exóticas." />
      
      <div className="fixed inset-0 opacity-[0.4] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply z-0"></div>

      <div className="container px-6 relative z-10 min-h-[60vh]">
        
        <div className="flex flex-col items-center mb-24 max-w-5xl mx-auto text-center">
          <Reveal>
              <div className="inline-flex items-center gap-4 mb-8 opacity-60">
                 <span className="text-gold-dark font-mono text-[10px] uppercase tracking-[0.3em]">Arquivo Botânico</span>
                 <span className="w-12 h-px bg-gold-dark"></span>
                 <span className="text-gold-dark font-mono text-[10px] uppercase tracking-[0.3em]">Vol. I</span>
              </div>
              <h1 className="text-fluid-h1 font-serif text-forest-dark mb-8 tracking-tighter leading-[0.9]">
                Índice de <br/><span className="font-display-italic text-gold-dark/90">Espécimes</span>
              </h1>
              <p className="text-body-editorial text-forest-dark/70 text-lg md:text-xl max-w-2xl mx-auto">
                Uma enciclopédia viva. Descubra a proveniência, rituais e a poesia biológica de cada espécie catalogada em nosso santuário.
              </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="sticky top-28 z-40 mb-20 max-w-2xl mx-auto">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Pesquisar por nome científico..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-paper/90 backdrop-blur-xl text-forest-dark placeholder-forest-dark/30 py-6 pl-16 pr-6 focus:outline-none focus:ring-0 focus:border-gold border-b-2 border-forest-dark/10 transition-all duration-300 font-serif text-2xl tracking-wide shadow-lg"
              aria-label="Pesquisar plantas"
            />
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gold opacity-80 text-2xl" aria-hidden="true">search</span>
          </div>
          <div className="text-center mt-6 h-6">
             {!isLoading && (
                 <span className="text-[10px] font-mono uppercase tracking-widest text-forest-dark/40 animate-fade-in">
                    {plants.length} Espécimes Encontrados
                 </span>
             )}
          </div>
        </Reveal>

        {isLoading ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {Array.from({ length: 6 }).map((_, i) => (
                 <div key={i} className="opacity-40">
                    <PlantCardSkeleton />
                 </div>
              ))}
           </div>
        ) : plants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {plants.map((plant, index) => (
              <Reveal key={plant.id} delay={index * 0.05}>
                  <div className="h-full">
                    <PlantCard plant={plant} onClick={() => setSelectedPlant(plant)} />
                  </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 opacity-50">
             <span className="material-symbols-outlined text-6xl mb-6 text-forest-dark/20 font-thin">spa</span>
             <p className="text-3xl font-display-italic text-forest-dark/40">Nenhum espécime encontrado.</p>
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