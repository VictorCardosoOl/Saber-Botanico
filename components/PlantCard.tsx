import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PlantSpecimen } from '../types';
import Tooltip from './Tooltip';

interface PlantCardProps {
  plant: PlantSpecimen;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  // Hygiene: Uso de ResizeObserver ao invés de window event listener para performance
  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // Verifica se o scrollHeight é maior que a altura do cliente + margem de erro
        const { scrollHeight, clientHeight } = entry.target;
        setIsTruncated(scrollHeight > clientHeight + 1);
      }
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [plant.description, isExpanded]);

  const toggleDescription = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <div className="group flex flex-col h-full bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out border border-transparent hover:border-gold/10">
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
            <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105 grayscale-[10%] group-hover:grayscale-0" 
                style={{backgroundImage: `url('${plant.imageUrl}')`}}
            ></div>
            
            {/* Overlay Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <Tooltip content="Visualização Rápida" position="left">
                  <button 
                    className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-gold hover:text-white text-gold-dark transition-all"
                    aria-label="Visualização Rápida"
                  >
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
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
            <div className="mb-4">
                <h3 className="text-2xl font-serif font-medium text-charcoal leading-none tracking-tight mb-2 group-hover:text-gold-dark transition-colors">{plant.name}</h3>
                <p className="text-xs italic text-sage-dark font-serif tracking-wide">{plant.scientificName}</p>
            </div>
            
            <div className="w-8 h-px bg-gold/20 mb-4 group-hover:w-full transition-all duration-700"></div>

            <div className="mb-6 flex-grow">
              <p 
                ref={textRef}
                className={`text-sm text-charcoal/70 font-sans leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}
              >
                  {plant.description}
              </p>
              
              {(isTruncated || isExpanded) && (
                <button 
                    onClick={toggleDescription}
                    className="text-[10px] font-bold uppercase tracking-widest text-gold-dark hover:text-gold mt-3 focus:outline-none border-b border-gold/30 hover:border-gold pb-0.5 inline-block"
                >
                    {isExpanded ? 'Ler menos' : 'Leia mais'}
                </button>
              )}
            </div>
            
            <div className="mt-auto pt-4 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-xs font-mono font-bold text-gold-dark">{plant.price}</span>
                <div className="flex items-center gap-2 text-charcoal/40 group-hover:text-gold-dark transition-colors">
                    <span className="text-[9px] font-mono uppercase tracking-widest">Ficha Técnica</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PlantCard;