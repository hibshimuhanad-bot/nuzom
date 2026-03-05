import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Trash2, Mail, Phone, Package, MessageSquare, RefreshCw } from "lucide-react";

interface Submission {
  id: string;
  created_at: string;
  company_name: string;
  email: string;
  phone: string | null;
  product: string | null;
  message: string | null;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/admin/login");
        return;
      }

      // Verify admin role
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("role", "admin");

      if (!roles || roles.length === 0) {
        await supabase.auth.signOut();
        navigate("/admin/login");
        return;
      }

      setUser(session.user);
      fetchSubmissions();
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") navigate("/admin/login");
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchSubmissions = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({ title: "Error loading submissions", variant: "destructive" });
    } else {
      setSubmissions(data || []);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("contact_submissions").delete().eq("id", id);
    if (error) {
      toast({ title: "Error deleting", variant: "destructive" });
    } else {
      setSubmissions((prev) => prev.filter((s) => s.id !== id));
      toast({ title: "Submission deleted" });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-US", {
      year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
    });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-sm">N</span>
            </div>
            <h1 className="text-primary-foreground font-bold text-lg">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-primary-foreground/60 text-sm hidden sm:inline">{user?.email}</span>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="text-primary-foreground/80 hover:text-primary-foreground">
              <LogOut className="h-4 w-4 me-1" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground text-sm">Total Submissions</p>
              <p className="text-3xl font-bold text-foreground">{submissions.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground text-sm">This Month</p>
              <p className="text-3xl font-bold text-foreground">
                {submissions.filter((s) => new Date(s.created_at).getMonth() === new Date().getMonth()).length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground text-sm">With Product Interest</p>
              <p className="text-3xl font-bold text-foreground">
                {submissions.filter((s) => s.product).length}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Table */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-foreground">Contact Submissions</CardTitle>
            <Button variant="outline" size="sm" onClick={fetchSubmissions} disabled={loading}>
              <RefreshCw className={`h-4 w-4 me-1 ${loading ? "animate-spin" : ""}`} /> Refresh
            </Button>
          </CardHeader>
          <CardContent>
            {submissions.length === 0 && !loading ? (
              <p className="text-muted-foreground text-center py-12">No submissions yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead className="w-12"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((s) => (
                      <TableRow key={s.id}>
                        <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                          {formatDate(s.created_at)}
                        </TableCell>
                        <TableCell className="font-medium text-foreground">{s.company_name}</TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1 text-sm">
                              <Mail className="h-3 w-3 text-muted-foreground" /> {s.email}
                            </div>
                            {s.phone && (
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Phone className="h-3 w-3" /> {s.phone}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          {s.product ? (
                            <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                              <Package className="h-3 w-3" /> {s.product}
                            </Badge>
                          ) : (
                            <span className="text-muted-foreground text-sm">—</span>
                          )}
                        </TableCell>
                        <TableCell className="max-w-xs">
                          {s.message ? (
                            <p className="text-sm text-muted-foreground truncate" title={s.message}>
                              <MessageSquare className="h-3 w-3 inline me-1" />
                              {s.message}
                            </p>
                          ) : (
                            <span className="text-muted-foreground text-sm">—</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" onClick={() => handleDelete(s.id)} className="text-destructive hover:text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
