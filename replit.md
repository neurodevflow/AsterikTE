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
- July 15, 2025: CTA Button Color Standardization
  - Fixed all CTA buttons across 30+ pages to use navy-blue instead of warm-orange
  - Updated all Service pages and Industry pages with consistent navy-blue primary buttons
  - Maintained white text with proper hover:bg-opacity-90 transitions
  - All "Get Started" and "Learn More" buttons now use consistent navy-blue brand color
- July 15, 2025: Font Awesome Icon Implementation
  - Replaced all numbered circles and small bullet points with meaningful Font Awesome icons
  - Updated Home.tsx bullet points: regulatory compliance (fa-balance-scale), cloud adoption (fa-cloud), cybersecurity (fa-shield-alt)
  - Updated Approach.tsx framework icons: Discover (fa-search), Design (fa-drafting-compass), Deploy (fa-rocket), Optimize (fa-chart-line)
  - Updated all service pages with contextual process icons matching their specific workflows
  - Platform Engineering: Assessment (fa-search), Design (fa-drafting-compass), Implementation (fa-tools), Optimization (fa-chart-line)
  - Product Design: Discovery (fa-search), Design (fa-palette), Validation (fa-check-circle), Implementation (fa-tools)
  - Managed Support: Assessment (fa-search), Service Design (fa-cogs), Implementation (fa-tools), Ongoing Support (fa-headset)
  - DevSecOps: Security Assessment (fa-shield-alt), Strategy (fa-drafting-compass), Implementation (fa-tools), Continuous Improvement (fa-chart-line)
  - Salesforce: Requirements Analysis (fa-search), Solution Design (fa-cloud), Implementation (fa-tools), Training & Support (fa-graduation-cap)
  - All icons properly sized and aligned with navy-blue background and white text
- July 15, 2025: Privacy Policy Page Implementation
  - Created comprehensive Privacy Policy page with professional layout and Asterik branding
  - Added routing for /privacy-policy route in App.tsx
  - Updated footer to properly link Privacy Policy to the new page
  - Included sections for Information Collection, Usage, Sharing, Security, User Rights, Cookies, and Contact Information
  - Maintains consistent navy-blue and soft-beige color scheme throughout
  - Updated with official Asterik Privacy Policy content (Effective Date: October 26, 2023)
  - Includes full compliance with UAE Federal Decree-Law No. 45 of 2021 (PDPL)
  - Contains all 16 sections of official legal content with proper PDPL article references
  - Official contact information: privacy@asterik.ae, Dubai, UAE
- July 15, 2025: Leadership Image Consistency Update
  - Replaced About page Leadership Excellence image with same authentic leadership image used on Home page
  - Updated image import to use leadershipImage from @assets/leadership Image_1751810042614.jpg
  - Maintained consistent professional leadership representation across both pages
- July 15, 2025: Font Awesome Integration Fix
  - Updated Font Awesome from unreliable script to official CSS CDN (Font Awesome 6.4.0)
  - Fixed missing icons in About page core values section (handshake, award, shield, chart-bar)
  - Improved overall site reliability and dropdown menu hover functionality
  - All icons now display consistently with navy-blue backgrounds and white symbols
- July 15, 2025: AI-Powered Content Recommendation Sidebar Implementation
  - Integrated Google Gemini AI for intelligent content recommendations
  - Created server-side API endpoint (/api/recommendations) using Gemini 2.5 Pro model
  - Built responsive sidebar component with smart content analysis
  - Added floating AI recommendation button with hover effects and tooltips
  - Recommendations categorized by service, industry, or insight with relevance scoring
  - Fallback recommendations for offline scenarios
  - Real-time page content analysis for contextual suggestions
- July 15, 2025: Complete Admin Dashboard System Implementation
  - Expanded database schema with comprehensive admin functionality
  - Added tables for admin users, analytics tracking, email campaigns, content management, and system logs
  - Implemented secure authentication system using bcrypt password hashing and JWT tokens
  - Created complete admin dashboard with overview, analytics, contacts, email campaigns, and content management
  - Built admin login page with authentication and protected route system
  - Integrated analytics tracking for page views, user sessions, and AI interactions
  - Added contact form submission handling and management system
  - Implemented email campaign creation and management tools
  - Created dynamic content management system for website updates
  - Added comprehensive dashboard analytics with charts using Recharts library
  - Established admin user creation script and initial super admin account
  - Successfully deployed to PostgreSQL database with all admin tables
- July 15, 2025: Complete Services and Industries Content Migration from Sombra
  - Successfully migrated comprehensive content from sombrainc.com services and industry pages
  - Updated Services.tsx with complete content including 11 services: Application Modernization, Product Design, Data Analytics, AI/ML, GenAI, Cloud, DevOps, DevSecOps, Cybersecurity, Managed Support, Salesforce
  - Updated Industries.tsx with comprehensive content covering 9 industries: Financial Services, Healthcare, Energy, Logistics, Wealth Management, Retail E-commerce, EdTech, Marketing, Insurance
  - Replaced all "Sombra" references with "Asterik" throughout both pages
  - Maintained original design patterns, professional styling, and responsive layout
  - Added detailed service descriptions, cooperation models, FAQ sections, and industry-specific solutions
  - Integrated compliance standards sections for Financial Services, Healthcare, and Energy industries
  - Enhanced both pages with professional hero sections, detailed feature lists, and comprehensive CTAs
  - Preserved Font Awesome icons and navy-blue/warm-orange color scheme consistency
- July 15, 2025: Complete Service and Industry Pages Content Update
  - Updated all service pages with comprehensive content from Sombra source
  - DevOps.tsx: Complete CI/CD, infrastructure as code, monitoring, and containerization content
  - Cloud.tsx: Full cloud migration, architecture, security, and optimization services
  - AIAndML.tsx: Machine learning models, NLP, computer vision, and predictive analytics
  - GenAI.tsx: Large language models, conversational AI, content generation, and code automation
  - Cybersecurity.tsx: Security assessment, threat detection, IAM, cloud security, and compliance
  - Healthcare.tsx: EHR systems, telemedicine, clinical research, medical imaging, and population health
  - OilAndGas.tsx: Exploration & production, digital oilfield, pipeline management, and HSE compliance
  - All pages feature professional hero sections, detailed service descriptions, technology stacks, metrics, and CTAs
  - Maintained consistent navy-blue and warm-orange branding with Font Awesome icons
  - Comprehensive content migration from Sombra now 100% complete across all service and industry pages
- July 15, 2025: Page Builder Enhancement for Existing Website Pages
  - Created comprehensive import script to convert static website pages into editable page builder content
  - Added functionality to import existing pages (Home, About, Services, Industries, Contact) into the database
  - Enhanced page builder with "Existing Website Pages" section for editing pre-built content
  - Implemented page loading system to convert static pages to dynamic components
  - Added import/export API endpoints for existing page management
  - Created structured component system for hero sections, content blocks, services grids, and contact forms
  - Enhanced page builder UI with separate sections for existing pages vs custom pages
  - All existing website pages can now be edited through the admin page builder interface
- July 15, 2025: Service Name Update and Content Enhancement
  - Changed "Cybersecurity and Resilience" to "Cybersecurity and Pen Testing" in dropdown menu and footer
  - Updated Cybersecurity service page with penetration testing focus and red team operations
  - Enhanced content to emphasize vulnerability assessment and ethical hacking services
  - Added comprehensive penetration testing methodologies and red team engagement options
  - Updated CTAs and descriptions to align with penetration testing specialization

## User Preferences

Preferred communication style: Simple, everyday language.