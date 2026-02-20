import React from 'react';
import styles from '../Home.module.css';

interface AddIconProps {
  className?: string;
}

export const AddIcon: React.FC<AddIconProps> = ({ className = '' }) => {
  return (
    <svg
      className={`${styles.icon} ${styles.iconXs} ${className}`.trim()}
      viewBox="0 0 24 24"
    >
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  );
};