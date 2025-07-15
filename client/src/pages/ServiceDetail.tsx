import { useRoute } from "wouter";

const serviceDetails = {
  "application-modernization": {
    title: "Application Modernization",
    description: "Transform legacy systems into agile, scalable solutions that drive competitive advantage",
    heroText: "Modernize your applications to stay competitive in today's fast-paced digital landscape. Our comprehensive modernization services enhance performance, security, and integration across your entire technology stack.",
    services: [
      {
        title: "Cloud Infrastructure Migration",
        description: "Seamless migration of legacy applications to modern cloud platforms with minimal downtime.",
        features: ["AWS/Azure/GCP Migration", "Containerization", "Microservices Architecture", "Auto-scaling Implementation"]
      },
      {
        title: "Legacy System Modernization",
        description: "Transform outdated systems into modern, maintainable, and scalable applications.",
        features: ["Code Refactoring", "Database Modernization", "API Integration", "Performance Optimization"]
      },
      {
        title: "Technical Debt Reduction",
        description: "Systematic approach to reducing technical debt while maintaining business continuity.",
        features: ["Code Quality Assessment", "Architecture Review", "Gradual Refactoring", "Documentation Update"]
      },
      {
        title: "UX/UI Design Enhancement",
        description: "Modernize user interfaces to improve user experience and adoption rates.",
        features: ["User Experience Audit", "Modern Interface Design", "Responsive Design", "Accessibility Compliance"]
      }
    ],
    benefits: [
      "Reduced operational costs by up to 40%",
      "Improved application performance and reliability",
      "Enhanced security and compliance posture",
      "Increased development velocity and agility",
      "Better user experience and satisfaction"
    ],
    process: [
      {
        step: "Assessment",
        description: "Comprehensive analysis of existing systems and infrastructure"
      },
      {
        step: "Strategy",
        description: "Development of modernization roadmap and migration plan"
      },
      {
        step: "Implementation",
        description: "Phased modernization with minimal business disruption"
      },
      {
        step: "Optimization",
        description: "Continuous monitoring and performance optimization"
      }
    ]
  },
  "software-development": {
    title: "Software Development",
    description: "End-to-end software development services delivering robust, scalable solutions",
    heroText: "Power your business with custom software solutions built for performance, security, and scalability. From initial concept to deployment and maintenance, we deliver software that drives business growth.",
    services: [
      {
        title: "Custom Software Development",
        description: "Tailored software solutions designed to meet your specific business requirements.",
        features: ["Requirements Analysis", "Custom Architecture", "Agile Development", "Quality Assurance"]
      },
      {
        title: "Web Application Development",
        description: "Modern, responsive web applications built with the latest technologies.",
        features: ["React/Angular/Vue.js", "Progressive Web Apps", "API Development", "Real-time Features"]
      },
      {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        features: ["Native Development", "Cross-platform Solutions", "App Store Optimization", "Push Notifications"]
      },
      {
        title: "Enterprise Software",
        description: "Scalable enterprise-grade software solutions for complex business needs.",
        features: ["Enterprise Architecture", "Integration Services", "Workflow Automation", "Reporting & Analytics"]
      }
    ],
    benefits: [
      "Faster time-to-market with agile development",
      "Scalable solutions that grow with your business",
      "Reduced development costs through efficient processes",
      "High-quality code with comprehensive testing",
      "Ongoing support and maintenance"
    ],
    process: [
      {
        step: "Discovery",
        description: "Understanding requirements and business objectives"
      },
      {
        step: "Design",
        description: "Architecture design and technical specification"
      },
      {
        step: "Development",
        description: "Iterative development with regular feedback cycles"
      },
      {
        step: "Deployment",
        description: "Production deployment and go-live support"
      }
    ]
  },
  "ai-ml-development": {
    title: "AI/ML Development",
    description: "Artificial Intelligence and Machine Learning solutions to unlock business potential",
    heroText: "Harness the power of AI and Machine Learning to drive innovation, automate processes, and gain competitive advantages. Our AI/ML solutions are designed to deliver measurable business impact.",
    services: [
      {
        title: "Machine Learning Models",
        description: "Custom ML models tailored to your specific business use cases and data.",
        features: ["Predictive Analytics", "Classification Models", "Regression Analysis", "Time Series Forecasting"]
      },
      {
        title: "Natural Language Processing",
        description: "NLP solutions for text analysis, chatbots, and language understanding.",
        features: ["Text Analytics", "Sentiment Analysis", "Chatbot Development", "Language Translation"]
      },
      {
        title: "Computer Vision",
        description: "Image and video analysis solutions for various business applications.",
        features: ["Image Recognition", "Object Detection", "Facial Recognition", "Quality Inspection"]
      },
      {
        title: "AI Strategy & Consulting",
        description: "Strategic guidance on AI adoption and implementation roadmaps.",
        features: ["AI Readiness Assessment", "Use Case Identification", "ROI Analysis", "Implementation Planning"]
      }
    ],
    benefits: [
      "Automated decision-making processes",
      "Improved operational efficiency",
      "Enhanced customer experiences",
      "Data-driven business insights",
      "Competitive market advantage"
    ],
    process: [
      {
        step: "Data Assessment",
        description: "Evaluation of data quality and readiness for AI/ML"
      },
      {
        step: "Model Development",
        description: "Building and training custom ML models"
      },
      {
        step: "Validation",
        description: "Testing and validating model performance"
      },
      {
        step: "Deployment",
        description: "Production deployment and monitoring"
      }
    ]
  }
};

export default function ServiceDetail() {
  const [match, params] = useRoute("/services/:serviceId");
  
  if (!match || !params?.serviceId) {
    return <div>Service not found</div>;
  }

  const service = serviceDetails[params.serviceId as keyof typeof serviceDetails];
  
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl mb-8 opacity-90">
              {service.heroText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-warm-orange text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-200 font-medium">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-navy-blue transition-all duration-200 font-medium">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Our {service.title} Services
            </h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              Comprehensive solutions designed to address your specific technology challenges and business objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.services.map((serviceItem, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-light-grey hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-navy-blue mb-4">{serviceItem.title}</h3>
                <p className="text-charcoal mb-6">{serviceItem.description}</p>
                <ul className="space-y-2">
                  {serviceItem.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-charcoal">
                      <i className="fas fa-check-circle text-teal-green mr-3"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">
                Key Benefits
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-charcoal">
                    <i className="fas fa-star text-warm-orange mr-3 mt-1"></i>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy-blue mb-6">Our Process</h3>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-warm-orange text-white rounded-full flex items-center justify-center font-bold mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-blue">{step.step}</h4>
                      <p className="text-charcoal">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
            Let's discuss how our {service.title.toLowerCase()} services can help transform your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-warm-orange text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-200 font-medium">
              Contact Us Today
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-navy-blue transition-all duration-200 font-medium">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}