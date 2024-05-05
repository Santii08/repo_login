import React, { Children } from "react";
import { Link, useLocation } from "react-router-dom";

interface DeafaultLayoutProps {
  children: React.ReactNode;
}

const DeafaultLayout = ({ children }: DeafaultLayoutProps) => {
  const location = useLocation();

  // Verificar si la ruta actual es la página de inicio
  const isHome = location.pathname === "/";
  const isOverview = location.pathname === "/overview";
  const isContact = location.pathname === "/contact";
  return (
    <>
      <header>
        <nav>
          <ul>
            {/* Mostrar el enlace "HOME" solo si no estamos en la página de inicio */}
            {!isHome && (
              <li>
                <Link to="/">HOME</Link>
              </li>
            )}
            {!isOverview && (
              <li>
                <Link to="/overview">OVERVIEW</Link>
              </li>
            )}
            {!isContact && (
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default DeafaultLayout;
