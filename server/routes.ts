import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertEmailCampaignSchema } from "@shared/schema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
import path from "path";
import { emailService } from "./emailService";

// Auth utilities
const JWT_SECRET = process.env.JWT_SECRET || "asterik-admin-secret-key";

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}

export function generateToken(payload: any): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" });
}

interface AuthenticatedRequest extends Request {
  user?: any;
}

export async function registerRoutes(app: Express): Promise<Server> {

  // Test endpoint for debugging
  app.get("/api/test", (req, res) => {
    res.json({ message: "Server is working", timestamp: new Date().toISOString() });
  });

  // Debug endpoint for domain issues
  app.get("/api/debug", (req, res) => {
    res.json({
      message: "Debug info",
      timestamp: new Date().toISOString(),
      host: req.get('host'),
      hostname: req.hostname,
      protocol: req.protocol,
      url: req.url,
      originalUrl: req.originalUrl,
      headers: {
        origin: req.get('origin'),
        referer: req.get('referer'),
        userAgent: req.get('user-agent')
      }
    });
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
      const { generateContentRecommendations } = await import("./gemini");
      const recommendations = await generateContentRecommendations(pageContent, currentPath);
      console.log("Generated recommendations:", recommendations.length);
      res.json(recommendations);
    } catch (error) {
      console.error("Error generating recommendations:", error);
      // Return fallback recommendations
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

  // Admin Authentication Routes
  app.post("/api/admin/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: "Email and password required" });
      }

      const admin = await storage.getAdminUserByEmail(email);
      if (!admin) {
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

  // Dashboard analytics - INLINE AUTH CHECK
  app.get("/api/admin/dashboard/stats", async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      console.log('Stats endpoint - Auth header:', authHeader?.substring(0, 30) + '...');

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log('Stats endpoint - No Bearer token');
        return res.status(401).json({ message: "No token provided" });
      }

      const token = authHeader.substring(7);
      try {
        const decoded = jwt.verify(token, JWT_SECRET) as any;
        console.log('Stats endpoint - Token verified for user:', decoded.email);
        req.user = decoded;
      } catch (jwtError) {
        console.log('Stats endpoint - JWT verification failed:', jwtError);
        return res.status(401).json({ message: "Invalid token" });
      }

      // Fetch stats
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

  // Contact submissions management - INLINE AUTH CHECK
  app.get("/api/admin/dashboard/contacts", async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        const decoded = jwt.verify(token, JWT_SECRET) as any;
        req.user = decoded;
      } catch (jwtError) {
        return res.status(401).json({ message: "Invalid token" });
      }

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
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        jwt.verify(token, JWT_SECRET);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }

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

  // Email campaigns - INLINE AUTH CHECK
  app.get("/api/admin/dashboard/campaigns", async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        jwt.verify(token, JWT_SECRET);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }

      const campaigns = await storage.getCampaigns();
      res.json(campaigns);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
      res.status(500).json({ error: "Failed to fetch campaigns" });
    }
  });

  // Create email campaign - INLINE AUTH CHECK
  app.post("/api/admin/dashboard/campaigns", async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        jwt.verify(token, JWT_SECRET);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }

      // Map frontend data to backend schema
      const { name, subject, content, scheduledDate } = req.body;
      console.log('Received campaign data:', { name, subject, content, scheduledDate });

      const campaignData = {
        name,
        subject,
        content,
        scheduledAt: scheduledDate && scheduledDate !== '' ? scheduledDate : undefined
      };

      console.log('Mapped campaign data:', campaignData);
      const validatedData = insertEmailCampaignSchema.parse(campaignData);
      console.log('Validated campaign data:', validatedData);

      const campaign = await storage.createCampaign(validatedData);
      res.json(campaign);
    } catch (error: any) {
      console.error("Error creating campaign:", error);
      if (error.issues) {
        console.error("Zod validation errors:", error.issues);
      }
      res.status(400).json({ error: "Invalid campaign data", details: error.message });
    }
  });

  // Update email campaign - INLINE AUTH CHECK
  app.patch("/api/admin/dashboard/campaigns/:id", async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        jwt.verify(token, JWT_SECRET);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }

      const id = parseInt(req.params.id);
      const updates = req.body;
      const campaign = await storage.updateCampaign(id, updates);
      res.json(campaign);
    } catch (error: any) {
      console.error("Error updating campaign:", error);
      res.status(500).json({ error: "Failed to update campaign" });
    }
  });

  // Delete email campaign - INLINE AUTH CHECK
  app.delete("/api/admin/dashboard/campaigns/:id", async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        jwt.verify(token, JWT_SECRET);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }

      const id = parseInt(req.params.id);
      await storage.deleteCampaign(id);
      res.json({ success: true });
    } catch (error: any) {
      console.error("Error deleting campaign:", error);
      res.status(500).json({ error: "Failed to delete campaign" });
    }
  });

  // Page builder - Get all pages - INLINE AUTH CHECK
  app.get("/api/admin/pages", async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        jwt.verify(token, JWT_SECRET);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }

      const { status } = req.query;
      const pages = await storage.getPages(status as string);
      res.json(pages || []);
    } catch (error) {
      console.error("Error fetching pages:", error);
      res.status(500).json({ error: "Failed to fetch pages" });
    }
  });

  // Content management - INLINE AUTH CHECK
  app.get("/api/admin/dashboard/content", async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        jwt.verify(token, JWT_SECRET);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }

      const page = req.query.page as string;
      const content = await storage.getContentBlocks(page);
      res.json(content);
    } catch (error) {
      console.error("Error fetching content:", error);
      res.status(500).json({ error: "Failed to fetch content" });
    }
  });

  // User Management - INLINE AUTH CHECK
  app.get("/api/admin/users", async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        jwt.verify(token, JWT_SECRET);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }

      const users = await storage.getAdminUsers();
      // Remove password hashes from response
      const sanitizedUsers = users.map(user => {
        const { passwordHash, ...userWithoutPassword } = user;
        return userWithoutPassword;
      });
      res.json(sanitizedUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  });

  app.post("/api/admin/users", async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        jwt.verify(token, JWT_SECRET);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }

      const { email, name, role, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await storage.createAdminUser({
        email,
        name,
        role,
        passwordHash: hashedPassword
      });

      const { passwordHash, ...userResponse } = newUser;
      res.json(userResponse);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Failed to create user" });
    }
  });

  // Integrations Management - INLINE AUTH CHECK
  app.get("/api/admin/integrations", async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        jwt.verify(token, JWT_SECRET);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }

      const integrations = await storage.getIntegrations();
      res.json(integrations);
    } catch (error) {
      console.error("Error fetching integrations:", error);
      res.status(500).json({ error: "Failed to fetch integrations" });
    }
  });

  // Dashboard Widgets and Customization - INLINE AUTH CHECK
  app.get("/api/admin/dashboard/widgets", async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        jwt.verify(token, JWT_SECRET);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }

      const widgets = await storage.getDashboardWidgets();
      res.json(widgets);
    } catch (error) {
      console.error("Error fetching dashboard widgets:", error);
      res.status(500).json({ error: "Failed to fetch dashboard widgets" });
    }
  });

  app.get("/api/admin/user-dashboards", async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        const decoded = jwt.verify(token, JWT_SECRET) as any;
        const dashboards = await storage.getUserDashboards(decoded.id);
        res.json(dashboards);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }
    } catch (error) {
      console.error("Error fetching user dashboards:", error);
      res.status(500).json({ error: "Failed to fetch user dashboards" });
    }
  });

  app.post("/api/admin/user-dashboards", async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        const decoded = jwt.verify(token, JWT_SECRET) as any;
        const { name, layout } = req.body;
        const dashboard = await storage.createUserDashboard({
          adminUserId: decoded.id,
          name,
          layout: layout || [],
          isDefault: false
        });
        res.json(dashboard);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }
    } catch (error) {
      console.error("Error creating user dashboard:", error);
      res.status(500).json({ error: "Failed to create user dashboard" });
    }
  });

  // Pages management endpoints
  app.get('/api/admin/pages', async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        jwt.verify(token, JWT_SECRET);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }

      const status = req.query.status as string;
      const pages = await storage.getPages(status);
      res.json(pages);
    } catch (error) {
      console.error('Error fetching pages:', error);
      res.status(500).json({ message: 'Failed to fetch pages' });
    }
  });

  app.get('/api/admin/pages/:slug/edit', async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        jwt.verify(token, JWT_SECRET);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }

      const slug = req.params.slug;
      const page = await storage.getPageBySlug(slug);
      if (!page) {
        return res.status(404).json({ message: 'Page not found' });
      }

      const components = await storage.getPageComponents(page.id);
      res.json({ page, components });
    } catch (error) {
      console.error('Error fetching page for editing:', error);
      res.status(500).json({ message: 'Failed to fetch page' });
    }
  });

  app.get('/api/admin/pages/:id/components', async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        jwt.verify(token, JWT_SECRET);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }

      const pageId = parseInt(req.params.id);
      const components = await storage.getPageComponents(pageId);
      res.json(components);
    } catch (error) {
      console.error('Error fetching page components:', error);
      res.status(500).json({ message: 'Failed to fetch page components' });
    }
  });

  app.post('/api/admin/pages', async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        jwt.verify(token, JWT_SECRET);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }

      const pageData = req.body;
      const newPage = await storage.createPage(pageData);
      res.status(201).json(newPage);
    } catch (error) {
      console.error('Error creating page:', error);
      res.status(500).json({ message: 'Failed to create page' });
    }
  });

  app.delete('/api/admin/pages/:id', async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        jwt.verify(token, JWT_SECRET);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }

      const pageId = parseInt(req.params.id);
      await storage.deletePage(pageId);
      res.json({ message: 'Page deleted successfully' });
    } catch (error) {
      console.error('Error deleting page:', error);
      res.status(500).json({ message: 'Failed to delete page' });
    }
  });

  // Import existing pages endpoint
  app.post('/api/admin/import-pages', async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        jwt.verify(token, JWT_SECRET);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }

      // Import existing website pages into the page builder
      const { importExistingPages } = await import('../scripts/import-existing-pages');
      await importExistingPages();

      res.json({ message: 'Successfully imported existing pages' });
    } catch (error) {
      console.error('Error importing pages:', error);
      res.status(500).json({ message: 'Failed to import pages' });
    }
  });

  // Get page components
  app.get('/api/admin/pages/:id/components', async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        jwt.verify(token, JWT_SECRET);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }

      const pageId = parseInt(req.params.id);
      const components = await storage.getPageComponents(pageId);
      res.json(components);
    } catch (error) {
      console.error('Error fetching page components:', error);
      res.status(500).json({ message: 'Failed to fetch page components' });
    }
  });

  // Dashboard customization endpoints - removed duplicate route

  app.get("/api/admin/dashboards/:id/widgets", async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        jwt.verify(token, JWT_SECRET);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }

      const dashboardId = parseInt(req.params.id);
      const widgets = await storage.getDashboardWidgetInstances(dashboardId);
      res.json(widgets);
    } catch (error) {
      console.error("Error fetching dashboard widgets:", error);
      res.status(500).json({ error: "Failed to fetch dashboard widgets" });
    }
  });

  app.post("/api/admin/dashboards/:id/widgets", async (req: AuthenticatedRequest, res) => {
    try {
      // Inline authentication check
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided" });
      }
      const token = authHeader.substring(7);
      try {
        jwt.verify(token, JWT_SECRET);
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }

      const dashboardId = parseInt(req.params.id);
      const { widgetId, title, position, config } = req.body;

      const widgetInstance = await storage.createDashboardWidgetInstance({
        dashboardId,
        widgetId,
        title: title || null,
        position: position || { x: 0, y: 0, w: 2, h: 2 },
        config: config || {},
        isVisible: true,
        refreshInterval: 300
      });

      res.json(widgetInstance);
    } catch (error) {
      console.error("Error adding widget to dashboard:", error);
      res.status(500).json({ error: "Failed to add widget" });
    }
  });

  // Health check endpoint
  app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, company, phone, message, source } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ 
          message: 'Name, email, and message are required fields' 
        });
      }

      const contactSubmission = await storage.createContactSubmission({
        name,
        email,
        company: company || null,
        phone: phone || null,
        message,
        source: source || 'contact_form'
      });

      // Send email notifications
      try {
        await emailService.sendContactFormEmail({
          name,
          email,
          company: company || undefined,
          phone: phone || undefined,
          message,
          source: source || 'contact_form'
        });

        // Send auto-reply to the user
        await emailService.sendAutoReply({
          name,
          email,
          company: company || undefined,
          phone: phone || undefined,
          message,
          source: source || 'contact_form'
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue with success response even if email fails
      }

      // Track analytics
      console.log('Contact form submission:', {
        contactId: contactSubmission.id,
        source,
        timestamp: new Date().toISOString()
      });

      res.status(201).json({ 
        message: 'Contact submission received successfully',
        id: contactSubmission.id 
      });
    } catch (error) {
      console.error('Error processing contact submission:', error);
      res.status(500).json({ 
        message: 'Failed to process contact submission' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}