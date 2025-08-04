import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import BrevoPopup from "./components/BrevoPopup";
import BrevoDebugPanel from "./components/BrevoDebugPanel";
import BrevoTester from "./utils/brevo-test";


import { AdminAuthProvider } from "./components/AdminAuthProvider";
import { useAuth } from "./hooks/useAuth";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import ServiceDetail from "./pages/ServiceDetail";
import IndustryDetail from "./pages/IndustryDetail";
import Approach from "./pages/Approach";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";

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
            <Route path="/services/:serviceId" component={ServiceDetail} />
            <Route path="/services" component={Services} />
            <Route path="/industries/:industryId" component={IndustryDetail} />
            <Route path="/industries" component={Industries} />
            <Route path="/approach" component={Approach} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/insights" component={Insights} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/terms" component={Terms} />

            <Route path="/admin-login">
              <AdminAuthProvider>
                <AdminLogin />
              </AdminAuthProvider>
            </Route>
            <Route path="/admin/login">
              <AdminAuthProvider>
                <AdminLogin />
              </AdminAuthProvider>
            </Route>
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
      <Footer />
      <CookieConsent />
      <BrevoPopup delayMs={3000} enabled={true} />
      <BrevoDebugPanel />

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
            <AdminRoute component={Dashboard} />
          </Route>
          <Route path="/admin/dashboard">
            <AdminRoute component={Dashboard} />
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
