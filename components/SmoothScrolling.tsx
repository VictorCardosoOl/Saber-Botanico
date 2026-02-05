import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

interface SmoothScrollingProps {
  children: React.ReactNode;
}

/**
 * DOC: SmoothScrolling Component
 * Implementa a biblioteca Lenis para scroll inercial de alta performance.
 * Isso resolve a sensação de "peso" e falta de fluidez em sites com muitas imagens.
 */
const SmoothScrolling: React.FC<SmoothScrollingProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Inicialização do Lenis com parâmetros de física "Luxury"
    const lenis = new Lenis({
      duration: 1.2, // Duração da inércia (mais alto = mais suave/lento)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva exponencial suave
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2, // Sensibilidade ao toque
    });

    lenisRef.current = lenis;

    // Loop de animação (Request Animation Frame)
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrolling;