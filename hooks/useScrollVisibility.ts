import { useState, useEffect, useRef } from 'react';

interface ScrollVisibilityOptions {
  threshold?: number;
}

/**
 * Hook to determine if an element should be visible based on scroll direction.
 * Returns true (visible) when scrolling up or at the top.
 * Returns false (hidden) when scrolling down past the threshold.
 */
export function useScrollVisibility({ threshold = 10 }: ScrollVisibilityOptions = {}) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const updateVisibility = () => {
      const currentScrollY = window.scrollY;
      const lastScroll = lastScrollY.current;

      // Logic:
      // 1. Always visible at the very top (handling mobile bounce/negative scroll)
      // 2. Hide if scrolling down AND past threshold
      // 3. Show if scrolling up
      if (currentScrollY <= threshold) {
        setIsVisible(true);
      } else if (currentScrollY > lastScroll && currentScrollY > threshold) {
        setIsVisible(false);
      } else if (currentScrollY < lastScroll) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return isVisible;
}