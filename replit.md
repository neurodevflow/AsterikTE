# Replit.md

## Overview
This is a full-stack web application for ASTERIK, a professional technology consulting company, showcasing strategic technology solutions for enterprise transformation. It features a React frontend and an Express.js backend, providing comprehensive information on services, industries, and company insights to serve as a robust digital presence.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library, custom design tokens based on ASTERIK brand colors (Navy Blue, Soft Beige, Warm Orange, Teal Green).
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite
- **UI/UX Decisions**: Responsive design with mobile-first approach, interactive elements with hover animations, consistent branding, professional hero sections, structured content presentation, and standardized CTA buttons.

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES Modules
- **Development**: tsx for TypeScript execution
- **Build Process**: esbuild for production bundling
- **Storage**: In-memory storage with interface for future database integration; Drizzle ORM configured for PostgreSQL.
- **API Design**: RESTful API endpoints, abstract storage layer for CRUD operations, middleware for request logging and error handling.

### Data Flow
Client requests are made via React components and TanStack Query, processed by Express.js API routes. Data operations are managed by an abstract storage interface, returning JSON responses. TanStack Query handles client-side caching and synchronization.

### Key Features and Implementations
- **Frontend Pages**: Home, About, Services (Application Modernization, Product Design, Data Analytics, AI/ML, GenAI, Cloud, DevOps, DevSecOps, Cybersecurity and Pen Testing, Managed Support, Salesforce), Approach, Contact, Insights, Privacy Policy.
- **UI Components**: shadcn/ui integration, custom branded components, responsive navigation menus.
- **Admin Dashboard**: Comprehensive system with secure authentication (bcrypt, JWT), analytics tracking, contact form management, email campaign tools, and dynamic content management system (CMS) with page builder functionality.
- **Database Management**: Drizzle ORM for PostgreSQL (Neon serverless), including schema, migrations, user management setup, and additional tables for admin functionalities.

## External Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL client.
- **@radix-ui**: Accessible UI primitives.
- **@tanstack/react-query**: Server state management.
- **drizzle-orm**: Type-safe database ORM.
- **wouter**: Lightweight React router.
- **tailwindcss**: Utility-first CSS framework.
- **typescript**: Type safety.
- **Recharts**: Charting library used in the admin dashboard.
- **bcryptjs**: For password hashing.
- **jsonwebtoken**: For JWT token management.
- **Brevo**: For email campaigns and tracking.
- **WonderPush**: For push notifications (integrated via Brevo SDK).