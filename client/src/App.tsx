import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import { AdminAuthProvider } from "./components/AdminAuthProvider";
import { useAuth } from "./hooks/useAuth";
import LoadingSpinner from "./components/LoadingSpinner";
import Home from "./pages/Home";
// Lazy load non-critical pages
import {
  LazyAbout,
  LazyContact,
  LazyInsights,
  LazyPrivacyPolicy,
  LazyTerms,
  LazyServices,
  LazyIndustries,
  LazyServiceDetail,
  LazyIndustryDetail,
  LazyApproach,
  LazyAdminLogin,
  LazyAdminDashboard
} from "./utils/lazyComponents";

import NotFound from "@/pages/not-found";

function AdminRoute({ component: Component }: { component: React.ComponentType }) {
  const { user, isLoading } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isLoading && !user) {
      setLocation('/admin/login');
    }
  }, [user, isLoading, setLocation]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-soft-beige flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy-blue mx-auto"></div>
          <p className="mt-4 text-charcoal">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <Component />;
}

function PublicRouter() {
  const [location] = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 relative">
        <main className="flex-1">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services/:serviceId">
              <Suspense fallback={<LoadingSpinner />}>
                <LazyServiceDetail />
              </Suspense>
            </Route>
            <Route path="/services">
              <Suspense fallback={<LoadingSpinner />}>
                <LazyServices />
              </Suspense>
            </Route>
            <Route path="/industries/:industryId">
              <Suspense fallback={<LoadingSpinner />}>
                <LazyIndustryDetail />
              </Suspense>
            </Route>
            <Route path="/industries">
              <Suspense fallback={<LoadingSpinner />}>
                <LazyIndustries />
              </Suspense>
            </Route>
            <Route path="/approach">
              <Suspense fallback={<LoadingSpinner />}>
                <LazyApproach />
              </Suspense>
            </Route>
            <Route path="/contact">
              <Suspense fallback={<LoadingSpinner />}>
                <LazyContact />
              </Suspense>
            </Route>
            <Route path="/about">
              <Suspense fallback={<LoadingSpinner />}>
                <LazyAbout />
              </Suspense>
            </Route>
            <Route path="/insights">
              <Suspense fallback={<LoadingSpinner />}>
                <LazyInsights />
              </Suspense>
            </Route>
            <Route path="/privacy-policy">
              <Suspense fallback={<LoadingSpinner />}>
                <LazyPrivacyPolicy />
              </Suspense>
            </Route>
            <Route path="/terms">
              <Suspense fallback={<LoadingSpinner />}>
                <LazyTerms />
              </Suspense>
            </Route>

            <Route path="/admin-login">
              <AdminAuthProvider>
                <Suspense fallback={<LoadingSpinner />}>
                  <LazyAdminLogin />
                </Suspense>
              </AdminAuthProvider>
            </Route>
            <Route path="/admin/login">
              <AdminAuthProvider>
                <Suspense fallback={<LoadingSpinner />}>
                  <LazyAdminLogin />
                </Suspense>
              </AdminAuthProvider>
            </Route>
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
      <Footer />
      <CookieConsent />
    </div>
  );
}

function Router() {
  const [location] = useLocation();

  // Check if this is an admin dashboard route (but not login routes)
  if (location.startsWith('/admin/dashboard') || location === '/admin') {
    return (
      <AdminAuthProvider>
        <Switch>
          <Route path="/admin">
            <Suspense fallback={<LoadingSpinner />}>
              <AdminRoute component={LazyAdminDashboard} />
            </Suspense>
          </Route>
          <Route path="/admin/dashboard">
            <Suspense fallback={<LoadingSpinner />}>
              <AdminRoute component={LazyAdminDashboard} />
            </Suspense>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </AdminAuthProvider>
    );
  }

  // All other routes (public + admin login)
  return <PublicRouter />;
}

function App() {
  // Scroll to top on page refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
          <Toaster />
          <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
