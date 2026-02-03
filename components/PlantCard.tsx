import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PlantSpecimen } from '../types';

interface PlantCardProps {
  plant: PlantSpecimen;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { scrollHeight, clientHeight } = entry.target;
        setIsTruncated(scrollHeight > clientHeight + 1);
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [plant.description, isExpanded]);

  const toggleDescription = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <div className="group flex flex-col h-full bg-transparent transition-all duration-500 ease-out cursor-pointer">
        {/* Image Area - Pure, no borders */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
            <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0" 
                style={{backgroundImage: `url('${plant.imageUrl}')`}}
            ></div>
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Rarity Tag - Minimalist */}
             {plant.isRare && (
                <div className="absolute top-0 right-0 p-4">
                     <span className="block w-2 h-2 bg-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.8)]"></span>
                </div>
             )}
             
             {/* Hover Actions */}
             <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-white font-mono text-[9px] uppercase tracking-widest border-b border-white/50 pb-1">Ler Ficha Técnica</span>
             </div>
        </div>
        
        {/* Info Area - Editorial Typography */}
        <div className="flex flex-col flex-1 relative px-2">
            <div className="flex justify-between items-baseline mb-2">
               <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">Nº {plant.id.padStart(3, '0')}</span>
               <span className="font-mono text-[10px] text-gold-dark font-bold tracking-widest">{plant.price}</span>
            </div>
            
            <h3 className="text-3xl font-serif font-medium text-charcoal leading-none tracking-tight mb-1 group-hover:text-gold-dark transition-colors duration-300">
              {plant.name}
            </h3>
            
            <p className="text-xs italic text-sage-dark font-serif tracking-wide mb-4 opacity-60 group-hover:opacity-100 transition-opacity">
              {plant.scientificName}
            </p>

            <div className="w-8 h-px bg-charcoal/10 mb-4 group-hover:w-full group-hover:bg-gold/30 transition-all duration-700"></div>

            <div className="flex-grow relative">
              <p 
                ref={textRef}
                className={`text-sm text-charcoal/60 font-sans leading-relaxed font-light transition-all duration-300 ${isExpanded ? '' : 'line-clamp-2'}`}
              >
                  {plant.description}
              </p>
            </div>
        </div>
    </div>
  );
};

export default PlantCard;