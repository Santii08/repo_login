import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Overview from "./Components/Overview";
import Contact from "./Components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import { AuthProvider } from "./Autenticacion/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/", // Ruta de inicio
        element: <Home />,
      },
      {
        path: "/overview", // Ruta de vista general relativa
        element: <Overview />,
      },
      {
        path: "/contact", // Ruta de contacto relativa
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
