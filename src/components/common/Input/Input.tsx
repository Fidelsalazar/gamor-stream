import React from 'react';
import styles from './Input.module.css';
import type { InputProps } from '../../../types/form';
import { useResponsive, InputConfig } from '../../../hooks/useResponsive';

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = '',
  ...props
}) => {
  const { size } = useResponsive();
  const inputConfig = InputConfig[size];

  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      {label && (
        <label 
          htmlFor={props.id || props.name} 
          className={styles.label}
          style={{ fontSize: inputConfig.labelFontSize }}
        >
          {label}
        </label>
      )}

      <input
        {...props}
        id={props.id || props.name}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        style={{
          padding: inputConfig.padding,
          fontSize: inputConfig.fontSize,
          minHeight: inputConfig.minHeight,
        }}
      />

      {helperText && (
        <span className={styles.helperText}>{helperText}</span>
      )}

      {error && (
        <span className={styles.errorMessage}>{error}</span>
      )}
    </div>
  );
};