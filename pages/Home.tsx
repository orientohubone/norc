import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown, Layers, Zap, Target, Plus } from 'lucide-react';
import { LINES, BRAND_IMAGES } from '../constants';

const questions = [
  ['O que é a NORC?', 'Uma marca que conecta design, disciplina e movimento. Nossa essência nasce do encontro entre performance e expressão pessoal, no treino, na cidade e na vida.'],
  ['O que significa Precision in Motion?', 'É a ideia que orienta a NORC: agir com intenção, valorizar cada detalhe e encontrar propósito no movimento. A evolução é construída todos os dias.'],
  ['O que representam as quatro linhas?', 'Force expressa força e disciplina. Mind, clareza e foco. Urban, estilo e funcionalidade. Cycle, ritmo e liberdade. Quatro expressões de uma mesma identidade.'],
  ['Preciso me identificar com apenas uma linha?', 'Não. Nossa identidade acompanha diferentes momentos da vida. Você pode encontrar força em Force, equilíbrio em Mind, expressão em Urban e liberdade em Cycle.'],
];

export const Home = () => (
  <div className="norc-home">
    <section className="norc-hero" aria-labelledby="hero-title">
      <img className="hero-photo" src={BRAND_IMAGES.hero} alt="Atleta durante um treino de força" fetchPriority="high" />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow">Disciplina no corpo. Precisão no movimento.</p>
        <h1 id="hero-title">FEITO PARA<br /><span>IR ALÉM.</span></h1>
        <p className="hero-description">Do primeiro movimento à próxima conquista.<br />Viva o seu propósito. Encontre o seu ritmo.</p>
        <div className="hero-actions">
          <Link className="pill pill-white" to="/about">Conheça a marca <ArrowUpRight size={19} /></Link>
          <button className="pill pill-outline" onClick={() => document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' })}>Essência NORC <ArrowDown size={17} /></button>
        </div>
      </div>
      <div className="hero-notes"><span><Target /> Design com<br />propósito</span><span><Zap /> Performance em<br />cada movimento</span></div>
      <span className="hero-index">01 / NORC — PRECISION IN MOTION</span>
    </section>
    <div className="brand-strip"><span>UM PROPÓSITO. QUATRO EXPRESSÕES.</span>{Object.values(LINES).map(line => <Link key={line.id} to={'/line/' + line.id}><i style={{ background: line.color }} />{line.id}</Link>)}</div>
    <section id="manifesto" className="home-section manifesto-section">
      <p className="eyebrow">Mais que vestir. Pertencer.</p>
      <h2><span>NÃO É SÓ SOBRE TREINAR.</span><br />É SOBRE QUEM VOCÊ SE TORNA.</h2>
      <p className="section-description">Somos forjados na disciplina. Moldados pela precisão.<br />Criamos para quem encontra no movimento uma forma de viver.<br />No treino, na cidade e em tudo o que vem depois.</p>
      <div className="manifesto-values"><span><Layers size={21} /> Quatro linhas.<br />Sua identidade.</span><span><Target size={21} /> Design funcional.<br />Propósito real.</span><span><Zap size={21} /> Corpo e mente.<br />Em movimento.</span></div>
      <div className="editorial-grid">
        <figure><img src={BRAND_IMAGES.training} alt="Treino com pesos" loading="lazy" /><figcaption><i /> DISCIPLINA QUE TRANSFORMA.</figcaption></figure>
        <figure><img src={LINES.CYCLE.heroImage} alt="Esporte e movimento ao ar livre" loading="lazy" /><figcaption><i /> ENCONTRE O SEU RITMO.</figcaption></figure>
        <figure><img src={LINES.MIND.heroImage} alt="Pausa e conexão com a natureza" loading="lazy" /><figcaption><i /> PRESENÇA EM CADA PASSO.</figcaption></figure>
      </div>
      <Link className="text-link" to="/about">Conheça a nossa essência <ArrowUpRight size={18} /></Link>
    </section>
    <section id="linhas" className="home-section collections-section">
      <div className="section-heading"><div><p className="eyebrow">Nosso universo</p><h2><span>SEU MOVIMENTO.</span><br />SUA NATUREZA.</h2></div><p>Quatro expressões da mesma essência.<br />Descubra o que move você.</p></div>
      <div className="collection-grid">{Object.values(LINES).map((line, index) => <Link to={'/line/' + line.id} className="collection-card" key={line.id} style={{ '--line-color': line.color } as React.CSSProperties}>
        <img src={line.heroImage} alt={line.name} loading="lazy" /><div className="collection-shade" /><span className="collection-number">0{index + 1} / {line.subhead}</span><div className="collection-content"><p>{line.keyMessages[0]}</p><h3>{line.id}</h3><span className="collection-action">Conheça a essência <ArrowUpRight size={20} /></span></div>
      </Link>)}</div>
    </section>
    <section className="purpose-banner"><img src={LINES.CYCLE.heroImage} alt="Atletas em movimento" loading="lazy" /><div><p className="eyebrow">Precision in motion</p><h2>O SEU CAMINHO.<br /><span>O SEU RITMO.</span></h2><p>A evolução acontece um movimento de cada vez.</p><Link className="pill pill-white" to="/about#manifesto">Leia nosso manifesto <ArrowUpRight size={18} /></Link></div></section>
    <section id="faq" className="home-section faq-section"><p className="eyebrow">Conheça a NORC</p><h2><span>SUAS PERGUNTAS.</span><br />NOSSA ESSÊNCIA.</h2><div className="faq-list">{questions.map(([question, answer], i) => <details key={question} name="norc-faq" open={i === 0 ? true : undefined}><summary>{question}<Plus size={18} /></summary><p>{answer}</p></details>)}</div></section>
    <section className="home-cta"><div><p className="eyebrow">Force. Mind. Urban. Cycle.</p><h2>VIVA O QUE<br />MOVE VOCÊ.</h2></div><Link className="pill pill-dark" to="/about">Explore o universo NORC <ArrowUpRight size={20} /></Link></section>
  </div>
);
