import React from 'react';
import { PlantSpecimen } from '../types';

interface PlantCardProps {
  plant: PlantSpecimen;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  return (
    <div className="glass-panel bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md border border-white/50 rounded-2xl overflow-hidden group flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-[4/5] overflow-hidden" role="img" aria-label={`Foto de ${plant.name}`}>
        <div className="absolute inset-0 bg-white/10 mix-blend-soft-light pointer-events-none z-10"></div>
        <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
            style={{backgroundImage: `url('${plant.imageUrl}')`}}
        ></div>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <button 
              className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white text-[#4cb2e6]"
              aria-label={`Adicionar ${plant.name} aos favoritos`}
            >
                <span className="material-symbols-outlined text-[18px]">favorite</span>
            </button>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1 relative">
          <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#4cb2e6]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="flex justify-between items-start mb-2">
              <div>
                  <h3 className="text-lg font-bold text-charcoal leading-tight font-sans">{plant.name}</h3>
                  <p className="text-sm italic text-charcoal/60 font-serif">{plant.scientificName}</p>
              </div>
              <div className="flex flex-col gap-1 items-end">
                {plant.isRare && <span className="px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase bg-blue-100 text-[#4cb2e6] border border-blue-200">Raro</span>}
                {plant.isNew && <span className="px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase bg-green-100 text-green-700 border border-green-200">Novo</span>}
                {plant.isHot && <span className="px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase bg-[#4cb2e6]/10 text-[#4cb2e6] border border-[#4cb2e6]/20">Em Alta</span>}
              </div>
          </div>
          
          <p className="text-sm text-charcoal/70 mt-2 mb-4 line-clamp-2 leading-relaxed">
              {plant.description}
          </p>
          
          <div className="mt-auto flex items-center justify-between pt-4 border-t border-charcoal/5">
              <span className="text-charcoal font-bold">{plant.price}</span>
              <button 
                className="text-xs font-bold text-charcoal/80 hover:text-[#4cb2e6] transition-colors flex items-center gap-1 uppercase tracking-wider"
                aria-label={`Ver detalhes de ${plant.name}`}
              >
                  Ver Detalhes <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
          </div>
      </div>
    </div>
  );
};

export default PlantCard;