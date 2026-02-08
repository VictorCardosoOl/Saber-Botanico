import React from 'react';
import { HERO_IMAGE } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LUXURY_EASE } from './Animation';

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax refinado e mais sutil para o texto (sobe apenas 100px)
  const yText = useTransform(scrollY, [0, 800], [0, 100]);
  const yImage = useTransform(scrollY, [0, 800], [0, 100]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);
  
  // Efeito de Zoom Out: Começa em 1.2 (levemente ampliado) e vai para 1.0 (tamanho original)
  const scaleImage = useTransform(scrollY, [0, 800], [1.2, 1]);

  return (
    <section id="hero" className="relative h-[100svh] w-full flex flex-col justify-center overflow-hidden bg-forest-dark">
      
      {/* Background Ambience - Atmosfera Imersiva Liquid Glass */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         {/* Blob Superior Direito - Liquid Gold */}
         <div className="absolute -top-[10%] -right-[10%] w-[70vw] h-[90vh] liquid-filter opacity-40">
             <div className="w-full h-full bg-gradient-to-br from-gold/20 via-gold-dark/10 to-transparent rounded-full blur-[80px] animate-blob-pulse" />
         </div>
         
         {/* Blob Inferior Esquerdo - Deep Forest Oil */}
         <div className="absolute -bottom-[10%] -left-[10%] w-[50vw] h-[70vh] liquid-filter opacity-30">
            <div className="w-full h-full bg-gradient-to-tr from-forest-light/30 via-forest/10 to-transparent rounded-full blur-[60px] animate-blob-pulse" style={{ animationDelay: '2s' }} />
         </div>

         {/* Central Heartbeat - Subtle Refraction */}
         <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-[80vw] h-[80vw] md:w-[45vw] md:h-[45vw] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,rgba(15,47,30,0.05)_40%,transparent_70%)] rounded-full blur-[60px] animate-breathing-glow mix-blend-screen liquid-filter"></div>
         </div>
      </div>

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
                  {/* Liquid Overlay on Image - Adds a "wet glass" feel to the photo */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent mix-blend-overlay pointer-events-none"></div>
                  
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-l from-forest-dark/20 via-forest-dark/40 to-forest-dark/90"></div>
                  <div className="absolute inset-0 bg-[#382E18] mix-blend-color opacity-30"></div> {/* Sepia Tone */}
               </div>
               
               {/* Decorative Lines with Glass Shine */}
               <div className="absolute -left-12 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
               <div className="absolute -bottom-12 left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent hidden lg:block"></div>
            </motion.div>

            {/* Typography Layer - Overlapping */}
            <motion.div 
              style={{ y: yText, opacity: opacityText }}
              className="relative z-10 lg:pl-12 max-w-5xl mix-blend-hard-light"
            >
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="flex items-center gap-4 mb-10"
               >
                  <span className="h-px w-16 bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>
                  <span className="text-gold text-[10px] font-mono uppercase tracking-widest-xl drop-shadow-md">Edição Limitada .01</span>
               </motion.div>

               {/* TITLES - Using Updated Typography Scale */}
               <div className="overflow-hidden">
                 <motion.h1 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: LUXURY_EASE, delay: 0.5 }}
                    className="text-fluid-h1 font-serif text-paper drop-shadow-2xl"
                 >
                   Botânica
                 </motion.h1>
               </div>
               
               <div className="overflow-hidden mb-8 md:mb-12">
                 <motion.h1 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: LUXURY_EASE, delay: 0.65 }}
                    className="text-fluid-h1 font-display-italic text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark pr-4 filter drop-shadow-sm"
                 >
                   Esculpida
                 </motion.h1>
               </div>

               <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                  className="text-body-editorial text-paper/70 text-base md:text-xl max-w-lg ml-2 md:ml-24 border-l border-white/20 pl-8 backdrop-blur-[2px]"
               >
                  Uma exploração digital da flora rara. Onde a <span className="text-gold font-display-italic">ciência biológica</span> encontra a estética do silêncio. Curadoria por especialistas para colecionadores exigentes.
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
              <span className="block text-[9px] font-mono uppercase tracking-widest-xl text-paper/50 mb-2">Coordenadas</span>
              <span className="block text-xs font-mono text-paper tracking-widest">23°33'S 46°38'W</span>
           </div>

           <div className="flex flex-col items-center gap-4 absolute left-1/2 -translate-x-1/2">
              <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-paper/60">Scroll</span>
              <div className="w-px h-16 bg-gradient-to-b from-paper to-transparent"></div>
           </div>

           <div className="hidden md:block text-right">
              <span className="block text-[9px] font-mono uppercase tracking-widest-xl text-paper/50 mb-2">Volume</span>
              <span className="block text-xs font-mono text-paper tracking-widest">No. 01 — 2024</span>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;