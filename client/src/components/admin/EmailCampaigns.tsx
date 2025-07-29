import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Plus, Mail, Calendar, Users, Trash2, Edit, Send } from 'lucide-react';

interface Campaign {
  id: number;
  name: string;
  subject: string;
  content: string;
  targetAudience: string;
  status: 'draft' | 'scheduled' | 'sent';
  scheduledDate?: string;
  sentDate?: string;
  recipientCount: number;
  openRate?: number;
  clickRate?: number;
  createdAt: string;
}

interface EmailCampaignsProps {
  token: string;
}

export default function EmailCampaigns({ token }: EmailCampaignsProps) {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState<Campaign | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    content: '',
    targetAudience: 'all',
    scheduledDate: '',
  });

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const response = await fetch('/api/admin/dashboard/campaigns', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCampaigns(data || []);
      } else {
        toast({
          title: 'Error',
          description: 'Failed to fetch campaigns',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch campaigns',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = editingCampaign 
        ? `/api/admin/dashboard/campaigns/${editingCampaign.id}`
        : '/api/admin/dashboard/campaigns';
      
      const method = editingCampaign ? 'PATCH' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          status: 'draft',
          recipientCount: formData.targetAudience === 'all' ? 100 : 50, // Mock counts
        }),
      });

      if (response.ok) {
        await fetchCampaigns();
        setIsCreateOpen(false);
        setEditingCampaign(null);
        setFormData({
          name: '',
          subject: '',
          content: '',
          targetAudience: 'all',
          scheduledDate: '',
        });
        toast({
          title: 'Success',
          description: `Campaign ${editingCampaign ? 'updated' : 'created'} successfully`,
        });
      } else {
        toast({
          title: 'Error',
          description: `Failed to ${editingCampaign ? 'update' : 'create'} campaign`,
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: `Failed to ${editingCampaign ? 'update' : 'create'} campaign`,
        variant: 'destructive',
      });
    }
  };

  const deleteCampaign = async (id: number) => {
    if (!confirm('Are you sure you want to delete this campaign?')) return;

    try {
      const response = await fetch(`/api/admin/dashboard/campaigns/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setCampaigns(campaigns.filter(campaign => campaign.id !== id));
        toast({
          title: 'Success',
          description: 'Campaign deleted successfully',
        });
      } else {
        toast({
          title: 'Error',
          description: 'Failed to delete campaign',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete campaign',
        variant: 'destructive',
      });
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'draft': return 'secondary';
      case 'scheduled': return 'default';
      case 'sent': return 'outline';
      default: return 'default';
    }
  };

  const openEditDialog = (campaign: Campaign) => {
    setEditingCampaign(campaign);
    setFormData({
      name: campaign.name,
      subject: campaign.subject,
      content: campaign.content,
      targetAudience: campaign.targetAudience,
      scheduledDate: campaign.scheduledDate || '',
    });
    setIsCreateOpen(true);
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="animate-pulse space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-700 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Email Campaigns</h2>
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              New Campaign
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-800 border-gray-700 max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-white">
                {editingCampaign ? 'Edit Campaign' : 'Create New Campaign'}
              </DialogTitle>
              <DialogDescription>
                {editingCampaign ? 'Update your email campaign.' : 'Create a new email campaign to engage with your audience.'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-white">Campaign Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="targetAudience" className="text-white">Target Audience</Label>
                  <Select value={formData.targetAudience} onValueChange={(value) => setFormData({...formData, targetAudience: value})}>
                    <SelectTrigger className="bg-gray-700 border-gray-600">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Contacts</SelectItem>
                      <SelectItem value="new">New Leads</SelectItem>
                      <SelectItem value="qualified">Qualified Prospects</SelectItem>
                      <SelectItem value="customers">Existing Customers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-white">Email Subject</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="content" className="text-white">Email Content</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  className="bg-gray-700 border-gray-600 text-white min-h-32"
                  rows={6}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="scheduledDate" className="text-white">Schedule Date (Optional)</Label>
                <Input
                  id="scheduledDate"
                  type="datetime-local"
                  value={formData.scheduledDate}
                  onChange={(e) => setFormData({...formData, scheduledDate: e.target.value})}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              
              <div className="flex justify-end gap-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => {
                    setIsCreateOpen(false);
                    setEditingCampaign(null);
                    setFormData({
                      name: '',
                      subject: '',
                      content: '',
                      targetAudience: 'all',
                      scheduledDate: '',
                    });
                  }}
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  {editingCampaign ? 'Update' : 'Create'} Campaign
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {campaigns.length === 0 ? (
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="text-center py-8">
              <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400">No email campaigns yet</p>
              <p className="text-sm text-gray-500 mt-2">Create your first campaign to get started</p>
            </CardContent>
          </Card>
        ) : (
          campaigns.map((campaign) => (
            <Card key={campaign.id} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{campaign.name}</h3>
                      <Badge variant={getStatusBadgeVariant(campaign.status)}>
                        {campaign.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">Subject: {campaign.subject}</p>
                    <p className="text-sm text-gray-400">Target: {campaign.targetAudience}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => openEditDialog(campaign)}
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => deleteCampaign(campaign.id)}
                      className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users className="h-4 w-4" />
                    {campaign.recipientCount} recipients
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="h-4 w-4" />
                    Created {new Date(campaign.createdAt).toLocaleDateString()}
                  </div>
                  {campaign.openRate && (
                    <div className="text-gray-400">
                      Open Rate: {campaign.openRate}%
                    </div>
                  )}
                  {campaign.clickRate && (
                    <div className="text-gray-400">
                      Click Rate: {campaign.clickRate}%
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}