import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ProductCard } from '../components/ProductCard';
import { LINES, PRODUCTS } from '../constants';
import { ArrowDown } from 'lucide-react';

export const Home = () => {
  const navigate = useNavigate();
  const manifestoRef = useRef<HTMLDivElement>(null);
  const [manifestoVisible, setManifestoVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setManifestoVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (manifestoRef.current) {
      observer.observe(manifestoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        
        {/* Composite Background of 4 Lines */}
        <div className="absolute inset-0 z-0">
            {/* Top Left - FORCE (Green) */}
            <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-cover bg-center opacity-40 mix-blend-screen transition-opacity duration-1000"
                 style={{ 
                     backgroundImage: `url(${LINES.FORCE.heroImage})`,
                     maskImage: 'linear-gradient(to bottom right, black 20%, transparent 100%)',
                     WebkitMaskImage: 'linear-gradient(to bottom right, black 20%, transparent 100%)'
                 }} 
            />
            {/* Top Right - MIND (Blue) */}
            <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-cover bg-center opacity-40 mix-blend-screen transition-opacity duration-1000"
                 style={{ 
                     backgroundImage: `url(${LINES.MIND.heroImage})`,
                     maskImage: 'linear-gradient(to bottom left, black 20%, transparent 100%)',
                     WebkitMaskImage: 'linear-gradient(to bottom left, black 20%, transparent 100%)'
                 }} 
            />
            {/* Bottom Left - URBAN (Purple) */}
            <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-cover bg-center opacity-40 mix-blend-screen transition-opacity duration-1000"
                 style={{ 
                     backgroundImage: `url(${LINES.URBAN.heroImage})`,
                     maskImage: 'linear-gradient(to top right, black 20%, transparent 100%)',
                     WebkitMaskImage: 'linear-gradient(to top right, black 20%, transparent 100%)'
                 }} 
            />
            {/* Bottom Right - CYCLE (Orange) */}
            <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-cover bg-center opacity-40 mix-blend-screen transition-opacity duration-1000"
                 style={{ 
                     backgroundImage: `url(${LINES.CYCLE.heroImage})`,
                     maskImage: 'linear-gradient(to top left, black 20%, transparent 100%)',
                     WebkitMaskImage: 'linear-gradient(to top left, black 20%, transparent 100%)'
                 }} 
            />

            {/* Ambient Colors (Nebula effect) */}
            <div className="absolute inset-0 blur-[120px] opacity-30 animate-pulse">
                <div className="absolute top-0 left-1/4 w-1/2 h-1/2 rounded-full" style={{ background: LINES.FORCE.color }}></div>
                <div className="absolute top-0 right-1/4 w-1/2 h-1/2 rounded-full" style={{ background: LINES.MIND.color }}></div>
                <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 rounded-full" style={{ background: LINES.URBAN.color }}></div>
                <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 rounded-full" style={{ background: LINES.CYCLE.color }}></div>
            </div>

            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/50 to-black"></div>
        </div>

        {/* HUD / Tech Overlay */}
        <div className="absolute inset-0 pointer-events-none z-10 p-6 md:p-12 flex flex-col justify-between">
            {/* Top Bar */}
            <div className="flex justify-between items-start font-mono text-[10px] md:text-xs text-white/50 tracking-widest uppercase">
                <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full animate-ping"/>SYS.STATUS: ONLINE</span>
                    <span>LOC: 59.3293° N, 18.0686° E</span>
                </div>
                <div className="flex gap-4">
                    <span>T: {currentTime}</span>
                    <span className="text-white/80">[ REC ]</span>
                </div>
            </div>
            
            {/* Center Grid Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] border border-white/5 rounded-none pointer-events-none">
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/30"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/30"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/30"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/30"></div>
                
                {/* Crosshairs */}
                <div className="absolute top-1/2 left-0 w-3 h-[1px] bg-white/30"></div>
                <div className="absolute top-1/2 right-0 w-3 h-[1px] bg-white/30"></div>
                <div className="absolute top-0 left-1/2 w-[1px] h-3 bg-white/30"></div>
                <div className="absolute bottom-0 left-1/2 w-[1px] h-3 bg-white/30"></div>
            </div>

            {/* Bottom Bar */}
            <div className="flex justify-between items-end font-mono text-[10px] md:text-xs text-white/50 tracking-widest uppercase">
                <div className="flex flex-col gap-1">
                   <span>SEQ: 001-ALPHA</span>
                   <span>V.2.0.4</span>
                </div>
                <div className="text-right flex flex-col gap-1">
                    <div>PRECISION IN MOTION</div>
                    <div>EST. 2024</div>
                </div>
            </div>
        </div>
        
        {/* Main Title Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
          <h1 className="font-heading text-6xl md:text-[10rem] italic font-bold tracking-tighter mb-2 text-white drop-shadow-2xl mix-blend-overlay leading-none">
            NORC
          </h1>
          <h1 className="absolute font-heading text-6xl md:text-[10rem] italic font-bold tracking-tighter mb-2 text-transparent stroke-text leading-none select-none pointer-events-none" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)'}}>
            NORC
          </h1>
          <p className="text-sm md:text-xl uppercase tracking-[0.5em] mb-12 text-neutral-300 z-20 font-light">
            Precision in Motion
          </p>
          <div className="z-20">
            <Button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                Forge Your Path
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/30 z-20">
          <ArrowDown size={24} />
        </div>
      </section>

      {/* Lines Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {Object.values(LINES).map((line) => (
          <div 
            key={line.id}
            className="group relative h-[50vh] md:h-screen bg-black overflow-hidden border border-neutral-900 cursor-pointer"
            onClick={() => navigate(`/line/${line.id}`)}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-40 grayscale group-hover:grayscale-0"
              style={{ backgroundImage: `url(${line.heroImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
            
            {/* Tech grid overlay on hover */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 transition-all duration-300 transform group-hover:-translate-y-4">
              <div className="flex items-center gap-4 mb-4">
                   <div className="h-[1px] w-8 bg-neutral-600 group-hover:bg-white transition-colors" />
                   <span 
                    className="text-[10px] font-bold font-mono uppercase tracking-widest text-neutral-400 group-hover:text-white"
                    >
                    Code: {line.id}
                  </span>
              </div>
              
              <h2 className="font-heading text-4xl md:text-7xl mb-2 text-white italic transition-colors duration-300" style={{ textShadow: `0 0 0px ${line.color}` }}>
                  {line.name.split(' ')[1]}
              </h2>
              <p 
                className="font-mono text-xs uppercase tracking-widest mt-2"
                style={{ color: line.color }}
              >
                // {line.subhead}
              </p>
            </div>

            {/* Hover Color Line */}
            <div 
              className="absolute top-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{ backgroundColor: line.color }}
            />
          </div>
        ))}
      </section>

      {/* Manifesto Section */}
      <section ref={manifestoRef} className="py-32 md:py-48 bg-black px-6 flex justify-center items-center relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-neutral-900 rounded-full opacity-20 pointer-events-none animate-[spin_60s_linear_infinite]" />
        
        <div className={`max-w-4xl text-center transition-all duration-1000 transform ${manifestoVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h3 className="font-heading text-3xl md:text-5xl leading-tight md:leading-snug uppercase tracking-wide">
            <span className="block mb-4 text-neutral-600 font-light">Somos forjados na disciplina.</span>
            <span className="block mb-4 text-neutral-400">Moldados pela precisão.</span>
            <span className="block mb-8 text-white">Movidos pelo propósito.</span>
            <span className="block text-4xl md:text-7xl mt-12 italic text-white mix-blend-difference">NORC — Precision in Motion.</span>
          </h3>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-neutral-950 px-6 border-t border-neutral-900">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12 border-b border-neutral-900 pb-4">
            <h2 className="font-heading text-3xl md:text-4xl uppercase">Featured Collection</h2>
            <Link to="/shop" className="hidden md:flex items-center text-xs font-mono uppercase tracking-widest hover:text-white text-neutral-500 transition-colors">
              [ View All ]
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Button onClick={() => navigate('/shop')} variant="secondary">View All Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
};