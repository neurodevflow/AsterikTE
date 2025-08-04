import { Request, Response, NextFunction } from 'express';
import compression from 'compression';

// Performance optimizations middleware
export function setupPerformanceMiddleware(app: any) {
  // Enable gzip compression
  app.use(compression({
    level: 6, // Good balance between compression and speed
    threshold: 1024, // Only compress files larger than 1KB
    filter: (req: Request, res: Response) => {
      // Don't compress responses if this request has a 'no-transform' directive
      if (req.headers['cache-control'] && req.headers['cache-control'].includes('no-transform')) {
        return false;
      }
      
      // Compress all text-based responses
      return compression.filter(req, res);
    }
  }));

  // Cache control headers
  app.use((req: Request, res: Response, next: NextFunction) => {
    // Cache static assets for 1 year
    if (req.url.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
    // Cache HTML for 1 hour with revalidation
    else if (req.url.endsWith('.html') || req.url === '/') {
      res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
    }
    // Cache API responses for 5 minutes
    else if (req.url.startsWith('/api/')) {
      res.setHeader('Cache-Control', 'public, max-age=300');
    }
    
    next();
  });

  // Security headers that also improve performance
  app.use((req: Request, res: Response, next: NextFunction) => {
    // Enable DNS prefetching
    res.setHeader('X-DNS-Prefetch-Control', 'on');
    
    // Optimize resource loading
    res.setHeader('X-Content-Type-Options', 'nosniff');
    
    // Enable HSTS for HTTPS performance
    if (req.secure || req.headers['x-forwarded-proto'] === 'https') {
      res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    }
    
    next();
  });
}