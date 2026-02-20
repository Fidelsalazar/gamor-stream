// src/components/common/SvgAvatar.tsx

import React, { useEffect, useState } from 'react';

interface SvgAvatarProps {
  seed: string;
  size?: number;
  className?: string;
}

export const SvgAvatar: React.FC<SvgAvatarProps> = ({ seed, size = 40, className = '' }) => {
  const [svgCode, setSvgCode] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkMultiavatar = () => {
      if (typeof window !== 'undefined' && window.multiavatar) {
        const uniqueSeed = `${seed}_${Date.now()}_${Math.random()}`;
        try {
          const code = window.multiavatar(uniqueSeed);
          setSvgCode(code);
        } catch (error) {
          console.error('Error generating avatar:', error);
          setSvgCode('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#ccc"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="10" fill="#666">SVG</text></svg>');
        }
      } else {
        console.warn('Multiavatar script not loaded yet.');
        setSvgCode('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#eee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="10" fill="#999">Loading...</text></svg>');
      }
      setLoading(false);
    };

    checkMultiavatar();

    const timer = setTimeout(() => {
      if (loading && !svgCode) {
        checkMultiavatar();
      }
    }, 1000); 

    return () => clearTimeout(timer); 

  }, [seed]);


  if (loading && !svgCode) {
    return (
      <div
        className={className}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: '#eee',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
        }}
      >
        <div className="loading-spinner" style={{ fontSize: `${size * 0.1}px` }}>...</div>
      </div>
    );
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svgCode }}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
};