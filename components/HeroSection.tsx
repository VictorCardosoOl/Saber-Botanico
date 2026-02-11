import React, { useRef, useLayoutEffect } from 'react';
import { HERO_IMAGE } from '../constants';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Liquid Parallax na Imagem
      // A imagem move mais devagar que o scroll E estica verticalmente (scaleY) para simular líquido
      gsap.to(imageRef.current, {
        yPercent: 20, // Move 20% para baixo
        scale: 1.1,   // Zoom in sutil
        filter: "contrast(1.2) brightness(0.9)", // Altera o tom conforme desce
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1 // Scrub suave (1s delay)
        }
      });

      // 2. Texto com movimento divergente e Blur
      gsap.to(textRef.current, {
        yPercent: -30, // Move para cima (oposto da imagem)
        opacity: 0,
        filter: "blur(10px)",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "40% top", // Desaparece mais rápido
          scrub: 0.5
        }
      });

      // 3. Animação de entrada do Título (Intro)
      const tl = gsap.timeline();
      tl.fromTo(titleRef.current?.children || [], 
        { y: "120%", rotateZ: 5, opacity: 0 },
        { y: "0%", rotateZ: 0, opacity: 1, duration: 1.5, stagger: 0.1, ease: "power4.out", delay: 0.5 }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="hero" className="relative h-[100svh] w-full flex flex-col justify-center overflow-hidden bg-forest-dark perspective-1000">
      
      {/* Background Ambience - Mantendo os blobs CSS mas com opacidade controlada */}
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
            
            {/* GSAP Image Container */}
            <div className="absolute lg:right-0 top-1/2 -translate-y-1/2 w-full lg:w-[68%] h-[60vh] lg:h-[90%] z-0 overflow-hidden clip-path-inset">
               {/* Wrapper para animação GSAP */}
               <div ref={imageRef} className="w-full h-[120%] -mt-[10%] relative"> 
                  <img 
                    src={HERO_IMAGE}
                    alt="Monstera Albo Variegata"
                    className="w-full h-full object-cover opacity-90 filter contrast-[1.05] desaturate-[0.15]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-forest-dark/10 via-forest-dark/50 to-forest-dark/95"></div>
                  <div className="absolute inset-0 bg-[#050A07] mix-blend-color opacity-40"></div>
                  
                  {/* Overlay de Vidro Líquido na Imagem */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent mix-blend-overlay opacity-50"></div>
               </div>
               
               {/* Linhas Decorativas (Estáticas em relação ao container) */}
               <div className="absolute inset-0 border border-white/5 pointer-events-none z-10 hidden lg:block"></div>
            </div>

            {/* Camada de Tipografia */}
            <div 
              ref={textRef}
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

               <div ref={titleRef} className="space-y-[-1rem] md:space-y-[-2rem] mb-10 md:mb-14">
                 <div className="overflow-hidden">
                    <h1 className="text-fluid-h1 font-serif text-paper drop-shadow-2xl mix-blend-overlay block origin-bottom-left">
                      Botânica
                    </h1>
                 </div>
                 
                 <div className="overflow-hidden">
                    <h1 className="text-fluid-h1 font-display-italic text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark pr-4 pb-2 block origin-bottom-left">
                      Esculpida
                    </h1>
                 </div>
               </div>

               <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                  className="text-body-editorial text-paper/80 text-lg md:text-xl max-w-lg border-l border-gold/20 pl-8 backdrop-blur-sm"
               >
                  Uma exploração digital da flora rara. Onde a <span className="text-gold font-display-italic">ciência biológica</span> encontra a estética do silêncio.
               </motion.p>
            </div>
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
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;