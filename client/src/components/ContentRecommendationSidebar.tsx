import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContentRecommendation {
  title: string;
  type: "service" | "industry" | "insight";
  description: string;
  url: string;
  relevanceScore: number;
}

interface ContentRecommendationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContentRecommendationSidebar({ 
  isOpen, 
  onClose 
}: ContentRecommendationSidebarProps) {
  const [location] = useLocation();
  const [pageContent, setPageContent] = useState("");

  // Extract page content for AI analysis
  useEffect(() => {
    const extractPageContent = () => {
      const mainContent = document.querySelector('main') || document.body;
      const textContent = mainContent.textContent || "";
      // Clean and limit content
      const cleanContent = textContent
        .replace(/\s+/g, ' ')
        .trim()
        .substring(0, 1500);
      setPageContent(cleanContent);
    };

    if (isOpen) {
      // Small delay to ensure page is fully rendered
      setTimeout(extractPageContent, 500);
    }
  }, [isOpen, location]);

  const { data: recommendations, isLoading, error } = useQuery({
    queryKey: ['/api/recommendations', location, pageContent],
    queryFn: () => apiRequest(`/api/recommendations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        currentPath: location,
        pageContent: pageContent
      })
    }),
    enabled: isOpen && pageContent.length > 50,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service':
        return 'fas fa-cogs';
      case 'industry':
        return 'fas fa-building';
      case 'insight':
        return 'fas fa-lightbulb';
      default:
        return 'fas fa-star';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service':
        return 'text-navy-blue';
      case 'industry':
        return 'text-warm-orange';
      case 'insight':
        return 'text-teal-green';
      default:
        return 'text-charcoal';
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        lg:static lg:translate-x-0 lg:w-72 lg:shadow-lg
      `}>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-light-grey">
            <div className="flex items-center">
              <div className="bg-navy-blue text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-robot text-sm"></i>
              </div>
              <h3 className="font-bold text-lg text-navy-blue">Smart Recommendations</h3>
            </div>
            <button 
              onClick={onClose}
              className="text-charcoal hover:text-navy-blue transition-colors lg:hidden"
            >
              <i className="fas fa-times text-lg"></i>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {isLoading && (
              <div className="space-y-4">
                <div className="flex items-center text-charcoal">
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  <span className="text-sm">Analyzing content...</span>
                </div>
                {/* Loading skeletons */}
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-soft-beige rounded-lg p-4 animate-pulse">
                    <div className="h-4 bg-light-grey rounded mb-2"></div>
                    <div className="h-3 bg-light-grey rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            )}

            {error && (
              <div className="text-center py-8">
                <div className="bg-soft-beige rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-exclamation-triangle text-warm-orange text-xl"></i>
                </div>
                <p className="text-charcoal text-sm">Unable to load recommendations</p>
                <p className="text-light-grey text-xs mt-1">Please try again later</p>
              </div>
            )}

            {recommendations && recommendations.length > 0 && (
              <div className="space-y-4">
                <p className="text-sm text-charcoal mb-4">
                  Based on your current page, you might be interested in:
                </p>
                
                {recommendations.map((rec: ContentRecommendation, index: number) => (
                  <Link 
                    key={index}
                    href={rec.url}
                    onClick={onClose}
                    className="block bg-soft-beige hover:bg-navy-blue hover:text-white rounded-lg p-4 transition-all duration-200 group"
                  >
                    <div className="flex items-start">
                      <div className={`mr-3 mt-1 ${getTypeColor(rec.type)} group-hover:text-white`}>
                        <i className={`${getTypeIcon(rec.type)} text-sm`}></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-1 group-hover:text-white">
                          {rec.title}
                        </h4>
                        <p className="text-xs text-charcoal group-hover:text-white opacity-90">
                          {rec.description}
                        </p>
                        <div className="flex items-center mt-2">
                          <span className={`text-xs uppercase font-medium ${getTypeColor(rec.type)} group-hover:text-white`}>
                            {rec.type}
                          </span>
                          <div className="ml-auto">
                            <i className="fas fa-arrow-right text-xs text-charcoal group-hover:text-white opacity-50"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {recommendations && recommendations.length === 0 && (
              <div className="text-center py-8">
                <div className="bg-soft-beige rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-search text-navy-blue text-xl"></i>
                </div>
                <p className="text-charcoal text-sm">No recommendations available</p>
                <p className="text-light-grey text-xs mt-1">Try exploring our services or industries</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-light-grey p-4">
            <div className="flex items-center text-xs text-light-grey">
              <i className="fas fa-magic mr-2"></i>
              <span>Powered by AI</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}