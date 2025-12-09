import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img 
      src="norc.png" 
      alt="NORC" 
      className={`object-contain ${className}`}
      onError={(e) => {
        const target = e.currentTarget;
        // Evita loop infinito: se já tentamos public/ e falhou, não fazemos nada
        if (!target.src.includes('public/')) {
          // Se falhou no caminho raiz, tenta buscar explicitamente dentro de public/
          // Isso resolve casos onde o servidor não mapeia public para a raiz
          target.src = 'public/norc.png';
        }
      }}
    />
  );
};