import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { Loader2 } from "lucide-react";
import { Navigate } from "react-router";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  return (
    <>
      <AuthLoading>
        <div className="flex items-center justify-center h-screen">
          <Loader2 className="w-12 h-12 animate-spin" />
        </div>
      </AuthLoading>
      <Authenticated>{children}</Authenticated>
      <Unauthenticated>
        <Navigate to="/signin" />
      </Unauthenticated>
    </>
  );
}
