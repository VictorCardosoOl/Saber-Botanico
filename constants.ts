import { PlantSpecimen, RitualStep, NavItem, SocialLink } from './types';

export const PLANTS: PlantSpecimen[] = [
  {
    id: '1',
    name: 'Orquídea Fantasma',
    scientificName: 'Dendrophylax lindenii',
    price: '2.4 ETH',
    description: 'Uma epífita sem folhas da Flórida, conhecida pela sua forma de sapo e cor branca etérea.',
    imageUrl: 'https://images.unsplash.com/photo-1603525169004-9a8b5e944743?auto=format&fit=crop&q=80&w=800',
    isRare: true
  },
  {
    id: '2',
    name: 'Flor Morcego Negra',
    scientificName: 'Tacca chantrieri',
    price: '1.8 ETH',
    description: 'Nomeada por suas flores negras únicas que se assemelham a um morcego em voo, nativa do Sudeste Asiático.',
    imageUrl: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Videira de Jade',
    scientificName: 'Strongylodon macrobotrys',
    price: '3.1 ETH',
    description: 'Famosa por suas espetaculares flores em forma de garra em um tom turquesa deslumbrante.',
    imageUrl: 'https://images.unsplash.com/photo-1516205651411-a85a4a51db0c?auto=format&fit=crop&q=80&w=800',
    isNew: true
  },
  {
    id: '4',
    name: 'Monstera Albo',
    scientificName: 'M. deliciosa variegata',
    price: '4.5 ETH',
    description: 'Altamente procurada por sua impressionante variegação branca, imitando respingos de tinta.',
    imageUrl: 'https://images.unsplash.com/photo-1598555849843-980646098056?auto=format&fit=crop&q=80&w=800',
    isHot: true
  },
  {
    id: '5',
    name: 'Protea Real',
    scientificName: 'Protea cynaroides',
    price: '1.2 ETH',
    description: 'A flor nacional da África do Sul, ostentando uma enorme cabeça floral e longevidade incrível.',
    imageUrl: 'https://images.unsplash.com/photo-1551893665-28ab3b52aa9d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    name: 'Cardo Azul',
    scientificName: 'Eryngium planum',
    price: '0.9 ETH',
    description: 'Conhecida por sua folhagem azul metálica e flores semelhantes a cardos, adicionando interesse estrutural.',
    imageUrl: 'https://images.unsplash.com/photo-1627429184288-513689cb432d?auto=format&fit=crop&q=80&w=800'
  }
];

export const RITUALS: RitualStep[] = [
  {
    id: 'arid',
    title: 'Ritual Árido',
    description: 'Permita que o substrato desidrate completamente. Verifique a secura em toda a zona da raiz antes de regar novamente.',
    icon: 'water_drop',
    frequency: 'A cada 14-21 Dias'
  },
  {
    id: 'temperate',
    title: 'Ritual Temperado',
    description: 'Inicie a hidratação quando os 3-5cm superiores do solo indicarem secura. Mantenha um equilíbrio entre umidade e aeração.',
    icon: 'opacity',
    frequency: 'A cada 7 Dias'
  },
  {
    id: 'tropical',
    title: 'Ritual Tropical',
    description: 'Mantenha a umidade do substrato consistente. Evite saturação, mas nunca permita que o meio seque completamente.',
    icon: 'rainy',
    frequency: 'A cada 3-4 Dias'
  }
];

export const NAVIGATION_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Glosário', path: '/glosario' },
  { label: 'Vasos', path: '/vasos' },
  { label: 'Solo', path: '/solo' },
  { label: 'Rega & Luz', path: '/cuidados' }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Instagram', url: '#' },
  { platform: 'Pinterest', url: '#' },
  { platform: 'Twitter', url: '#' }
];

// Imagens Curadas do Unsplash (Temática: Botanica Dark/Luxo)
export const HERO_IMAGE = "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&q=80&w=2090";
export const SOIL_IMAGE_MAIN = "https://images.unsplash.com/photo-1615470701657-375997239029?auto=format&fit=crop&q=80&w=2069";
export const SOIL_IMAGE_SMALL_1 = "https://images.unsplash.com/photo-1595867362088-7f9dd5a45274?auto=format&fit=crop&q=80&w=1974";
export const SOIL_IMAGE_SMALL_2 = "https://images.unsplash.com/photo-1606103920295-8a2b53460453?auto=format&fit=crop&q=80&w=1974";
export const ARCHIVE_HERO = "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=2069";