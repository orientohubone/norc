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

  const manifestoLinesHome = [
    'Somos forjados na disciplina.',
    'Moldados pela precisão.',
    'Movidos pelo propósito.',
    'NORC — Precision in Motion.'
  ];

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
            <div className="absolute inset-0 blur-[120px] opacity-30">
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
          <h1 className="font-heading text-8xl md:text-[14rem] italic font-black tracking-tighter mb-2 text-white drop-shadow-2xl mix-blend-overlay leading-none" style={{
            textShadow: '0 0 15px rgba(95, 208, 104, 0.3), 0 20px 40px rgba(0,0,0,0.8)'
          }}>
            NORC
          </h1>
          <h1 className="absolute font-heading text-8xl md:text-[14rem] italic font-black tracking-tighter mb-2 text-transparent stroke-text leading-none select-none pointer-events-none" style={{ WebkitTextStroke: '2px rgba(95, 208, 104, 0.25)'}}>
            NORC
          </h1>
          <div className="mb-12 z-20 flex items-center justify-center gap-4">
            <div className="h-1 w-12" style={{ backgroundColor: '#5FD068' }} />
            <p className="text-sm md:text-lg uppercase tracking-[0.3em] text-neutral-400 font-light">
              Precision in Motion
            </p>
            <div className="h-1 w-12" style={{ backgroundColor: '#5FD068' }} />
          </div>
          <div className="z-20">
            <Button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} style={{
              padding: '16px 48px',
              fontSize: '16px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              background: 'linear-gradient(135deg, #5FD068 0%, #4db857 100%)',
              boxShadow: '0 0 30px rgba(95, 208, 104, 0.6), 0 0 60px rgba(95, 208, 104, 0.3)',
              border: 'none',
              borderRadius: '4px',
              transition: 'all 300ms ease'
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 50px rgba(95, 208, 104, 0.9), 0 0 100px rgba(95, 208, 104, 0.5), 0 20px 60px rgba(0,0,0,0.9)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(95, 208, 104, 0.6), 0 0 60px rgba(95, 208, 104, 0.3)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)';
            }}>
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
          <div className="mx-auto max-w-2xl relative z-10">
            <CodeTypewriter lines={manifestoLinesHome} />
          </div>
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

// Typewriter component renders lines sequentially with a blinking cursor, styled like code
const CodeTypewriter: React.FC<{ lines: string[] }> = ({ lines }) => {
  const [completed, setCompleted] = useState<string[]>([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    if (currentLineIdx >= lines.length) {
      setIsDone(true);
      return;
    }

    const line = lines[currentLineIdx];
    if (currentCharIdx <= line.length) {
      const t = setTimeout(() => {
        if (!mounted) return;
        setCurrentCharIdx((c) => c + 1);
      }, 40 + Math.random() * 40);
      return () => {
        mounted = false;
        clearTimeout(t);
      };
    } else {
      // finish this line, pause, then go to next
      const pause = setTimeout(() => {
        setCompleted((prev) => [...prev, line]);
        setCurrentLineIdx((i) => i + 1);
        setCurrentCharIdx(0);
      }, 500);
      return () => clearTimeout(pause);
    }
  }, [currentCharIdx, currentLineIdx, lines]);

  const partial = currentLineIdx < lines.length ? lines[currentLineIdx].slice(0, currentCharIdx) : '';

  // Use NORC FORCE green for the highlighted last-line effect
  const highlightColor = LINES.FORCE?.color || '#5FD068';

  return (
    <div className="bg-neutral-900/40 backdrop-blur-sm p-6 rounded-md border border-neutral-800 font-mono text-left text-neutral-200">
      <pre className="whitespace-pre-wrap text-lg md:text-xl leading-relaxed">
        <code>
          {completed.map((l, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="text-neutral-500 w-12">{String(i + 1).padStart(2, '0')}</span>
              <span className="break-words">{l}</span>
            </div>
          ))}

          {currentLineIdx < lines.length && (
            <div className="flex gap-4 items-start">
              <span className="text-neutral-500 w-12">{String(completed.length + 1).padStart(2, '0')}</span>
              <span className="break-words">
                <span style={currentLineIdx === lines.length - 1 ? { color: highlightColor, fontWeight: 700 } : undefined}>
                  {partial}
                </span>
                <span className="inline-block ml-1 align-middle animate-blink">|</span>
              </span>
            </div>
          )}

          {isDone && (
            <div className="mt-4">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="inline-block w-2 h-2 rounded-full" style={{ background: highlightColor, boxShadow: `0 0 10px ${highlightColor}` }} />
                <span className="text-sm uppercase text-neutral-300">DESBLOQUEADO</span>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => navigate('/shop')}
                  className="px-6 py-3 bg-transparent border-2 font-bold rounded-md"
                  style={{ borderColor: highlightColor, color: highlightColor, boxShadow: `0 6px 20px ${highlightColor}22` }}
                >
                  Explore Collection
                </button>
              </div>
            </div>
          )}
        </code>
      </pre>
      <style>{`
        @keyframes blink { 50% { opacity: 0 } }
        .animate-blink { animation: blink 1s steps(2,start) infinite; }
      `}</style>
    </div>
  );
};