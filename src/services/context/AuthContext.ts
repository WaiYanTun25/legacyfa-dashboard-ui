import { createContext } from "react";
import { LoginFormDataType } from "@src/pages/public/login/Login.type";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (userData: LoginFormDataType) => void;
  logout: () => void;
  userData: LoginFormDataType | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
