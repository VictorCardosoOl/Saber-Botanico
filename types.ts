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
  affiliateUrl?: string; // Monetization Strategy
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