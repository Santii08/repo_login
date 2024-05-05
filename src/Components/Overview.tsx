import React from "react";
import DeafaultLayout from "../Layouts/DeafaultLayout";
import { useAuth } from "../Autenticacion/AuthProvider";
const Overview = () => {
  const { setIsAuthenticated } = useAuth();

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <DeafaultLayout>
        <h1>INFORMACION DE NUESTRA PAGINA</h1>
        <button onClick={handleLogout}>Logout</button>
      </DeafaultLayout>
    </div>
  );
};

export default Overview;
