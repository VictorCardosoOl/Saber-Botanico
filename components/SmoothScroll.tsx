import React, { useLayoutEffect, useRef } from 'react';
import ReactLenis from '@studio-freight/react-lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<any>(null);

  useLayoutEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;

    // Sincronização Crítica:
    // Fazemos o GSAP controlar o loop de atualização do Lenis.
    // Isso garante que o ScrollTrigger e o Smooth Scroll estejam perfeitamente sincronizados no mesmo frame.
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    // Adiciona o Lenis ao ticker do GSAP
    gsap.ticker.add(update);
    
    // Desativa o "lag smoothing" do GSAP para evitar pulos no scroll ao trocar de aba ou em lags de CPU
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      autoRaf={false} // IMPORTANTE: Desativamos o RAF nativo do Lenis para o GSAP controlar
      options={{
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;