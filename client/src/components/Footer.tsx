import { Link } from "wouter";

export default function Footer() {

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
                href="#"
                className="text-warm-orange hover:text-white transition-colors duration-200"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="#"
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
                <Link href="/industries/oil-gas" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                  Oil and Gas
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare-life-science" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                  Healthcare and Life Science
                </Link>
              </li>
              <li>
                <Link href="/industries/financial-services" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/industries/wealth-management" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                  Wealth Management
                </Link>
              </li>
              <li>
                <Link href="/industries/energy" className="text-light-grey hover:text-warm-orange transition-colors duration-200">
                  Energy
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
            <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
            <p className="text-light-grey mb-4 text-sm">
              Subscribe for industry insights and updates
            </p>
            <div className="w-full">
              <iframe 
                width="100%" 
                height="305" 
                src="https://26a619dc.sibforms.com/serve/MUIFAIYVWhhLQo6xrSE84W6aqGZxncGWz7n0Jp8pYmROAmy_3B2aZHd5D6OeiA91U_gp8xpe3eaiLMNC1iDQDGXF5i5QjZAHZzr8vSnCWrfWyqEcEFQ0GK8Mc9qfjqJXMWVR4DTXj9iy3ihH9WzfHDeQPJ6dyjcGRH-SbAJ5WxiyNfuHYlnDANCWVBocJZCbgG3LqdeWpuwG90cb" 
                frameBorder="0" 
                scrolling="auto" 
                allowFullScreen 
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  maxWidth: '100%',
                  borderRadius: '8px'
                }}
                title="Newsletter Subscription"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-charcoal pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-grey text-sm">© 2024 ASTERIK. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-light-grey hover:text-warm-orange text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
