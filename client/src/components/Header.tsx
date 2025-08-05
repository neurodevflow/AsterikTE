import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  // All state declarations first
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [location] = useLocation();
  const isMobile = useIsMobile();

  // Clean up on location change to prevent caching issues
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setIndustriesDropdownOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
    document.body.style.overflow = 'unset';
    document.body.classList.remove('mobile-menu-open');
  }, [location]);

  // Clean up on component unmount and force reset on page load
  useEffect(() => {
    // Force clean state on component mount
    document.body.style.overflow = 'unset';
    document.body.classList.remove('mobile-menu-open');
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    };
  }, []);

  // Force close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.relative')) {
        setServicesDropdownOpen(false);
        setIndustriesDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Mobile menu toggle with proper body scroll handling and iOS fixes
  const handleMobileMenuToggle = () => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    
    // Prevent body scroll when menu is open with iOS-specific fixes
    if (newState) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      document.body.classList.add('mobile-menu-open');
      
      // iOS Safari viewport fix
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.classList.remove('mobile-menu-open');
    }
    
    // Reset dropdown states when closing
    if (!newState) {
      setMobileServicesOpen(false);
      setMobileIndustriesOpen(false);
    }
  };

  const navigation = [
    { name: "Home", href: "/" },
    { 
      name: "Services", 
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        {
          category: "Software Engineering",
          items: [
            { name: "Application Modernization", href: "/services/application-modernization" },
            { name: "Software Development", href: "/services/software-development" },
            { name: "Quality Engineering", href: "/services/quality-engineering" },
            { name: "Business Analysis", href: "/services/business-analysis" }
          ]
        },
        {
          category: "DevOps and Cloud",
          items: [
            { name: "Cloud", href: "/services/cloud" },
            { name: "DevOps", href: "/services/devops" },
            { name: "DevSecOps", href: "/services/devsecops" }
          ]
        },
        {
          category: "Data and Artificial Intelligence",
          items: [
            { name: "Data and Analytics", href: "/services/data-analytics" },
            { name: "AI and ML", href: "/services/ai-ml" },
            { name: "GenAI", href: "/services/genai" }
          ]
        },
        {
          category: "Digital Excellence",
          items: [
            { name: "Product Design", href: "/services/product-design" },
            { name: "Cybersecurity and Pen Testing", href: "/services/cybersecurity-resilience" },
            { name: "Managed Support", href: "/services/managed-support" },
            { name: "Salesforce", href: "/services/salesforce" },
            { name: "All services", href: "/services" }
          ]
        }
      ]
    },
    { 
      name: "Industries", 
      href: "/industries",
      hasDropdown: true,
      dropdownItems: [
        { name: "Government (RegTech)", href: "/industries/government-regtech" },
        { name: "Financial Services", href: "/industries/financial-services" },
        { name: "Energy", href: "/industries/energy" },
        { name: "Oil and Gas", href: "/industries/oil-gas" },
        { name: "Healthcare", href: "/industries/healthcare" },
        { name: "Retail and E-commerce", href: "/industries/retail-ecommerce" },
        { name: "Logistics", href: "/industries/logistics" },
        { name: "EdTech", href: "/industries/edtech" },
        { name: "Marketing", href: "/industries/marketing" }
      ]
    },
    { name: "Approach", href: "/approach" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/insights" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky-nav bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="font-bold text-2xl text-navy-blue">
                ASTERIK
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      onMouseEnter={() => {
                        if (item.name === "Services") setServicesDropdownOpen(true);
                        if (item.name === "Industries") setIndustriesDropdownOpen(true);
                      }}
                      onMouseLeave={(e) => {
                        // Add delay to prevent dropdown from closing too quickly
                        setTimeout(() => {
                          // Check if mouse is still within dropdown area
                          const dropdownElement = e.currentTarget.querySelector('.dropdown-menu');
                          if (dropdownElement && !dropdownElement.matches(':hover')) {
                            if (item.name === "Services") setServicesDropdownOpen(false);
                            if (item.name === "Industries") setIndustriesDropdownOpen(false);
                          }
                        }, 150);
                      }}
                    >
                      <Link
                        href={item.href}
                        className={`transition-colors duration-200 font-medium flex items-center ${
                          isActive(item.href)
                            ? "text-navy-blue"
                            : "text-charcoal hover:text-navy-blue"
                        }`}
                      >
                        {item.name}
                        <i className="fas fa-chevron-down ml-1 text-xs"></i>
                      </Link>
                      
                      {/* Dropdown Menu */}
                      {((item.name === "Services" && servicesDropdownOpen) || 
                        (item.name === "Industries" && industriesDropdownOpen)) && (
                        <div 
                          className="dropdown-menu absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-light-grey z-50"
                          onMouseEnter={() => {
                            // Keep dropdown open when hovering over it
                            if (item.name === "Services") setServicesDropdownOpen(true);
                            if (item.name === "Industries") setIndustriesDropdownOpen(true);
                          }}
                          onMouseLeave={() => {
                            // Close dropdown when leaving dropdown area
                            setTimeout(() => {
                              if (item.name === "Services") setServicesDropdownOpen(false);
                              if (item.name === "Industries") setIndustriesDropdownOpen(false);
                            }, 100);
                          }}
                        >
                          {item.name === "Services" ? (
                            <div className="p-8 w-[1000px]">
                              <div className="grid grid-cols-4 gap-10">
                                {item.dropdownItems.map((category: any) => (
                                  <div key={category.category} className="space-y-4">
                                    <h4 className="font-bold text-navy-blue text-xs uppercase tracking-wide border-b border-light-grey pb-3">
                                      {category.category}
                                    </h4>
                                    <ul className="space-y-1">
                                      {category.items.map((subItem: any) => (
                                        <li key={subItem.name}>
                                          <Link
                                            href={subItem.href}
                                            className="block py-1 text-xs text-charcoal hover:text-navy-blue transition-colors duration-200 leading-tight whitespace-nowrap"
                                          >
                                            {subItem.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="p-8 w-[480px]">
                              <div className="grid grid-cols-2 gap-8">
                                {item.dropdownItems.map((industry: any, index) => (
                                  <Link
                                    key={industry.name}
                                    href={industry.href}
                                    className="block py-1 px-3 text-xs text-charcoal hover:text-navy-blue hover:bg-soft-beige rounded transition-colors duration-200 leading-tight whitespace-nowrap"
                                  >
                                    {industry.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`transition-colors duration-200 font-medium ${
                        isActive(item.href)
                          ? "text-navy-blue"
                          : "text-charcoal hover:text-navy-blue"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>



          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="mobile-menu-button text-charcoal hover:text-navy-blue focus:outline-none p-2 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle mobile menu"
              style={{ touchAction: 'manipulation' }}
            >
              <i className="fas fa-bars text-xl" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Full Screen Overlay */}
        {mobileMenuOpen && (
          <div className="mobile-menu-overlay md:hidden fixed inset-0 bg-white z-[9999] overflow-y-auto">
            {/* Close Button */}
            <div className="flex justify-between items-center p-4 border-b border-light-grey bg-white">
              <Link href="/" onClick={handleMobileMenuToggle}>
                <h1 className="font-bold text-2xl text-navy-blue">ASTERIK</h1>
              </Link>
              <button
                onClick={handleMobileMenuToggle}
                className="text-charcoal hover:text-navy-blue focus:outline-none p-2 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close mobile menu"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <div className="px-4 pt-4 pb-8 space-y-1 bg-white min-h-screen">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => {
                          if (item.name === "Services") {
                            setMobileServicesOpen(!mobileServicesOpen);
                            setMobileIndustriesOpen(false);
                          }
                          if (item.name === "Industries") {
                            setMobileIndustriesOpen(!mobileIndustriesOpen);
                            setMobileServicesOpen(false);
                          }
                        }}
                        className={`flex items-center justify-between w-full px-3 py-3 text-left transition-colors touch-manipulation min-h-[44px] ${
                          isActive(item.href)
                            ? "text-navy-blue"
                            : "text-charcoal hover:text-navy-blue"
                        }`}
                        style={{ touchAction: 'manipulation' }}
                      >
                        <span className="font-medium">{item.name}</span>
                        <i className={`fas fa-chevron-${
                          (item.name === "Services" && mobileServicesOpen) || 
                          (item.name === "Industries" && mobileIndustriesOpen) 
                            ? 'up' : 'down'
                        } text-xs transition-transform duration-200`}></i>
                      </button>
                      
                      {/* Mobile Dropdown Items */}
                      {((item.name === "Services" && mobileServicesOpen) || 
                        (item.name === "Industries" && mobileIndustriesOpen)) && (
                        <div className="ml-4 mt-2 mb-3 bg-soft-beige rounded-lg p-4 border-l-4 border-navy-blue">
                          {item.name === "Services" ? (
                            <div className="space-y-4">
                              {item.dropdownItems.map((category: any) => (
                                <div key={category.category} className="space-y-2">
                                  <div className="font-bold text-navy-blue text-xs uppercase tracking-wide border-b border-light-grey pb-2">
                                    {category.category}
                                  </div>
                                  <div className="space-y-1">
                                    {category.items.map((subItem: any) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        onClick={handleMobileMenuToggle}
                                        className="block py-3 px-2 text-sm text-charcoal hover:text-navy-blue hover:bg-white rounded transition-colors touch-manipulation min-h-[44px] leading-normal"
                                        style={{ touchAction: 'manipulation' }}
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="space-y-1">
                              {item.dropdownItems.map((subItem: any) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={handleMobileMenuToggle}
                                  className="block py-3 px-2 text-sm text-charcoal hover:text-navy-blue hover:bg-white rounded transition-colors touch-manipulation min-h-[44px] leading-normal"
                                  style={{ touchAction: 'manipulation' }}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={handleMobileMenuToggle}
                      className={`block px-3 py-3 transition-colors touch-manipulation font-medium min-h-[44px] ${
                        isActive(item.href)
                          ? "text-navy-blue"
                          : "text-charcoal hover:text-navy-blue"
                      }`}
                      style={{ touchAction: 'manipulation' }}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
