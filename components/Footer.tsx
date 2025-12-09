import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { LINES } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-neutral-800">
      {/* Line vazado text that follows mouse */}
      <div className="relative">
        <div className="w-full flex justify-center gap-8 py-6 px-4 overflow-hidden">
          {Object.values(LINES).map((line) => (
            <div
              key={line.id}
              onMouseMove={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                const rect = target.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                target.style.setProperty('--mouse-x', `${x}px`);
                target.style.setProperty('--mouse-y', `${y}px`);
                target.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                // gently fade the spotlight
                target.style.opacity = '0.25';
              }}
              className="relative cursor-none select-none"
              style={{
                width: 'min(32vw, 380px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // initialize css variables
                ['--mouse-x' as any]: '50%',
                ['--mouse-y' as any]: '50%',
                opacity: '0.25',
              }}
            >
              <span
                className="font-extrabold uppercase tracking-widest leading-none"
                style={{
                  fontSize: 'clamp(28px, 6vw, 96px)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent',
                  backgroundImage: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${line.color} 0%, ${line.color} 12%, rgba(255,255,255,0.06) 24%, transparent 40%)`,
                  transition: 'opacity 300ms ease, background-position 120ms linear',
                  textAlign: 'center',
                }}
              >
                {line.name.replace('NORC ', '')}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Top Marquee */}
      <div className="border-b border-neutral-800 py-4 bg-neutral-950 overflow-hidden relative z-10">
        <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] flex items-center">
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-sm font-mono uppercase tracking-[0.2em] text-neutral-500 mx-12">
                PRECISION IN MOTION
              </span>
              <span className="text-sm font-bold uppercase text-white mx-12">
                FORGE YOUR PATH
              </span>
              <span className="text-sm font-mono uppercase tracking-[0.2em] text-neutral-500 mx-12">
                ///
              </span>
              <span className="text-sm font-bold uppercase text-white mx-12">
                NORC SYSTEMS
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main Brutalist Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-neutral-800">
        
        {/* 1. Brand Block (Left) */}
        <div className="lg:col-span-5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-neutral-800 flex flex-col justify-between min-h-[300px]">
          <div>
            <img 
              src="/logonorc.png" 
              alt="NORC" 
              className="h-24 w-auto mb-8 object-contain"
            />
            <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest max-w-xs mt-4">
              // Est. 2024<br/>
              // Stockholm, SE<br/>
              // Advanced Performance Apparel
            </p>
          </div>
          <div className="mt-12">
            <p className="text-sm text-neutral-400 font-light italic">
              "Forge your path through discipline and precision."
            </p>
          </div>
        </div>

        {/* 2. Navigation Grid (Middle) */}
        <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-neutral-800 grid grid-cols-2">
          {/* Column 1: Lines */}
          <div className="border-r border-neutral-800 p-8 flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase text-neutral-600 tracking-widest mb-4">
              [ SECTORS ]
            </span>
            {Object.values(LINES).map((line) => (
              <Link 
                key={line.id} 
                to={`/line/${line.id}`}
                className="text-sm font-bold uppercase tracking-wider hover:pl-2 transition-all duration-200 flex items-center group"
              >
                <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-neutral-500 mr-0 group-hover:mr-1">→</span>
                <span className="group-hover:text-white transition-colors" style={{color: '#999'}} 
                  onMouseEnter={(e) => e.currentTarget.style.color = line.color}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#999'}>
                  {line.name.replace('NORC ', '')}
                </span>
              </Link>
            ))}
          </div>

          {/* Column 2: Support */}
          <div className="p-8 flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase text-neutral-600 tracking-widest mb-4">
              [ SYSTEM ]
            </span>
            {['Shop All', 'About', 'Manifesto', 'Contact', 'FAQ'].map((item) => (
              <Link 
                key={item} 
                to={item === 'Shop All' ? '/shop' : '/about'}
                className="text-sm font-bold uppercase tracking-wider text-neutral-400 hover:text-white hover:pl-2 transition-all duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* 3. Newsletter (Right) */}
        <div className="lg:col-span-3 p-8 flex flex-col">
          <span className="font-mono text-[10px] uppercase text-neutral-600 tracking-widest mb-6">
            [ INITIATE UPDATE PROTOCOL ]
          </span>
          <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
            Subscribe for exclusive drops, technical briefings, and early access to new lines.
          </p>
          
          <form className="flex flex-col gap-4 mt-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="ENTER_EMAIL_ADDRESS" 
                className="w-full bg-neutral-900 border border-neutral-800 p-4 text-xs font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-white focus:bg-black transition-all rounded-none uppercase"
              />
              <div className="absolute right-0 top-0 h-full w-10 flex items-center justify-center pointer-events-none">
                <span className="text-neutral-600 group-focus-within:text-white group-focus-within:animate-pulse">_</span>
              </div>
            </div>
            <button className="w-full bg-white text-black font-bold uppercase text-xs py-4 hover:bg-neutral-300 transition-colors tracking-widest flex items-center justify-center gap-2 group">
              Confirm 
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform"/>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Tech Bar */}
      <div className="p-4 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-neutral-600 uppercase tracking-widest bg-black">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            ALL SYSTEMS OPERATIONAL
          </span>
          <span className="hidden md:inline">LAT: 59.3293° N</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">PRIVACY_PROTOCOL</a>
          <a href="#" className="hover:text-white transition-colors">TERMS_OF_USE</a>
          <span>© 2024 NORC INC.</span>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
      `}</style>
    </footer>
  );
};
