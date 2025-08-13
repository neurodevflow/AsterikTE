import { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
}

export default function LazyImage({
  src,
  alt,
  className = '',
  width,
  height,
  sizes,
  loading = 'lazy',
  decoding = 'async',
}: LazyImageProps) {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before the image enters viewport
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative ${className}`} ref={imgRef}>
      {/* Placeholder with aspect ratio to prevent layout shift */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{
            aspectRatio: width && height ? `${width}/${height}` : '16/9'
          }}
        />
      )}
      
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          width={width}
          height={height}
          sizes={sizes}
          loading={loading}
          decoding={decoding}
          onLoad={handleLoad}
          style={{
            aspectRatio: width && height ? `${width}/${height}` : 'auto'
          }}
        />
      )}
    </div>
  );
}