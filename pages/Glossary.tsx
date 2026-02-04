import React, { useState, useEffect } from 'react';
import { PlantService } from '../services/plantService';
import { PlantSpecimen } from '../types';
import PlantCard from '../components/PlantCard';
import PlantModal from '../components/PlantModal';
import { useDebounce } from '../hooks/useDebounce';
import SEO from '../components/SEO';
import { PageTransition, Reveal } from '../components/Animation';

// Componente Skeleton local para evitar CLS (Layout Shift)
const PlantCardSkeleton = () => (
  <div className="flex flex-col h-full animate-pulse">
    <div className="aspect-[3/4] bg-white/5 rounded-sm mb-6 w-full relative overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
    </div>
    <div className="flex justify-between mb-2">
       <div className="h-3 w-16 bg-white/10 rounded-sm"></div>
       <div className="h-3 w-12 bg-white/10 rounded-sm"></div>
    </div>
    <div className="h-8 w-3/4 bg-white/10 rounded-sm mb-2"></div>
    <div className="h-3 w-1/2 bg-white/5 rounded-sm mb-6"></div>
    <div className="h-px w-8 bg-white/10 mb-4"></div>
    <div className="space-y-2">
       <div className="h-2 w-full bg-white/5 rounded-sm"></div>
       <div className="h-2 w-5/6 bg-white/5 rounded-sm"></div>
    </div>
  </div>
);

const Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [plants, setPlants] = useState<PlantSpecimen[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPlant, setSelectedPlant] = useState<PlantSpecimen | null>(null);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const fetchPlants = async () => {
      setIsLoading(true);
      // Pequeno delay artificial para evitar flash de conteúdo se a resposta for muito rápida (opcional, bom para UX suave)
      // Em produção real, você removeria o delay artificial ou ajustaria conforme latência.
      const [results] = await Promise.all([
         PlantService.search(debouncedSearchTerm),
         new Promise(resolve => setTimeout(resolve, 400)) 
      ]);
      
      setPlants(results);
      setIsLoading(false);
    };
    fetchPlants();
  }, [debouncedSearchTerm]);

  const handleCloseModal = () => setSelectedPlant(null);

  return (
    <PageTransition className="min-h-screen pt-32 pb-20 bg-paper">
      <SEO title="Glosário Botânico" description="Explore nossa enciclopédia viva de espécies raras e exóticas." />
      
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-[0.4] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply z-0"></div>

      <div className="container px-6 relative z-10 min-h-[60vh]">
        
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
        <Reveal delay={0.1} className="sticky top-28 z-40 mb-20 max-w-2xl mx-auto">
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
          <div className="text-center mt-4 h-6">
             {!isLoading && (
                 <span className="text-[9px] font-mono uppercase tracking-widest text-forest-dark/40 animate-fade-in">
                    {plants.length} Espécimes Encontrados
                 </span>
             )}
          </div>
        </Reveal>

        {/* Grid com Estado de Loading (Skeleton) */}
        {isLoading ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {[1, 2, 3, 4, 5, 6].map((i) => (
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