import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

// Debug component to help test mobile menu functionality
export default function MobileMenuDebug() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [userAgent, setUserAgent] = useState('');
  const isMobile = useIsMobile();

  useEffect(() => {
    const updateScreenInfo = () => {
      setScreenWidth(window.innerWidth);
      setUserAgent(navigator.userAgent);
    };

    updateScreenInfo();
    window.addEventListener('resize', updateScreenInfo);
    
    return () => window.removeEventListener('resize', updateScreenInfo);
  }, []);

  // Only show in development
  if (import.meta.env.PROD) return null;

  return (
    <div className="fixed top-4 left-4 z-[10000] bg-red-600 text-white text-xs p-2 rounded opacity-80 max-w-[300px]">
      <div>Screen: {screenWidth}px</div>
      <div>IsMobile: {isMobile ? 'YES' : 'NO'}</div>
      <div>Mobile Breakpoint: 768px</div>
      <div className="mt-1 text-[10px] opacity-70 truncate">
        UA: {userAgent.slice(0, 40)}...
      </div>
    </div>
  );
}