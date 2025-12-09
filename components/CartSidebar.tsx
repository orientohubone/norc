import React from 'react';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-black border-l border-neutral-800 z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="h-full flex flex-col p-6">
          <div className="flex items-center justify-between mb-8 border-b border-neutral-800 pb-4">
            <h2 className="font-heading text-2xl">Cart ({cart.length})</h2>
            <button onClick={onClose} className="text-neutral-400 hover:text-white">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-6 no-scrollbar">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-neutral-500 space-y-4">
                <span className="text-lg">Your cart is empty.</span>
                <Button variant="secondary" onClick={() => {onClose(); navigate('/shop');}}>Start Shopping</Button>
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

      {/* Overlay Backdrop for Cart */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={onClose} />
      )}
    </>
  );
};
