import React, { useState, useCallback } from 'react';
import { PlantSpecimen } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface PlantCardProps {
  plant: PlantSpecimen;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <motion.div 
      layout
      whileHover={{ y: -8 }}
      transition={{ layout: { duration: 0.3, ease: "easeInOut" }, y: { duration: 0.2 } }}
      className="group flex flex-col h-full bg-transparent cursor-pointer"
    >
        {/* Image Area - Pure, no borders */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6 shadow-sm group-hover:shadow-2xl transition-shadow duration-500 rounded-sm">
            <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" 
                style={{backgroundImage: `url('${plant.imageUrl}')`}}
            ></div>
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Rarity Tag - Minimalist */}
             {plant.isRare && (
                <div className="absolute top-0 right-0 p-4">
                     <motion.span 
                        animate={{ boxShadow: ["0 0 0px rgba(197, 160, 40, 0)", "0 0 10px rgba(197, 160, 40, 0.8)", "0 0 0px rgba(197, 160, 40, 0)"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="block w-2 h-2 bg-gold rounded-full"
                     ></motion.span>
                </div>
             )}
             
             {/* Hover Actions */}
             <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-white font-mono text-[9px] uppercase tracking-widest border-b border-white/50 pb-1">Ver Detalhes</span>
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

            <motion.div 
              initial={{ width: 32 }}
              whileHover={{ width: "100%", backgroundColor: "rgba(197, 160, 40, 0.3)" }}
              transition={{ duration: 0.5 }}
              className="h-px bg-charcoal/10 mb-4"
            ></motion.div>

            <motion.div layout className="flex-grow relative group/desc">
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
                     className="mt-3 text-[10px] font-mono uppercase tracking-widest text-gold-dark hover:text-gold flex items-center gap-1 group/btn"
                   >
                     <span>{isExpanded ? 'Reduzir' : 'Ler mais'}</span>
                     <motion.span 
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="material-symbols-outlined text-[14px]"
                     >
                        expand_more
                     </motion.span>
                   </motion.button>
              </AnimatePresence>
            </motion.div>
        </div>
    </motion.div>
  );
};

export default PlantCard;