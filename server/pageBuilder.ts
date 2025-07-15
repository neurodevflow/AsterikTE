import { generateContentRecommendations } from "./gemini";

// AI content generation for page builder components
export interface ComponentGenerationRequest {
  componentType: 'hero' | 'content' | 'features' | 'testimonials' | 'cta' | 'gallery';
  industry?: string;
  service?: string;
  targetAudience?: string;
  tone?: 'professional' | 'friendly' | 'technical' | 'persuasive';
  keywords?: string[];
  businessName?: string;
}

export interface GeneratedComponent {
  type: string;
  name: string;
  content: any;
  settings: any;
}

export async function generatePageComponent(request: ComponentGenerationRequest): Promise<GeneratedComponent> {
  const { componentType, industry = 'technology', service, targetAudience = 'business executives', tone = 'professional', keywords = [], businessName = 'Asterik' } = request;

  const prompt = buildComponentPrompt(componentType, {
    industry,
    service,
    targetAudience,
    tone,
    keywords,
    businessName
  });

  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=' + process.env.GEMINI_API_KEY, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
          responseMimeType: "application/json",
          responseSchema: getComponentSchema(componentType)
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const generatedContent = JSON.parse(data.candidates[0].content.parts[0].text);

    return {
      type: componentType,
      name: generatedContent.name || `Generated ${componentType}`,
      content: generatedContent.content,
      settings: generatedContent.settings || getDefaultSettings(componentType)
    };
  } catch (error) {
    console.error('Error generating component:', error);
    return getFallbackComponent(componentType, businessName);
  }
}

function buildComponentPrompt(componentType: string, context: any): string {
  const basePrompt = `Generate a ${componentType} component for ${context.businessName}, a ${context.industry} company. 
Target audience: ${context.targetAudience}. 
Tone: ${context.tone}.
${context.service ? `Focus on service: ${context.service}.` : ''}
${context.keywords.length ? `Include keywords: ${context.keywords.join(', ')}.` : ''}

Create compelling, professional content that converts visitors into leads. Use engaging headlines, clear value propositions, and strong calls-to-action.`;

  switch (componentType) {
    case 'hero':
      return `${basePrompt}
      
Create a hero section with:
- Compelling headline (under 10 words)
- Engaging subheadline (20-30 words)
- Clear value proposition
- Primary and secondary call-to-action buttons
- Background image description for ${context.industry} context

Return JSON format with content object containing: headline, subheadline, description, primaryCTA, secondaryCTA, backgroundImage.`;

    case 'content':
      return `${basePrompt}
      
Create a content section with:
- Section title
- Engaging body content (150-200 words)
- Key benefits list (3-5 items)
- Supporting metrics or statistics
- Optional call-to-action

Return JSON format with content object containing: title, body, benefits, metrics, cta.`;

    case 'features':
      return `${basePrompt}
      
Create a features section with:
- Section title and description
- 6 key features with icons, titles, and descriptions
- Each feature should be 30-50 words
- Use Font Awesome icon classes

Return JSON format with content object containing: title, description, features array with icon, title, description.`;

    case 'testimonials':
      return `${basePrompt}
      
Create a testimonials section with:
- Section title
- 3 realistic testimonials with names, titles, companies
- Ratings (4-5 stars)
- Professional headshots descriptions

Return JSON format with content object containing: title, testimonials array with quote, name, title, company, rating, image.`;

    case 'cta':
      return `${basePrompt}
      
Create a call-to-action section with:
- Compelling headline
- Supporting text (20-30 words)
- Strong action button text
- Contact information or urgency element

Return JSON format with content object containing: headline, description, buttonText, contactInfo.`;

    case 'gallery':
      return `${basePrompt}
      
Create a gallery section with:
- Section title and description
- 6-8 image descriptions for ${context.industry} context
- Image categories and alt texts
- Optional filtering options

Return JSON format with content object containing: title, description, images array with src, alt, category.`;

    default:
      return basePrompt;
  }
}

function getComponentSchema(componentType: string): any {
  const baseSchema = {
    type: "object",
    properties: {
      name: { type: "string" },
      content: { type: "object" },
      settings: { type: "object" }
    },
    required: ["name", "content"]
  };

  switch (componentType) {
    case 'hero':
      baseSchema.properties.content = {
        type: "object",
        properties: {
          headline: { type: "string" },
          subheadline: { type: "string" },
          description: { type: "string" },
          primaryCTA: { type: "string" },
          secondaryCTA: { type: "string" },
          backgroundImage: { type: "string" }
        },
        required: ["headline", "subheadline", "primaryCTA"]
      };
      break;

    case 'content':
      baseSchema.properties.content = {
        type: "object",
        properties: {
          title: { type: "string" },
          body: { type: "string" },
          benefits: { type: "array", items: { type: "string" } },
          metrics: { type: "array", items: { type: "object" } },
          cta: { type: "string" }
        },
        required: ["title", "body"]
      };
      break;

    case 'features':
      baseSchema.properties.content = {
        type: "object",
        properties: {
          title: { type: "string" },
          description: { type: "string" },
          features: {
            type: "array",
            items: {
              type: "object",
              properties: {
                icon: { type: "string" },
                title: { type: "string" },
                description: { type: "string" }
              },
              required: ["icon", "title", "description"]
            }
          }
        },
        required: ["title", "features"]
      };
      break;

    default:
      baseSchema.properties.content = {
        type: "object",
        additionalProperties: true
      };
  }

  return baseSchema;
}

