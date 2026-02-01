import React, { useEffect, useCallback } from 'react';
import { RITUALS } from '../constants';
import { PlantSpecimen, RitualStep } from '../types';
import Tooltip from './Tooltip';

interface PlantModalProps {
  plant: PlantSpecimen | null;
  onClose: () => void;
}

const PlantModal: React.FC<PlantModalProps> = ({ plant, onClose }) => {
  
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!plant) return null;

  // Optimized lookup logic
  const careRitual: RitualStep = RITUALS.find(r => 
    plant.isRare ? r.id === 'arid' : r.id === 'tropical'
  ) || RITUALS[2]; // Default to Tropical if unknown

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div 
        className="absolute inset-0 bg-forest-dark/90 backdrop-blur-md transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      ></div>
      
      <div className="relative w-full max-w-4xl bg-[#FDFBF7] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-fade-in-up max-h-[90vh] md:max-h-[80vh]">
        <Tooltip content="Fechar (Esc)" position="left">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-charcoal hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </Tooltip>

        {/* Image Side */}
        <div className="w-full md:w-1/2 relative h-64 md:h-auto">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${plant.imageUrl}')` }}
            role="img"
            aria-label={`Imagem de ${plant.name}`}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r"></div>
          <div className="absolute bottom-6 left-6 text-white md:hidden">
            <h2 className="text-3xl font-serif font-bold">{plant.name}</h2>
            <p className="font-serif italic opacity-90">{plant.scientificName}</p>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
          <div className="hidden md:block mb-8">
            <h2 id="modal-title" className="text-4xl font-serif font-bold text-charcoal mb-2">{plant.name}</h2>
            <p className="font-serif italic text-xl text-gold-dark">{plant.scientificName}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
             {plant.isRare && (
               <Tooltip content="Espécie de difícil propagação">
                 <span className="px-3 py-1 bg-blue-100 text-[#4cb2e6] text-xs font-bold uppercase tracking-widest rounded-sm cursor-help">Raro</span>
               </Tooltip>
             )}
             <Tooltip content="Ideal para ambientes internos">
                <span className="px-3 py-1 bg-paper border border-gold/20 text-gold-dark text-xs font-bold uppercase tracking-widest rounded-sm cursor-help">Interior</span>
             </Tooltip>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">Sobre o Espécime</h3>
              <p className="font-alt text-lg leading-relaxed text-charcoal/80">
                {plant.description} Esta espécie é valorizada não apenas por sua beleza estética, mas por sua história botânica única. Requer atenção aos detalhes e recompensa o jardineiro paciente com um crescimento vigoroso e folhagem exuberante.
              </p>
            </div>

            <div className="border-t border-gold/20 pt-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Necessidades de Cultivo</h3>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-4">
                   <Tooltip content="Necessidade de Água">
                     <div className="w-10 h-10 rounded-full bg-[#F2EFE9] flex items-center justify-center text-gold-dark shrink-0 cursor-help">
                        <span className="material-symbols-outlined">water_drop</span>
                     </div>
                   </Tooltip>
                   <div>
                     <h4 className="font-bold text-charcoal font-serif">Rega</h4>
                     <p className="text-sm text-gray-600 leading-relaxed">{careRitual.description} ({careRitual.frequency})</p>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <Tooltip content="Exposição Solar">
                     <div className="w-10 h-10 rounded-full bg-[#F2EFE9] flex items-center justify-center text-gold-dark shrink-0 cursor-help">
                        <span className="material-symbols-outlined">wb_sunny</span>
                     </div>
                   </Tooltip>
                   <div>
                     <h4 className="font-bold text-charcoal font-serif">Luz</h4>
                     <p className="text-sm text-gray-600 leading-relaxed">Prefere luz indireta brilhante. Evite sol direto que pode queimar as folhas delicadas.</p>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <Tooltip content="Temperatura Ideal">
                     <div className="w-10 h-10 rounded-full bg-[#F2EFE9] flex items-center justify-center text-gold-dark shrink-0 cursor-help">
                        <span className="material-symbols-outlined">thermostat</span>
                     </div>
                   </Tooltip>
                   <div>
                     <h4 className="font-bold text-charcoal font-serif">Clima</h4>
                     <p className="text-sm text-gray-600 leading-relaxed">Manter entre 18°C e 26°C. Aprecia umidade elevada.</p>
                   </div>
                </div>
              </div>
            </div>
            
            <button className="w-full py-4 mt-4 border border-gold text-gold-dark font-mono text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold">
              Discutir no Fórum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantModal;