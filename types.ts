export type LineID = 'FORCE' | 'MIND' | 'URBAN' | 'CYCLE';

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
