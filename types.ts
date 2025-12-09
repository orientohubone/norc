export type LineID = 'FORCE' | 'MIND' | 'URBAN' | 'CYCLE';

export interface Product {
  id: string;
  name: string;
  price: number;
  lineId: LineID;
  image: string;
  secondaryImage: string;
  description: string;
  type: 'top' | 'bottom' | 'outerwear' | 'accessory';
  specs: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor?: string;
}

export interface LineConfig {
  id: LineID;
  name: string;
  color: string;
  subhead: string;
  manifesto: string;
  heroImage: string;
  keyMessages: string[];
  influences: string[];
  description: string;
  symbolDescription: string;
}