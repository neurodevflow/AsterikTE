import { useState } from "react";
import { Link } from "wouter";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setMessage("");

    try {
      // Create form data for Brevo submission
      const formData = new FormData();
      formData.append('EMAIL', email);
      formData.append('email_address_check', ''); // honeypot field
      formData.append('locale', 'en');

      // Submit to Brevo endpoint
      const response = await fetch('https://26a619dc.sibforms.com/serve/MUIFALANaSS80kD1wkCfojx-Wy_8_R7kayoeJzMAWYpyTGRIGTvNFh3y-rqyEbkiU5sMZI4yloAOIQvGQqOVJXL2MqXSvc6hLv5igsoNvG71OmKkHUXXyWlQyyjeFsX2N6Yo9g3KedMrcsdP9wlkoGpWyMgBhNTGGLdsYi0nE-9lVHmbJMZWoqkpVqfGiZQ6nyrE_CXhzUE2j8vV', {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Brevo doesn't support CORS
      });

      // Since we can't read the response due to no-cors, assume success
      setMessage("Thank you for subscribing to our newsletter!");
      setEmail("");
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setMessage("Subscription failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-navy-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-2xl mb-4">ASTERIK</h3>
            <div className="mb-4">
              <a
                href="https://webmail.asterik.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal-green hover:bg-warm-orange text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <i className="fas fa-envelope mr-2"></i>
                Webmail
              </a>
            </div>
            <p className="text-light-grey mb-4">
              Strategic Technology Solutions for Enterprise Transformation
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/asterik-technology-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-orange hover:text-white transition-colors duration-200"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="https://twitter.com/asteriktech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-orange hover:text-white transition-colors duration-200"
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
                <h5 className="font-semibold text-soft-beige mb-2">Software Engineering</h5>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/services/application-modernization" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                      Application Modernization
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/software-development" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/quality-engineering" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                      Quality Engineering
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/business-analysis" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                      Business Analysis
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-soft-beige mb-2">DevOps and Cloud</h5>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/services/cloud" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                      Cloud
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/devops" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                      DevOps
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/devsecops" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                      DevSecOps
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-soft-beige mb-2">Data & AI</h5>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/services/data-analytics" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                      Data and Analytics
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ai-ml" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                      AI and ML
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/genai" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                      GenAI
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-soft-beige mb-2">Digital Excellence</h5>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/services/product-design" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                      Product Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cybersecurity-resilience" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                      Cybersecurity and Pen Testing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/managed-support" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                      Managed Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/salesforce" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
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
                <Link href="/industries/government-regtech" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                  Government (RegTech)
                </Link>
              </li>
              <li>
                <Link href="/industries/financial-services" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/industries/energy" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                  Energy
                </Link>
              </li>
              <li>
                <Link href="/industries/oil-gas" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                  Oil and Gas
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries/retail-ecommerce" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                  Retail E-commerce
                </Link>
              </li>
              <li>
                <Link href="/industries/logistics" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                  Logistics
                </Link>
              </li>
              <li>
                <Link href="/industries/edtech" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                  EdTech
                </Link>
              </li>
              <li>
                <Link href="/industries/marketing" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                  Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Stay Updated</h4>
            <p className="text-light-grey mb-4 text-sm">
              Subscribe for industry insights and updates
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-white text-charcoal rounded-lg border border-light-grey focus:ring-2 focus:ring-warm-orange focus:border-transparent placeholder-light-grey text-sm"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="w-full bg-warm-orange hover:bg-teal-green text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
              </button>
              {message && (
                <p className={`text-sm mt-2 ${message.includes('Thank you') ? 'text-teal-green' : 'text-red-400'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-charcoal pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-grey text-sm">© 2025 ASTERIK. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-light-grey hover:text-warm-orange text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-light-grey hover:text-warm-orange text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
