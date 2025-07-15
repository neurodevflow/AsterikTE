import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
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
          category: "Application & Software",
          items: [
            { name: "Application Modernization", href: "/services/application-modernization" },
            { name: "Software Development", href: "/services/software-development" },
            { name: "Software Engineering", href: "/services/software-engineering" },
            { name: "Application Support", href: "/services/application-support" }
          ]
        },
        {
          category: "Data & Analytics",
          items: [
            { name: "Data Engineering", href: "/services/data-engineering" },
            { name: "Data Infrastructure", href: "/services/data-infrastructure" },
            { name: "BI and Data Visualization", href: "/services/bi-data-visualization" },
            { name: "AI/ML Development", href: "/services/ai-ml-development" }
          ]
        },
        {
          category: "Cloud & DevOps",
          items: [
            { name: "Cloud Migration", href: "/services/cloud-migration" },
            { name: "Cloud Infrastructure", href: "/services/cloud-infrastructure" },
            { name: "DevSecOps", href: "/services/devsecops" },
            { name: "Managed Support", href: "/services/managed-support" }
          ]
        },
        {
          category: "Specialized Solutions",
          items: [
            { name: "Cybersecurity", href: "/services/cybersecurity" },
            { name: "Product Design", href: "/services/product-design" },
            { name: "Salesforce", href: "/services/salesforce" },
            { name: "Tech Consulting", href: "/services/tech-consulting" }
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
        { name: "Logistics", href: "/industries/logistics" },
        { name: "Marketing", href: "/industries/marketing" },
        { name: "Healthcare", href: "/industries/healthcare" },
        { name: "EdTech", href: "/industries/edtech" },
        { name: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
        { name: "Manufacturing", href: "/industries/manufacturing" }
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
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-light-grey z-50">
                          {item.name === "Services" ? (
                            <div className="p-4">
                              {item.dropdownItems.map((category) => (
                                <div key={category.category} className="mb-4">
                                  <h4 className="font-semibold text-navy-blue text-sm mb-2">
                                    {category.category}
                                  </h4>
                                  <ul className="space-y-1">
                                    {category.items.map((subItem) => (
                                      <li key={subItem.name}>
                                        <Link
                                          href={subItem.href}
                                          className="block py-1 px-2 text-sm text-charcoal hover:text-navy-blue hover:bg-soft-beige rounded transition-colors duration-200"
                                        >
                                          {subItem.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="p-4">
                              <ul className="space-y-1">
                                {item.dropdownItems.map((industry) => (
                                  <li key={industry.name}>
                                    <Link
                                      href={industry.href}
                                      className="block py-2 px-3 text-sm text-charcoal hover:text-navy-blue hover:bg-soft-beige rounded transition-colors duration-200"
                                    >
                                      {industry.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
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
            <button className="text-charcoal hover:text-navy-blue transition-colors duration-200 font-medium">
              Staff Login
            </button>
            <button className="bg-navy-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all duration-200 font-medium">
              Customer Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-charcoal hover:text-navy-blue focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-light-grey">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 transition-colors ${
                      isActive(item.href)
                        ? "text-navy-blue"
                        : "text-charcoal hover:text-navy-blue"
                    }`}
                  >
                    {item.name}
                    {item.hasDropdown && <i className="fas fa-chevron-down ml-1 text-xs"></i>}
                  </Link>
                  
                  {/* Mobile Dropdown Items */}
                  {item.hasDropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.name === "Services" ? (
                        item.dropdownItems.map((category) => (
                          <div key={category.category}>
                            <div className="font-semibold text-navy-blue text-xs uppercase tracking-wide px-3 py-1">
                              {category.category}
                            </div>
                            {category.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-6 py-1 text-sm text-charcoal hover:text-navy-blue hover:bg-soft-beige"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        ))
                      ) : (
                        item.dropdownItems.map((industry) => (
                          <Link
                            key={industry.name}
                            href={industry.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-6 py-1 text-sm text-charcoal hover:text-navy-blue hover:bg-soft-beige"
                          >
                            {industry.name}
                          </Link>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t border-light-grey pt-2">
                <button className="block px-3 py-2 text-charcoal hover:text-navy-blue w-full text-left">
                  Staff Login
                </button>
                <button className="block px-3 py-2 bg-navy-blue text-white rounded-md mx-3 mt-2 text-center">
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
