// Product data with true-price classification and detailed breakdowns
export const products = [
  // LOW TRUE-PRICE PRODUCTS (Sustainable choices)
  {
    id: 1,
    name: "REWE frei von Bio zarte Haferflocken 500 g",
    price: 2.49,
    basePrice: "4.98/kg",
    truePrice: 2.89,
    truePriceClass: "low",
    truePriceBreakdown: {
      climate: 0.15,
      water: 0.00,
      landUse: 0.10,
      social: 0.15
    },
    truePriceExplanation: "Bio-Zertifizierung reduziert den Externality-Gap um 15% gegenüber konventionellem Anbau. Der geringe Aufpreis spiegelt hauptsächlich kleinere Ineffizienzen in der Lieferkette wider.",
    category: "bio",
    brand: "REWE Bio",
    nutriScore: "A",
    tags: ["bio", "glutenfrei"],
    description: "Organic oats; gluten-free; Nutri-Score A.",
    longDescription: "Zarte Bio-Haferflocken aus kontrolliert biologischem Anbau. Glutenfrei produziert und ideal für ein gesundes Frühstück. Reich an Ballaststoffen und komplexen Kohlenhydraten für langanhaltende Energie.",
    origin: "Deutschland",
    image: "https://img.rewe-static.de/8041311/30734219_digital-image.png",
    stock: 50
  },
  {
    id: 2,
    name: "REWE Bio Rote Linsen 500 g",
    price: 1.65,
    basePrice: "3.30/kg",
    truePrice: 2.15,
    truePriceClass: "low",
    truePriceBreakdown: {
      climate: 0.10,
      water: 0.05,
      landUse: 0.10,
      social: 0.25
    },
    truePriceExplanation: "Pflanzliches Protein mit geringem CO₂-Fußabdruck (0,3 kg CO₂/kg). Soziale Kosten entstehen durch Einkommenslücken bei Kleinbauern in Indien/Türkei.",
    category: "bio",
    brand: "REWE Bio",
    nutriScore: "A",
    tags: ["bio", "vegan"],
    description: "Organic red lentils; Nutri-Score A; good for plant-based diets.",
    longDescription: "Rote Bio-Linsen aus biologischem Anbau. Schnell kochend und vielseitig verwendbar für Suppen, Currys und Dals. Hervorragende pflanzliche Proteinquelle.",
    origin: "Türkei",
    image: "https://img.rewe-static.de/7547310/42682862_digital-image.png",
    stock: 75
  },
  {
    id: 3,
    name: "REWE Bio + vegan Tofu natur 2×200 g",
    price: 2.29,
    basePrice: "5.73/kg",
    truePrice: 2.89,
    truePriceClass: "low",
    truePriceBreakdown: {
      climate: 0.15,
      water: 0.10,
      landUse: 0.25,
      social: 0.10
    },
    truePriceExplanation: "Pflanzliches Produkt mit niedrigstem Umwelt-Impact. Zertifizierte Soja-Quellen reduzieren das Entwaldungsrisiko. Verarbeitung in Deutschland sichert faire Arbeitsbedingungen.",
    category: "bio",
    brand: "REWE Bio",
    nutriScore: "A",
    tags: ["bio", "vegan"],
    description: "Organic, vegan tofu; 'Bio' and 'Vegan' badges; low externalities.",
    longDescription: "Naturbelassener Bio-Tofu aus europäischen Sojabohnen. Vielseitig einsetzbar zum Braten, Grillen oder Marinieren. Hoher Proteingehalt für eine ausgewogene pflanzliche Ernährung.",
    origin: "Deutschland",
    image: "https://img.rewe-static.de/5141612/29546836_digital-image.png",
    stock: 30
  },
  {
    id: 4,
    name: "REWE Bio Kichererbsen 215 g",
    price: 0.85,
    basePrice: "3.95/kg",
    truePrice: 1.25,
    truePriceClass: "low",
    truePriceBreakdown: {
      climate: 0.05,
      water: 0.05,
      landUse: 0.10,
      social: 0.20
    },
    truePriceExplanation: "Hülsenfrucht mit sehr geringem Umwelt-Impact (0,15 kg CO₂/kg). Soziale Kosten durch Einkommensdefizite bei Kleinbauern im Mittelmeerraum.",
    category: "bio",
    brand: "REWE Bio",
    nutriScore: "A",
    tags: ["bio", "vegan"],
    description: "Organic chickpeas in a small glass jar; good source of plant protein.",
    longDescription: "Bio-Kichererbsen im praktischen Glas. Bereits gekocht und verzehrfertig. Ideal für Salate, Hummus oder als Beilage. Reich an pflanzlichem Eiweiß und Ballaststoffen.",
    origin: "Italien",
    image: "https://img.rewe-static.de/7055914/27084991_digital-image.png",
    stock: 100
  },
  {
    id: 5,
    name: "UNSER LAND Bio Kartoffeln festkochend 2 kg",
    price: 4.49,
    basePrice: "2.25/kg",
    truePrice: 5.25,
    truePriceClass: "low",
    truePriceBreakdown: {
      climate: 0.20,
      water: 0.22,
      landUse: 0.15,
      social: 0.19
    },
    truePriceExplanation: "Regionales Bio-Produkt aus Bayern. Deutsche Landwirtschaftslöhne nahe Fair-Trade-Niveau. Kosten entstehen durch Energiewende bei Lagerung und Wasseraufbereitung.",
    category: "regional",
    brand: "UNSER LAND",
    nutriScore: "A",
    tags: ["bio", "regional"],
    description: "Regional, organic potatoes; substitution for 2.5 kg pack; low true price.",
    longDescription: "Festkochende Bio-Kartoffeln aus regionalem Anbau. Perfekt für Bratkartoffeln, Kartoffelsalat und als Beilage. Kurze Transportwege garantieren Frische und schonen die Umwelt.",
    origin: "Bayern, Deutschland",
    image: "https://img.rewe-static.de/0468783/23949880_digital-image.png",
    stock: 40
  },
  {
    id: 6,
    name: "Karotten 1 kg",
    price: 1.29,
    basePrice: "1.29/kg",
    truePrice: 1.79,
    truePriceClass: "low",
    truePriceBreakdown: {
      climate: 0.15,
      water: 0.05,
      landUse: 0.10,
      social: 0.20
    },
    truePriceExplanation: "Konventioneller Anbau mit höherem Externality-Gap. Kosten durch synthetische Dünger/Pestizide und Niedriglohn-Arbeit in der Landwirtschaft.",
    category: "regional",
    brand: null,
    nutriScore: "A",
    tags: ["regional"],
    description: "Generic carrots; low environmental impact and rich in vitamin A.",
    longDescription: "Frische Karotten aus deutschem Anbau. Reich an Beta-Carotin und Vitamin A. Vielseitig verwendbar als Rohkost, zum Kochen oder für Säfte.",
    origin: "Deutschland",
    image: "https://img.rewe-static.de/1045111/21288882_digital-image.png",
    stock: 60
  },
  {
    id: 7,
    name: "Karotten mit Grün im Bund",
    price: 1.99,
    basePrice: null,
    truePrice: 2.75,
    truePriceClass: "low",
    truePriceBreakdown: {
      climate: 0.20,
      water: 0.05,
      landUse: 0.15,
      social: 0.20
    },
    truePriceExplanation: "Konventionell mit Zero-Waste-Ansatz. Geringerer Transport durch Bündelung, aber weiterhin synthetische Inputs. Verpackungsentsorgungskosten eingerechnet.",
    category: "regional",
    brand: null,
    nutriScore: "A",
    tags: ["regional"],
    description: "Carrots sold with greens; fresh and regional; no base price given.",
    longDescription: "Frische Bundmöhren mit Grün. Das Karottengrün kann für Pesto oder Suppen verwendet werden. Besonders frisch und aromatisch aus regionalem Anbau.",
    origin: "Deutschland",
    image: "https://img.rewe-static.de/0483010/7361800_digital-image.png",
    stock: 25
  },
  {
    id: 8,
    name: "REWE to go Karottini 250 g",
    price: 0.99,
    basePrice: "3.96/kg",
    truePrice: 1.55,
    truePriceClass: "low",
    truePriceBreakdown: {
      climate: 0.12,
      water: 0.08,
      landUse: 0.08,
      social: 0.15
    },
    truePriceExplanation: "Verarbeiteter Snack mit höheren Transformationskosten. Waschen, Schneiden und Plastikverpackung verursachen zusätzliche Umweltkosten.",
    category: "tiefpreis",
    brand: "REWE to go",
    nutriScore: "A",
    tags: [],
    description: "Snack-size baby carrots; convenient healthy snack.",
    longDescription: "Praktische Mini-Karotten für unterwegs. Bereits gewaschen und verzehrfertig. Der ideale gesunde Snack für Schule, Büro oder Sport.",
    origin: "Deutschland",
    image: "https://img.rewe-static.de/2625775/25598665_digital-image.png",
    stock: 45
  },
  {
    id: 9,
    name: "Broccoli 500 g",
    price: 1.79,
    basePrice: "3.58/kg",
    truePrice: 2.45,
    truePriceClass: "low",
    truePriceBreakdown: {
      climate: 0.20,
      water: 0.20,
      landUse: 0.06,
      social: 0.20
    },
    truePriceExplanation: "Konventionell, pestizidintensive Kultur. Umweltkosten durch Wasserverschmutzung und Niedriglohnarbeit in Spanien/Italien.",
    category: "regional",
    brand: null,
    nutriScore: "A",
    tags: ["regional"],
    description: "Green vegetable with low true price.",
    longDescription: "Frischer Broccoli, reich an Vitaminen und Mineralstoffen. Besonders hoher Gehalt an Vitamin C und Folsäure. Ideal zum Dämpfen, Braten oder als Rohkost.",
    origin: "Deutschland/Spanien",
    image: "https://img.rewe-static.de/1007433/21403678_digital-image.png",
    stock: 35
  },
  {
    id: 10,
    name: "Regionale Äpfel Pinova 1 kg",
    price: 2.99,
    basePrice: "2.99/kg",
    truePrice: 3.55,
    truePriceClass: "low",
    truePriceBreakdown: {
      climate: 0.15,
      water: 0.10,
      landUse: 0.20,
      social: 0.11
    },
    truePriceExplanation: "Lokal und konventionell. Pestizideinsatz und Obstgarten-Management verursachen Kosten. Regionale Beschaffung reduziert Transport um 50%.",
    category: "regional",
    brand: null,
    nutriScore: "A",
    tags: ["regional"],
    description: "Local apple variety; fresh fruit with low externalities.",
    longDescription: "Pinova-Äpfel aus regionalem Anbau. Süß-säuerlicher Geschmack, knackig und saftig. Ideal als Snack oder zum Backen. Kurze Transportwege für maximale Frische.",
    origin: "Bodensee, Deutschland",
    image: "https://img.rewe-static.de/1907470/23271236_digital-image.png",
    stock: 55
  },

  // HIGH TRUE-PRICE PRODUCTS (Higher environmental impact)
  {
    id: 11,
    name: "Rinderhackfleisch 500 g",
    price: 4.49,
    basePrice: "8.98/kg",
    truePrice: 8.50,
    truePriceClass: "high",
    truePriceBreakdown: {
      climate: 3.20,
      water: 0.30,
      landUse: 0.30,
      social: 0.21
    },
    truePriceExplanation: "Höchste Externalitäten. Rindfleisch verursacht 27 kg CO₂/kg Produkt. Klimakosten bei 120€/Tonne CO₂. Zusätzlich Wasserverschmutzung durch Gülle und Landnutzung.",
    category: "neu",
    brand: "ja!",
    nutriScore: "D",
    tags: [],
    description: "Conventional beef mince; animal product with high true price due to emissions.",
    longDescription: "Frisches Rinderhackfleisch aus kontrollierter Haltung. Vielseitig verwendbar für Bolognese, Burger oder Hackbraten. Der wahre Preis berücksichtigt die Umweltauswirkungen der Rindfleischproduktion.",
    origin: "Deutschland",
    image: "https://img.rewe-static.de/7978794/32402863_digital-image.png",
    stock: 20
  },
  {
    id: 12,
    name: "Rinderfiletsteak 200 g",
    price: 8.99,
    basePrice: "44.95/kg",
    truePrice: 16.95,
    truePriceClass: "high",
    truePriceBreakdown: {
      climate: 6.50,
      water: 0.60,
      landUse: 0.60,
      social: 0.26
    },
    truePriceExplanation: "Premium-Rindfleisch mit gleicher Produktionsbasis. 27 kg CO₂/kg Rindfleisch. Höhere Kosten durch Verschnitt bei Edelstücken. Nicht erfasste Umweltkosten der intensiven Rindfleischproduktion.",
    category: "neu",
    brand: null,
    nutriScore: "D",
    tags: [],
    description: "Beef filet steak; premium cut; high externalities.",
    longDescription: "Premium Rinderfilet, der zarteste Teil vom Rind. Perfekt zum Kurzbraten. Der wahre Preis reflektiert die hohen Umweltkosten der Rindfleischproduktion inkl. Methanemissionen und Landnutzung.",
    origin: "Argentinien",
    image: "https://img.rewe-static.de/8728614/37096973_digital-image.png",
    stock: 15
  },
  {
    id: 13,
    name: "Lammkotelett ca. 300 g",
    price: 9.99,
    basePrice: "33.30/kg",
    truePrice: 18.40,
    truePriceClass: "high",
    truePriceBreakdown: {
      climate: 5.80,
      water: 0.80,
      landUse: 1.10,
      social: 0.71
    },
    truePriceExplanation: "Lamm hat sogar höheren Impact als Rind. 25 kg CO₂/kg durch Methanemissionen. Überweidungsrisiko im Mittelmeerraum. Einkommenslücken bei Hirten in Australien/Neuseeland.",
    category: "neu",
    brand: null,
    nutriScore: "D",
    tags: [],
    description: "Lamb chops; high land-use and methane emissions.",
    longDescription: "Zarte Lammkoteletts, ideal zum Grillen oder Braten. Die Schafhaltung verursacht hohe Methanemissionen und benötigt viel Weideland, was sich im wahren Preis widerspiegelt.",
    origin: "Neuseeland",
    image: "https://img.rewe-static.de/8139884/31571240_digital-image.png",
    stock: 12
  },
  {
    id: 14,
    name: "Butter 250 g",
    price: 2.29,
    basePrice: "9.16/kg",
    truePrice: 3.15,
    truePriceClass: "high",
    truePriceBreakdown: {
      climate: 0.30,
      water: 0.15,
      landUse: 0.20,
      social: 0.21
    },
    truePriceExplanation: "Milchprodukt mit moderatem Impact. 0,79 kg CO₂/kg Butter aus Milchproduktion. Landnutzung durch Milchviehweiden. Einkommenslücke bei EU-Milchbauern.",
    category: "tiefpreis",
    brand: null,
    nutriScore: "D",
    tags: [],
    description: "Standard butter; dairy product with moderate externalities.",
    longDescription: "Deutsche Markenbutter aus Kuhmilch. Der wahre Preis berücksichtigt die Umweltauswirkungen der Milchwirtschaft, einschließlich Methanemissionen und Wasserverbrauch.",
    origin: "Deutschland",
    image: "https://img.rewe-static.de/4530594/1092510_digital-image.png",
    stock: 80
  },
  {
    id: 15,
    name: "Parmigiano Reggiano 150 g",
    price: 4.99,
    basePrice: "33.27/kg",
    truePrice: 8.55,
    truePriceClass: "high",
    truePriceBreakdown: {
      climate: 0.87,
      water: 0.50,
      landUse: 0.85,
      social: 0.35
    },
    truePriceExplanation: "Hoher Externality-Milchprodukt. 1,3 kg CO₂/kg gereifter Käse. Lange Lagerung/Energie. Bewässerungsstress im Po-Tal. Keine regenerativen Praktiken erkennbar.",
    category: "neu",
    brand: null,
    nutriScore: "D",
    tags: [],
    description: "Hard Italian cheese; long maturation; animal product.",
    longDescription: "Original Parmigiano Reggiano aus Italien, mindestens 24 Monate gereift. Intensiver, würziger Geschmack. Die lange Reifezeit und Milchproduktion spiegeln sich im wahren Preis wider.",
    origin: "Italien",
    image: "https://img.rewe-static.de/8691063/36533483_digital-image.png",
    stock: 25
  },
  {
    id: 16,
    name: "Bio Lachsfilet 200 g",
    price: 7.99,
    basePrice: "39.95/kg",
    truePrice: 11.50,
    truePriceClass: "high",
    truePriceBreakdown: {
      climate: 0.96,
      water: 0.75,
      landUse: 0.80,
      social: 0.20
    },
    truePriceExplanation: "Bio-Aquakultur besser als konventionell, aber signifikanter Gap. Futterverwertungseffizienz, Flucht-/Krankheitsrisiko und Wasserverschmutzung. Bio-Zertifizierung reduziert Gap um 25%.",
    category: "bio",
    brand: "REWE Bio",
    nutriScore: "A",
    tags: ["bio"],
    description: "Organic salmon; high true price because of aquaculture impacts but better than conventional.",
    longDescription: "Bio-Lachsfilet aus nachhaltiger Aquakultur. Reich an Omega-3-Fettsäuren. Obwohl bio-zertifiziert, hat Lachs durch die Aquakultur einen erhöhten ökologischen Fußabdruck.",
    origin: "Norwegen",
    image: "https://img.rewe-static.de/8655330/33088878_digital-image.png",
    stock: 18
  },
  {
    id: 17,
    name: "Garnelen 250 g",
    price: 5.99,
    basePrice: "23.96/kg",
    truePrice: 11.20,
    truePriceClass: "high",
    truePriceBreakdown: {
      climate: 1.20,
      water: 1.00,
      landUse: 2.30,
      social: 0.71
    },
    truePriceExplanation: "Höchste Externalität bei Meeresfrüchten. Grundschleppnetzfischerei/Beifang. Mangrovenzerstörung in Herkunftsregionen. Niedriglohnarbeit in Garnelenfarmen (Indien/Vietnam).",
    category: "neu",
    brand: null,
    nutriScore: "B",
    tags: [],
    description: "Prawns/shrimp; fishing/aquaculture externalities; high true price.",
    longDescription: "King Prawns, tiefgefroren. Garnelenzucht kann zur Zerstörung von Mangrovenwäldern führen und hat hohe Umweltauswirkungen, die im wahren Preis berücksichtigt werden.",
    origin: "Vietnam",
    image: "https://img.rewe-static.de/2565945/24710843_digital-image.png",
    stock: 22
  },
  {
    id: 18,
    name: "Kaffee ganze Bohnen 1 kg",
    price: 12.99,
    basePrice: "12.99/kg",
    truePrice: 16.50,
    truePriceClass: "high",
    truePriceBreakdown: {
      climate: 0.55,
      water: 0.35,
      landUse: 1.20,
      social: 1.41
    },
    truePriceExplanation: "Teilweise nachhaltig. Landnutzung (Entwaldungsrisiko in Tropen). Pestizideinsatz. Große Lücke bei Farmereinkommen ohne Fair-Trade-Zertifizierung.",
    category: "neu",
    brand: null,
    nutriScore: null,
    tags: [],
    description: "Whole coffee beans; look for fair-trade or organic certification.",
    longDescription: "Ganze Kaffeebohnen für volles Aroma. Kaffeeanbau kann zu Entwaldung und sozialen Problemen führen. Achten Sie auf Fair-Trade oder Bio-Zertifizierung für nachhaltigeren Genuss.",
    origin: "Kolumbien/Brasilien",
    image: "https://img.rewe-static.de/1235745/23055526_digital-image.png",
    stock: 40
  },
  {
    id: 19,
    name: "Bitterschokolade Fair Trade 100 g",
    price: 1.49,
    basePrice: "14.90/kg",
    truePrice: 2.35,
    truePriceClass: "high",
    truePriceBreakdown: {
      climate: 0.20,
      water: 0.10,
      landUse: 0.35,
      social: 0.21
    },
    truePriceExplanation: "Fair-Trade-zertifiziert mit signifikanter Impact-Minderung. Faire Arbeitsbedingungen, aber Kakaoanbau hat weiterhin ökologische Auswirkungen auf Biodiversität.",
    category: "tiefpreis",
    brand: null,
    nutriScore: "E",
    tags: ["fairtrade"],
    description: "Dark chocolate bar; fair-trade reduces social externalities but cocoa has high footprint.",
    longDescription: "Dunkle Schokolade mit 70% Kakaoanteil aus fairem Handel. Fair Trade sorgt für bessere Arbeitsbedingungen, der Kakaoanbau hat jedoch weiterhin ökologische Auswirkungen.",
    origin: "Ghana",
    image: "https://img.rewe-static.de/0145497/12672220_digital-image.png",
    stock: 60
  },
  {
    id: 20,
    name: "Freiland Eier 10 Stück",
    price: 3.79,
    basePrice: null,
    truePrice: 4.95,
    truePriceClass: "high",
    truePriceBreakdown: {
      climate: 0.35,
      water: 0.15,
      landUse: 0.40,
      social: 0.26
    },
    truePriceExplanation: "Freilandhaltung besser als Käfig. Umweltkosten durch Futterbeschaffung (Getreide) und Güllemanagement. Keine Bio-Zertifizierung lässt Pestizid-Gap im Futter.",
    category: "tiefpreis",
    brand: null,
    nutriScore: "A",
    tags: [],
    description: "Free-range eggs; animal welfare better than caged eggs but still high true price.",
    longDescription: "Freilandeier von glücklichen Hühnern. Bessere Tierhaltung als bei Käfig- oder Bodenhaltung, aber die Eierproduktion hat weiterhin Umweltauswirkungen durch Futterproduktion und Emissionen.",
    origin: "Deutschland",
    image: "https://img.rewe-static.de/8677300/33788982_digital-image.png",
    stock: 50
  }
];

