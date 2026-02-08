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
      whileHover={{ y: -4 }} 
      transition={{ layout: { duration: 0.3 }, y: { duration: 0.2 } }}
      className="group flex flex-col h-full bg-transparent relative rounded-sm cursor-pointer"
      onClick={onClick}
    >
        {/* IMAGEM - Container com Efeito Liquid Glass no Hover */}
        <motion.div 
            layoutId={`plant-image-${plant.id}`}
            className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6 shadow-sm group-hover:shadow-2xl transition-shadow duration-500 rounded-sm"
        >
            <div className="w-full h-full relative">
               <LazyImage 
                 src={plant.imageUrl} 
                 alt="" 
                 className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 grayscale-[10%] group-hover:grayscale-0"
               />
               
               {/* LIQUID GLASS OVERLAY - SHEEN EFFECT */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 skew-x-12 opacity-0 group-hover:opacity-100 pointer-events-none mix-blend-overlay">
                  {/* Animação do brilho passando */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover:animate-sheen skew-x-[-20deg]"></div>
               </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

             {plant.isRare && (
                <motion.div 
                    layoutId={`plant-badge-${plant.id}`}
                    className="absolute top-0 right-0 p-4 z-10" 
                    title="Espécie Rara"
                >
                     <div className="relative">
                        <div className="block w-2 h-2 bg-gold rounded-full shadow-[0_0_10px_rgba(197,160,40,0.8)] z-10 relative"></div>
                        <div className="absolute inset-0 bg-gold rounded-full animate-ping opacity-75"></div>
                     </div>
                </motion.div>
             )}
             
             <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-10 pointer-events-none">
                <span className="text-white font-mono text-[9px] uppercase tracking-widest border-b border-white/50 pb-1 backdrop-blur-sm px-1">Ver Detalhes</span>
             </div>
        </motion.div>
        
        {/* INFO CONTAINER */}
        <div className="flex flex-col flex-1 relative px-2">
            <header className="flex justify-between items-baseline mb-3">
               <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest opacity-70">Specimen Nº {plant.id.padStart(3, '0')}</span>
               <span className="font-mono text-[11px] text-gold-dark font-bold tracking-widest">{plant.price}</span>
            </header>
            
            <h3>
              <button 
                className="text-3xl font-serif font-normal text-charcoal leading-none tracking-tight mb-2 group-hover:text-gold-dark transition-colors duration-300 text-left w-full focus:outline-none focus:underline"
                aria-label={`Ver detalhes de ${plant.name}`}
              >
                {plant.name}
              </button>
            </h3>
            
            <p className="text-sm font-display-italic text-sage-dark mb-5 opacity-80 group-hover:opacity-100 transition-opacity">
              {plant.scientificName}
            </p>

            <div className="h-px w-8 bg-charcoal/10 mb-4 group-hover:w-full group-hover:bg-gold/30 transition-all duration-500"></div>

            <div className="flex-grow relative group/desc">
              <motion.p 
                layout="position"
                className={`text-body-editorial text-sm text-charcoal/70 leading-relaxed overflow-hidden ${isExpanded ? '' : 'line-clamp-2'}`}
              >
                  {plant.description}
              </motion.p>
              
              <AnimatePresence>
                   <motion.button
                     layout="position"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     onClick={toggleDescription}
                     className="relative z-10 mt-3 text-[10px] font-mono uppercase tracking-widest text-gold-dark hover:text-gold flex items-center gap-1 group/btn focus:outline-none focus:ring-2 focus:ring-gold rounded-sm px-1 -ml-1"
                     aria-expanded={isExpanded}
                     aria-label={isExpanded ? "Reduzir descrição" : "Ler descrição completa"}
                   >
                     <span>{isExpanded ? 'Reduzir' : 'Ler mais'}</span>
                     <span className={`material-symbols-outlined text-[14px] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        expand_more
                     </span>
                   </motion.button>
              </AnimatePresence>
            </div>
        </div>
    </motion.article>
  );
};

export default PlantCard;