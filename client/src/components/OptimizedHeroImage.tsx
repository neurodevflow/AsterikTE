import { useRef } from "react";
import { useImagePerformance } from "../hooks/usePerformanceMonitoring";

interface OptimizedHeroImageProps {
  alt: string;
  className?: string;
}

export default function OptimizedHeroImage({
  alt,
  className = "",
}: OptimizedHeroImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  // Monitor image loading performance
  useImagePerformance(imageRef);

  return (
    <div className={`relative ${className}`}>
      {/* Progressive background layer with CSS overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-blue/80 to-charcoal/80 z-10"></div>

      <picture className="absolute inset-0">
        {/* WebP format for modern browsers */}
        <source
          media="(max-width: 768px)"
          srcSet="/assets/images/hero-small.webp"
          type="image/webp"
        />
        <source
          media="(max-width: 1200px)"
          srcSet="/assets/images/hero-medium.webp"
          type="image/webp"
        />
        <source srcSet="/assets/images/hero-original.webp" type="image/webp" />

        {/* AVIF format for even better compression */}
        <source
          media="(max-width: 768px)"
          srcSet="/assets/images/hero-small.avif"
          type="image/avif"
        />
        <source
          media="(max-width: 1200px)"
          srcSet="/assets/images/hero-medium.avif"
          type="image/avif"
        />
        <source srcSet="/assets/images/hero-original.avif" type="image/avif" />

        {/* Fallback JPEG */}
        <source
          media="(max-width: 768px)"
          srcSet="/assets/images/hero-small.jpg"
        />
        <source
          media="(max-width: 1200px)"
          srcSet="/assets/images/hero-medium.jpg"
        />

        <img
          ref={imageRef}
          src="/assets/images/hero-original.jpg"
          alt={alt}
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          sizes="(max-width: 768px) 800px, (max-width: 1200px) 1200px, 1920px"
        />
      </picture>
    </div>
  );
}
