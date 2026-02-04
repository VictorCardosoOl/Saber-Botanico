import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for performance optimization
      requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 500);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full bg-paper text-forest-dark border border-gold/20 shadow-xl flex items-center justify-center hover:bg-gold hover:text-white transition-colors duration-300 group"
          aria-label="Voltar ao topo"
        >
          <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform">arrow_upward</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;