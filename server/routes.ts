import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateContentRecommendations } from "./gemini";
import { 
  hashPassword, 
  verifyPassword, 
  generateToken, 
  authenticateAdmin, 
  requireRole,
  type AuthenticatedRequest 
} from "./auth";
import {
  insertContactSubmissionSchema,
  insertEmailCampaignSchema,
  insertContentBlockSchema,
  insertAdminUserSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
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

  // Analytics tracking endpoints
  app.post("/api/analytics/pageview", async (req, res) => {
    try {
      const { path, userAgent, referrer, sessionId } = req.body;
      const ipAddress = req.ip || req.connection.remoteAddress;
      
      await storage.createPageView({
        path,
        userAgent,
        ipAddress,
        referrer,
        sessionId,
        device: userAgent?.includes('Mobile') ? 'mobile' : 'desktop'
      });
      
      res.json({ success: true });
    } catch (error) {
      console.error("Error tracking page view:", error);
      res.status(500).json({ error: "Failed to track page view" });
    }
  });

  app.post("/api/analytics/ai-interaction", async (req, res) => {
    try {
      const { sessionId, currentPage, recommendationsShown, clickedRecommendation } = req.body;
      
      await storage.createAiInteraction({
        sessionId,
        currentPage,
        recommendationsShown,
        clickedRecommendation
      });
      
      res.json({ success: true });
    } catch (error) {
      console.error("Error tracking AI interaction:", error);
      res.status(500).json({ error: "Failed to track AI interaction" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, id: submission.id });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      res.status(400).json({ error: "Invalid form data" });
    }
  });

  // Admin Authentication Routes
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      
      if (!email || !password) {
        return res.status(400).json({ error: "Email and password required" });
      }

      const admin = await storage.getAdminUserByEmail(email);
      if (!admin || !admin.isActive) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const isValidPassword = await verifyPassword(password, admin.passwordHash);
      if (!isValidPassword) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Update last login
      await storage.updateAdminUserLastLogin(admin.id);

      const token = generateToken({
        id: admin.id,
        email: admin.email,
        name: admin.name,
        role: admin.role
      });

      res.json({
        token,
        user: {
          id: admin.id,
          email: admin.email,
          name: admin.name,
          role: admin.role
        }
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: "Login failed" });
    }
  });

  app.post("/api/admin/register", async (req, res) => {
    try {
      const { email, password, name, role = "admin" } = req.body;
      
      if (!email || !password || !name) {
        return res.status(400).json({ error: "Email, password, and name required" });
      }

      // Check if admin already exists
      const existingAdmin = await storage.getAdminUserByEmail(email);
      if (existingAdmin) {
        return res.status(400).json({ error: "Admin user already exists" });
      }

      const passwordHash = await hashPassword(password);
      const admin = await storage.createAdminUser({
        email,
        passwordHash,
        name,
        role
      });

      res.json({
        success: true,
        user: {
          id: admin.id,
          email: admin.email,
          name: admin.name,
          role: admin.role
        }
      });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ error: "Registration failed" });
    }
  });

  // Protected Admin Routes
  app.use("/api/admin/dashboard", authenticateAdmin);

  // Dashboard analytics
  app.get("/api/admin/dashboard/stats", async (req: AuthenticatedRequest, res) => {
    try {
      const stats = await storage.getDashboardStats();
      const aiStats = await storage.getAiInteractionStats();
      const topPages = await storage.getTopPages(10);
      const deviceStats = await storage.getDeviceStats();
      const countryStats = await storage.getCountryStats();

      res.json({
        ...stats,
        ...aiStats,
        topPages,
        deviceStats,
        countryStats
      });
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
      res.status(500).json({ error: "Failed to fetch stats" });
    }
  });

  // Contact submissions management
  app.get("/api/admin/dashboard/contacts", async (req: AuthenticatedRequest, res) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 50;
      const offset = (page - 1) * limit;

      const contacts = await storage.getContactSubmissions(limit, offset);
      const total = await storage.getContactSubmissionsCount();

      res.json({
        contacts,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  app.patch("/api/admin/dashboard/contacts/:id", async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;

      if (!['new', 'contacted', 'qualified', 'closed'].includes(status)) {
        return res.status(400).json({ error: "Invalid status" });
      }

      const updated = await storage.updateContactSubmissionStatus(id, status);
      res.json(updated);
    } catch (error) {
      console.error("Error updating contact:", error);
      res.status(500).json({ error: "Failed to update contact" });
    }
  });

  // Email campaigns
  app.get("/api/admin/dashboard/campaigns", async (req: AuthenticatedRequest, res) => {
    try {
      const campaigns = await storage.getEmailCampaigns();
      res.json(campaigns);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
      res.status(500).json({ error: "Failed to fetch campaigns" });
    }
  });

  app.post("/api/admin/dashboard/campaigns", async (req: AuthenticatedRequest, res) => {
    try {
      const validatedData = insertEmailCampaignSchema.parse(req.body);
      const campaign = await storage.createEmailCampaign(validatedData);
      res.json(campaign);
    } catch (error) {
      console.error("Error creating campaign:", error);
      res.status(400).json({ error: "Invalid campaign data" });
    }
  });

  app.patch("/api/admin/dashboard/campaigns/:id", async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      const campaign = await storage.updateEmailCampaign(id, updates);
      res.json(campaign);
    } catch (error) {
      console.error("Error updating campaign:", error);
      res.status(500).json({ error: "Failed to update campaign" });
    }
  });

  app.delete("/api/admin/dashboard/campaigns/:id", async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteEmailCampaign(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting campaign:", error);
      res.status(500).json({ error: "Failed to delete campaign" });
    }
  });

  // Content management
  app.get("/api/admin/dashboard/content", async (req: AuthenticatedRequest, res) => {
    try {
      const page = req.query.page as string;
      const content = await storage.getContentBlocks(page);
      res.json(content);
    } catch (error) {
      console.error("Error fetching content:", error);
      res.status(500).json({ error: "Failed to fetch content" });
    }
  });

  app.post("/api/admin/dashboard/content", async (req: AuthenticatedRequest, res) => {
    try {
      const validatedData = insertContentBlockSchema.parse(req.body);
      const content = await storage.createContentBlock(validatedData);
      res.json(content);
    } catch (error) {
      console.error("Error creating content:", error);
      res.status(400).json({ error: "Invalid content data" });
    }
  });

  app.patch("/api/admin/dashboard/content/:id", async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      const content = await storage.updateContentBlock(id, updates);
      res.json(content);
    } catch (error) {
      console.error("Error updating content:", error);
      res.status(500).json({ error: "Failed to update content" });
    }
  });

  // System logs
  app.get("/api/admin/dashboard/logs", requireRole('super_admin'), async (req: AuthenticatedRequest, res) => {
    try {
      const level = req.query.level as string;
      const limit = parseInt(req.query.limit as string) || 100;
      const logs = await storage.getSystemLogs(level, limit);
      res.json(logs);
    } catch (error) {
      console.error("Error fetching logs:", error);
      res.status(500).json({ error: "Failed to fetch logs" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
