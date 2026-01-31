import { PlantSpecimen, RitualStep, NavItem, SocialLink } from './types';

export const PLANTS: PlantSpecimen[] = [
  {
    id: '1',
    name: 'Orquídea Fantasma',
    scientificName: 'Dendrophylax lindenii',
    price: '2.4 ETH',
    description: 'Uma epífita sem folhas da Flórida, conhecida pela sua forma de sapo e cor branca etérea.',
    imageUrl: 'https://images.unsplash.com/photo-1566914536673-839e80e6d628?q=80&w=800&auto=format&fit=crop',
    isRare: true
  },
  {
    id: '2',
    name: 'Flor Morcego Negra',
    scientificName: 'Tacca chantrieri',
    price: '1.8 ETH',
    description: 'Nomeada por suas flores negras únicas que se assemelham a um morcego em voo, nativa do Sudeste Asiático.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1675865202863-7188d3e69316?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Videira de Jade',
    scientificName: 'Strongylodon macrobotrys',
    price: '3.1 ETH',
    description: 'Famosa por suas espetaculares flores em forma de garra em um tom turquesa deslumbrante.',
    imageUrl: 'https://images.unsplash.com/photo-1596725964894-9b1655823057?q=80&w=800&auto=format&fit=crop',
    isNew: true
  },
  {
    id: '4',
    name: 'Monstera Albo',
    scientificName: 'M. deliciosa variegata',
    price: '4.5 ETH',
    description: 'Altamente procurada por sua impressionante variegação branca, imitando respingos de tinta.',
    imageUrl: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800&auto=format&fit=crop',
    isHot: true
  },
  {
    id: '5',
    name: 'Protea Real',
    scientificName: 'Protea cynaroides',
    price: '1.2 ETH',
    description: 'A flor nacional da África do Sul, ostentando uma enorme cabeça floral e longevidade incrível.',
    imageUrl: 'https://images.unsplash.com/photo-1551893665-28ab3b52aa9d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Cardo Azul',
    scientificName: 'Eryngium planum',
    price: '0.9 ETH',
    description: 'Conhecida por sua folhagem azul metálica e flores semelhantes a cardos, adicionando interesse estrutural.',
    imageUrl: 'https://images.unsplash.com/photo-1627429184288-513689cb432d?q=80&w=800&auto=format&fit=crop'
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

export const HERO_IMAGE = "https://images.unsplash.com/photo-1599598425947-320d31da55df?q=80&w=1600&auto=format&fit=crop";
export const SOIL_IMAGE_MAIN = "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop";
export const SOIL_IMAGE_SMALL_1 = "https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=800&auto=format&fit=crop";
export const SOIL_IMAGE_SMALL_2 = "https://images.unsplash.com/photo-1508505508823-3532f504313b?q=80&w=800&auto=format&fit=crop";
export const ARCHIVE_HERO = "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?q=80&w=1600&auto=format&fit=crop";