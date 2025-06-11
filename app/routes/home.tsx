import type { Route } from "./+types/home";
import { useAuthActions } from "@convex-dev/auth/react";
import { ProtectedRoute } from "~/components/ProtectedRoute";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { signOut } = useAuthActions();
  return (
    <ProtectedRoute>
      <div>Home</div>
      <button onClick={() => signOut()}>Sign out</button>
    </ProtectedRoute>
  );
}
