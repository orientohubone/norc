import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown, Dumbbell, BookOpen, Bike, Footprints, CalendarDays, ChartNoAxesColumnIncreasing, MonitorSmartphone } from 'lucide-react';
import { LINES } from '../constants';

const experiences = [
  { id: 'FORCE', file: 'norcforce-stand.png', icon: Dumbbell, activity: 'Treino de força', title: 'A disciplina ganha forma.', description: 'Banco, halteres e acompanhamento na área de demonstração. O espaço aproxima o visitante da prática de força e da identidade funcional da linha.', products: 'Regatas, camisetas e bolsa de treino', productImage: 'force-oversized.png', app: 'No totem, Force aparece como treino de força e integra a rotina do dia.', detail: 'force' },
  { id: 'MIND', file: 'norcmind-stand.png', icon: BookOpen, activity: 'Leitura e foco', title: 'Uma pausa com propósito.', description: 'Poltronas, livros e um espaço para meditação criam um contraponto ao movimento do hall. A experiência apresenta o foco e a presença que inspiram Mind.', products: 'Moletom e vestuário para o cotidiano', productImage: 'mind-moletom.png', app: 'Leitura e foco representam Mind no app. A leitura também aparece entre as atividades da rotina.', detail: 'mind' },
  { id: 'CYCLE', file: 'norccycle-stand.png', icon: Bike, activity: 'Ciclismo', title: 'Encontre o seu ritmo.', description: 'Uma bicicleta no rolo e uma tela com percurso convidam à experiência do pedal. O ambiente traduz ritmo, continuidade e liberdade de movimento.', products: 'Camiseta, capacete e garrafa', productImage: 'cycle-camiseta.png', app: 'Ciclismo é uma das quatro atividades apresentadas na tela inicial do app.', detail: 'cycle' },
  { id: 'URBAN', file: 'norcurban-stand.png', icon: Footprints, activity: 'Caminhada e corrida', title: 'A cidade começa no movimento.', description: 'A esteira divide o espaço com a exposição de roupas e acessórios. O visitante conhece a relação entre movimento, estilo e funcionalidade urbana.', products: 'Jaqueta e aplicações de vestuário urbano', productImage: 'jaqueta-urban.png', app: 'Urban conecta a experiência da esteira à opção de caminhada e corrida exibida no app.', detail: 'urban' },
];

const FairImage: React.FC<{ file: string; title: string; eager?: boolean }> = ({ file, title, eager }) => (
  <figure className="fair-image"><a href={'/feira/' + file} target="_blank" rel="noopener noreferrer" aria-label={title + ' — abrir original em nova aba'}><img src={'/feira/' + file} alt={title} loading={eager ? 'eager' : 'lazy'} decoding="async" width="1536" height="1024" /><span className="identity-zoom">Ver projeto completo <ArrowUpRight size={16} /></span></a><figcaption>{title}</figcaption></figure>
);

export const Fair = () => {
  const [selected, setSelected] = useState('FORCE');
  const active = experiences.find(item => item.id === selected)!;
  return <div className="norc-home fair-page">
    <section className="home-section fair-intro">
      <p className="eyebrow">NORC na feira / Projeto de stand</p><h1>QUATRO LINHAS.<br /><span>UMA EXPERIÊNCIA.</span></h1>
      <div className="fair-intro-bottom"><p>Conhecer. Experimentar. Conectar.<br />Um percurso pela marca, pelos produtos e pela proposta do app NORC.</p><Link className="pill pill-outline" to="/feira#experiencias">Explore o stand <ArrowDown size={18} /></Link></div>
      <FairImage file="norc-stand1.png" title="Hall de entrada e totem central do app NORC" eager />
    </section>
    <section className="home-section fair-overview"><div className="section-heading"><div><p className="eyebrow">01 / O espaço</p><h2>UM HALL.<br /><span>QUATRO POSSIBILIDADES.</span></h2></div><p>As cores orientam a visita.<br />O totem conecta as experiências.</p></div><FairImage file="norc-standaerea.png" title="Vista aérea: distribuição das quatro áreas e recepção central" />
      <div className="fair-journey">{[['01', 'Chegue ao hall', 'Conheça a proposta da NORC na recepção e explore o app no totem.'], ['02', 'Experimente as linhas', 'Percorra os quatro espaços, suas atividades e os produtos que traduzem cada identidade.'], ['03', 'Conecte à rotina', 'Veja como a proposta digital reúne atividades do dia e acompanhamento de progresso.']].map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
    </section>
    <section id="experiencias" className="home-section fair-experiences"><div className="section-heading"><div><p className="eyebrow">02 / Vivência da marca</p><h2>ESCOLHA UMA LINHA.<br /><span>DESCUBRA A DINÂMICA.</span></h2></div></div>
      <div className="fair-selector" role="group" aria-label="Escolha a experiência">{experiences.map(item => <button key={item.id} type="button" aria-pressed={selected === item.id} aria-controls="fair-experience" onClick={() => setSelected(item.id)} style={{ '--experience-color': LINES[item.id].color } as React.CSSProperties}><item.icon size={22} /><span>{item.id}<small>{item.activity}</small></span></button>)}</div>
      <div id="fair-experience" className="fair-experience" style={{ '--experience-color': LINES[selected].color } as React.CSSProperties}>
        <FairImage file={active.file} title={'Área ' + selected + ' — ' + active.activity} />
        <div className="fair-experience-copy"><p className="eyebrow">NORC {selected}</p><h3>{active.title}</h3><p>{active.description}</p><div className="fair-app-note"><MonitorSmartphone size={24} /><p>{active.app}</p></div><Link className="text-link" to={'/line/' + selected}>Conheça a essência {selected} <ArrowUpRight size={17} /></Link></div>
      </div>
      <div className="fair-products"><img src={'/idvisualnorc/' + active.productImage} alt={active.products + ' — aplicação da identidade ' + selected} loading="lazy" /><div><p className="eyebrow">Produtos e identidade</p><h3>{active.products}</h3><p>As aplicações da marca complementam a experiência de cada espaço. Conheça os detalhes visuais que dão forma à linha {selected}.</p><Link className="pill pill-outline" to={'/identidade-visual#' + active.detail}>Ver aplicações da linha <ArrowUpRight size={17} /></Link></div></div>
    </section>
    <section id="app" className="home-section fair-app"><div className="section-heading"><div><p className="eyebrow">03 / O app no totem</p><h2>DO ESPAÇO FÍSICO<br /><span>À ROTINA DIGITAL.</span></h2></div><p>Recursos apresentados na interface<br />do projeto do stand.</p></div>
      <div className="fair-app-grid">{[
        { icon: MonitorSmartphone, title: 'O que você vai fazer hoje?', text: 'Quatro caminhos na tela inicial: treino de força, leitura e foco, ciclismo, caminhada e corrida.' },
        { icon: CalendarDays, title: 'Sua rotina de hoje', text: 'A interface reúne atividades, duração e ação para iniciar. O projeto mostra treino de força de 45 minutos e leitura de 20 minutos.' },
        { icon: ChartNoAxesColumnIncreasing, title: 'Progresso da semana', text: 'Uma barra apresenta as atividades concluídas. A navegação reúne Hoje, Rotina, Evolução e Perfil.' },
      ].map(item => <article key={item.title}><item.icon size={30} /><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      <Link className="text-link" to="/app">Explore as telas do app <ArrowUpRight size={18} /></Link>
    </section>
  </div>;
};

