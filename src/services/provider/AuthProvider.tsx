import React, { useEffect, useState } from "react";
import { useCookies } from "@src/hooks";
import { LoginFormDataType } from "@src/pages/public/login/Login.type";
import { AuthContext } from "@services/context/AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { getUserData, storeUserData, removeUserData } = useCookies();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<LoginFormDataType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedUserData = getUserData();
    if (storedUserData) {
      setIsAuthenticated(true);
      setUserData(JSON.parse(storedUserData));
    } else {
      setIsAuthenticated(false);
      setUserData(null);
    }
    setIsLoading(false);
  }, []);

  const login = (data: LoginFormDataType) => {
    storeUserData(data);
    setIsAuthenticated(true);
    setUserData(data);
  };

  const logout = () => {
    removeUserData();
    setIsAuthenticated(false);
    setUserData(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userData }}>
      {children}
    </AuthContext.Provider>
  );
};
