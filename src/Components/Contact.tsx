import React from "react";
import DeafaultLayout from "../Layouts/DeafaultLayout";
import { useAuth } from "../Autenticacion/AuthProvider";

const Contact = () => {
  const { setIsAuthenticated } = useAuth();

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <DeafaultLayout>
        <h1>Contact</h1>
        <button onClick={handleLogout}>Logout</button>
      </DeafaultLayout>
    </div>
  );
};

export default Contact;
