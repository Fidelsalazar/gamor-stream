import React from 'react';
import styles from './Button.module.css';
import type { ButtonProps } from '../../../types/form';
import { useResponsive, ButtonSizeConfig } from '../../../hooks/useResponsive';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  loading = false,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const { size: viewportSize } = useResponsive();
  const sizeConfig = ButtonSizeConfig[viewportSize];
  const currentSizeConfig = sizeConfig[size] || sizeConfig.medium;

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
      style={{
        padding: currentSizeConfig.padding,
        fontSize: currentSizeConfig.fontSize,
        minHeight: currentSizeConfig.minHeight,
      }}
      disabled={props.disabled || loading}
    >
      {loading && (
        <span className={styles.spinner}></span>
      )}
      {children}
    </button>
  );
};