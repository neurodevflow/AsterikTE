export default function Services() {
  const serviceCategories = [
    {
      category: "Software Engineering",
      description: "Expert software engineering services optimized for performance, security, and scalability with modern development practices.",
      services: [
        {
          title: "Quality Engineering",
          description: "Comprehensive quality assurance and testing services to ensure your software meets the highest standards.",
          features: ["Test Automation", "Performance Testing", "Security Testing", "Quality Assurance"],
          href: "/services/quality-engineering"
        },
        {
          title: "Business Analysis",
          description: "Strategic business analysis services to bridge the gap between business needs and technical solutions.",
          features: ["Requirements Analysis", "Process Optimization", "Stakeholder Management", "Business Strategy"],
          href: "/services/business-analysis"
        },
        {
          title: "Application Modernization",
          description: "Transform legacy systems into agile, scalable solutions. Our modernization services help you stay competitive by enhancing performance, security, and integration across your tech stack.",
          features: ["Cloud Infrastructure Migration", "Legacy System Modernization", "Technical Debt Reduction", "Performance Optimization"],
          href: "/services/application-modernization"
        },
        {
          title: "Application Support",
          description: "Access multi-tiered technical support, offering resolutions for everything from basic issues to complex technical challenges.",
          features: ["Application Support Consulting", "Technical Support Levels (L0-L3)", "Emergency Support", "24/7 Monitoring"],
          href: "/services/application-support"
        }
      ]
    },
    {
      category: "DevOps and Cloud",
      description: "Stay ahead of evolving requirements with proactive cloud and DevOps solutions that enhance agility and reliability.",
      services: [
        {
          title: "Cloud",
          description: "Comprehensive cloud solutions for migration, infrastructure, and optimization to scale your business efficiently.",
          features: ["Cloud Migration", "Infrastructure Management", "Cost Optimization", "Security & Compliance"],
          href: "/services/cloud"
        },
        {
          title: "DevOps",
          description: "Streamline your development pipeline with modern DevOps practices that enhance collaboration and deployment efficiency.",
          features: ["CI/CD Implementation", "Infrastructure as Code", "Monitoring & Alerting", "Automated Testing"],
          href: "/services/devops"
        },
        {
          title: "DevSecOps",
          description: "Integrate security into your development lifecycle with comprehensive DevSecOps practices and automated security testing.",
          features: ["CI/CD Pipeline Security", "Automated Security Testing", "Vulnerability Management", "Compliance Automation"],
          href: "/services/devsecops"
        }
      ]
    },
    {
      category: "Data and Artificial Intelligence",
      description: "Unlock the power of your data with advanced analytics, AI, and machine learning solutions.",
      services: [
        {
          title: "Data and Analytics",
          description: "Transform your data into actionable insights with comprehensive analytics solutions.",
          features: ["Data Engineering", "Business Intelligence", "Data Visualization", "Analytics Platforms"],
          href: "/services/data-analytics"
        },
        {
          title: "AI and ML",
          description: "Leverage artificial intelligence and machine learning to unlock new business opportunities and optimize operations.",
          features: ["Machine Learning Models", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
          href: "/services/ai-ml"
        },
        {
          title: "GenAI",
          description: "Harness the power of generative AI to create innovative solutions and enhance business processes.",
          features: ["Large Language Models", "Generative Content", "AI-Powered Automation", "Custom AI Solutions"],
          href: "/services/genai"
        }
      ]
    },
    {
      category: "Digital Excellence",
      description: "Comprehensive digital transformation services to enhance your business capabilities and customer experience.",
      services: [
        {
          title: "Product Design",
          description: "User-centered design solutions that create exceptional digital experiences and drive business value.",
          features: ["UX/UI Design", "User Research", "Prototyping", "Design Systems"],
          href: "/services/product-design"
        },
        {
          title: "Cybersecurity and Resilience",
          description: "Protect your digital assets with comprehensive cybersecurity solutions and resilience strategies.",
          features: ["Security Assessment", "Threat Detection", "Incident Response", "Security Architecture"],
          href: "/services/cybersecurity-resilience"
        },
        {
          title: "Managed Support",
          description: "Comprehensive managed services to keep your systems running smoothly and efficiently.",
          features: ["24/7 Support", "System Monitoring", "Maintenance Services", "Technical Assistance"],
          href: "/services/managed-support"
        },
        {
          title: "Salesforce",
          description: "Salesforce implementation, customization, and optimization services to maximize your CRM investment.",
          features: ["Salesforce Implementation", "Custom Development", "Integration Services", "Training & Support"],
          href: "/services/salesforce"
        }
      ]
    }
  ];

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-soft-beige to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-blue mb-6">
              Your technology and AI consulting partner!
            </h1>
            <p className="text-xl text-charcoal max-w-4xl mx-auto mb-8">
              Asterik builds, develops, modernizes, and provides consulting for your products, technologies, and IT challenges of all kinds. While others hype "cutting-edge solutions," we focus on timely delivery, budget-friendly execution, and practical results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-navy-blue text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-200 font-medium">
                Talk to us
              </button>
              <button className="border border-navy-blue text-navy-blue px-8 py-3 rounded-md hover:bg-navy-blue hover:text-white transition-all duration-200 font-medium">
                Success stories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
                {category.category}
              </h2>
              <p className="text-lg text-charcoal max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-light-grey hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-navy-blue mb-4">{service.title}</h3>
                  <p className="text-charcoal mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-charcoal">
                        <i className="fas fa-check-circle text-teal-green mr-3"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={service.href}
                    className="inline-block bg-warm-orange text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-200 font-medium"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Stats Section */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Data always tells more
            </h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              We take pride in numbers that show our success. Results, team spirit, proactive approach, and collaboration drive everything we achieve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-blue mb-2">98%</div>
              <div className="text-charcoal">of projects delivered on time and within scope</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-blue mb-2">84%</div>
              <div className="text-charcoal">of clients praise Asterik approach</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-blue mb-2">100%</div>
              <div className="text-charcoal">risk-free with money-back guarantee policy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-blue mb-2">5+</div>
              <div className="text-charcoal">Years on the market</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}