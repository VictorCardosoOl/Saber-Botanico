
import React from 'react';
import { SOIL_IMAGE_MAIN, SOIL_IMAGE_SMALL_1, SOIL_IMAGE_SMALL_2 } from '../constants';
import LazyImage from './LazyImage';
import { motion } from 'framer-motion';
import { Reveal, StaggerContainer, LUXURY_EASE } from './Animation';

const SoilSection: React.FC = () => {
  return (
    <section id="soil" className="relative w-full bg-paper text-forest-dark font-sans py-24 md:py-40 overflow-hidden">
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply"></div>
      
      <div className="container relative z-10 px-6">
        
        {/* Header Editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-8 relative">
            <Reveal>
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold-dark/80 block mb-6">Geologia Aplicada</span>
                <h2 className="font-serif text-fluid-h1 text-forest-dark tracking-tighter leading-[0.85]">
                  Alquimia do <br/>
                  <span className="italic text-gold-dark opacity-90 ml-12">Substrato</span>
                </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4 border-l border-gold/30 pl-8 pb-2">
            <Reveal delay={0.2}>
                <p className="font-alt text-2xl leading-tight text-forest-dark/80 italic mb-4">
                  "Raízes saudáveis exigem oxigênio tanto quanto exigem água. O segredo reside nos espaços vazios entre as partículas."
                </p>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-dark">— Princípio do Chunky Mix</span>
            </Reveal>
          </div>
        </div>

        {/* Asymmetrical Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-40 relative">
             <div className="lg:col-span-7 relative h-[60vh] lg:h-[80vh]">
                <Reveal className="w-full h-full">
                    <div className="relative w-full h-full overflow-hidden bg-forest-dark group">
                        <LazyImage 
                          src={SOIL_IMAGE_MAIN} 
                          alt="Preparo do Solo com Perlite e Casca de Pinus"
                          className="w-full h-full object-cover sepia-[0.2] opacity-90 transition-transform duration-[2s] group-hover:scale-105"
                        />
                        <div className="absolute top-8 left-8 border border-white/20 px-4 py-2 bg-white/5 backdrop-blur-md">
                            <span className="text-white font-mono text-[10px] uppercase tracking-widest">Fig 1.1 — Granulometria Grossa</span>
                        </div>
                    </div>
                </Reveal>
                
                {/* Floating Element */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: LUXURY_EASE, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-12 -right-12 w-64 h-64 hidden lg:block z-20 p-2 bg-paper shadow-2xl rotate-3"
                >
                    <LazyImage 
                        src={SOIL_IMAGE_SMALL_1} 
                        alt="Textura de solo vulcânico"
                        className="w-full h-full object-cover grayscale contrast-125"
                    />
                </motion.div>
             </div>

             <div className="lg:col-span-5 flex flex-col justify-center lg:pl-16 pt-16 lg:pt-0">
                <StaggerContainer className="space-y-12">
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
                        <span className="text-6xl text-gold-dark/20 font-serif block mb-4">01.</span>
                        <h3 className="text-3xl font-serif text-forest-dark mb-4">A Fundação de Drenagem</h3>
                        <p className="font-sans text-forest-dark/70 leading-loose text-justify font-light">
                            O erro primário é o uso de terra vegetal compacta. Para <i>Araceas</i> (Monsteras, Philodendrons), o solo deve desmoronar na mão. Utilizamos uma base de casca de pinus compostada para estrutura e acidez leve.
                        </p>
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
                        <span className="text-6xl text-gold-dark/20 font-serif block mb-4">02.</span>
                        <h3 className="text-3xl font-serif text-forest-dark mb-4">Macroporosidade</h3>
                        <p className="font-sans text-forest-dark/70 leading-loose text-justify font-light">
                            Adicionamos agregados minerais inertes como Perlita Expandida ou Pedra-Pomes (Pumice). Estes componentes criam bolsas de ar permanentes, prevenindo a hipóxia radicular e apodrecimento.
                        </p>
                    </motion.div>
                </StaggerContainer>
             </div>
        </div>

        {/* Horizontal Scroll / Metodologia */}
        <div className="border-t border-forest-dark/5 pt-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                 <h3 className="text-fluid-h2 font-serif text-forest-dark">A Tríade Mineral</h3>
                 <span className="font-mono text-[10px] text-forest-dark/50 uppercase tracking-widest">Matéria Prima Essencial</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-forest-dark/10 border border-forest-dark/10">
                {[
                    { title: 'Perlita / Pumice', desc: 'Rocha vulcânica expandida. Retém água microscopicamente enquanto drena macroscopicamente.', img: SOIL_IMAGE_SMALL_2 },
                    { title: 'Casca de Pinus', desc: 'Matéria orgânica estrutural. Simula os detritos do chão da floresta tropical e acidifica levemente o pH.', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800' },
                    { title: 'Carvão Ativado', desc: 'O purificador. Absorve toxinas acumuladas, previne odores e atua como bactericida natural no sistema.', img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800' }
                ].map((item, idx) => (
                    <div key={idx} className="group relative bg-paper h-[400px] flex flex-col justify-end p-8 overflow-hidden hover:bg-[#F2EFE9] transition-colors duration-500">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                             <LazyImage src={item.img} alt={item.title} className="w-full h-full object-cover grayscale" />
                        </div>
                        <div className="relative z-10">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-gold-dark mb-2 block">Componente 0{idx + 1}</span>
                            <h4 className="font-serif text-3xl text-forest-dark mb-4">{item.title}</h4>
                            <p className="font-sans text-sm text-forest-dark/60 font-light leading-relaxed border-t border-forest-dark/10 pt-4">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default SoilSection;
