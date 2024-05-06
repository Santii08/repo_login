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
    // Obtener el estado de autenticación desde localStorage solo si está presente
    const isAuthenticatedFromStorage = localStorage.getItem("isAuthenticated");
    return isAuthenticatedFromStorage
      ? JSON.parse(isAuthenticatedFromStorage)
      : null;
  });

  useEffect(() => {
    // Solo actualiza el estado de autenticación en localStorage si está autenticado
    if (isAuthenticated) {
      localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
    } else {
      // Si no está autenticado, elimina el estado de autenticación del localStorage para no poder cambiarlo a true
      localStorage.removeItem("isAuthenticated");
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
