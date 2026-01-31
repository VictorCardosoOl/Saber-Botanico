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
  href: string;
  active?: boolean;
}