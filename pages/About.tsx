import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { LINES } from '../constants';

export const About = () => (
  <div className="norc-home institutional-page">
    <section className="brand-intro home-section">
      <div><p className="eyebrow">A marca / NORC</p><h1>PROPÓSITO.<br /><span>EM MOVIMENTO.</span></h1><p className="section-description">A NORC conecta a precisão do design à força do movimento humano. Uma marca para quem encontra na disciplina uma forma de crescer e na própria identidade uma forma de se expressar.</p><Link className="pill pill-white" to="/#linhas">Explore nossas expressões <ArrowUpRight size={18} /></Link></div>
      <img src="/isotipo-norc.png" alt="Símbolo da NORC" />
    </section>
    <section className="home-section brand-principles">
      <p className="eyebrow">Aquilo em que acreditamos</p>
      <div className="principle-grid">
        <article><span className="principle-number">01 / PROPÓSITO</span><h2>DESIGN COM<br /><span>INTENÇÃO.</span></h2><p>Cada escolha tem uma razão. Unimos expressão e funcionalidade para acompanhar uma vida em movimento.</p></article>
        <article><span className="principle-number">02 / VISÃO</span><h2>EVOLUIR<br /><span>TODOS OS DIAS.</span></h2><p>Enxergamos o movimento como uma filosofia de vida. A constância transforma pequenos passos em novos caminhos.</p></article>
        <article><span className="principle-number">03 / VALORES</span><h2>ESSÊNCIA<br /><span>EM CADA DETALHE.</span></h2><p>Integridade no design. Respeito pela disciplina. Liberdade para construir a própria identidade.</p></article>
      </div>
    </section>
    <section id="manifesto" className="home-section manifesto-section brand-manifesto">
      <p className="eyebrow">Nosso manifesto</p><h2><span>SOMOS FORJADOS NA DISCIPLINA.</span><br />MOVIDOS PELO PROPÓSITO.</h2>
      <p className="section-description">Para quem encontra força na constância.<br />Para quem cultiva clareza em meio ao ruído.<br />Para quem faz da cidade um espaço de expressão.<br />Para quem encontra liberdade no próprio ritmo.</p>
      <p className="section-description">Acreditamos que evoluir é um gesto diário.<br />Corpo presente. Mente alinhada. Movimento preciso.</p>
      <p className="brand-signature">NORC — PRECISION IN MOTION.</p>
    </section>
    <section className="home-section collections-section"><div className="section-heading"><div><p className="eyebrow">Nossa identidade</p><h2><span>QUATRO EXPRESSÕES.</span><br />UM MESMO PROPÓSITO.</h2></div></div><div className="collection-grid">{Object.values(LINES).map(line => <Link to={'/line/' + line.id} className="collection-card" key={line.id} style={{ '--line-color': line.color } as React.CSSProperties}><img src={line.heroImage} alt={line.name} loading="lazy" /><div className="collection-shade" /><div className="collection-content"><p>{line.subhead}</p><h3>{line.id}</h3><span className="collection-action">Conheça a essência <ArrowUpRight size={20} /></span></div></Link>)}</div></section>
  </div>
);
