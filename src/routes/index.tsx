import { RouteObject } from "react-router-dom";
import { Login } from "@src/pages/public/login/Login";
import { PrivateRoute } from "@src/components/PrivateRoute";
import { Dashboard } from "@src/pages/logged-in/dashboard/Dashboard";
import { NotFound } from "@src/pages/public/not-found/NotFound";

const isAuthenticated = false;

export const routes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <PrivateRoute isAuthenticated={isAuthenticated} />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
