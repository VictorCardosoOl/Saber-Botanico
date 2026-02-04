import React, { useState, useCallback, KeyboardEvent } from 'react';
import { PlantSpecimen } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import LazyImage from './LazyImage';

interface PlantCardProps {
  plant: PlantSpecimen;
  onClick?: () => void; // Adicionado para suportar click do pai se necessário
}

const PlantCard: React.FC<PlantCardProps> = ({ plant, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Previne a propagação para não ativar o clique do card principal ao interagir com "Ler mais"
  const toggleDescription = useCallback((e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  }, []);

  // Handler para navegação por teclado (Acessibilidade)
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  }, [onClick]);

  return (
    <motion.article 
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ y: -8 }}
      transition={{ layout: { duration: 0.3, ease: "easeInOut" }, y: { duration: 0.2 } }}
      className="group flex flex-col h-full bg-transparent cursor-pointer relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:rounded-sm"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalhes de ${plant.name}`}
    >
        {/* Visual Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6 shadow-sm group-hover:shadow-2xl transition-shadow duration-500 rounded-sm">
            
            <div className="w-full h-full relative">
               <LazyImage 
                 src={plant.imageUrl} 
                 alt={`Exemplar de ${plant.name}`}
                 className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
               />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

             {plant.isRare && (
                <div className="absolute top-0 right-0 p-4 z-10" title="Espécie Rara">
                     <motion.span 
                        animate={{ boxShadow: ["0 0 0px rgba(197, 160, 40, 0)", "0 0 10px rgba(197, 160, 40, 0.8)", "0 0 0px rgba(197, 160, 40, 0)"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="block w-2 h-2 bg-gold rounded-full"
                        aria-hidden="true"
                     ></motion.span>
                     <span className="sr-only">Item Raro</span>
                </div>
             )}
             
             <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-10">
                <span className="text-white font-mono text-[9px] uppercase tracking-widest border-b border-white/50 pb-1">Ver Detalhes</span>
             </div>
        </div>
        
        {/* Content Info */}
        <div className="flex flex-col flex-1 relative px-2">
            <header className="flex justify-between items-baseline mb-2">
               <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">Nº {plant.id.padStart(3, '0')}</span>
               <span className="font-mono text-[10px] text-gold-dark font-bold tracking-widest">{plant.price}</span>
            </header>
            
            <h3 className="text-3xl font-serif font-medium text-charcoal leading-none tracking-tight mb-1 group-hover:text-gold-dark transition-colors duration-300">
              {plant.name}
            </h3>
            
            <p className="text-xs italic text-sage-dark font-serif tracking-wide mb-4 opacity-60 group-hover:opacity-100 transition-opacity">
              {plant.scientificName}
            </p>

            <motion.div 
              initial={{ width: 32 }}
              whileHover={{ width: "100%", backgroundColor: "rgba(197, 160, 40, 0.3)" }}
              transition={{ duration: 0.5 }}
              className="h-px bg-charcoal/10 mb-4"
              aria-hidden="true"
            ></motion.div>

            <div className="flex-grow relative group/desc">
              <motion.p 
                layout
                className={`text-sm text-charcoal/60 font-sans leading-relaxed font-light overflow-hidden transition-all duration-300 ${isExpanded ? '' : 'line-clamp-2'}`}
              >
                  {plant.description}
              </motion.p>
              
              <AnimatePresence>
                   <motion.button
                     layout
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     onClick={toggleDescription}
                     onKeyDown={(e) => {
                       if(e.key === 'Enter' || e.key === ' ') {
                         e.stopPropagation(); // Impede abrir o modal
                         toggleDescription(e);
                       }
                     }}
                     className="mt-3 text-[10px] font-mono uppercase tracking-widest text-gold-dark hover:text-gold flex items-center gap-1 group/btn focus:outline-none focus:underline"
                     aria-expanded={isExpanded}
                     aria-label={isExpanded ? "Reduzir descrição" : "Ler descrição completa"}
                   >
                     <span>{isExpanded ? 'Reduzir' : 'Ler mais'}</span>
                     <motion.span 
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="material-symbols-outlined text-[14px]"
                        aria-hidden="true"
                     >
                        expand_more
                     </motion.span>
                   </motion.button>
              </AnimatePresence>
            </div>
        </div>
    </motion.article>
  );
};

export default PlantCard;