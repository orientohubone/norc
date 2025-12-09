import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileMenu } from './MobileMenu';
import { CartSidebar } from './CartSidebar';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isCartOpen, toggleCart } = useCart();

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden flex flex-col">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onToggleCart={toggleCart}
      />

      {/* Main Content */}
      <main className="pt-0 flex-grow">
        {children}
      </main>

      <Footer />

      <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </div>
  );
};