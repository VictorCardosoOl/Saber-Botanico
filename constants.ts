import { PlantSpecimen, RitualStep } from './types';

export const PLANTS: PlantSpecimen[] = [
  {
    id: '1',
    name: 'Orquídea Fantasma',
    scientificName: 'Dendrophylax lindenii',
    price: '2.4 ETH',
    description: 'Uma epífita sem folhas da Flórida, conhecida pela sua forma de sapo e cor branca etérea.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBr6StSarekG4acJEVQ27npDNUECdnes2ftLCf8-kIuInvNYCBdl9Pyx13VqKsazX5JHgaiFQ_1E-L7kvLffc60zrS1dh9-NFSoQGHnHB0s_o3izduKe2OGm90I157V5cDa35De2hjtFafQBLY6TecuL8W0FiyaKjccW2E-HLEyHiVRo_4q7aoitAbqWIWTdP8ad_Tx-tgGX2zThL2kKCpKkRLHqjrNk_AvePYls-WK-E7KikqWEcJD-M2sUfSNTDKCleeLKLOox8ru',
    isRare: true
  },
  {
    id: '2',
    name: 'Flor Morcego Negra',
    scientificName: 'Tacca chantrieri',
    price: '1.8 ETH',
    description: 'Nomeada por suas flores negras únicas que se assemelham a um morcego em voo, nativa do Sudeste Asiático.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnohefY6HqMeFHiRaPFWQaPPTct64S78A_YRmPZrg9K5AxrnK27KcLAEhYc25TZfmoG1dAhRhfrsM9lV2ht1OIVlsBIxsHzf0F2mDCP6tuq9f3-_CskgFqhBzGmqg4VNgNPs9y7J8OaEpmLzT3qi0UJ51bLutekzCGq7iytkaUCCIahrWhk88xoduaSm2yPZDeF6-3uwIgOxgJ0P6Pfk07tKvDLn_7JixgloGqmGPeVixVlar2DOhNkSzU7UBCDIy8OR0rOEK0QhWc'
  },
  {
    id: '3',
    name: 'Videira de Jade',
    scientificName: 'Strongylodon macrobotrys',
    price: '3.1 ETH',
    description: 'Famosa por suas espetaculares flores em forma de garra em um tom turquesa deslumbrante.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpZiGfK19_W47GecfSOImzHxvDPgBc47E2ejkJ_2nmxddk_sB0MRBJz8mn7Ox7IiAtBd3LBMlCvm-ggxEzEO437lQ9aHzX3q2BVDRrbEG4aNKNuzRspOckCkbfpru9BWCBuLEyoqqe49aIU7OpzXBTsH5nlIxDGoQB7iOZaVj-61w4gozarmlg91T7RV0yS00aqOlZ-HsXfolitGyD_yBgMRED72X_slPYD0Ab2rdqBfKImTN-G55uSkL1yqNZMAYbMiMY9Bscr9x-',
    isNew: true
  },
  {
    id: '4',
    name: 'Monstera Albo',
    scientificName: 'M. deliciosa variegata',
    price: '4.5 ETH',
    description: 'Altamente procurada por sua impressionante variegação branca, imitando respingos de tinta.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdcimmZMiiwxgI8NtPQq6r3bct1KeN9rB_rVnaAJwKG7Sk7TkYB6voTPKtD1LQ_bnoH4RfLQLjcnp7YandVojLBs4QWme6Lg9WFQmG7IpMs6w-h1Hh4u9-XwSRWXbel6WvK6mhiW59s9_HvFM8XH_Vs6bvFBsH5VUiNpfe6IOTEUmr6iwLWw2pIlGut7dAAb6yUFCvTYVf1KbMKuyw_szC3evxivsxd9qU0xxVd71k54_dTgd_2xpw_OxPGmWSOmUXNK0HCGob-_hf',
    isHot: true
  },
  {
    id: '5',
    name: 'Protea Real',
    scientificName: 'Protea cynaroides',
    price: '1.2 ETH',
    description: 'A flor nacional da África do Sul, ostentando uma enorme cabeça floral e longevidade incrível.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBkv1sjLy-9RwmfzQ6cLZsHs3ms0-iUvzKdVGn7626t6oJm8bizLUT1g8-bdczEKe7eiPJFe8Jg57ADfNY74r9vqhI3R4rsbNCY7BD_ia_SVbbdXrHe_DcMaFnvqcpWd17qQtDv0cdCaqP9dHrkeeAUKwvabCRLY-rvEvLTweXk5l1miEytYXBF75sooNRmXuS6f3b-69D4SxxnSq7iQDfGlxzpTf-sv8xQ4P3NXfszqnr23_c-7lJhx09F9X-CHoLRzKrbKGTdPuE'
  },
  {
    id: '6',
    name: 'Cardo Azul',
    scientificName: 'Eryngium planum',
    price: '0.9 ETH',
    description: 'Conhecida por sua folhagem azul metálica e flores semelhantes a cardos, adicionando interesse estrutural.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLngF9P-rRSRKBlOAvu3yCVo8ypbwxvbBsvcAAAxSaSB9BErt4r_Um-VeA4ygUbasWT_YzQryZUkj5wkzn-tr_4WHeNwplhVX2CbGOb0L8UUNU7V2UrlHI72LgtiGUXIxSPnqbvZhXndAzhDgf3lySITJgfKMTpMEuSMTVwxgSWLUrcQPtWliRmQ-Q6NfXH-8CboitOo7J_oRCIDI-nbGB6Prjl092F4h8qo1US8C-TivREzu-It9dlxN1q-kStXv4fkEB37wikLKA'
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

export const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCGZbyvX8Kg4nE0OZTuAXQOkqnBZdCl2CCk2rSB06Q0FHRlGRVt9m_9ihDDnOr4ikBt8c9AQulAOJiKuRa0CA0gN-YdqfCwYmrfws1-IQrXRJL77p495xCM5IkSVB7DSsUHTCQBx61kD2Yb9x3wTznRi1QfrrGNWVQXRDsGDAM0hO2f4HzUK9a1DcPI98WiewC1gS6tbq7xWDhJ0MoQ_eVK2sKMlNGgwXel0u4_RZMK7m4HCcCdt0f-7gAVquzKG8EKRAHZT_m63PLj";
export const SOIL_IMAGE_MAIN = "https://lh3.googleusercontent.com/aida-public/AB6AXuDFdohjaaOanrUCGocoLQSQ53ulBubiyaBV2i6NtKK8J2dI9qWGUZVxdIp6nMmEbxa11uumbkn405dTjza3GHvutW5GrgYW9HhU9gnHJ-3JzAkrvFqxIBQEXilYTBdRia-zLLlULP4Jjn1FKP5u4oAaL-_WMhQpqIExfyzRbt-rt2X2JWfSUX1Tfzi9jdQNPapSJMQ27EgpVAE31dcNL5ITg6Sy7-yKj4MRAmjXf_6X5vVr6VFwJAAo4LfjCPCMqYv_JGJfKnqvupQo";
export const SOIL_IMAGE_SMALL_1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDm7QJjFJ-aYB92tQSEQ2O0HSvT3zJr0MAx1_nbUVLOHjqI69PiT3pSO6uedx1z4GIF7mY14MmW53we4k7dQbO1R3hiIWx0fFCg4oWb5U2Gn9JQU6xEdI-jiZC8mpTxomxsnyNuud_re4MYHD38M6--HFiclBFpYlp3YHrZKEExHZIpY3pxv6YvkZ1qtrFYun5EJ4TX-QIanPdxrOeMSN6aniWDxLaRJzWMY1mmQzyM9Uq_3DDk3WrGlODKCbXhE_F1FFRj0ymZIRAP";
export const SOIL_IMAGE_SMALL_2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuBWK0Q3EAXoYVhGYtARkuf7KX6vA-OC9JbyrwGLvljXeHhnGcX_j4SpbiBJB9fesdrpvvf-0GeVrgnpf5QkZacQRo2DDnLFK3-ihBZEwmkGXcQR04zfFnri9dT8vNDAbHFrpQ01ZdQ3wih0ezg73fmVqRCpZLJAd3yiCwIDV5l1up4kbtZkJn-pOic17tpbWEaH2tTkE3ZuPK23SsPeDavvfmduSn2w3WHwKT-CTJQOc64MzQULWKkPBQeDDMc2I3ZtOFuOZbyhUHD6";
export const ARCHIVE_HERO = "https://lh3.googleusercontent.com/aida-public/AB6AXuCYpdNyQ86n3YHANA9CkOfHH_Ts_g_cdnGv8w2kQ04kkw8N-1VBgaamZzia4HbnxsmawMVfQLcqGe6-Udr4uE8agr3YpI3wxwmnn2icdSjtE2z6pEYOBmokaCaBkbRrk22bZENE78DMDJMB4fxgutNtf_4xrvAtNFTM8HELz59TTo4-wmPes89CJ_amp-q30tspniSMpcOnfF_m1TllflkGVXf8k035OjcMaxQN9wLLglRo6pK06wz3fgH4AMZOTrVElGeQPUDPHfAk";