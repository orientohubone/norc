import React, { useState } from 'react';
import { PRODUCTS, LINES } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { LineID } from '../types';

export const Shop = () => {
  const [activeFilter, setActiveFilter] = useState<LineID | 'ALL'>('ALL');

  const filteredProducts = activeFilter === 'ALL' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.lineId === activeFilter);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-black text-white">
      <div className="container mx-auto px-6">
        <h1 className="font-heading text-6xl md:text-8xl italic font-bold mb-12 text-center">SHOP</h1>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          <button 
            onClick={() => setActiveFilter('ALL')}
            className={`text-sm uppercase tracking-[0.2em] px-4 py-2 border border-transparent transition-all ${activeFilter === 'ALL' ? 'text-white border-white' : 'text-neutral-500 hover:text-white'}`}
          >
            All Lines
          </button>
          {Object.values(LINES).map((line) => (
            <button
              key={line.id}
              onClick={() => setActiveFilter(line.id as LineID)}
              className={`text-sm uppercase tracking-[0.2em] px-4 py-2 border border-transparent transition-all`}
              style={{ 
                color: activeFilter === line.id ? line.color : undefined,
                borderColor: activeFilter === line.id ? line.color : 'transparent',
              }}
            >
              <span className={activeFilter === line.id ? '' : 'text-neutral-500 hover:text-white'}>
                {line.name}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
