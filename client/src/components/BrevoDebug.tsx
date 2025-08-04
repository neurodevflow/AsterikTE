import { useState, useEffect } from 'react';
import { useBrevoPopup } from './BrevoPopup';
import { isBrevoReady, resetBrevoPopupTimer } from '@/utils/brevo';

// Debug component to help test Brevo popup functionality
export default function BrevoDebug() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastShown, setLastShown] = useState<string | null>(null);
  const { showPopup, resetTimer, isReady } = useBrevoPopup();

  useEffect(() => {
    // Update last shown timestamp
    const updateLastShown = () => {
      const stored = localStorage.getItem('brevo-popup-shown');
      setLastShown(stored ? new Date(parseInt(stored)).toLocaleString() : null);
    };

    updateLastShown();
    const interval = setInterval(updateLastShown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Only show debug panel in development
  if (import.meta.env.PROD) return null;

  return (
    <div 
      className={`fixed bottom-4 right-4 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="absolute -left-12 top-2 bg-blue-600 text-white p-2 rounded-l-lg text-xs font-bold"
      >
        {isVisible ? '→' : '←'} DEBUG
      </button>
      
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 min-w-[300px]">
        <h3 className="font-bold text-lg mb-3 text-gray-800">Brevo Debug Panel</h3>
        
        <div className="space-y-3 text-sm">
          <div>
            <strong>SDK Status:</strong>
            <span className={`ml-2 px-2 py-1 rounded text-xs ${
              isReady ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {isReady ? 'Ready' : 'Not Ready'}
            </span>
          </div>
          
          <div>
            <strong>Last Popup Shown:</strong>
            <div className="text-gray-600 text-xs mt-1">
              {lastShown || 'Never'}
            </div>
          </div>
          
          <div className="flex gap-2 pt-2">
            <button
              onClick={showPopup}
              disabled={!isReady}
              className="bg-blue-600 text-white px-3 py-1 rounded text-xs disabled:opacity-50"
            >
              Show Popup
            </button>
            
            <button
              onClick={() => {
                resetTimer();
                setLastShown(null);
              }}
              className="bg-red-600 text-white px-3 py-1 rounded text-xs"
            >
              Reset Timer
            </button>
          </div>
          
          <div className="text-xs text-gray-500 pt-2 border-t">
            Popup shows automatically 3 seconds after page load (max once per 24 hours)
          </div>
        </div>
      </div>
    </div>
  );
}