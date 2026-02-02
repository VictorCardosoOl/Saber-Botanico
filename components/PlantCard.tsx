import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PlantSpecimen } from '../types';
import Tooltip from './Tooltip';
import { useGarden } from '../hooks/useGarden';

interface PlantCardProps {
  plant: PlantSpecimen;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const { hasPlant, togglePlant } = useGarden();

  const isSaved = hasPlant(plant.id);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { scrollHeight, clientHeight } = entry.target;
        setIsTruncated(scrollHeight > clientHeight);
      }
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [plant.description]);

  const toggleDescription = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  }, []);

  const openImage = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(plant.imageUrl, '_blank', 'noopener,noreferrer');
  }, [plant.imageUrl]);

  const handleSave = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    togglePlant(plant.id);
  }, [plant.id, togglePlant]);

  return (
    <article className="group flex flex-col h-full bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out border border-transparent hover:border-gold/10 focus-within:ring-2 focus-within:ring-gold/50">
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
            <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105 grayscale-[10%] group-hover:grayscale-0" 
                style={{backgroundImage: `url('${plant.imageUrl}')`}}
                role="img"
                aria-label={`Imagem de ${plant.name}`}
            />
            
            {/* Gradiente sempre visível no mobile para garantir leitura dos ícones */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

            {/* Actions: Always visible on mobile, hover on desktop */}
            <div className="absolute top-4 right-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col gap-3">
                <Tooltip content={isSaved ? "Remover do Jardim" : "Salvar no Jardim"} position="left">
                   <button 
                      onClick={handleSave}
                      className={`w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-gold ${isSaved ? 'bg-gold text-white' : 'bg-white/90 text-gold-dark hover:bg-gold hover:text-white'}`}
                      aria-label={isSaved ? "Remover dos favoritos" : "Salvar nos favoritos"}
                    >
                      <span className={`material-symbols-outlined text-[20px] ${isSaved ? 'font-variation-fill' : ''}`}>favorite</span>
                   </button>
                </Tooltip>

                <Tooltip content="Visualização Rápida" position="left">
                  <button 
                    className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-gold hover:text-white text-gold-dark transition-all focus:outline-none focus:ring-2 focus:ring-gold"
                    aria-label="Visualização Rápida"
                  >
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </Tooltip>
            </div>

             {plant.isRare && (
                <div className="absolute top-4 left-4 z-20">
                     <span className="px-2 py-1 text-[9px] font-mono font-bold tracking-widest uppercase bg-white/90 text-gold-dark backdrop-blur-md shadow-sm">Raro</span>
                </div>
             )}
        </div>
        
        <div className="p-6 md:p-8 flex flex-col flex-1 relative bg-white group-hover:bg-[#FDFBF7] transition-colors duration-500">
            <header className="mb-4">
                <h3 className="text-2xl font-serif font-medium text-charcoal leading-none tracking-tight mb-2 group-hover:text-gold-dark transition-colors">
                  {plant.name}
                </h3>
                <p className="text-xs italic text-sage-dark font-serif tracking-wide">{plant.scientificName}</p>
            </header>
            
            <div className="w-8 h-px bg-gold/20 mb-4 group-hover:w-full transition-all duration-700" />

            <div className="mb-6 flex-grow">
              <p 
                ref={textRef}
                className={`text-sm text-charcoal/80 font-sans leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}
              >
                  {plant.description}
              </p>
              
              {(isTruncated || isExpanded) && (
                <button 
                    onClick={toggleDescription}
                    className="text-[10px] font-bold uppercase tracking-widest text-gold-text hover:text-gold mt-3 focus:outline-none border-b border-gold/30 hover:border-gold pb-0.5 inline-block"
                >
                    {isExpanded ? 'Ler menos' : 'Leia mais'}
                </button>
              )}
            </div>
            
            <footer className="mt-auto pt-4 flex items-center justify-between opacity-80 md:opacity-60 md:group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-xs font-mono font-bold text-gold-dark">{plant.price}</span>
                <div className="flex items-center gap-2 text-charcoal/60 group-hover:text-gold-dark transition-colors">
                    <span className="text-[9px] font-mono uppercase tracking-widest">Ficha Técnica</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                </div>
            </footer>
        </div>
    </article>
  );
};

export default PlantCard;