import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, X, ZoomIn, ZoomOut } from 'lucide-react';

const screens = [
  { file: 'telaabertura.png', group: 'Geral', title: 'Abertura', text: 'A identidade NORC dá início à experiência.' },
  { file: 'telainicial.png', group: 'Geral', title: 'Hoje', text: 'As quatro linhas, atividades do dia e progresso semanal em um só lugar.' },
  { file: 'tela-rotina.png', group: 'Geral', title: 'Minha rotina', text: 'Planejamento semanal com atividades de força, leitura, ciclismo e corrida.' },
  { file: 'tela-meuperfil.png', group: 'Geral', title: 'Meu perfil', text: 'Linhas pessoais, metas, notificações, privacidade e preferências.' },
  { file: 'tela1-norcforce.png', group: 'Force', title: 'Treino de hoje', text: 'Exercícios, séries, repetições, cargas e intervalo de descanso.' },
  { file: 'tela2-force.png', group: 'Force', title: 'Histórico de força', text: 'Treinos concluídos, duração e exercícios organizados por período.' },
  { file: 'tela1-norcmind.png', group: 'Mind', title: 'Clareza para hoje', text: 'Leitura, sessão de foco, hábitos e progresso semanal.' },
  { file: 'tela2-mind.png', group: 'Mind', title: 'Detalhes da leitura', text: 'Progresso do livro, meta diária, tempo de leitura e anotações.' },
  { file: 'tela1-norccycle.png', group: 'Cycle', title: 'Seu próximo pedal', text: 'Percurso, distância, duração, velocidade média e meta semanal.' },
  { file: 'tela2-cycle.png', group: 'Cycle', title: 'Histórico de pedaladas', text: 'Resumo de percursos e indicadores das atividades anteriores.' },
  { file: 'tela1-norcurban.png', group: 'Urban', title: 'Seu ritmo na cidade', text: 'Corrida, caminhada, percurso, ritmo e recorde pessoal.' },
  { file: 'tela2-urban-detalhes.png', group: 'Urban', title: 'Detalhes da corrida', text: 'Mapa da atividade, parciais por quilômetro e anotações da corrida.' },
];
const colors: Record<string, string> = { Geral: '#5FD068', Force: '#5FD068', Mind: '#5BA3E0', Cycle: '#FF7A5C', Urban: '#9D7BC7' };

