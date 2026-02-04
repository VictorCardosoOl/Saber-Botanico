export interface PlantSpecimen {
  id: string;
  name: string;
  scientificName: string;
  price: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  isRare?: boolean;
  isNew?: boolean;
  isHot?: boolean;
  // Novos campos narrativos e funcionais
  origin: string;
  toxicity: 'Pet Safe' | 'Tóxica se ingerida' | 'Irritante ao toque' | 'Tóxica para gatos' | 'Tóxica para cães' | 'Irritante para a pele';
  careLevel: 'Iniciante' | 'Intermediário' | 'Expert';
  curatorNote: string; // A nota do "Sommelier"
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
  visualCue: string; // Ex: "Folhas Amarelas"
  cause: string;
  solution: string;
  imageUrl: string;
}