import { useEffect } from 'react';

// Performance monitoring hook for tracking Core Web Vitals
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Track Largest Contentful Paint (LCP)
        if (entry.entryType === 'largest-contentful-paint') {
          if (entry.startTime > 100) {
            console.log(`LCP: ${Math.round(entry.startTime)}ms`);
          }
        }
        
        // Track First Input Delay (FID)
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          const fid = fidEntry.processingStart - fidEntry.startTime;
          if (fid > 50) {
            console.log(`FID: ${Math.round(fid)}ms`);
          }
        }
        
        // Track Cumulative Layout Shift (CLS)
        if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as any;
          if (!clsEntry.hadRecentInput && clsEntry.value > 0.1) {
            console.log(`CLS: ${clsEntry.value.toFixed(3)}`);
          }
        }
      }
    });

    // Observe performance entries if supported
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      console.warn('Performance Observer not supported');
    }

    // Monitor resource loading times
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const metrics = {
          domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.startTime),
          loadComplete: Math.round(navigation.loadEventEnd - navigation.startTime),
          ttfb: Math.round(navigation.responseStart - navigation.requestStart),
        };
        // Only log if metrics are significant
        if (metrics.domContentLoaded > 500 || metrics.loadComplete > 1000 || metrics.ttfb > 200) {
          console.log('Performance Metrics:', metrics);
        }
      }
      
      // Check for render-blocking resources
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const renderBlockingResources = resources.filter(resource => 
        resource.name.includes('.css') || resource.name.includes('.js')
      );
      
      if (renderBlockingResources.length > 10) {
        console.log('Render-blocking resources:', renderBlockingResources.length);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};

// Image loading performance helper
export const useImagePerformance = (imageRef: React.RefObject<HTMLImageElement>) => {
  useEffect(() => {
    const img = imageRef.current;
    if (!img) return;

    const startTime = performance.now();
    
    const handleLoad = () => {
      const loadTime = performance.now() - startTime;
      // Only log slow loading images
      if (loadTime > 1000) {
        console.log(`Image loaded in ${Math.round(loadTime)}ms: ${img.src}`);
      }
    };

    const handleError = () => {
      console.error(`Failed to load image: ${img.src}`);
    };

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [imageRef]);
};