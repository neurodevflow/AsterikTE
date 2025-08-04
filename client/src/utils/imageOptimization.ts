// Image optimization utilities for better performance
export const getOptimizedImageUrl = (
  originalUrl: string,
  width: number,
  height: number,
  quality: number = 85
): string => {
  if (originalUrl.includes('unsplash.com')) {
    // Optimize Unsplash images with proper parameters
    const url = new URL(originalUrl);
    url.searchParams.set('w', width.toString());
    url.searchParams.set('h', height.toString());
    url.searchParams.set('q', quality.toString());
    url.searchParams.set('fit', 'crop');
    url.searchParams.set('auto', 'format');
    return url.toString();
  }
  return originalUrl;
};

export const generateResponsiveImageSrcSet = (
  originalUrl: string,
  baseWidth: number,
  baseHeight: number
): string => {
  const sizes = [
    { width: Math.round(baseWidth * 0.5), height: Math.round(baseHeight * 0.5), descriptor: '480w' },
    { width: baseWidth, height: baseHeight, descriptor: '768w' },
    { width: Math.round(baseWidth * 1.5), height: Math.round(baseHeight * 1.5), descriptor: '1200w' },
    { width: Math.round(baseWidth * 2), height: Math.round(baseHeight * 2), descriptor: '1920w' },
  ];

  return sizes
    .map(({ width, height, descriptor }) => 
      `${getOptimizedImageUrl(originalUrl, width, height)} ${descriptor}`
    )
    .join(', ');
};

export const preloadCriticalImages = (imageUrls: string[]) => {
  if (typeof window !== 'undefined') {
    imageUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    });
  }
};

// Lazy loading intersection observer
export const createImageLazyLoader = () => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    return new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const dataSrc = img.dataset.src;
          if (dataSrc) {
            img.src = dataSrc;
            img.classList.remove('lazy');
            img.classList.add('loaded');
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });
  }
  return null;
};