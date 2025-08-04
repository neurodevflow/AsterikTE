import { useState } from "react";
import { resetBrevoPopupTimer } from "@/utils/brevo";

export default function BrevoDebugPanel() {
  const [isVisible, setIsVisible] = useState(false);

  const getBrevoStats = () => {
    if (typeof window === 'undefined') return null;
    
    return {
      popupCount: localStorage.getItem('brevo-popup-count') || '0',
      lastPopup: localStorage.getItem('brevo-last-popup'),
      lastActivity: localStorage.getItem('brevo-last-activity'),
      visitStart: localStorage.getItem('brevo-visit-start'),
      isBrevoLoaded: Array.isArray(window.Brevo)
    };
  };

  const stats = getBrevoStats();

  const formatTime = (timestamp: string | null) => {
    if (!timestamp) return 'Never';
    return new Date(parseInt(timestamp)).toLocaleString();
  };

  const handleReset = () => {
    resetBrevoPopupTimer();
    window.location.reload();
  };

  const forceShowPopup = () => {
    if (typeof window !== 'undefined' && window.Brevo) {
      window.Brevo.push(["showForm", {
        form_id: "1",
        delay: 0
      }]);
    }
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-navy-blue text-white px-3 py-2 rounded text-sm z-50"
        style={{ fontSize: '12px' }}
      >
        Debug Brevo
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm z-50" style={{ fontSize: '12px' }}>
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-navy-blue">Brevo Debug Panel</h3>
        <button onClick={() => setIsVisible(false)} className="text-gray-500 hover:text-gray-700">×</button>
      </div>
      
      {stats && (
        <div className="space-y-2 text-xs">
          <div><strong>Popup Count:</strong> {stats.popupCount}/9</div>
          <div><strong>Last Popup:</strong> {formatTime(stats.lastPopup)}</div>
          <div><strong>Last Activity:</strong> {formatTime(stats.lastActivity)}</div>
          <div><strong>Visit Start:</strong> {formatTime(stats.visitStart)}</div>
          <div><strong>Brevo Loaded:</strong> {stats.isBrevoLoaded ? '✅' : '❌'}</div>
          
          <div className="border-t pt-2 mt-3 space-y-1">
            <button
              onClick={handleReset}
              className="block w-full bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
            >
              Reset All Counters
            </button>
            <button
              onClick={forceShowPopup}
              className="block w-full bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600"
            >
              Force Show Popup
            </button>
          </div>
          
          <div className="border-t pt-2 mt-2 text-xs text-gray-600">
            <div><strong>Settings:</strong></div>
            <div>• 3s delay after page load</div>
            <div>• 30min session timeout</div>
            <div>• Max 9 views per visitor</div>
            <div>• 1min delay between popups</div>
          </div>
        </div>
      )}
    </div>
  );
}