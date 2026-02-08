
import React, { useEffect } from 'react';
import { RITUALS } from '../constants';
import { PlantSpecimen, RitualStep } from '../types';
import Tooltip from './Tooltip';
import { useCollection } from '../context/CollectionContext';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { motion } from 'framer-motion';
import { LUXURY_EASE } from './Animation';

interface PlantModalProps {
  plant: PlantSpecimen;
  onClose: () => void;
}

const PlantModal: React.FC<PlantModalProps> = ({ plant, onClose }) => {
  // Hook customizado para gerenciar foco e scroll lock
  const modalRef = useFocusTrap(!!plant);
  const { addToCollection, removeFromCollection, hasInCollection } = useCollection();
  
  // Handler para fechar com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!plant) return null;

  const isCollected = hasInCollection(plant.id);

  const handleCollectionToggle = () => {
    if (isCollected) {
        removeFromCollection(plant.id);
    } else {
        addToCollection(plant.id, plant.name);
    }
  };

  const careRitual: RitualStep = RITUALS.find(r => 
    plant.isRare ? r.id === 'arid' : r.id === 'tropical'
  ) || RITUALS[2];

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-title"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-forest-dark/90 backdrop-blur-md" 
        onClick={onClose}
        aria-hidden="true"
      ></motion.div>
      
      <motion.div 
        ref={modalRef}
        layoutId={`modal-container-${plant.id}`} // Opcional: Container compartilhado se desejar expandir o card inteiro
        className="relative w-full max-w-5xl bg-[#FDFBF7] rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] focus:outline-none"
        tabIndex={-1}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
        transition={{ duration: 0.6, ease: LUXURY_EASE }}
      >
        <Tooltip content="Fechar (Esc)" position="left">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-charcoal hover:bg-white transition-all duration-300 hover:rotate-90 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </Tooltip>

        {/* CONTAINER DA IMAGEM - Shared Layout ID igual ao do Card */}
        <motion.div 
          layoutId={`plant-image-${plant.id}`}
          className="w-full md:w-5/12 relative h-56 md:h-auto overflow-hidden bg-gray-100 group"
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
        >
          {/* Imagem Principal */}
          <img 
            src={plant.imageUrl} 
            alt={plant.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent pointer-events-none"></div>
          
          <motion.div 
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }} 
             transition={{ delay: 0.3 }}
          >
            <Tooltip content="Ver Imagem Original" position="right">
                <a 
                    href={plant.imageUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-forest-dark transition-all duration-300 hover:scale-110"
                    aria-label="Abrir imagem original em nova aba"
                >
                    <span className="material-symbols-outlined text-lg">open_in_new</span>
                </a>
            </Tooltip>
          </motion.div>

          <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
             <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 mb-2 opacity-80"
             >
                <span className="material-symbols-outlined text-sm">public</span>
                <span className="text-[10px] font-mono uppercase tracking-widest">{plant.origin}</span>
             </motion.div>
             <h2 id="modal-title" className="text-3xl md:text-4xl font-serif italic tracking-tighter leading-none mb-1">{plant.name}</h2>
             <p className="text-xs font-mono uppercase tracking-widest opacity-60">{plant.scientificName}</p>
          </div>
          
           {plant.isRare && (
                <motion.div 
                    layoutId={`plant-badge-${plant.id}`}
                    className="absolute top-0 right-0 p-4 z-10 pointer-events-none" 
                >
                     <div className="block w-2 h-2 bg-gold rounded-full shadow-[0_0_10px_rgba(197,160,40,0.8)]"></div>
                </motion.div>
             )}
        </motion.div>

        {/* CONTEÚDO DE TEXTO - Fade In Staggered */}
        <div className="w-full md:w-7/12 p-8 md:p-12 overflow-y-auto custom-scrollbar bg-paper">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gold/10"
          >
             <div className="flex items-center gap-2 px-3 py-1 bg-gold/5 border border-gold/20 rounded-sm">
                <span className="material-symbols-outlined text-gold-dark text-sm">verified_user</span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-dark">
                   Nível: {plant.careLevel}
                </span>
             </div>
             
             <div className={`flex items-center gap-2 px-3 py-1 rounded-sm border ${plant.toxicity === 'Pet Safe' ? 'bg-sage/10 border-sage/30 text-sage-dark' : 'bg-red-50 border-red-100 text-red-800'}`}>
                <span className="material-symbols-outlined text-sm">
                   {plant.toxicity === 'Pet Safe' ? 'pets' : 'warning'}
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
                   {plant.toxicity}
                </span>
             </div>
          </motion.div>

          <div className="space-y-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="font-sans text-lg font-light leading-loose text-charcoal/80 mb-8 text-justify">
                {plant.description}
              </p>
              
              <div className="bg-[#F2EFE9] p-6 relative border-l-2 border-gold/30">
                 <span className="material-symbols-outlined absolute top-4 left-4 text-gold/20 text-4xl -z-10">format_quote</span>
                 <p className="font-serif italic text-charcoal/90 text-lg leading-relaxed mb-3 relative z-10">
                    "{plant.curatorNote}"
                 </p>
                 <p className="text-[9px] font-mono uppercase tracking-widest text-gold-dark text-right">— Notas do Sommelier</p>
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-6 flex items-center gap-4">
                 <span className="w-8 h-px bg-gray-200"></span>
                 Ritual de Cultivo
                 <span className="w-8 h-px bg-gray-200"></span>
              </h3>
              
              <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                <div className="col-span-2 md:col-span-1">
                   <div className="flex items-center gap-3 mb-2 text-gold-dark">
                      <span className="material-symbols-outlined">water_drop</span>
                      <h4 className="font-serif text-lg text-charcoal">Hidratação</h4>
                   </div>
                   <p className="text-xs font-mono text-gray-500 uppercase tracking-wide mb-1">{careRitual.frequency}</p>
                   <p className="text-sm text-gray-600 leading-relaxed font-light">{careRitual.description}</p>
                </div>

                <div className="col-span-2 md:col-span-1">
                   <div className="flex items-center gap-3 mb-2 text-gold-dark">
                      <span className="material-symbols-outlined">wb_twilight</span>
                      <h4 className="font-serif text-lg text-charcoal">Iluminação</h4>
                   </div>
                   <p className="text-xs font-mono text-gray-500 uppercase tracking-wide mb-1">Indireta / Filtrada</p>
                   <p className="text-sm text-gray-600 leading-relaxed font-light">
                      Luz brilhante mas difusa. Evite sol direto do meio-dia que pode causar queimaduras foliares.
                   </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5, duration: 0.5 }}
               className="pt-6 mt-8 border-t border-gold/10 flex justify-end items-center"
            >
               <button 
                onClick={handleCollectionToggle}
                className={`px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-95 flex items-center gap-2 ${
                    isCollected 
                    ? 'bg-gold border-gold text-white hover:bg-gold-dark' 
                    : 'bg-transparent border-gold text-gold-dark hover:bg-gold hover:text-white'
                }`}
               >
                  {isCollected ? (
                      <>
                        <span className="material-symbols-outlined text-sm">bookmark</span>
                        Salvo no Herbário
                      </>
                  ) : (
                      <>
                        <span className="material-symbols-outlined text-sm">bookmark_border</span>
                        Salvar no Herbário
                      </>
                  )}
               </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PlantModal;
