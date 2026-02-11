
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
    const threshold = 10; 

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const previousScrollY = lastScrollY.current;
      
      const scrollDifference = Math.abs(currentScrollY - previousScrollY);
      const safeScrollY = Math.max(0, currentScrollY);

      // Apenas processa se houve movimento significativo
      if (scrollDifference > threshold) {
        const isScrollingUp = safeScrollY < previousScrollY;
        const newDirection = isScrollingUp ? 'up' : 'down';
        
        // PERFORMANCE: Só atualiza o estado se a direção mudou ou se é a primeira vez
        // Isso evita re-renders massivos do Header enquanto o usuário apenas rola na mesma direção
        setData(prev => {
            if (prev.scrollDirection !== newDirection || Math.abs(prev.scrollPosition - safeScrollY) > 50) {
                return {
                    isScrollingUp,
                    scrollPosition: safeScrollY,
                    scrollDirection: newDirection,
                };
            }
            return prev;
        });

        lastScrollY.current = safeScrollY;
      } else {
        // Atualiza posição ocasionalmente para efeitos de transparência no topo
        if (safeScrollY < 50) {
            setData(prev => ({ ...prev, scrollPosition: safeScrollY }));
        }
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
