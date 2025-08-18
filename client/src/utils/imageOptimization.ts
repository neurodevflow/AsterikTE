/**
 * Image optimization utilities for better performance
 */

interface ImageDimensions {
  width: number;
  height: number;
}

interface OptimizedImageParams {
  src: string;
  width: number;
  height: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
}

/**
 * Generate optimized Unsplash image URL with proper dimensions and quality
 */
export function optimizeUnsplashImage({
  src,
  width,
  height,
  quality = 80,
  format = 'jpg',
}: OptimizedImageParams): string {
  if (!src.includes('unsplash.com')) {
    return src;
  }

  const url = new URL(src);
  
  // Set optimized parameters
  url.searchParams.set('w', width.toString());
  url.searchParams.set('h', height.toString());
  url.searchParams.set('q', quality.toString());
  url.searchParams.set('fit', 'crop');
  url.searchParams.set('auto', 'format');
  url.searchParams.set('fm', format);
  
  return url.toString();
}

/**
 * Generate responsive image sizes for different viewports
 */
export function generateResponsiveSizes(baseDimensions: ImageDimensions) {
  return {
    mobile: {
      width: Math.round(baseDimensions.width * 0.5),
      height: Math.round(baseDimensions.height * 0.5),
    },
    tablet: {
      width: Math.round(baseDimensions.width * 0.75),
      height: Math.round(baseDimensions.height * 0.75),
    },
    desktop: baseDimensions,
  };
}

/**
 * Generate srcSet string for responsive images
 */
export function generateSrcSet(src: string, dimensions: ImageDimensions): string {
  const responsive = generateResponsiveSizes(dimensions);
  
  if (src.includes('unsplash.com')) {
    return [
      `${optimizeUnsplashImage({ src, ...responsive.mobile })} ${responsive.mobile.width}w`,
      `${optimizeUnsplashImage({ src, ...responsive.tablet })} ${responsive.tablet.width}w`,
      `${optimizeUnsplashImage({ src, ...responsive.desktop })} ${responsive.desktop.width}w`,
    ].join(', ');
  }
  
  return src;
}

/**
 * Generate sizes attribute for responsive images
 */
export function generateSizesAttribute(maxWidth: number): string {
  return `(max-width: 480px) 412px, (max-width: 768px) 768px, ${maxWidth}px`;
}

/**
 * Check if image should be loaded with high priority (above the fold)
 */
export function shouldLoadWithHighPriority(elementPosition: 'hero' | 'above-fold' | 'below-fold'): {
  loading: 'eager' | 'lazy';
} {
  switch (elementPosition) {
    case 'hero':
      return { loading: 'eager' };
    case 'above-fold':
      return { loading: 'eager' };
    case 'below-fold':
    default:
      return { loading: 'lazy' };
  }
}