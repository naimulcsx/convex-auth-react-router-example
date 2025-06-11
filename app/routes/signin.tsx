import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";
import { PublicRoute } from "~/components/PublicRoute";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function SignIn() {
  const { signIn } = useAuthActions();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<"signUp" | "signIn">("signIn");

  return (
    <PublicRoute>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>
              {step === "signIn" ? "Welcome back" : "Create an account"}
            </CardTitle>
            <CardDescription>
              {step === "signIn"
                ? "Enter your credentials to sign in to your account"
                : "Enter your details to create a new account"}
            </CardDescription>
          </CardHeader>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              setIsLoading(true);
              signIn("password", formData)
                .catch((error) => {
                  toast.error("Invalid credentials");
                })
                .then(() => {
                  toast.success("Signed in successfully");
                })
                .finally(() => {
                  setIsLoading(false);
                });
            }}
          >
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>
              <input name="flow" type="hidden" value={step} />
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : step === "signIn" ? (
                  "Sign in"
                ) : (
                  "Sign up"
                )}
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="w-full"
                onClick={() => {
                  setStep(step === "signIn" ? "signUp" : "signIn");
                }}
              >
                {step === "signIn"
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Sign in"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </PublicRoute>
  );
}
