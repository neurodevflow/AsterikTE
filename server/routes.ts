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
      const { currentPath, pageContent } = req.body;
      
      if (!currentPath || !pageContent) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const recommendations = await generateContentRecommendations(pageContent, currentPath);
      res.json(recommendations);
    } catch (error) {
      console.error("Error generating recommendations:", error);
      res.status(500).json({ error: "Failed to generate recommendations" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
