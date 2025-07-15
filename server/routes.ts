import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateContentRecommendations } from "./gemini";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Content recommendations endpoint
  app.post("/api/recommendations", async (req, res) => {
    try {
      console.log("Recommendations API called");
      const { currentPath, pageContent } = req.body;
      
      if (!currentPath || !pageContent) {
        console.log("Missing fields:", { currentPath: !!currentPath, pageContent: !!pageContent });
        return res.status(400).json({ error: "Missing required fields" });
      }

      console.log("Generating recommendations for:", currentPath);
      const recommendations = await generateContentRecommendations(pageContent, currentPath);
      console.log("Generated recommendations:", recommendations.length);
      res.json(recommendations);
    } catch (error) {
      console.error("Error generating recommendations:", error);
      // Return fallback recommendations for now
      const fallbackRecommendations = [
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
      res.json(fallbackRecommendations);
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
