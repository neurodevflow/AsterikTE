import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

import { useToast } from '@/hooks/use-toast';
import DashboardCustomizer from '@/components/DashboardCustomizer';
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
import PageBuilder from './PageBuilder';

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
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    // Get token and user from localStorage
    const adminToken = localStorage.getItem('adminToken');
    const adminUser = localStorage.getItem('adminUser');
    
    if (adminToken && adminUser) {
      setToken(adminToken);
      setUser(JSON.parse(adminUser));
      fetchStats(adminToken);
    } else {
      // Redirect to login if no token
      window.location.href = '/admin/login';
    }
  }, []);

  const fetchStats = async (authToken?: string) => {
    try {
      const currentToken = authToken || token;
      if (!currentToken) {
        console.log('No token available for stats fetch');
        return;
      }

      console.log('Fetching stats with token:', currentToken.substring(0, 20) + '...');
      const response = await fetch('/api/admin/dashboard/stats', {
        headers: {
          'Authorization': `Bearer ${currentToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Stats data received:', data);
        setStats(data);
      } else {
        console.log('Stats fetch failed with status:', response.status);
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
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    window.location.href = '/admin/login';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-300">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4 shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Asterik Admin Dashboard
            </h1>
            <p className="text-gray-300">
              Welcome back, {user?.name}
            </p>
          </div>
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="flex items-center gap-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-9 h-auto bg-gray-800 border border-gray-700">
            <TabsTrigger value="overview" className="flex items-center gap-2 text-xs data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white hover:bg-gray-700">
              <BarChart3 className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2 text-xs data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white hover:bg-gray-700">
              <TrendingUp className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="pagebuilder" className="flex items-center gap-2 text-xs data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white hover:bg-gray-700">
              <FileText className="h-4 w-4" />
              Page Builder
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2 text-xs data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white hover:bg-gray-700">
              <UserCog className="h-4 w-4" />
              Users
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2 text-xs data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white hover:bg-gray-700">
              <Settings className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="integrations" className="flex items-center gap-2 text-xs data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white hover:bg-gray-700">
              <Zap className="h-4 w-4" />
              Integrations
            </TabsTrigger>
            <TabsTrigger value="contacts" className="flex items-center gap-2 text-xs data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white hover:bg-gray-700">
              <Users className="h-4 w-4" />
              Contacts
            </TabsTrigger>
            <TabsTrigger value="emails" className="flex items-center gap-2 text-xs data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white hover:bg-gray-700">
              <Mail className="h-4 w-4" />
              Emails
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2 text-xs data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white hover:bg-gray-700">
              <FileText className="h-4 w-4" />
              Content
            </TabsTrigger>
            <TabsTrigger value="customize" className="flex items-center gap-2 text-xs data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300 hover:text-white hover:bg-gray-700">
              <Settings className="h-4 w-4" />
              Customize
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Total Page Views</CardTitle>
                  <Globe className="h-4 w-4 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-400">
                    {stats?.totalPageViews || 0}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Contact Submissions</CardTitle>
                  <Users className="h-4 w-4 text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-400">
                    {stats?.totalContacts || 0}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">User Sessions</CardTitle>
                  <Smartphone className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-400">
                    {stats?.totalSessions || 0}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">AI Interactions</CardTitle>
                  <Target className="h-4 w-4 text-orange-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-400">
                    {stats?.aiInteractions || 0}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Top Pages</CardTitle>
                  <CardDescription className="text-gray-300">Most visited pages on your website</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {stats?.topPages?.slice(0, 5).map((page, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-gray-300">{page.path}</span>
                        <span className="text-sm font-medium text-blue-400">{page.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Device Breakdown</CardTitle>
                  <CardDescription className="text-gray-300">Visitor device types</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {stats?.deviceStats?.map((device, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-gray-300 capitalize">{device.device}</span>
                        <span className="text-sm font-medium text-blue-400">{device.count}</span>
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

          <TabsContent value="pagebuilder">
            <PageBuilder />
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

          <TabsContent value="customize" className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Settings className="h-5 w-5" />
                  Dashboard Customization
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Personalize your dashboard layout by adding, removing, and arranging widgets to fit your workflow.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DashboardCustomizer token={token} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}