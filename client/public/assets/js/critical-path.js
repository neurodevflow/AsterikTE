/**
 * Critical Path JavaScript
 * Handles essential functionality that must load immediately
 */

(function() {
  'use strict';
  
  // Prevent FOUC (Flash of Unstyled Content)
  document.documentElement.style.visibility = 'visible';
  
  // Initialize critical performance metrics
  if (window.performance && window.performance.mark) {
    window.performance.mark('critical-js-start');
  }
  
  // Essential mobile viewport fix for iOS
  function fixViewport() {
    if (/iPhone|iPad/.test(navigator.userAgent)) {
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
      }
      
      // Fix iOS 100vh issue
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      
      window.addEventListener('resize', () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });
    }
  }
  
  // Critical error handling
  function handleCriticalErrors() {
    window.addEventListener('error', function(e) {
      console.error('Critical error:', e.error);
      // Report critical errors without breaking the app
    });
    
    window.addEventListener('unhandledrejection', function(e) {
      console.error('Unhandled promise rejection:', e.reason);
      e.preventDefault();
    });
  }
  
  // Initialize immediately
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      fixViewport();
      handleCriticalErrors();
    });
  } else {
    fixViewport();
    handleCriticalErrors();
  }
  
  // Mark completion
  if (window.performance && window.performance.mark) {
    window.performance.mark('critical-js-end');
  }
})();