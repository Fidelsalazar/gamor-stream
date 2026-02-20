import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import styles from "./Login.module.css";
import type { LoginCredentials } from "../../../types/auth";

export const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginCredentials>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();
  const { login } = useAuth(); 

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev: any) => ({
        ...prev,
        [name]: value,
      }));
      if (error) setError("");
    },
    [error]
  );

  const validateForm = useCallback((): boolean => {
    if (!formData.email.trim()) {
      setError("Please enter your email");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.password) {
      setError("Please enter your password");
      return false;
    }
    return true;
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await login(formData.email, formData.password);
      navigate("/", { replace: true });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Error al iniciar sesión";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftSide}>

        <div className={styles.heroTextContainer}>
          <h2 className={styles.heroTitle}>Welcome Back!</h2>
          <p className={styles.heroSubtitle}>Ready to level up your game?</p>
        </div>

        <div className={styles.imageContainer}>
          <img
            src="https://www.dexerto.com/cdn-image/wp-content/uploads/2025/02/09/Fortnite-Valentines-day.jpg?width=1200&quality=75&format=auto  "
            alt="Gaming Background"
            className={styles.heroImage}
          />
          <div className={styles.imageOverlay}></div>
        </div>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.formWrapper}>
          <div className={styles.formHeader}>
            <h2 className={styles.title}>Sign In</h2>
            <p className={styles.subtitle}>Enter your credentials to access your account</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {error && (
              <div className={styles.error} role="alert">
                {error}
              </div>
            )}

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className={styles.input}
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                disabled={loading}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className={styles.input}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                disabled={loading}
              />
            </div>

            <div className={styles.forgotPassword}>
              <a href="/forgot-password">Forgot Password?</a>
            </div>

            <button type="submit" className={styles.btn} disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className={styles.footer}>
            Don't have an account? <a href="/register">Sign Up</a>
          </div>
        </div>
      </div>

    </div>
  );
};