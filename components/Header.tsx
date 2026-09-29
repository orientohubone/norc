import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, ArrowUpRight } from 'lucide-react';

interface HeaderProps { isMobileMenuOpen: boolean; setIsMobileMenuOpen: (open: boolean) => void; }
export const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => (
  <header className="norc-header">
    <div className="announcement"><span>NORC / PRECISION IN MOTION</span><span>FORÇA. FOCO. ESTILO. MOVIMENTO.</span></div>
    <div className="header-main"><Link to="/" aria-label="NORC — início" className="header-logo"><img src="/logonorc.png" alt="NORC" /></Link>
      <nav className="desktop-nav" aria-label="Navegação principal">{[['/', 'Início'], ['/about', 'A marca'], ['/line/FORCE', 'Force'], ['/line/MIND', 'Mind'], ['/line/URBAN', 'Urban'], ['/line/CYCLE', 'Cycle']].map(([to, label]) => <NavLink key={to} to={to} end className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}</nav>
      <div className="header-actions"><Link className="pill pill-white brand-header-cta" to="/#linhas">Nosso universo <ArrowUpRight size={18} /></Link><button className="mobile-toggle" aria-label="Abrir menu" aria-expanded={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(true)}><Menu size={24} /></button></div>
    </div>
  </header>
);
