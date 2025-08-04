// Critical path optimization script
(function() {
  'use strict';
  
  // Optimize initial rendering
  function optimizeInitialRender() {
    // Remove unused CSS
    const unusedStyles = document.querySelectorAll('link[rel="stylesheet"]:not([data-critical])');
    unusedStyles.forEach(link => {
      if (!link.href.includes('critical.css') && !link.href.includes('fonts.css')) {
        link.media = 'print';
        link.onload = function() {
          this.media = 'all';
        };
      }
    });
    
    // Prioritize visible content
    const hero = document.querySelector('.hero-bg, .min-h-screen');
    if (hero) {
      hero.style.willChange = 'auto';
    }
  }
  
  // Reduce layout shift
  function preventLayoutShift() {
    // Reserve space for images
    const images = document.querySelectorAll('img:not([width])');
    images.forEach(img => {
      if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
        img.style.aspectRatio = '16/9';
        img.style.background = '#f3f4f6';
      }
    });
    
    // Reserve space for icons
    const icons = document.querySelectorAll('i[class*="fa"]');
    icons.forEach(icon => {
      icon.style.minWidth = '1em';
      icon.style.minHeight = '1em';
    });
  }
  
  // Initialize optimizations
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      optimizeInitialRender();
      preventLayoutShift();
    });
  } else {
    optimizeInitialRender();
    preventLayoutShift();
  }
  
  // Performance observer for debugging
  if (window.PerformanceObserver && window.location.hostname === 'localhost') {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint' && entry.startTime > 2500) {
          console.warn('LCP is slow:', entry.startTime + 'ms');
        }
        if (entry.entryType === 'layout-shift' && entry.value > 0.1) {
          console.warn('Layout shift detected:', entry.value);
        }
      }
    });
    
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift'] });
    } catch (e) {
      // Silently fail if not supported
    }
  }
})();