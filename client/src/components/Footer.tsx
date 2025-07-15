import { useState } from "react";
import { Link } from "wouter";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing to our newsletter!");
      setEmail("");
    }
  };

  return (
    <footer className="text-white py-16" style={{ backgroundColor: "var(--asterik-dark)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-2xl mb-4">ASTERIK</h3>
            <p className="text-gray-300 mb-4">
              Strategic Technology Solutions for Enterprise Transformation
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="transition-colors duration-200"
                style={{ color: "var(--asterik-orange)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--asterik-orange)")}
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="#"
                className="transition-colors duration-200"
                style={{ color: "var(--asterik-orange)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--asterik-orange)")}
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-gray-200 mb-2">Software Engineering</h5>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/services/application-modernization" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                      Application Modernization
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/software-development" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/quality-engineering" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                      Quality Engineering
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/business-analysis" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                      Business Analysis
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-200 mb-2">DevOps and Cloud</h5>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/services/cloud" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                      Cloud
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/devops" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                      DevOps
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/devsecops" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                      DevSecOps
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-200 mb-2">Data & AI</h5>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/services/data-analytics" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                      Data and Analytics
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ai-ml" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                      AI and ML
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/genai" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                      GenAI
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-200 mb-2">Digital Excellence</h5>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/services/product-design" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                      Product Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cybersecurity-resilience" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                      Cybersecurity and Resilience
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/managed-support" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                      Managed Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/salesforce" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                      Salesforce
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-bold text-lg mb-4">Industries</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/industries/oil-gas" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Oil and Gas
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare-life-science" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Healthcare and Life Science
                </Link>
              </li>
              <li>
                <Link href="/industries/financial-services" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/industries/wealth-management" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Wealth Management
                </Link>
              </li>
              <li>
                <Link href="/industries/energy" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Energy
                </Link>
              </li>
              <li>
                <Link href="/industries/retail-ecommerce" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Retail E-commerce
                </Link>
              </li>
              <li>
                <Link href="/industries/logistics" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Logistics
                </Link>
              </li>
              <li>
                <Link href="/industries/edtech" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  EdTech
                </Link>
              </li>
              <li>
                <Link href="/industries/marketing" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe for industry insights and updates
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": "var(--asterik-red)" } as React.CSSProperties}
                required
              />
              <button
                type="submit"
                className="text-white py-2 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
                style={{ backgroundColor: "var(--asterik-red)" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© 2024 ASTERIK. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-orange-400 text-sm transition-colors duration-200">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
