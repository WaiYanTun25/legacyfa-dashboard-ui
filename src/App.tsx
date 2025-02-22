import { routes } from "@routes/route";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
export const App = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
