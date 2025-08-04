import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { Plus, Settings, Zap, Mail, Webhook, Key, TestTube } from 'lucide-react';

interface Integration {
  id: number;
  name: string;
  type: string;
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  isActive: boolean;
  settings?: any;
  lastSyncAt?: string;
  createdAt: string;
  updatedAt: string;
}

interface IntegrationsManagerProps {
  token: string | null;
}

export default function IntegrationsManager({ token }: IntegrationsManagerProps) {
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingIntegration, setEditingIntegration] = useState<Integration | null>(null);
  const [testingIntegration, setTestingIntegration] = useState<number | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    type: 'zapier',
    apiKey: '',
    apiSecret: '',
    webhookUrl: '',
    settings: '{}',
  });

  useEffect(() => {
    fetchIntegrations();
  }, []);

  const fetchIntegrations = async () => {
    try {
      const response = await fetch('/api/admin/integrations', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setIntegrations(data);
      } else {
        toast({
          title: 'Error',
          description: 'Failed to fetch integrations',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred while fetching integrations',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let settings = {};
      try {
        settings = JSON.parse(formData.settings);
      } catch (e) {
        toast({
          title: 'Error',
          description: 'Invalid JSON in settings field',
          variant: 'destructive',
        });
        return;
      }

      const url = editingIntegration 
        ? `/api/admin/integrations/${editingIntegration.id}`
        : '/api/admin/integrations';
      
      const method = editingIntegration ? 'PATCH' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          settings,
        }),
      });

      if (response.ok) {
        await fetchIntegrations();
        setIsDialogOpen(false);
        setEditingIntegration(null);
        setFormData({
          name: '',
          type: 'zapier',
          apiKey: '',
          apiSecret: '',
          webhookUrl: '',
          settings: '{}',
        });
        toast({
          title: 'Success',
          description: `Integration ${editingIntegration ? 'updated' : 'created'} successfully`,
        });
      } else {
        const error = await response.json();
        toast({
          title: 'Error',
          description: error.message || `Failed to ${editingIntegration ? 'update' : 'create'} integration`,
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred while saving integration',
        variant: 'destructive',
      });
    }
  };

  const toggleIntegration = async (integrationId: number, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/admin/integrations/${integrationId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isActive: !currentStatus }),
      });

      if (response.ok) {
        await fetchIntegrations();
        toast({
          title: 'Success',
          description: `Integration ${!currentStatus ? 'activated' : 'deactivated'} successfully`,
        });
      } else {
        throw new Error('Failed to toggle integration');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to toggle integration status',
        variant: 'destructive',
      });
    }
  };

  const testIntegration = async (integration: Integration) => {
    setTestingIntegration(integration.id);
    
    try {
      const response = await fetch(`/api/admin/integrations/${integration.id}/test`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        toast({
          title: 'Test Successful',
          description: `Integration test passed: ${result.message}`,
        });
      } else {
        const error = await response.json();
        toast({
          title: 'Test Failed',
          description: error.message || 'Integration test failed',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Test Failed',
        description: 'Failed to test integration',
        variant: 'destructive',
      });
    } finally {
      setTestingIntegration(null);
    }
  };

  const openEditDialog = (integration: Integration) => {
    setEditingIntegration(integration);
    setFormData({
      name: integration.name,
      type: integration.type,
      apiKey: integration.apiKey || '',
      apiSecret: integration.apiSecret || '',
      webhookUrl: integration.webhookUrl || '',
      settings: JSON.stringify(integration.settings || {}, null, 2),
    });
    setIsDialogOpen(true);
  };

  const openCreateDialog = () => {
    setEditingIntegration(null);
    setFormData({
      name: '',
      type: 'zapier',
      apiKey: '',
      apiSecret: '',
      webhookUrl: '',
      settings: '{}',
    });
    setIsDialogOpen(true);
  };

  const getIntegrationIcon = (type: string) => {
    switch (type) {
      case 'zapier': return <Zap className="h-5 w-5 text-orange-500" />;
      case 'webhook': return <Webhook className="h-5 w-5 text-purple-500" />;
      default: return <Settings className="h-5 w-5 text-gray-500" />;
    }
  };

  const getTypeBadgeVariant = (type: string) => {
    switch (type) {
      case 'zapier': return 'default';
      case 'webhook': return 'outline';
      default: return 'secondary';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navy-blue"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Integrations Manager</CardTitle>
              <CardDescription>
                Connect with third-party services to automate workflows
              </CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={openCreateDialog} className="bg-navy-blue hover:bg-navy-blue/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Integration
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>
                    {editingIntegration ? 'Edit Integration' : 'Create New Integration'}
                  </DialogTitle>
                  <DialogDescription>
                    {editingIntegration ? 'Update integration settings' : 'Connect a new third-party service'}
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Integration Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g., Main Zapier Connection"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Integration Type</Label>
                      <Select
                        value={formData.type}
                        onValueChange={(value) => setFormData({...formData, type: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="zapier">Zapier</SelectItem>
                          <SelectItem value="webhook">Custom Webhook</SelectItem>
                          <SelectItem value="email">Email Service</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  {formData.type === 'zapier' && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="apiKey">API Key</Label>
                        <Input
                          id="apiKey"
                          type="password"
                          value={formData.apiKey}
                          onChange={(e) => setFormData({...formData, apiKey: e.target.value})}
                          placeholder="Enter API key"
                        />
                      </div>
                    </div>
                  )}
                  
                  {(formData.type === 'webhook' || formData.type === 'zapier') && (
                    <div className="space-y-2">
                      <Label htmlFor="webhookUrl">Webhook URL</Label>
                      <Input
                        id="webhookUrl"
                        value={formData.webhookUrl}
                        onChange={(e) => setFormData({...formData, webhookUrl: e.target.value})}
                        placeholder="https://hooks.zapier.com/hooks/catch/..."
                      />
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <Label htmlFor="settings">Additional Settings (JSON)</Label>
                    <Textarea
                      id="settings"
                      value={formData.settings}
                      onChange={(e) => setFormData({...formData, settings: e.target.value})}
                      placeholder='{"param1": "value1", "param2": "value2"}'
                      rows={4}
                    />
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-navy-blue hover:bg-navy-blue/90">
                      {editingIntegration ? 'Update' : 'Create'} Integration
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList>
              <TabsTrigger value="all">All Integrations</TabsTrigger>
              <TabsTrigger value="zapier">Zapier</TabsTrigger>
              <TabsTrigger value="webhook">Webhooks</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              {integrations.length === 0 ? (
                <div className="text-center py-8 text-charcoal">
                  No integrations configured. Add your first integration to get started.
                </div>
              ) : (
                integrations.map((integration) => (
                  <div key={integration.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {getIntegrationIcon(integration.type)}
                          <h3 className="font-semibold text-navy-blue">{integration.name}</h3>
                          <Badge variant={getTypeBadgeVariant(integration.type)}>
                            {integration.type}
                          </Badge>
                          <Badge variant={integration.isActive ? 'default' : 'destructive'}>
                            {integration.isActive ? 'Active' : 'Inactive'}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-charcoal mb-3">
                          <div><strong>Created:</strong> {format(new Date(integration.createdAt), 'MMM dd, yyyy')}</div>
                          <div><strong>Last Sync:</strong> {integration.lastSyncAt ? format(new Date(integration.lastSyncAt), 'MMM dd, HH:mm') : 'Never'}</div>
                          <div><strong>Status:</strong> {integration.isActive ? 'Operational' : 'Disabled'}</div>
                        </div>
                        {integration.webhookUrl && (
                          <div className="text-sm text-charcoal">
                            <strong>Webhook:</strong> 
                            <code className="ml-2 p-1 bg-gray-100 rounded text-xs">
                              {integration.webhookUrl.substring(0, 50)}...
                            </code>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={integration.isActive}
                            onCheckedChange={() => toggleIntegration(integration.id, integration.isActive)}
                          />
                          <Label className="text-sm">Active</Label>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => testIntegration(integration)}
                          disabled={testingIntegration === integration.id}
                        >
                          <TestTube className="h-4 w-4" />
                          {testingIntegration === integration.id ? 'Testing...' : 'Test'}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => openEditDialog(integration)}
                        >
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </TabsContent>
            
            <TabsContent value="zapier">
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-orange-500" />
                      Zapier Integration Guide
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Setup Instructions:</h4>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-charcoal">
                        <li>Create a Zap in your Zapier account</li>
                        <li>Use "Webhooks by Zapier" as the trigger</li>
                        <li>Copy the webhook URL from Zapier</li>
                        <li>Paste it in the integration settings above</li>
                        <li>Configure your desired actions in Zapier</li>
                      </ol>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Available Triggers:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-charcoal">
                        <li>New contact form submission</li>
                        <li>New AI recommendation interaction</li>
                        <li>Email campaign completion</li>
                        <li>User registration events</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                {integrations.filter(i => i.type === 'zapier').map((integration) => (
                  <div key={integration.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Zap className="h-5 w-5 text-orange-500" />
                        <span className="font-medium">{integration.name}</span>
                        <Badge variant={integration.isActive ? 'default' : 'destructive'}>
                          {integration.isActive ? 'Active' : 'Inactive'}
                        </Badge>
                      </div>
                      <Button size="sm" variant="outline" onClick={() => openEditDialog(integration)}>
                        Configure
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="webhook">
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Webhook className="h-5 w-5 text-purple-500" />
                      Custom Webhook Integration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Webhook Events:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-charcoal">
                        <li><code>contact.created</code> - New contact form submission</li>
                        <li><code>ai.interaction</code> - AI recommendation clicked</li>
                        <li><code>campaign.sent</code> - Email campaign completed</li>
                        <li><code>user.registered</code> - New user registration</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Payload Format:</h4>
                      <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
{`{
  "event": "contact.created",
  "timestamp": "2024-01-01T00:00:00Z",
  "data": {
    "id": 123,
    "name": "John Doe",
    "email": "john@example.com"
  }
}`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
                {integrations.filter(i => i.type === 'webhook').map((integration) => (
                  <div key={integration.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Webhook className="h-5 w-5 text-purple-500" />
                        <span className="font-medium">{integration.name}</span>
                        <Badge variant={integration.isActive ? 'default' : 'destructive'}>
                          {integration.isActive ? 'Active' : 'Inactive'}
                        </Badge>
                      </div>
                      <Button size="sm" variant="outline" onClick={() => openEditDialog(integration)}>
                        Configure
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}