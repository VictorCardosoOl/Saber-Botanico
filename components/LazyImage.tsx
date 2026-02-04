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
  const [hasError, setHasError] = useState(false);
  
  if (!src) return null;

  const optimizedSrc = getOptimizedImageUrl(src, 1000);
  const srcSet = generateSrcSet(src);

  return (
    <div className={`relative overflow-hidden bg-forest-light/20 ${containerClassName || 'w-full h-full'}`}>
      {/* Placeholder / Skeleton */}
      {!hasError && (
        <div 
          className={`absolute inset-0 bg-forest-light/10 z-10 transition-opacity duration-700 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          aria-hidden="true"
        />
      )}
      
      <img
        src={optimizedSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={`block w-full h-full transition-all duration-700 ease-out will-change-transform ${isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'} ${className}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
            setIsLoaded(true); // Remove blur/loader
            setHasError(true);
        }}
        {...props}
      />
    </div>
  );
};

export default LazyImage;