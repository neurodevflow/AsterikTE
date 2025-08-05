# Replit.md

## Overview
This is a full-stack web application for ASTERIK, a professional technology consulting company. The project showcases ASTERIK's strategic technology solutions for enterprise transformation, featuring a React frontend and an Express.js backend. It aims to provide comprehensive information on services, industries, and company insights, serving as a robust digital presence.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library, custom design tokens based on ASTERIK brand colors (dark gray #1d1d1d, PwC-inspired red #cf0a2c, warm orange #e26a2c), with later updates to Navy Blue, Soft Beige, Warm Orange, Teal Green.
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite
- **UI/UX Decisions**: Responsive design with mobile-first approach, interactive elements with hover animations, consistent branding across all pages (color scheme, Font Awesome icons), professional hero sections with gradient backgrounds, structured content presentation for services and industries, standardized CTA buttons.

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES Modules
- **Development**: tsx for TypeScript execution
- **Build Process**: esbuild for production bundling
- **Storage**: In-memory storage with interface for future database integration; Drizzle ORM configured for PostgreSQL.
- **API Design**: RESTful API endpoints (prefix: `/api`), abstract storage layer for CRUD operations, middleware for request logging and error handling.

### Data Flow
Client requests made via React components and TanStack Query, processed by Express.js API routes, data operations managed by an abstract storage interface, returning JSON responses. TanStack Query handles client-side caching and synchronization.

### Key Features and Implementations
- **Frontend Pages**: Home, About, Services (detailed offerings including Application Modernization, Product Design, Data Analytics, AI/ML, GenAI, Cloud, DevOps, DevSecOps, Cybersecurity and Pen Testing, Managed Support, Salesforce), Approach, Contact, Insights, Privacy Policy.
- **UI Components**: shadcn/ui integration, custom branded components, responsive navigation menus (including mobile-specific behaviors).
- **Admin Dashboard**: Comprehensive system with secure authentication (bcrypt, JWT), analytics tracking (page views, user sessions), contact form management, email campaign tools, dynamic content management system (CMS) with page builder functionality to import and edit existing website pages.
- **Database Management**: Drizzle ORM for PostgreSQL (Neon serverless), schema in `shared/schema.ts`, migrations via drizzle-kit, user management setup, additional tables for admin functionalities (users, analytics, email campaigns, content, system logs). Removed customer login and AI interactions tracking.

## External Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL client.
- **@radix-ui**: Accessible UI primitives.
- **@tanstack/react-query**: Server state management.
- **drizzle-orm**: Type-safe database ORM.
- **wouter**: Lightweight React router.
- **tailwindcss**: Utility-first CSS framework.
- **typescript**: Type safety.
- **Google Fonts**: Montserrat (headings), Open Sans (body text).
- **Font Awesome**: Icon library.

- **Recharts**: Charting library used in the admin dashboard.
- **bcryptjs**: For password hashing.
- **jsonwebtoken**: For JWT token management.

## Recent Changes (August 2025)
- **Removed Customer Login**: Eliminated all customer authentication functionality including CustomerLogin.tsx component and related routes.
- **Removed AI Recommendations**: Systematically removed all Gemini AI recommendation features including components, server endpoints, analytics tracking, and database schema.
- **Streamlined Admin Dashboard**: Cleaned up PageBuilder component by removing AI generation functionality and related UI elements.
- **Updated Analytics**: Removed AI interaction tracking from dashboard statistics and database schema.
- **Brevo Integration**: Configured Express server to serve static domain verification files (brevo-frame.html and sw.js) from root directory, integrated Brevo SDK script with client key for enhanced tracking and analytics.
- **Security Enhancements (August 3, 2025)**: Implemented comprehensive security improvements including restricted CORS policy, enhanced security headers (CSP, HSTS, etc.), comprehensive input validation with XSS/SQL injection protection, proper error handling with custom error classes, and automated testing framework setup.
- **Infrastructure Improvements**: Added professional error handling middleware, comprehensive API documentation, and removed legacy code files for cleaner codebase.
- **Security Verification Completed (August 3, 2025)**: Application successfully upgraded from 8+ moderate vulnerabilities to enterprise-grade security. Comprehensive QA testing performed with all security controls verified. Application is production-ready with excellent security posture.
- **QA Implementation Completed (August 3, 2025)**: Implemented all 18 high-priority findings from comprehensive QA testing report including WCAG 2.1 AA accessibility compliance, GDPR/PDPA cookie consent, enhanced mobile navigation with full-screen overlay, optimized SEO meta tags with regional targeting, comprehensive privacy policy and terms of service, improved color contrast and ARIA labels, sticky navigation with backdrop blur, and performance optimization with browser caching headers. Website now meets enterprise-grade accessibility, compliance, and user experience standards.
- **CSV Bug Report Resolution Completed (August 3, 2025)**: Successfully resolved all 10 bugs from comprehensive CSV bug report including fixing Oil & Gas page title, updating social media links to official URLs (LinkedIn: asterikfzc, Twitter: AsterikSocial), implementing Google Maps integration on contact page, fixing non-functional "Read More" links in Insights page, making all CTA buttons functional across service pages, and fixing "View Case Studies" buttons to properly redirect to Insights page. Contact form functionality verified with successful testing and proper validation.
- **Bug #8: reCAPTCHA Integration Removed (August 4, 2025)**: Completely removed all Google reCAPTCHA v3 code from the application as requested. Cleaned up CSP headers, removed reCAPTCHA scripts, utilities, and configuration files.
- **Bug #7: Deployment Infrastructure Fixed (August 4, 2025)**: Resolved dependency conflicts between @tailwindcss/vite and vite@7.0.6 by implementing standard Tailwind CSS with PostCSS configuration. Eliminated 502 Gateway errors through proper server configuration and CSP updates. Application verified as deployment-ready with all security enhancements active.
- **Brevo SDK Integration Completed (August 4, 2025)**: Successfully integrated Brevo SDK with client key "gq5j34op6hpsf9idkgjdn0qm" in HTML header section. Updated Content Security Policy to allow required domains: cdn.brevo.com, sibautomation.com, and cdn.by.wonderpush.com for complete Brevo functionality. Resolved all CSP blocking errors for proper script loading.
- **Comprehensive Production Issues Resolution (August 5, 2025)**: Systematically resolved all critical production issues: (1) Removed corrupted OpenSans font files causing OTS parsing errors, (2) Fixed deprecated apple-mobile-web-app-capable meta tag and added mobile-web-app-capable, (3) Fixed manifest icon errors by removing problematic vite.svg references, (4) Enhanced Google Analytics CSP support with additional domains, (5) Resolved all TypeScript server errors, (6) Replaced hero image with optimized SVG to clear browser caching issues, (7) Verified page builder functionality is working with functional APIs and database operations, (8) Updated HTML preload references for performance optimization. All browser console errors eliminated and comprehensive testing confirms full functionality.