import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const asset = (file: string) => '/idvisualnorc/' + file + '.png';
const groups = [
  { id: 'folder', title: 'FOLDER', description: 'A apresentação impressa da marca, das quatro linhas e do app NORC.', color: '#5FD068', images: [['foldermockup', 'Folder NORC — apresentação e dobras'], ['folderexterno-noc', 'Folder NORC — face externa'], ['folderinterno-norc', 'Folder NORC — face interna e quatro linhas']] },
  { id: 'force', title: 'FORCE', description: 'Força e disciplina em cada aplicação.', color: '#48B055', images: [['force-regata', 'Regata Force'], ['force-regata2', 'Regata Force — segunda aplicação'], ['force-oversized', 'Camiseta oversized Force'], ['force-bolsatreino', 'Bolsa de treino Force']] },
  { id: 'mind', title: 'MIND', description: 'Clareza, conforto e presença no cotidiano.', color: '#5B9BD4', images: [['mind-moletom', 'Moletom Mind'], ['mind-cotidiano', 'Mind no cotidiano']] },
  { id: 'urban', title: 'URBAN', description: 'Identidade em movimento pela cidade.', color: '#77549F', images: [['jaqueta-urban', 'Jaqueta Urban']] },
  { id: 'cycle', title: 'CYCLE', description: 'Ritmo e liberdade como expressão visual.', color: '#ED6B3C', images: [['cycle-camiseta', 'Camiseta Cycle'], ['cycle-capacete', 'Capacete Cycle'], ['cycle-garrafa', 'Garrafa Cycle']] },
  { id: 'experiencia', title: 'ALÉM DO VESTIR.', description: 'A identidade NORC nas embalagens e nos espaços.', color: '#5FD068', images: [['embalagens-etiquetas', 'Embalagens e etiquetas'], ['fachada-norc', 'Fachada NORC'], ['interior-norc', 'Interior NORC']] },
];

const IdentityImage: React.FC<{ file: string; title: string; priority?: boolean }> = ({ file, title, priority = false }) => (
  <figure className="identity-figure">
    <a href={asset(file)} target="_blank" rel="noopener noreferrer" aria-label={title + ' — abrir imagem original em nova aba'}>
      <img src={asset(file)} alt={title} loading={priority ? 'eager' : 'lazy'} decoding="async" />
      <span className="identity-zoom">Ver original <ArrowUpRight size={16} /></span>
    </a>
    <figcaption>{title}</figcaption>
  </figure>
);

export const VisualIdentity = () => (
  <div className="norc-home identity-page">
    <section className="home-section identity-intro">
      <p className="eyebrow">Universo NORC / Identidade visual</p>
      <h1>NOSSA ESSÊNCIA.<br /><span>EM CADA DETALHE.</span></h1>
      <p className="section-description">Símbolos, cores e aplicações que traduzem quem somos.<br />Uma identidade. Quatro expressões. Infinitas formas de estar em movimento.</p>
      <nav className="identity-index" aria-label="Seções da identidade visual">
        <a href="#/identidade-visual#marca">A marca</a>
        {groups.map(group => <a key={group.id} href={'#/identidade-visual#' + group.id}>{group.id === 'experiencia' ? 'Experiência' : group.title}</a>)}
      </nav>
    </section>
    <section id="marca" className="home-section identity-overview">
      <div className="section-heading"><div><p className="eyebrow">01 / Sistema visual</p><h2>A IDENTIDADE.<br /><span>AS SUAS EXPRESSÕES.</span></h2></div><p>Assinaturas, paleta, tipografia e aplicações.<br />Explore os painéis completos da marca.</p></div>
      <div className="identity-grid"><IdentityImage file="brandboard" title="Painel da identidade visual NORC" priority /><IdentityImage file="linhas-norc" title="Force, Mind, Cycle e Urban — o universo NORC" priority /></div>
    </section>
    {groups.map((group, index) => (
      <section className="home-section identity-group" id={group.id} key={group.id} style={{ '--identity-color': group.color } as React.CSSProperties}>
        <div className="section-heading"><div><p className="eyebrow">0{index + 2} / Aplicações da marca</p><h2>{group.title}</h2></div><p>{group.description}</p></div>
        <div className={'identity-grid' + (group.images.length === 1 ? ' identity-grid-single' : '')}>{group.images.map(([file, title]) => <IdentityImage key={file} file={file} title={title} />)}</div>
      </section>
    ))}
  </div>
);
