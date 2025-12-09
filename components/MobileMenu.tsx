import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { LINES } from '../constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div 
      className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="flex flex-col h-full p-8">
        <div className="flex justify-between items-center mb-12">
          <Link to="/" onClick={onClose}>
            <img 
              src="/logonorc.png" 
              alt="NORC" 
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button onClick={onClose}><X size={32} /></button>
        </div>
        
        <nav className="flex flex-col space-y-6">
          <Link to="/shop" onClick={onClose} className="font-heading text-4xl hover:text-neutral-400 transition-colors">Shop All</Link>
          {Object.values(LINES).map((line) => (
            <Link 
              key={line.id} 
              to={`/line/${line.id}`} 
              onClick={onClose}
              className="font-heading text-4xl uppercase transition-colors flex items-center"
              style={{ color: '#fff' }} 
            >
              <span className="mr-2" style={{color: line.color}}>//</span> {line.name.replace('NORC ', '')}
            </Link>
          ))}
          <Link to="/about" onClick={onClose} className="font-heading text-4xl hover:text-neutral-400 transition-colors mt-8">About</Link>
        </nav>
      </div>
    </div>
  );
};
