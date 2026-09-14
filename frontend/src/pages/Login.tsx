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

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    try {
      setIsLoading(true);

      await login(email, password);
      navigate("/dashboard");
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        "Something went wrong. Please try again.";

      setError(message);

      console.log(error);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FBF9F5] px-4 py-12 text-stone-900">
      {/* Soft warm atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-0 flex justify-center overflow-hidden"
      >
        <div className="h-[520px] w-[900px] rounded-full bg-gradient-to-br from-orange-200/45 via-amber-100/35 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Brand */}
        <div className="mb-8 text-center">
          <Link
            to="/"
            className="text-xl font-semibold tracking-tight transition-opacity hover:opacity-70"
          >
            DevSpace
          </Link>
        </div>

        <Card className="overflow-hidden rounded-[28px] border-stone-900/[0.07] bg-white/85 shadow-[0_20px_60px_-20px_rgba(120,80,40,0.22)] backdrop-blur-xl">
          <CardHeader className="px-7 pb-2 pt-8 sm:px-8">
            <CardTitle className="text-2xl font-semibold tracking-tight">
              Welcome back
            </CardTitle>

            <CardDescription className="mt-1 text-stone-500">
              Sign in to your DevSpace account
            </CardDescription>
          </CardHeader>

          <CardContent className="px-7 pb-8 pt-6 sm:px-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-stone-700">
                  Email
                </Label>

                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 rounded-xl border-stone-900/10 bg-[#FBF9F5] px-3.5 text-stone-900 placeholder:text-stone-400 focus-visible:border-orange-400 focus-visible:ring-orange-400/20"
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-stone-700">
                    Password
                  </Label>

                  <button
                    type="button"
                    className="text-xs font-medium text-stone-500 transition-colors hover:text-orange-600"
                  >
                    Forgot password?
                  </button>
                </div>

                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className="h-11 rounded-xl border-stone-900/10 bg-[#FBF9F5] px-3.5 text-stone-900 placeholder:text-stone-400 focus-visible:border-orange-400 focus-visible:ring-orange-400/20"
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
              <Button
                type="submit"
                className="h-11 w-full rounded-xl bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-[0_1px_2px_rgba(194,65,12,0.3),0_8px_20px_-6px_rgba(194,65,12,0.5)] transition-all hover:from-orange-500 hover:to-orange-500 hover:shadow-[0_4px_20px_-6px_rgba(194,65,12,0.55)]"
              >
                Sign in
              </Button>
            </form>

            <div className="mt-7 text-center text-sm text-stone-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-stone-900 transition-colors hover:text-orange-600"
              >
                Create one
              </Link>
            </div>
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-xs text-stone-400">
          A focused workspace for developers.
        </p>
      </div>
    </main>
  );
}

export default Login;
