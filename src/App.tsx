import { AppRoutes } from "@routes/route";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@services/provider/AuthProvider";
export const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
      <ToastContainer />
    </AuthProvider>
  );
};
