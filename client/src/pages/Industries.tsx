export default function Industries() {
  const industries = [
    {
      title: "Financial Services",
      description: "Software and AI-powered tools to enhance risk management, automate claims, or improve customer experiences based on your data.",
      features: ["Risk Management Solutions", "Regulatory Compliance", "Customer Experience Enhancement", "Data-Driven Insights"],
      caseStudy: "Global Financial Organization Post-M&A Integration. Annually, the run-rate savings will equal 55% of the stated target.",
      href: "/industries/financial-services"
    },
    {
      title: "Wealth Management",
      description: "Building platforms and solutions for better portfolio management, real-time data insights, and improved client advisory services.",
      features: ["Portfolio Management", "Real-time Analytics", "Client Advisory Tools", "Automated Reporting"],
      caseStudy: "Private Investment Company Unified Data Solution. Led to the main goal – 70% CSAT increase.",
      href: "/industries/wealth-management"
    },
    {
      title: "Energy",
      description: "Tech solutions for asset management, energy forecasting, modernization of energy systems, and enhanced operational resilience.",
      features: ["Asset Management", "Energy Forecasting", "System Modernization", "Operational Resilience"],
      caseStudy: "US Energy Company Empowering EV Charging Expansion. Improved operational efficiency at least 2x times.",
      href: "/industries/energy"
    },
    {
      title: "Oil and Gas",
      description: "Specialized technology solutions for the oil and gas industry to optimize operations, enhance safety, and improve efficiency.",
      features: ["Asset Management", "Production Optimization", "Safety Systems", "Environmental Monitoring"],
      caseStudy: "Major Oil Company Digital Transformation reduced operational costs by 25% through predictive maintenance.",
      href: "/industries/oil-gas"
    },
    {
      title: "Healthcare and Life Science",
      description: "Patient-centric applications, secure data management systems, and AI-enhanced diagnostics that improve care delivery, compliance, and operational efficiency.",
      features: ["Patient-centric Apps", "Secure Data Management", "AI-enhanced Diagnostics", "Compliance Solutions"],
      caseStudy: "eClinical Company Data Engineering Solution Cuts Costs by 4x & Enables Real-Time Reporting.",
      href: "/industries/healthcare-life-science"
    },
    {
      title: "Retail and E-commerce",
      description: "Custom e-commerce platforms, mobile apps, and data-powered personalization engines to enhance user experience, boost conversions, and streamline logistics.",
      features: ["E-commerce Platforms", "Mobile Applications", "Personalization Engines", "Conversion Optimization"],
      caseStudy: "US Flooring Firm Custom Software Development initiative to Go Paperless improved business efficiency.",
      href: "/industries/retail-ecommerce"
    },
    {
      title: "Logistics",
      description: "End-to-end software, cloud platforms, and data visualization tools to streamline fleet management, optimize routes, and improve delivery accuracy.",
      features: ["Fleet Management", "Route Optimization", "Delivery Tracking", "Supply Chain Analytics"],
      caseStudy: "Leading Logistics Provider 30% SLA Increase for enhanced operational efficiency.",
      href: "/industries/logistics"
    },
    {
      title: "EdTech",
      description: "Interactive learning platforms and applications blending research and experience to improve learning outcomes.",
      features: ["Interactive Learning", "Educational Analytics", "Student Engagement", "Learning Management"],
      caseStudy: "American National Education Nonprofit Scaling Global Learning: How Custom Tech Brought 800+ Games to 250,000 Families.",
      href: "/industries/edtech"
    },
    {
      title: "Marketing",
      description: "Intent-based targeting, data-driven insights, and analytics to enhance campaign efficiency and maximize the ROI of your marketing investments.",
      features: ["Intent-based Targeting", "Campaign Analytics", "ROI Optimization", "Data-driven Insights"],
      caseStudy: "Marketing Solution Provider 2x Cut Reporting Time: A Custom Solution for Marketing Success",
      href: "/industries/marketing"
    }
  ];

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-soft-beige to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-blue mb-6">
              Industries we support
            </h1>
            <p className="text-xl text-charcoal max-w-4xl mx-auto mb-8">
              Asterik provides specialized technology solutions across diverse industries, delivering tailored approaches that address sector-specific challenges and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-light-grey hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-navy-blue mb-4">{industry.title}</h3>
                <p className="text-charcoal mb-6">{industry.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-navy-blue mb-3">Key Solutions:</h4>
                  <ul className="space-y-2">
                    {industry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-charcoal">
                        <i className="fas fa-check-circle text-teal-green mr-3 mt-0.5 text-sm"></i>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-soft-beige rounded-lg">
                  <h4 className="font-semibold text-navy-blue mb-2 text-sm">Case Study:</h4>
                  <p className="text-charcoal text-sm">{industry.caseStudy}</p>
                </div>

                <a 
                  href={industry.href}
                  className="inline-block bg-navy-blue text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-200 font-medium w-full text-center"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus Stats */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Expertise That Delivers Results
            </h2>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              Our deep industry knowledge combined with cutting-edge technology solutions drives measurable business outcomes across all sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-warm-orange mb-2">9+</div>
              <div className="opacity-90">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-warm-orange mb-2">150+</div>
              <div className="opacity-90">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-warm-orange mb-2">95%</div>
              <div className="opacity-90">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-lg text-charcoal max-w-3xl mx-auto mb-8">
            Partner with Asterik to leverage industry-specific expertise and cutting-edge technology solutions that drive real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-navy-blue text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-200 font-medium">
              Schedule Consultation
            </button>
            <button className="border border-navy-blue text-navy-blue px-8 py-3 rounded-md hover:bg-navy-blue hover:text-white transition-all duration-200 font-medium">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}