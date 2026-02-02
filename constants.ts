import { PlantSpecimen, RitualStep, NavItem, SocialLink, DiagnosticSymptom } from './types';

export const PLANTS: PlantSpecimen[] = [
  {
    id: '1',
    name: 'Orquídea Fantasma',
    scientificName: 'Dendrophylax lindenii',
    price: 'Sob Consulta',
    description: 'Uma aparição etérea dos pântanos da Flórida. Sem folhas, ela realiza fotossíntese através de suas raízes prateadas, flutuando como um espectro na penumbra da floresta.',
    imageUrl: 'https://images.unsplash.com/photo-1603525169004-9a8b5e944743?auto=format&fit=crop&q=80&w=800',
    isRare: true,
    origin: 'Pântanos de Fakahatchee, Flórida',
    toxicity: 'Pet Safe',
    careLevel: 'Expert',
    curatorNote: 'Requer silêncio visual e alta umidade. Uma planta para quem entende que a beleza reside no invisível.'
  },
  {
    id: '2',
    name: 'Flor Morcego Negra',
    scientificName: 'Tacca chantrieri',
    price: 'R$ 850',
    description: 'Dramática e arquitetural, suas brácteas negras lembram as asas de um morcego em voo. Na cultura do Sudeste Asiático, acredita-se que ela afasta a má sorte.',
    imageUrl: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800',
    origin: 'Florestas Tropicais da Malásia',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Intermediário',
    curatorNote: 'Uma diva gótica. Ela "desmaia" dramaticamente se sentir sede, mas se recupera horas após a rega.'
  },
  {
    id: '3',
    name: 'Videira de Jade',
    scientificName: 'Strongylodon macrobotrys',
    price: 'R$ 3.200',
    description: 'Cachos pendentes de flores turquesa neon que parecem brilhar na escuridão. Uma cor raríssima no reino vegetal, evoluída para atrair morcegos polinizadores.',
    imageUrl: 'https://images.unsplash.com/photo-1516205651411-a85a4a51db0c?auto=format&fit=crop&q=80&w=800',
    isNew: true,
    origin: 'Filipinas',
    toxicity: 'Pet Safe',
    careLevel: 'Expert',
    curatorNote: 'Uma peça de declaração viva. Requer espaço vertical para exibir sua cascata de joias bioluminescentes.'
  },
  {
    id: '4',
    name: 'Monstera Albo',
    scientificName: 'M. deliciosa variegata',
    price: 'R$ 4.500',
    description: 'A imperatriz das plantas de interior. Sua mutação genética cria padrões de mármore branco únicos em cada folha, como tinta derramada sobre tela verde.',
    imageUrl: 'https://images.unsplash.com/photo-1598555849843-980646098056?auto=format&fit=crop&q=80&w=800',
    isHot: true,
    origin: 'América Central (Cultivar)',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Intermediário',
    curatorNote: 'A variegação branca não faz fotossíntese, tornando esta planta um exercício de equilíbrio delicado de luz.'
  },
  {
    id: '5',
    name: 'Zamioculca Raven',
    scientificName: 'Zamioculcas zamiifolia',
    price: 'R$ 180',
    description: 'A guardiã resiliente. Suas folhas nascem verde-limão e amadurecem para um preto profundo e brilhante, evocando a plumagem de um corvo.',
    imageUrl: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&q=80&w=800',
    origin: 'África Oriental',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Iniciante',
    curatorNote: 'Indestrutível e escultural. A escolha perfeita para arquitetura minimalista e ambientes com pouca luz.'
  },
  {
    id: '6',
    name: 'Begonia Maculata',
    scientificName: 'Begonia maculata',
    price: 'R$ 120',
    description: 'Conhecida como "Asa de Anjo", possui o verso das folhas em vermelho carmesim e a frente salpicada de bolinhas prateadas, parecendo ter sido pintada à mão.',
    imageUrl: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800',
    origin: 'Mata Atlântica, Brasil',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Intermediário',
    curatorNote: 'Poesia visual brasileira. Mantenha o solo úmido, mas nunca molhe suas folhas aveludadas.'
  },
  {
    id: '7',
    name: 'Ficus Lyrata',
    scientificName: 'Ficus lyrata',
    price: 'R$ 450',
    description: 'A "Figueira Violino". Suas folhas enormes e coriáceas dominam qualquer ambiente com uma presença escultórica imponente.',
    imageUrl: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=800',
    origin: 'África Ocidental',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Intermediário',
    curatorNote: 'Temperamental com mudanças. Encontre o local perfeito com luz filtrada e nunca a mova.'
  },
  {
    id: '8',
    name: 'Corações Emaranhados',
    scientificName: 'Ceropegia woodii',
    price: 'R$ 90',
    description: 'Uma cascata delicada de folhas em forma de coração, com padrões que lembram renda antiga. Perfeita para prateleiras altas onde pode derramar seu afeto.',
    imageUrl: 'https://images.unsplash.com/photo-1596724888803-33921b764c67?auto=format&fit=crop&q=80&w=800',
    origin: 'África do Sul',
    toxicity: 'Pet Safe',
    careLevel: 'Iniciante',
    curatorNote: 'Delicadeza visual, resistência de suculenta. Gosta de sol direto no topo da "cabeça".'
  },
  {
    id: '9',
    name: 'Calathea Orbifolia',
    scientificName: 'Goeppertia orbifolia',
    price: 'R$ 180',
    description: 'Folhas largas e arredondadas com listras prateadas hipnóticas. Realiza a "nictinastia", fechando suas folhas em oração ao anoitecer.',
    imageUrl: 'https://images.unsplash.com/photo-1600867727181-a08332155c8c?auto=format&fit=crop&q=80&w=800',
    origin: 'Bolívia',
    toxicity: 'Pet Safe',
    careLevel: 'Expert',
    curatorNote: 'A rainha do drama da umidade. Use apenas água filtrada ou da chuva para evitar queimar suas bordas.'
  },
  {
    id: '10',
    name: 'Veludo Negro',
    scientificName: 'Alocasia Black Velvet',
    price: 'R$ 220',
    description: 'Uma joia escura. Suas folhas absorvem a luz com uma textura de veludo profunda, contrastando com veios brancos quase elétricos.',
    imageUrl: 'https://images.unsplash.com/photo-1612361093125-96144e548237?auto=format&fit=crop&q=80&w=800',
    origin: 'Bornéu',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Intermediário',
    curatorNote: 'Não gosta de "pés molhados". Um solo extremamente aerado é o segredo para manter esse veludo intacto.'
  },
  {
    id: '11',
    name: 'Espada de São Jorge',
    scientificName: 'Dracaena trifasciata',
    price: 'R$ 60',
    description: 'Arquitetura vertical pura. Reverenciada em rituais de proteção espiritual e conhecida pela NASA por purificar o ar noturno.',
    imageUrl: 'https://images.unsplash.com/photo-1592652433939-2c4998822097?auto=format&fit=crop&q=80&w=800',
    origin: 'África Ocidental',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Iniciante',
    curatorNote: 'A definição de estoicismo botânico. Tolera negligência e sombra como nenhuma outra.'
  },
  {
    id: '12',
    name: 'Ave do Paraíso',
    scientificName: 'Strelitzia reginae',
    price: 'R$ 350',
    description: 'Evoca o espírito dos trópicos com folhas que lembram remos e flores que se assemelham a pássaros exóticos em voo.',
    imageUrl: 'https://images.unsplash.com/photo-1549419163-9524022c4314?auto=format&fit=crop&q=80&w=800',
    origin: 'África do Sul',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Iniciante',
    curatorNote: 'Requer sol pleno para florescer. Suas folhas rasgam naturalmente com o vento, um charme wabi-sabi.'
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

export const DIAGNOSTICS: DiagnosticSymptom[] = [
  {
    id: '1',
    title: 'Clorose Foliar',
    visualCue: 'Folhas Amareladas',
    cause: 'Excesso de rega sufocando as raízes (Hipóxia radicular).',
    solution: 'Suspenda a rega imediatamente. Aere o solo com um palito. Se persistir, verifique se há podridão na raiz.',
    imageUrl: 'https://images.unsplash.com/photo-1616641249764-16a29792a7eb?auto=format&fit=crop&q=80&w=500' // Folha amarela close
  },
  {
    id: '2',
    title: 'Necrose de Borda',
    visualCue: 'Pontas Queimadas/Secas',
    cause: 'Baixa umidade do ar ou excesso de minerais/cloro na água.',
    solution: 'Aumente a umidade com um umidificador. Use água filtrada ou descansada por 24h para evaporar o cloro.',
    imageUrl: 'https://images.unsplash.com/photo-1598973685324-7389c9233636?auto=format&fit=crop&q=80&w=500' // Folha seca
  },
  {
    id: '3',
    title: 'Estiolamento',
    visualCue: 'Crescimento Longo e Fraco',
    cause: 'A planta está "esticando" em busca de luz insuficiente.',
    solution: 'Mova gradualmente para um local com maior luminosidade. Pode podar as partes fracas para estimular novo crescimento.',
    imageUrl: 'https://images.unsplash.com/photo-1599598425947-640476449178?auto=format&fit=crop&q=80&w=500' // Planta esticada
  },
  {
    id: '4',
    title: 'Murcha Hidrostática',
    visualCue: 'Folhas Caídas/Moles',
    cause: 'Falta de turgidez por sede extrema ou choque térmico.',
    solution: 'Realize uma rega profunda de imersão ("Bottom watering") por 20 minutos. Afaste de correntes de ar frio.',
    imageUrl: 'https://images.unsplash.com/photo-1628608213606-2581699f8d10?auto=format&fit=crop&q=80&w=500' // Planta murcha
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
export const HERO_IMAGE = "https://images.unsplash.com/photo-1592150621744-aca64f270045?q=80&w=2000&auto=format&fit=crop"; 
export const SOIL_IMAGE_MAIN = "https://images.unsplash.com/photo-1615479261276-857e49eb72dc?q=80&w=2000&auto=format&fit=crop"; 
export const SOIL_IMAGE_SMALL_1 = "https://images.unsplash.com/photo-1599056637894-3a95d43818e6?q=80&w=1000&auto=format&fit=crop"; 
export const SOIL_IMAGE_SMALL_2 = "https://images.unsplash.com/photo-1611735341450-74d61e66ee62?q=80&w=1000&auto=format&fit=crop"; 
export const ARCHIVE_HERO = "https://images.unsplash.com/photo-1530968464165-3a114ce72449?q=80&w=2000&auto=format&fit=crop"; 
export const VASES_HERO = "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2000&auto=format&fit=crop"; 
export const VASE_TERRACOTTA = "https://images.unsplash.com/photo-1506917631379-4d6cb037d383?q=80&w=1000&auto=format&fit=crop"; 
export const VASE_CERAMIC = "https://images.unsplash.com/photo-1616428286950-8919672ce346?q=80&w=1000&auto=format&fit=crop"; 
export const VASE_TECH = "https://images.unsplash.com/photo-1522748906645-95d8adfd66c7?q=80&w=1000&auto=format&fit=crop"; 
export const CARE_HERO = "https://images.unsplash.com/photo-1599423423927-951390d79549?q=80&w=2000&auto=format&fit=crop";