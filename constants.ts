
import { PlantSpecimen, RitualStep, NavItem, SocialLink, DiagnosticSymptom } from './types';

export const PLANTS: PlantSpecimen[] = [
  {
    id: '1',
    name: 'Orquídea Fantasma',
    scientificName: 'Dendrophylax lindenii',
    family: 'Orchidaceae',
    price: 'Sob Consulta',
    description: 'Uma aparição etérea dos pântanos da Flórida. Desprovida de folhagem, esta epífita realiza a fotossíntese exclusivamente através de suas raízes velames prateadas. Suas flores brancas parecem flutuar no ar, exalando um perfume de maçã verde apenas ao crepúsculo.',
    imageUrl: 'https://images.unsplash.com/photo-1603525169004-9a8b5e944743?auto=format&fit=crop&q=80&w=800',
    isRare: true,
    origin: 'Pântanos de Fakahatchee, Flórida',
    climate: 'Subtropical Úmido',
    toxicity: 'Pet Safe',
    careLevel: 'Mestre',
    curatorNote: 'O "Santo Graal" dos orquidófilos. Requer montagem em cortiça, umidade atmosférica acima de 80% e estagnação de ar zero.'
  },
  {
    id: '2',
    name: 'Princesa Rosa',
    scientificName: 'Philodendron erubescens',
    family: 'Araceae',
    price: 'R$ 480',
    description: 'Uma obra-prima da mutação genética natural. Suas folhas de couro escuro são salpicadas aleatoriamente com variegação rosa chiclete, garantindo que nenhum espécime seja idêntico ao outro. Uma declaração de contraste visual.',
    imageUrl: 'https://images.unsplash.com/photo-1629854483861-f093a8d9df7a?auto=format&fit=crop&q=80&w=800',
    isHot: true,
    origin: 'Colômbia (Híbrido)',
    climate: 'Tropical',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Intermediário',
    curatorNote: 'A variegação rosa é instável. Para mantê-la vibrante, ofereça luz indireta brilhante; na sombra, ela reverterá ao verde total.'
  },
  {
    id: '3',
    name: 'Flor Morcego Negra',
    scientificName: 'Tacca chantrieri',
    family: 'Dioscoreaceae',
    price: 'R$ 850',
    description: 'Dramática e arquitetural, suas brácteas negras lembram as asas de um morcego em voo, ladeadas por longos "bigodes" (filamentos) que podem chegar a 70cm. Na botânica, o preto verdadeiro é uma raridade absoluta.',
    imageUrl: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800',
    origin: 'Florestas Tropicais da Malásia',
    climate: 'Tropical de Sombra',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Expert',
    curatorNote: 'Uma diva gótica. Ela não tolera correntes de ar e exige solo constantemente úmido, mas perfeitamente drenado.'
  },
  {
    id: '4',
    name: 'Monstera Albo',
    scientificName: 'M. deliciosa variegata',
    family: 'Araceae',
    price: 'R$ 4.500',
    description: 'A imperatriz das plantas de interior. Sua falta de clorofila em setores específicos cria padrões de mármore branco puro ("Albo"). Cada nova folha é um evento de suspense botânico, revelando fenestrações e padrões únicos.',
    imageUrl: 'https://images.unsplash.com/photo-1598555849843-980646098056?auto=format&fit=crop&q=80&w=800',
    isRare: true,
    origin: 'América Central (Mutação)',
    climate: 'Tropical Úmido',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Intermediário',
    curatorNote: 'As partes brancas são delicadas e propensas a queimar. Luz filtrada de alta qualidade é não-negociável.'
  },
  {
    id: '5',
    name: 'Stephania Erecta',
    scientificName: 'Stephania erecta',
    family: 'Menispermaceae',
    price: 'R$ 320',
    description: 'Uma escultura viva. Do seu caudex lenhoso e bulboso (semelhante a uma batata petrificada), emerge uma haste delicada com folhas perfeitamente circulares que flutuam como guarda-chuvas verdes.',
    imageUrl: 'https://images.unsplash.com/photo-1610996886221-5c3175dc30e3?auto=format&fit=crop&q=80&w=800',
    isNew: true,
    origin: 'Tailândia',
    climate: 'Sazonal (Dormência no Inverno)',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Expert',
    curatorNote: 'Requer paciência. Entra em dormência total no inverno, perdendo todas as folhas. Não regue durante o sono.'
  },
  {
    id: '6',
    name: 'Begonia Maculata',
    scientificName: 'Begonia maculata',
    family: 'Begoniaceae',
    price: 'R$ 120',
    description: 'Conhecida como "Asa de Anjo", possui o verso das folhas em vermelho carmesim profundo (adaptação para capturar luz refletida no chão da floresta) e a frente salpicada de bolinhas prateadas pintadas à mão pela natureza.',
    imageUrl: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800',
    origin: 'Mata Atlântica, Brasil',
    climate: 'Tropical de Altitude',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Intermediário',
    curatorNote: 'Poesia visual brasileira. Odeia água em suas folhas; regue apenas o substrato para evitar fungos.'
  },
  {
    id: '7',
    name: 'Ficus Lyrata',
    scientificName: 'Ficus lyrata',
    family: 'Moraceae',
    price: 'R$ 450',
    description: 'A "Figueira Violino". Suas folhas enormes, coriáceas e venosas dominam qualquer ambiente com uma presença escultórica imponente. Na natureza, começa sua vida como epífita no topo de outras árvores.',
    imageUrl: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=800',
    origin: 'África Ocidental',
    climate: 'Tropical',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Intermediário',
    curatorNote: 'Temperamental com mudanças geográficas. Encontre o local perfeito com luz filtrada e nunca a mova, ou ela derrubará folhas em protesto.'
  },
  {
    id: '8',
    name: 'Corações Emaranhados',
    scientificName: 'Ceropegia woodii',
    family: 'Apocynaceae',
    price: 'R$ 90',
    description: 'Uma cascata delicada de folhas suculentas em forma de coração, com padrões de renda prateada. Seus caules finos podem atingir metros de comprimento, criando uma cortina viva.',
    imageUrl: 'https://images.unsplash.com/photo-1596724888803-33921b764c67?auto=format&fit=crop&q=80&w=800',
    origin: 'África do Sul',
    climate: 'Semi-árido',
    toxicity: 'Pet Safe',
    careLevel: 'Iniciante',
    curatorNote: 'Delicadeza visual, resistência de tanque de guerra. Gosta de sol direto no topo da "cabeça" (tubérculo) para evitar calvície.'
  },
  {
    id: '9',
    name: 'Calathea Orbifolia',
    scientificName: 'Goeppertia orbifolia',
    family: 'Marantaceae',
    price: 'R$ 180',
    description: 'Folhas largas e arredondadas com listras prateadas hipnóticas. Realiza a "nictinastia", fechando suas folhas verticalmente em oração ao anoitecer para conservar umidade.',
    imageUrl: 'https://images.unsplash.com/photo-1600867727181-a08332155c8c?auto=format&fit=crop&q=80&w=800',
    origin: 'Bolívia',
    climate: 'Tropical Úmido',
    toxicity: 'Pet Safe',
    careLevel: 'Expert',
    curatorNote: 'A rainha do drama da umidade. Use apenas água destilada ou da chuva; o flúor da torneira queimará suas bordas irremediavelmente.'
  },
  {
    id: '10',
    name: 'Veludo Negro',
    scientificName: 'Alocasia Black Velvet',
    family: 'Araceae',
    price: 'R$ 220',
    description: 'Uma joia escura. Suas folhas absorvem a luz quase completamente com uma textura de veludo profunda, contrastando com veios brancos quase elétricos. Uma planta compacta de impacto máximo.',
    imageUrl: 'https://images.unsplash.com/photo-1612361093125-96144e548237?auto=format&fit=crop&q=80&w=800',
    origin: 'Bornéu',
    climate: 'Tropical',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Intermediário',
    curatorNote: 'Suscetível a podridão radicular. Requer um substrato extremamente aerado (chunky mix) e vasos pequenos.'
  },
  {
    id: '11',
    name: 'Zamioculca Raven',
    scientificName: 'Zamioculcas zamiifolia',
    family: 'Araceae',
    price: 'R$ 180',
    description: 'A guardiã resiliente em sua forma mais nobre. Suas folhas nascem verde-limão e, através de um processo de maturação lento, oxidam para um preto profundo e brilhante, evocando a plumagem de um corvo.',
    imageUrl: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&q=80&w=800',
    origin: 'África Oriental',
    climate: 'Tropical Seco',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Iniciante',
    curatorNote: 'Indestrutível e escultural. Possui rizomas batatudos que armazenam água por meses. Regue apenas quando o solo estiver poeirento.'
  },
  {
    id: '12',
    name: 'Antúrio Clarinenvi',
    scientificName: 'Anthurium clarinervium',
    family: 'Araceae',
    price: 'R$ 390',
    description: 'Famoso por suas folhas em formato de coração perfeito, textura aveludada rígida (quase papelão) e veias cristalinas que parecem ter sido desenhadas com pó de diamante.',
    imageUrl: 'https://images.unsplash.com/photo-1603444453001-c812d46e9960?auto=format&fit=crop&q=80&w=800',
    origin: 'Chiapas, México',
    climate: 'Epífita Tropical',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Intermediário',
    curatorNote: 'Epífita por natureza. Não enterre o caule (rizoma) profundamente. Gosta de raízes aéreas livres e substrato de orquídea.'
  }
];

