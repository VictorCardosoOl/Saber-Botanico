import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';

interface SmoothScrollingProps {
  children?: React.ReactNode;
}

const SmoothScrolling: React.FC<SmoothScrollingProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Configuração de Luxo para o Scroll
    // Duration mais alta (1.5) cria sensação de peso/inércia.
    const lenis = new Lenis({
      duration: 1.5, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponencial suave
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9, // Reduz um pouco a velocidade para dar sensação de controle
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Loop de animação sincronizado
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Efeito para resetar o scroll ao mudar de rota
  useEffect(() => {
    if (lenisRef.current) {
      // immediate: true faz o scroll pular instantaneamente para o topo
      // isso evita conflito com a animação de saída da página (exit transition)
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  return <>{children}</>;
};

export default SmoothScrolling;