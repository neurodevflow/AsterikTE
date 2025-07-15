import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Plus, Settings, Trash2, Move, Grid, Layout, Eye } from 'lucide-react';

interface DashboardWidget {
  id: number;
  name: string;
  type: string;
  category: string;
  description: string;
  defaultConfig: any;
  minWidth: number;
  minHeight: number;
  maxWidth: number;
  maxHeight: number;
}

interface UserDashboard {
  id: number;
  adminUserId: number;
  name: string;
  layout: any[];
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

interface WidgetInstance {
  id: number;
  dashboardId: number;
  widgetId: number;
  title: string;
  config: any;
  position: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
  isVisible: boolean;
  refreshInterval: number;
}

interface DashboardCustomizerProps {
  onDashboardChange?: (dashboardId: number) => void;
}

export default function DashboardCustomizer({ onDashboardChange }: DashboardCustomizerProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedDashboard, setSelectedDashboard] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isAddWidgetOpen, setIsAddWidgetOpen] = useState(false);
  const [newDashboardName, setNewDashboardName] = useState('');
  const [isCreateDashboardOpen, setIsCreateDashboardOpen] = useState(false);

  // Fetch user dashboards
  const { data: dashboards = [], refetch: refetchDashboards } = useQuery({
    queryKey: ['/api/admin/user-dashboards'],
    retry: false,
  });

  // Fetch available widgets
  const { data: availableWidgets = [] } = useQuery({
    queryKey: ['/api/admin/dashboard/widgets', selectedCategory === 'all' ? undefined : selectedCategory],
    retry: false,
  });

  // Fetch widget instances for selected dashboard
  const { data: widgetInstances = [], refetch: refetchWidgetInstances } = useQuery({
    queryKey: ['/api/admin/dashboards', selectedDashboard, 'widgets'],
    enabled: !!selectedDashboard,
    retry: false,
  });

  // Set the default dashboard on load
  useEffect(() => {
    if (dashboards.length > 0 && !selectedDashboard) {
      const defaultDashboard = dashboards.find((d: UserDashboard) => d.isDefault) || dashboards[0];
      setSelectedDashboard(defaultDashboard.id);
    }
  }, [dashboards, selectedDashboard]);

  // Create dashboard mutation
  const createDashboardMutation = useMutation({
    mutationFn: async (name: string) => {
      return await apiRequest('/api/admin/user-dashboards', {
        method: 'POST',
        body: JSON.stringify({ name }),
      });
    },
    onSuccess: () => {
      refetchDashboards();
      setIsCreateDashboardOpen(false);
      setNewDashboardName('');
      toast({
        title: "Success",
        description: "New dashboard created successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create dashboard",
        variant: "destructive",
      });
    },
  });

  // Set default dashboard mutation
  const setDefaultMutation = useMutation({
    mutationFn: async (dashboardId: number) => {
      return await apiRequest(`/api/admin/user-dashboards/${dashboardId}/set-default`, {
        method: 'POST',
      });
    },
    onSuccess: () => {
      refetchDashboards();
      toast({
        title: "Success",
        description: "Default dashboard updated",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to set default dashboard",
        variant: "destructive",
      });
    },
  });

  // Add widget to dashboard mutation
  const addWidgetMutation = useMutation({
    mutationFn: async ({ widgetId, position }: { widgetId: number; position: any }) => {
      const widget = availableWidgets.find((w: DashboardWidget) => w.id === widgetId);
      return await apiRequest(`/api/admin/dashboards/${selectedDashboard}/widgets`, {
        method: 'POST',
        body: JSON.stringify({
          widgetId,
          title: widget?.name,
          config: widget?.defaultConfig || {},
          position,
        }),
      });
    },
    onSuccess: () => {
      refetchWidgetInstances();
      setIsAddWidgetOpen(false);
      toast({
        title: "Success",
        description: "Widget added to dashboard",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to add widget",
        variant: "destructive",
      });
    },
  });

  // Remove widget mutation
  const removeWidgetMutation = useMutation({
    mutationFn: async (instanceId: number) => {
      return await apiRequest(`/api/admin/widget-instances/${instanceId}`, {
        method: 'DELETE',
      });
    },
    onSuccess: () => {
      refetchWidgetInstances();
      toast({
        title: "Success",
        description: "Widget removed from dashboard",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to remove widget",
        variant: "destructive",
      });
    },
  });

  const handleCreateDashboard = () => {
    if (newDashboardName.trim()) {
      createDashboardMutation.mutate(newDashboardName.trim());
    }
  };

  const handleSetDefault = (dashboardId: number) => {
    setDefaultMutation.mutate(dashboardId);
  };

  const handleAddWidget = (widgetId: number) => {
    // Find an empty position for the new widget
    const usedPositions = widgetInstances.map((w: WidgetInstance) => w.position);
    const findEmptyPosition = () => {
      for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 12; x++) {
          const conflicts = usedPositions.some(pos => 
            x < pos.x + pos.w && x + 2 > pos.x && y < pos.y + pos.h && y + 2 > pos.y
          );
          if (!conflicts) {
            return { x, y, w: 2, h: 2 };
          }
        }
      }
      return { x: 0, y: 0, w: 2, h: 2 }; // Fallback position
    };

    addWidgetMutation.mutate({
      widgetId,
      position: findEmptyPosition(),
    });
  };

  const handleRemoveWidget = (instanceId: number) => {
    removeWidgetMutation.mutate(instanceId);
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      chart: 'bg-blue-100 text-blue-800',
      metric: 'bg-green-100 text-green-800',
      list: 'bg-purple-100 text-purple-800',
      custom: 'bg-orange-100 text-orange-800',
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      analytics: 'bg-blue-100 text-blue-800',
      content: 'bg-green-100 text-green-800',
      users: 'bg-purple-100 text-purple-800',
      system: 'bg-red-100 text-red-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const categories = Array.from(new Set(availableWidgets.map((w: DashboardWidget) => w.category)));

  return (
    <div className="space-y-6">
      {/* Dashboard Selection and Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layout className="h-5 w-5" />
            Dashboard Management
          </CardTitle>
          <CardDescription>
            Select and manage your dashboard layouts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-48">
              <Label htmlFor="dashboard-select">Active Dashboard</Label>
              <Select
                value={selectedDashboard?.toString()}
                onValueChange={(value) => {
                  const dashboardId = parseInt(value);
                  setSelectedDashboard(dashboardId);
                  onDashboardChange?.(dashboardId);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a dashboard" />
                </SelectTrigger>
                <SelectContent>
                  {dashboards.map((dashboard: UserDashboard) => (
                    <SelectItem key={dashboard.id} value={dashboard.id.toString()}>
                      <div className="flex items-center gap-2">
                        {dashboard.name}
                        {dashboard.isDefault && (
                          <Badge variant="secondary" className="text-xs">Default</Badge>
                        )}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Dialog open={isCreateDashboardOpen} onOpenChange={setIsCreateDashboardOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  New Dashboard
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Dashboard</DialogTitle>
                  <DialogDescription>
                    Enter a name for your new dashboard layout
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="dashboard-name">Dashboard Name</Label>
                    <Input
                      id="dashboard-name"
                      value={newDashboardName}
                      onChange={(e) => setNewDashboardName(e.target.value)}
                      placeholder="My Custom Dashboard"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsCreateDashboardOpen(false)}>
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleCreateDashboard}
                      disabled={!newDashboardName.trim() || createDashboardMutation.isPending}
                    >
                      Create Dashboard
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {selectedDashboard && (
              <Button
                variant="outline"
                onClick={() => handleSetDefault(selectedDashboard)}
                disabled={setDefaultMutation.isPending}
              >
                <Settings className="h-4 w-4 mr-2" />
                Set as Default
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Widget Management */}
      {selectedDashboard && (
        <Tabs defaultValue="widgets" className="space-y-4">
          <TabsList>
            <TabsTrigger value="widgets">Dashboard Widgets</TabsTrigger>
            <TabsTrigger value="add">Add Widgets</TabsTrigger>
          </TabsList>

          <TabsContent value="widgets" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Grid className="h-5 w-5" />
                  Current Widgets
                </CardTitle>
                <CardDescription>
                  Widgets currently on your dashboard ({widgetInstances.length} widgets)
                </CardDescription>
              </CardHeader>
              <CardContent>
                {widgetInstances.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Grid className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No widgets added to this dashboard yet.</p>
                    <p className="text-sm">Use the "Add Widgets" tab to get started.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {widgetInstances.map((instance: WidgetInstance) => {
                      const widget = availableWidgets.find((w: DashboardWidget) => w.id === instance.widgetId);
                      return (
                        <Card key={instance.id} className="relative">
                          <CardHeader className="pb-2">
                            <div className="flex items-start justify-between">
                              <div>
                                <CardTitle className="text-sm">{instance.title}</CardTitle>
                                <div className="flex gap-1 mt-1">
                                  <Badge variant="outline" className={getTypeColor(widget?.type || '')}>
                                    {widget?.type}
                                  </Badge>
                                  <Badge variant="outline" className={getCategoryColor(widget?.category || '')}>
                                    {widget?.category}
                                  </Badge>
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRemoveWidget(instance.id)}
                                className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <p className="text-xs text-gray-600 mb-2">
                              {widget?.description}
                            </p>
                            <div className="text-xs text-gray-500">
                              Position: {instance.position.x}, {instance.position.y} 
                              | Size: {instance.position.w}×{instance.position.h}
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="add" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Add New Widgets
                </CardTitle>
                <CardDescription>
                  Choose from available widgets to add to your dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Label htmlFor="category-filter">Filter by Category</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {availableWidgets.map((widget: DashboardWidget) => (
                    <Card key={widget.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-sm">{widget.name}</CardTitle>
                            <div className="flex gap-1 mt-1">
                              <Badge variant="outline" className={getTypeColor(widget.type)}>
                                {widget.type}
                              </Badge>
                              <Badge variant="outline" className={getCategoryColor(widget.category)}>
                                {widget.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-xs text-gray-600 mb-3">
                          {widget.description}
                        </p>
                        <div className="text-xs text-gray-500 mb-3">
                          Size: {widget.minWidth}×{widget.minHeight} to {widget.maxWidth}×{widget.maxHeight}
                        </div>
                        <Button
                          size="sm"
                          onClick={() => handleAddWidget(widget.id)}
                          disabled={addWidgetMutation.isPending}
                          className="w-full"
                        >
                          <Plus className="h-3 w-3 mr-1" />
                          Add Widget
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}