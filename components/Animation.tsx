import React from 'react';
import { motion } from 'framer-motion';

// Configuração de curva "Luxury" (lenta e suave)
export const LUXURY_EASE = [0.22, 1, 0.36, 1];

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// Wrapper para Transição de Páginas
export const PageTransition: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: LUXURY_EASE } }}
      transition={{ duration: 0.8, ease: LUXURY_EASE }}
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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.0, delay, ease: LUXURY_EASE }}
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
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
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
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: LUXURY_EASE } }
    }}
  >
    {children}
  </motion.div>
);
