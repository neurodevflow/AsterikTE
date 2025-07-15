import { db } from "../server/db";
import { dashboardWidgets, userDashboards, dashboardWidgetInstances } from "../shared/schema";

const defaultWidgets = [
  {
    name: "Analytics Overview",
    type: "chart",
    category: "analytics",
    description: "Displays website analytics including page views and visitor statistics",
    defaultConfig: {
      chartType: "line",
      timeRange: "7d",
      metrics: ["pageViews", "uniqueVisitors"]
    },
    minWidth: 2,
    minHeight: 2,
    maxWidth: 6,
    maxHeight: 4
  },
  {
    name: "Page Views Counter",
    type: "metric",
    category: "analytics",
    description: "Shows total page views with percentage change",
    defaultConfig: {
      metric: "pageViews",
      showPercentageChange: true,
      timeRange: "24h"
    },
    minWidth: 1,
    minHeight: 1,
    maxWidth: 2,
    maxHeight: 2
  },
  {
    name: "Contact Submissions",
    type: "metric",
    category: "content",
    description: "Displays new contact form submissions",
    defaultConfig: {
      metric: "contactSubmissions",
      showUnread: true,
      timeRange: "24h"
    },
    minWidth: 1,
    minHeight: 1,
    maxWidth: 2,
    maxHeight: 2
  },
  {
    name: "Recent Activities",
    type: "list",
    category: "users",
    description: "Shows recent user activities and admin actions",
    defaultConfig: {
      limit: 10,
      showUserDetails: true,
      refreshInterval: 300
    },
    minWidth: 2,
    minHeight: 2,
    maxWidth: 4,
    maxHeight: 6
  },
  {
    name: "System Status",
    type: "metric",
    category: "system",
    description: "Displays system health and performance metrics",
    defaultConfig: {
      metrics: ["uptime", "memoryUsage", "diskSpace"],
      alertThresholds: { memory: 80, disk: 90 }
    },
    minWidth: 1,
    minHeight: 1,
    maxWidth: 3,
    maxHeight: 2
  },
  {
    name: "Top Pages",
    type: "chart",
    category: "analytics",
    description: "Shows most visited pages and their traffic",
    defaultConfig: {
      chartType: "bar",
      limit: 10,
      timeRange: "7d"
    },
    minWidth: 2,
    minHeight: 2,
    maxWidth: 4,
    maxHeight: 3
  },
  {
    name: "Email Campaigns",
    type: "list",
    category: "content",
    description: "Displays email campaign status and performance",
    defaultConfig: {
      showStatus: true,
      limit: 5,
      sortBy: "createdAt"
    },
    minWidth: 2,
    minHeight: 2,
    maxWidth: 4,
    maxHeight: 4
  },
  {
    name: "AI Interactions",
    type: "metric",
    category: "analytics",
    description: "Shows AI recommendation clicks and engagement",
    defaultConfig: {
      metric: "aiInteractions",
      showClickRate: true,
      timeRange: "7d"
    },
    minWidth: 1,
    minHeight: 1,
    maxWidth: 2,
    maxHeight: 2
  },
  {
    name: "User Sessions",
    type: "chart",
    category: "analytics",
    description: "Tracks user session data and duration",
    defaultConfig: {
      chartType: "area",
      timeRange: "24h",
      showDuration: true
    },
    minWidth: 2,
    minHeight: 2,
    maxWidth: 6,
    maxHeight: 3
  },
  {
    name: "Quick Actions",
    type: "custom",
    category: "system",
    description: "Provides quick access to common admin actions",
    defaultConfig: {
      actions: ["newPage", "newCampaign", "viewContacts", "analytics"],
      layout: "grid"
    },
    minWidth: 1,
    minHeight: 1,
    maxWidth: 2,
    maxHeight: 2
  }
];

async function initDashboardWidgets() {
  try {
    console.log("Initializing dashboard widgets...");
    
    // Check if widgets already exist
    const existingWidgets = await db.select().from(dashboardWidgets);
    if (existingWidgets.length > 0) {
      console.log("Dashboard widgets already initialized. Skipping...");
      return;
    }
    
    // Insert default widgets
    const insertedWidgets = await db
      .insert(dashboardWidgets)
      .values(defaultWidgets)
      .returning();
    
    console.log(`Inserted ${insertedWidgets.length} default dashboard widgets`);
    
    // Get the admin user (assuming first admin user for initial setup)
    const adminUsers = await db.query.adminUsers.findMany();
    if (adminUsers.length === 0) {
      console.log("No admin users found. Dashboard widgets created but no default dashboard assigned.");
      return;
    }
    
    const firstAdmin = adminUsers[0];
    
    // Create a default dashboard for the first admin user
    const [defaultDashboard] = await db
      .insert(userDashboards)
      .values({
        adminUserId: firstAdmin.id,
        name: "Default Dashboard",
        layout: [],
        isDefault: true
      })
      .returning();
    
    console.log(`Created default dashboard for admin user: ${firstAdmin.email}`);
    
    // Add some default widget instances to the dashboard
    const defaultInstances = [
      {
        dashboardId: defaultDashboard.id,
        widgetId: insertedWidgets.find(w => w.name === "Analytics Overview")?.id!,
        title: "Website Analytics",
        position: { x: 0, y: 0, w: 4, h: 3 },
        config: {}
      },
      {
        dashboardId: defaultDashboard.id,
        widgetId: insertedWidgets.find(w => w.name === "Page Views Counter")?.id!,
        title: "Total Page Views",
        position: { x: 4, y: 0, w: 2, h: 1 },
        config: {}
      },
      {
        dashboardId: defaultDashboard.id,
        widgetId: insertedWidgets.find(w => w.name === "Contact Submissions")?.id!,
        title: "New Contacts",
        position: { x: 4, y: 1, w: 2, h: 1 },
        config: {}
      },
      {
        dashboardId: defaultDashboard.id,
        widgetId: insertedWidgets.find(w => w.name === "Recent Activities")?.id!,
        title: "Recent Activity",
        position: { x: 0, y: 3, w: 3, h: 3 },
        config: {}
      },
      {
        dashboardId: defaultDashboard.id,
        widgetId: insertedWidgets.find(w => w.name === "System Status")?.id!,
        title: "System Health",
        position: { x: 3, y: 3, w: 2, h: 2 },
        config: {}
      },
      {
        dashboardId: defaultDashboard.id,
        widgetId: insertedWidgets.find(w => w.name === "Quick Actions")?.id!,
        title: "Quick Actions",
        position: { x: 5, y: 3, w: 1, h: 2 },
        config: {}
      }
    ];
    
    await db
      .insert(dashboardWidgetInstances)
      .values(defaultInstances);
    
    console.log(`Added ${defaultInstances.length} widget instances to default dashboard`);
    console.log("Dashboard widgets initialization completed successfully!");
    
  } catch (error) {
    console.error("Error initializing dashboard widgets:", error);
    process.exit(1);
  }
}

// Run the initialization immediately when the script is executed
initDashboardWidgets().then(() => {
  process.exit(0);
}).catch(error => {
  console.error(error);
  process.exit(1);
});

export { initDashboardWidgets };