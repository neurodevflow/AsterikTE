import { lazy } from 'react';

// Lazy load non-critical pages for better initial bundle size
export const LazyAbout = lazy(() => import('../pages/About'));
export const LazyContact = lazy(() => import('../pages/Contact'));
export const LazyInsights = lazy(() => import('../pages/Insights'));
export const LazyPrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
export const LazyTerms = lazy(() => import('../pages/Terms'));

// Lazy load service and industry pages 
export const LazyServices = lazy(() => import('../pages/Services'));
export const LazyIndustries = lazy(() => import('../pages/Industries'));
export const LazyServiceDetail = lazy(() => import('../pages/ServiceDetail'));
export const LazyIndustryDetail = lazy(() => import('../pages/IndustryDetail'));
export const LazyApproach = lazy(() => import('../pages/Approach'));

// Lazy load admin components (should only load when needed)
export const LazyAdminLogin = lazy(() => import('../pages/admin/AdminLogin'));
export const LazyAdminDashboard = lazy(() => import('../pages/admin/Dashboard'));