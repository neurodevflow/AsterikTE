import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
    // Disable non-essential cookies
    document.cookie.split(";").forEach(function(c) { 
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
    });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-navy-blue shadow-lg z-50 p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-charcoal">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies. 
            <a href="/privacy-policy" className="text-navy-blue hover:underline ml-1">
              Read our Privacy Policy
            </a>
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 text-sm text-charcoal border border-charcoal rounded hover:bg-charcoal hover:text-white transition-colors"
            aria-label="Reject non-essential cookies"
          >
            Reject
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-navy-blue text-white rounded hover:bg-opacity-90 transition-colors"
            aria-label="Accept all cookies"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}