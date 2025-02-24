import { createContext } from "react";
import { UserDataType } from "@src/pages/public/login/Login.type";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (userData: UserDataType) => void;
  logout: () => void;
  userData: UserDataType | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