function getDefaultSettings(componentType: string): any {
  const commonSettings = {
    backgroundColor: '#ffffff',
    textColor: '#1a1a1a',
    padding: 'large',
    margin: 'medium'
  };

  switch (componentType) {
    case 'hero':
      return {
        ...commonSettings,
        backgroundColor: '#1a365d', // navy-blue
        textColor: '#ffffff',
        backgroundImage: true,
        overlay: true,
        height: 'large'
      };

    case 'content':
      return {
        ...commonSettings,
        layout: 'single-column',
        alignment: 'left'
      };

    case 'features':
      return {
        ...commonSettings,
        layout: 'grid',
        columns: 3,
        iconStyle: 'filled'
      };

    case 'testimonials':
      return {
        ...commonSettings,
        layout: 'carousel',
        showRatings: true,
        showImages: true
      };

    case 'cta':
      return {
        ...commonSettings,
        backgroundColor: '#1a365d', // navy-blue
        textColor: '#ffffff',
        buttonColor: '#e26a2c', // warm-orange
        alignment: 'center'
      };

    case 'gallery':
      return {
        ...commonSettings,
        layout: 'masonry',
        columns: 3,
        showFilters: true
      };

    default:
      return commonSettings;
  }
}

function getFallbackComponent(componentType: string, businessName: string): GeneratedComponent {
  switch (componentType) {
    case 'hero':
      return {
        type: 'hero',
        name: 'Hero Section',
        content: {
          headline: `Transform Your Business with ${businessName}`,
          subheadline: 'Innovative technology solutions that drive growth and efficiency',
          description: 'Partner with us to unlock your organization\'s full potential through cutting-edge technology and strategic innovation.',
          primaryCTA: 'Get Started',
          secondaryCTA: 'Learn More',
          backgroundImage: 'Professional technology team collaborating'
        },
        settings: getDefaultSettings('hero')
      };

    case 'content':
      return {
        type: 'content',
        name: 'Content Section',
        content: {
          title: 'Why Choose Our Solutions',
          body: 'We deliver comprehensive technology solutions that transform how businesses operate. Our expert team combines deep industry knowledge with cutting-edge technology to create customized solutions that drive measurable results.',
          benefits: [
            'Expert consultation and planning',
            'Scalable and secure solutions',
            'Ongoing support and optimization',
            'Proven track record of success'
          ]
        },
        settings: getDefaultSettings('content')
      };

    case 'features':
      return {
        type: 'features',
        name: 'Features Section',
        content: {
          title: 'Our Key Capabilities',
          description: 'Comprehensive solutions designed to meet your business needs',
          features: [
            {
              icon: 'fas fa-cogs',
              title: 'Custom Development',
              description: 'Tailored software solutions built to your specifications'
            },
            {
              icon: 'fas fa-cloud',
              title: 'Cloud Solutions',
              description: 'Scalable cloud infrastructure and migration services'
            },
            {
              icon: 'fas fa-shield-alt',
              title: 'Security First',
              description: 'Enterprise-grade security built into every solution'
            }
          ]
        },
        settings: getDefaultSettings('features')
      };

    default:
      return {
        type: componentType,
        name: `${componentType} Section`,
        content: {
          title: 'Coming Soon',
          description: 'This section is being generated...'
        },
        settings: getDefaultSettings(componentType)
      };
  }
}

// Generate full page content using AI
export async function generateFullPage(request: {
  pageType: 'landing' | 'service' | 'industry' | 'about' | 'contact';
  title: string;
  industry?: string;
  service?: string;
  targetAudience?: string;
  businessName?: string;
}): Promise<GeneratedComponent[]> {
  const { pageType, title, industry, service, targetAudience, businessName } = request;
  
  const components: GeneratedComponent[] = [];
  
  // Generate components based on page type
  switch (pageType) {
    case 'landing':
      components.push(
        await generatePageComponent({ componentType: 'hero', industry, service, targetAudience, businessName }),
        await generatePageComponent({ componentType: 'features', industry, service, targetAudience, businessName }),
        await generatePageComponent({ componentType: 'content', industry, service, targetAudience, businessName }),
        await generatePageComponent({ componentType: 'testimonials', industry, service, targetAudience, businessName }),
        await generatePageComponent({ componentType: 'cta', industry, service, targetAudience, businessName })
      );
      break;
      
    case 'service':
      components.push(
        await generatePageComponent({ componentType: 'hero', industry, service, targetAudience, businessName }),
        await generatePageComponent({ componentType: 'content', industry, service, targetAudience, businessName }),
        await generatePageComponent({ componentType: 'features', industry, service, targetAudience, businessName }),
        await generatePageComponent({ componentType: 'cta', industry, service, targetAudience, businessName })
      );
      break;
      
    case 'industry':
      components.push(
        await generatePageComponent({ componentType: 'hero', industry, service, targetAudience, businessName }),
        await generatePageComponent({ componentType: 'content', industry, service, targetAudience, businessName }),
        await generatePageComponent({ componentType: 'features', industry, service, targetAudience, businessName }),
        await generatePageComponent({ componentType: 'testimonials', industry, service, targetAudience, businessName }),
        await generatePageComponent({ componentType: 'cta', industry, service, targetAudience, businessName })
      );
      break;
      
    default:
      // Default page structure
      components.push(
        await generatePageComponent({ componentType: 'hero', industry, service, targetAudience, businessName }),
        await generatePageComponent({ componentType: 'content', industry, service, targetAudience, businessName }),
        await generatePageComponent({ componentType: 'cta', industry, service, targetAudience, businessName })
      );
  }
  
  return components;
}