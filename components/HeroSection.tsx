import React from 'react';
import { HERO_IMAGE } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LUXURY_EASE } from './Animation';

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax refinado
  const yText = useTransform(scrollY, [0, 800], [0, 200]);
  const yImage = useTransform(scrollY, [0, 800], [0, 100]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);
  const scaleImage = useTransform(scrollY, [0, 800], [1.1, 1]);

  return (
    <section id="hero" className="relative h-[100svh] w-full flex flex-col justify-center overflow-hidden bg-forest-dark">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[60vw] h-[80vh] bg-gold/5 blur-[150px] rounded-full pointer-events-none animate-blob-pulse" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[60vh] bg-forest-light/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10 h-full flex flex-col justify-center">
        
        <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-center">
          
          {/* Editorial Layout: Text Overlapping Image */}
          <div className="relative w-full lg:h-[80vh] flex items-center justify-center lg:justify-start">
            
            {/* Background Image Container with Cinematic Aspect Ratio */}
            <motion.div 
              style={{ y: yImage, scale: scaleImage }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1.5, ease: LUXURY_EASE, delay: 0.2 }}
              className="absolute lg:right-0 top-1/2 -translate-y-1/2 w-full lg:w-[65%] h-[60vh] lg:h-[85%] z-0"
            >
               <div className="relative w-full h-full overflow-hidden">
                  <img 
                    src={HERO_IMAGE}
                    alt="Monstera Albo Variegata"
                    className="w-full h-full object-cover opacity-80 filter contrast-[1.1] desaturate-[0.2]"
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-l from-forest-dark/20 via-forest-dark/40 to-forest-dark/90"></div>
                  <div className="absolute inset-0 bg-[#382E18] mix-blend-color opacity-30"></div> {/* Sepia Tone */}
               </div>
               
               {/* Decorative Lines */}
               <div className="absolute -left-12 top-12 bottom-12 w-px bg-white/10 hidden lg:block"></div>
               <div className="absolute -bottom-12 left-12 right-12 h-px bg-white/10 hidden lg:block"></div>
            </motion.div>

            {/* Typography Layer - Overlapping */}
            <motion.div 
              style={{ y: yText, opacity: opacityText }}
              className="relative z-10 lg:pl-12 max-w-4xl mix-blend-hard-light"
            >
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="flex items-center gap-4 mb-8"
               >
                  <span className="h-px w-12 bg-gold"></span>
                  <span className="text-gold text-[10px] font-mono uppercase tracking-[0.4em]">Edição Limitada</span>
               </motion.div>

               <div className="overflow-hidden">
                 <motion.h1 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: LUXURY_EASE, delay: 0.5 }}
                    className="font-serif text-[clamp(4rem,10vw,9.5rem)] leading-[0.85] text-paper tracking-tighter"
                 >
                   Botânica
                 </motion.h1>
               </div>
               
               <div className="overflow-hidden mb-8 md:mb-12">
                 <motion.h1 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: LUXURY_EASE, delay: 0.65 }}
                    className="font-serif text-[clamp(4rem,10vw,9.5rem)] leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold-dark tracking-tighter italic pr-4"
                 >
                   Esculpida
                 </motion.h1>
               </div>

               <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                  className="max-w-md font-sans text-sm md:text-base font-light text-paper/70 leading-loose tracking-wide ml-2 md:ml-24 border-l border-white/20 pl-6"
               >
                  Uma exploração digital da flora rara. Onde a ciência biológica encontra a estética do silêncio. Curadoria por especialistas para colecionadores exigentes.
               </motion.p>
            </motion.div>
          </div>

        </div>

        {/* Bottom Elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="absolute bottom-12 left-0 w-full flex justify-between items-end px-6 lg:px-12 pointer-events-none mix-blend-difference"
        >
           <div className="hidden md:block">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-paper/50 mb-1">Coordenadas</span>
              <span className="block text-xs font-mono text-paper">23°33'S 46°38'W</span>
           </div>

           <div className="flex flex-col items-center gap-4 absolute left-1/2 -translate-x-1/2">
              <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-paper/60">Scroll</span>
              <div className="w-px h-16 bg-gradient-to-b from-paper to-transparent"></div>
           </div>

           <div className="hidden md:block text-right">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-paper/50 mb-1">Volume</span>
              <span className="block text-xs font-mono text-paper">No. 01 — 2024</span>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;