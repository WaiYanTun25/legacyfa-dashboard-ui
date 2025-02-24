import { useCookies } from "@src/hooks";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const { getUserData } = useCookies();

  if (!getUserData) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
