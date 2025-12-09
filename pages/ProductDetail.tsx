import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PRODUCTS, LINES } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/Button';
import { useCart } from '../context/CartContext';
import { Plus, Minus } from 'lucide-react';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [activeImage, setActiveImage] = useState<string>(product?.image || '');

  if (!product) return <Navigate to="/shop" />;

  const line = LINES[product.lineId];
  const relatedProducts = PRODUCTS.filter((p) => p.lineId === product.lineId && p.id !== product.id).slice(0, 4);
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="pt-24 md:pt-32 pb-24 min-h-screen bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Gallery */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="aspect-[3/4] bg-neutral-900 overflow-hidden w-full relative group">
              <img 
                src={activeImage || product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-zoom-in"
              />
              <div 
                className="absolute top-6 left-6 px-3 py-1 text-xs font-bold uppercase text-black"
                style={{ backgroundColor: line.color }}
              >
                {line.name}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div 
                className={`aspect-square bg-neutral-900 cursor-pointer border ${activeImage === product.image ? 'border-white' : 'border-transparent'}`}
                onClick={() => setActiveImage(product.image)}
              >
                <img src={product.image} alt="Thumbnail 1" className="w-full h-full object-cover" />
              </div>
              <div 
                className={`aspect-square bg-neutral-900 cursor-pointer border ${activeImage === product.secondaryImage ? 'border-white' : 'border-transparent'}`}
                onClick={() => setActiveImage(product.secondaryImage)}
              >
                <img src={product.secondaryImage} alt="Thumbnail 2" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 flex flex-col justify-start pt-4">
            <h1 className="font-heading text-4xl md:text-5xl uppercase font-bold mb-2">{product.name}</h1>
            <div className="font-mono text-2xl text-neutral-400 mb-8">${product.price.toFixed(2)}</div>
            
            <p className="text-neutral-300 leading-relaxed mb-8 border-l-2 pl-4" style={{ borderColor: line.color }}>
              {product.description}
            </p>

            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">Select Size</h3>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center border font-bold text-sm transition-all duration-200 ${
                      selectedSize === size 
                        ? 'bg-white text-black border-white' 
                        : 'bg-transparent text-white border-neutral-700 hover:border-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <Button 
              variant="line" 
              lineColor={line.color} 
              className="w-full text-black mb-8"
              onClick={() => addToCart(product, selectedSize)}
            >
              Add To Cart
            </Button>

            <div className="space-y-4 border-t border-neutral-800 pt-8">
              <div className="group cursor-pointer">
                <div className="flex justify-between items-center py-2">
                  <span className="font-heading uppercase text-lg">Tech Specs</span>
                  <Plus size={16} />
                </div>
                <ul className="text-sm text-neutral-400 list-disc list-inside pl-2 pt-2">
                  {product.specs.map((spec, i) => <li key={i}>{spec}</li>)}
                </ul>
              </div>
              <div className="border-t border-neutral-800 pt-4">
                 <div className="flex justify-between items-center py-2 cursor-pointer">
                  <span className="font-heading uppercase text-lg">Shipping & Returns</span>
                  <Plus size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {relatedProducts.length > 0 && (
          <div className="mt-32">
            <h2 className="font-heading text-3xl uppercase mb-12">Complete The Look</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
