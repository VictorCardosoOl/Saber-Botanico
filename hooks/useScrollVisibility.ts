import { useState, useEffect, useRef, useCallback } from 'react';

interface ScrollVisibilityOptions {
  threshold?: number;
}

export function useScrollVisibility({ threshold = 10 }: ScrollVisibilityOptions = {}) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const updateVisibility = useCallback(() => {
    const currentScrollY = window.scrollY;
    const lastScroll = lastScrollY.current;

    // Proteção contra "Rubber Banding" (scroll negativo no iOS/Mac)
    if (currentScrollY < 0) {
      lastScrollY.current = 0;
      ticking.current = false;
      return;
    }

    // Lógica de Visibilidade:
    // 1. Topo da página: Sempre visível
    if (currentScrollY <= threshold) {
      setIsVisible(true);
    } 
    // 2. Scroll Down: Ocultar (Focus Mode)
    else if (currentScrollY > lastScroll && currentScrollY > threshold) {
      setIsVisible(false);
    } 
    // 3. Scroll Up: Mostrar (Navigation Mode)
    else if (currentScrollY < lastScroll) {
      setIsVisible(true);
    }

    lastScrollY.current = currentScrollY;
    ticking.current = false;
  }, [threshold]);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateVisibility);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [updateVisibility]);

  return isVisible;
}