import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Plus, FileText, Edit, Trash2, Eye } from 'lucide-react';

interface ContentBlock {
  id: number;
  title: string;
  content: string;
  type: 'hero' | 'section' | 'cta' | 'testimonial' | 'faq';
  page: string;
  position: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ContentManagerProps {
  token: string;
}

export default function ContentManager({ token }: ContentManagerProps) {
  const [contents, setContents] = useState<ContentBlock[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingContent, setEditingContent] = useState<ContentBlock | null>(null);
  const [selectedPage, setSelectedPage] = useState<string>('all');
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    type: 'section' as const,
    page: 'home',
    position: 1,
    isActive: true,
  });

  const pages = [
    { value: 'home', label: 'Home' },
    { value: 'about', label: 'About' },
    { value: 'services', label: 'Services' },
    { value: 'industries', label: 'Industries' },
    { value: 'approach', label: 'Approach' },
    { value: 'contact', label: 'Contact' },
    { value: 'insights', label: 'Insights' },
  ];

  const contentTypes = [
    { value: 'hero', label: 'Hero Section' },
    { value: 'section', label: 'Content Section' },
    { value: 'cta', label: 'Call to Action' },
    { value: 'testimonial', label: 'Testimonial' },
    { value: 'faq', label: 'FAQ' },
  ];

  useEffect(() => {
    fetchContents();
  }, [selectedPage]);

  const fetchContents = async () => {
    try {
      const url = selectedPage === 'all' 
        ? '/api/admin/dashboard/content'
        : `/api/admin/dashboard/content?page=${selectedPage}`;

      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setContents(data || []);
      } else {
        toast({
          title: 'Error',
          description: 'Failed to fetch content blocks',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch content blocks',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = editingContent 
        ? `/api/admin/dashboard/content/${editingContent.id}`
        : '/api/admin/dashboard/content';
      
      const method = editingContent ? 'PATCH' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await fetchContents();
        setIsCreateOpen(false);
        setEditingContent(null);
        setFormData({
          title: '',
          content: '',
          type: 'section',
          page: 'home',
          position: 1,
          isActive: true,
        });
        toast({
          title: 'Success',
          description: `Content ${editingContent ? 'updated' : 'created'} successfully`,
        });
      } else {
        toast({
          title: 'Error',
          description: `Failed to ${editingContent ? 'update' : 'create'} content`,
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: `Failed to ${editingContent ? 'update' : 'create'} content`,
        variant: 'destructive',
      });
    }
  };

  const deleteContent = async (id: number) => {
    if (!confirm('Are you sure you want to delete this content block?')) return;

    try {
      const response = await fetch(`/api/admin/dashboard/content/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setContents(contents.filter(content => content.id !== id));
        toast({
          title: 'Success',
          description: 'Content block deleted successfully',
        });
      } else {
        toast({
          title: 'Error',
          description: 'Failed to delete content block',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete content block',
        variant: 'destructive',
      });
    }
  };

  const openEditDialog = (content: ContentBlock) => {
    setEditingContent(content);
    setFormData({
      title: content.title,
      content: content.content,
      type: content.type,
      page: content.page,
      position: content.position,
      isActive: content.isActive,
    });
    setIsCreateOpen(true);
  };

  const getTypeBadgeVariant = (type: string) => {
    switch (type) {
      case 'hero': return 'default';
      case 'section': return 'secondary';
      case 'cta': return 'default';
      case 'testimonial': return 'outline';
      case 'faq': return 'secondary';
      default: return 'default';
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="animate-pulse space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-24 bg-gray-700 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Content Management</h2>
          <p className="text-gray-400">Manage website content blocks and sections</p>
        </div>
        
        <div className="flex gap-4">
          <Select value={selectedPage} onValueChange={setSelectedPage}>
            <SelectTrigger className="w-48 bg-gray-800 border-gray-600">
              <SelectValue placeholder="Filter by page" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Pages</SelectItem>
              {pages.map(page => (
                <SelectItem key={page.value} value={page.value}>
                  {page.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                New Content
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-800 border-gray-700 max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-white">
                  {editingContent ? 'Edit Content Block' : 'Create New Content Block'}
                </DialogTitle>
                <DialogDescription>
                  {editingContent ? 'Update the content block details.' : 'Add a new content block to your website.'}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title" className="text-white">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="type" className="text-white">Content Type</Label>
                    <Select value={formData.type} onValueChange={(value: any) => setFormData({...formData, type: value})}>
                      <SelectTrigger className="bg-gray-700 border-gray-600">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {contentTypes.map(type => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="page" className="text-white">Page</Label>
                    <Select value={formData.page} onValueChange={(value) => setFormData({...formData, page: value})}>
                      <SelectTrigger className="bg-gray-700 border-gray-600">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {pages.map(page => (
                          <SelectItem key={page.value} value={page.value}>
                            {page.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="position" className="text-white">Position</Label>
                    <Input
                      id="position"
                      type="number"
                      min="1"
                      value={formData.position}
                      onChange={(e) => setFormData({...formData, position: parseInt(e.target.value)})}
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="content" className="text-white">Content</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    className="bg-gray-700 border-gray-600 text-white min-h-32"
                    rows={6}
                    required
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="isActive"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({...formData, isActive: e.target.checked})}
                    className="rounded bg-gray-700 border-gray-600"
                  />
                  <Label htmlFor="isActive" className="text-white">Active</Label>
                </div>
                
                <div className="flex justify-end gap-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => {
                      setIsCreateOpen(false);
                      setEditingContent(null);
                      setFormData({
                        title: '',
                        content: '',
                        type: 'section',
                        page: 'home',
                        position: 1,
                        isActive: true,
                      });
                    }}
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    {editingContent ? 'Update' : 'Create'} Content
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid gap-4">
        {contents.length === 0 ? (
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="text-center py-8">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400">No content blocks found</p>
              <p className="text-sm text-gray-500 mt-2">Create your first content block to get started</p>
            </CardContent>
          </Card>
        ) : (
          contents.map((content) => (
            <Card key={content.id} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{content.title}</h3>
                      <Badge variant={getTypeBadgeVariant(content.type)}>
                        {content.type}
                      </Badge>
                      {content.isActive ? (
                        <Badge variant="default" className="bg-green-600">Active</Badge>
                      ) : (
                        <Badge variant="secondary">Inactive</Badge>
                      )}
                    </div>
                    <div className="text-sm text-gray-400 mb-3">
                      <span className="capitalize">{content.page}</span> • Position {content.position}
                    </div>
                    <p className="text-sm text-gray-300 line-clamp-2">{content.content}</p>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => openEditDialog(content)}
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => deleteContent(content.id)}
                      className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500">
                  Created: {new Date(content.createdAt).toLocaleDateString()} • 
                  Updated: {new Date(content.updatedAt).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}