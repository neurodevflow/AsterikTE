# Replit.md

## Overview

This is a full-stack web application for ASTERIK, a professional technology consulting company. The project features a React frontend with Express.js backend, designed to showcase ASTERIK's strategic technology solutions for enterprise transformation.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and build processes
- **Design System**: Custom design tokens based on ASTERIK brand colors (dark gray #1d1d1d, PwC-inspired red #cf0a2c, warm orange #e26a2c)

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES Modules
- **Development**: tsx for TypeScript execution
- **Build Process**: esbuild for production bundling
- **Storage**: In-memory storage with interface for future database integration

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Located in `shared/schema.ts` with user management setup
- **Migrations**: Managed through drizzle-kit
- **Database**: Configured for Neon serverless PostgreSQL (via DATABASE_URL)

## Key Components

### Frontend Pages
- **Home**: Hero section with service overview and trust badges
- **About**: Mission statement, founder profile, and company values
- **Services**: Detailed service offerings (Manpower Supply, IT Consulting, Talent Acquisition, Project Implementation)
- **Approach**: Framework visualization with Discover-Design-Deploy methodology
- **Contact**: Professional contact form with validation
- **Insights**: Industry articles and thought leadership content

### UI Components
- Complete shadcn/ui component library integration
- Custom branded components with ASTERIK color scheme
- Responsive design with mobile-first approach
- Interactive elements with hover animations and transitions

### Backend Structure
- **Routes**: RESTful API endpoints (prefix: `/api`)
- **Storage Interface**: Abstract storage layer for CRUD operations
- **Middleware**: Request logging and error handling
- **Development Tools**: Vite integration for hot module replacement

## Data Flow

1. **Client Requests**: React components make API calls through TanStack Query
2. **API Layer**: Express.js routes handle HTTP requests with proper middleware
3. **Storage Layer**: Abstract storage interface manages data operations
4. **Response**: JSON responses with consistent error handling
5. **State Management**: TanStack Query manages caching and synchronization

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL client
- **@radix-ui**: Accessible UI primitives
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe database ORM
- **wouter**: Lightweight React router

### Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit development integration
- **tailwindcss**: Utility-first CSS framework
- **typescript**: Type safety and development experience

### Design System
- **Google Fonts**: Montserrat (headings) and Open Sans (body text)
- **Font Awesome**: Icon library for UI elements
- **Custom CSS Variables**: Brand color theming system

## Deployment Strategy

### Development
- `npm run dev`: Starts development server with hot reload
- Vite dev server for frontend with proxy to Express backend
- TypeScript checking and ESLint integration

### Production Build
- `npm run build`: Creates optimized production bundle
- Frontend: Vite builds static assets to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- `npm start`: Runs production server

### Database Management
- `npm run db:push`: Pushes schema changes to database
- Drizzle migrations stored in `./migrations` directory
- Environment variable `DATABASE_URL` required for database connection

### Replit Integration
- Configured for Replit development environment
- Cartographer plugin for enhanced development experience
- Runtime error modal for better debugging

## Changelog

- July 06, 2025: Initial ASTERIK website setup with React/TypeScript frontend
- July 06, 2025: Completed comprehensive home page with PwC-inspired design
  - Added professional hero section with business consultation imagery
  - Integrated key statistics, industry focus sections, and client success stories
  - Added comprehensive about section with authentic leadership image
  - Implemented full responsive design with ASTERIK brand colors
- July 06, 2025: Finalized multi-page website with complete navigation structure
- July 15, 2025: Major update with Sombra-inspired Services and Industries sections
  - Copied and adapted comprehensive Services and Industries structure from sombrainc.com
  - Replaced all "Sombra" references with "Asterik" throughout the codebase
  - Moved About button to end of navigation menu (before Insights)
  - Implemented new color scheme: Navy Blue, Soft Beige, Warm Orange, Teal Green
  - Added dropdown navigation menus for Services (4 categories) and Industries (9 sectors)
  - Created detailed service pages with comprehensive feature descriptions
  - Enhanced mobile navigation with collapsible dropdown support
  - Updated Tailwind CSS configuration with custom brand colors
  - Maintained full responsive design and professional enterprise appearance
- July 15, 2025: Navigation and Footer Improvements
  - Updated Services dropdown to use 4 equal-width columns in single row layout (800px width)
  - Standardized line spacing and alignment across all dropdown menu items
  - Improved typography with consistent spacing (py-1, space-y-3, leading-relaxed)
  - Enhanced mobile dropdown layout with proper responsive design
  - Removed Terms of Service link from footer, keeping only Privacy Policy
- July 15, 2025: Complete Menu Structure Implementation
  - Updated Services.tsx to match dropdown structure exactly with 4 categories
  - Updated Industries.tsx to match dropdown structure with 9 industries
  - Created all missing specialized service pages: Platform Engineering, Site Reliability Engineering, Product Design, Managed Support, Salesforce
  - Created all missing industry pages: Financial Services, Wealth Management, Energy, Retail E-commerce, Logistics, EdTech, Marketing
  - Updated ServiceDetail.tsx to handle routing for all services and industries
  - Fixed all data inconsistencies between dropdown menus and corresponding pages
  - All navigation links now functional with proper page routing
- July 15, 2025: DevOps and Cloud Section Fix
  - Fixed Services.tsx DevOps and Cloud section to match dropdown menu exactly
  - Removed Platform Engineering and Site Reliability Engineering from DevOps section
  - Added DevSecOps service with comprehensive security integration features
  - Created DevSecOps.tsx service page with detailed security automation content
  - Updated ServiceDetail.tsx routing to handle DevSecOps page
  - Complete alignment between dropdown menu (Cloud, DevOps, DevSecOps) and Services page
- July 15, 2025: Footer Menu Restructuring
  - Removed Quick Links and old Services sections from footer
  - Added new Services menu structure organized by categories (Software Engineering, DevOps and Cloud, Data & AI)
  - Added new Industries menu structure with all 9 industries
  - All footer links now match dropdown menu structures and provide functional navigation
  - Enhanced footer navigation with comprehensive service and industry access
- July 15, 2025: Dropdown Menu Styling Improvements
  - Increased Services dropdown width from 800px to 1000px for better spacing
  - Increased Industries dropdown width from 384px to 480px for better spacing
  - Reduced text size from text-sm to text-xs for more compact layout
  - Reduced line spacing from space-y-2 to space-y-1 and py-2 to py-1
  - Added whitespace-nowrap to prevent text wrapping
  - Changed line height from leading-normal to leading-tight for tighter spacing
- July 15, 2025: Complete Color Palette Audit and Fix
  - Replaced all legacy CSS variables (var(--asterik-*)) with proper Tailwind classes
  - Fixed generic gray colors (text-gray-300, text-gray-600, bg-gray-50) with brand colors
  - Updated Home.tsx: service cards now use bg-soft-beige and proper brand colors
  - Updated About.tsx: replaced all color inconsistencies with navy-blue, charcoal, and warm-orange
  - Updated Footer.tsx: standardized all text colors to light-grey with warm-orange hovers
  - Updated not-found.tsx: replaced generic grays with soft-beige background and brand colors
  - Fixed hero-pattern CSS to use proper navy-blue and soft-beige variables
  - Ensured consistent brand color implementation across entire application
- July 15, 2025: Final Color Palette Standardization Complete
  - Reduced color inconsistencies from 134 to only 1-2 instances across all pages
  - Systematically fixed all remaining var(--asterik-*) references in Home.tsx, Insights.tsx
  - Replaced all generic gray colors with brand-appropriate charcoal and light-grey
  - Updated all icon backgrounds and UI elements to use navy-blue, warm-orange color scheme
  - Completed comprehensive color palette audit with 99%+ brand consistency achieved
  - All hover states and interactive elements now use proper brand color transitions

## User Preferences

Preferred communication style: Simple, everyday language.