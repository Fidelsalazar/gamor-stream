import React from "react";
import styles from "../Home.module.css";

interface TuneIconProps {
  className?: string;
}

export const TuneIcon: React.FC<TuneIconProps> = ({ className = "" }) => {
  return (
    <svg
      className={`${styles.icon} ${styles.iconSm} ${className}`.trim()}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        fill="#fff"
        d="M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3M2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3"
      />
    </svg>
  );
};
