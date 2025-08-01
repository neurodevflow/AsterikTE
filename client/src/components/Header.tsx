import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [location] = useLocation();
  const isMobile = useIsMobile();

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
        { name: "Financial Services", href: "/industries/financial-services" },
        { name: "Wealth Management", href: "/industries/wealth-management" },
        { name: "Energy", href: "/industries/energy" },
        { name: "Oil and Gas", href: "/industries/oil-gas" },
        { name: "Healthcare and Life Science", href: "/industries/healthcare-life-science" },
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
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
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
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      onMouseEnter={() => {
                        if (item.name === "Services") setServicesDropdownOpen(true);
                        if (item.name === "Industries") setIndustriesDropdownOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (item.name === "Services") setServicesDropdownOpen(false);
                        if (item.name === "Industries") setIndustriesDropdownOpen(false);
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
                        <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-light-grey z-50">
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

          {/* Login Buttons */}
          <div className="hidden md:flex space-x-4">
            <a 
              href="https://webmail.asterik.ae" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-charcoal hover:text-navy-blue transition-colors duration-200 font-medium"
            >
              Staff Login
            </a>
            <Link 
              href="/customer-login"
              className="bg-navy-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all duration-200 font-medium"
            >
              Customer Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-charcoal hover:text-navy-blue focus:outline-none p-2 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle mobile menu"
              style={{ touchAction: 'manipulation' }}
            >
              <i className={`fas fa-${mobileMenuOpen ? 'times' : 'bars'} text-xl transition-transform duration-200`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-x-0 top-16 bg-white shadow-lg border-t border-light-grey z-40"
            onClick={(e) => {
              // Close menu when clicking outside but not on menu items
              if (e.target === e.currentTarget) {
                setMobileMenuOpen(false);
                setMobileServicesOpen(false);
                setMobileIndustriesOpen(false);
              }
            }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white max-h-screen overflow-y-auto">
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
                                        onClick={() => {
                                          setMobileMenuOpen(false);
                                          setMobileServicesOpen(false);
                                        }}
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
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setMobileIndustriesOpen(false);
                                  }}
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
                      onClick={() => setMobileMenuOpen(false)}
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
              
              {/* Mobile Login Buttons */}
              <div className="pt-4 border-t border-light-grey mt-4 space-y-2">
                <a 
                  href="https://webmail.asterik.ae" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-left px-3 py-3 text-charcoal hover:text-navy-blue transition-colors touch-manipulation font-medium min-h-[44px]"
                  style={{ touchAction: 'manipulation' }}
                >
                  Staff Login
                </a>
                <Link 
                  href="/customer-login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-3 py-3 bg-navy-blue text-white rounded-md hover:bg-opacity-90 transition-all touch-manipulation font-medium min-h-[44px]"
                  style={{ touchAction: 'manipulation' }}
                >
                  Customer Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
