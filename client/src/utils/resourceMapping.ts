// Complete resource mapping to eliminate external dependencies
import { localImages } from './localImages';

// Local CSS resources mapping
export const localCSS = {
  'fontawesome': '/assets/css/fontawesome.min.css',
  'local-fonts': '/assets/css/local-fonts.css',
  'performance': '/assets/css/performance.css'
};

// Local JavaScript resources mapping
export const localJS = {
  'fontawesome': '/assets/js/fontawesome.min.js'
};

// Complete resource verification
export const checkResourceAvailability = async (resourcePath: string): Promise<boolean> => {
  try {
    const response = await fetch(resourcePath, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

// Get local resource URL or fallback
export const getLocalResource = (resourceType: 'image' | 'css' | 'js', resourceKey: string): string => {
  switch (resourceType) {
    case 'image':
      return localImages[resourceKey as keyof typeof localImages] || '/assets/images/placeholder.jpg';
    case 'css':
      return localCSS[resourceKey as keyof typeof localCSS] || '';
    case 'js':
      return localJS[resourceKey as keyof typeof localJS] || '';
    default:
      return '';
  }
};

export default {
  localImages,
  localCSS,
  localJS,
  checkResourceAvailability,
  getLocalResource
};