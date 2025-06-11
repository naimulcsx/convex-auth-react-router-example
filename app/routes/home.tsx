import type { Route } from "./+types/home";
import { useAuthActions } from "@convex-dev/auth/react";
import { useQuery } from "convex/react";
import { api } from "~/../convex/_generated/api";
import { ProtectedRoute } from "~/components/ProtectedRoute";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { LogOut } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Protected Home Page" },
    { name: "description", content: "Welcome to your protected home page!" },
  ];
}

export default function Home() {
  const { signOut } = useAuthActions();
  const user = useQuery(api.auth.getCurrentUser);

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Welcome to your Dashboard</CardTitle>
            <CardDescription>
              You are signed in as {user?.email}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => signOut()}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </Button>
          </CardContent>
        </Card>
      </div>
    </ProtectedRoute>
  );
}
