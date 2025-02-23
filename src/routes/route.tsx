import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { Login } from "@src/pages/public/login/Login";
import { PrivateRoute } from "@src/components/PrivateRoute";
import { Dashboard } from "@src/pages/logged-in/dashboard/Dashboard";
import { NotFound } from "@src/pages/public/not-found/NotFound";
import { Layout } from "@src/pages/logged-in/layout/Layout";

export const AppRoutes = () => {
  const routes: RouteObject[] = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      element: <PrivateRoute />,
      children: [
        {
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <Dashboard />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
