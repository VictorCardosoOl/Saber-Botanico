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
    // Stop propagation vital para não disparar o click do card (stretched link)
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
      className="group flex flex-col h-full bg-transparent relative rounded-sm"
    >
        {/* 
           IMAGEM
           Nota: Removemos o onClick daqui. A interação agora é via o Título (Stretched Link).
        */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6 shadow-sm group-hover:shadow-2xl transition-shadow duration-500 rounded-sm">
            <div className="w-full h-full relative">
               <LazyImage 
                 src={plant.imageUrl} 
                 alt="" // Alt vazio pois o contexto é dado pelo texto do card
                 className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 grayscale-[10%] group-hover:grayscale-0"
               />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

             {plant.isRare && (
                <div className="absolute top-0 right-0 p-4 z-10" title="Espécie Rara">
                     <div className="block w-2 h-2 bg-gold rounded-full shadow-[0_0_10px_rgba(197,160,40,0.8)] animate-pulse"></div>
                </div>
             )}
             
             <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-10 pointer-events-none">
                <span className="text-white font-mono text-[9px] uppercase tracking-widest border-b border-white/50 pb-1">Ver Detalhes</span>
             </div>
        </div>
        
        {/* INFO CONTAINER */}
        <div className="flex flex-col flex-1 relative px-2">
            <header className="flex justify-between items-baseline mb-2">
               <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">Nº {plant.id.padStart(3, '0')}</span>
               <span className="font-mono text-[10px] text-gold-dark font-bold tracking-widest">{plant.price}</span>
            </header>
            
            {/* 
                CORREÇÃO DE A11Y E UX:
                Transformamos o Título em um botão/link que estende sua área clicável 
                para cobrir o card todo (exceto outros botões interativos).
                Isso usa a técnica ::after { absolute inset-0 }
            */}
            <h3>
              <button 
                onClick={onClick}
                className="text-3xl font-serif font-medium text-charcoal leading-none tracking-tight mb-1 group-hover:text-gold-dark transition-colors duration-300 text-left w-full focus:outline-none focus:underline after:absolute after:inset-0 after:z-0"
                aria-label={`Ver detalhes de ${plant.name}`}
              >
                {plant.name}
              </button>
            </h3>
            
            <p className="text-xs italic text-sage-dark font-serif tracking-wide mb-4 opacity-60 group-hover:opacity-100 transition-opacity">
              {plant.scientificName}
            </p>

            <div className="h-px w-8 bg-charcoal/10 mb-4 group-hover:w-full group-hover:bg-gold/30 transition-all duration-500"></div>

            <div className="flex-grow relative group/desc">
              <motion.p 
                layout="position"
                className={`text-sm text-charcoal/60 font-sans leading-relaxed font-light overflow-hidden ${isExpanded ? '' : 'line-clamp-2'}`}
              >
                  {plant.description}
              </motion.p>
              
              <AnimatePresence>
                   <motion.button
                     layout="position"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     onClick={toggleDescription}
                     // Z-Index relativo para ficar ACIMA do stretched link do card
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
