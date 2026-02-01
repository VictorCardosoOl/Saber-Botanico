import React, { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, position = 'top' }) => {
  // Configuração de posicionamento
  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div className="group relative inline-flex items-center justify-center">
      {children}
      <div 
        className={`absolute z-[60] hidden group-hover:block whitespace-nowrap bg-forest-dark border border-gold/30 text-gold-light text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-xl backdrop-blur-md animate-fade-in pointer-events-none ${positionClasses[position]}`}
      >
        {content}
        {/* Seta decorativa simples baseada em bordas CSS */}
        <div className={`absolute w-2 h-2 bg-forest-dark border-r border-b border-gold/30 rotate-45 transform 
          ${position === 'top' ? 'bottom-[-5px] left-1/2 -translate-x-1/2 border-l-0 border-t-0 bg-forest-dark' : ''}
          ${position === 'bottom' ? 'top-[-5px] left-1/2 -translate-x-1/2 border-r-0 border-b-0 bg-forest-dark' : ''}
          ${position === 'left' ? 'right-[-5px] top-1/2 -translate-y-1/2 border-l-0 border-b-0 bg-forest-dark' : ''}
          ${position === 'right' ? 'left-[-5px] top-1/2 -translate-y-1/2 border-r-0 border-t-0 bg-forest-dark' : ''}
        `}></div>
      </div>
    </div>
  );
};

export default Tooltip;