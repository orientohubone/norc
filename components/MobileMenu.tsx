import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { LINES } from '../constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement as HTMLElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panel.current?.querySelector<HTMLElement>('a, button')?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab') return;
      const items = panel.current?.querySelectorAll<HTMLElement>('a, button');
      if (!items?.length) return;
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', handleKey);
    return () => { document.body.style.overflow = overflow; document.removeEventListener('keydown', handleKey); previous?.focus(); };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div ref={panel} role="dialog" aria-modal="true" aria-label="Menu de navegação"
      className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="flex flex-col h-full p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-12">
          <Link to="/" onClick={onClose}>
            <img 
              src="/logonorc.png" 
              alt="NORC" 
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button onClick={onClose} aria-label="Fechar menu"><X size={32} /></button>
        </div>
        
        <nav className="flex flex-col space-y-6">
          <Link to="/app" onClick={onClose} className="font-heading text-3xl">App NORC</Link>
          <Link to="/feira" onClick={onClose} className="font-heading text-3xl">NORC na feira</Link>
          <Link to="/identidade-visual" onClick={onClose} className="font-heading text-3xl">Identidade visual</Link>
          <Link to="/" onClick={onClose} className="font-heading text-3xl">Início</Link>
          <Link to="/#linhas" onClick={onClose} className="font-heading text-4xl hover:text-neutral-400 transition-colors">Nosso universo</Link>
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
          <Link to="/about" onClick={onClose} className="font-heading text-4xl hover:text-neutral-400 transition-colors mt-8">Essência</Link>
        </nav>
      </div>
    </div>
  );
};