export const AppShowcase = () => {
  const [filter, setFilter] = useState('Todas');
  const [selected, setSelected] = useState<string | null>(null);
  const [zoom, setZoom] = useState(false);
  const [slide, setSlide] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const didSwipe = useRef(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const visible = screens.filter(screen => filter === 'Todas' || screen.group === filter);
  const index = visible.findIndex(screen => screen.file === selected);
  const active = visible[index];
  const isOpen = selected !== null;

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current?.showModal();
    return () => {
      dialog.current?.close();
      document.body.style.overflow = previousOverflow;
      opener.current?.focus();
    };
  }, [isOpen]);

  useEffect(() => { viewport.current?.scrollTo(0, 0); }, [selected, zoom]);
  const close = () => { setSelected(null); setZoom(false); };
  const move = (step: number) => {
    const next = index + step;
    if (next >= 0 && next < visible.length) { setSelected(visible[next].file); setZoom(false); }
  };

  return <div className="norc-home app-showcase">
    <section className="home-section app-showcase-intro"><p className="eyebrow">NORC App / Explore as telas</p><h1>SUA ROTINA.<br /><span>SEU MOVIMENTO.</span></h1><p className="section-description">Força, foco, pedal e corrida conectados à sua evolução.<br />Explore as interfaces e conheça os recursos de cada área.</p><span className="app-gallery-note">12 telas · 4 linhas · Uma experiência NORC</span></section>
    <section className="home-section app-gallery" aria-label="Telas do app NORC">
      <div className="app-gallery-filters" role="group" aria-label="Filtrar telas">{['Todas', 'Geral', 'Force', 'Mind', 'Cycle', 'Urban'].map(group => <button key={group} aria-pressed={filter === group} onClick={() => { setFilter(group); setSlide(0); }} style={{ '--screen-color': colors[group] || '#5FD068' } as React.CSSProperties}>{group} <span>{group === 'Todas' ? screens.length : screens.filter(screen => screen.group === group).length}</span></button>)}</div>
      <div className="app-gallery-status"><p role="status">Tela {slide + 1} de {visible.length} · {visible[slide].title}</p><p>Deslize ou use as setas · Toque para ampliar</p></div>
      <div className="app-carousel" role="region" aria-roledescription="carrossel" aria-label="Telas do app" tabIndex={0}
        onKeyDown={event => {
          if (event.key === 'ArrowLeft') { event.preventDefault(); setSlide(current => Math.max(0, current - 1)); }
          if (event.key === 'ArrowRight') { event.preventDefault(); setSlide(current => Math.min(visible.length - 1, current + 1)); }
        }}>
        <div className="app-carousel-window"
          onTouchStart={event => { didSwipe.current = false; touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
          onTouchEnd={event => {
            if (!touchStart.current) return;
            const dx = event.changedTouches[0].clientX - touchStart.current.x;
            const dy = event.changedTouches[0].clientY - touchStart.current.y;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
              didSwipe.current = true;
              setSlide(current => Math.max(0, Math.min(visible.length - 1, current + (dx < 0 ? 1 : -1))));
            }
            touchStart.current = null;
          }}
          onTouchCancel={() => { touchStart.current = null; }}
          onClickCapture={event => { if (didSwipe.current) { event.preventDefault(); event.stopPropagation(); didSwipe.current = false; } }}>
          <div className="app-carousel-track" style={{ transform: 'translateX(-' + slide * 100 + '%)' }}>
            {visible.map((screen, screenIndex) => <article className="app-carousel-slide" key={screen.file} role="group" aria-roledescription="slide" aria-label={(screenIndex + 1) + ' de ' + visible.length} aria-hidden={screenIndex !== slide} style={{ '--screen-color': colors[screen.group] } as React.CSSProperties}>
              <button className="app-screen-preview" tabIndex={screenIndex === slide ? 0 : -1} aria-label={'Ampliar ' + screen.title} onClick={event => { opener.current = event.currentTarget; setSelected(screen.file); }}><img src={'/appnorc/' + screen.file} alt={screen.title + ' — interface NORC ' + screen.group} loading={screenIndex === slide ? 'eager' : 'lazy'} decoding="async" draggable={false} /><span><ZoomIn size={17} /> Ampliar tela</span></button>
              <div className="app-screen-caption"><span>{screen.group} / NORC APP</span><h2>{screen.title}</h2><p>{screen.text}</p><span className="app-slide-number">{String(screenIndex + 1).padStart(2, '0')} / {String(visible.length).padStart(2, '0')}</span></div>
            </article>)}
          </div>
        </div>
        <div className="app-carousel-controls"><button disabled={slide === 0} onClick={() => setSlide(slide - 1)} aria-label="Tela anterior"><ArrowLeft size={22} /></button><div className="app-carousel-dots" role="group" aria-label="Selecionar tela">{visible.map((screen, screenIndex) => <button key={screen.file} aria-label={'Ver ' + screen.title} aria-pressed={slide === screenIndex} onClick={() => setSlide(screenIndex)}><span /></button>)}</div><button disabled={slide === visible.length - 1} onClick={() => setSlide(slide + 1)} aria-label="Próxima tela"><ArrowRight size={22} /></button></div>
      </div>
    </section>
    <dialog ref={dialog} className="app-screen-dialog" aria-labelledby="screen-dialog-title" onCancel={event => { event.preventDefault(); close(); }} onClick={event => { if (event.target === dialog.current) close(); }} onKeyDown={event => { if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); } if (event.key === 'ArrowRight') { event.preventDefault(); move(1); } }}>
      {active && <div className="app-dialog-shell">
        <header className="app-dialog-header"><div><span>{active.group} · {index + 1} de {visible.length}</span><h2 id="screen-dialog-title">{active.title}</h2></div><button autoFocus onClick={close} aria-label="Fechar visualização"><X size={23} /></button></header>
        <div className={'app-dialog-viewport' + (zoom ? ' is-zoomed' : '')} ref={viewport} tabIndex={0} role="region" aria-label="Imagem da tela; use a rolagem para ver os detalhes"><img src={'/appnorc/' + active.file} alt={active.title + '. ' + active.text} /></div>
        <div className="app-dialog-tools"><button disabled={index === 0} onClick={() => move(-1)} aria-label="Tela anterior"><ArrowLeft size={19} /><span>Anterior</span></button><button aria-pressed={zoom} onClick={() => setZoom(!zoom)}>{zoom ? <ZoomOut size={19} /> : <ZoomIn size={19} />}<span>{zoom ? 'Ajustar' : 'Ampliar'}</span></button><a href={'/appnorc/' + active.file} target="_blank" rel="noopener noreferrer" aria-label="Abrir imagem original em nova aba"><ArrowUpRight size={19} /><span>Original</span></a><button disabled={index === visible.length - 1} onClick={() => move(1)} aria-label="Próxima tela"><span>Próxima</span><ArrowRight size={19} /></button></div>
        <p className="app-dialog-description">{active.text}</p>
      </div>}
    </dialog>
  </div>;
};

