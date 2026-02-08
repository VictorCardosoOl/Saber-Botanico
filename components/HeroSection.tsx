import React from 'react';
import { HERO_IMAGE } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LUXURY_EASE } from './Animation';

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax Sutil
  const yText = useTransform(scrollY, [0, 800], [0, 120]);
  const yImage = useTransform(scrollY, [0, 800], [0, 60]); // Imagem move menos que o texto
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);
  const scaleImage = useTransform(scrollY, [0, 1000], [1.15, 1.05]); // Zoom out muito suave

  return (
    <section id="hero" className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden bg-forest-dark">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         <div className="absolute -top-[10%] -right-[10%] w-[60vw] h-[80vh] liquid-filter opacity-30">
             <div className="w-full h-full bg-gradient-to-br from-gold/10 via-gold-dark/5 to-transparent rounded-full blur-[100px] animate-blob-pulse" />
         </div>
         <div className="absolute -bottom-[10%] -left-[10%] w-[50vw] h-[70vh] liquid-filter opacity-20">
            <div className="w-full h-full bg-gradient-to-tr from-forest-light/40 via-forest/10 to-transparent rounded-full blur-[80px] animate-blob-pulse" style={{ animationDelay: '2s' }} />
         </div>
      </div>

      <div className="container relative z-10 h-full flex flex-col justify-center px-6 md:px-12">
        
        <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-center">
          
          <div className="relative w-full lg:h-[85vh] flex items-center justify-center lg:justify-start">
            
            {/* Imagem Principal */}
            <motion.div 
              style={{ y: yImage, scale: scaleImage }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1.8, ease: LUXURY_EASE, delay: 0.1 }}
              className="absolute lg:right-0 top-1/2 -translate-y-1/2 w-full lg:w-[68%] h-[60vh] lg:h-[90%] z-0"
            >
               <div className="relative w-full h-full overflow-hidden">
                  <img 
                    src={HERO_IMAGE}
                    alt="Monstera Albo Variegata"
                    className="w-full h-full object-cover opacity-90 filter contrast-[1.05] desaturate-[0.15]"
                  />
                  {/* Gradientes Refinados para Leitura */}
                  <div className="absolute inset-0 bg-gradient-to-l from-forest-dark/10 via-forest-dark/50 to-forest-dark/95"></div>
                  <div className="absolute inset-0 bg-[#050A07] mix-blend-color opacity-40"></div>
               </div>
               
               {/* Linhas Decorativas */}
               <div className="absolute -left-12 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block"></div>
               <div className="absolute -bottom-12 left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block"></div>
            </motion.div>

            {/* Camada de Tipografia */}
            <motion.div 
              style={{ y: yText, opacity: opacityText }}
              className="relative z-10 lg:pl-4 max-w-5xl"
            >
               <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="flex items-center gap-4 mb-12"
               >
                  <div className="flex items-center gap-2 border border-gold/30 rounded-full px-4 py-1.5 bg-forest-dark/30 backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></span>
                      <span className="text-gold-light text-[9px] font-mono uppercase tracking-widest">Edição Limitada .01</span>
                  </div>
               </motion.div>

               <div className="overflow-hidden">
                 <motion.h1 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.4, ease: LUXURY_EASE, delay: 0.4 }}
                    className="text-fluid-h1 font-serif text-paper drop-shadow-2xl mix-blend-overlay"
                 >
                   Botânica
                 </motion.h1>
               </div>
               
               <div className="overflow-hidden mb-10 md:mb-14">
                 <motion.h1 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.4, ease: LUXURY_EASE, delay: 0.55 }}
                    className="text-fluid-h1 font-display-italic text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark pr-4 pb-2"
                 >
                   Esculpida
                 </motion.h1>
               </div>

               <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                  className="text-body-editorial text-paper/80 text-lg md:text-xl max-w-lg border-l border-gold/20 pl-8"
               >
                  Uma exploração digital da flora rara. Onde a <span className="text-gold font-display-italic">ciência biológica</span> encontra a estética do silêncio.
               </motion.p>
            </motion.div>
          </div>

        </div>

        {/* Elementos de Navegação Inferior */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1.5 }}
          className="absolute bottom-12 left-0 w-full flex justify-between items-end px-6 lg:px-12 pointer-events-none mix-blend-screen"
        >
           <div className="hidden md:block">
              <span className="block text-[9px] font-mono uppercase tracking-widest text-white/40 mb-2">Coordenadas</span>
              <span className="block text-xs font-mono text-white/70 tracking-widest">23°33'S 46°38'W</span>
           </div>

           <div className="flex flex-col items-center gap-4 absolute left-1/2 -translate-x-1/2">
              <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/50">Scroll</span>
              <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
           </div>

           <div className="hidden md:block text-right">
              <span className="block text-[9px] font-mono uppercase tracking-widest text-white/40 mb-2">Volume</span>
              <span className="block text-xs font-mono text-white/70 tracking-widest">No. 01 — 2024</span>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;