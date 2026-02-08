
import { PlantSpecimen, RitualStep, NavItem, SocialLink, DiagnosticSymptom } from './types';

export const PLANTS: PlantSpecimen[] = [
  {
    id: '1',
    name: 'Philodendron Spiritus Sancti',
    scientificName: 'P. spiritus-sancti',
    family: 'Araceae',
    price: 'Sob Consulta',
    description: 'O "Santo Graal" dos aroids. Endêmico de uma única fazenda no Espírito Santo, Brasil, este espécime possui folhas pendentes em forma de adaga que podem atingir 60cm. Sua quase extinção na natureza o torna um símbolo de conservação ex-situ.',
    imageUrl: 'https://images.unsplash.com/photo-1610996886221-5c3175dc30e3?auto=format&fit=crop&q=80&w=1000', // Placeholder artístico
    isRare: true,
    origin: 'Espírito Santo, Brasil',
    climate: 'Tropical de Altitude',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Mestre',
    curatorNote: 'Requer umidade atmosférica de 85% constante e circulação de ar vertical. Um erro de rega pode resultar em perda foliar imediata.'
  },
  {
    id: '2',
    name: 'Monstera Obliqua Peru',
    scientificName: 'Monstera obliqua',
    family: 'Araceae',
    price: 'R$ 3.200',
    description: 'Mais espaço vazio do que folha. A Obliqua é definida por suas fenestrações extremas, deixando apenas filamentos finos de tecido verde. Ao contrário da Adansonii, suas folhas são finas como papel e extremamente delicadas.',
    imageUrl: 'https://images.unsplash.com/photo-1629854483861-f093a8d9df7a?auto=format&fit=crop&q=80&w=800',
    isRare: true,
    origin: 'Bacia Amazônica',
    climate: 'Tropical Equatorial',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Expert',
    curatorNote: 'Necessita de um totem de musgo úmido para escalar. Sem suporte vertical, ela produzirá estolões (corredores sem folhas) em busca de uma árvore.'
  },
  {
    id: '3',
    name: 'Orquídea Fantasma',
    scientificName: 'Dendrophylax lindenii',
    family: 'Orchidaceae',
    price: 'Sob Consulta',
    description: 'Uma aparição etérea dos pântanos. Desprovida de folhagem, realiza a fotossíntese exclusivamente através de suas raízes velames prateadas. Suas flores brancas parecem flutuar no ar, exalando um perfume de maçã verde ao crepúsculo.',
    imageUrl: 'https://images.unsplash.com/photo-1603525169004-9a8b5e944743?auto=format&fit=crop&q=80&w=800',
    isRare: true,
    origin: 'Pântanos de Fakahatchee, Flórida',
    climate: 'Subtropical Úmido',
    toxicity: 'Pet Safe',
    careLevel: 'Mestre',
    curatorNote: 'Não tolera substrato. Deve ser montada em cortiça ou madeira de pântano. Exige água destilada e movimento de ar constante.'
  },
  {
    id: '4',
    name: 'Variegated Frydek',
    scientificName: 'Alocasia micholitziana var.',
    family: 'Araceae',
    price: 'R$ 890',
    description: 'Veludo vivo. As folhas em forma de flecha possuem uma textura aveludada profunda, interrompida por manchas de variegação branca pura e creme. O contraste entre o verde esmeralda fosco e o branco brilhante é hipnótico.',
    imageUrl: 'https://images.unsplash.com/photo-1612361093125-96144e548237?auto=format&fit=crop&q=80&w=800',
    isHot: true,
    origin: 'Filipinas (Cultivar)',
    climate: 'Tropical Úmido',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Intermediário',
    curatorNote: 'Alocasias são ímãs para ácaros. Mantenha a umidade alta e limpe as folhas aveludadas com pincel macio, nunca com pano úmido.'
  },
  {
    id: '5',
    name: 'Flor Morcego Negra',
    scientificName: 'Tacca chantrieri',
    family: 'Dioscoreaceae',
    price: 'R$ 450',
    description: 'Dramática e arquitetural. Suas brácteas negras lembram asas de morcego, ladeadas por longos filamentos que podem chegar a 70cm. Na botânica, o preto verdadeiro é uma raridade absoluta, tornando-a uma peça central gótica.',
    imageUrl: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800',
    origin: 'Florestas da Malásia',
    climate: 'Sombra Profunda',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Expert',
    curatorNote: 'Odeia correntes de ar e mudanças de lugar. O solo deve permanecer úmido, mas perfeitamente drenado para evitar asfixia radicular.'
  },
  {
    id: '6',
    name: 'Monstera Thai Constellation',
    scientificName: 'M. deliciosa (Thai Clone)',
    family: 'Araceae',
    price: 'R$ 680',
    description: 'Criada em laboratório na Tailândia, esta variegação é genética e estável (não reverte). Suas folhas parecem ter sido respingadas com tinta creme, evocando um céu estrelado noturno.',
    imageUrl: 'https://images.unsplash.com/photo-1598555849843-980646098056?auto=format&fit=crop&q=80&w=800',
    isNew: true,
    origin: 'Tailândia (Lab)',
    climate: 'Tropical',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Iniciante',
    curatorNote: 'Ao contrário da Albo, a Thai tolera mais luz e cresce mais rápido. As partes brancas, no entanto, ainda são fotossinteticamente inativas.'
  },
  {
    id: '7',
    name: 'Stephania Erecta',
    scientificName: 'Stephania erecta',
    family: 'Menispermaceae',
    price: 'R$ 320',
    description: 'Escultura minimalista. Do seu caudex lenhoso e bulboso, emerge uma haste fina com folhas perfeitamente circulares que flutuam como guarda-chuvas verdes. Entra em dormência total no inverno.',
    imageUrl: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800',
    origin: 'Indochina',
    climate: 'Sazonal',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Intermediário',
    curatorNote: 'Paciência é chave. A brotação após a dormência pode levar meses. Não regue o bulbo diretamente para evitar apodrecimento.'
  },
  {
    id: '8',
    name: 'Aglaonema Pictum Tricolor',
    scientificName: 'Aglaonema pictum',
    family: 'Araceae',
    price: 'R$ 420',
    description: 'A planta camuflada. Possui um padrão de três tons de verde (escuro, médio e prateado) que se assemelha a uniformes militares digitais. Uma anomalia visual fascinante da natureza.',
    imageUrl: 'https://images.unsplash.com/photo-1616641249764-16a29792a7eb?auto=format&fit=crop&q=80&w=800',
    origin: 'Sumatra e Nias',
    climate: 'Tropical Úmido',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Expert',
    curatorNote: 'Crescimento extremamente lento. É suscetível a choque térmico; mantenha a temperatura acima de 20°C o ano todo.'
  },
  {
    id: '9',
    name: 'Anthurium Warocqueanum',
    scientificName: 'A. warocqueanum',
    family: 'Araceae',
    price: 'R$ 1.100',
    description: 'A "Rainha dos Antúrios". Folhas longas, estreitas e aveludadas que podem atingir 1 metro de comprimento, pendendo verticalmente com majestade. Suas veias prateadas brilham contra o fundo verde escuro.',
    imageUrl: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&q=80&w=800',
    isRare: true,
    origin: 'Colômbia',
    climate: 'Floresta de Neblina',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Mestre',
    curatorNote: 'Exige umidade altíssima (90%+) para que as folhas cresçam perfeitas. Qualquer queda na umidade resulta em bordas rasgadas.'
  },
  {
    id: '10',
    name: 'Begonia Maculata',
    scientificName: 'Begonia maculata',
    family: 'Begoniaceae',
    price: 'R$ 120',
    description: 'Design brasileiro icônico. O verso das folhas é vermelho carmesim profundo (adaptação para capturar luz refletida no chão da floresta), enquanto a frente exibe bolinhas prateadas pintadas à mão pela natureza.',
    imageUrl: 'https://images.unsplash.com/photo-1599598425947-640476449178?auto=format&fit=crop&q=80&w=800',
    origin: 'Mata Atlântica, Brasil',
    climate: 'Tropical de Altitude',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Intermediário',
    curatorNote: 'A aristocrata sensível. Ao contrário das Araceas, a Begônia possui raízes finas e odeia o acúmulo de sais minerais. Evite adubos químicos granulados potentes; prefira compostos orgânicos de liberação lenta (Bocashi). Nunca borrife água em suas folhas.'
  },
  {
    id: '11',
    name: 'Ficus Lyrata',
    scientificName: 'Ficus lyrata',
    family: 'Moraceae',
    price: 'R$ 450',
    description: 'A "Figueira Violino". Suas folhas enormes, coriáceas e estruturais dominam qualquer ambiente. Na natureza, começa sua vida como epífita, germinando na copa de outras árvores antes de enviar raízes ao solo.',
    imageUrl: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=800',
    origin: 'África Ocidental',
    climate: 'Tropical',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Intermediário',
    curatorNote: 'Temperamental com mudanças geográficas. Encontre o local perfeito com luz filtrada e nunca a mova, ou ela derrubará folhas em protesto.'
  },
  {
    id: '12',
    name: 'Corações Emaranhados',
    scientificName: 'Ceropegia woodii',
    family: 'Apocynaceae',
    price: 'R$ 90',
    description: 'Uma cascata delicada de folhas suculentas em forma de coração, com padrões de renda prateada. Seus caules finos podem atingir metros de comprimento, criando uma cortina viva de alta resistência.',
    imageUrl: 'https://images.unsplash.com/photo-1596724888803-33921b764c67?auto=format&fit=crop&q=80&w=800',
    origin: 'África do Sul',
    climate: 'Semi-árido',
    toxicity: 'Pet Safe',
    careLevel: 'Iniciante',
    curatorNote: 'Gosta de sol direto no topo da "cabeça" (tubérculo) para evitar calvície, mas luz filtrada nas pontas.'
  },
  {
    id: '13',
    name: 'Costela-de-Adão',
    scientificName: 'Monstera deliciosa',
    family: 'Araceae',
    price: 'R$ 180',
    description: 'O ícone do modernismo tropical. Suas folhas gigantescas e fenestradas (com recortes naturais) são uma adaptação evolutiva para permitir a passagem de luz e vento. Uma escultura viva que domina o espaço com sua arquitetura brutalista.',
    imageUrl: 'https://images.unsplash.com/photo-1617173944883-6644d5a94432?auto=format&fit=crop&q=80&w=1000',
    origin: 'México e Panamá',
    climate: 'Tropical Úmido',
    toxicity: 'Tóxica se ingerida',
    careLevel: 'Iniciante',
    curatorNote: 'Uma escultura viva que exige higiene. Suas folhas largas acumulam poeira que bloqueia os estômatos. O ritual de limpeza com pano úmido é mandatório. Prospera quando suas raízes aéreas são direcionadas de volta ao substrato.'
  },
  {
    id: '14',
    name: 'Samambaia Blue Star',
    scientificName: 'Phlebodium aureum',
    family: 'Polypodiaceae',
    price: 'R$ 140',
    description: 'Uma ruptura na paleta verde tradicional. Suas frondes lobadas possuem uma tonalidade glauca (azul-acinzentada) e textura aveludada. Epífita por natureza, prospera quando suas raízes rizomatosas peludas ficam expostas.',
    imageUrl: 'https://images.unsplash.com/photo-1596507456209-411a0957f495?auto=format&fit=crop&q=80&w=800',
    origin: 'Américas Tropicais',
    climate: 'Floresta de Neblina',
    toxicity: 'Pet Safe',
    careLevel: 'Intermediário',
    curatorNote: 'Diferente das samambaias comuns, ela tolera períodos breves de seca, mas exige alta umidade no ar para manter a cor azulada vibrante.'
  }
];

