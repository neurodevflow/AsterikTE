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
      // Check if popup hasn't been shown recently
      const lastShown = localStorage.getItem('brevo-popup-shown');
      const now = Date.now();
      const oneDay = 24 * 60 * 60 * 1000; // 24 hours

      if (!lastShown || (now - parseInt(lastShown)) > oneDay) {
        showBrevoPopup();
        localStorage.setItem('brevo-popup-shown', now.toString());
        console.log('Brevo popup displayed after', delayMs, 'ms');
      } else {
        console.log('Brevo popup not shown - already displayed within 24 hours');
      }
    }, delayMs);
  };

  if (document.readyState === 'loading') {
    window.addEventListener('load', showPopupWithDelay);
  } else {
    showPopupWithDelay();
  }
};

export const resetBrevoPopupTimer = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('brevo-popup-shown');
    console.log('Brevo popup timer reset');
  }
};

// Check if Brevo SDK is loaded
export const isBrevoReady = (): boolean => {
  return typeof window !== 'undefined' && Array.isArray(window.Brevo);
};