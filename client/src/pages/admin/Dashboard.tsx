import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { 
  BarChart3, 
  Users, 
  Mail, 
  FileText, 
  Settings, 
  LogOut,
  TrendingUp,
  Globe,
  Smartphone,
  Target,
  Zap,
  UserCog
} from 'lucide-react';
import ContactsManager from '@/components/admin/ContactsManager';
import EmailCampaigns from '@/components/admin/EmailCampaigns';
import ContentManager from '@/components/admin/ContentManager';
import AnalyticsDashboard from '@/components/admin/AnalyticsDashboard';
import EnhancedAnalytics from '@/components/admin/EnhancedAnalytics';
import UserManagement from '@/components/admin/UserManagement';
import ProfileSettings from '@/components/admin/ProfileSettings';
import IntegrationsManager from '@/components/admin/IntegrationsManager';

interface DashboardStats {
  totalPageViews: number;
  totalContacts: number;
  totalSessions: number;
  aiInteractions: number;
  totalInteractions: number;
  clickedRecommendations: number;
  topPages: Array<{ path: string; count: number }>;
  deviceStats: Array<{ device: string; count: number }>;
  countryStats: Array<{ country: string; count: number }>;
}

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const { user, logout, token } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/dashboard/stats', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setStats(data);
      } else {
        toast({
          title: 'Error',
          description: 'Failed to fetch dashboard statistics',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred while fetching data',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    window.location.href = '/admin/login';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-soft-beige flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy-blue mx-auto"></div>
          <p className="mt-4 text-charcoal">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft-beige">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-navy-blue">
              Asterik Admin Dashboard
            </h1>
            <p className="text-charcoal">
              Welcome back, {user?.name}
            </p>
          </div>
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-8 h-auto">
            <TabsTrigger value="overview" className="flex items-center gap-2 text-xs">
              <BarChart3 className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2 text-xs">
              <TrendingUp className="h-4 w-4" />
              Enhanced Analytics
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2 text-xs">
              <UserCog className="h-4 w-4" />
              User Management
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2 text-xs">
              <Settings className="h-4 w-4" />
              Profile Settings
            </TabsTrigger>
            <TabsTrigger value="integrations" className="flex items-center gap-2 text-xs">
              <Zap className="h-4 w-4" />
              Integrations
            </TabsTrigger>
            <TabsTrigger value="contacts" className="flex items-center gap-2 text-xs">
              <Users className="h-4 w-4" />
              Contacts
            </TabsTrigger>
            <TabsTrigger value="emails" className="flex items-center gap-2 text-xs">
              <Mail className="h-4 w-4" />
              Email Campaigns
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2 text-xs">
              <FileText className="h-4 w-4" />
              Content
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Page Views</CardTitle>
                  <Globe className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-navy-blue">
                    {stats?.totalPageViews || 0}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Contact Submissions</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-navy-blue">
                    {stats?.totalContacts || 0}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">User Sessions</CardTitle>
                  <Smartphone className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-navy-blue">
                    {stats?.totalSessions || 0}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">AI Interactions</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-navy-blue">
                    {stats?.aiInteractions || 0}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Pages</CardTitle>
                  <CardDescription>Most visited pages on your website</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {stats?.topPages?.slice(0, 5).map((page, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-charcoal">{page.path}</span>
                        <span className="text-sm font-medium text-navy-blue">{page.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Device Breakdown</CardTitle>
                  <CardDescription>Visitor device types</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {stats?.deviceStats?.map((device, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-charcoal capitalize">{device.device}</span>
                        <span className="text-sm font-medium text-navy-blue">{device.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <EnhancedAnalytics stats={stats} token={token} />
          </TabsContent>

          <TabsContent value="users">
            <UserManagement token={token} />
          </TabsContent>

          <TabsContent value="profile">
            <ProfileSettings token={token} />
          </TabsContent>

          <TabsContent value="integrations">
            <IntegrationsManager token={token} />
          </TabsContent>

          <TabsContent value="contacts">
            <ContactsManager token={token} />
          </TabsContent>

          <TabsContent value="emails">
            <EmailCampaigns token={token} />
          </TabsContent>

          <TabsContent value="content">
            <ContentManager token={token} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}