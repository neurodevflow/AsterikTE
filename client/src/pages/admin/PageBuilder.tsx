import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Edit, Plus, Wand2, Eye, Copy, Settings } from "lucide-react";

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
  featuredImage?: string;
  publishedAt?: string;
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

interface GeneratedComponent {
  type: string;
  name: string;
  content: any;
  settings: any;
}

export default function PageBuilder() {
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showAiDialog, setShowAiDialog] = useState(false);
  const [activeTab, setActiveTab] = useState("pages");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch pages
  const { data: pages = [], isLoading: pagesLoading } = useQuery({
    queryKey: ["/api/admin/pages"],
  });

  // Fetch components for selected page
  const { data: pageComponents = [], isLoading: componentsLoading } = useQuery({
    queryKey: ["/api/admin/pages", selectedPage?.id, "components"],
    enabled: !!selectedPage?.id,
  });

  // Create page mutation
  const createPageMutation = useMutation({
    mutationFn: async (pageData: any) => {
      return await apiRequest("/api/admin/pages", "POST", pageData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/pages"] });
      toast({ title: "Success", description: "Page created successfully" });
      setShowCreateDialog(false);
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to create page", variant: "destructive" });
    },
  });

  // Delete page mutation
  const deletePageMutation = useMutation({
    mutationFn: async (pageId: number) => {
      return await apiRequest(`/api/admin/pages/${pageId}`, "DELETE");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/pages"] });
      toast({ title: "Success", description: "Page deleted successfully" });
      setSelectedPage(null);
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to delete page", variant: "destructive" });
    },
  });

  // Generate AI component mutation
  const generateComponentMutation = useMutation({
    mutationFn: async (request: any) => {
      return await apiRequest("/api/admin/generate/component", "POST", request);
    },
    onSuccess: (data: GeneratedComponent) => {
      toast({ title: "Success", description: `AI ${data.type} component generated successfully` });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to generate component", variant: "destructive" });
    },
  });

  // Generate full page mutation
  const generatePageMutation = useMutation({
    mutationFn: async (request: any) => {
      return await apiRequest("/api/admin/generate/page", "POST", request);
    },
    onSuccess: (data: GeneratedComponent[]) => {
      toast({ title: "Success", description: `AI page with ${data.length} components generated successfully` });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to generate page", variant: "destructive" });
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

  const handleGenerateComponent = (formData: FormData) => {
    const request = {
      componentType: formData.get("componentType") as string,
      industry: formData.get("industry") as string,
      service: formData.get("service") as string,
      targetAudience: formData.get("targetAudience") as string,
      tone: formData.get("tone") as string,
      businessName: "Asterik",
      keywords: (formData.get("keywords") as string)?.split(",").map(k => k.trim()).filter(Boolean) || [],
    };
    generateComponentMutation.mutate(request);
  };

  const handleGeneratePage = (formData: FormData) => {
    const request = {
      pageType: formData.get("pageType") as string,
      title: formData.get("title") as string,
      industry: formData.get("industry") as string,
      service: formData.get("service") as string,
      targetAudience: formData.get("targetAudience") as string,
      businessName: "Asterik",
    };
    generatePageMutation.mutate(request);
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
          <p className="text-charcoal">Create and manage dynamic pages with AI-powered content generation</p>
        </div>
        <div className="flex gap-3">
          <Dialog open={showAiDialog} onOpenChange={setShowAiDialog}>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-navy-blue text-navy-blue hover:bg-navy-blue hover:text-white">
                <Wand2 className="w-4 h-4 mr-2" />
                AI Generator
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-navy-blue">AI Content Generator</DialogTitle>
                <DialogDescription>
                  Generate professional content components using AI
                </DialogDescription>
              </DialogHeader>
              
              <Tabs defaultValue="component" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="component">Generate Component</TabsTrigger>
                  <TabsTrigger value="page">Generate Full Page</TabsTrigger>
                </TabsList>
                
                <TabsContent value="component" className="space-y-4">
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    handleGenerateComponent(new FormData(e.currentTarget));
                  }} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="componentType">Component Type</Label>
                        <Select name="componentType" required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select component type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hero">Hero Section</SelectItem>
                            <SelectItem value="content">Content Section</SelectItem>
                            <SelectItem value="features">Features Section</SelectItem>
                            <SelectItem value="testimonials">Testimonials</SelectItem>
                            <SelectItem value="cta">Call to Action</SelectItem>
                            <SelectItem value="gallery">Gallery</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="tone">Tone</Label>
                        <Select name="tone" defaultValue="professional">
                          <SelectTrigger>
                            <SelectValue placeholder="Select tone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="professional">Professional</SelectItem>
                            <SelectItem value="friendly">Friendly</SelectItem>
                            <SelectItem value="technical">Technical</SelectItem>
                            <SelectItem value="persuasive">Persuasive</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="industry">Industry Focus</Label>
                        <Input name="industry" placeholder="e.g., Financial Services" />
                      </div>
                      <div>
                        <Label htmlFor="service">Service Focus</Label>
                        <Input name="service" placeholder="e.g., Cloud Solutions" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="targetAudience">Target Audience</Label>
                      <Input name="targetAudience" placeholder="e.g., Business Executives" />
                    </div>
                    
                    <div>
                      <Label htmlFor="keywords">Keywords (comma-separated)</Label>
                      <Input name="keywords" placeholder="e.g., innovation, efficiency, digital transformation" />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={generateComponentMutation.isPending}
                      className="w-full bg-navy-blue hover:bg-navy-blue/90"
                    >
                      {generateComponentMutation.isPending ? (
                        <>
                          <Wand2 className="w-4 h-4 mr-2 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Wand2 className="w-4 h-4 mr-2" />
                          Generate Component
                        </>
                      )}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="page" className="space-y-4">
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    handleGeneratePage(new FormData(e.currentTarget));
                  }} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="pageType">Page Type</Label>
                        <Select name="pageType" required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select page type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="landing">Landing Page</SelectItem>
                            <SelectItem value="service">Service Page</SelectItem>
                            <SelectItem value="industry">Industry Page</SelectItem>
                            <SelectItem value="about">About Page</SelectItem>
                            <SelectItem value="contact">Contact Page</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="title">Page Title</Label>
                        <Input name="title" placeholder="e.g., Healthcare Solutions" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="industry">Industry Focus</Label>
                        <Input name="industry" placeholder="e.g., Healthcare" />
                      </div>
                      <div>
                        <Label htmlFor="service">Service Focus</Label>
                        <Input name="service" placeholder="e.g., Digital Health" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="targetAudience">Target Audience</Label>
                      <Input name="targetAudience" placeholder="e.g., Healthcare Executives" />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={generatePageMutation.isPending}
                      className="w-full bg-navy-blue hover:bg-navy-blue/90"
                    >
                      {generatePageMutation.isPending ? (
                        <>
                          <Wand2 className="w-4 h-4 mr-2 animate-spin" />
                          Generating Page...
                        </>
                      ) : (
                        <>
                          <Wand2 className="w-4 h-4 mr-2" />
                          Generate Full Page
                        </>
                      )}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
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
                    <Select name="template" defaultValue="default">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default</SelectItem>
                        <SelectItem value="landing">Landing Page</SelectItem>
                        <SelectItem value="blog">Blog Post</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="seoTitle">SEO Title</Label>
                  <Input name="seoTitle" placeholder="SEO optimized title" />
                </div>
                
                <div>
                  <Label htmlFor="seoDescription">SEO Description</Label>
                  <Textarea name="seoDescription" placeholder="SEO meta description" />
                </div>
                
                <div>
                  <Label htmlFor="seoKeywords">SEO Keywords</Label>
                  <Input name="seoKeywords" placeholder="keyword1, keyword2, keyword3" />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={createPageMutation.isPending}
                  className="w-full bg-navy-blue hover:bg-navy-blue/90"
                >
                  {createPageMutation.isPending ? "Creating..." : "Create Page"}
                </Button>
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
        
        <TabsContent value="pages" className="space-y-4">
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
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deletePageMutation.mutate(page.id)}
                        disabled={deletePageMutation.isPending}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                {page.description && (
                  <CardContent>
                    <p className="text-charcoal">{page.description}</p>
                  </CardContent>
                )}
              </Card>
            ))}
            
            {pages.length === 0 && (
              <div className="text-center py-12">
                <div className="text-charcoal mb-4">No pages created yet</div>
                <Button
                  onClick={() => setShowCreateDialog(true)}
                  className="bg-navy-blue hover:bg-navy-blue/90"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create Your First Page
                </Button>
              </div>
            )}
          </div>
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
                        onClick={() => setShowAiDialog(true)}
                        className="bg-navy-blue hover:bg-navy-blue/90"
                      >
                        <Wand2 className="w-4 h-4 mr-2" />
                        Generate with AI
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