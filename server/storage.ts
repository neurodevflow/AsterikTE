import { db } from "./db";
import { 
  contactSubmissions, 
  pageViews, 
  userSessions,
  adminUsers,
  emailCampaigns,
  contentBlocks,
  systemLogs,
  userActivities,
  pages,
  pageComponents,
  pageTemplates,
  dashboardWidgets,
  userDashboards,
  dashboardWidgetInstances,
  type ContactSubmission,
  type InsertContactSubmission,
  type PageView,
  type InsertPageView,

  type UserSession,
  type AdminUser,
  type InsertAdminUser,
  type EmailCampaign,
  type InsertEmailCampaign,
  type ContentBlock,
  type InsertContentBlock,
  type SystemLog,
  type UserActivity,
  type InsertUserActivity,
  type Page,
  type InsertPage,
  type PageComponent,
  type InsertPageComponent,
  type PageTemplate,
  type InsertPageTemplate,
  type DashboardWidget,
  type InsertDashboardWidget,
  type UserDashboard,
  type InsertUserDashboard,
  type DashboardWidgetInstance,
  type InsertDashboardWidgetInstance
} from "@shared/schema";
import { eq, desc, asc, count, and, sql } from "drizzle-orm";

export interface IStorage {
  // Contact submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(limit: number, offset: number): Promise<ContactSubmission[]>;
  getContactSubmissionsCount(): Promise<number>;
  updateContactSubmissionStatus(id: number, status: string): Promise<ContactSubmission>;

  // Analytics
  createPageView(pageView: InsertPageView): Promise<PageView>;

  createUserSession(session: any): Promise<UserSession>;

  // Dashboard stats
  getDashboardStats(): Promise<{
    totalPageViews: number;
    totalContacts: number;
    totalSessions: number;
  }>;
  getTopPages(limit: number): Promise<Array<{ path: string; count: number }>>;
  getDeviceStats(): Promise<Array<{ device: string; count: number }>>;
  getCountryStats(): Promise<Array<{ country: string; count: number }>>;

  // Admin users
  createAdminUser(user: InsertAdminUser): Promise<AdminUser>;
  getAdminUserByEmail(email: string): Promise<AdminUser | undefined>;
  updateAdminUserLastLogin(id: number): Promise<void>;
  getAdminUsers(): Promise<AdminUser[]>;
  updateAdminUser(id: number, updates: any): Promise<AdminUser>;
  deleteAdminUser(id: number): Promise<void>;

  // Integrations
  getIntegrations(): Promise<any[]>;
  createIntegration(integration: any): Promise<any>;
  updateIntegration(id: number, updates: any): Promise<any>;
  deleteIntegration(id: number): Promise<void>;

  // Dashboard widgets
  getDashboardWidgets(): Promise<DashboardWidget[]>;
  getUserDashboards(adminUserId: number): Promise<UserDashboard[]>;
  createUserDashboard(dashboard: InsertUserDashboard): Promise<UserDashboard>;

  // Pages
  getPages(status?: string): Promise<Page[]>;
  getPageBySlug(slug: string): Promise<Page | undefined>;
  createPage(pageData: InsertPage): Promise<Page>;
  updatePage(id: number, updates: any): Promise<Page>;
  deletePage(id: number): Promise<void>;
  createPageComponent(componentData: InsertPageComponent): Promise<PageComponent>;