// Category definitions
export const categories = [
  { id: 'all', name: 'Alle', icon: '🛒' },
  { id: 'bio', name: 'Bio', icon: '🌿' },
  { id: 'regional', name: 'Regional', icon: '📍' },
  { id: 'tiefpreis', name: 'Tiefpreis', icon: '💰' },
  { id: 'neu', name: 'Neu', icon: '✨' }
];

// Filter options
export const filterOptions = {
  tags: [
    { id: 'bio', label: 'Bio', color: 'bg-bio-green' },
    { id: 'vegan', label: 'Vegan', color: 'bg-vegan-lime' },
    { id: 'regional', label: 'Regional', color: 'bg-regional-blue' },
    { id: 'fairtrade', label: 'Fair Trade', color: 'bg-amber-600' },
    { id: 'glutenfrei', label: 'Glutenfrei', color: 'bg-purple-500' }
  ],
  truePriceClass: [
    { id: 'low', label: 'Niedriger True Price', color: 'bg-green-500' },
    { id: 'high', label: 'Hoher True Price', color: 'bg-red-500' }
  ],
  scoreRanges: [
    { id: 'health-high', label: 'Health Score 80+', icon: '❤️' },
    { id: 'health-medium', label: 'Health Score 60-79', icon: '💛' },
    { id: 'impact-high', label: 'Impact Score 80+', icon: '🌱' },
    { id: 'impact-medium', label: 'Impact Score 60-79', icon: '🌿' }
  ],
  sortOptions: [
    { id: 'relevance', label: 'Relevanz' },
    { id: 'price-asc', label: 'Preis aufsteigend' },
    { id: 'price-desc', label: 'Preis absteigend' },
    { id: 'true-price', label: 'True Price (niedrig zuerst)' },
    { id: 'true-price-gap', label: 'True Price Gap (% niedrig zuerst)' },
    { id: 'health-score', label: 'Health Score (hoch zuerst)' },
    { id: 'impact-score', label: 'Impact Score (hoch zuerst)' },
    { id: 'combined-score', label: 'Gesamt-Score (hoch zuerst)' },
    { id: 'name', label: 'Name A-Z' }
  ]
};

// Helper function to get product by ID
export const getProductById = (id) => {
  return products.find(p => p.id === parseInt(id));
};

// Helper function to search products
export const searchProducts = (query) => {
  const searchTerm = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(searchTerm) ||
    p.description.toLowerCase().includes(searchTerm) ||
    p.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

// Helper to find alternatives (for when no exact match is found)
export const findAlternatives = (query) => {
  const searchTerm = query.toLowerCase();
  
  // Find products with partial matches or similar categories
  return products.filter(p => {
    const nameWords = p.name.toLowerCase().split(' ');
    const queryWords = searchTerm.split(' ');
    return queryWords.some(qw => nameWords.some(nw => nw.includes(qw) || qw.includes(nw)));
  }).slice(0, 4);
};

// Helper to calculate true price gap percentage
export const getTruePriceGapPercent = (product) => {
  return Math.round(((product.truePrice - product.price) / product.price) * 100);
};

// Helper to get sustainable alternatives for high-impact products
export const getSustainableAlternatives = (product) => {
  if (product.truePriceClass !== 'high') return [];
  
  return products.filter(p => 
    p.truePriceClass === 'low' && 
    p.id !== product.id
  ).slice(0, 3);
};
