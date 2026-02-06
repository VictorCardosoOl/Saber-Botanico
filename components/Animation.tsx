import React from 'react';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';

// Curva refinada para sensação de luxo: início responsivo, final extremamente suave.
export const LUXURY_EASE = [0.25, 0.1, 0.25, 1.0]; 

interface WrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// Wrapper para Transição de Páginas
// Efeito: A página sobe levemente enquanto ganha opacidade.
export const PageTransition: React.FC<WrapperProps> = ({ children, className, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -20, filter: "blur(5px)", transition: { duration: 0.4, ease: "easeInOut" } }}
      transition={{ duration: 0.8, ease: LUXURY_EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Wrapper para Revelar ao Rolar (Scroll Reveal)
// Efeito: Fade Up clássico
export const Reveal: React.FC<WrapperProps> = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }} 
      transition={{ duration: 1.0, delay, ease: LUXURY_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Container para escalonamento de filhos (Stagger)
export const StaggerContainer: React.FC<WrapperProps> = ({ children, className, ...props }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Item individual para usar dentro de StaggerContainer
export const FadeUpItem = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: LUXURY_EASE } }
    }}
  >
    {children}
  </motion.div>
);

// Novo: Mask Reveal (Efeito de texto saindo de dentro de uma caixa)
// Muito usado em sites editoriais de luxo para títulos.
export const MaskReveal: React.FC<WrapperProps> = ({ children, className, delay = 0 }) => {
    return (
        <div className={`overflow-hidden ${className || ''}`}>
            <motion.div
                initial={{ y: "110%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, delay, ease: LUXURY_EASE }}
            >
                {children}
            </motion.div>
        </div>
    );
};