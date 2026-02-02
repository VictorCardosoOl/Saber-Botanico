import { useState, useEffect, useRef, useCallback } from 'react';

interface ScrollVisibilityOptions {
  threshold?: number;
}

export function useScrollVisibility({ threshold = 10 }: ScrollVisibilityOptions = {}) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const rafId = useRef<number | null>(null);

  const updateVisibility = useCallback(() => {
    const currentScrollY = window.scrollY;
    const lastScroll = lastScrollY.current;

    let newVisible = isVisible;

    if (currentScrollY <= threshold) {
      newVisible = true;
    } else if (currentScrollY > lastScroll && currentScrollY > threshold) {
      newVisible = false;
    } else if (currentScrollY < lastScroll) {
      newVisible = true;
    }

    if (newVisible !== isVisible) {
      setIsVisible(newVisible);
    }

    lastScrollY.current = currentScrollY;
    rafId.current = null;
  }, [isVisible, threshold]);

  useEffect(() => {
    const onScroll = () => {
      if (rafId.current === null) {
        rafId.current = window.requestAnimationFrame(updateVisibility);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, [updateVisibility]);

  return isVisible;
}