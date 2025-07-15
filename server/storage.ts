import { 
  users, 
  adminUsers,
  contactSubmissions,
  pageViews,
  emailCampaigns,
  contentBlocks,
  userSessions,
  aiInteractions,
  systemLogs,
  type User, 
  type InsertUser,
  type AdminUser,
  type InsertAdminUser,
  type ContactSubmission,
  type InsertContactSubmission,
  type PageView,
  type InsertPageView,
  type EmailCampaign,
  type InsertEmailCampaign,
  type ContentBlock,
  type InsertContentBlock,
  type UserSession,
  type AiInteraction,
  type SystemLog
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, count, and, gte, sql } from "drizzle-orm";

export interface IStorage {
  // Basic user operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Admin user operations
  getAdminUser(id: number): Promise<AdminUser | undefined>;
  getAdminUserByEmail(email: string): Promise<AdminUser | undefined>;
  createAdminUser(user: InsertAdminUser): Promise<AdminUser>;
  updateAdminUserLastLogin(id: number): Promise<void>;

  // Contact submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(limit?: number, offset?: number): Promise<ContactSubmission[]>;
  updateContactSubmissionStatus(id: number, status: string): Promise<ContactSubmission>;
  getContactSubmissionsCount(): Promise<number>;

  // Analytics and tracking
  createPageView(pageView: InsertPageView): Promise<PageView>;
  getPageViewsCount(startDate?: Date, endDate?: Date): Promise<number>;
  getTopPages(limit?: number): Promise<{path: string, count: number}[]>;
  getDeviceStats(): Promise<{device: string, count: number}[]>;
  getCountryStats(): Promise<{country: string, count: number}[]>;

  // Email campaigns
  createEmailCampaign(campaign: InsertEmailCampaign): Promise<EmailCampaign>;
  getEmailCampaigns(): Promise<EmailCampaign[]>;
  updateEmailCampaign(id: number, updates: Partial<EmailCampaign>): Promise<EmailCampaign>;
  deleteEmailCampaign(id: number): Promise<void>;

  // Content management
  createContentBlock(content: InsertContentBlock): Promise<ContentBlock>;
  getContentBlocks(page?: string): Promise<ContentBlock[]>;
  updateContentBlock(id: number, updates: Partial<ContentBlock>): Promise<ContentBlock>;
  getContentBlockByKey(key: string): Promise<ContentBlock | undefined>;

  // User sessions
  createUserSession(session: Partial<UserSession>): Promise<UserSession>;
  updateUserSession(sessionId: string, updates: Partial<UserSession>): Promise<void>;

  // AI interactions
  createAiInteraction(interaction: Partial<AiInteraction>): Promise<AiInteraction>;
  getAiInteractionStats(): Promise<{totalInteractions: number, clickedRecommendations: number}>;

  // System logs
  createSystemLog(log: Partial<SystemLog>): Promise<SystemLog>;
  getSystemLogs(level?: string, limit?: number): Promise<SystemLog[]>;

  // Dashboard analytics
  getDashboardStats(): Promise<{
    totalPageViews: number;
    totalContacts: number;
    totalSessions: number;
    aiInteractions: number;
  }>;
}

export class DatabaseStorage implements IStorage {
  // Basic user operations
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Admin user operations
  async getAdminUser(id: number): Promise<AdminUser | undefined> {
    const [admin] = await db.select().from(adminUsers).where(eq(adminUsers.id, id));
    return admin || undefined;
  }

  async getAdminUserByEmail(email: string): Promise<AdminUser | undefined> {
    const [admin] = await db.select().from(adminUsers).where(eq(adminUsers.email, email));
    return admin || undefined;
  }

  async createAdminUser(insertAdminUser: InsertAdminUser): Promise<AdminUser> {
    const [admin] = await db.insert(adminUsers).values(insertAdminUser).returning();
    return admin;
  }

  async updateAdminUserLastLogin(id: number): Promise<void> {
    await db.update(adminUsers)
      .set({ lastLogin: new Date() })
      .where(eq(adminUsers.id, id));
  }

