import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { LINES, PRODUCTS } from '../constants';
import { LineID } from '../types';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/Button';

export const LinePage = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id || !LINES[id as LineID]) {
    return <Navigate to="/" />;
  }

  const line = LINES[id as LineID];
  const products = PRODUCTS.filter((p) => p.lineId === line.id);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={line.heroImage} 
            alt={line.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
          {/* Tech Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <div className="max-w-6xl">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-1" style={{ backgroundColor: line.color }} />
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-white">
                        Line ID: {line.id} // {line.symbolDescription}
                    </span>
                </div>
                <h1 className="font-heading text-6xl md:text-9xl italic font-bold tracking-tighter text-white uppercase leading-none mb-4">
                    {line.name.replace('NORC ', '')}
                </h1>
                <p className="font-sans text-xl md:text-2xl font-bold uppercase tracking-widest" style={{ color: line.color }}>
                    {line.subhead}
                </p>
            </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="border-y border-neutral-800 bg-neutral-950 overflow-hidden py-3">
        <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] flex items-center">
            {[...Array(10)].map((_, i) => (
                <React.Fragment key={i}>
                    <span className="text-sm font-mono uppercase tracking-[0.2em] text-neutral-500 mx-8">
                        PRECISION IN MOTION
                    </span>
                    <span className="text-sm font-bold uppercase mx-8" style={{ color: line.color }}>
                        {line.name}
                    </span>
                </React.Fragment>
            ))}
        </div>
      </div>

      {/* Philosophy & DNA Grid */}
      <section className="py-24 px-6 md:px-12 border-b border-neutral-900">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
                
                {/* Left: Key Messages (Big Typography) */}
                <div className="flex flex-col justify-center space-y-12">
                     {line.keyMessages.map((msg, index) => (
                         <div key={index} className="group relative pl-8 border-l-2 border-neutral-800 hover:border-white transition-colors duration-500">
                             <h2 className="font-heading text-4xl md:text-6xl uppercase leading-tight text-neutral-500 group-hover:text-white transition-colors duration-500">
                                 {msg}
                             </h2>
                         </div>
                     ))}
                </div>

                {/* Right: Technical Description & Influences */}
                <div className="flex flex-col justify-center bg-neutral-900/50 p-8 md:p-12 border border-neutral-800">
                    <div className="mb-8">
                        <span className="text-xs font-mono uppercase text-neutral-500 mb-2 block">// MANIFESTO</span>
                        <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                            {line.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 border-t border-neutral-800 pt-8">
                        <div>
                            <span className="text-xs font-mono uppercase text-neutral-500 mb-2 block">// DNA & INFLUENCES</span>
                            <ul className="space-y-2">
                                {line.influences.map((inf, i) => (
                                    <li key={i} className="flex items-center text-sm uppercase tracking-wide font-bold">
                                        <span className="w-1.5 h-1.5 mr-3" style={{ backgroundColor: line.color }} />
                                        {inf}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                             <span className="text-xs font-mono uppercase text-neutral-500 mb-2 block">// SYMBOL</span>
                             <div className="text-sm uppercase tracking-wide font-bold flex items-center">
                                {line.symbolDescription}
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
                 <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block mb-2">
                    // EQUIPMENT
                 </span>
                <h2 className="font-heading text-4xl md:text-5xl uppercase text-white">
                    {line.name} Series
                </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-32 flex justify-center">
             <div className="relative group">
                <div className="absolute -inset-1 rounded-sm blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" style={{ backgroundColor: line.color }}></div>
                <Button variant="line" lineColor={line.color} className="relative text-black">
                  View Full Collection
                </Button>
             </div>
          </div>
        </div>
      </section>
      
      {/* Footer Visual Text */}
      <div className="py-20 flex justify-center items-center overflow-hidden opacity-10 pointer-events-none select-none">
          <h1 className="text-[15vw] font-heading font-bold italic leading-none text-transparent stroke-text" style={{ WebkitTextStroke: '2px white' }}>
              {line.id}
          </h1>
      </div>

      <style>{`
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};