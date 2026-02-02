import React, { useState } from 'react';
import { getOptimizedImageUrl, generateSrcSet } from '../utils/imageOptimizer';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  priority?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className, 
  containerClassName, 
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(priority);
  
  // Se não tiver src, retorna null para evitar erros
  if (!src) return null;

  const optimizedSrc = getOptimizedImageUrl(src, 1000);
  const srcSet = generateSrcSet(src);

  return (
    <div className={`relative overflow-hidden bg-gray-200/20 ${containerClassName || 'w-full h-full'}`}>
      {/* Efeito de carregamento (Skeleton simples) */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse z-10" />
      )}
      
      <img
        src={optimizedSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={`transition-all duration-1000 ease-in-out ${isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'} ${className}`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
};

export default LazyImage;