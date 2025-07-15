import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import ServiceDetail from "./pages/ServiceDetail";
import Approach from "./pages/Approach";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services/:serviceId" component={ServiceDetail} />
          <Route path="/services" component={Services} />
          <Route path="/industries/:industryId" component={ServiceDetail} />
          <Route path="/industries" component={Industries} />
          <Route path="/approach" component={Approach} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/insights" component={Insights} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
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
