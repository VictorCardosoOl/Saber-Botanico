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

    if (currentScrollY <= threshold) {
      setIsVisible(true);
    } else if (currentScrollY > lastScroll && currentScrollY > threshold) {
      setIsVisible(false);
    } else if (currentScrollY < lastScroll) {
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