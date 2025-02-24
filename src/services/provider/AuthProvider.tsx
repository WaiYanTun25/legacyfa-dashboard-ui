import React, { useEffect, useState } from "react";
import { useCookies } from "@src/hooks";
import { UserDataType } from "@src/pages/public/login/Login.type";
import { AuthContext } from "@services/context/AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { getUserData, storeUserData, removeUserData } = useCookies();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserDataType | null>(null);

  useEffect(() => {
    const storedUserData = getUserData();

    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);
        setIsAuthenticated(true);
        setUserData(parsedData);
      } catch (error) {
        console.error("Error parsing user data from cookies:", error);
        setIsAuthenticated(false);
        setUserData(null);
      }
    } else {
      setIsAuthenticated(false);
      setUserData(null);
    }
  }, []);

  const login = (data: UserDataType) => {
    storeUserData(data);
    setIsAuthenticated(true);
    setUserData(data);
  };

  const logout = () => {
    removeUserData();
    setIsAuthenticated(false);
    setUserData(null);
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userData }}>
      {children}
    </AuthContext.Provider>
  );
};