export const RITUALS: RitualStep[] = [
  {
    id: 'arid',
    title: 'Ciclo Xérico (Árido)',
    description: 'Para cactáceas e suculentas com reservas de parênquima aquífero. Permita que o substrato desidrate 100%. Aguarde sinais de turgidez reduzida antes da rega.',
    icon: 'water_drop',
    frequency: 'A cada 14-25 Dias'
  },
  {
    id: 'temperate',
    title: 'Ciclo Temperado',
    description: 'O equilíbrio homeostático. Inicie a hidratação quando os 3-5cm superiores do solo indicarem secura tátil. Mantenha aeração nas raízes.',
    icon: 'opacity',
    frequency: 'A cada 7-10 Dias'
  },
  {
    id: 'tropical',
    title: 'Ciclo Pluvial (Tropical)',
    description: 'Mimetismo do chão da floresta. Mantenha o substrato levemente úmido (como uma esponja torcida), mas jamais encharcado. Umidade atmosférica é crucial.',
    icon: 'rainy',
    frequency: 'A cada 3-5 Dias'
  }
];

export const DIAGNOSTICS: DiagnosticSymptom[] = [
  {
    id: '1',
    title: 'Clorose Sistêmica',
    visualCue: 'Amarelamento Foliar Difuso',
    cause: 'Hipóxia radicular (excesso de água) ou deficiência de Nitrogênio.',
    solution: 'Suspenda a rega. Verifique o cheiro do substrato (podridão). Aere o solo mecanicamente. Se seco, aplique fertilizante rico em N.',
    imageUrl: 'https://images.unsplash.com/photo-1616641249764-16a29792a7eb?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '2',
    title: 'Necrose Apical',
    visualCue: 'Pontas Queimadas ("Crispy Tips")',
    cause: 'Estresse salino (acúmulo de sais/cloro) ou umidade atmosférica crítica (<40%).',
    solution: 'Lixiviação do solo (lavagem com água abundante) para remover sais. Instale umidificador próximo à planta.',
    imageUrl: 'https://images.unsplash.com/photo-1598973685324-7389c9233636?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '3',
    title: 'Estiolamento Fototrópico',
    visualCue: 'Crescimento Longo e Pálido',
    cause: 'Déficit de lúmens. A planta estica seus entrenós buscando luz desesperadamente.',
    solution: 'Realocação gradual para fonte de luz mais intensa (aumente 200 FC por semana). Poda corretiva pode ser necessária.',
    imageUrl: 'https://images.unsplash.com/photo-1599598425947-640476449178?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '4',
    title: 'Colapso de Turgidez',
    visualCue: 'Folhas Caídas e Moles',
    cause: 'Choque osmótico (falta extrema de água) ou choque térmico severo.',
    solution: 'Hidratação de emergência por capilaridade (banheira) por 45 min. Afaste de saídas de ar condicionado.',
    imageUrl: 'https://images.unsplash.com/photo-1628608213606-2581699f8d10?auto=format&fit=crop&q=80&w=500'
  }
];

export const NAVIGATION_LINKS: NavItem[] = [
  { label: 'Coleção', path: '/' },
  { label: 'Glosário', path: '/glosario' },
  { label: 'Estruturas', path: '/vasos' },
  { label: 'Substrato', path: '/solo' },
  { label: 'Rituais', path: '/cuidados' }
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
