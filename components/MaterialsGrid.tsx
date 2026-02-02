import React from 'react';
import { VASE_TERRACOTTA, VASE_CERAMIC, VASE_TECH } from '../constants';

const MaterialsGrid: React.FC = () => {
  const materials = [
    {
      title: 'Terracota',
      subtitle: 'O Clássico',
      desc: 'Barro cozido não esmaltado. Permite que a água e o ar passem pelas paredes, criando um ambiente respirável.',
      image: VASE_TERRACOTTA,
      features: ['Ideal para Cactos', 'Secagem Rápida']
    },
    {
      title: 'Cerâmica',
      subtitle: 'Estético',
      desc: 'Barro selado com vidro fundido. Retém a umidade consistentemente e oferece variedade estética infinita.',
      image: VASE_CERAMIC,
      features: ['Ideal para Tropicais', 'Retenção Média']
    },
    {
      title: 'Compósito',
      subtitle: 'Moderno',
      desc: 'Polímeros, fibra de vidro ou concreto leve. Durabilidade extrema e peso reduzido para grandes espécimes.',
      image: VASE_TECH,
      features: ['Uso Misto', 'Alta Resistência']
    }
  ];

  return (
    <div className="mb-40">
       <div className="flex items-center justify-between mb-16">
          <h3 className="text-4xl font-serif text-ink tracking-tight">Matéria Prima</h3>
          <span className="hidden md:block h-px flex-1 bg-ink/10 mx-12"></span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-gold-dark">Seletor de Materiais</span>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {materials.map((item, idx) => (
            <div key={idx} className="group relative bg-white hover:bg-[#FDFBF7] transition-all duration-700 p-12 flex flex-col h-full">
               <div className="h-56 relative overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-1000">
                  <div className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-[1.5s]" style={{ backgroundImage: `url('${item.image}')` }}></div>
               </div>
               <div className="flex-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-gold-dark mb-2 block">{item.subtitle}</span>
                  <h4 className="font-serif text-3xl mb-4 text-ink">{item.title}</h4>
                  <p className="text-sm font-light text-ink/60 leading-relaxed mb-8">
                     {item.desc}
                  </p>
               </div>
               <div className="pt-6 border-t border-ink/5">
                  <ul className="space-y-3">
                     {item.features.map((feature, fIdx) => (
                       <li key={fIdx} className="flex items-center gap-3 text-xs font-mono uppercase text-ink/50 tracking-wide">
                          <span className="w-1 h-1 rounded-full bg-gold"></span> {feature}
                       </li>
                     ))}
                  </ul>
               </div>
            </div>
          ))}
       </div>
    </div>
  );
};

export default MaterialsGrid;