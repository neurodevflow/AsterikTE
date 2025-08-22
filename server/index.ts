import express, { type Request, Response, NextFunction } from "express";
import compression from "compression";
import path from "path";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { errorHandler, notFoundHandler } from "./errorHandler";
import { setupPerformanceMiddleware } from "./middleware/performance";

const app = express();

// Setup performance optimizations
setupPerformanceMiddleware(app);

// Enhanced security headers and restricted CORS
app.use((req, res, next) => {
  // Restricted CORS policy - only allow specific trusted domains
  const allowedOrigins = [
    "https://asterik.ae",
    "https://www.asterik.ae",
    process.env.NODE_ENV === "development" ? "http://localhost:5000" : null,
    process.env.REPL_SLUG && process.env.REPL_OWNER
      ? `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`
      : null,
  ].filter(Boolean);

  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
  res.header("Access-Control-Allow-Credentials", "true");

  // Enhanced security headers
  res.header("X-Content-Type-Options", "nosniff");
  res.header("X-Frame-Options", "ALLOWALL");
  res.header("X-XSS-Protection", "1; mode=block");
  res.header("Referrer-Policy", "strict-origin-when-cross-origin");
  res.header("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

  // Content Security Policy
  res.header(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://replit.com https://cdn.brevo.com https://sibautomation.com https://cdn.by.wonderpush.com",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data:",
      "img-src 'self' data: https:",
      "frame-src 'self' https://*.brevo.com https://cdn.by.wonderpush.com https://*.sibforms.com https://asterik.ae",
      "connect-src 'self' wss: ws: https://*.brevo.com https://sibautomation.com https://cdn.by.wonderpush.com https://*.wonderpush.com https://*.sibforms.com https://measurements-api.wonderpush.com https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://*.googletagmanager.com",
      "object-src 'none'",
      "base-uri 'self'",
    ].join("; "),
  );

  // HSTS for HTTPS
  if (req.secure || req.headers["x-forwarded-proto"] === "https") {
    res.header(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
    );
  }

  // Rate limiting headers
  res.header("X-Rate-Limit", "1000");
  
  // Improved caching for static assets with proper ETags
  if (req.url.match(/\.(css|js|woff2?|png|jpg|jpeg|gif|svg|ico)$/)) {
    res.header("Cache-Control", "public, max-age=31536000, immutable");
    res.header("ETag", `"${Date.now()}"`);
    // Add resource type headers for better optimization
    if (req.url.match(/\.(woff2?)$/)) {
      res.header("Content-Type", "font/woff2");
    }
    if (req.url.match(/\.(png|jpg|jpeg|gif|svg)$/)) {
      res.header("Content-Type", "image/*");
    }
  } else if (req.url.match(/\.(html|json)$/)) {
    res.header("Cache-Control", "public, max-age=3600, must-revalidate");
    res.header("ETag", `"${Date.now()}"`);
  } else {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", "0");
  }

  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from root directory for domain verification
app.use(express.static("."));

// Serve service worker with proper headers
app.get('/sw.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.sendFile(path.join(process.cwd(), 'client/public/sw.js'));
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  // Use comprehensive error handler
  app.use(errorHandler);

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
})();
