import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img 
      src="/norc. png" 
      alt="NORC Logo" 
      className={className}
    />
  );
};