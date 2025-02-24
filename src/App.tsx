import { AppRoutes } from "@routes/route";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@services/provider/AuthProvider";
import { ThemeProvider } from "./services/provider/ThemeProvider";
import { Provider } from "react-redux";
import store from "@services/api/store";
export const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <AppRoutes />
          <ToastContainer />
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
};
