import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Lock } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        toast({ title: "Account created! Please contact an admin to grant you access." });
        setIsSignUp(false);
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;

        // Check if user has admin role
        const { data: roles } = await supabase
          .from("user_roles")
          .select("role")
          .eq("role", "admin");

        if (!roles || roles.length === 0) {
          await supabase.auth.signOut();
          toast({
            title: "Access denied",
            description: "You do not have admin privileges.",
            variant: "destructive",
          });
          return;
        }

        navigate("/admin");
      }
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-border/50">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-2">
            <Lock className="h-6 w-6 text-secondary-foreground" />
          </div>
          <CardTitle className="text-foreground">Admin Dashboard</CardTitle>
          <CardDescription>{isSignUp ? "Create an account" : "Sign in to manage submissions"}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAuth} className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@nuzomlab.com"
              />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
              {loading ? "..." : isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </form>
          <p className="text-center text-sm text-muted-foreground mt-4">
            {isSignUp ? "Already have an account?" : "Need an account?"}{" "}
            <button onClick={() => setIsSignUp(!isSignUp)} className="text-secondary hover:underline">
              {isSignUp ? "Sign in" : "Sign up"}
            </button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
