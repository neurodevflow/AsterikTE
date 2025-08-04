// Intersection Observer based lazy loading for images
(function() {
  'use strict';
  
  // Check if browser supports intersection observer
  if (!('IntersectionObserver' in window)) {
    // Fallback for older browsers
    return;
  }
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        
        // Load the image
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        
        if (img.dataset.srcset) {
          img.srcset = img.dataset.srcset;
          img.removeAttribute('data-srcset');
        }
        
        // Remove the loading class and add loaded class
        img.classList.remove('lazy-loading');
        img.classList.add('lazy-loaded');
        
        // Stop observing this image
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px', // Load images 50px before they come into view
    threshold: 0.01
  });
  
  // Observe all images with data-src attribute
  function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
      img.classList.add('lazy-loading');
      imageObserver.observe(img);
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLazyLoading);
  } else {
    initLazyLoading();
  }
  
  // Re-initialize when new images are added
  window.initLazyLoading = initLazyLoading;
})();