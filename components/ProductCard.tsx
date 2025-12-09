import React, { useState } from 'react';
import { Product } from '../types';
import { LINES } from '../constants';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const line = LINES[product.lineId];

  return (
    <div 
      className="group cursor-pointer relative flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 border border-transparent group-hover:border-white/20 transition-all duration-300">
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img 
          src={product.secondaryImage} 
          alt={product.name} 
          className={`absolute top-0 left-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out ${isHovered ? 'scale-105 opacity-100' : 'scale-100 opacity-0'}`}
        />
        
        {/* Tech Badge */}
        <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2 py-1 border border-white/10 z-10">
           <span className="font-mono text-[9px] text-white/80 tracking-wider">NORC-{line.id.substring(0,2)}-{product.id}</span>
        </div>

        {/* Corner markers overlay on hover */}
         <div className="absolute top-0 left-0 w-full h-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/50"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/50"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/50"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/50"></div>
         </div>
         
         {/* Line Color Indicator Bar */}
         <div 
            className="absolute bottom-0 left-0 w-full h-1 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            style={{ backgroundColor: line.color }}
         />
      </div>

      <div className="mt-4 flex justify-between items-start flex-grow">
        <div className="flex flex-col">
          <h3 className="text-white uppercase font-bold text-sm tracking-wide group-hover:text-neutral-300 transition-colors">
            {product.name}
          </h3>
          <p className="text-neutral-500 text-[10px] mt-1 font-mono uppercase tracking-wider">
             // {line.name.replace('NORC ', '')}
          </p>
        </div>
        <span className="text-white text-xs font-mono border border-neutral-800 px-2 py-1">
            ${product.price.toFixed(0)}
        </span>
      </div>
    </div>
  );
};