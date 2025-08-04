import { useEffect } from 'react';
import { initBrevoPopupTimer, isBrevoReady } from '@/utils/brevo';

interface BrevoPopupProps {
  delayMs?: number;
  enabled?: boolean;
}

export default function BrevoPopup({ delayMs = 3000, enabled = true }: BrevoPopupProps) {
  useEffect(() => {
    if (!enabled) return;

    // Initialize popup timer when component mounts
    const initPopup = () => {
      if (isBrevoReady()) {
        initBrevoPopupTimer(delayMs);
      } else {
        // If Brevo isn't ready yet, wait a bit and try again
        setTimeout(() => {
          if (isBrevoReady()) {
            initBrevoPopupTimer(delayMs);
          } else {
            console.warn('Brevo SDK not loaded after waiting');
          }
        }, 1000);
      }
    };

    initPopup();
  }, [delayMs, enabled]);

  // This component doesn't render anything visible
  return null;
}

// Hook for programmatically controlling the popup
export const useBrevoPopup = () => {
  const showPopup = () => {
    if (isBrevoReady()) {
      window.Brevo.push(["showForm", {
        form_id: import.meta.env.VITE_BREVO_FORM_ID || "1",
        delay: 0
      }]);
    }
  };

  const resetTimer = () => {
    localStorage.removeItem('brevo-popup-shown');
  };

  return { showPopup, resetTimer, isReady: isBrevoReady() };
};