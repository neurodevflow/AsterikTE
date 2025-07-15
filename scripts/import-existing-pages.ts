import { db } from "../server/db";
import { pages, pageComponents } from "../shared/schema";

// Define existing website pages structure
const existingPages = [
  {
    title: "Home",
    slug: "home",
    description: "Main landing page showcasing Asterik's services and capabilities",
    template: "landing",
    seoTitle: "Asterik - Strategic Technology Solutions for Enterprise Transformation",
    seoDescription: "Leading technology consulting firm providing strategic solutions for digital transformation, cloud adoption, and enterprise modernization.",
    seoKeywords: "technology consulting, digital transformation, cloud solutions, enterprise modernization",
    status: "published",
    components: [
      {
        type: "hero",
        name: "Main Hero Section",
        content: {
          title: "Strategic Technology Solutions for Enterprise Transformation",
          subtitle: "Empowering organizations with cutting-edge technology solutions, strategic consulting, and innovative digital transformation services.",
          primaryCTA: "Explore Our Services",
          secondaryCTA: "Schedule Consultation",
          backgroundImage: "/assets/hero-background.jpg"
        },
        settings: {
          backgroundColor: "#1d1d1d",
          textColor: "#ffffff",
          layout: "centered"
        },
        sortOrder: 0,
        isVisible: true
      },
      {
        type: "services",
        name: "Core Services Overview",
        content: {
          title: "Comprehensive Technology Solutions",
          description: "From strategic consulting to full-scale implementation, we deliver end-to-end technology solutions that drive business transformation.",
          services: [
            {
              title: "Strategic Technology Consulting",
              description: "Expert guidance on technology strategy, digital transformation roadmaps, and enterprise architecture design.",
              icon: "fa-lightbulb"
            },
            {
              title: "Cloud Solutions & Migration",
              description: "Comprehensive cloud strategy, migration services, and optimization for AWS, Azure, and multi-cloud environments.",
              icon: "fa-cloud"
            },
            {
              title: "Data Analytics & AI/ML",
              description: "Advanced analytics solutions, machine learning implementations, and AI-powered business intelligence.",
              icon: "fa-chart-bar"
            },
            {
              title: "Cybersecurity Solutions",
              description: "Enterprise security assessments, implementation, and ongoing managed security services.",
              icon: "fa-shield-alt"
            }
          ]
        },
        settings: {
          backgroundColor: "#f8f9fa",
          columns: 2,
          cardStyle: "elevated"
        },
        sortOrder: 1,
        isVisible: true
      },
      {
        type: "statistics",
        name: "Trust & Credibility Metrics",
        content: {
          title: "Trusted by Industry Leaders",
          stats: [
            { value: "500+", label: "Projects Delivered", icon: "fa-project-diagram" },
            { value: "200+", label: "Enterprise Clients", icon: "fa-building" },
            { value: "15+", label: "Years Experience", icon: "fa-calendar" },
            { value: "99.8%", label: "Client Satisfaction", icon: "fa-star" }
          ]
        },
        settings: {
          backgroundColor: "#1d1d1d",
          textColor: "#ffffff",
          layout: "grid"
        },
        sortOrder: 2,
        isVisible: true
      }
    ]
  },
  {
    title: "About Us",
    slug: "about",
    description: "Learn about Asterik's mission, vision, and leadership team",
    template: "standard",
    seoTitle: "About Asterik - Leadership in Technology Consulting",
    seoDescription: "Discover Asterik's commitment to excellence in technology consulting, our experienced leadership team, and our mission to drive digital transformation.",
    seoKeywords: "about asterik, technology leadership, consulting expertise, digital transformation",
    status: "published",
    components: [
      {
        type: "hero",
        name: "About Hero Section",
        content: {
          title: "Empowering Digital Transformation",
          subtitle: "With over 15 years of experience in technology consulting, Asterik has been at the forefront of enterprise digital transformation.",
          backgroundImage: "/assets/about-hero.jpg"
        },
        settings: {
          backgroundColor: "#1d1d1d",
          textColor: "#ffffff",
          height: "medium"
        },
        sortOrder: 0,
        isVisible: true
      },
      {
        type: "content",
        name: "Mission & Vision",
        content: {
          title: "Our Mission",
          body: "At Asterik, we believe that technology should be a catalyst for business transformation, not just a tool. Our mission is to empower organizations with strategic technology solutions that drive real business value, enhance operational efficiency, and create competitive advantages in today's digital landscape."
        },
        settings: {
          backgroundColor: "#ffffff",
          textAlign: "left",
          padding: "large"
        },
        sortOrder: 1,
        isVisible: true
      },
      {
        type: "team",
        name: "Leadership Team",
        content: {
          title: "Leadership Excellence",
          description: "Our experienced leadership team brings decades of combined expertise in technology consulting, enterprise architecture, and digital transformation.",
          members: [
            {
              name: "Leadership Team",
              role: "Executive Leadership",
              bio: "Our leadership team combines deep technical expertise with strategic business acumen to deliver exceptional results for our clients.",
              image: "/assets/leadership-image.jpg"
            }
          ]
        },
        settings: {
          backgroundColor: "#f8f9fa",
          layout: "cards",
          columns: 1
        },
        sortOrder: 2,
        isVisible: true
      }
    ]
  },
  {
    title: "Services",
    slug: "services",
    description: "Comprehensive overview of Asterik's technology services and solutions",
    template: "services",
    seoTitle: "Technology Services - Software Engineering, DevOps, Data & AI",
    seoDescription: "Explore Asterik's comprehensive technology services including software engineering, DevOps, cloud solutions, data analytics, and AI/ML implementations.",
    seoKeywords: "software engineering, devops, cloud services, data analytics, AI/ML, technology consulting",
    status: "published",
    components: [
      {
        type: "hero",
        name: "Services Hero",
        content: {
          title: "Comprehensive Technology Services",
          subtitle: "From software engineering to AI implementation, we deliver end-to-end technology solutions that transform businesses."
        },
        settings: {
          backgroundColor: "#1d1d1d",
          textColor: "#ffffff",
          height: "medium"
        },
        sortOrder: 0,
        isVisible: true
      },
      {
        type: "services-grid",
        name: "Services Categories",
        content: {
          title: "Our Service Portfolio",
          categories: [
            {
              title: "Software Engineering",
              description: "Custom software development, application modernization, and technical architecture design.",
              services: ["Application Modernization", "Product Design", "Data Analytics"]
            },
            {
              title: "DevOps and Cloud",
              description: "Cloud migration, DevOps implementation, and infrastructure optimization.",
              services: ["Cloud Solutions", "DevOps", "DevSecOps"]
            },
            {
              title: "Data & AI",
              description: "Advanced analytics, machine learning, and AI-powered solutions.",
              services: ["AI & ML", "GenAI", "Cybersecurity"]
            },
            {
              title: "Enterprise Solutions",
              description: "Comprehensive support and managed services for enterprise clients.",
              services: ["Managed Support", "Salesforce Solutions"]
            }
          ]
        },
        settings: {
          backgroundColor: "#ffffff",
          layout: "grid",
          columns: 2
        },
        sortOrder: 1,
        isVisible: true
      }
    ]
  },
  {
    title: "Industries",
    slug: "industries",
    description: "Industry-specific solutions and expertise across multiple sectors",
    template: "industries",
    seoTitle: "Industry Solutions - Financial Services, Healthcare, Energy & More",
    seoDescription: "Discover Asterik's industry expertise across financial services, healthcare, energy, retail, and other key sectors.",
    seoKeywords: "industry solutions, financial services, healthcare technology, energy solutions, retail technology",
    status: "published",
    components: [
      {
        type: "hero",
        name: "Industries Hero",
        content: {
          title: "Industry-Focused Solutions",
          subtitle: "Deep expertise across key industries with tailored technology solutions that address sector-specific challenges."
        },
        settings: {
          backgroundColor: "#1d1d1d",
          textColor: "#ffffff",
          height: "medium"
        },
        sortOrder: 0,
        isVisible: true
      },
      {
        type: "industries-grid",
        name: "Industry Sectors",
        content: {
          title: "Sectors We Serve",
          industries: [
            {
              title: "Financial Services",
              description: "Banking, investment management, and fintech solutions with regulatory compliance.",
              icon: "fa-university"
            },
            {
              title: "Healthcare",
              description: "Healthcare technology, EHR systems, and medical device integration.",
              icon: "fa-heartbeat"
            },
            {
              title: "Energy",
              description: "Oil & gas, renewable energy, and smart grid technologies.",
              icon: "fa-bolt"
            },
            {
              title: "Retail & E-commerce",
              description: "Digital commerce platforms, inventory management, and customer experience.",
              icon: "fa-shopping-cart"
            },
            {
              title: "Logistics",
              description: "Supply chain optimization, tracking systems, and automation solutions.",
              icon: "fa-truck"
            },
            {
              title: "Education Technology",
              description: "Learning management systems, educational platforms, and digital transformation.",
              icon: "fa-graduation-cap"
            }
          ]
        },
        settings: {
          backgroundColor: "#f8f9fa",
          layout: "grid",
          columns: 3
        },
        sortOrder: 1,
        isVisible: true
      }
    ]
  },
  {
    title: "Contact",
    slug: "contact",
    description: "Get in touch with Asterik for technology consulting and solutions",
    template: "contact",
    seoTitle: "Contact Asterik - Technology Consulting Services",
    seoDescription: "Contact Asterik for expert technology consulting services. Get in touch with our team to discuss your digital transformation needs.",
    seoKeywords: "contact asterik, technology consulting, digital transformation consultation",
    status: "published",
    components: [
      {
        type: "hero",
        name: "Contact Hero",
        content: {
          title: "Let's Transform Your Business Together",
          subtitle: "Ready to embark on your digital transformation journey? Contact our expert team for a consultation."
        },
        settings: {
          backgroundColor: "#1d1d1d",
          textColor: "#ffffff",
          height: "medium"
        },
        sortOrder: 0,
        isVisible: true
      },
      {
        type: "contact-form",
        name: "Contact Form",
        content: {
          title: "Get Started Today",
          description: "Fill out the form below and our team will get back to you within 24 hours.",
          formFields: [
            { name: "name", label: "Full Name", type: "text", required: true },
            { name: "email", label: "Email Address", type: "email", required: true },
            { name: "company", label: "Company", type: "text", required: true },
            { name: "service", label: "Service Interest", type: "select", required: true },
            { name: "message", label: "Message", type: "textarea", required: true }
          ]
        },
        settings: {
          backgroundColor: "#f8f9fa",
          layout: "centered",
          submitButtonText: "Send Message"
        },
        sortOrder: 1,
        isVisible: true
      }
    ]
  }
];

