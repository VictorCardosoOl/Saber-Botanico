import React from 'react';
import { motion } from 'framer-motion';

// Configuração de curva "Luxury" (lenta e suave, mas responsiva)
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
      initial={{ opacity: 0, y: 10 }} // Reduzido de 20 para 10 para menos salto
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.4, ease: LUXURY_EASE } }}
      transition={{ duration: 0.6, ease: LUXURY_EASE }}
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
      initial={{ opacity: 0, y: 30 }} // Reduzido de 60 para 30 (movimento mais sutil)
      whileInView={{ opacity: 1, y: 0 }}
      // margin "-5%" significa: comece a animar quando o topo do elemento estiver 5% dentro da tela (antes era muito tarde)
      viewport={{ once: true, margin: "-5%" }} 
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
            staggerChildren: 0.08, // Acelerado ligeiramente
            delayChildren: 0.1
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
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: LUXURY_EASE } }
    }}
  >
    {children}
  </motion.div>
);