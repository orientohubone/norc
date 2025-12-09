import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, ShoppingBag, X, Search, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './Button';
import { LINES } from '../constants';
import { Logo } from './Logo';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isCartOpen, toggleCart, cart, removeFromCart, cartTotal } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden flex flex-col">
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-black/95 backdrop-blur-md border-neutral-900 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 relative flex items-center justify-between">
          
          {/* Left Side: Mobile Menu OR Desktop Nav */}
          <div className="flex items-center z-20">
            {/* Mobile Hamburger */}
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-white hover:text-neutral-300 transition-colors md:hidden">
              <Menu size={24} />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/shop" className="text-sm font-bold uppercase tracking-widest hover:text-neutral-400 transition-colors">
                Shop
              </Link>
              <div className="h-4 w-px bg-neutral-800 mx-2"></div>
              {Object.values(LINES).map((line) => (
                <Link 
                  key={line.id}
                  to={`/line/${line.id}`}
                  className="text-xs font-bold uppercase tracking-widest transition-colors duration-300"
                  style={{ color: '#fff' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = line.color}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                >
                  {line.name.replace('NORC ', '')}
                </Link>
              ))}
              <Link to="/about" className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors ml-4">
                About
              </Link>
            </nav>
          </div>

          {/* Center Logo - Positioned Absolute to be perfectly centered relative to the screen */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
             <Link to="/">
                <Logo className="h-8 md:h-12 w-auto" />
             </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6 z-20">
            <button className="text-white hover:text-neutral-300 transition-colors hidden md:block">
              <Search size={24} />
            </button>
            <button onClick={toggleCart} className="text-white hover:text-neutral-300 transition-colors relative">
              <ShoppingBag size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-none">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-0 flex-grow">
        {children}
      </main>

      {/* Tech Footer */}
      <footer className="bg-black text-white border-t border-neutral-800">
        
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
                    <Logo className="h-16 md:h-20 w-auto mb-8" />
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
      </footer>

      {/* Cart Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-black border-l border-neutral-800 z-50 transform transition-transform duration-500 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="h-full flex flex-col p-6">
          <div className="flex items-center justify-between mb-8 border-b border-neutral-800 pb-4">
            <h2 className="font-heading text-2xl">Cart ({cart.length})</h2>
            <button onClick={toggleCart} className="text-neutral-400 hover:text-white">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-6 no-scrollbar">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-neutral-500 space-y-4">
                <span className="text-lg">Your cart is empty.</span>
                <Button variant="secondary" onClick={() => {toggleCart(); navigate('/shop');}}>Start Shopping</Button>
              </div>
            ) : (
              cart.map((item, index) => (
                <div key={`${item.id}-${item.selectedSize}-${index}`} className="flex space-x-4">
                  <img src={item.image} alt={item.name} className="w-20 h-24 object-cover bg-neutral-900" />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-heading text-sm uppercase">{item.name}</h4>
                        <button onClick={() => removeFromCart(item.id)} className="text-neutral-500 hover:text-white text-xs">Remove</button>
                      </div>
                      <p className="text-xs text-neutral-400 mt-1">{item.selectedSize} | Qty: {item.quantity}</p>
                    </div>
                    <p className="font-mono text-sm">${item.price * item.quantity}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t border-neutral-800 pt-6 mt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm uppercase tracking-wider text-neutral-400">Subtotal</span>
                <span className="font-mono text-xl">${cartTotal.toFixed(2)}</span>
              </div>
              <Button className="w-full bg-white text-black hover:bg-neutral-200">Checkout</Button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
             <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Logo className="h-6 w-auto" />
             </Link>
             <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
          </div>
          
          <nav className="flex flex-col space-y-6">
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="font-heading text-4xl hover:text-neutral-400 transition-colors">Shop All</Link>
            {Object.values(LINES).map((line) => (
               <Link 
                 key={line.id} 
                 to={`/line/${line.id}`} 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="font-heading text-4xl uppercase transition-colors flex items-center"
                 style={{ color: isMobileMenuOpen ? '#fff' : line.color }} 
               >
                 <span className="mr-2" style={{color: line.color}}>//</span> {line.name.replace('NORC ', '')}
               </Link>
            ))}
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="font-heading text-4xl hover:text-neutral-400 transition-colors mt-8">About</Link>
          </nav>
        </div>
      </div>
      
      {/* Overlay Backdrop for Cart */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={toggleCart} />
      )}

      <style>{`
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};