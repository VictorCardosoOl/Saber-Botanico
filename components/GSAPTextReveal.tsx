import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GSAPTextRevealProps {
  children: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'div';
  delay?: number;
}

const GSAPTextReveal: React.FC<GSAPTextRevealProps> = ({ 
  children, 
  className = "", 
  tag: Tag = 'div',
  delay = 0 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Simulação simples de SplitText (dividir por palavras para performance sem plugin pago)
    // Para um efeito mais refinado, em produção usa-se o SplitText Plugin pago da GSAP
    // Aqui faremos uma animação de máscara simples
    
    const ctx = gsap.context(() => {
      gsap.fromTo(el, 
        { 
          y: 100, 
          opacity: 0,
          rotateX: -20
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.5,
          delay: delay,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // Começa quando o topo do elemento atinge 85% da viewport
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div className="overflow-hidden">
      <Tag ref={containerRef} className={`will-change-transform ${className}`}>
        {children}
      </Tag>
    </div>
  );
};

export default GSAPTextReveal;