#!/usr/bin/env tsx

/**
 * Sitemap Generator for ASTERIK Website
 * 
 * This script generates XML and HTML sitemaps for search engine optimization
 * and user navigation. It includes all public pages with proper priorities
 * and change frequencies.
 */

import fs from 'fs';
import path from 'path';

const baseUrl = 'https://asterik.ae';
const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

interface SitemapEntry {
  url: string;
  title: string;
  description: string;
  lastmod: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
  category: string;
}

const sitemapEntries: SitemapEntry[] = [
  // Main Pages
  {
    url: '/',
    title: 'Home',
    description: 'Strategic Technology Solutions for Enterprise Transformation',
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: 1.0,
    category: 'main'
  },
  {
    url: '/about',
    title: 'About Us',
    description: 'Learn about ASTERIK\'s mission, vision, and leadership team',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    category: 'main'
  },
  {
    url: '/services',
    title: 'Services',
    description: 'Comprehensive software development and technology consulting services',
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: 0.9,
    category: 'main'
  },
  {
    url: '/industries',
    title: 'Industries',
    description: 'Industry-focused solutions for diverse sectors',
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: 0.9,
    category: 'main'
  },
  {
    url: '/approach',
    title: 'Our Approach',
    description: 'Methodology and principles behind our technology solutions',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7,
    category: 'main'
  },
  {
    url: '/contact',
    title: 'Contact Us',
    description: 'Get in touch for technology consulting and project inquiries',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    category: 'main'
  },
  {
    url: '/insights',
    title: 'Insights',
    description: 'Latest insights, case studies, and industry trends',
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: 0.7,
    category: 'main'
  },

  // Service Pages
  {
    url: '/services/application-modernization',
    title: 'Application Modernization',
    description: 'Transform legacy systems into agile, scalable solutions',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    category: 'services'
  },
  {
    url: '/services/product-design',
    title: 'Product Design',
    description: 'User-centered design and development methodology',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    category: 'services'
  },
  {
    url: '/services/data-analytics',
    title: 'Data Analytics',
    description: 'Advanced analytics and business intelligence solutions',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    category: 'services'
  },
  {
    url: '/services/ai-ml',
    title: 'AI & Machine Learning',
    description: 'Artificial intelligence and machine learning implementations',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    category: 'services'
  },
  {
    url: '/services/genai',
    title: 'Generative AI',
    description: 'Next-generation AI solutions and automation',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    category: 'services'
  },
  {
    url: '/services/cloud',
    title: 'Cloud Solutions',
    description: 'Cloud migration, architecture, and optimization services',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    category: 'services'
  },
  {
    url: '/services/devops',
    title: 'DevOps',
    description: 'Continuous integration and deployment automation',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    category: 'services'
  },
  {
    url: '/services/devsecops',
    title: 'DevSecOps',
    description: 'Security-integrated development and operations',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    category: 'services'
  },
  {
    url: '/services/cybersecurity-resilience',
    title: 'Cybersecurity & Resilience',
    description: 'Comprehensive cybersecurity and penetration testing',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    category: 'services'
  },
  {
    url: '/services/managed-support',
    title: 'Managed Support',
    description: '24/7 system monitoring and technical support services',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7,
    category: 'services'
  },
  {
    url: '/services/salesforce',
    title: 'Salesforce',
    description: 'Salesforce implementation and customization services',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7,
    category: 'services'
  },
  {
    url: '/services/quality-engineering',
    title: 'Quality Engineering',
    description: 'Comprehensive testing and quality assurance services',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7,
    category: 'services'
  },
  {
    url: '/services/business-analysis',
    title: 'Business Analysis',
    description: 'Requirements analysis and business process optimization',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7,
    category: 'services'
  },
  {
    url: '/services/platform-engineering',
    title: 'Platform Engineering',
    description: 'Scalable platform architecture and engineering solutions',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7,
    category: 'services'
  },
  {
    url: '/services/site-reliability-engineering',
    title: 'Site Reliability Engineering',
    description: 'SRE practices for reliable, scalable systems',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7,
    category: 'services'
  },

  // Industry Pages
  {
    url: '/industries/government-regtech',
    title: 'Government & RegTech',
    description: 'Regulatory technology and government digital transformation',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    category: 'industries'
  },
  {
    url: '/industries/financial-services',
    title: 'Financial Services',
    description: 'Banking, insurance, and financial technology solutions',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    category: 'industries'
  },
  {
    url: '/industries/energy',
    title: 'Energy',
    description: 'Smart energy management and renewable energy solutions',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    category: 'industries'
  },
  {
    url: '/industries/oil-gas',
    title: 'Oil & Gas',
    description: 'Digital transformation for oil and gas operations',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8,
    category: 'industries'
  },
  {
    url: '/industries/healthcare',
    title: 'Healthcare',
    description: 'Healthcare technology and life sciences solutions',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7,
    category: 'industries'
  },
  {
    url: '/industries/retail-ecommerce',
    title: 'Retail & E-commerce',
    description: 'Modern retail and e-commerce platform solutions',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7,
    category: 'industries'
  },
  {
    url: '/industries/logistics',
    title: 'Logistics',
    description: 'Supply chain and logistics optimization technology',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7,
    category: 'industries'
  },
  {
    url: '/industries/edtech',
    title: 'EdTech',
    description: 'Educational technology and e-learning solutions',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7,
    category: 'industries'
  },
  {
    url: '/industries/marketing',
    title: 'Marketing',
    description: 'Marketing technology and automation solutions',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7,
    category: 'industries'
  },

  // Legal Pages
  {
    url: '/privacy-policy',
    title: 'Privacy Policy',
    description: 'Data protection and privacy practices',
    lastmod: currentDate,
    changefreq: 'yearly',
    priority: 0.3,
    category: 'legal'
  },
  {
    url: '/terms',
    title: 'Terms of Service',
    description: 'Terms and conditions for using our services',
    lastmod: currentDate,
    changefreq: 'yearly',
    priority: 0.3,
    category: 'legal'
  }
];

