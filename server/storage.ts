import { db } from "./db";
import { 
  contactSubmissions, 
  pageViews, 
  aiInteractions, 
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
  type AiInteraction,
  type InsertAiInteraction,
  type UserSession,
  type InsertUserSession,
  type AdminUser,
  type InsertAdminUser,
  type EmailCampaign,
  type InsertEmailCampaign,
  type ContentBlock,
  type InsertContentBlock,
  type SystemLog,
  type InsertSystemLog,
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
  createAiInteraction(interaction: InsertAiInteraction): Promise<AiInteraction>;
  createUserSession(session: InsertUserSession): Promise<UserSession>;

  // Dashboard stats
  getDashboardStats(): Promise<{
    totalPageViews: number;
    totalContacts: number;
    totalSessions: number;
    aiInteractions: number;
  }>;
  getAiInteractionStats(): Promise<{
    totalInteractions: number;
    clickedRecommendations: number;
  }>;
  getTopPages(limit: number): Promise<Array<{ path: string; count: number }>>;
  getDeviceStats(): Promise<Array<{ device: string; count: number }>>;
  getCountryStats(): Promise<Array<{ country: string; count: number }>>;

  // Admin users
  createAdminUser(user: InsertAdminUser): Promise<AdminUser>;
  getAdminUserByEmail(email: string): Promise<AdminUser | undefined>;
  updateAdminUserLastLogin(id: number): Promise<void>;

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

  async createAiInteraction(interaction: InsertAiInteraction): Promise<AiInteraction> {
    const [ai] = await db
      .insert(aiInteractions)
      .values(interaction)
      .returning();
    return ai;
  }

  async createUserSession(session: InsertUserSession): Promise<UserSession> {
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
    aiInteractions: number;
  }> {
    const [pageViewCount] = await db.select({ count: count() }).from(pageViews);
    const [contactCount] = await db.select({ count: count() }).from(contactSubmissions);
    const [sessionCount] = await db.select({ count: count() }).from(userSessions);
    const [aiCount] = await db.select({ count: count() }).from(aiInteractions);

    return {
      totalPageViews: pageViewCount.count,
      totalContacts: contactCount.count,
      totalSessions: sessionCount.count,
      aiInteractions: aiCount.count
    };
  }

  async getAiInteractionStats(): Promise<{
    totalInteractions: number;
    clickedRecommendations: number;
  }> {
    const [totalResult] = await db.select({ count: count() }).from(aiInteractions);
    const [clickedResult] = await db
      .select({ count: count() })
      .from(aiInteractions)
      .where(eq(aiInteractions.clickedRecommendation, true));

    return {
      totalInteractions: totalResult.count,
      clickedRecommendations: clickedResult.count
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

  async getContentBlocks(page?: string): Promise<ContentBlock[]> {
    if (page) {
      return await db
        .select()
        .from(contentBlocks)
        .where(eq(contentBlocks.page, page))
        .orderBy(contentBlocks.position);
    }
    return await db
      .select()
      .from(contentBlocks)
      .orderBy(contentBlocks.page, contentBlocks.position);
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
}

export const storage = new DatabaseStorage();