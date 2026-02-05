import React from 'react';
import { motion } from 'framer-motion';

// DOC: Ajuste de curva. Antes era muito lenta. Agora é "Snappy" mas suave.
// Bezier curve: [0.25, 1, 0.5, 1] é padrão industry-standard para UI moderna.
export const LUXURY_EASE = [0.25, 1, 0.5, 1];

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// Wrapper para Transição de Páginas
export const PageTransition: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: LUXURY_EASE }} // Duração reduzida para 0.5s para navegação mais rápida
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Wrapper para Revelar ao Rolar (Scroll Reveal)
export const Reveal: React.FC<WrapperProps> = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }} // Margem ajustada para disparar antes
      transition={{ duration: 0.8, delay, ease: LUXURY_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Container para escalonamento de filhos
export const StaggerContainer: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeUpItem = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: LUXURY_EASE } }
    }}
  >
    {children}
  </motion.div>
);