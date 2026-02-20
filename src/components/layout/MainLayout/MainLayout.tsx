import React, { cloneElement,useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import styles from "./MainLayout.module.css";
import { SvgAvatar } from "../../common/SvgAvatar";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { user, logout, isAuthenticated } = useAuth();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme =
      (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className={styles.mainLayout}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.navLeft}>
            <Link to="/" className={styles.homeLink}>
              Home
              <svg
                className={styles.svgEllipse}
                fill="none"
                viewBox="0 0 100 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 0 15 A 40 20 0 0 1 90 10 L 90 10 A 40 20 0 0 1 0 10 Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
              </svg>
            </Link>
            <Link to="/" className={styles.links}>
              Streams
            </Link>
            <Link to="/" className={styles.links}>
              Party
            </Link>
            <Link to="/" className={styles.links}>
              Premium
            </Link>
          </div>
          <Link to="/" className={styles.logo}>
            Gamor
          </Link>
          <div className={styles.navLinks}>
            {isAuthenticated ? (
              <>
                <span className={styles.userName}>Hola, {user?.name}</span>
                <SvgAvatar
                  seed={`${user?.name}_avatar_1`}
                  size={30}
                  className={styles.avatarSm}
                />
                <button onClick={handleLogout} className={styles.logoutBtn}>
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className={styles.navLink}>
                  Sign in
                </Link>
                <Link to="/register" className={styles.navCreateLink}>
                  Create account
                </Link>
              </>
            )}
          </div>

          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Cambiar tema"
          >
            {theme === "dark" ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              // Icono LUNA (se muestra en modo light)
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
        </nav>
      </header>
      <main className={styles.mainContent}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return cloneElement(child, { theme } as any);
          }
          return child;
        })}
      </main>
    </div>
  );
};
