import React from 'react';
import { HERO_IMAGE } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LUXURY_EASE } from './Animation';

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  // Paralaxe suave: Ajustado de 150 para 100 para um movimento menos agressivo
  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  const yImage = useTransform(scrollY, [0, 500], [0, 50]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Efeito Zoom Out: A imagem começa levemente ampliada e reduz ao rolar (1.15 -> 1.0)
  const scaleImage = useTransform(scrollY, [0, 500], [1.15, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        // Aumentado o delay para 1.2s para garantir que a imagem já tenha sido revelada
        // antes do texto começar a aparecer, criando uma narrativa visual sequencial.
        delayChildren: 1.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0, rotate: 2 },
    visible: { 
      y: 0, 
      opacity: 1, 
      rotate: 0,
      transition: { duration: 1.2, ease: LUXURY_EASE } 
    }
  };

  return (
    <section id="hero" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-forest-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none z-20"></div>
      
      {/* Organic Light Blurs - Animated */}
      <motion.div 
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[50vw] h-[80vh] bg-gradient-to-b from-gold/5 to-transparent blur-[120px] pointer-events-none"
      ></motion.div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[60vh] bg-forest-light/10 blur-[100px] pointer-events-none"></div>

      <div className="container relative z-10 h-full flex flex-col justify-center items-center">
        
        {/* Main Composition */}
        <div className="relative w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-0 mt-8 lg:mt-0">
          
          {/* Text Layer - Left but overlapping */}
          <motion.div 
            style={{ y: yText, opacity: opacityText }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-20 lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mix-blend-normal"
          >
             <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full border border-gold/50"></span>
                <span className="text-gold/80 text-[10px] font-mono uppercase tracking-[0.3em]">Série Botânica N.01</span>
             </motion.div>

             <motion.h1 variants={itemVariants} className="font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] text-paper tracking-tighter mb-8">
               Natureza <br/>
               <span className="italic font-light text-gold-light opacity-90 ml-4 lg:ml-12 block transform lg:-translate-x-4">Esculpida</span>
             </motion.h1>

             <motion.p variants={itemVariants} className="max-w-xl font-sans text-sm md:text-lg font-light text-sage-light leading-loose tracking-wide mb-10">
                Uma exploração digital da flora rara. Onde a ciência biológica encontra a estética do silêncio.
             </motion.p>

             <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
                <button className="relative overflow-hidden group px-8 py-4 bg-transparent border border-paper/20 rounded-full hover:border-gold/50 transition-colors">
                   <span className="relative z-10 text-[10px] font-mono uppercase tracking-widest text-paper group-hover:text-gold transition-colors">Entrar na Galeria</span>
                   <div className="absolute inset-0 bg-white/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                </button>
             </motion.div>
          </motion.div>

          {/* Image Layer - Right / Asymmetric */}
          <motion.div 
            style={{ y: yImage }}
            initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.8, ease: LUXURY_EASE, delay: 0.2 }}
            className="relative z-10 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full max-w-[400px] lg:max-w-[550px] aspect-[3/4] group perspective-1000"
          >
             {/* Decorative Lines */}
             <div className="absolute -top-12 -right-12 w-full h-full border border-white/5 rounded-t-full rounded-b-full hidden lg:block animate-pulse-subtle"></div>
             
             {/* Main Image Container */}
             <div className="relative w-full h-full overflow-hidden rounded-t-[200px] rounded-b-[10px] shadow-2xl shadow-black/50">
                <motion.div 
                  className="w-full h-full bg-cover bg-center transition-all duration-[2s] ease-out group-hover:brightness-90 group-hover:contrast-[1.1]"
                  style={{ backgroundImage: `url('${HERO_IMAGE}')`, scale: scaleImage }}
                ></motion.div>
                
                {/* Texture Overlay on Image */}
                <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 to-transparent opacity-60"></div>
                
                {/* Floating Caption inside image */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="absolute bottom-8 left-0 w-full text-center"
                >
                   <p className="font-serif italic text-2xl text-white/90">Monstera Albo</p>
                   <p className="font-mono text-[9px] uppercase tracking-widest text-white/50 mt-1">Variegata . 2024</p>
                </motion.div>
             </div>

             {/* Floating "Badge" Element */}
             <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8, type: "spring" }}
                className="absolute -bottom-6 -left-6 lg:bottom-12 lg:-left-12 size-24 md:size-32 bg-forest-deep rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md shadow-xl animate-spin-slow"
             >
                <svg className="w-full h-full p-2" viewBox="0 0 100 100">
                   <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                   <text className="text-[10px] uppercase font-mono tracking-[0.3em] fill-gold-light">
                      <textPath href="#curve">
                         Curadoria . Botânica . Rituais .
                      </textPath>
                   </text>
                </svg>
                <span className="material-symbols-outlined absolute text-gold text-2xl">spa</span>
             </motion.div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mix-blend-difference"
        >
           <span className="text-[9px] font-mono uppercase tracking-widest text-paper">Explorar</span>
           <motion.span 
             animate={{ height: [40, 60, 40] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             className="w-px bg-paper"
           ></motion.span>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;