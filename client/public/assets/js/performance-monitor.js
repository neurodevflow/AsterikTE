// Performance monitoring script - loaded asynchronously
(function() {
  'use strict';
  
  // Monitor Core Web Vitals
  function measureWebVitals() {
    // Largest Contentful Paint
    if ('LargestContentfulPaint' in window) {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        // Only log LCP if it's significant (> 100ms)
        if (lastEntry.startTime > 100) {
          console.log('LCP:', Math.round(lastEntry.startTime) + 'ms');
        }
      }).observe({entryTypes: ['largest-contentful-paint']});
    }
    
    // First Input Delay
    if ('FirstInputDelay' in window) {
      new PerformanceObserver((entryList) => {
        const firstInput = entryList.getEntries()[0];
        const fid = firstInput.processingStart - firstInput.startTime;
        if (fid > 50) {
          console.log('FID:', Math.round(fid) + 'ms');
        }
      }).observe({entryTypes: ['first-input']});
    }
    
    // Cumulative Layout Shift
    if ('LayoutShift' in window) {
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        if (clsValue > 0.1) {
          console.log('CLS:', clsValue.toFixed(3));
        }
      }).observe({entryTypes: ['layout-shift']});
    }
  }
  
  // Resource loading optimization
  function optimizeResourceLoading() {
    // Preload next page resources on hover
    document.addEventListener('mouseover', function(e) {
      const link = e.target.closest('a[href^="/"]');
      if (link && !link.dataset.preloaded) {
        link.dataset.preloaded = 'true';
        // Prefetch the page
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.href = link.href;
        document.head.appendChild(prefetchLink);
      }
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      measureWebVitals();
      optimizeResourceLoading();
    });
  } else {
    measureWebVitals();
    optimizeResourceLoading();
  }
})();