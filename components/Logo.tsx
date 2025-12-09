import React, { useState } from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    // Fallback elegante para texto caso a imagem não carregue
    return (
      <span className={`font-heading font-bold italic tracking-tighter flex items-center justify-center ${className} text-white`}>
        NORC
      </span>
    );
  }

  return (
    <img 
      src="norc.png" 
      alt="NORC" 
      className={`object-contain ${className}`}
      onError={() => setHasError(true)}
    />
  );
};