import { AppRoutes } from "@routes/route";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@services/provider/AuthProvider";
import { ThemeProvider } from "./services/provider/ThemeProvider";
export const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppRoutes />
        <ToastContainer />
      </ThemeProvider>
    </AuthProvider>
  );
};
