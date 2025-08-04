import { useEffect } from 'react';
import { BREVO_CONFIG } from '@/utils/brevo';

interface BrevoInitProps {
  children?: React.ReactNode;
}

export default function BrevoInit({ children }: BrevoInitProps) {
  useEffect(() => {
    // Initialize Brevo SDK with environment variables
    const initBrevo = () => {
      if (typeof window !== 'undefined') {
        window.Brevo = window.Brevo || [];
        
        // Initialize with client key from environment variables
        if (BREVO_CONFIG.clientKey) {
          window.Brevo.push([
            "init",
            {
              client_key: BREVO_CONFIG.clientKey,
            },
          ]);
          console.log('Brevo SDK initialized with client key');
        } else {
          console.warn('Brevo client key not configured. Please set VITE_BREVO_CLIENT_KEY environment variable.');
        }
      }
    };

    // Wait for SDK to load
    const checkSDKLoaded = () => {
      if (document.querySelector('script[src*="sdk-loader.js"]')) {
        // SDK script is present, initialize
        initBrevo();
      } else {
        // Wait a bit more for the script to load
        setTimeout(checkSDKLoaded, 100);
      }
    };

    // Start checking
    checkSDKLoaded();
  }, []);

  return <>{children}</>;
}