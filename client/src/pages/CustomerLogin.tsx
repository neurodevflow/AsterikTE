import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, User, Lock, AlertCircle } from "lucide-react";

export default function CustomerLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-blue to-charcoal flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">ASTERIK</h1>
          <p className="text-soft-beige">Customer Portal</p>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-navy-blue">
              {isLogin ? "Welcome Back" : "Create Account"}
            </CardTitle>
            <p className="text-charcoal text-sm">
              {isLogin ? "Sign in to access your dashboard" : "Join our customer portal"}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {!isLogin && (
              <Alert className="border-warm-orange bg-warm-orange/10">
                <AlertCircle className="h-4 w-4 text-warm-orange" />
                <AlertDescription className="text-warm-orange font-medium">
                  Registrations are temporarily disabled. Please contact our support team for account creation.
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-charcoal">Email Address</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-charcoal" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-charcoal">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-charcoal" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-charcoal hover:text-navy-blue"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-navy-blue hover:bg-navy-blue/90 text-white py-2.5"
                disabled={!isLogin}
              >
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>

            <div className="text-center space-y-3">
              <a
                href="#"
                className="text-sm text-navy-blue hover:underline"
              >
                Forgot your password?
              </a>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-charcoal">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-navy-blue hover:underline font-medium"
                    disabled={!isLogin}
                  >
                    {isLogin ? "Register" : "Sign In"}
                  </button>
                </p>
              </div>
            </div>

            <div className="text-center pt-4">
              <p className="text-xs text-charcoal">
                Need help? Contact our support team
              </p>
              <a
                href="/contact"
                className="text-xs text-navy-blue hover:underline"
              >
                support@asterik.ae
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}