async function importExistingPages() {
  try {
    console.log("Importing existing website pages...");
    
    for (const pageData of existingPages) {
      // Check if page already exists
      const existingPage = await db.query.pages.findFirst({
        where: (pages, { eq }) => eq(pages.slug, pageData.slug)
      });
      
      if (existingPage) {
        console.log(`Page '${pageData.title}' already exists. Skipping...`);
        continue;
      }
      
      // Create the page
      const [createdPage] = await db
        .insert(pages)
        .values({
          title: pageData.title,
          slug: pageData.slug,
          description: pageData.description,
          template: pageData.template,
          seoTitle: pageData.seoTitle,
          seoDescription: pageData.seoDescription,
          seoKeywords: pageData.seoKeywords,
          status: pageData.status,
          publishedAt: new Date()
        })
        .returning();
      
      console.log(`Created page: ${pageData.title}`);
      
      // Create page components
      for (const component of pageData.components) {
        await db
          .insert(pageComponents)
          .values({
            pageId: createdPage.id,
            type: component.type,
            name: component.name,
            content: component.content,
            settings: component.settings,
            sortOrder: component.sortOrder,
            isVisible: component.isVisible
          });
      }
      
      console.log(`Added ${pageData.components.length} components to ${pageData.title}`);
    }
    
    console.log("Successfully imported all existing pages!");
    
  } catch (error) {
    console.error("Error importing pages:", error);
    process.exit(1);
  }
}

// Run the import if this file is executed directly
importExistingPages().then(() => {
  process.exit(0);
}).catch(error => {
  console.error(error);
  process.exit(1);
});

export { importExistingPages };