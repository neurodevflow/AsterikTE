// Brevo SDK utility functions

declare global {
  interface Window {
    Brevo: any[];
  }
}

export interface BrevoConfig {
  clientKey: string;
  formId?: string;
}

export const BREVO_CONFIG: BrevoConfig = {
  clientKey: 'gq5j34op6hpsf9idkgjdn0qm',
  formId: '1' // Replace with your actual form ID from Brevo dashboard
};

export const showBrevoPopup = (formId?: string): void => {
  if (typeof window !== 'undefined' && window.Brevo) {
    window.Brevo.push(["showForm", {
      form_id: formId || BREVO_CONFIG.formId,
      delay: 0
    }]);
  } else {
    console.warn('Brevo SDK not loaded');
  }
};

export const initBrevoPopupTimer = (delayMs: number = 3000): void => {
  if (typeof window === 'undefined') return;

  const showPopupWithDelay = () => {
    setTimeout(() => {
      // Visit tracking with 30-minute session timeout
      const now = Date.now();
      const lastActivity = localStorage.getItem('brevo-last-activity');
      const sessionTimeout = 30 * 60 * 1000; // 30 minutes
      
      // Check if this is a new visit (first time or after 30min inactivity)
      let isNewVisit = false;
      if (!lastActivity || (now - parseInt(lastActivity)) > sessionTimeout) {
        isNewVisit = true;
        localStorage.setItem('brevo-visit-start', now.toString());
      }
      localStorage.setItem('brevo-last-activity', now.toString());
      
      // Popup frequency control - your exact settings
      const popupCount = parseInt(localStorage.getItem('brevo-popup-count') || '0');
      const lastPopupShown = localStorage.getItem('brevo-last-popup');
      const oneMinute = 60 * 1000; // 1 minute delay between popups
      const maxViews = 9; // Maximum 9 views per visitor
      const firstVisitDelay = 0; // Show immediately for first-time visitors
      
      let shouldShowPopup = false;
      
      // First time visitor - show immediately (0 delay after the 3-second page load delay)
      if (popupCount === 0) {
        shouldShowPopup = true;
      } 
      // Returning visitor - check limits and timing
      else if (popupCount < maxViews) {
        if (!lastPopupShown || (now - parseInt(lastPopupShown)) > oneMinute) {
          shouldShowPopup = true;
        }
      }
      
      if (shouldShowPopup) {
        showBrevoPopup();
        
        // Update tracking counters
        localStorage.setItem('brevo-popup-count', (popupCount + 1).toString());
        localStorage.setItem('brevo-last-popup', now.toString());
        
        console.log(`Brevo popup displayed - View #${popupCount + 1} of max ${maxViews}`);
      } else if (popupCount >= maxViews) {
        console.log('Brevo popup limit reached - maximum 9 views per visitor');
      } else {
        console.log('Brevo popup not shown - waiting for 1-minute delay');
      }
    }, delayMs);
  };

  if (document.readyState === 'loading') {
    window.addEventListener('load', showPopupWithDelay);
  } else {
    showPopupWithDelay();
  }
  
  // Track user activity to maintain 30-minute session
  let activityTimer: NodeJS.Timeout;
  const trackActivity = () => {
    clearTimeout(activityTimer);
    activityTimer = setTimeout(() => {
      localStorage.setItem('brevo-last-activity', Date.now().toString());
    }, 1000);
  };
  
  // Listen for user activity to maintain session
  ['click', 'scroll', 'keypress', 'mousemove'].forEach(event => {
    document.addEventListener(event, trackActivity, { passive: true });
  });
};

export const resetBrevoPopupTimer = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('brevo-popup-count');
    localStorage.removeItem('brevo-last-popup');
    localStorage.removeItem('brevo-last-activity');
    localStorage.removeItem('brevo-visit-start');
    console.log('Brevo popup tracking reset - all counters cleared');
  }
};

// Check if Brevo SDK is loaded
export const isBrevoReady = (): boolean => {
  return typeof window !== 'undefined' && Array.isArray(window.Brevo);
};