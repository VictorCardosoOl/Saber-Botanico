import { useState, useEffect, useRef } from 'react';

interface ScrollDirData {
  isScrollingUp: boolean;
  scrollPosition: number;
  scrollDirection: 'up' | 'down';
}

export function useScrollDirection(): ScrollDirData {
  const [data, setData] = useState<ScrollDirData>({
    isScrollingUp: true,
    scrollPosition: 0,
    scrollDirection: 'up',
  });

  const lastScrollY = useRef<number>(typeof window !== 'undefined' ? window.scrollY : 0);
  const ticking = useRef(false);

  useEffect(() => {
    const threshold = 10; // Mínimo de pixels para considerar uma mudança de direção

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const previousScrollY = lastScrollY.current;
      
      const scrollDifference = Math.abs(currentScrollY - previousScrollY);

      // Previne comportamento elástico (overscroll) no topo/fundo
      const safeScrollY = Math.max(0, currentScrollY);

      if (scrollDifference > threshold) {
        const isScrollingUp = safeScrollY < previousScrollY;
        
        setData({
          isScrollingUp,
          scrollPosition: safeScrollY,
          scrollDirection: isScrollingUp ? 'up' : 'down',
        });

        lastScrollY.current = safeScrollY;
      } else {
        // Apenas atualiza a posição se a diferença for pequena, mas não a direção
        setData(prev => ({
          ...prev,
          scrollPosition: safeScrollY
        }));
      }

      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return data;
}