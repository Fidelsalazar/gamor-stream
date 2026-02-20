import React from 'react';
import { InputProps } from '../../../types/form';
import styles from './Input.module.css';

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = '',
  ...props
}) => {
  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      {label && (
        <label htmlFor={props.id || props.name} className={styles.label}>
          {label}
        </label>
      )}

      <input
        {...props}
        id={props.id || props.name}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
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