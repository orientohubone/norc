import { LineConfig, Product } from './types';

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

export const PRODUCTS: Product[] = [
  // FORCE
  {
    id: 'f1',
    name: 'Compression Tee V1',
    price: 85,
    lineId: 'FORCE',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
    description: 'Compressão estratégica para máxima performance. Tecido técnico de alta respirabilidade.',
    type: 'top',
    specs: ['Sweat-wicking', '4-way stretch', 'Reinforced seams']
  },
  {
    id: 'f2',
    name: 'Tactical Shorts',
    price: 95,
    lineId: 'FORCE',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1616150840616-a21b34356eb5?q=80&w=800&auto=format&fit=crop',
    description: 'Shorts de alta resistência com bolsos utilitários.',
    type: 'bottom',
    specs: ['Ripstop fabric', 'Utility pockets', 'Adjustable waist']
  },
  {
    id: 'f3',
    name: 'Power Hoodie',
    price: 140,
    lineId: 'FORCE',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?q=80&w=800&auto=format&fit=crop',
    description: 'Hoodie oversized para aquecimento pré e pós treino.',
    type: 'outerwear',
    specs: ['Heavyweight cotton', 'Thermal lining', 'Drop shoulder']
  },
  // MIND
  {
    id: 'm1',
    name: 'Minimal Tee',
    price: 65,
    lineId: 'MIND',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1503341455253-b2e72333dbdb?q=80&w=800&auto=format&fit=crop',
    description: 'Algodão orgânico super leve para conforto absoluto.',
    type: 'top',
    specs: ['Organic cotton', 'Seamless', 'Relaxed fit']
  },
  {
    id: 'm2',
    name: 'Meditation Pants',
    price: 110,
    lineId: 'MIND',
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=800&auto=format&fit=crop', 
    secondaryImage: 'https://images.unsplash.com/photo-1552160793-eb8361f4d95c?q=80&w=800&auto=format&fit=crop',
    description: 'Fluidez e liberdade de movimento.',
    type: 'bottom',
    specs: ['Soft touch', 'Elastic cuffs', 'Breathable']
  },
  // URBAN
  {
    id: 'u1',
    name: 'Tech Shell Jacket',
    price: 280,
    lineId: 'URBAN',
    image: 'https://images.unsplash.com/photo-1551488852-7a04d32f2954?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=800&auto=format&fit=crop',
    description: 'Proteção contra elementos com estética cyberpunk.',
    type: 'outerwear',
    specs: ['Waterproof', 'Windproof', 'Hidden pockets']
  },
  {
    id: 'u2',
    name: 'Cargo Pants X',
    price: 180,
    lineId: 'URBAN',
    image: 'https://images.unsplash.com/photo-1555663803-7e77d853bccb?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop',
    description: 'Funcionalidade urbana com silhueta agressiva.',
    type: 'bottom',
    specs: ['Articulated knees', 'Magnetic closures', 'DWR coating']
  },
  // CYCLE
  {
    id: 'c1',
    name: 'Aero Windbreaker',
    price: 150,
    lineId: 'CYCLE',
    image: 'https://images.unsplash.com/photo-1565159050963-3806fb6013a7?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1533560906234-54c628e685bc?q=80&w=800&auto=format&fit=crop',
    description: 'Ultra-leve e compactável para corridas de longa distância.',
    type: 'outerwear',
    specs: ['Packable', 'Reflective details', 'Vented back']
  },
  {
    id: 'c2',
    name: 'Performance Singlet',
    price: 60,
    lineId: 'CYCLE',
    image: 'https://images.unsplash.com/photo-1563852024503-4e4b518292c2?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    description: 'Controle de umidade para alta intensidade.',
    type: 'top',
    specs: ['Quick dry', 'Laser cut venting', 'Anti-odor']
  }
];