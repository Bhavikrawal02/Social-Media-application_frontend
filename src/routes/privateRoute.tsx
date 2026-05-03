import { Outlet, Navigate } from "react-router-dom";
import { ALL_ROUTES } from "./constants";
import { getAuth } from "@/utils/auth";

export const PrivateRoute: React.FC = () => {
  const { isAuthenticated } = getAuth();

  if (!isAuthenticated) {
    return <Navigate to={ALL_ROUTES.LOGIN} replace />;
  }
  return <Outlet />;
};
