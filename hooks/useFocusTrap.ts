import { useEffect, useRef } from 'react';

export function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const element = containerRef.current;
    if (!element) return;

    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    // Foca no primeiro elemento ao abrir
    if (firstElement) {
        // Pequeno delay para garantir que a animação de entrada não interfira
        requestAnimationFrame(() => firstElement.focus());
    }

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    const keyListener = (e: KeyboardEvent) => handleTabKey(e);
    
    element.addEventListener('keydown', keyListener);
    
    // Travar scroll do body
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      element.removeEventListener('keydown', keyListener);
      document.body.style.overflow = originalStyle;
    };
  }, [isActive]);

  return containerRef;
}