  // Content management
  getContacts(page: number, limit: number): Promise<ContactSubmission[]>;
  updateContact(id: number, updates: any): Promise<ContactSubmission>;
  getCampaigns(): Promise<EmailCampaign[]>;
  createCampaign(campaignData: InsertEmailCampaign): Promise<EmailCampaign>;
  updateCampaign(id: number, updates: any): Promise<EmailCampaign>;
  deleteCampaign(id: number): Promise<void>;
  getContentBlocks(page?: string): Promise<ContentBlock[]>;
  createContentBlock(blockData: InsertContentBlock): Promise<ContentBlock>;
  updateContentBlock(id: number, updates: any): Promise<ContentBlock>;
  deleteContentBlock(id: number): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  // Contact submissions
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [contact] = await db
      .insert(contactSubmissions)
      .values(submission)
      .returning();
    return contact;
  }

  async getContactSubmissions(limit: number, offset: number): Promise<ContactSubmission[]> {
    return await db
      .select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt))
      .limit(limit)
      .offset(offset);
  }

  async getContactSubmissionsCount(): Promise<number> {
    const [result] = await db.select({ count: count() }).from(contactSubmissions);
    return result.count;
  }

  async updateContactSubmissionStatus(id: number, status: string): Promise<ContactSubmission> {
    const [updated] = await db
      .update(contactSubmissions)
      .set({ status, updatedAt: new Date() })
      .where(eq(contactSubmissions.id, id))
      .returning();
    return updated;
  }

  // Analytics
  async createPageView(pageView: InsertPageView): Promise<PageView> {
    const [view] = await db
      .insert(pageViews)
      .values(pageView)
      .returning();
    return view;
  }



  async createUserSession(session: any): Promise<UserSession> {
    const [userSession] = await db
      .insert(userSessions)
      .values(session)
      .returning();
    return userSession;
  }

  // Dashboard stats
  async getDashboardStats(): Promise<{
    totalPageViews: number;
    totalContacts: number;
    totalSessions: number;
  }> {
    const [pageViewCount] = await db.select({ count: count() }).from(pageViews);
    const [contactCount] = await db.select({ count: count() }).from(contactSubmissions);
    const [sessionCount] = await db.select({ count: count() }).from(userSessions);
    return {
      totalPageViews: pageViewCount.count,
      totalContacts: contactCount.count,
      totalSessions: sessionCount.count
    };
  }



  async getTopPages(limit: number): Promise<Array<{ path: string; count: number }>> {
    const results = await db
      .select({
        path: pageViews.path,
        count: count()
      })
      .from(pageViews)
      .groupBy(pageViews.path)
      .orderBy(desc(count()))
      .limit(limit);
    
    return results.map(r => ({ path: r.path, count: r.count }));
  }

  async getDeviceStats(): Promise<Array<{ device: string; count: number }>> {
    const results = await db
      .select({
        device: pageViews.device,
        count: count()
      })
      .from(pageViews)
      .groupBy(pageViews.device)
      .orderBy(desc(count()));
    
    return results.map(r => ({ device: r.device || 'unknown', count: r.count }));
  }

  async getCountryStats(): Promise<Array<{ country: string; count: number }>> {
    // For now return empty array, can be enhanced with IP geolocation
    return [];
  }

  // Admin users
  async createAdminUser(user: InsertAdminUser): Promise<AdminUser> {
    const [admin] = await db
      .insert(adminUsers)
      .values(user)
      .returning();
    return admin;
  }

  async getAdminUserByEmail(email: string): Promise<AdminUser | undefined> {
    const [admin] = await db
      .select()
      .from(adminUsers)
      .where(eq(adminUsers.email, email));
    return admin;
  }

  async updateAdminUserLastLogin(id: number): Promise<void> {
    await db
      .update(adminUsers)
      .set({ lastLogin: new Date(), updatedAt: new Date() })
      .where(eq(adminUsers.id, id));
  }

  // Content management - Admin functions
  async getContacts(page: number, limit: number): Promise<ContactSubmission[]> {
    const offset = (page - 1) * limit;
    return await db
      .select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt))
      .limit(limit)
      .offset(offset);
  }

  async updateContact(id: number, updates: any): Promise<ContactSubmission> {
    const [contact] = await db
      .update(contactSubmissions)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(contactSubmissions.id, id))
      .returning();
    return contact;
  }

  async getCampaigns(): Promise<EmailCampaign[]> {
    return await db
      .select()
      .from(emailCampaigns)
      .orderBy(desc(emailCampaigns.createdAt));
  }

  async createCampaign(campaignData: InsertEmailCampaign): Promise<EmailCampaign> {
    const [campaign] = await db
      .insert(emailCampaigns)
      .values(campaignData)
      .returning();
    return campaign;
  }

  async updateCampaign(id: number, updates: any): Promise<EmailCampaign> {
    const [campaign] = await db
      .update(emailCampaigns)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(emailCampaigns.id, id))
      .returning();
    return campaign;
  }

  async deleteCampaign(id: number): Promise<void> {
    await db.delete(emailCampaigns).where(eq(emailCampaigns.id, id));
  }

  // Page management methods (consolidated with Pages implementation section)

  async getContentBlocks(page?: string): Promise<ContentBlock[]> {
    if (page) {
      return await db
        .select()
        .from(contentBlocks)
        .where(eq(contentBlocks.page, page))
        .orderBy(contentBlocks.id);
    }
    return await db
      .select()
      .from(contentBlocks)
      .orderBy(contentBlocks.page, contentBlocks.id);
  }

  async createContentBlock(blockData: InsertContentBlock): Promise<ContentBlock> {
    const [block] = await db
      .insert(contentBlocks)
      .values(blockData)
      .returning();
    return block;
  }

  async updateContentBlock(id: number, updates: any): Promise<ContentBlock> {
    const [block] = await db
      .update(contentBlocks)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(contentBlocks.id, id))
      .returning();
    return block;
  }

  async deleteContentBlock(id: number): Promise<void> {
    await db.delete(contentBlocks).where(eq(contentBlocks.id, id));
  }

  // Admin users implementation
  async getAdminUsers(): Promise<AdminUser[]> {
    try {
      console.log('Attempting to fetch admin users...');
      const result = await db
        .select()
        .from(adminUsers)
        .orderBy(desc(adminUsers.createdAt));
      console.log('Successfully fetched admin users:', result.length);
      return result;
    } catch (error) {
      console.error('Error in getAdminUsers:', error);
      throw error;
    }
  }

  async updateAdminUser(id: number, updates: any): Promise<AdminUser> {
    const [user] = await db
      .update(adminUsers)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(adminUsers.id, id))
      .returning();
    return user;
  }

  async deleteAdminUser(id: number): Promise<void> {
    await db.delete(adminUsers).where(eq(adminUsers.id, id));
  }

  // Integrations implementation (simple mock data for now)
  async getIntegrations(): Promise<any[]> {
    // Return mock integration data since we don't have an integrations table
    return [
      {
        id: 1,
        name: "Zapier Integration",
        type: "zapier",
        isActive: false,
        webhookUrl: "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 2,
        name: "Brevo Email Integration",
        type: "brevo",
        isActive: false,
        apiKey: "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ];
  }

  async createIntegration(integration: any): Promise<any> {
    // Mock implementation - in real app would save to database
    return {
      id: Date.now(),
      ...integration,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  }

  async updateIntegration(id: number, updates: any): Promise<any> {
    // Mock implementation
    return {
      id,
      ...updates,
      updatedAt: new Date().toISOString()
    };
  }

  async deleteIntegration(id: number): Promise<void> {
    // Mock implementation
    console.log(`Integration ${id} deleted`);
  }

  // Dashboard widgets implementation
  async getDashboardWidgets(): Promise<DashboardWidget[]> {
    try {
      console.log('Attempting to fetch dashboard widgets...');
      const result = await db
        .select()
        .from(dashboardWidgets)
        .orderBy(dashboardWidgets.name);
      console.log('Successfully fetched dashboard widgets:', result.length);
      return result;
    } catch (error) {
      console.error('Error in getDashboardWidgets:', error);
      throw error;
    }
  }

  async getUserDashboards(adminUserId: number): Promise<UserDashboard[]> {
    return await db
      .select()
      .from(userDashboards)
      .where(eq(userDashboards.adminUserId, adminUserId))
      .orderBy(desc(userDashboards.isDefault), userDashboards.name);
  }

  async createUserDashboard(dashboard: InsertUserDashboard): Promise<UserDashboard> {
    const [newDashboard] = await db
      .insert(userDashboards)
      .values(dashboard)
      .returning();
    return newDashboard;
  }

  // Page components methods
  async getPageComponents(pageId?: number): Promise<ContentBlock[]> {
    try {
      if (pageId) {
        return await db
          .select()
          .from(contentBlocks)
          .where(eq(contentBlocks.page, pageId.toString()))
          .orderBy(contentBlocks.id);
      }
      return await db
        .select()
        .from(contentBlocks)
        .orderBy(contentBlocks.page, contentBlocks.id);
    } catch (error) {
      console.error("Error fetching page components:", error);
      return [];
    }
  }

  // Pages implementation
  async getPages(status?: string): Promise<Page[]> {
    try {
      if (status) {
        return await db
          .select()
          .from(pages)
          .where(eq(pages.status, status))
          .orderBy(desc(pages.createdAt));
      }
      return await db
        .select()
        .from(pages)
        .orderBy(desc(pages.createdAt));
    } catch (error) {
      console.error("Error fetching pages:", error);
      return [];
    }
  }

  async getPageBySlug(slug: string): Promise<Page | undefined> {
    try {
      const [page] = await db
        .select()
        .from(pages)
        .where(eq(pages.slug, slug))
        .limit(1);
      return page;
    } catch (error) {
      console.error("Error fetching page by slug:", error);
      return undefined;
    }
  }

  async createPage(pageData: InsertPage): Promise<Page> {
    const [newPage] = await db
      .insert(pages)
      .values(pageData)
      .returning();
    return newPage;
  }

  async updatePage(id: number, updates: any): Promise<Page> {
    const [updatedPage] = await db
      .update(pages)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(pages.id, id))
      .returning();
    return updatedPage;
  }

  async deletePage(id: number): Promise<void> {
    // First delete associated components
    await db.delete(pageComponents).where(eq(pageComponents.pageId, id));
    // Then delete the page
    await db.delete(pages).where(eq(pages.id, id));
  }

  async createPageComponent(componentData: InsertPageComponent): Promise<PageComponent> {
    const [newComponent] = await db
      .insert(pageComponents)
      .values(componentData)
      .returning();
    return newComponent;
  }

  // Dashboard widget instances methods
  async getDashboardWidgetInstances(dashboardId: number): Promise<any[]> {
    // Mock implementation for now - return empty array
    console.log(`Fetching widget instances for dashboard ${dashboardId}`);
    return [];
  }

  async createDashboardWidgetInstance(instance: any): Promise<any> {
    // Mock implementation for now
    console.log('Creating dashboard widget instance:', instance);
    return {
      id: Date.now(),
      ...instance,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  }
}

export const storage = new DatabaseStorage();