import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ShoppingBag, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { LINES } from '../constants';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  onToggleCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen, onToggleCart }) => {
  const { cart } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
          <Link to="/">
            <img 
              src="/logonorc.png" 
              alt="NORC" 
              className="h-10 md:h-14 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-6 z-20">
          <button className="text-white hover:text-neutral-300 transition-colors hidden md:block">
            <Search size={24} />
          </button>
          <button onClick={onToggleCart} className="text-white hover:text-neutral-300 transition-colors relative">
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
  );
};
