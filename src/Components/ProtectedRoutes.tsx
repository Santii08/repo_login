import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../Autenticacion/AuthProvider";

export default function ProtectedRoutes() {
  const auth = useAuth();

  if (auth.isAuthenticated === false || auth.isAuthenticated === null) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
