import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { TrendingUp, Users, Eye, Globe, Smartphone, Monitor, Tablet } from 'lucide-react';

interface AnalyticsData {
  totalPageViews: number;
  totalSessions: number;
  totalContacts: number;
  aiInteractions: number;
  totalInteractions: number;
  clickedRecommendations: number;
  topPages: Array<{ path: string; count: number }>;
  deviceStats: Array<{ device: string; count: number }>;
  countryStats: Array<{ country: string; count: number }>;
}

interface AnalyticsDashboardProps {
  token: string;
  data: AnalyticsData | null;
}

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'];

export default function AnalyticsDashboard({ token, data }: AnalyticsDashboardProps) {
  if (!data) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-700 rounded"></div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-80 bg-gray-700 rounded"></div>
            <div className="h-80 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const deviceData = data.deviceStats.map(stat => ({
    ...stat,
    percentage: ((stat.count / data.totalSessions) * 100).toFixed(1)
  }));

  const topPagesData = data.topPages.slice(0, 10).map(page => ({
    page: page.path.replace('/', '') || 'Home',
    views: page.count
  }));

  const getDeviceIcon = (device: string) => {
    switch (device.toLowerCase()) {
      case 'mobile': return <Smartphone className="h-4 w-4" />;
      case 'tablet': return <Tablet className="h-4 w-4" />;
      case 'desktop': return <Monitor className="h-4 w-4" />;
      default: return <Globe className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Total Page Views</p>
                <p className="text-2xl font-bold text-white">{data.totalPageViews.toLocaleString()}</p>
              </div>
              <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Eye className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Total Sessions</p>
                <p className="text-2xl font-bold text-white">{data.totalSessions.toLocaleString()}</p>
              </div>
              <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Contact Submissions</p>
                <p className="text-2xl font-bold text-white">{data.totalContacts.toLocaleString()}</p>
              </div>
              <div className="h-12 w-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-yellow-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">AI Interactions</p>
                <p className="text-2xl font-bold text-white">{data.aiInteractions.toLocaleString()}</p>
              </div>
              <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <Globe className="h-6 w-6 text-purple-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Pages Chart */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Top Pages</CardTitle>
            <CardDescription>Most visited pages on your website</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topPagesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="page" 
                  stroke="#9CA3AF"
                  fontSize={12}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis stroke="#9CA3AF" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '6px',
                    color: '#F9FAFB'
                  }}
                />
                <Bar dataKey="views" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Device Distribution */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Device Distribution</CardTitle>
            <CardDescription>Visitor device breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="w-2/3">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="count"
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '6px',
                        color: '#F9FAFB'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="w-1/3 space-y-2">
                {deviceData.map((device, index) => (
                  <div key={device.device} className="flex items-center gap-2 text-sm">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <div className="flex items-center gap-1 text-gray-300">
                      {getDeviceIcon(device.device)}
                      <span className="capitalize">{device.device}</span>
                    </div>
                    <span className="text-gray-400 ml-auto">{device.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Recommendations Performance */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">AI Recommendations Performance</CardTitle>
          <CardDescription>How users interact with AI-powered content recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {data.totalInteractions.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Total AI Interactions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {data.clickedRecommendations.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Clicked Recommendations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {data.totalInteractions > 0 ? 
                  ((data.clickedRecommendations / data.totalInteractions) * 100).toFixed(1) : 0}%
              </div>
              <div className="text-sm text-gray-400">Click-through Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Countries */}
      {data.countryStats.length > 0 && (
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Top Countries</CardTitle>
            <CardDescription>Visitor geographic distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.countryStats.slice(0, 5).map((country, index) => {
                const percentage = ((country.count / data.totalSessions) * 100).toFixed(1);
                return (
                  <div key={country.country} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-6 bg-gray-600 rounded text-xs flex items-center justify-center text-white">
                        {country.country.slice(0, 2).toUpperCase()}
                      </div>
                      <span className="text-gray-300">{country.country}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full" 
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-gray-400 text-sm w-12 text-right">
                        {percentage}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}