export const RITUALS: RitualStep[] = [
  {
    id: 'arid',
    title: 'Ciclo Xérico (Dormência)',
    description: 'Para cactáceas e suculentas com reservas de parênquima aquífero. Mimetize a seca natural: permita desidratação total do substrato. A rega deve ser um evento raro e abundante, simulando uma chuva torrencial no deserto.',
    icon: 'water_drop',
    frequency: 'A cada 18-30 Dias'
  },
  {
    id: 'temperate',
    title: 'Ciclo Homeostático',
    description: 'O equilíbrio perfeito. Inicie a hidratação apenas quando os sensores táteis (dedo) indicarem secura nos 4cm superiores. A aeração radicular é tão vital quanto a água; garanta que o solo respire.',
    icon: 'opacity',
    frequency: 'A cada 7-12 Dias'
  },
  {
    id: 'tropical',
    title: 'Ciclo Pluvial (Floresta)',
    description: 'Mimetismo do chão da floresta tropical. O substrato deve permanecer na consistência de uma esponja torcida: úmido, mas nunca encharcado. A umidade atmosférica deve complementar a rega.',
    icon: 'rainy',
    frequency: 'A cada 3-5 Dias'
  },
  {
    id: 'pruning',
    title: 'Arquitetura de Poda',
    description: 'A manipulação da forma através da quebra da dominância apical. Ao cortar a gema principal, redistribui-se o hormônio auxina para as gemas laterais, estimulando a ramificação. O corte não é agressão; é design biológico.',
    icon: 'content_cut',
    frequency: 'Sazonal / Corretiva'
  }
];

