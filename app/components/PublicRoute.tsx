import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { Navigate } from "react-router";

interface PublicRouteProps {
  children: React.ReactNode;
}

export function PublicRoute({ children }: PublicRouteProps) {
  return (
    <>
      <AuthLoading>Loading</AuthLoading>
      <Authenticated>
        <Navigate to="/" />
      </Authenticated>
      <Unauthenticated>{children}</Unauthenticated>
    </>
  );
}
