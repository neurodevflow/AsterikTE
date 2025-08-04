// Lazy load WonderPush SDK to improve performance
(function() {
  'use strict';
  
  let loaded = false;
  
  function loadWonderPush() {
    if (loaded) return;
    loaded = true;
    
    // Load WonderPush SDK
    const script = document.createElement('script');
    script.src = 'https://cdn.by.wonderpush.com/sdk/1.1/wonderpush-loader.min.js';
    script.async = true;
    script.onload = function() {
      // Initialize WonderPush
      if (window.WonderPush) {
        WonderPush.push(["init", {
          webKey: "a5f43878073b3c6d9d98b8d3b84b4d1ec57c3e2e"
        }]);
      }
    };
    document.head.appendChild(script);
  }
  
  // Load on user interaction or after delay
  let interactionLoaded = false;
  
  function loadOnInteraction() {
    if (!interactionLoaded) {
      interactionLoaded = true;
      loadWonderPush();
      // Remove event listeners
      document.removeEventListener('scroll', loadOnInteraction);
      document.removeEventListener('click', loadOnInteraction);
      document.removeEventListener('touchstart', loadOnInteraction);
    }
  }
  
  // Wait for user to interact with page
  document.addEventListener('scroll', loadOnInteraction, { passive: true });
  document.addEventListener('click', loadOnInteraction, { passive: true });
  document.addEventListener('touchstart', loadOnInteraction, { passive: true });
  
  // Fallback: load after 5 seconds if no interaction
  setTimeout(loadWonderPush, 5000);
})();