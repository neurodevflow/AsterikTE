import { useState } from "react";

interface AIRecommendationButtonProps {
  onClick: () => void;
  isActive: boolean;
}

export default function AIRecommendationButton({ onClick, isActive }: AIRecommendationButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        fixed right-6 top-1/2 transform -translate-y-1/2 z-40
        w-14 h-14 rounded-full shadow-lg transition-all duration-300
        flex items-center justify-center group
        ${isActive 
          ? 'bg-navy-blue text-white shadow-navy-blue/30' 
          : 'bg-white text-navy-blue border-2 border-navy-blue hover:bg-navy-blue hover:text-white'
        }
        ${isHovered ? 'scale-110' : 'scale-100'}
      `}
      aria-label="AI Content Recommendations"
    >
      <div className="relative">
        <i className={`fas fa-gem text-lg transition-transform duration-200 ${isHovered ? 'scale-110' : 'scale-100'}`}></i>
        
        {/* Animated pulse effect */}
        <div className={`
          absolute inset-0 rounded-full bg-navy-blue opacity-25 animate-ping
          ${isActive ? 'block' : 'hidden'}
        `}></div>
        
        {/* AI indicator dot */}
        <div className={`
          absolute -top-1 -right-1 w-3 h-3 rounded-full bg-warm-orange
          flex items-center justify-center
          ${isActive ? 'animate-pulse' : ''}
        `}>
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>
      
      {/* Tooltip */}
      <div className={`
        absolute right-16 top-1/2 transform -translate-y-1/2
        bg-navy-blue text-white text-xs px-3 py-2 rounded-lg
        whitespace-nowrap opacity-0 pointer-events-none
        transition-all duration-200
        ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}
      `}>
        {isActive ? 'Close Gemini Recommendations' : 'Get Gemini Recommendations'}
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-navy-blue"></div>
      </div>
    </button>
  );
}