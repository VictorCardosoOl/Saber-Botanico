
import React from 'react';
import { VASE_TERRACOTTA, VASE_CERAMIC, VASE_TECH } from '../constants';
import { motion } from 'framer-motion';

const MaterialsGrid: React.FC = () => {
  const materials = [
    {
      title: 'Argila Toscana',
      subtitle: 'Transpiração Ativa',
      desc: 'Material de alta porosidade, não esmaltado. Permite a troca gasosa lateral e evaporação rápida (efeito resfriamento). Essencial para orquídeas e suculentas.',
      image: VASE_TERRACOTTA,
      code: 'MAT-TER-01'
    },
    {
      title: 'Grês Esmaltado',
      subtitle: 'Isolamento Hídrico',
      desc: 'Queimado a 1200°C e vitrificado. Cria um ambiente hermético que retém umidade por períodos prolongados. Ideal para Calatheas e Marantas.',
      image: VASE_CERAMIC,
      code: 'MAT-CER-02'
    },
    {
      title: 'Compósito Polimérico',
      subtitle: 'Engenharia Térmica',
      desc: 'Ultraleve e quimicamente inerte. Possui parede dupla para isolamento térmico das raízes contra flutuações bruscas de temperatura.',
      image: VASE_TECH,
      code: 'MAT-POL-03'
    }
  ];

  return (
    <div className="mb-40">
       <div className="flex items-end justify-between mb-20 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold-dark mb-2 block">Catálogo de Estruturas</span>
            <h3 className="text-4xl font-serif text-paper tracking-tight">Engenharia do Recipiente</h3>
          </div>
          <div className="hidden md:block text-right">
             <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Matéria & Função v2.0</span>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {materials.map((item, idx) => (
            <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col"
            >
               <div className="aspect-[4/5] relative overflow-hidden mb-8 bg-white/5 border border-white/5 rounded-sm">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-60 group-hover:opacity-100" style={{ backgroundImage: `url('${item.image}')` }}></div>
                  
                  {/* Overlay Técnico */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-forest-dark/90 via-transparent to-transparent">
                     <div className="flex justify-between items-start">
                        <span className="font-mono text-[9px] text-white/60 border border-white/20 px-2 py-1 bg-black/20 backdrop-blur-sm">{item.code}</span>
                     </div>
                  </div>
               </div>

               <div className="flex-1 border-l border-gold/20 pl-6 group-hover:border-gold transition-colors duration-500">
                  <h4 className="font-serif text-2xl mb-2 text-paper group-hover:text-gold transition-colors">{item.title}</h4>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-4 block">{item.subtitle}</span>
                  <p className="text-sm font-light text-white/60 leading-relaxed max-w-xs">
                     {item.desc}
                  </p>
               </div>
            </motion.div>
          ))}
       </div>
    </div>
  );
};

export default MaterialsGrid;
