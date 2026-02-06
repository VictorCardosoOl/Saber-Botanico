
export interface PlantSpecimen {
  id: string;
  name: string;
  scientificName: string;
  family: string; // Novo: Família botânica (ex: Araceae)
  price: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  isRare?: boolean;
  isNew?: boolean;
  isHot?: boolean;
  origin: string;
  climate: string; // Novo: Clima ideal (ex: Tropical Úmido)
  toxicity: 'Pet Safe' | 'Tóxica se ingerida' | 'Irritante ao toque' | 'Tóxica para gatos' | 'Tóxica para cães' | 'Irritante para a pele';
  careLevel: 'Iniciante' | 'Intermediário' | 'Expert' | 'Mestre';
  curatorNote: string;
}

export interface RitualStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  frequency?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface DiagnosticSymptom {
  id: string;
  title: string;
  visualCue: string;
  cause: string;
  solution: string;
  imageUrl: string;
}
