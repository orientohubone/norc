import { LineConfig } from './types';

export const COLORS = {
  FORCE: '#5FD068',
  MIND: '#5BA3E0',
  URBAN: '#9D7BC7',
  CYCLE: '#FF7A5C',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  GUNMETAL: '#2B2B2E',
  GRAPHITE: '#4B4C4F',
};

export const LINES: Record<string, LineConfig> = {
  FORCE: {
    id: 'FORCE',
    name: 'NORC FORCE',
    color: COLORS.FORCE,
    subhead: 'Strength & Power',
    manifesto: "Força não é apenas física. É disciplina. É resiliência. É a capacidade de superar limites.",
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop',
    keyMessages: [
      "Força não se improvisa.",
      "Poder é construção.",
      "Disciplina molda."
    ],
    influences: ["Fisiculturismo", "Disciplina Espartana", "Poder Bruto"],
    description: "Linha de performance pesada. Projetada para quem entende que o corpo é uma escultura forjada na dor e na repetição.",
    symbolDescription: "N em verde vibrante"
  },
  MIND: {
    id: 'MIND',
    name: 'NORC MIND',
    color: COLORS.MIND,
    subhead: 'Clarity & Focus',
    manifesto: "A mente é o primeiro músculo a ser treinado. Minimalismo funcional para uma vida consciente.",
    heroImage: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1920&auto=format&fit=crop',
    keyMessages: [
      "Consciência é arma.",
      "Mente alinhada. Corpo preciso.",
      "Frieza estratégica."
    ],
    influences: ["Estóicos", "Mente Fria", "Foco Absoluto"],
    description: "Linha mental e filosófica. Para aqueles que buscam clareza em meio ao caos. Onde a estratégia encontra o vestuário.",
    symbolDescription: "N em azul frio"
  },
  URBAN: {
    id: 'URBAN',
    name: 'NORC URBAN',
    color: COLORS.URBAN,
    subhead: 'Style & Function',
    manifesto: "A cidade é nosso campo de treino. Estética techwear e funcionalidade urbana.",
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop',
    keyMessages: [
      "Movimento é estética.",
      "Cidade é campo de batalha.",
      "Futuro é agora."
    ],
    influences: ["Design Geométrico", "Brutalismo Moderno", "Cyberpunk"],
    description: "Linha urbana techwear. Equipamento modular para navegar a selva de concreto com superioridade técnica.",
    symbolDescription: "N em roxo futurista"
  },
  CYCLE: {
    id: 'CYCLE',
    name: 'NORC CYCLE',
    color: COLORS.CYCLE,
    subhead: 'Rhythm & Flow',
    manifesto: "Movimento é vida. Liberdade no ritmo, na corrida, no pedal.",
    heroImage: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1920&auto=format&fit=crop',
    keyMessages: [
      "Ritmo é evolução.",
      "Movimento contínuo.",
      "Velocidade controlada."
    ],
    influences: ["Corrida", "Ciclismo", "Fluxo Constante"],
    description: "Linha esportiva de movimento contínuo. Aerodinâmica e leveza para quem não para.",
    symbolDescription: "N em laranja vibrante"
  },
};

export const BRAND_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1920&auto=format&fit=crop',
  training: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop',
};
