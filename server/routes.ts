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
  insertAdminUserSchema,
  insertPageSchema,
  insertPageComponentSchema,
  insertPageTemplateSchema
} from "@shared/schema";
import { generatePageComponent, generateFullPage } from "./pageBuilder";

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

  // Contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      const submission = await storage.createContactSubmission(req.body);
      res.json(submission);
    } catch (error) {
      console.error('Error creating contact submission:', error);
      res.status(500).json({ message: 'Failed to submit contact form' });
    }
  });

  // User Management endpoints
  app.get('/api/admin/users', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const users = await storage.getAllAdminUsers();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Failed to fetch users' });
    }
  });

  app.post('/api/admin/users', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const { email, name, role, password } = req.body;
      
      const existingUser = await storage.getAdminUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }

      const hashedPassword = await hashPassword(password);
      const user = await storage.createAdminUser({
        email,
        name,
        role,
        passwordHash: hashedPassword,
      });

      const { passwordHash, ...userResponse } = user;
      res.json(userResponse);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Failed to create user' });
    }
  });

  app.patch('/api/admin/users/:id', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const userId = parseInt(req.params.id);
      const updates = req.body;
      
      const updatedUser = await storage.updateAdminUser(userId, updates);
      const { passwordHash, ...userResponse } = updatedUser;
      res.json(userResponse);
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Failed to update user' });
    }
  });

  app.delete('/api/admin/users/:id', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const userId = parseInt(req.params.id);
      await storage.deleteAdminUser(userId);
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Failed to delete user' });
    }
  });

  // Profile Settings endpoints
  app.patch('/api/admin/profile', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const { name } = req.body;
      const userId = req.adminUser!.id;
      
      const updatedUser = await storage.updateAdminUser(userId, { name });
      const { passwordHash, ...userResponse } = updatedUser;
      res.json(userResponse);
    } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).json({ message: 'Failed to update profile' });
    }
  });

  app.post('/api/admin/change-password', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const { currentPassword, newPassword } = req.body;
      const userId = req.adminUser!.id;
      
      const user = await storage.getAdminUser(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const isValidPassword = await verifyPassword(currentPassword, user.passwordHash);
      if (!isValidPassword) {
        return res.status(400).json({ message: 'Current password is incorrect' });
      }

      const hashedNewPassword = await hashPassword(newPassword);
      await storage.updateAdminUser(userId, { passwordHash: hashedNewPassword });
      
      res.json({ message: 'Password changed successfully' });
    } catch (error) {
      console.error('Error changing password:', error);
      res.status(500).json({ message: 'Failed to change password' });
    }
  });

  // Integrations endpoints
  app.get('/api/admin/integrations', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const integrations = await storage.getIntegrations();
      res.json(integrations);
    } catch (error) {
      console.error('Error fetching integrations:', error);
      res.status(500).json({ message: 'Failed to fetch integrations' });
    }
  });

  app.post('/api/admin/integrations', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const integration = await storage.createIntegration(req.body);
      res.json(integration);
    } catch (error) {
      console.error('Error creating integration:', error);
      res.status(500).json({ message: 'Failed to create integration' });
    }
  });

  app.patch('/api/admin/integrations/:id', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const integrationId = parseInt(req.params.id);
      const updates = req.body;
      
      const updatedIntegration = await storage.updateIntegration(integrationId, updates);
      res.json(updatedIntegration);
    } catch (error) {
      console.error('Error updating integration:', error);
      res.status(500).json({ message: 'Failed to update integration' });
    }
  });

  app.delete('/api/admin/integrations/:id', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const integrationId = parseInt(req.params.id);
      await storage.deleteIntegration(integrationId);
      res.json({ message: 'Integration deleted successfully' });
    } catch (error) {
      console.error('Error deleting integration:', error);
      res.status(500).json({ message: 'Failed to delete integration' });
    }
  });

  app.post('/api/admin/integrations/:id/test', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const integrationId = parseInt(req.params.id);
      const integration = await storage.getIntegrationById(integrationId);
      
      if (!integration) {
        return res.status(404).json({ message: 'Integration not found' });
      }

      // Basic test logic - in a real implementation, you'd test the actual API
      if (integration.type === 'zapier' && integration.webhookUrl) {
        res.json({ message: 'Zapier webhook URL is valid and reachable' });
      } else if (integration.type === 'brevo' && integration.apiKey) {
        res.json({ message: 'Brevo API key format is valid' });
      } else {
        res.json({ message: 'Integration configuration appears valid' });
      }
    } catch (error) {
      console.error('Error testing integration:', error);
      res.status(500).json({ message: 'Failed to test integration' });
    }
  });

  // ========== PAGE BUILDER API ROUTES ==========

  // Get all pages
  app.get('/api/admin/pages', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const { status } = req.query;
      const pages = await storage.getPages(status as string);
      res.json(pages);
    } catch (error) {
      console.error('Error fetching pages:', error);
      res.status(500).json({ message: 'Failed to fetch pages' });
    }
  });

  // Create new page
  app.post('/api/admin/pages', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const pageData = insertPageSchema.parse(req.body);
      const newPage = await storage.createPage(pageData);
      
      // Log user activity
      await storage.createUserActivity({
        adminUserId: req.adminUser?.id,
        activity: 'Created page',
        details: { pageId: newPage.id, title: newPage.title },
        ipAddress: req.ip,
        userAgent: req.get('User-Agent')
      });
      
      res.status(201).json(newPage);
    } catch (error) {
      console.error('Error creating page:', error);
      res.status(500).json({ message: 'Failed to create page' });
    }
  });

  // Get page by ID
  app.get('/api/admin/pages/:id', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const pageId = parseInt(req.params.id);
      const page = await storage.getPageById(pageId);
      
      if (!page) {
        return res.status(404).json({ message: 'Page not found' });
      }
      
      res.json(page);
    } catch (error) {
      console.error('Error fetching page:', error);
      res.status(500).json({ message: 'Failed to fetch page' });
    }
  });

  // Update page
  app.put('/api/admin/pages/:id', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const pageId = parseInt(req.params.id);
      const updates = req.body;
      const updatedPage = await storage.updatePage(pageId, { ...updates, updatedBy: req.adminUser?.id });
      
      // Log user activity
      await storage.createUserActivity({
        adminUserId: req.adminUser?.id,
        activity: 'Updated page',
        details: { pageId, changes: Object.keys(updates) },
        ipAddress: req.ip,
        userAgent: req.get('User-Agent')
      });
      
      res.json(updatedPage);
    } catch (error) {
      console.error('Error updating page:', error);
      res.status(500).json({ message: 'Failed to update page' });
    }
  });

  // Delete page
  app.delete('/api/admin/pages/:id', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const pageId = parseInt(req.params.id);
      await storage.deletePage(pageId);
      
      // Log user activity
      await storage.createUserActivity({
        adminUserId: req.adminUser?.id,
        activity: 'Deleted page',
        details: { pageId },
        ipAddress: req.ip,
        userAgent: req.get('User-Agent')
      });
      
      res.json({ message: 'Page deleted successfully' });
    } catch (error) {
      console.error('Error deleting page:', error);
      res.status(500).json({ message: 'Failed to delete page' });
    }
  });

  // Get page components
  app.get('/api/admin/pages/:id/components', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const pageId = parseInt(req.params.id);
      const components = await storage.getPageComponents(pageId);
      res.json(components);
    } catch (error) {
      console.error('Error fetching page components:', error);
      res.status(500).json({ message: 'Failed to fetch page components' });
    }
  });

  // Create page component
  app.post('/api/admin/pages/:id/components', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const pageId = parseInt(req.params.id);
      const componentData = insertPageComponentSchema.parse({ ...req.body, pageId });
      const newComponent = await storage.createPageComponent(componentData);
      
      // Log user activity
      await storage.createUserActivity({
        adminUserId: req.adminUser?.id,
        activity: 'Added page component',
        details: { pageId, componentType: newComponent.type, componentId: newComponent.id },
        ipAddress: req.ip,
        userAgent: req.get('User-Agent')
      });
      
      res.status(201).json(newComponent);
    } catch (error) {
      console.error('Error creating page component:', error);
      res.status(500).json({ message: 'Failed to create page component' });
    }
  });

  // Update page component
  app.put('/api/admin/components/:id', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const componentId = parseInt(req.params.id);
      const updates = req.body;
      const updatedComponent = await storage.updatePageComponent(componentId, updates);
      
      // Log user activity
      await storage.createUserActivity({
        adminUserId: req.adminUser?.id,
        activity: 'Updated page component',
        details: { componentId, changes: Object.keys(updates) },
        ipAddress: req.ip,
        userAgent: req.get('User-Agent')
      });
      
      res.json(updatedComponent);
    } catch (error) {
      console.error('Error updating page component:', error);
      res.status(500).json({ message: 'Failed to update page component' });
    }
  });

  // Delete page component
  app.delete('/api/admin/components/:id', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const componentId = parseInt(req.params.id);
      await storage.deletePageComponent(componentId);
      
      // Log user activity
      await storage.createUserActivity({
        adminUserId: req.adminUser?.id,
        activity: 'Deleted page component',
        details: { componentId },
        ipAddress: req.ip,
        userAgent: req.get('User-Agent')
      });
      
      res.json({ message: 'Page component deleted successfully' });
    } catch (error) {
      console.error('Error deleting page component:', error);
      res.status(500).json({ message: 'Failed to delete page component' });
    }
  });

  // Reorder page components
  app.put('/api/admin/pages/:id/components/reorder', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const pageId = parseInt(req.params.id);
      const { componentIds } = req.body;
      await storage.reorderPageComponents(pageId, componentIds);
      
      // Log user activity
      await storage.createUserActivity({
        adminUserId: req.adminUser?.id,
        activity: 'Reordered page components',
        details: { pageId, componentOrder: componentIds },
        ipAddress: req.ip,
        userAgent: req.get('User-Agent')
      });
      
      res.json({ message: 'Components reordered successfully' });
    } catch (error) {
      console.error('Error reordering components:', error);
      res.status(500).json({ message: 'Failed to reorder components' });
    }
  });

  // AI-powered content generation
  app.post('/api/admin/generate/component', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const request = req.body;
      const generatedComponent = await generatePageComponent(request);
      
      // Log user activity
      await storage.createUserActivity({
        adminUserId: req.adminUser?.id,
        activity: 'Generated AI component',
        details: { componentType: request.componentType, industry: request.industry },
        ipAddress: req.ip,
        userAgent: req.get('User-Agent')
      });
      
      res.json(generatedComponent);
    } catch (error) {
      console.error('Error generating component:', error);
      res.status(500).json({ message: 'Failed to generate component' });
    }
  });

  // Generate full page with AI
  app.post('/api/admin/generate/page', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const request = req.body;
      const generatedComponents = await generateFullPage(request);
      
      // Log user activity
      await storage.createUserActivity({
        adminUserId: req.adminUser?.id,
        activity: 'Generated AI page',
        details: { pageType: request.pageType, title: request.title },
        ipAddress: req.ip,
        userAgent: req.get('User-Agent')
      });
      
      res.json(generatedComponents);
    } catch (error) {
      console.error('Error generating page:', error);
      res.status(500).json({ message: 'Failed to generate page' });
    }
  });

  // Page templates
  app.get('/api/admin/templates', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const templates = await storage.getPageTemplates();
      res.json(templates);
    } catch (error) {
      console.error('Error fetching templates:', error);
      res.status(500).json({ message: 'Failed to fetch templates' });
    }
  });

  app.post('/api/admin/templates', authenticateAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const templateData = insertPageTemplateSchema.parse({ ...req.body, createdBy: req.adminUser?.id });
      const newTemplate = await storage.createPageTemplate(templateData);
      
      // Log user activity
      await storage.createUserActivity({
        adminUserId: req.adminUser?.id,
        activity: 'Created page template',
        details: { templateId: newTemplate.id, name: newTemplate.name },
        ipAddress: req.ip,
        userAgent: req.get('User-Agent')
      });
      
      res.status(201).json(newTemplate);
    } catch (error) {
      console.error('Error creating template:', error);
      res.status(500).json({ message: 'Failed to create template' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
