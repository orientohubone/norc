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
    const manifestoLines = line.description
        .split('.')
        .map((s) => s.trim())
        .filter(Boolean)
        .map((s) => (s.endsWith('.') ? s : s + '.'));

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
                         <div key={index} className="group relative">
                             {index === 0 && (
                                 <div className="mb-8">
                                     <img 
                                         src={`/logonorc-${line.id.toLowerCase()}.png`} 
                                         alt={line.name} 
                                         className="w-full max-w-xs mb-6 object-contain"
                                     />
                                 </div>
                             )}
                             <div className="pl-8 border-l-2 border-neutral-800 hover:border-white transition-colors duration-500" style={{ '--hover-color': line.color } as React.CSSProperties}>
                                 <h2 
                                     className="font-heading text-4xl md:text-6xl uppercase leading-tight text-neutral-500 transition-colors duration-500 cursor-pointer"
                                     style={{ color: 'inherit' }}
                                     onMouseEnter={(e) => {
                                         (e.currentTarget as HTMLElement).style.color = line.color;
                                     }}
                                     onMouseLeave={(e) => {
                                         (e.currentTarget as HTMLElement).style.color = '#a1a1a6';
                                     }}
                                 >
                                     {msg}
                                 </h2>
                             </div>
                         </div>
                     ))}
                </div>

                {/* Right: Technical Description & Influences */}
                <div className="flex flex-col justify-center bg-neutral-900/50 p-8 md:p-12 border border-neutral-800">
                    <div className="mb-8">
                        <span className="text-xs font-mono uppercase text-neutral-500 mb-2 block">// MANIFESTO</span>
                            <div className="mt-2">
                                <pre className="bg-neutral-900 p-4 rounded-md text-sm font-mono text-neutral-300 leading-relaxed overflow-x-auto" style={{ borderLeft: `4px solid ${line.color}` }}>
                                    <code>
                                        <div className="space-y-2">
                                            {manifestoLines.map((l, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <span className="text-[10px] text-neutral-500 select-none">{String(idx + 1).padStart(2, '0')}</span>
                                                    <span className="whitespace-pre-wrap">{l}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </code>
                                </pre>
                            </div>
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
      
            {/* Footer Visual Text (interactive stroke/highlight follows mouse) */}
            <div className="py-20 flex justify-center items-center overflow-hidden select-none">
                <div
                    className="relative w-full flex justify-center"
                    onMouseMove={(e) => {
                        const container = e.currentTarget as HTMLDivElement;
                        const rect = container.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        // set CSS variables on the container so children can use them
                        container.style.setProperty('--mouse-x', `${x}px`);
                        container.style.setProperty('--mouse-y', `${y}px`);
                        const h = container.querySelector('h1') as HTMLHeadingElement | null;
                        if (h) {
                            // color the stroke to the line color while hovering
                            (h.style as any).WebkitTextStroke = `2px ${line.color}`;
                            h.style.opacity = '1';
                        }
                    }}
                    onMouseEnter={(e) => {
                        const c = e.currentTarget as HTMLDivElement;
                        const h = c.querySelector('h1') as HTMLHeadingElement | null;
                        if (h) h.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                        const c = e.currentTarget as HTMLDivElement;
                        const h = c.querySelector('h1') as HTMLHeadingElement | null;
                        if (h) {
                            // revert stroke to white and fade
                            (h.style as any).WebkitTextStroke = '2px white';
                            h.style.opacity = '0.1';
                        }
                        // hide ring by moving it off-screen (keeps DOM simple)
                        const ring = c.querySelector('.line-stroke-ring') as HTMLDivElement | null;
                        if (ring) {
                            ring.style.opacity = '0';
                        }
                    }}
                >
                    <h1
                        className="text-[15vw] font-heading font-bold italic leading-none text-transparent"
                        style={{
                            WebkitTextStroke: '2px white',
                            color: 'transparent',
                            WebkitTextFillColor: 'transparent',
                            transition: 'opacity 250ms ease, -webkit-text-stroke-color 150ms linear',
                            textAlign: 'center',
                            opacity: 0.1,
                        }}
                    >
                        {line.id}
                    </h1>

                    {/* Colored ring that follows the mouse, visually emphasizes the border */}
                    <div
                        className="line-stroke-ring pointer-events-none absolute"
                        style={{
                            left: 'var(--mouse-x, 50%)',
                            top: 'var(--mouse-y, 50%)',
                            width: '10rem',
                            height: '10rem',
                            borderRadius: '9999px',
                            transform: 'translate(-50%, -50%)',
                            border: `2px solid ${line.color}`,
                            opacity: 0,
                            transition: 'left 80ms linear, top 80ms linear, opacity 200ms ease',
                            filter: 'blur(6px) drop-shadow(0 0 8px rgba(0,0,0,0.6))',
                        }}
                    />
                </div>
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