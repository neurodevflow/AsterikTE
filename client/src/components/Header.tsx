import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isMobile = useIsMobile();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Approach", href: "/approach" },
    { name: "Contact", href: "/contact" },
    { name: "Insights", href: "/insights" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="font-bold text-2xl" style={{ color: "var(--asterik-dark)" }}>
                ASTERIK
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 font-medium ${
                    isActive(item.href)
                      ? "text-red-600"
                      : "text-gray-900 hover:text-red-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Login Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="text-gray-900 hover:text-red-600 transition-colors duration-200 font-medium">
              Staff Login
            </button>
            <button 
              className="text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all duration-200 font-medium"
              style={{ backgroundColor: "var(--asterik-red)" }}
            >
              Customer Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-900 hover:text-red-600 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 transition-colors ${
                    isActive(item.href)
                      ? "text-red-600"
                      : "text-gray-900 hover:text-red-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t pt-2">
                <button className="block px-3 py-2 text-gray-900 hover:text-red-600 w-full text-left">
                  Staff Login
                </button>
                <button 
                  className="block px-3 py-2 text-white rounded-md mx-3 mt-2 text-center"
                  style={{ backgroundColor: "var(--asterik-red)" }}
                >
                  Customer Login
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