export const DIAGNOSTICS: DiagnosticSymptom[] = [
  {
    id: '1',
    title: 'Senescência vs. Clorose',
    visualCue: 'Amarelamento Foliar (Basal ou Difuso)',
    cause: 'Pode ser senescência programada (envelhecimento natural) ou patologia. Se a folha for antiga e o amarelo uniforme, a planta está reabsorvendo nutrientes.',
    solution: 'Não corte imediatamente. Aguarde a folha secar 50% para que a planta complete a translocação de Nitrogênio e Magnésio. Se for em folhas novas, verifique pH do solo.',
    imageUrl: 'https://images.unsplash.com/photo-1616641249764-16a29792a7eb?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '2',
    title: 'Necrose Apical',
    visualCue: 'Pontas Queimadas ("Crispy Tips")',
    cause: 'Estresse osmótico por acúmulo de sais (água de torneira) ou umidade relativa do ar crítica (<40%).',
    solution: 'Realize "flush" (lavagem) do solo com água filtrada para lixiviar sais. Instale umidificador ultrassônico próximo à planta.',
    imageUrl: 'https://images.unsplash.com/photo-1598973685324-7389c9233636?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '3',
    title: 'Estiolamento Fototrópico',
    visualCue: 'Crescimento Longo e Pálido',
    cause: 'Déficit de lúmens (luz). A planta estica seus entrenós, gastando energia vital para alcançar uma fonte luminosa.',
    solution: 'Aumente a exposição à luz gradualmente (aclimatação) ou introduza iluminação artificial de espectro completo (Grow Lights).',
    imageUrl: 'https://images.unsplash.com/photo-1599598425947-640476449178?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '4',
    title: 'Colapso de Turgidez',
    visualCue: 'Murcha Súbita (Faint)',
    cause: 'Choque térmico ou falta extrema de água. Comum em plantas dramáticas (Peace Lily, Fittonia).',
    solution: 'Hidratação de emergência por imersão (bottom watering) por 45 minutos. Afaste de correntes de ar frio/quente.',
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
