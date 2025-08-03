import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Plus, Copy, Eye, Settings, Edit, Trash2 } from "lucide-react";

interface Page {
  id: number;
  title: string;
  slug: string;
  description?: string;
  status: string;
  template?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
}

interface PageComponent {
  id: number;
  pageId: number;
  type: string;
  name?: string;
  content: any;
  settings?: any;
  sortOrder: number;
  isVisible: boolean;
  createdAt: string;
  updatedAt: string;
}

interface PageBuilderProps {
  token?: string;
}

export default function PageBuilder({ token }: PageBuilderProps) {
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showImportDialog, setShowImportDialog] = useState(false);
  const [activeTab, setActiveTab] = useState("pages");
  const [existingPages] = useState([
    { title: "Home", slug: "home", description: "Main landing page" },
    { title: "About", slug: "about", description: "About us page" },
    { title: "Services", slug: "services", description: "Services overview" },
    { title: "Industries", slug: "industries", description: "Industries we serve" },
    { title: "Contact", slug: "contact", description: "Contact page" },
    { title: "Insights", slug: "insights", description: "Blog and insights" },
    { title: "Approach", slug: "approach", description: "Our methodology" }
  ]);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch pages
  const { data: pages = [], isLoading: pagesLoading } = useQuery({
    queryKey: ["/api/admin/pages"],
    queryFn: async () => {
      const response = await fetch('/api/admin/pages', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch pages');
      return response.json();
    },
    enabled: !!token,
  });

  // Fetch components for selected page
  const { data: pageComponents = [], isLoading: componentsLoading } = useQuery({
    queryKey: ["/api/admin/pages/components", selectedPage?.id],
    queryFn: async () => {
      const response = await fetch(`/api/admin/pages/${selectedPage?.id}/components`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch components');
      return response.json();
    },
    enabled: !!token && !!selectedPage?.id,
  });

  // Create page mutation
  const createPageMutation = useMutation({
    mutationFn: async (pageData: any) => {
      const response = await fetch('/api/admin/pages', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pageData),
      });
      if (!response.ok) throw new Error('Failed to create page');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/pages"] });
      setShowCreateDialog(false);
      toast({ title: "Success", description: "Page created successfully" });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to create page", variant: "destructive" });
    },
  });

  // Import existing pages mutation
  const importPagesMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch('/api/admin/pages/import-existing', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pages: existingPages }),
      });
      if (!response.ok) throw new Error('Failed to import pages');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/pages"] });
      setShowImportDialog(false);
      toast({ title: "Success", description: "Pages imported successfully" });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to import pages", variant: "destructive" });
    },
  });

  // Delete page mutation
  const deletePageMutation = useMutation({
    mutationFn: async (pageId: number) => {
      const response = await fetch(`/api/admin/pages/${pageId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to delete page');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/pages"] });
      toast({ title: "Success", description: "Page deleted successfully" });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to delete page", variant: "destructive" });
    },
  });

  const handleCreatePage = (formData: FormData) => {
    const pageData = {
      title: formData.get("title") as string,
      slug: formData.get("slug") as string,
      description: formData.get("description") as string,
      status: formData.get("status") as string,
      template: formData.get("template") as string,
      seoTitle: formData.get("seoTitle") as string,
      seoDescription: formData.get("seoDescription") as string,
      seoKeywords: formData.get("seoKeywords") as string,
    };
    createPageMutation.mutate(pageData);
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "published": return "bg-green-100 text-green-800";
      case "draft": return "bg-yellow-100 text-yellow-800";
      case "archived": return "bg-gray-100 text-gray-800";
      default: return "bg-blue-100 text-blue-800";
    }
  };

  if (pagesLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg font-medium text-charcoal">Loading page builder...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy-blue">Page Builder</h1>
          <p className="text-charcoal">Create and manage dynamic pages with custom content</p>
        </div>
        <div className="flex gap-3">
          <Dialog open={showImportDialog} onOpenChange={setShowImportDialog}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Copy className="h-4 w-4 mr-2" />
                Import Existing Pages
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Import Existing Website Pages</DialogTitle>
                <DialogDescription>
                  Import your current website pages (Home, About, Services, etc.) into the page builder for editing. This will create editable versions of your existing pages.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Pages to be imported:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    {existingPages.map((page) => (
                      <li key={page.slug} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        {page.title} - {page.description}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setShowImportDialog(false)}>
                    Cancel
                  </Button>
                  <Button 
                    onClick={() => importPagesMutation.mutate()}
                    disabled={importPagesMutation.isPending}
                  >
                    {importPagesMutation.isPending ? "Importing..." : "Import Pages"}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>
              <Button className="bg-navy-blue hover:bg-navy-blue/90">
                <Plus className="w-4 h-4 mr-2" />
                New Page
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-navy-blue">Create New Page</DialogTitle>
                <DialogDescription>
                  Create a new page with custom content and settings
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleCreatePage(new FormData(e.currentTarget));
              }} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Page Title</Label>
                    <Input name="title" placeholder="Enter page title" required />
                  </div>
                  <div>
                    <Label htmlFor="slug">URL Slug</Label>
                    <Input name="slug" placeholder="page-url-slug" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea name="description" placeholder="Brief description of the page" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select name="status" defaultValue="draft">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="template">Template</Label>
                    <Select name="template" defaultValue="standard">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="landing">Landing Page</SelectItem>
                        <SelectItem value="service">Service Page</SelectItem>
                        <SelectItem value="industry">Industry Page</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium text-navy-blue">SEO Settings</h4>
                  <div>
                    <Label htmlFor="seoTitle">SEO Title</Label>
                    <Input name="seoTitle" placeholder="SEO optimized title" />
                  </div>
                  <div>
                    <Label htmlFor="seoDescription">SEO Description</Label>
                    <Textarea name="seoDescription" placeholder="Meta description for search engines" />
                  </div>
                  <div>
                    <Label htmlFor="seoKeywords">SEO Keywords</Label>
                    <Input name="seoKeywords" placeholder="comma, separated, keywords" />
                  </div>
                </div>
                
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setShowCreateDialog(false)}>
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={createPageMutation.isPending}
                    className="bg-navy-blue hover:bg-navy-blue/90"
                  >
                    {createPageMutation.isPending ? "Creating..." : "Create Page"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList>
          <TabsTrigger value="pages">Pages</TabsTrigger>
          <TabsTrigger value="editor" disabled={!selectedPage}>Page Editor</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pages" className="space-y-6">
          {/* Existing Pages Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Current Website Pages
              </CardTitle>
              <CardDescription>
                These are your current website pages. Import them to start editing with the page builder.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {existingPages.map((page) => (
                  <Card key={page.slug} className="border-dashed border-2 hover:border-navy-blue/50 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-sm font-medium text-navy-blue">{page.title}</CardTitle>
                      <CardDescription className="text-xs">/{page.slug}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-charcoal mb-3">{page.description}</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="text-xs">
                          <Eye className="w-3 h-3 mr-1" />
                          View Live
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Custom Pages Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Custom Pages
              </CardTitle>
              <CardDescription>
                Pages created through the page builder with custom content and components.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {pages.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No custom pages created yet. Create your first page using the "New Page" button above.</p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {pages.map((page: Page) => (
              <Card key={page.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-navy-blue">{page.title}</CardTitle>
                      <CardDescription>/{page.slug}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusBadgeColor(page.status)}>
                        {page.status}
                      </Badge>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedPage(page);
                          setActiveTab("editor");
                        }}
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deletePageMutation.mutate(page.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal">{page.description}</p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Created: {new Date(page.createdAt).toLocaleDateString()}
                  </div>
                </CardContent>
              </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="editor" className="space-y-4">
          {selectedPage && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-navy-blue">{selectedPage.title}</h2>
                  <p className="text-charcoal">Editing page: /{selectedPage.slug}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                </div>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-navy-blue">Page Components</CardTitle>
                  <CardDescription>
                    Drag and drop components to build your page layout
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {componentsLoading ? (
                    <div className="text-center py-8">Loading components...</div>
                  ) : pageComponents.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="text-charcoal mb-4">No components added yet</div>
                      <Button
                        onClick={() => setShowCreateDialog(true)}
                        className="bg-navy-blue hover:bg-navy-blue/90"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Component
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {pageComponents.map((component: PageComponent) => (
                        <Card key={component.id} className="border-l-4 border-l-navy-blue">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <div>
                                <CardTitle className="text-sm font-medium">
                                  {component.name || component.type}
                                </CardTitle>
                                <CardDescription>
                                  Type: {component.type} • Order: {component.sortOrder}
                                </CardDescription>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Copy className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="text-sm text-charcoal">
                              <strong>Content:</strong> {JSON.stringify(component.content).substring(0, 100)}...
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}