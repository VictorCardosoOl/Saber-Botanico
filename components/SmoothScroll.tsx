import React, { useEffect, useRef } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // Sync GSAP ticker with Lenis
    // This connects GSAP's internal RAF loop to Lenis's scroll updates
    // Ensuring no jitter between GSAP animations and the smooth scroll
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    // Disable GSAP's lag smoothing to prevent jumps during heavy JS execution
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  // Custom Easing function equivalent to 'power3.out'
  // Formula: 1 - (1 - t)^3
  const easePower3Out = (t: number) => 1 - Math.pow(1 - t, 3);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      autoRaf={false} // Disable Lenis internal RAF to let GSAP drive it
      options={{
        lerp: 0.08, // Damping 0.08
        duration: 1.2,
        easing: easePower3Out, // Power3.out easing
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
