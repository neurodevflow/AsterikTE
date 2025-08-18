/**
 * Browser Compatibility Fixes for Chrome-based browsers
 * Ensures menus work consistently across all browsers
 */

(function() {
  'use strict';

  // Fix Chrome CSS Selector Issues
  function fixChromeCSS() {
    // Add Chrome-specific CSS fixes
    const style = document.createElement('style');
    style.textContent = `
      /* Fix Chrome navigation rendering */
      .mobile-menu-button {
        -webkit-tap-highlight-color: transparent;
        -webkit-appearance: none;
        appearance: none;
      }
      
      /* Fix Chrome dropdown positioning */
      .dropdown-menu {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        will-change: opacity, visibility;
      }
      
      /* Fix Chrome hover states */
      .dropdown-menu:hover,
      .relative:hover .dropdown-menu {
        visibility: visible !important;
        opacity: 1 !important;
      }
      
      /* Chrome-specific mobile menu fixes */
      .mobile-menu-overlay {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        background: white !important;
        z-index: 9999 !important;
        overflow-y: auto !important;
        -webkit-overflow-scrolling: touch;
      }
      
      /* Fix Chrome font rendering issues */
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
      }
      
      /* Fix Chrome transition issues */
      .transition-colors {
        transition: color 0.2s ease !important;
      }
      
      /* Ensure proper touch targets on Chrome mobile */
      button, a, [role="button"] {
        min-height: 44px;
        min-width: 44px;
        touch-action: manipulation;
      }
    `;
    document.head.appendChild(style);
  }

  // Fix Chrome Event Handling
  function fixChromeEvents() {
    // Fix touch events for Chrome mobile
    document.addEventListener('touchstart', function() {}, { passive: true });
    
    // Fix Chrome dropdown issues
    document.addEventListener('DOMContentLoaded', function() {
      // Fix menu button clicks
      const mobileButtons = document.querySelectorAll('.mobile-menu-button');
      mobileButtons.forEach(button => {
        button.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          // Trigger React event manually if needed
          const event = new CustomEvent('mobileMenuToggle', { bubbles: true });
          button.dispatchEvent(event);
        });
      });
      
      // Fix dropdown hover issues in Chrome
      const dropdownTriggers = document.querySelectorAll('[data-dropdown-trigger]');
      dropdownTriggers.forEach(trigger => {
        let hoverTimeout;
        
        trigger.addEventListener('mouseenter', function() {
          clearTimeout(hoverTimeout);
          const dropdown = trigger.querySelector('.dropdown-menu');
          if (dropdown) {
            dropdown.style.visibility = 'visible';
            dropdown.style.opacity = '1';
          }
        });
        
        trigger.addEventListener('mouseleave', function() {
          hoverTimeout = setTimeout(() => {
            const dropdown = trigger.querySelector('.dropdown-menu');
            if (dropdown) {
              dropdown.style.visibility = 'hidden';
              dropdown.style.opacity = '0';
            }
          }, 150);
        });
      });
    });
  }

  // Detect Chrome browser
  function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  }

  // Initialize fixes
  function init() {
    if (isChrome() || /Chrome/.test(navigator.userAgent)) {
      fixChromeCSS();
      fixChromeEvents();
      console.log('Chrome compatibility fixes applied');
    }
    
    // Apply general mobile fixes
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      document.body.classList.add('mobile-browser');
      
      // Fix iOS Safari viewport issues
      if (/Safari/.test(navigator.userAgent) && /Mobile/.test(navigator.userAgent)) {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
          viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
        }
      }
    }
  }

  // Run immediately and on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export for debugging
  window.browserCompatibility = {
    isChrome: isChrome,
    init: init
  };
})();