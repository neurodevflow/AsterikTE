import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
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
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { Plus, Edit, FileText, Image, Code } from 'lucide-react';

interface ContentBlock {
  id: number;
  key: string;
  title: string;
  content: string;
  type: string;
  page?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ContentManagerProps {
  token: string | null;
}

export default function ContentManager({ token }: ContentManagerProps) {
  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingContent, setEditingContent] = useState<ContentBlock | null>(null);
  const [selectedPage, setSelectedPage] = useState<string>('all');
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    key: '',
    title: '',
    content: '',
    type: 'text',
    page: '',
  });

  useEffect(() => {
    fetchContentBlocks();
  }, [selectedPage]);

  const fetchContentBlocks = async () => {
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
        setContentBlocks(data);
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
        description: 'An error occurred while fetching content',
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
        await fetchContentBlocks();
        setIsDialogOpen(false);
        setEditingContent(null);
        setFormData({ key: '', title: '', content: '', type: 'text', page: '' });
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
        description: 'An error occurred while saving content',
        variant: 'destructive',
      });
    }
  };

  const openEditDialog = (content: ContentBlock) => {
    setEditingContent(content);
    setFormData({
      key: content.key,
      title: content.title,
      content: content.content,
      type: content.type,
      page: content.page || '',
    });
    setIsDialogOpen(true);
  };

  const openCreateDialog = () => {
    setEditingContent(null);
    setFormData({ key: '', title: '', content: '', type: 'text', page: '' });
    setIsDialogOpen(true);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'html': return <Code className="h-4 w-4" />;
      case 'image': return <Image className="h-4 w-4" />;
      case 'json': return <Code className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeBadgeVariant = (type: string) => {
    switch (type) {
      case 'text': return 'default';
      case 'html': return 'secondary';
      case 'image': return 'outline';
      case 'json': return 'default';
      default: return 'default';
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
              <CardTitle>Content Management</CardTitle>
              <CardDescription>
                Manage dynamic content blocks across your website
              </CardDescription>
            </div>
            <div className="flex items-center gap-3">
              <Select value={selectedPage} onValueChange={setSelectedPage}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by page" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Pages</SelectItem>
                  <SelectItem value="home">Home</SelectItem>
                  <SelectItem value="about">About</SelectItem>
                  <SelectItem value="services">Services</SelectItem>
                  <SelectItem value="contact">Contact</SelectItem>
                  <SelectItem value="insights">Insights</SelectItem>
                </SelectContent>
              </Select>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={openCreateDialog} className="bg-navy-blue hover:bg-navy-blue/90">
                    <Plus className="h-4 w-4 mr-2" />
                    New Content Block
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>
                      {editingContent ? 'Edit Content Block' : 'Create New Content Block'}
                    </DialogTitle>
                    <DialogDescription>
                      {editingContent ? 'Update content block details' : 'Create a new dynamic content block'}
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="key">Unique Key</Label>
                        <Input
                          id="key"
                          value={formData.key}
                          onChange={(e) => setFormData({...formData, key: e.target.value})}
                          placeholder="e.g., hero_title, about_text"
                          required
                          disabled={!!editingContent}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="page">Page</Label>
                        <Select
                          value={formData.page}
                          onValueChange={(value) => setFormData({...formData, page: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select page" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">All Pages</SelectItem>
                            <SelectItem value="home">Home</SelectItem>
                            <SelectItem value="about">About</SelectItem>
                            <SelectItem value="services">Services</SelectItem>
                            <SelectItem value="contact">Contact</SelectItem>
                            <SelectItem value="insights">Insights</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => setFormData({...formData, title: e.target.value})}
                          placeholder="Enter content title"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="type">Content Type</Label>
                        <Select
                          value={formData.type}
                          onValueChange={(value) => setFormData({...formData, type: value})}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="text">Text</SelectItem>
                            <SelectItem value="html">HTML</SelectItem>
                            <SelectItem value="image">Image URL</SelectItem>
                            <SelectItem value="json">JSON Data</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="content">Content</Label>
                      <Textarea
                        id="content"
                        value={formData.content}
                        onChange={(e) => setFormData({...formData, content: e.target.value})}
                        placeholder={
                          formData.type === 'html' ? 'Enter HTML content...' :
                          formData.type === 'json' ? 'Enter JSON data...' :
                          formData.type === 'image' ? 'Enter image URL...' :
                          'Enter text content...'
                        }
                        rows={8}
                        required
                      />
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button type="submit" className="bg-navy-blue hover:bg-navy-blue/90">
                        {editingContent ? 'Update' : 'Create'} Content Block
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contentBlocks.length === 0 ? (
              <div className="text-center py-8 text-charcoal">
                No content blocks found. Create your first content block to get started.
              </div>
            ) : (
              contentBlocks.map((content) => (
                <div key={content.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          {getTypeIcon(content.type)}
                          <h3 className="font-semibold text-navy-blue">{content.title}</h3>
                        </div>
                        <Badge variant={getTypeBadgeVariant(content.type)}>
                          {content.type}
                        </Badge>
                        {!content.isActive && (
                          <Badge variant="destructive">Inactive</Badge>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-charcoal mb-3">
                        <div><strong>Key:</strong> {content.key}</div>
                        <div><strong>Page:</strong> {content.page || 'All'}</div>
                        <div><strong>Updated:</strong> {format(new Date(content.updatedAt), 'MMM dd, yyyy')}</div>
                      </div>
                      <div className="text-sm text-charcoal">
                        <strong>Content Preview:</strong>
                        <div className="mt-1 p-2 bg-gray-50 rounded text-xs font-mono">
                          {content.content.length > 200 
                            ? `${content.content.substring(0, 200)}...`
                            : content.content
                          }
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openEditDialog(content)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}