import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { useAuth } from "@/context/useAuth";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (!name.trim() || !email.trim() || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      setIsLoading(true);

      await register(name.trim(), email.trim(), password);

      navigate("/dashboard");
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        "Something went wrong. Please try again.";

      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FBF9F5] px-6 py-12 text-stone-900">
      {/* Background atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-orange-300/20 blur-3xl" />

        <div className="absolute bottom-[-180px] right-[-100px] h-[360px] w-[360px] rounded-full bg-orange-200/20 blur-3xl" />
      </div>

      {/* Brand */}
      <div className="relative mx-auto max-w-md">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <span>DevSpace</span>
        </Link>
      </div>

      {/* Register Card */}
      <div className="relative mx-auto mt-10 w-full max-w-md">
        <Card className="border-stone-200/80 bg-white/90 shadow-xl shadow-stone-900/5 backdrop-blur-sm">
          <CardHeader className="space-y-2 pb-6">
            <CardTitle className="text-2xl font-semibold tracking-tight">
              Create your account
            </CardTitle>

            <CardDescription className="text-sm leading-6 text-stone-500">
              Start organizing your development workflow with DevSpace.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>

                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  disabled={isLoading}
                  className="h-11 border-stone-200 bg-stone-50/70 transition-colors focus-visible:border-orange-400 focus-visible:ring-orange-400/20"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>

                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  disabled={isLoading}
                  className="h-11 border-stone-200 bg-stone-50/70 transition-colors focus-visible:border-orange-400 focus-visible:ring-orange-400/20"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>

                  <span className="text-xs text-stone-400">6+ characters</span>
                </div>

                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  disabled={isLoading}
                  className="h-11 border-stone-200 bg-stone-50/70 transition-colors focus-visible:border-orange-400 focus-visible:ring-orange-400/20"
                />
              </div>

              {/* Error */}
              {error && (
                <div
                  role="alert"
                  className="rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-600"
                >
                  {error}
                </div>
              )}

              {/* Submit */}
              <Button
                type="submit"
                disabled={isLoading}
                className="h-11 w-full rounded-lg bg-orange-500 font-medium text-white shadow-sm transition-all hover:bg-orange-600 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
            </form>

            {/* Login link */}
            <div className="mt-6 border-t border-stone-100 pt-6 text-center text-sm text-stone-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-stone-900 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-orange-600 hover:decoration-orange-300"
              >
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-xs leading-5 text-stone-400">
          By creating an account, you're ready to start building a better
          development workflow.
        </p>
      </div>
    </main>
  );
}
export default Register;
