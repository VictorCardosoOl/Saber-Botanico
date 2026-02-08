import React, { useState, useCallback } from 'react';
import { PlantSpecimen } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import LazyImage from './LazyImage';

interface PlantCardProps {
  plant: PlantSpecimen;
  onClick?: () => void;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = useCallback((e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    e.preventDefault(); 
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <motion.article 
      layout="position" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="group flex flex-col h-full bg-transparent relative cursor-pointer"
      onClick={onClick}
    >
        {/* IMAGEM - Minimalista com Zoom Suave */}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#F0EEE6] mb-8">
            <div className="absolute inset-0 transition-transform duration-[1.5s] ease-luxury group-hover:scale-105">
               <LazyImage 
                 src={plant.imageUrl} 
                 alt="" 
                 className="w-full h-full object-cover transition-all duration-[1.2s] ease-luxury grayscale-[15%] group-hover:grayscale-0 group-hover:contrast-[1.05]"
               />
            </div>
            
            {/* Overlay sutil apenas para contraste de texto se necessário, ou brilho */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700 pointer-events-none"></div>

            {/* Rare Badge - Style Refined */}
             {plant.isRare && (
                <div className="absolute top-4 right-4 z-10">
                     <div className="flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur-md border border-white/50">
                        <span className="block w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></span>
                        <span className="text-[9px] font-mono uppercase tracking-widest text-forest-dark">Rara</span>
                     </div>
                </div>
             )}
             
             {/* Efeito Sheen (Vidro) no Hover */}
             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 pointer-events-none mix-blend-overlay group-hover:animate-sheen"></div>
        </div>
        
        {/* INFO CONTAINER - Tipografia Editorial */}
        <div className="flex flex-col flex-1 relative px-1">
            <header className="flex justify-between items-start mb-2 border-b border-forest-dark/5 pb-4 group-hover:border-gold/30 transition-colors duration-700">
               <div>
                 <h3 className="text-3xl font-serif text-forest-dark leading-none tracking-tight group-hover:text-gold-dark transition-colors duration-500">
                    {plant.name}
                 </h3>
                 <span className="block mt-2 font-display-italic text-sm text-sage-dark group-hover:text-forest-dark/70 transition-colors duration-500">
                   {plant.scientificName}
                 </span>
               </div>
               
               <div className="flex flex-col items-end gap-1">
                  <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest opacity-60">Nº {plant.id.padStart(3, '0')}</span>
                  <span className="font-mono text-xs text-forest-dark tracking-wide mt-1">{plant.price}</span>
               </div>
            </header>
            
            <div className="mt-4 flex-grow relative">
              <motion.p 
                layout="position"
                className={`text-body-editorial text-sm text-forest-dark/60 leading-relaxed overflow-hidden ${isExpanded ? '' : 'line-clamp-2'}`}
              >
                  {plant.description}
              </motion.p>
              
              <AnimatePresence>
                   <div className="flex items-center justify-between mt-4">
                     <button
                       onClick={toggleDescription}
                       className="text-[9px] font-mono uppercase tracking-widest text-gold-dark/70 hover:text-gold-dark flex items-center gap-1 group/btn transition-all focus:outline-none"
                     >
                       <span className="border-b border-transparent group-hover/btn:border-gold-dark transition-all">
                         {isExpanded ? 'Ler Menos' : 'Ler Mais'}
                       </span>
                     </button>
                     
                     {/* Call to Action Sutil */}
                     <span className="w-8 h-px bg-forest-dark/10 group-hover:w-16 group-hover:bg-gold transition-all duration-700"></span>
                   </div>
              </AnimatePresence>
            </div>
        </div>
    </motion.article>
  );
};

export default PlantCard;