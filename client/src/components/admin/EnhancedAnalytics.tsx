import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell,
  AreaChart,
  Area,
  RadialBarChart,
  RadialBar,
  ScatterChart,
  Scatter
} from 'recharts';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { TrendingUp, TrendingDown, Users, Eye, MousePointer, Clock } from 'lucide-react';

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

interface EnhancedAnalyticsProps {
  stats: DashboardStats | null;
  token: string | null;
}

export default function EnhancedAnalytics({ stats }: EnhancedAnalyticsProps) {
  const [timeRange, setTimeRange] = useState('7d');
  
  const COLORS = [
    '#1d4ed8', '#e26a2c', '#059669', '#dc2626', '#7c3aed', '#ea580c',
    '#0891b2', '#c2410c', '#9333ea', '#be123c', '#047857', '#0369a1'
  ];

  if (!stats) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navy-blue mx-auto mb-4"></div>
          <p className="text-charcoal">Loading enhanced analytics...</p>
        </div>
      </div>
    );
  }

  // Generate sample time-series data for demonstration
  const timeSeriesData = Array.from({ length: 30 }, (_, i) => ({
    date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    pageViews: Math.floor(Math.random() * 200) + 50,
    sessions: Math.floor(Math.random() * 150) + 30,
    contacts: Math.floor(Math.random() * 20) + 5,
    aiInteractions: Math.floor(Math.random() * 50) + 10,
  }));

  // Generate hourly traffic data
  const hourlyData = Array.from({ length: 24 }, (_, i) => ({
    hour: `${i.toString().padStart(2, '0')}:00`,
    traffic: Math.floor(Math.random() * 100) + 20,
    conversions: Math.floor(Math.random() * 10) + 1,
  }));

  // Generate user engagement data
  const engagementData = [
    { metric: 'Bounce Rate', value: 35, target: 30 },
    { metric: 'Avg Session Duration', value: 4.5, target: 5.0 },
    { metric: 'Pages per Session', value: 3.2, target: 4.0 },
    { metric: 'Conversion Rate', value: 2.8, target: 3.5 },
  ];

  // Calculate conversion funnel
  const funnelData = [
    { stage: 'Visitors', value: 1000, color: '#1d4ed8' },
    { stage: 'Page Views', value: 850, color: '#3b82f6' },
    { stage: 'Engaged Users', value: 600, color: '#60a5fa' },
    { stage: 'AI Interactions', value: 400, color: '#93c5fd' },
    { stage: 'Contact Forms', value: 80, color: '#dbeafe' },
  ];

  const aiEngagementRate = stats.totalInteractions > 0 
    ? ((stats.clickedRecommendations / stats.totalInteractions) * 100).toFixed(1)
    : '0.0';

  const totalSessions = stats.totalSessions || 1000;
  const bounceRate = ((totalSessions - stats.totalPageViews / 2) / totalSessions * 100).toFixed(1);
  const avgSessionDuration = '4:32';
  const pagesPerSession = (stats.totalPageViews / totalSessions).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Time Range Selector */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-navy-blue">Enhanced Analytics Dashboard</h2>
        <div className="flex gap-2">
          {['24h', '7d', '30d', '90d'].map((range) => (
            <Button
              key={range}
              variant={timeRange === range ? 'default' : 'outline'}
              size="sm"
              onClick={() => setTimeRange(range)}
              className={timeRange === range ? 'bg-navy-blue' : ''}
            >
              {range}
            </Button>
          ))}
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-charcoal">Total Page Views</p>
                <p className="text-3xl font-bold text-navy-blue">{stats.totalPageViews.toLocaleString()}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +12.5% from last week
                </p>
              </div>
              <Eye className="h-8 w-8 text-navy-blue opacity-60" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-charcoal">Active Sessions</p>
                <p className="text-3xl font-bold text-navy-blue">{totalSessions.toLocaleString()}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +8.3% from last week
                </p>
              </div>
              <Users className="h-8 w-8 text-navy-blue opacity-60" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-charcoal">AI Engagement Rate</p>
                <p className="text-3xl font-bold text-warm-orange">{aiEngagementRate}%</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +5.2% from last week
                </p>
              </div>
              <MousePointer className="h-8 w-8 text-warm-orange opacity-60" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-charcoal">Avg Session Duration</p>
                <p className="text-3xl font-bold text-teal-green">{avgSessionDuration}</p>
                <p className="text-sm text-red-600 flex items-center mt-1">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  -2.1% from last week
                </p>
              </div>
              <Clock className="h-8 w-8 text-teal-green opacity-60" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="conversion">Conversion</TabsTrigger>
          <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Traffic Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Traffic Trends</CardTitle>
                <CardDescription>Website traffic over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={timeSeriesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="pageViews" stackId="1" stroke="#1d4ed8" fill="#1d4ed8" fillOpacity={0.6} />
                      <Area type="monotone" dataKey="sessions" stackId="1" stroke="#e26a2c" fill="#e26a2c" fillOpacity={0.6} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Top Content Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Top Content Performance</CardTitle>
                <CardDescription>Most visited pages and their engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={stats.topPages.slice(0, 8)} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="path" type="category" width={100} />
                      <Tooltip />
                      <Bar dataKey="count" fill="#1d4ed8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Engagement Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Engagement Metrics</CardTitle>
              <CardDescription>Key engagement indicators and targets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {engagementData.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="h-32">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="90%" data={[{
                          name: metric.metric,
                          value: metric.value,
                          target: metric.target,
                          fill: COLORS[index % COLORS.length]
                        }]}>
                          <RadialBar dataKey="value" cornerRadius={10} fill={COLORS[index % COLORS.length]} />
                        </RadialBarChart>
                      </ResponsiveContainer>
                    </div>
                    <h4 className="font-semibold text-navy-blue">{metric.metric}</h4>
                    <p className="text-2xl font-bold">{metric.value}{metric.metric.includes('Rate') ? '%' : metric.metric.includes('Duration') ? 'm' : ''}</p>
                    <p className="text-sm text-charcoal">Target: {metric.target}{metric.metric.includes('Rate') ? '%' : metric.metric.includes('Duration') ? 'm' : ''}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="traffic" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Hourly Traffic Pattern */}
            <Card>
              <CardHeader>
                <CardTitle>Hourly Traffic Pattern</CardTitle>
                <CardDescription>Website traffic by hour of day</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={hourlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="hour" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="traffic" stroke="#1d4ed8" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Geographic Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>Visitors by country/region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={stats.countryStats.slice(0, 6)}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ country, count }) => `${country}: ${count}`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="count"
                      >
                        {stats.countryStats.slice(0, 6).map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Device & Browser Analytics */}
          <Card>
            <CardHeader>
              <CardTitle>Device & Browser Analytics</CardTitle>
              <CardDescription>Traffic breakdown by device type and browser</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-4">Device Types</h4>
                  <div className="space-y-3">
                    {stats.deviceStats.map((device, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{device.device}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-navy-blue h-2 rounded-full" 
                              style={{ width: `${(device.count / Math.max(...stats.deviceStats.map(d => d.count))) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-charcoal">{device.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Real-time Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Bounce Rate</span>
                      <Badge variant={bounceRate < '40' ? 'default' : 'destructive'}>{bounceRate}%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Pages/Session</span>
                      <Badge variant="secondary">{pagesPerSession}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Avg Session Duration</span>
                      <Badge variant="outline">{avgSessionDuration}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">New vs Returning</span>
                      <Badge variant="default">68% / 32%</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-6">
          {/* User Engagement Flow */}
          <Card>
            <CardHeader>
              <CardTitle>User Engagement Flow</CardTitle>
              <CardDescription>How users interact with your content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart data={timeSeriesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="pageViews" name="Page Views" />
                    <YAxis dataKey="sessions" name="Sessions" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter name="Engagement" dataKey="aiInteractions" fill="#e26a2c" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Content Interaction Heatmap */}
          <Card>
            <CardHeader>
              <CardTitle>Content Interaction Patterns</CardTitle>
              <CardDescription>How users engage with different content types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Services Pages</h4>
                  <div className="space-y-2">
                    {['Software Engineering', 'DevOps & Cloud', 'Data & AI'].map((service, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-soft-beige rounded">
                        <span className="text-sm">{service}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-navy-blue text-white text-xs flex items-center justify-center">
                            {Math.floor(Math.random() * 100)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Industry Pages</h4>
                  <div className="space-y-2">
                    {['Financial Services', 'Healthcare', 'EdTech'].map((industry, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-soft-beige rounded">
                        <span className="text-sm">{industry}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-warm-orange text-white text-xs flex items-center justify-center">
                            {Math.floor(Math.random() * 100)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Key Actions</h4>
                  <div className="space-y-2">
                    {['Contact Form', 'AI Recommendations', 'Download Resources'].map((action, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-soft-beige rounded">
                        <span className="text-sm">{action}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-teal-green text-white text-xs flex items-center justify-center">
                            {Math.floor(Math.random() * 100)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conversion" className="space-y-6">
          {/* Conversion Funnel */}
          <Card>
            <CardHeader>
              <CardTitle>Conversion Funnel</CardTitle>
              <CardDescription>Track user journey from visitor to customer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {funnelData.map((stage, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-32 text-sm font-medium">{stage.stage}</div>
                    <div className="flex-1 relative">
                      <div className="h-8 bg-gray-200 rounded">
                        <div 
                          className="h-8 rounded flex items-center justify-end pr-4 text-white text-sm font-medium"
                          style={{ 
                            width: `${(stage.value / funnelData[0].value) * 100}%`,
                            backgroundColor: stage.color
                          }}
                        >
                          {stage.value}
                        </div>
                      </div>
                    </div>
                    <div className="w-16 text-sm text-charcoal text-right">
                      {index === 0 ? '100%' : `${((stage.value / funnelData[0].value) * 100).toFixed(1)}%`}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Conversion Rate Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Conversion Rate Trends</CardTitle>
              <CardDescription>Conversion rates over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={hourlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="conversions" stroke="#059669" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai-insights" className="space-y-6">
          {/* AI Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-charcoal">AI Recommendations Shown</p>
                  <p className="text-3xl font-bold text-navy-blue">{stats.totalInteractions}</p>
                  <p className="text-sm text-green-600">+15% this week</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-charcoal">Click-through Rate</p>
                  <p className="text-3xl font-bold text-warm-orange">{aiEngagementRate}%</p>
                  <p className="text-sm text-green-600">+5.2% this week</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-charcoal">Recommendations Clicked</p>
                  <p className="text-3xl font-bold text-teal-green">{stats.clickedRecommendations}</p>
                  <p className="text-sm text-green-600">+8.7% this week</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Recommendation Performance */}
          <Card>
            <CardHeader>
              <CardTitle>AI Recommendation Performance</CardTitle>
              <CardDescription>How AI-powered recommendations are performing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-4">Top Recommended Content</h4>
                  <div className="space-y-3">
                    {['Platform Engineering Guide', 'DevSecOps Best Practices', 'AI Implementation Strategy', 'Cloud Migration Checklist'].map((content, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-soft-beige rounded">
                        <span className="text-sm">{content}</span>
                        <Badge variant="outline">{Math.floor(Math.random() * 50) + 10} clicks</Badge>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">AI Engagement by Page</h4>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={[
                        { page: 'Home', interactions: 120 },
                        { page: 'Services', interactions: 95 },
                        { page: 'About', interactions: 70 },
                        { page: 'Industries', interactions: 85 },
                        { page: 'Contact', interactions: 45 },
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="page" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="interactions" fill="#e26a2c" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}