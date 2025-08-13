import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  width = 800, 
  height = 600, 
  priority = false,
  quality = 85 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Generate responsive image URLs
  const generateImageUrl = (w: number, h: number, q: number = quality) => {
    if (src.includes('unsplash.com')) {
      // Parse existing URL and maintain existing parameters
      const url = new URL(src);
      url.searchParams.set('w', w.toString());
      url.searchParams.set('h', h.toString());
      url.searchParams.set('q', q.toString());
      url.searchParams.set('fit', 'crop');
      url.searchParams.set('auto', 'format');
      return url.toString();
    }
    return src;
  };

  const smallSrc = generateImageUrl(Math.round(width * 0.5), Math.round(height * 0.5), 75);
  const mediumSrc = generateImageUrl(width, height, quality);
  const largeSrc = generateImageUrl(Math.round(width * 1.5), Math.round(height * 1.5), quality);

  useEffect(() => {
    if (priority) {
      // Preload the image if it's marked as priority
      const img = new Image();
      img.src = mediumSrc;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setError(true);
    }
  }, [mediumSrc, priority]);

  if (error) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500">Image failed to load</span>
      </div>
    );
  }

  return (
    <picture>
      <source 
        media="(max-width: 768px)" 
        srcSet={smallSrc}
      />
      <source 
        media="(max-width: 1200px)" 
        srcSet={mediumSrc}
      />
      <img
        src={largeSrc}
        alt={alt}
        className={`${className} ${!isLoaded && priority ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
      />
    </picture>
  );
}