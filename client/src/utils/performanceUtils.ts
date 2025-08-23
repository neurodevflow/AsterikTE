// Performance utilities for optimized loading

export const preloadCriticalAssets = () => {
  // Preload critical WebP images
  const criticalImages = [
    '/assets/images/hero-small.webp',
    '/assets/images/hero-medium.webp',
    '/assets/images/asterik-logo-150.png'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

export const preconnectToOrigins = () => {
  const origins = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];

  origins.forEach(origin => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = origin;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

export const deferNonCriticalCSS = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = href;
  link.onload = function() {
    (this as HTMLLinkElement).rel = 'stylesheet';
  };
  document.head.appendChild(link);
};

export const optimizeScrolling = () => {
  // Passive event listeners for better scrolling performance
  document.addEventListener('scroll', () => {
    // Throttle scroll events
  }, { passive: true });

  document.addEventListener('touchstart', () => {
    // Optimize touch events
  }, { passive: true });
};

export const removeUnusedCSS = () => {
  // Remove unused Tailwind classes in production
  if (process.env.NODE_ENV === 'production') {
    const unusedSelectors = [
      '.unused-class-1',
      '.unused-class-2'
      // Add specific unused classes here
    ];

    unusedSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => el.remove());
    });
  }
};

export const initializePerformanceOptimizations = () => {
  // Run on DOM content loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      preloadCriticalAssets();
      preconnectToOrigins();
      optimizeScrolling();
    });
  } else {
    preloadCriticalAssets();
    preconnectToOrigins();
    optimizeScrolling();
  }
};