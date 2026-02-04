import { useState, useEffect, useRef } from 'react';

interface ScrollDirData {
  isScrollingUp: boolean;
  scrollPosition: number;
}

export function useScrollDirection(): ScrollDirData {
  const [data, setData] = useState<ScrollDirData>({
    isScrollingUp: false,
    scrollPosition: 0,
  });

  const lastScrollY = useRef<number>(typeof window !== 'undefined' ? window.scrollY : 0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const previousScrollY = lastScrollY.current;

      // Only update state if the scroll position has actually changed
      if (currentScrollY !== previousScrollY) {
        const isScrollingUp = currentScrollY < previousScrollY;
        
        setData({
          isScrollingUp,
          scrollPosition: currentScrollY,
        });

        // Prevent negative values (e.g., iOS overscroll)
        lastScrollY.current = currentScrollY > 0 ? currentScrollY : 0;
      }
      
      rafId.current = null;
    };

    const onScroll = () => {
      if (rafId.current === null) {
        rafId.current = window.requestAnimationFrame(updateScrollDirection);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return data;
}
