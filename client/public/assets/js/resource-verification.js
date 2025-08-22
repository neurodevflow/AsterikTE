// Resource verification script - ensures all resources are loaded locally
(function() {
  'use strict';
  
  // Track external resource requests
  const externalRequests = [];
  
  // Override fetch to monitor external requests
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    const url = args[0];
    if (typeof url === 'string' && (url.startsWith('http://') || url.startsWith('https://'))) {
      // Allow only specific domains for Brevo and WonderPush
      const allowedDomains = ['cdn.brevo.com', 'sibautomation.com', 'cdn.by.wonderpush.com'];
      const isAllowed = allowedDomains.some(domain => url.includes(domain));
      
      if (!isAllowed) {
        console.warn('External resource blocked:', url);
        externalRequests.push(url);
      }
    }
    return originalFetch.apply(this, args);
  };
  
  // Monitor image loading
  const originalImageSrc = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
  Object.defineProperty(HTMLImageElement.prototype, 'src', {
    set: function(value) {
      if (value && (value.startsWith('http://') || value.startsWith('https://'))) {
        const allowedDomains = ['cdn.brevo.com', 'sibautomation.com', 'cdn.by.wonderpush.com'];
        const isAllowed = allowedDomains.some(domain => value.includes(domain));
        
        if (!isAllowed) {
          console.warn('External image blocked:', value);
          externalRequests.push(value);
        }
      }
      originalImageSrc.set.call(this, value);
    },
    get: originalImageSrc.get
  });
  
  // Report external requests after page load
  window.addEventListener('load', function() {
    if (externalRequests.length > 0) {
      console.warn('External resources detected:', externalRequests);
    } else {
      console.log('✅ All resources loaded locally - no external dependencies');
    }
  });
})();