import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img 
      src="logonorc.png" 
      alt="NORC" 
      className={`object-contain ${className}`}
      onError={(e) => {
        const target = e.currentTarget;
        if (!target.src.includes('public/')) {
          target.src = 'public/logonorc.png';
        }
      }}
    />
  );
};