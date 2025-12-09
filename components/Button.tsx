import React from 'react';
import { COLORS } from '../constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'line';
  lineColor?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  lineColor, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-4 uppercase font-bold text-sm tracking-widest transition-all duration-300 rounded-none focus:outline-none";
  
  let variantStyles = "";

  switch (variant) {
    case 'primary':
      variantStyles = "bg-white text-black hover:bg-neutral-300 border-none";
      break;
    case 'secondary':
      variantStyles = "bg-transparent border border-white text-white hover:bg-white hover:text-black";
      break;
    case 'line':
      variantStyles = `text-white hover:opacity-90`;
      break;
  }

  const customStyle = variant === 'line' && lineColor ? { backgroundColor: lineColor } : {};

  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${className}`} 
      style={customStyle}
      {...props}
    >
      {children}
    </button>
  );
};
