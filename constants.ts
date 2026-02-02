import { PlantSpecimen, RitualStep, NavItem, SocialLink } from './types';

export const PLANTS: PlantSpecimen[] = [
  {
    id: '1',
    name: 'Orquídea Fantasma',
    scientificName: 'Dendrophylax lindenii',
    price: 'R$ 12.400',
    description: 'Uma epífita sem folhas da Flórida, conhecida pela sua forma de sapo e cor branca etérea.',
    imageUrl: 'https://images.unsplash.com/photo-1603525169004-9a8b5e944743?auto=format&fit=crop&q=80&w=800',
    isRare: true,
    affiliateUrl: 'https://example.com/shop/ghost-orchid'
  },
  {
    id: '2',
    name: 'Flor Morcego Negra',
    scientificName: 'Tacca chantrieri',
    price: 'R$ 850',
    description: 'Nomeada por suas flores negras únicas que se assemelham a um morcego em voo, nativa do Sudeste Asiático.',
    imageUrl: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800',
    affiliateUrl: 'https://example.com/shop/bat-flower'
  },
  {
    id: '3',
    name: 'Videira de Jade',
    scientificName: 'Strongylodon macrobotrys',
    price: 'R$ 3.200',
    description: 'Famosa por suas espetaculares flores em forma de garra em um tom turquesa deslumbrante.',
    imageUrl: 'https://images.unsplash.com/photo-1516205651411-a85a4a51db0c?auto=format&fit=crop&q=80&w=800',
    isNew: true,
    affiliateUrl: 'https://example.com/shop/jade-vine'
  },
  {
    id: '4',
    name: 'Monstera Albo',
    scientificName: 'M. deliciosa variegata',
    price: 'R$ 4.500',
    description: 'Altamente procurada por sua impressionante variegação branca, imitando respingos de tinta.',
    imageUrl: 'https://images.unsplash.com/photo-1598555849843-980646098056?auto=format&fit=crop&q=80&w=800',
    isHot: true,
    affiliateUrl: 'https://example.com/shop/monstera-albo'
  },
  {
    id: '5',
    name: 'Protea Real',
    scientificName: 'Protea cynaroides',
    price: 'R$ 680',
    description: 'A flor nacional da África do Sul, ostentando uma enorme cabeça floral e longevidade incrível.',
    imageUrl: 'https://images.unsplash.com/photo-1551893665-28ab3b52aa9d?auto=format&fit=crop&q=80&w=800',
    affiliateUrl: 'https://example.com/shop/king-protea'
  },
  {
    id: '6',
    name: 'Cardo Azul',
    scientificName: 'Eryngium planum',
    price: 'R$ 240',
    description: 'Conhecida por sua folhagem azul metálica e flores semelhantes a cardos, adicionando interesse estrutural.',
    imageUrl: 'https://images.unsplash.com/photo-1627429184288-513689cb432d?auto=format&fit=crop&q=80&w=800',
    affiliateUrl: 'https://example.com/shop/sea-holly'
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

// --- IMAGENS CURADAS ---
// Tema: Dark, Luxury, Editorial, High Contrast, Botanical Detail

// Hero Principal: Monstera escura/Folhagem densa
export const HERO_IMAGE = "https://images.unsplash.com/photo-1592150621744-aca64f270045?q=80&w=2000&auto=format&fit=crop"; 

// Solo: Textura rica de terra e vasos artesanais
export const SOIL_IMAGE_MAIN = "https://images.unsplash.com/photo-1615479261276-857e49eb72dc?q=80&w=2000&auto=format&fit=crop"; // Close em raízes/solo
export const SOIL_IMAGE_SMALL_1 = "https://images.unsplash.com/photo-1599056637894-3a95d43818e6?q=80&w=1000&auto=format&fit=crop"; // Mãos cuidando da planta
export const SOIL_IMAGE_SMALL_2 = "https://images.unsplash.com/photo-1611735341450-74d61e66ee62?q=80&w=1000&auto=format&fit=crop"; // Textura argila

// Arquivo: Estufa antiga ou ilustrações botânicas
export const ARCHIVE_HERO = "https://images.unsplash.com/photo-1530968464165-3a114ce72449?q=80&w=2000&auto=format&fit=crop"; // Estufa mood

// Vasos: Foco em cerâmica e design
export const VASES_HERO = "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2000&auto=format&fit=crop"; // Prateleira com cerâmica
export const VASE_TERRACOTTA = "https://images.unsplash.com/photo-1506917631379-4d6cb037d383?q=80&w=1000&auto=format&fit=crop"; // Terracota real
export const VASE_CERAMIC = "https://images.unsplash.com/photo-1616428286950-8919672ce346?q=80&w=1000&auto=format&fit=crop"; // Cerâmica minimalista
export const VASE_TECH = "https://images.unsplash.com/photo-1522748906645-95d8adfd66c7?q=80&w=1000&auto=format&fit=crop"; // Concreto moderno

// Cuidados: Água, luz, misting
export const CARE_HERO = "https://images.unsplash.com/photo-1599423423927-951390d79549?q=80&w=2000&auto=format&fit=crop"; // Spray de água/luz