// Local image mapping - replaces Unsplash dependencies
export const localImages = {
  // Main business collaboration image for Services page
  'business-collaboration': '/assets/images/downloaded/business-collaboration.jpg',
  
  // Technology consulting team for Home and Insights pages  
  'tech-consulting-team': '/assets/images/downloaded/tech-consulting-team.jpg',
  
  // Team building and collaboration
  'team-building': '/assets/images/downloaded/team-building.jpg',
  
  // Business strategy and growth planning
  'business-strategy': '/assets/images/downloaded/business-strategy.jpg'
};

// Map Unsplash URLs to local images
export const mapUnsplashToLocal = (unsplashUrl: string): string => {
  // Business collaboration handshake
  if (unsplashUrl.includes('photo-1497366216548-37526070297c')) {
    return localImages['business-collaboration'];
  }
  
  // Technology consulting team
  if (unsplashUrl.includes('photo-1553877522-43269d4ea984')) {
    return localImages['tech-consulting-team'];
  }
  
  // Team building
  if (unsplashUrl.includes('photo-1522071820081-009f0129c71c')) {
    return localImages['team-building'];
  }
  
  // Business strategy
  if (unsplashUrl.includes('photo-1460925895917-afdab827c52f')) {
    return localImages['business-strategy'];
  }
  
  // Default fallback - return original URL if no mapping found
  return unsplashUrl;
};

export default localImages;