function generateXMLSitemap(entries: SitemapEntry[]): string {
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

  const urls = entries.map(entry => `
  <url>
    <loc>${baseUrl}${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('');

  return header + urls + '\n\n</urlset>';
}

function generateHTMLSitemap(entries: SitemapEntry[]): string {
  const categorizedEntries = entries.reduce((acc, entry) => {
    if (!acc[entry.category]) {
      acc[entry.category] = [];
    }
    acc[entry.category].push(entry);
    return acc;
  }, {} as Record<string, SitemapEntry[]>);

  const categoryTitles = {
    main: 'Main Pages',
    services: 'Technology Services', 
    industries: 'Industry Solutions',
    legal: 'Legal & Compliance'
  };

  const sections = Object.entries(categorizedEntries).map(([category, entries]) => {
    const priorityClass = entries[0]?.priority >= 0.8 ? 'priority-high' : 
                         entries[0]?.priority >= 0.6 ? 'priority-medium' : 'priority-low';
    
    const links = entries.map(entry => `
                <div class="link-card ${priorityClass}">
                    <a href="${entry.url}">${entry.title}</a>
                    <div class="link-description">${entry.description}</div>
                </div>`).join('');

    return `
        <div class="section">
            <h2>${categoryTitles[category as keyof typeof categoryTitles]}</h2>
            <div class="links-grid">${links}
            </div>
        </div>`;
  }).join('');

  const totalPages = entries.length;
  const servicePages = entries.filter(e => e.category === 'services').length;
  const industryPages = entries.filter(e => e.category === 'industries').length;

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sitemap - ASTERIK Technology Solutions</title>
    <meta name="description" content="Complete sitemap of ASTERIK's technology consulting services, industry solutions, and company information for easy navigation and search engine indexing.">
    <style>
        body {
            font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f7f4;
            color: #2c3e50;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #1a3c5c;
            text-align: center;
            margin-bottom: 10px;
            font-size: 2.5em;
        }
        .subtitle {
            text-align: center;
            color: #666;
            margin-bottom: 40px;
            font-size: 1.1em;
        }
        .section {
            margin: 30px 0;
        }
        .section h2 {
            color: #1a3c5c;
            border-bottom: 3px solid #e26a2c;
            padding-bottom: 10px;
            margin-bottom: 20px;
            font-size: 1.8em;
        }
        .links-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }
        .link-card {
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 8px;
            padding: 15px;
            transition: all 0.3s ease;
        }
        .link-card:hover {
            background: #e8f4f8;
            border-color: #1a3c5c;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .link-card a {
            color: #1a3c5c;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1em;
        }
        .link-card a:hover {
            color: #e26a2c;
        }
        .link-description {
            margin-top: 8px;
            color: #666;
            font-size: 0.9em;
        }
        .stats {
            background: linear-gradient(135deg, #1a3c5c 0%, #2c3e50 100%);
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            margin: 30px 0;
        }
        .stats h3 {
            margin: 0 0 10px 0;
            font-size: 1.5em;
        }
        .priority-high { border-left: 4px solid #e26a2c; }
        .priority-medium { border-left: 4px solid #3498db; }
        .priority-low { border-left: 4px solid #95a5a6; }
        .back-to-home {
            text-align: center;
            margin: 40px 0;
        }
        .back-to-home a {
            background: #e26a2c;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            transition: background-color 0.3s ease;
        }
        .back-to-home a:hover {
            background: #d45a1c;
        }
        @media (max-width: 768px) {
            .links-grid {
                grid-template-columns: 1fr;
            }
            h1 {
                font-size: 2em;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Website Sitemap</h1>
        <p class="subtitle">Complete directory of ASTERIK's technology consulting services and solutions</p>
        
        <div class="stats">
            <h3>Site Statistics</h3>
            <p>${totalPages} total pages | ${servicePages} service pages | ${industryPages} industry solutions | Updated ${currentDate}</p>
        </div>
${sections}
        <div class="back-to-home">
            <a href="/">← Return to Homepage</a>
        </div>
    </div>
</body>
</html>`;
}

function writeSitemaps() {
  const publicDir = path.join(process.cwd(), 'client/public');
  
  // Generate XML sitemap
  const xmlSitemap = generateXMLSitemap(sitemapEntries);
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xmlSitemap);
  
  // Generate HTML sitemap  
  const htmlSitemap = generateHTMLSitemap(sitemapEntries);
  fs.writeFileSync(path.join(publicDir, 'sitemap.html'), htmlSitemap);
  
  console.log(`✅ Generated sitemaps:`);
  console.log(`   📄 XML sitemap: ${sitemapEntries.length} URLs`);
  console.log(`   🌐 HTML sitemap: User-friendly navigation`);
  console.log(`   📍 Last updated: ${currentDate}`);
}

// Run the sitemap generation
writeSitemaps();

export { sitemapEntries, generateXMLSitemap, generateHTMLSitemap };