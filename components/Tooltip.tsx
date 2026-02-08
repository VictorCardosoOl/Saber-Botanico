
import React, { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Configuração de posicionamento
  const positionClasses = {
    top: { bottom: "100%", left: "50%", x: "-50%", marginBottom: "8px" },
    bottom: { top: "100%", left: "50%", x: "-50%", marginTop: "8px" },
    left: { right: "100%", top: "50%", y: "-50%", marginRight: "8px" },
    right: { left: "100%", top: "50%", y: "-50%", marginLeft: "8px" },
  };

  const initialAnimation = {
      opacity: 0,
      scale: 0.9,
      ...positionClasses[position]
  };

  const activeAnimation = {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
  };

  const exitAnimation = {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeIn" }
  };

  return (
    <div 
        className="relative inline-flex items-center justify-center"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
    >
      {children}
      
      <AnimatePresence>
        {isVisible && (
            <motion.div 
                initial={initialAnimation}
                animate={activeAnimation}
                exit={exitAnimation}
                className="absolute z-[60] whitespace-nowrap bg-forest-dark border border-gold/30 text-gold-light text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-xl backdrop-blur-md pointer-events-none"
                style={positionClasses[position] as any}
            >
                {content}
                
                {/* Seta decorativa */}
                <div className={`absolute w-2 h-2 bg-forest-dark border-r border-b border-gold/30 rotate-45
                ${position === 'top' ? 'bottom-[-5px] left-1/2 -translate-x-1/2 border-l-0 border-t-0' : ''}
                ${position === 'bottom' ? 'top-[-5px] left-1/2 -translate-x-1/2 border-r-0 border-b-0 border-t border-l border-gold/30 bg-forest-dark rotate-[225deg]' : ''} 
                ${position === 'left' ? 'right-[-5px] top-1/2 -translate-y-1/2 border-l-0 border-b-0' : ''}
                ${position === 'right' ? 'left-[-5px] top-1/2 -translate-y-1/2 border-r-0 border-t-0 border-l border-b border-gold/30 bg-forest-dark rotate-[135deg]' : ''}
                `}></div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
