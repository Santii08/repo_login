import React from "react";
import { useAuth } from "../Autenticacion/AuthProvider";
import DeafaultLayout from "../Layouts/DeafaultLayout";
const Home = () => {
  const { setIsAuthenticated } = useAuth();

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <DeafaultLayout>
        <h1>ESTE ES EL HOME</h1>
        <button onClick={handleLogout}>Logout</button>
      </DeafaultLayout>
    </div>
  );
};

export default Home;
