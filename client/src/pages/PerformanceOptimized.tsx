/**
 * Performance-optimized page template for critical pages
 * Implements all PageSpeed Insights recommendations
 */
import { lazy, Suspense } from 'react';
import OptimizedImage from '../components/OptimizedImage';

// Lazy load non-critical components
const LazyInsights = lazy(() => import('../components/Insights'));
const LazyServiceCards = lazy(() => import('../components/ServiceCards'));

interface PerformanceOptimizedPageProps {
  title: string;
  description: string;
  heroImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  children: React.ReactNode;
}

export default function PerformanceOptimizedPage({
  title,
  description,
  heroImage,
  children,
}: PerformanceOptimizedPageProps) {
  return (
    <div className="pt-16">
      {/* Hero Section - Critical path optimized */}
      <section className="hero-section relative min-h-[50vh] flex items-center justify-center">
        {heroImage && (
          <div className="absolute inset-0">
            <OptimizedImage
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              priority={true}
              quality={85}
              className="w-full h-full object-cover opacity-30"
            />
          </div>
        )}
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{description}</p>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {children}
        
        {/* Lazy loaded sections */}
        <Suspense fallback={<div className="loading-skeleton h-64 rounded-lg" />}>
          <LazyServiceCards />
        </Suspense>
        
        <Suspense fallback={<div className="loading-skeleton h-96 rounded-lg" />}>
          <LazyInsights />
        </Suspense>
      </main>
    </div>
  );
}