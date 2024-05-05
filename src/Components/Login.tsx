import React, { useState } from "react";
import DeafaultLayout from "../Layouts/DeafaultLayout";
import { useAuth } from "../Autenticacion/AuthProvider";
import { Navigate } from "react-router-dom";
const Login = () => {
  const { setIsAuthenticated } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [redirect, setRedirect] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "admin@admin.com" && password === "admin") {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      setRedirect(true);
    } else {
      // Si el correo no es correcto, puedes mostrar un mensaje de error o realizar otras acciones
      setIsAuthenticated(false);
    }

    // Limpieza de los campos después del envío del formulario
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {redirect && <Navigate to="/" />}
      <DeafaultLayout>
        <form className="form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <label>Correo</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Clave</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </DeafaultLayout>
    </>
  );
};

export default Login;
