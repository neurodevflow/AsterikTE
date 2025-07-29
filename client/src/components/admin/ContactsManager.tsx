import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Search, Mail, Phone, Calendar, User } from 'lucide-react';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
  createdAt: string;
}

interface ContactsManagerProps {
  token: string;
}

export default function ContactsManager({ token }: ContactsManagerProps) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    fetchContacts();
  }, [page]);

  const fetchContacts = async () => {
    try {
      const response = await fetch(`/api/admin/dashboard/contacts?page=${page}&limit=10`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setContacts(data.contacts || []);
        setTotal(data.pagination?.total || 0);
      } else {
        toast({
          title: 'Error',
          description: 'Failed to fetch contacts',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch contacts',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateContactStatus = async (contactId: number, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/dashboard/contacts/${contactId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        setContacts(contacts.map(contact => 
          contact.id === contactId ? { ...contact, status: newStatus as any } : contact
        ));
        toast({
          title: 'Success',
          description: 'Contact status updated',
        });
      } else {
        toast({
          title: 'Error',
          description: 'Failed to update contact status',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update contact status',
        variant: 'destructive',
      });
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'new': return 'default';
      case 'contacted': return 'secondary';
      case 'qualified': return 'default';
      case 'closed': return 'outline';
      default: return 'default';
    }
  };

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || contact.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-20 bg-gray-700 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-gray-800 border-gray-600 text-white"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-48 bg-gray-800 border-gray-600">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="contacted">Contacted</SelectItem>
            <SelectItem value="qualified">Qualified</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {filteredContacts.length === 0 ? (
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="text-center py-8">
              <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400">No contacts found</p>
            </CardContent>
          </Card>
        ) : (
          filteredContacts.map((contact) => (
            <Card key={contact.id} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-white">{contact.name}</h3>
                      <Badge variant={getStatusBadgeVariant(contact.status)}>
                        {contact.status}
                      </Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        {contact.email}
                      </div>
                      {contact.phone && (
                        <div className="flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          {contact.phone}
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    {contact.company && (
                      <p className="text-sm text-gray-300">Company: {contact.company}</p>
                    )}
                    {contact.message && (
                      <p className="text-sm text-gray-300 mt-2 line-clamp-2">{contact.message}</p>
                    )}
                  </div>
                  
                  <div className="lg:w-48">
                    <Select
                      value={contact.status}
                      onValueChange={(value) => updateContactStatus(contact.id, value)}
                    >
                      <SelectTrigger className="bg-gray-700 border-gray-600">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="contacted">Contacted</SelectItem>
                        <SelectItem value="qualified">Qualified</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {total > 10 && (
        <div className="flex justify-center gap-2">
          <Button
            variant="outline"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            Previous
          </Button>
          <span className="flex items-center px-4 text-gray-400">
            Page {page} of {Math.ceil(total / 10)}
          </span>
          <Button
            variant="outline"
            onClick={() => setPage(page + 1)}
            disabled={page >= Math.ceil(total / 10)}
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}