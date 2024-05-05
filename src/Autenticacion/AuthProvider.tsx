import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextType {
  isAuthenticated: boolean | null;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: null,
  setIsAuthenticated: () => {},
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(() => {
    // Obtener el estado de autenticación desde localStorage al inicializar el componente
    const isAuthenticatedFromStorage = localStorage.getItem("isAuthenticated");
    return isAuthenticatedFromStorage
      ? JSON.parse(isAuthenticatedFromStorage)
      : null;
  });

  useEffect(() => {
    // Actualizar el estado de autenticación en localStorage cuando cambie
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
