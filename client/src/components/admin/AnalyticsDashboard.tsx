import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

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

interface AnalyticsDashboardProps {
  stats: DashboardStats | null;
  token: string | null;
}

export default function AnalyticsDashboard({ stats }: AnalyticsDashboardProps) {
  const COLORS = ['#1d4ed8', '#e26a2c', '#059669', '#dc2626', '#7c3aed', '#ea580c'];

  if (!stats) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navy-blue mx-auto mb-4"></div>
          <p className="text-charcoal">Loading analytics data...</p>
        </div>
      </div>
    );
  }

  const aiEngagementRate = stats.totalInteractions > 0 
    ? ((stats.clickedRecommendations / stats.totalInteractions) * 100).toFixed(1)
    : '0.0';

  const deviceChartData = stats.deviceStats.map(item => ({
    name: item.device.charAt(0).toUpperCase() + item.device.slice(1),
    value: item.count,
  }));

  const topPagesChartData = stats.topPages.slice(0, 10).map(item => ({
    page: item.path.length > 20 ? `${item.path.substring(0, 20)}...` : item.path,
    views: item.count,
  }));

  const countryChartData = stats.countryStats.slice(0, 8).map(item => ({
    country: item.country || 'Unknown',
    visitors: item.count,
  }));

  return (
    <div className="space-y-6">
      {/* AI Recommendations Performance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">AI Recommendations</CardTitle>
            <CardDescription>Total interactions with AI system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-navy-blue">
              {stats.totalInteractions || 0}
            </div>
            <p className="text-sm text-charcoal mt-2">
              Total recommendation requests
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Click-through Rate</CardTitle>
            <CardDescription>Percentage of clicked recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-warm-orange">
              {aiEngagementRate}%
            </div>
            <p className="text-sm text-charcoal mt-2">
              {stats.clickedRecommendations} clicked out of {stats.totalInteractions}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Conversion Impact</CardTitle>
            <CardDescription>AI-driven engagement metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-teal-green">
              {stats.clickedRecommendations}
            </div>
            <p className="text-sm text-charcoal mt-2">
              Users engaged with recommendations
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
            <CardDescription>Most visited pages on your website</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topPagesChartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="page" 
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    interval={0}
                    fontSize={12}
                  />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="views" fill="#1d4ed8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Device Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Device Breakdown</CardTitle>
            <CardDescription>Visitor device types distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={deviceChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {deviceChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
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
                <BarChart data={countryChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="country" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="visitors" fill="#e26a2c" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Summary Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Website Summary</CardTitle>
            <CardDescription>Overall website performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-soft-beige rounded">
                <span className="font-medium text-charcoal">Total Page Views</span>
                <span className="text-xl font-bold text-navy-blue">{stats.totalPageViews}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-soft-beige rounded">
                <span className="font-medium text-charcoal">User Sessions</span>
                <span className="text-xl font-bold text-navy-blue">{stats.totalSessions}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-soft-beige rounded">
                <span className="font-medium text-charcoal">Contact Submissions</span>
                <span className="text-xl font-bold text-navy-blue">{stats.totalContacts}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-soft-beige rounded">
                <span className="font-medium text-charcoal">AI Engagement Rate</span>
                <span className="text-xl font-bold text-warm-orange">{aiEngagementRate}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Insights</CardTitle>
          <CardDescription>Key takeaways and recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-navy-blue mb-2">Top Performing Page</h4>
              <p className="text-sm text-charcoal">
                {stats.topPages[0]?.path || 'No data'} with {stats.topPages[0]?.count || 0} views
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-navy-blue mb-2">Primary Device</h4>
              <p className="text-sm text-charcoal">
                {stats.deviceStats[0]?.device || 'Unknown'} ({stats.deviceStats[0]?.count || 0} users)
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-navy-blue mb-2">Top Geographic Market</h4>
              <p className="text-sm text-charcoal">
                {stats.countryStats[0]?.country || 'Unknown'} ({stats.countryStats[0]?.count || 0} visitors)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}