  // Contact submissions
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [contact] = await db.insert(contactSubmissions).values(submission).returning();
    return contact;
  }

  async getContactSubmissions(limit = 50, offset = 0): Promise<ContactSubmission[]> {
    return await db.select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt))
      .limit(limit)
      .offset(offset);
  }

  async updateContactSubmissionStatus(id: number, status: string): Promise<ContactSubmission> {
    const [updated] = await db.update(contactSubmissions)
      .set({ status, updatedAt: new Date() })
      .where(eq(contactSubmissions.id, id))
      .returning();
    return updated;
  }

  async getContactSubmissionsCount(): Promise<number> {
    const [result] = await db.select({ count: count() }).from(contactSubmissions);
    return result.count;
  }

  // Analytics and tracking
  async createPageView(pageView: InsertPageView): Promise<PageView> {
    const [view] = await db.insert(pageViews).values(pageView).returning();
    return view;
  }

  async getPageViewsCount(startDate?: Date, endDate?: Date): Promise<number> {
    let query = db.select({ count: count() }).from(pageViews);
    
    if (startDate && endDate) {
      query = query.where(and(
        gte(pageViews.timestamp, startDate),
        sql`${pageViews.timestamp} <= ${endDate}`
      ));
    }
    
    const [result] = await query;
    return result.count;
  }

  async getTopPages(limit = 10): Promise<{path: string, count: number}[]> {
    return await db.select({
      path: pageViews.path,
      count: count()
    })
    .from(pageViews)
    .groupBy(pageViews.path)
    .orderBy(desc(count()))
    .limit(limit);
  }

  async getDeviceStats(): Promise<{device: string, count: number}[]> {
    return await db.select({
      device: pageViews.device,
      count: count()
    })
    .from(pageViews)
    .where(sql`${pageViews.device} IS NOT NULL`)
    .groupBy(pageViews.device)
    .orderBy(desc(count()));
  }

  async getCountryStats(): Promise<{country: string, count: number}[]> {
    return await db.select({
      country: pageViews.country,
      count: count()
    })
    .from(pageViews)
    .where(sql`${pageViews.country} IS NOT NULL`)
    .groupBy(pageViews.country)
    .orderBy(desc(count()))
    .limit(10);
  }

  // Email campaigns
  async createEmailCampaign(campaign: InsertEmailCampaign): Promise<EmailCampaign> {
    const [email] = await db.insert(emailCampaigns).values(campaign).returning();
    return email;
  }

  async getEmailCampaigns(): Promise<EmailCampaign[]> {
    return await db.select().from(emailCampaigns).orderBy(desc(emailCampaigns.createdAt));
  }

  async updateEmailCampaign(id: number, updates: Partial<EmailCampaign>): Promise<EmailCampaign> {
    const [updated] = await db.update(emailCampaigns)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(emailCampaigns.id, id))
      .returning();
    return updated;
  }

  async deleteEmailCampaign(id: number): Promise<void> {
    await db.delete(emailCampaigns).where(eq(emailCampaigns.id, id));
  }

  // Content management
  async createContentBlock(content: InsertContentBlock): Promise<ContentBlock> {
    const [block] = await db.insert(contentBlocks).values(content).returning();
    return block;
  }

  async getContentBlocks(page?: string): Promise<ContentBlock[]> {
    let query = db.select().from(contentBlocks).where(eq(contentBlocks.isActive, true));
    
    if (page) {
      query = query.where(eq(contentBlocks.page, page));
    }
    
    return await query.orderBy(contentBlocks.createdAt);
  }

  async updateContentBlock(id: number, updates: Partial<ContentBlock>): Promise<ContentBlock> {
    const [updated] = await db.update(contentBlocks)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(contentBlocks.id, id))
      .returning();
    return updated;
  }

  async getContentBlockByKey(key: string): Promise<ContentBlock | undefined> {
    const [block] = await db.select().from(contentBlocks).where(eq(contentBlocks.key, key));
    return block || undefined;
  }

  // User sessions
  async createUserSession(session: Partial<UserSession>): Promise<UserSession> {
    const [userSession] = await db.insert(userSessions).values(session as any).returning();
    return userSession;
  }

  async updateUserSession(sessionId: string, updates: Partial<UserSession>): Promise<void> {
    await db.update(userSessions)
      .set(updates)
      .where(eq(userSessions.sessionId, sessionId));
  }

  // AI interactions
  async createAiInteraction(interaction: Partial<AiInteraction>): Promise<AiInteraction> {
    const [ai] = await db.insert(aiInteractions).values(interaction as any).returning();
    return ai;
  }

  async getAiInteractionStats(): Promise<{totalInteractions: number, clickedRecommendations: number}> {
    const [total] = await db.select({ count: count() }).from(aiInteractions);
    const [clicked] = await db.select({ count: count() })
      .from(aiInteractions)
      .where(sql`${aiInteractions.clickedRecommendation} IS NOT NULL`);
    
    return {
      totalInteractions: total.count,
      clickedRecommendations: clicked.count
    };
  }

  // System logs
  async createSystemLog(log: Partial<SystemLog>): Promise<SystemLog> {
    const [systemLog] = await db.insert(systemLogs).values(log as any).returning();
    return systemLog;
  }

  async getSystemLogs(level?: string, limit = 100): Promise<SystemLog[]> {
    let query = db.select().from(systemLogs);
    
    if (level) {
      query = query.where(eq(systemLogs.level, level));
    }
    
    return await query.orderBy(desc(systemLogs.timestamp)).limit(limit);
  }

  // Dashboard analytics
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
}

export const storage = new DatabaseStorage();
