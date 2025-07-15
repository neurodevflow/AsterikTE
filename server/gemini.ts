import { GoogleGenAI } from "@google/genai";

// DON'T DELETE THIS COMMENT
// Follow these instructions when using this blueprint:
// - Note that the newest Gemini model series is "gemini-2.5-flash" or gemini-2.5-pro"
//   - do not change this unless explicitly requested by the user

// This API key is from Gemini Developer API Key, not vertex AI API Key
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export interface ContentRecommendation {
  title: string;
  type: "service" | "industry" | "insight";
  description: string;
  url: string;
  relevanceScore: number;
}

export async function generateContentRecommendations(
  pageContent: string,
  currentPath: string
): Promise<ContentRecommendation[]> {
  try {
    const systemPrompt = `You are an AI assistant for ASTERIK, a strategic technology consulting company. 
    Based on the current page content and path, generate 3-4 relevant content recommendations.
    
    Available services: Application Modernization, Software Development, Quality Engineering, Business Analysis, 
    Cloud, DevOps, DevSecOps, Data Analytics, AI/ML, GenAI, Product Design, Cybersecurity, Managed Support, Salesforce
    
    Available industries: Financial Services, Wealth Management, Energy, Oil & Gas, Healthcare, Retail E-commerce, 
    Logistics, EdTech, Marketing
    
    Return JSON array with this format:
    [
      {
        "title": "Service/Industry/Insight Name",
        "type": "service|industry|insight",
        "description": "Brief compelling description (max 80 chars)",
        "url": "/services/service-name or /industries/industry-name",
        "relevanceScore": 0.8
      }
    ]
    
    Rules:
    - Don't recommend the current page
    - Focus on complementary or related offerings
    - Use actual ASTERIK service/industry URLs
    - Keep descriptions concise and business-focused
    - Relevance scores between 0.7-1.0`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        responseSchema: {
          type: "array",
          items: {
            type: "object",
            properties: {
              title: { type: "string" },
              type: { type: "string", enum: ["service", "industry", "insight"] },
              description: { type: "string" },
              url: { type: "string" },
              relevanceScore: { type: "number" }
            },
            required: ["title", "type", "description", "url", "relevanceScore"]
          }
        }
      },
      contents: `Current page: ${currentPath}\n\nPage content: ${pageContent.substring(0, 2000)}`
    });

    const rawJson = response.text;
    
    if (rawJson) {
      const recommendations: ContentRecommendation[] = JSON.parse(rawJson);
      return recommendations.sort((a, b) => b.relevanceScore - a.relevanceScore);
    } else {
      throw new Error("Empty response from Gemini");
    }
  } catch (error) {
    console.error("Failed to generate recommendations:", error);
    // Return fallback recommendations
    return getFallbackRecommendations(currentPath);
  }
}

function getFallbackRecommendations(currentPath: string): ContentRecommendation[] {
  const fallbacks: ContentRecommendation[] = [
    {
      title: "Cloud Transformation",
      type: "service",
      description: "Modernize your infrastructure with enterprise cloud solutions",
      url: "/services/cloud",
      relevanceScore: 0.8
    },
    {
      title: "Financial Services",
      type: "industry",
      description: "Specialized solutions for banking and financial institutions",
      url: "/industries/financial-services",
      relevanceScore: 0.75
    },
    {
      title: "AI & Machine Learning",
      type: "service",
      description: "Intelligent automation and predictive analytics solutions",
      url: "/services/ai-ml",
      relevanceScore: 0.85
    }
  ];

  // Filter out current page
  return fallbacks.filter(rec => !currentPath.includes(rec.url));
}