import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center ${className || ''}`}>
      <img 
        src="/norc.png" 
        alt="NORC Logo" 
        className="object-contain max-w-full h-auto"
        style={{ 
          display: 'block',
          maxHeight: '100%',
          width: 'auto'
        }}
      />
    </div>
  );
};