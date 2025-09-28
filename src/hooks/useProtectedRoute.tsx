// components/ProtectedRoute.tsx
import type { JSX } from "react";
import { Navigate } from "react-router";
import { useAuth } from "./useAuth";

type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuth();
  console.log(user, "user");
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute;
