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
  integrations,
  userActivities,
  pages,
  pageComponents,
  pageTemplates,
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
  type SystemLog,
  type Integration,
  type InsertIntegration,
  type UserActivity,
  type InsertUserActivity,
  type Page,
  type InsertPage,
  type PageComponent,
  type InsertPageComponent,
  type PageTemplate,
  type InsertPageTemplate
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, count, and, gte, sql, asc } from "drizzle-orm";

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

  // Integrations
  createIntegration(integration: InsertIntegration): Promise<Integration>;
  getIntegrations(): Promise<Integration[]>;
  updateIntegration(id: number, updates: Partial<Integration>): Promise<Integration>;
  deleteIntegration(id: number): Promise<void>;
  getIntegrationById(id: number): Promise<Integration | undefined>;

  // User activities
  createUserActivity(activity: InsertUserActivity): Promise<UserActivity>;
  getUserActivities(adminUserId?: number, limit?: number): Promise<UserActivity[]>;

  // Admin user management
  getAllAdminUsers(): Promise<AdminUser[]>;
  updateAdminUser(id: number, updates: Partial<AdminUser>): Promise<AdminUser>;
  deleteAdminUser(id: number): Promise<void>;

  // Dashboard analytics
  getDashboardStats(): Promise<{
    totalPageViews: number;
    totalContacts: number;
    totalSessions: number;
    aiInteractions: number;
  }>;

  // Page builder operations
  createPage(page: InsertPage): Promise<Page>;
  getPages(status?: string): Promise<Page[]>;
  getPageById(id: number): Promise<Page | undefined>;
  getPageBySlug(slug: string): Promise<Page | undefined>;
  updatePage(id: number, updates: Partial<Page>): Promise<Page>;
  deletePage(id: number): Promise<void>;

  // Page components operations
  createPageComponent(component: InsertPageComponent): Promise<PageComponent>;
  getPageComponents(pageId: number): Promise<PageComponent[]>;
  updatePageComponent(id: number, updates: Partial<PageComponent>): Promise<PageComponent>;
  deletePageComponent(id: number): Promise<void>;
  reorderPageComponents(pageId: number, componentIds: number[]): Promise<void>;

  // Page templates operations
  createPageTemplate(template: InsertPageTemplate): Promise<PageTemplate>;
  getPageTemplates(): Promise<PageTemplate[]>;
  getPageTemplateById(id: number): Promise<PageTemplate | undefined>;
  updatePageTemplate(id: number, updates: Partial<PageTemplate>): Promise<PageTemplate>;
  deletePageTemplate(id: number): Promise<void>;
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

  // Integrations
  async createIntegration(integration: InsertIntegration): Promise<Integration> {
    const [newIntegration] = await db.insert(integrations).values(integration).returning();
    return newIntegration;
  }

  async getIntegrations(): Promise<Integration[]> {
    return await db.select().from(integrations).orderBy(desc(integrations.createdAt));
  }

  async updateIntegration(id: number, updates: Partial<Integration>): Promise<Integration> {
    const [updated] = await db.update(integrations)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(integrations.id, id))
      .returning();
    return updated;
  }

  async deleteIntegration(id: number): Promise<void> {
    await db.delete(integrations).where(eq(integrations.id, id));
  }

  async getIntegrationById(id: number): Promise<Integration | undefined> {
    const [integration] = await db.select().from(integrations).where(eq(integrations.id, id));
    return integration || undefined;
  }

  // User activities
  async createUserActivity(activity: InsertUserActivity): Promise<UserActivity> {
    const [newActivity] = await db.insert(userActivities).values(activity).returning();
    return newActivity;
  }

  async getUserActivities(adminUserId?: number, limit = 100): Promise<UserActivity[]> {
    let query = db.select().from(userActivities);
    
    if (adminUserId) {
      query = query.where(eq(userActivities.adminUserId, adminUserId));
    }
    
    return await query.orderBy(desc(userActivities.createdAt)).limit(limit);
  }

  // Admin user management
  async getAllAdminUsers(): Promise<AdminUser[]> {
    return await db.select().from(adminUsers).orderBy(asc(adminUsers.name));
  }

  async updateAdminUser(id: number, updates: Partial<AdminUser>): Promise<AdminUser> {
    const [updated] = await db.update(adminUsers)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(adminUsers.id, id))
      .returning();
    return updated;
  }

  async deleteAdminUser(id: number): Promise<void> {
    await db.delete(adminUsers).where(eq(adminUsers.id, id));
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

  // Page builder operations
  async createPage(insertPage: InsertPage): Promise<Page> {
    const [page] = await db
      .insert(pages)
      .values(insertPage)
      .returning();
    return page;
  }

  async getPages(status?: string): Promise<Page[]> {
    if (status) {
      return await db.select().from(pages).where(eq(pages.status, status)).orderBy(desc(pages.updatedAt));
    }
    return await db.select().from(pages).orderBy(desc(pages.updatedAt));
  }

  async getPageById(id: number): Promise<Page | undefined> {
    const [page] = await db.select().from(pages).where(eq(pages.id, id));
    return page;
  }

  async getPageBySlug(slug: string): Promise<Page | undefined> {
    const [page] = await db.select().from(pages).where(eq(pages.slug, slug));
    return page;
  }

  async updatePage(id: number, updates: Partial<Page>): Promise<Page> {
    const [page] = await db
      .update(pages)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(pages.id, id))
      .returning();
    return page;
  }

  async deletePage(id: number): Promise<void> {
    await db.delete(pages).where(eq(pages.id, id));
  }

  // Page components operations
  async createPageComponent(component: InsertPageComponent): Promise<PageComponent> {
    const [pageComponent] = await db
      .insert(pageComponents)
      .values(component)
      .returning();
    return pageComponent;
  }

  async getPageComponents(pageId: number): Promise<PageComponent[]> {
    return await db
      .select()
      .from(pageComponents)
      .where(eq(pageComponents.pageId, pageId))
      .orderBy(pageComponents.sortOrder);
  }

  async updatePageComponent(id: number, updates: Partial<PageComponent>): Promise<PageComponent> {
    const [component] = await db
      .update(pageComponents)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(pageComponents.id, id))
      .returning();
    return component;
  }

  async deletePageComponent(id: number): Promise<void> {
    await db.delete(pageComponents).where(eq(pageComponents.id, id));
  }

  async reorderPageComponents(pageId: number, componentIds: number[]): Promise<void> {
    for (let i = 0; i < componentIds.length; i++) {
      await db
        .update(pageComponents)
        .set({ sortOrder: i, updatedAt: new Date() })
        .where(and(eq(pageComponents.id, componentIds[i]), eq(pageComponents.pageId, pageId)));
    }
  }

  // Page templates operations
  async createPageTemplate(template: InsertPageTemplate): Promise<PageTemplate> {
    const [pageTemplate] = await db
      .insert(pageTemplates)
      .values(template)
      .returning();
    return pageTemplate;
  }

  async getPageTemplates(): Promise<PageTemplate[]> {
    return await db.select().from(pageTemplates).where(eq(pageTemplates.isActive, true));
  }

  async getPageTemplateById(id: number): Promise<PageTemplate | undefined> {
    const [template] = await db.select().from(pageTemplates).where(eq(pageTemplates.id, id));
    return template;
  }

  async updatePageTemplate(id: number, updates: Partial<PageTemplate>): Promise<PageTemplate> {
    const [template] = await db
      .update(pageTemplates)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(pageTemplates.id, id))
      .returning();
    return template;
  }

  async deletePageTemplate(id: number): Promise<void> {
    await db.delete(pageTemplates).where(eq(pageTemplates.id, id));
  }
}

export const storage = new DatabaseStorage();
