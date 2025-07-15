export default function Services() {
  const serviceCategories = [
    {
      category: "Application & Software",
      description: "Transform legacy systems into agile, scalable solutions with comprehensive modernization services.",
      services: [
        {
          title: "Application Modernization",
          description: "Transform legacy systems into agile, scalable solutions. Our modernization services help you stay competitive by enhancing performance, security, and integration across your tech stack.",
          features: ["Cloud Infrastructure Migration", "Legacy System Modernization", "Technical Debt Reduction", "Performance Optimization", "UX/UI Design Enhancement"],
          href: "/services/application-modernization"
        },
        {
          title: "Software Development",
          description: "Power your business with robust, scalable software solutions. From initial architecture design and clean code to full-scale development and rigorous testing.",
          features: ["Software Architecture", "End-to-End Development", "Software QA and Testing", "Application Modernization"],
          href: "/services/software-development"
        },
        {
          title: "Software Engineering",
          description: "Expert software engineering services optimized for performance, security, and scalability with modern development practices.",
          features: ["System Architecture Design", "Code Quality Assurance", "DevOps Integration", "Performance Optimization"],
          href: "/services/software-engineering"
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
      category: "Data & Analytics",
      description: "Ensure your machine learning initiatives are built on a solid, reliable foundation with comprehensive data services.",
      services: [
        {
          title: "Data Engineering",
          description: "Build robust data pipelines and infrastructure to support your analytics and AI initiatives with scalable data solutions.",
          features: ["Data Pipeline Development", "ETL/ELT Processes", "Data Warehouse Design", "Real-time Data Processing"],
          href: "/services/data-engineering"
        },
        {
          title: "Data Infrastructure",
          description: "Design and implement scalable data infrastructure that grows with your business needs and supports advanced analytics.",
          features: ["Cloud Data Architecture", "Data Lake Implementation", "Database Optimization", "Infrastructure Monitoring"],
          href: "/services/data-infrastructure"
        },
        {
          title: "BI and Data Visualization",
          description: "Transform raw data into actionable insights with powerful business intelligence and visualization solutions.",
          features: ["Dashboard Development", "Custom Analytics", "Report Automation", "Data Storytelling"],
          href: "/services/bi-data-visualization"
        },
        {
          title: "AI/ML Development",
          description: "Leverage artificial intelligence and machine learning to unlock new business opportunities and optimize operations.",
          features: ["Machine Learning Models", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
          href: "/services/ai-ml-development"
        }
      ]
    },
    {
      category: "Cloud & DevOps",
      description: "Stay ahead of evolving requirements with proactive cloud and DevOps solutions that enhance agility and reliability.",
      services: [
        {
          title: "Cloud Migration",
          description: "Seamlessly migrate your applications and infrastructure to the cloud with minimal downtime and maximum efficiency.",
          features: ["Migration Strategy", "Cloud Assessment", "Application Refactoring", "Cost Optimization"],
          href: "/services/cloud-migration"
        },
        {
          title: "Cloud Infrastructure",
          description: "Design, implement, and manage robust cloud infrastructure that scales with your business growth.",
          features: ["Infrastructure as Code", "Auto-scaling Solutions", "Multi-cloud Management", "Security Implementation"],
          href: "/services/cloud-infrastructure"
        },
        {
          title: "DevSecOps",
          description: "Integrate security into your development lifecycle with comprehensive DevSecOps practices and tools.",
          features: ["CI/CD Pipeline Security", "Automated Testing", "Security Monitoring", "Compliance Management"],
          href: "/services/devsecops"
        },
        {
          title: "Managed Support",
          description: "24/7 managed support services that minimize downtime and maximize productivity with proactive monitoring.",
          features: ["24/7 Monitoring", "Incident Response", "Performance Optimization", "Capacity Planning"],
          href: "/services/managed-support"
        }
      ]
    },
    {
      category: "Specialized Solutions",
      description: "Expert specialized consulting and development services tailored to specific business needs and technologies.",
      services: [
        {
          title: "Cybersecurity",
          description: "Stay ahead of evolving threats with proactive security solutions. We protect your digital assets and maintain compliance.",
          features: ["Application Security", "Penetration Testing", "Security Consulting", "Threat Detection", "Vulnerability Management"],
          href: "/services/cybersecurity"
        },
        {
          title: "Product Design",
          description: "Elevate your product's impact by delivering user-centered experiences that enhance customer satisfaction.",
          features: ["User Research", "Experience Design", "Product Discovery", "Business Analysis"],
          href: "/services/product-design"
        },
        {
          title: "Salesforce",
          description: "From implementation to optimization, our Salesforce services streamline workflows and improve user adoption.",
          features: ["End-to-end Implementation", "Scalable Automation", "Third-party Integration", "QA-backed Development"],
          href: "/services/salesforce"
        },
        {
          title: "Tech Consulting",
          description: "Strategic technology consulting to guide your digital transformation journey with expert insights.",
          features: ["Technology Strategy", "Digital Transformation", "Architecture Review", "Technical Due Diligence"],
          href: "/services/tech-consulting"
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