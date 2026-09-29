import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { LINES } from '../constants';

export const LinePage = () => {
  const { id } = useParams<{ id: string }>();
  const line = id ? LINES[id] : undefined;
  if (!line) return <Navigate to="/#linhas" replace />;
  return (
    <div className="norc-home institutional-page" style={{ '--norc-green': line.color } as React.CSSProperties}>
      <section className="norc-hero line-hero">
        <img className="hero-photo" src={line.heroImage} alt={line.name} fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-content"><p className="eyebrow">Uma expressão do universo NORC</p><h1>{line.id}</h1><p className="hero-description">{line.subhead}</p><Link to="/#linhas" className="pill pill-outline">Conheça as quatro linhas <ArrowUpRight size={18} /></Link></div>
      </section>
      <section className="home-section line-story">
        <div><img className="line-brand-logo" src={'/logonorc-' + line.id.toLowerCase() + '.png'} alt={line.name} loading="lazy" /><p className="eyebrow">A essência</p><h2>{line.manifesto}</h2></div>
        <div><p className="section-description">{line.description}</p><p className="eyebrow">Nossas inspirações</p><div className="influence-list">{line.influences.map(influence => <span key={influence}>{influence}</span>)}</div></div>
      </section>
      <section className="home-section brand-principles"><p className="eyebrow">O que nos move</p><div className="principle-grid">{line.keyMessages.map((message, index) => <article key={message}><span className="principle-number">0{index + 1}</span><h2>{message}</h2></article>)}</div></section>
      <section className="home-section"><div className="section-heading"><div><p className="eyebrow">A mesma essência. Outras expressões.</p><h2>CONTINUE<br /><span>EM MOVIMENTO.</span></h2></div><Link className="pill pill-outline" to="/about">Conheça a marca <ArrowUpRight size={18} /></Link></div><div className="collection-grid related-lines">{Object.values(LINES).filter(other => other.id !== line.id).map(other => <Link className="collection-card" to={'/line/' + other.id} key={other.id} style={{ '--line-color': other.color } as React.CSSProperties}><img src={other.heroImage} alt={other.name} loading="lazy" /><div className="collection-shade" /><div className="collection-content"><p>{other.subhead}</p><h3>{other.id}</h3><span className="collection-action">Conheça a essência <ArrowUpRight size={20} /></span></div></Link>)}</div></section>
    </div>
  );
};
