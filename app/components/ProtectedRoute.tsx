import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { Navigate } from "react-router";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  return (
    <>
      <AuthLoading>Loading</AuthLoading>
      <Authenticated>{children}</Authenticated>
      <Unauthenticated>
        <Navigate to="/signin" />
      </Unauthenticated>
    </>
  );
}
