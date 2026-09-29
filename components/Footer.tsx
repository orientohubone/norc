import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { LINES } from '../constants';

export const Footer = () => <footer className="norc-footer"><div className="footer-top"><div><Link to="/" aria-label="NORC — início"><img src="/logonorc.png" alt="NORC" /></Link><p>Forjados na disciplina.<br />Movidos pelo propósito.</p></div><nav aria-label="Linhas da marca"><span>Explore as linhas</span>{Object.values(LINES).map(line => <Link key={line.id} to={'/line/' + line.id}><i style={{ background: line.color }} />{line.name}</Link>)}</nav><nav aria-label="Institucional"><span>Universo NORC</span><Link to="/#linhas">Nosso universo</Link><Link to="/about">Nossa essência</Link><Link to="/identidade-visual">Identidade visual</Link><Link to="/feira">NORC na feira</Link><Link to="/app">App NORC</Link><Link to="/">Início</Link></nav><button className="pill pill-outline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Voltar ao topo <ArrowUp size={16} /></button></div><div className="footer-bottom"><span>PRECISION IN MOTION.</span><span>© {new Date().getFullYear()} NORC. Todos os direitos reservados.</span></div><div className="footer-credit"><a className="footer-credit-link" href="https://orientohub.com.br" target="_blank" rel="noopener noreferrer" aria-label="Desenvolvido por Orientohub — visitar site em nova aba"><img src="/capa%20perfil%20whats.png" alt="" width="1080" height="1080" loading="lazy" /><span className="footer-credit-text"><span>Desenvolvido por</span><strong>Orientohub</strong></span><ArrowUpRight size={18} aria-hidden="true" /></a></div></footer>;





