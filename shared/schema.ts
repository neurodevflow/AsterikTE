import { pgTable, text, serial, integer, boolean, timestamp, jsonb, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Basic user management
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Admin users with enhanced permissions
export const adminUsers = pgTable("admin_users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  name: text("name").notNull(),
  role: text("role").notNull().default("admin"), // admin, super_admin
  isActive: boolean("is_active").notNull().default(true),
  lastLogin: timestamp("last_login"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Website analytics and tracking
export const pageViews = pgTable("page_views", {
  id: serial("id").primaryKey(),
  path: text("path").notNull(),
  userAgent: text("user_agent"),
  ipAddress: text("ip_address"),
  referrer: text("referrer"),
  sessionId: text("session_id"),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
  country: text("country"),
  device: text("device"), // mobile, desktop, tablet
});

// Contact form submissions and leads
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  source: text("source").default("contact_form"), // contact_form, ai_recommendation, etc.
  status: text("status").notNull().default("new"), // new, contacted, qualified, closed
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Email marketing campaigns
export const emailCampaigns = pgTable("email_campaigns", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  subject: text("subject").notNull(),
  content: text("content").notNull(),
  status: text("status").notNull().default("draft"), // draft, scheduled, sent, cancelled
  recipientCount: integer("recipient_count").default(0),
  openCount: integer("open_count").default(0),
  clickCount: integer("click_count").default(0),
  scheduledAt: timestamp("scheduled_at"),
  sentAt: timestamp("sent_at"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Content management for dynamic website updates
export const contentBlocks = pgTable("content_blocks", {
  id: serial("id").primaryKey(),
  key: text("key").notNull().unique(), // hero_title, about_text, etc.
  title: text("title").notNull(),
  content: text("content").notNull(),
  type: text("type").notNull().default("text"), // text, html, image, json
  page: text("page"), // home, about, services, etc.
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// User activity and heatmap data
export const userSessions = pgTable("user_sessions", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull().unique(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  country: text("country"),
  device: text("device"),
  startTime: timestamp("start_time").notNull().defaultNow(),
  endTime: timestamp("end_time"),
  pageCount: integer("page_count").default(1),
  duration: integer("duration"), // in seconds
});

// AI recommendation interactions
export const aiInteractions = pgTable("ai_interactions", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  currentPage: text("current_page").notNull(),
  recommendationsShown: jsonb("recommendations_shown").notNull(),
  clickedRecommendation: text("clicked_recommendation"),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
});

// System logs for monitoring
export const systemLogs = pgTable("system_logs", {
  id: serial("id").primaryKey(),
  level: text("level").notNull(), // info, warning, error
  message: text("message").notNull(),
  details: jsonb("details"),
  source: text("source"), // gemini_api, email_service, etc.
  timestamp: timestamp("timestamp").notNull().defaultNow(),
});

// Third-party integrations (Zapier, Brevo, etc.)
export const integrations = pgTable("integrations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(), // 'zapier', 'brevo', etc.
  apiKey: text("api_key"),
  apiSecret: text("api_secret"),
  webhookUrl: text("webhook_url"),
  isActive: boolean("is_active").notNull().default(false),
  settings: jsonb("settings"),
  lastSyncAt: timestamp("last_sync_at"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// User activity tracking for audit logs
export const userActivities = pgTable("user_activities", {
  id: serial("id").primaryKey(),
  adminUserId: integer("admin_user_id").references(() => adminUsers.id),
  activity: text("activity").notNull(),
  details: jsonb("details"),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Page builder tables
export const pages = pgTable("pages", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  status: text("status").notNull().default("draft"), // draft, published, archived
  template: text("template").default("default"),
  seoTitle: text("seo_title"),
  seoDescription: text("seo_description"),
  seoKeywords: text("seo_keywords"),
  featuredImage: text("featured_image"),
  publishedAt: timestamp("published_at"),
  createdBy: integer("created_by").references(() => adminUsers.id),
  updatedBy: integer("updated_by").references(() => adminUsers.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const pageComponents = pgTable("page_components", {
  id: serial("id").primaryKey(),
  pageId: integer("page_id").references(() => pages.id, { onDelete: "cascade" }),
  type: text("type").notNull(), // hero, content, gallery, cta, etc.
  name: text("name"),
  content: jsonb("content").notNull(), // Stores component data
  settings: jsonb("settings"), // Stores component settings
  sortOrder: integer("sort_order").default(0),
  isVisible: boolean("is_visible").default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const pageTemplates = pgTable("page_templates", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  structure: jsonb("structure").notNull(), // Template structure definition
  isActive: boolean("is_active").default(true),
  createdBy: integer("created_by").references(() => adminUsers.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Insert schemas for form validation
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertAdminUserSchema = createInsertSchema(adminUsers).pick({
  email: true,
  passwordHash: true,
  name: true,
  role: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  company: true,
  phone: true,
  subject: true,
  message: true,
  source: true,
});

export const insertEmailCampaignSchema = createInsertSchema(emailCampaigns).pick({
  name: true,
  subject: true,
  content: true,
  scheduledAt: true,
});

export const insertContentBlockSchema = createInsertSchema(contentBlocks).pick({
  key: true,
  title: true,
  content: true,
  type: true,
  page: true,
});

export const insertPageViewSchema = createInsertSchema(pageViews).pick({
  path: true,
  userAgent: true,
  ipAddress: true,
  referrer: true,
  sessionId: true,
  country: true,
  device: true,
});

export const insertIntegrationSchema = createInsertSchema(integrations).pick({
  name: true,
  type: true,
  apiKey: true,
  apiSecret: true,
  webhookUrl: true,
  settings: true,
});

export const insertUserActivitySchema = createInsertSchema(userActivities).pick({
  adminUserId: true,
  activity: true,
  details: true,
  ipAddress: true,
  userAgent: true,
});

export const insertPageSchema = createInsertSchema(pages).pick({
  title: true,
  slug: true,
  description: true,
  status: true,
  template: true,
  seoTitle: true,
  seoDescription: true,
  seoKeywords: true,
  featuredImage: true,
  publishedAt: true,
});

export const insertPageComponentSchema = createInsertSchema(pageComponents).pick({
  pageId: true,
  type: true,
  name: true,
  content: true,
  settings: true,
  sortOrder: true,
  isVisible: true,
});

export const insertPageTemplateSchema = createInsertSchema(pageTemplates).pick({
  name: true,
  description: true,
  structure: true,
  isActive: true,
});

// Dashboard widget customization tables
export const dashboardWidgets = pgTable("dashboard_widgets", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  type: varchar("type", { length: 100 }).notNull(), // 'chart', 'metric', 'list', 'custom'
  category: varchar("category", { length: 100 }).notNull(), // 'analytics', 'content', 'users', 'system'
  description: text("description"),
  defaultConfig: jsonb("default_config").notNull().default({}),
  isActive: boolean("is_active").notNull().default(true),
  minWidth: integer("min_width").default(1),
  minHeight: integer("min_height").default(1),
  maxWidth: integer("max_width").default(12),
  maxHeight: integer("max_height").default(12),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const userDashboards = pgTable("user_dashboards", {
  id: serial("id").primaryKey(),
  adminUserId: integer("admin_user_id").references(() => adminUsers.id).notNull(),
  name: varchar("name", { length: 255 }).notNull().default("My Dashboard"),
  layout: jsonb("layout").notNull().default([]), // Grid layout configuration
  isDefault: boolean("is_default").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const dashboardWidgetInstances = pgTable("dashboard_widget_instances", {
  id: serial("id").primaryKey(),
  dashboardId: integer("dashboard_id").references(() => userDashboards.id, { onDelete: "cascade" }).notNull(),
  widgetId: integer("widget_id").references(() => dashboardWidgets.id).notNull(),
  title: varchar("title", { length: 255 }),
  config: jsonb("config").notNull().default({}),
  position: jsonb("position").notNull().default({}), // {x, y, w, h}
  isVisible: boolean("is_visible").notNull().default(true),
  refreshInterval: integer("refresh_interval").default(300), // seconds
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Dashboard widget schemas
export const insertDashboardWidgetSchema = createInsertSchema(dashboardWidgets).pick({
  name: true,
  type: true,
  category: true,
  description: true,
  defaultConfig: true,
  isActive: true,
  minWidth: true,
  minHeight: true,
  maxWidth: true,
  maxHeight: true,
});

export const insertUserDashboardSchema = createInsertSchema(userDashboards).pick({
  adminUserId: true,
  name: true,
  layout: true,
  isDefault: true,
});

export const insertDashboardWidgetInstanceSchema = createInsertSchema(dashboardWidgetInstances).pick({
  dashboardId: true,
  widgetId: true,
  title: true,
  config: true,
  position: true,
  isVisible: true,
  refreshInterval: true,
});

// Type exports
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertAdminUser = z.infer<typeof insertAdminUserSchema>;
export type AdminUser = typeof adminUsers.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertEmailCampaign = z.infer<typeof insertEmailCampaignSchema>;
export type EmailCampaign = typeof emailCampaigns.$inferSelect;
export type InsertContentBlock = z.infer<typeof insertContentBlockSchema>;
export type ContentBlock = typeof contentBlocks.$inferSelect;
export type InsertPageView = z.infer<typeof insertPageViewSchema>;
export type PageView = typeof pageViews.$inferSelect;
export type UserSession = typeof userSessions.$inferSelect;
export type AiInteraction = typeof aiInteractions.$inferSelect;
export type SystemLog = typeof systemLogs.$inferSelect;
export type Integration = typeof integrations.$inferSelect;
export type InsertIntegration = z.infer<typeof insertIntegrationSchema>;
export type UserActivity = typeof userActivities.$inferSelect;
export type InsertUserActivity = z.infer<typeof insertUserActivitySchema>;
export type Page = typeof pages.$inferSelect;
export type InsertPage = z.infer<typeof insertPageSchema>;
export type PageComponent = typeof pageComponents.$inferSelect;
export type InsertPageComponent = z.infer<typeof insertPageComponentSchema>;
export type PageTemplate = typeof pageTemplates.$inferSelect;
export type InsertPageTemplate = z.infer<typeof insertPageTemplateSchema>;
export type DashboardWidget = typeof dashboardWidgets.$inferSelect;
export type InsertDashboardWidget = z.infer<typeof insertDashboardWidgetSchema>;
export type UserDashboard = typeof userDashboards.$inferSelect;
export type InsertUserDashboard = z.infer<typeof insertUserDashboardSchema>;
export type DashboardWidgetInstance = typeof dashboardWidgetInstances.$inferSelect;
export type InsertDashboardWidgetInstance = z.infer<typeof insertDashboardWidgetInstanceSchema>;
