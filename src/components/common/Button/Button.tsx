import React from 'react';
import styles from './Button.module.css';
import type { ButtonProps } from '../../../types/form';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  loading = false,
  fullWidth = false,
  className = '',
  ...props
}) => {
  return (
    <button
      {...props}
      className={`
        ${styles.button}
        ${styles[variant]}
        ${styles[size]}
        ${fullWidth ? styles.fullWidth : ''}
        ${loading ? styles.loading : ''}
        ${className}
      `}
      disabled={props.disabled || loading}
    >
      {loading && (
        <span className={styles.spinner}></span>
      )}
      {children}
    </button>
  );
};