// English site copy, and the source of truth for every non-text field
// (images, slugs, sizes). The zh / my files only override text; see ./index.ts.

export const company = {
  name: "Golden Goat Myanmar Co., Ltd.",
  legalName: "Golden G.O.A.T Myanmar Co., Ltd",
  brand: "My King",
  founded: "December 29, 2021",
  address: "Kyauk Padaung Township, Mandalay Region, Myanmar",
  emails: [
    "admin@goldengoatmm.com",
    "goldengoatfoodproduction111@gmail.com",
    "dbtk986@gmail.com",
  ],
  phones: ["+959442220578", "+9592220578"],
  certifications: ["DICA Registered", "Myanmar FDA", "China GACC Approved"],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "Made in Myanmar · Since 2021",
  title: "Naturally Nourishing,",
  titleAccent: "from the foot of Mount Popa.",
  subtitle:
    "We began as a family business and now lead in organic fruit drinks, using pure resources from our volcanic location for high-quality, sustainable products.",
  image: "/images/story/hero-popa-bottles.jpg",
};

// The pinned scroll section that follows the hero: cards fan out around
// the Mount Popa photo, then this copy fades in underneath.
export const heroStory = {
  title: "Pure from volcanic soil, crafted with care.",
  lines: [
    "No added cane sugar or preservatives, sweetened only with traditional toddy palm jaggery.",
    "Grown at 4,891 ft on volcanic land and made with PUM Netherlands expert technology.",
  ],
  cta: { label: "Discover the story of Golden Goat", href: "/about" },
  cards: [
    { image: "/images/story/tamarind-concentrate.jpg", alt: "My King tamarind concentrate beneath a tamarind tree" },
    { image: "/images/story/plum-farm.jpg", alt: "Ripe plums on the branch" },
    { image: "/images/story/palm-harvest.jpg", alt: "A climber tapping toddy palm sap" },
    { image: "/images/story/lime-juice-glass.jpg", alt: "A glass of My King lime juice" },
    { image: "/images/events/food-sampling.jpg", alt: "Customers tasting My King juice" },
    { image: "/images/story/market-baskets.jpg", alt: "My King juices and jaggery in market baskets" },
  ],
};

export const quote = {
  lines: ["Escort your health,", "extract natural juice."],
  closing: "Build a healthy society together.",
};

export const story = {
  eyebrow: "Our Story",
  title: "From Family Roots to Volcanic Heights",
  paragraphs: [
    "Golden Goat started as a humble family business and grew into a thriving enterprise. Innovation, dedication and a steady pursuit of excellence drove that growth, and through it we have kept the family values the company was founded on.",
    "Our factory sits atop an extinct volcano, surrounded by pure, untainted soil, water and raw materials. This volcanic oasis is the heart of our operations and the source of our passion for sustainability.",
  ],
  founder: {
    name: "Daw Mya Thae Phyu",
    role: "Founder & CEO · B.E. (Mechanical), MBA",
    image: "/images/team/mya-thae-phyu.jpg",
  },
  image: "/images/events/team-promotion-photo.jpg",
};

export type Product = {
  slug: string;
  name: string;
  category: "Juice" | "Squash" | "Paste" | "Jaggery" | "Snack";
  badge?: "Best seller" | "Export ready" | "New";
  description: string;
  sizes: { size: string }[];
  image?: string;
  tint: string;
  // Drawn packshot, used only when there is no `cutout` photo (transparent PNG in public/images/products/cutouts/).
  pack: "bottle" | "small-bottle" | "pouch" | "jar";
  juice: string;
  label: string;
  cutout?: string;
  // Product detail page copy.
  about: string;
  highlights: string[];
  shelfLife: string;
  // Lifestyle / origin photo shown on the product page.
  scene?: { image: string; alt: string };
};

export const products: Product[] = [
  {
    slug: "tamarind-juice",
    name: "Healthy Tamarind Juice",
    category: "Juice",
    badge: "Best seller",
    description: "Sweet-tangy tamarind sweetened only with toddy palm jaggery.",
    sizes: [
      { size: "230 ml" },
      { size: "Standard" },
      { size: "400 ml" },
    ],
    image: "/images/products/tamarind-syrup.png",
    tint: "#6B3E1F",
    pack: "bottle",
    cutout: "/images/products/cutouts/tamarind-juice.png",
    juice: "#7a3f1a",
    label: "Tamarind",
    about: "Our signature drink balances sweet and tangy flavours. It's made from premium tamarind extract from century-old wild trees and sweetened only with traditional toddy palm jaggery. Enjoy it chilled, or use it as a mixer in drinks and recipes.",
    highlights: ["Century-old wild tamarind from Myanmar's dry zone", "Sweetened only with toddy palm jaggery, no refined sugar", "Rich in tartaric acid, potassium, calcium and vitamin C", "Wholesale: 12 bottles per carton, 100 cartons + 2 free"],
    shelfLife: "24 months (ambient storage)",
    scene: { image: "/images/story/tamarind-popa-temple.jpg", alt: "My King tamarind juice beneath Mount Popa's hilltop temple" },
  },
  {
    slug: "plum-juice",
    name: "Healthy Plum Juice",
    category: "Juice",
    badge: "Export ready",
    description: "Herbal plum drink from the Magway dry zone. Aids digestion and restful sleep.",
    sizes: [
      { size: "230 ml" },
      { size: "300 ml" },
    ],
    tint: "#5A2340",
    pack: "bottle",
    cutout: "/images/products/cutouts/plum-juice.png",
    juice: "#5a1f3c",
    label: "Plum",
    about: "A traditional herbal drink made from 100% natural plum pulp grown in the Magway Region of Central Myanmar's dry zone. It's sweetened with a natural traditional sweetener and is best enjoyed after meals and before bedtime.",
    highlights: ["No added cane sugar, artificial colours or artificial flavour", "Rich in natural antioxidants", "Aids digestion, boosts immunity and promotes restful sleep", "Available in 80 ml and 300 ml, in glass and PET"],
    shelfLife: "24 months (ambient storage)",
    scene: { image: "/images/story/plum-farm.jpg", alt: "Ripe plums on the branch" },
  },
  {
    slug: "lime-juice",
    name: "Natural Lime Juice & Squash",
    category: "Squash",
    description: "Pure, freshly squeezed lime. A cooling refreshment, ready anytime.",
    sizes: [
      { size: "230 ml" },
      { size: "300 ml" },
      { size: "400 ml" },
    ],
    image: "/images/products/cutouts/lime-juice.png",
    tint: "#3F6B35",
    pack: "bottle",
    cutout: "/images/products/cutouts/lime-juice.png",
    juice: "#b5c93e",
    label: "Lime",
    about: "Pure, freshly squeezed lime that refreshes you after a tiring day, ready anytime and anywhere. Enjoy it as a juice or dilute the squash to taste.",
    highlights: ["Freshly squeezed natural lime", "No added sugar or preservatives", "Refreshing and cooling, ready to drink", "Glass bottles to reduce plastic"],
    shelfLife: "24 months (ambient storage)",
    scene: { image: "/images/story/lime-juice-glass.jpg", alt: "A glass of lime juice among lime trees" },
  },
  {
    slug: "pineapple-juice",
    name: "Fresh Pineapple Juice",
    category: "Juice",
    badge: "Best seller",
    description: "Tropical, vitamin-C rich and naturally full of bromelain.",
    sizes: [
      { size: "230 ml" },
      { size: "300 ml" },
      { size: "400 ml" },
    ],
    image: "/images/products/pineapple-juice.png",
    tint: "#D99A1E",
    pack: "bottle",
    cutout: "/images/products/cutouts/pineapple-juice.png",
    juice: "#f3b51f",
    label: "Pineapple",
    about: "A sweet and tangy juice made from fresh pineapples, with a vibrant yellow colour and tropical flavour. It contains bromelain, an enzyme that aids digestion. Enjoy it on its own, as a mixer, or in cooking.",
    highlights: ["Made from fresh pineapples", "Rich in vitamin C", "Contains bromelain, which aids digestion", "No added sugar or preservatives"],
    shelfLife: "24 months (ambient storage)",
    scene: { image: "/images/story/banner-all-bottles.jpg", alt: "The My King range with fresh fruit" },
  },
  {
    slug: "orange-juice",
    name: "Fresh Orange Juice",
    category: "Juice",
    description: "Hand-picked, sun-ripened oranges with no added sugar.",
    sizes: [
      { size: "230 ml" },
      { size: "300 ml" },
      { size: "400 ml" },
    ],
    image: "/images/products/orange-juice.png",
    tint: "#E07B1A",
    pack: "bottle",
    cutout: "/images/products/cutouts/orange-juice.png",
    juice: "#f08a1c",
    label: "Orange",
    about: "Made from the juiciest hand-picked, sun-ripened oranges and rich in essential vitamins, antioxidants and natural flavour. With no added sugars or artificial preservatives, it's a delicious way to stay hydrated and energised.",
    highlights: ["Hand-picked, sun-ripened oranges", "Rich in vitamins and antioxidants", "No added sugars or artificial preservatives", "Premium 300 ml glass bottle available"],
    shelfLife: "24 months (ambient storage)",
    scene: { image: "/images/story/orange-farm.jpg", alt: "Rows of orange trees heavy with fruit" },
  },
  {
    slug: "tamarind-paste",
    name: "100% Pure Tamarind Paste",
    category: "Paste",
    badge: "Export ready",
    description: "Pulp from old medicinal tamarind trees, for curries, sauces and salads.",
    sizes: [
      { size: "300 g" },
      { size: "1.5 kg" },
    ],
    image: "/images/products/cutouts/tamarind-paste.png",
    tint: "#6B3E1F",
    pack: "pouch",
    cutout: "/images/products/cutouts/tamarind-paste.png",
    juice: "#6b3e1f",
    label: "Tamarind Paste",
    about: "100% pure natural tamarind pulp from old medicinal tamarind trees. It goes straight into the kitchen for savoury sauces, Burmese egg and chickpea curries, salads, and beverage bases.",
    highlights: ["Sun-dried tamarind from old medicinal trees", "Rich in tartaric acid, dietary fibre and plant protein", "300 g stand-up pouch for home kitchens", "1.5 kg foodservice pouch for restaurants and caterers"],
    shelfLife: "24 months (ambient storage)",
    scene: { image: "/images/story/tamarind-concentrate.jpg", alt: "Tamarind concentrate beneath a tamarind tree" },
  },
  {
    slug: "jaggery-powder",
    name: "Toddy Palm Jaggery Powder",
    category: "Jaggery",
    badge: "New",
    description: "From 20+ year-old palms. Low GI (35), a natural alternative to refined sugar.",
    sizes: [{ size: "Pouch" }],
    image: "/images/products/jaggery-powder.png",
    tint: "#A8742F",
    pack: "pouch",
    cutout: "/images/products/cutouts/jaggery-powder.png",
    juice: "#b07a3a",
    label: "Jaggery Powder",
    about: "Traditional Myanmar toddy palm jaggery, made by ancient methods from 100% natural sap. Local climbers tap the sap from palms over 20 years old in Nyaung-U and the Central Dry Zone.",
    highlights: ["Low glycemic index (GI 35)", "Certified as safe for people with diabetes", "High in iron, magnesium, potassium and vitamins", "Zero artificial additives, a natural alternative to refined sugar"],
    shelfLife: "24 months (ambient storage)",
    scene: { image: "/images/story/palm-harvest.jpg", alt: "A climber tapping a toddy palm" },
  },
  {
    slug: "jaggery-syrup",
    name: "Organic Jaggery Syrup",
    category: "Jaggery",
    description: "Traditional toddy palm syrup in a glass bottle.",
    sizes: [{ size: "175 ml" }],
    image: "/images/products/cutouts/jaggery-syrup.png",
    tint: "#8A5422",
    pack: "small-bottle",
    cutout: "/images/products/cutouts/jaggery-syrup.png",
    juice: "#5a2e12",
    label: "Jaggery Syrup",
    about: "Organic toddy palm jaggery syrup in a 175 ml glass bottle. A traditional, low-GI sweetener for drinks, desserts and cooking.",
    highlights: ["Made from pure toddy palm sap", "Low glycemic index, a natural alternative to refined sugar", "No artificial additives", "175 ml glass bottle"],
    shelfLife: "24 months (ambient storage)",
    scene: { image: "/images/story/palm-harvest.jpg", alt: "A climber tapping a toddy palm" },
  },
  {
    slug: "tamarind-juice-china",
    name: "Tamarind Juice – China Export Edition",
    category: "Juice",
    badge: "Export ready",
    description: "Our ready-to-drink tamarind juice in a Chinese-language gift box, made for the China market.",
    sizes: [{ size: "230 ml" }],
    tint: "#B3261E",
    pack: "small-bottle",
    cutout: "/images/products/cutouts/tamarind-juice-china-box.png",
    juice: "#7a3f1a",
    label: "Tamarind",
    about: "The same signature tamarind juice, packed in a red box with Chinese labelling (即饮型 羅望子汁) for export to China. It carries our GACC registration number, CMMR 24022504090003.",
    highlights: ["Chinese-language packaging for the China market", "GACC registration number CMMR 24022504090003", "Sweetened only with toddy palm jaggery, no refined sugar", "230 ml ready-to-drink"],
    shelfLife: "24 months (ambient storage)",
    scene: { image: "/images/story/tamarind-china-box.jpg", alt: "My King tamarind juice boxes in Burmese and Chinese" },
  },
  {
    slug: "tamarind-juice-pet",
    name: "Tamarind Juice (Plastic Bottle)",
    category: "Juice",
    description: "Our sweet-tangy tamarind juice in a light, easy-to-carry plastic bottle.",
    sizes: [{ size: "230 ml" }, { size: "300 ml" }, { size: "400 ml" }],
    tint: "#6B3E1F",
    pack: "bottle",
    cutout: "/images/products/cutouts/pet-tamarind.png",
    juice: "#7a3f1a",
    label: "Tamarind",
    about: "Our signature tamarind juice, sweetened only with toddy palm jaggery, in a plastic bottle that's easy to carry and share. Enjoy it chilled.",
    highlights: ["Century-old wild tamarind from Myanmar's dry zone", "Sweetened only with toddy palm jaggery, no refined sugar", "Light plastic bottle, easy to carry", "Available in 230 ml, 300 ml and 400 ml"],
    shelfLife: "24 months (ambient storage)",
    scene: { image: "/images/story/tamarind-pet-orchard.jpg", alt: "My King tamarind juice in a plastic bottle in a tamarind orchard" },
  },
  {
    slug: "lime-juice-pet",
    name: "Lime Juice (Plastic Bottle)",
    category: "Squash",
    description: "Freshly squeezed lime in a light plastic bottle.",
    sizes: [{ size: "230 ml" }, { size: "300 ml" }, { size: "400 ml" }],
    tint: "#3F6B35",
    pack: "bottle",
    cutout: "/images/products/cutouts/pet-lime.png",
    juice: "#b5c93e",
    label: "Lime",
    about: "Pure, freshly squeezed lime in a plastic bottle that's easy to take anywhere. A cooling refreshment after a tiring day.",
    highlights: ["Freshly squeezed natural lime", "No added sugar or preservatives", "Light plastic bottle, easy to carry", "Available in 230 ml, 300 ml and 400 ml"],
    shelfLife: "24 months (ambient storage)",
    scene: { image: "/images/story/lime-pet.jpg", alt: "My King lime juice in a plastic bottle beside a glass of lime juice" },
  },
  {
    slug: "orange-juice-pet",
    name: "Orange Juice (Plastic Bottle)",
    category: "Juice",
    description: "Sun-ripened oranges with no added sugar, in a light plastic bottle.",
    sizes: [{ size: "230 ml" }, { size: "300 ml" }, { size: "400 ml" }],
    tint: "#E07B1A",
    pack: "bottle",
    cutout: "/images/products/cutouts/pet-orange.png",
    juice: "#f08a1c",
    label: "Orange",
    about: "Hand-picked, sun-ripened oranges in a plastic bottle that's easy to carry. No added sugars or artificial preservatives.",
    highlights: ["Hand-picked, sun-ripened oranges", "Rich in vitamins and antioxidants", "Light plastic bottle, easy to carry", "Available in 230 ml, 300 ml and 400 ml"],
    shelfLife: "24 months (ambient storage)",
    scene: { image: "/images/story/orange-pet.jpg", alt: "My King orange juice in a plastic bottle beneath an orange tree" },
  },
  {
    slug: "pineapple-juice-pet",
    name: "Pineapple Juice (Plastic Bottle)",
    category: "Juice",
    description: "Tropical pineapple juice in a light plastic bottle.",
    sizes: [{ size: "230 ml" }, { size: "300 ml" }, { size: "400 ml" }],
    tint: "#D99A1E",
    pack: "bottle",
    cutout: "/images/products/cutouts/pet-pineapple.png",
    juice: "#f3b51f",
    label: "Pineapple",
    about: "Sweet and tangy juice from fresh pineapples, in a plastic bottle that's easy to carry. Naturally rich in vitamin C and bromelain.",
    highlights: ["Made from fresh pineapples", "Rich in vitamin C", "Light plastic bottle, easy to carry", "Available in 230 ml, 300 ml and 400 ml"],
    shelfLife: "24 months (ambient storage)",
    scene: { image: "/images/story/pineapple-pet.jpg", alt: "My King pineapple juice in a plastic bottle in a pineapple field" },
  },
  {
    slug: "jaggery-powder-jar",
    name: "Toddy Palm Jaggery Powder (Jar)",
    category: "Jaggery",
    badge: "New",
    description: "Our low-GI toddy palm jaggery powder in a resealable jar.",
    sizes: [{ size: "Jar" }],
    tint: "#A8742F",
    pack: "jar",
    cutout: "/images/products/cutouts/jaggery-powder-jar.png",
    juice: "#b07a3a",
    label: "Jaggery Powder",
    about: "Traditional Myanmar toddy palm jaggery powder, made from 100% natural sap, in a resealable jar for the kitchen table. Use it in place of refined sugar in tea, coffee, desserts and cooking.",
    highlights: ["Low glycemic index (GI 35)", "Made from 100% natural toddy palm sap", "Resealable jar keeps the powder dry", "Zero artificial additives, a natural alternative to refined sugar"],
    shelfLife: "24 months (ambient storage)",
    scene: { image: "/images/story/jaggery-jars.jpg", alt: "Two jars of My King toddy palm jaggery powder" },
  },
  {
    slug: "tamarind-snack",
    name: "Tamarind Candy Snack",
    category: "Snack",
    badge: "New",
    description: "Sweet-sour Burmese tamarind candies in a resealable pouch.",
    sizes: [{ size: "160 g" }],
    tint: "#8A5422",
    pack: "pouch",
    cutout: "/images/products/cutouts/tamarind-snack.png",
    juice: "#c8925a",
    label: "Tamarind Snack",
    about: "Traditional Burmese tamarind candies (မန်ကျည်း ပလိပ်), made from natural tamarind for a sweet, sour and tangy snack. Packed in a 160 g resealable pouch.",
    highlights: ["Made from natural tamarind", "Traditional Burmese recipe", "160 g resealable pouch", "Made in Myanmar"],
    shelfLife: "See pack for best-before date",
    scene: { image: "/images/story/tamarind-snack-pouches.jpg", alt: "Pouches of My King tamarind candy on a wooden table" },
  },
];

export const awards = [
  { icon: "globe", title: "China GACC Approved", text: "Export registration, 2025" },
  { icon: "trophy", title: "CAEXPO Popularity Award", text: "22nd China-ASEAN Expo, 2025" },
  { icon: "medal", title: "MSME Outstanding Award", text: "Class 2 recipient, 2026" },
  { icon: "shield", title: "Myanmar FDA Certified", text: "Food manufacturing recommendation" },
];

export const impact = {
  title: "Growing together with farmers and community",
  text: "We pre-purchase crops from local farmers through an inclusive business model so both sides win. We also create equal opportunities and employment for women.",
  stats: [
    { value: 75, suffix: "%", label: "of Myanmar's natural instant fruit juice market" },
    { value: 30, suffix: "", label: "successful production regions" },
    { value: 15, suffix: "", label: "trusted suppliers" },
    { value: 24, suffix: " mo", label: "natural shelf life, no preservatives" },
  ],
  practices: [
    { icon: "bottle", label: "Glass bottles instead of plastic" },
    { icon: "leaf", label: "Factory waste composted into fertilizer" },
    { icon: "seedling", label: "Tamarind seedlings grown from seeds" },
    { icon: "people", label: "Equal employment for women" },
  ],
  image: "/images/story/pineapple.png",
};

export const milestones: { year: string; title: string; text: string; image?: string; portrait?: boolean }[] = [
  { year: "2021", title: "Golden Goat is founded", text: "Founded on December 29, 2021, beginning production of natural ready-to-drink fruit juices.", image: "/images/story/production-line-photo.jpg" },
  { year: "2022", title: "PUM Netherlands coaching", text: "Remote coaching on HACCP and quality control led by Conny Castelein. Expanded across retail channels.", image: "/images/events/pum-lancang-mekong.png" },
  { year: "2023", title: "Myanmar FDA approval", text: "Attended the 5th Lancang-Mekong Business Forum in Nanning and began B2B market expansion.", image: "/images/brand/fda-certificate.png" },
  { year: "2024", title: "Into China", text: "Exhibited at the Chengdu Business Forum, began B2B sales in China and applied for GACC registration.", image: "/images/events/trade-fair.jpg" },
  { year: "2025", title: "GACC approved · CAEXPO award", text: "Received official GACC approval and won the Popularity Award (最受欢迎奖) at the 22nd China-ASEAN Expo.", image: "/images/events/caexpo-popularity-award.jpg", portrait: true },
  { year: "2026", title: "MSME Outstanding Award", text: "Recipient of the 2026 MSME Outstanding Award (Class 2).", image: "/images/events/msme-award-2026.jpg", portrait: true },
];

export const testimonials = [
  {
    name: "Min Ko Naing",
    text: "These drinks are fresh, flavorful, and free from added sugars and preservatives. Perfect for a healthy, delicious choice! Highly recommended!",
  },
  {
    name: "Suzan",
    text: "Absolutely delicious! The Golden Goat Fruit Juices are incredibly flavorful and refreshing. A must-try for juice enthusiasts!",
  },
  {
    name: "Htoo Aung Latt",
    text: "The Golden Goat Fruit Juices exceeded my expectations! The flavors are rich, natural, and simply delightful.",
  },
];

export const retailers = {
  logos: [
    { name: "City Mart", image: "/images/retail/city-mart-logo.png" },
    { name: "City Express", image: "/images/retail/city-express-logo.png" },
    { name: "Grab & Go", image: "/images/retail/grab-and-go-logo.png" },
  ],
  names: ["Capital Retail", "Ocean Supercenter", "Makro", "Ezy E-Commerce"],
};

export const business = [
  {
    title: "B2B & Export Partnership",
    text: "GACC-approved exporter on the China–Myanmar Economic Corridor. We already sell in Kunming, Nanning and Shanghai, and we're open to partners in China and India.",
    href: "/contact",
    image: "/images/events/trade-fair.jpg",
  },
  {
    title: "Wholesale & Distribution",
    text: "12 bottles per carton. Order 100 cartons and get 2 cartons free. We supply modern trade, tea shops and regional retail.",
    href: "/contact",
    image: "/images/story/supermarket-shelf.jpg",
  },
];

export const trendingProducts = [
  { label: "Pineapple Juice", slug: "pineapple-juice" },
  { label: "Tamarind Syrup Juice", slug: "tamarind-juice" },
  { label: "Fresh and Natural Orange Juice", slug: "orange-juice" },
  { label: "Plum Juice", slug: "plum-juice" },
];

// ---------- About page ----------

export const about = {
  intro:
    "Starting as a humble family business, our company has blossomed into a thriving enterprise. Innovation, dedication and a steady pursuit of excellence drove that growth. As we've grown, so has our commitment to quality products and services, while keeping the integrity and values the company was founded on.",
  volcano:
    "Our factory sits atop an extinct volcano 4,891 feet above sea level, in a location rich in natural resources. Pure, untainted soil, water and raw materials let us make products of exceptional quality. This volcanic oasis is the heart of our operations and the foundation of our passion for sustainability.",
  mission: [
    "Provide premium, healthy fruit juices and value-added crops made with natural ingredients.",
    "Promote sustainable, environmentally friendly practices among our business partners and benefit the community.",
    "Grow our modern trade presence across Myanmar and scale as a compliant key exporter that meets international food safety standards.",
  ],
  vision: [
    "Use modern technology to preserve natural fruit nutrients from raw material to finished product.",
    "Build trust and friendship with local farmers by pre-purchasing crops through an inclusive, win-win business model.",
    "Drive a sustainable agri-business that grows community economies, conserves the environment and creates equal opportunities and employment for women.",
  ],
  team: [
    { name: "Daw Mya Thae Phyu", role: "Founder & CEO", credentials: "B.E. (Mechanical), MBA", image: "/images/team/mya-thae-phyu.jpg" },
    { name: "U Htun Hlaing", role: "Management Director", credentials: "B.Tech (Electronic)", image: "/images/team/htun-hlaing.jpg" },
    { name: "Daw Htet Inzily Win", role: "Finance Director", credentials: "Bachelor of Economics & Finance", image: "/images/team/htet-inzily-win.jpg" },
  ],
  workforce: {
    title: "Our farmers & factory team",
    text: "Behind every bottle are the local farmers who grow our fruit and the factory team who process it. Many of them are women from the communities around Mount Popa.",
    image: "/images/team/our-farmers.jpg",
  },
  documents: [
    { title: "DICA Certificate of Incorporation", text: "Registered under the Myanmar Companies Law 2017 on December 29, 2021.", image: "/images/brand/dica-certificate.png" },
    { title: "Myanmar FDA Recommendation", text: "Food manufacturing recommendation from the Ministry of Health, after rigorous FDA inspections for safety, hygiene and quality control.", image: "/images/brand/fda-certificate.png" },
  ],
  goals: {
    title: "Building a value-added agri-food manufacturing industry (2024–2030)",
    items: [
      "Export to international markets according to international standards.",
      "Turn the factory into a sustainable, year-round business.",
      "Build a high-standard agricultural processing plant for direct export (2025–2030).",
      "Grow into new markets: China (GACC approved) and India, with openness to B2B partnerships.",
    ],
  },
  practices: [
    { title: "Sourced from volcanic land", text: "Wild tamarind, plums and toddy palm sap come from century-old trees in Myanmar's central dry zone, at the foot of Mount Popa, 4,891 ft above sea level.", image: "/images/story/palm-harvest.jpg" },
    { title: "PUM Netherlands technology", text: "Our production technology and HACCP quality system came from coaching by PUM Netherlands senior experts.", image: "/images/story/production-line-photo.jpg" },
    { title: "Sweetened by the toddy palm", text: "No refined cane sugar: our drinks are sweetened only with traditional toddy palm jaggery, tapped from palms over 20 years old.", image: "/images/story/jaggery-display.jpg" },
    { title: "Zero-waste composting", text: "Industrial waste from the factory is composted into fertiliser.", image: "/images/story/orange-farm.jpg" },
    { title: "Tamarind seedlings", text: "We grow new tamarind seedlings from the seeds of the fruit we process.", image: "/images/story/tamarind-seed.jpg" },
  ],
  audience: [
    { value: 60, label: "Over 35", note: "Health-conscious loyal customers" },
    { value: 20, label: "Middle-aged", note: "Families and professionals" },
    { value: 15, label: "Youth", note: "Students and young adults" },
    { value: 5, label: "Children", note: "Healthy drinks for kids" },
  ],
  channels: [
    { title: "Modern trade", text: "City Mart Holding, Ocean Supercenter, City Express, Makro and Capital Retail." },
    { title: "E-commerce", text: "Ezy E-Commerce and E-Zay distribution." },
    { title: "Traditional trade", text: "Regional tea shop wholesale and countrywide retail." },
    { title: "Export", text: "B2B sales to Kunming, Nanning and Shanghai along the China–Myanmar Economic Corridor." },
  ],
};

// ---------- Blog ----------

export type Post = {
  slug: string;
  title: string;
  category: "Awards" | "Events" | "Partnerships" | "Community" | "Media" | "Products";
  date: string;
  image: string;
  // Portrait photo: shown whole (over a blurred backdrop) instead of cropped.
  portrait?: boolean;
  excerpt: string;
  body: string[];
  link?: { label: string; href: string };
};

export const posts: Post[] = [
  {
    slug: "msme-outstanding-award-2026",
    title: "Golden Goat receives the 2026 MSME Outstanding Award",
    category: "Awards",
    date: "2026",
    image: "/images/events/msme-award-2026.jpg",
    portrait: true,
    excerpt: "Five years after our founding, Golden Goat Myanmar has been named a 2026 MSME Outstanding Award recipient (Class 2).",
    body: [
      "Golden Goat Myanmar has received the 2026 MSME Outstanding Award (Class 2 / 优秀等级二等级), recognising our growth from a family business into a certified food manufacturer and exporter.",
      "The award follows a busy few years: Myanmar FDA approval in 2023, B2B expansion into China from 2024, and official GACC approval in 2025.",
      "We share this award with the farmers who grow our fruit, the women who make up much of our factory team, and every customer who chooses natural drinks with no added sugar.",
    ],
  },
  {
    slug: "caexpo-popularity-award-2025",
    title: "My King wins the Popularity Award at the 22nd China-ASEAN Expo",
    category: "Awards",
    date: "2025",
    image: "/images/events/caexpo-popularity-award.jpg",
    portrait: true,
    excerpt: "After securing our GACC registration, we exhibited at the 22nd CAEXPO in Nanning, where our products won the Popularity Award (最受欢迎奖).",
    body: [
      "After securing our GACC (General Administration of Customs of China) registration number, Golden Goat Myanmar exhibited at the 22nd China-ASEAN Expo (CAEXPO) in Nanning.",
      "Our My King tamarind juice, tamarind paste and toddy palm jaggery drew strong attention from visitors and buyers, and won the Popularity Award (最受欢迎奖).",
      "2025 was also the year we officially received our GACC registration licence, opening the way for direct export of our products into China.",
    ],
  },
  {
    slug: "my-king-at-shanghai-ciie",
    title: "Bringing My King to the China International Import Expo in Shanghai",
    category: "Events",
    date: "November 2024",
    image: "/images/events/trade-fair.jpg",
    excerpt: "From Kunming to Shanghai: how B2B trade fairs took Myanmar tamarind and toddy palm products to Chinese buyers.",
    body: [
      "Between 2023 and 2025 we took part in B2B trade to promote our products in Chinese cities including Kunming, Chengdu, Guangyuan, Nanning and Shanghai.",
      "At the China International Import Expo (CIIE) in Shanghai, visitors tasted My King tamarind juice and learned about our century-old wild tamarind trees and toddy palm jaggery.",
      "Our products are now sold in Kunming, Nanning and Shanghai, and we continue to look for B2B partners across China.",
    ],
  },
  {
    slug: "pum-coaching-and-lancang-mekong-forum",
    title: "From HACCP coaching to the Lancang-Mekong Business Forum",
    category: "Partnerships",
    date: "2022 – 2023",
    image: "/images/events/pum-lancang-mekong.png",
    excerpt: "PUM Netherlands senior experts coached us on quality control, and in 2023 we joined the 5th Lancang-Mekong Business Forum in Nanning.",
    body: [
      "On July 4, 2022, PUM Netherlands senior experts began remote coaching with our founder, Daw Mya Thae Phyu, led by Conny Castelein. The course covered quality improvement and an HACCP system for producing tamarind juice, and we received a certificate of attendance on August 29, 2022.",
      "In July 2023 we attended the 5th Lancang-Mekong Business Forum in Nanning and Pingxiang, China, which promoted agribusiness and investment in the processed food sector.",
      "These partnerships shaped the production technology we use today and started our journey into international markets.",
    ],
  },
  {
    slug: "tasting-days-across-myanmar",
    title: "Tasting days: sharing My King across Myanmar",
    category: "Community",
    date: "2024",
    image: "/images/events/food-sampling.jpg",
    excerpt: "Our team takes free samples of My King juices to towns and markets so people can taste natural drinks with no added sugar.",
    body: [
      "Nothing convinces like a first sip. Our team regularly sets up My King tasting stands in towns and markets across Myanmar.",
      "Customers try our tamarind, plum, lime, pineapple and orange drinks and learn how we sweeten only with traditional toddy palm jaggery.",
      "These tasting days help us hear directly from customers, many of them health-conscious adults over 35 who have become loyal fans.",
    ],
  },
  {
    slug: "myanwen-msme-spotlight",
    title: "Featured in MYANWEN's MSME Spotlight",
    category: "Media",
    date: "2024",
    image: "/images/events/promotion.png",
    excerpt: "The Myanmar Women Entrepreneurs Network featured Golden Goat Myanmar in its MSME Spotlight video series.",
    body: [
      "The Myanmar Women Entrepreneurs Network (MYANWEN) featured Golden Goat Myanmar in its MSME Spotlight series, which highlights women-led small businesses.",
      "The video tells the story of our founder, our factory near Mount Popa, and our commitment to creating equal opportunities and employment for women.",
    ],
    link: { label: "Watch on YouTube", href: "https://www.youtube.com/results?search_query=MYANWEN+MSME+Spotlight+Golden+Goat" },
  },
  {
    slug: "healthy-orange-juice",
    title: "Healthy Orange Juice",
    category: "Products",
    date: "June 6, 2024",
    image: "/images/story/orange-farm.jpg",
    excerpt: "Made from the juiciest hand-picked oranges, rich in vitamins and antioxidants, with no added sugars or preservatives.",
    body: [
      "Enjoy the nourishing benefits of our Healthy Orange Juice, a refreshing and wholesome drink.",
      "Made from the juiciest hand-picked oranges, it is rich in essential vitamins, antioxidants and natural flavour. With no added sugars or artificial preservatives, it's a delicious and nutritious way to stay hydrated and energised.",
      "Start your day right, or enjoy a revitalising boost anytime with the pure goodness of our orange juice.",
    ],
  },
  {
    slug: "fresh-and-natural-orange-juice",
    title: "Fresh and Natural Orange Juice",
    category: "Products",
    date: "April 14, 2021",
    image: "/images/products/orange-juice.png",
    excerpt: "Squeezed from the finest sun-ripened oranges, free from artificial additives and preservatives.",
    body: [
      "Experience the pure delight of fresh and natural orange juice, where every glass is full of flavour and nutrients.",
      "Squeezed from the finest sun-ripened oranges, it is free from artificial additives and preservatives, with a taste as close to nature as possible.",
      "Packed with essential vitamins, antioxidants and a refreshing zest, it's the perfect way to start your day or refresh at any time.",
    ],
  },
  {
    slug: "tamarind-syrup-juice",
    title: "Tamarind Syrup Juice",
    category: "Products",
    date: "April 14, 2021",
    image: "/images/story/tamarind-popa-temple.jpg",
    excerpt: "A refreshing drink that balances sweet and tangy flavours, made from premium tamarind extract.",
    body: [
      "Indulge in the taste of our Tamarind Syrup Juice, a refreshing drink that balances sweet and tangy flavours.",
      "Made from premium tamarind extract, it offers a unique and invigorating taste. Enjoy it chilled, or use it as a mixer in drinks and recipes.",
    ],
  },
  {
    slug: "pineapple-juice",
    title: "Pineapple Juice",
    category: "Products",
    date: "2021",
    image: "/images/products/pineapple-juice.png",
    excerpt: "Sweet, tangy and tropical, rich in vitamin C and bromelain.",
    body: [
      "Pineapple juice is a sweet and tangy drink made from fresh pineapples, known for its vibrant yellow colour and tropical flavour.",
      "It is rich in vitamins, especially vitamin C, and contains enzymes like bromelain, which aid digestion and have anti-inflammatory properties.",
      "Enjoy it on its own, as a mixer, or in cooking.",
    ],
  },
];

// ---------- Contact ----------

export const contactPage = {
  intro: "Contact us with any questions or inquiries. We're here to help and look forward to connecting with you.",
  outreach:
    "Whether you have questions about our products, want to explore a partnership, or simply want to connect, our friendly team is happy to help. Let's work together to bring the goodness of natural fruits to the world!",
  formIntro: "Send us a message and our team will reply by email, usually within two working days.",
  faqs: [
    {
      q: "Are your products organic?",
      a: "All our products are based on natural extracts. We follow strict organic standards throughout manufacturing to ensure the purity and quality of our fruit drinks.",
    },
    {
      q: "How do you source your ingredients?",
      a: "We pre-purchase crops from local farmers through an inclusive business model that benefits both sides. Our tamarind comes from century-old wild trees in Myanmar's dry zone, our plums from the Magway Region, and our toddy palm sap from palms over 20 years old in Nyaung-U.",
    },
    {
      q: "What steps do you take to ensure sustainability?",
      a: "We switched from plastic to glass bottles, compost our factory waste into fertiliser, and grow new tamarind seedlings from the seeds of the fruit we process. We also create equal employment opportunities for women.",
    },
    {
      q: "Do you offer wholesale or export?",
      a: "Yes. Our bottles come 12 per carton, and orders of 100 cartons get 2 cartons free. We are a GACC-approved exporter to China and are open to B2B partnerships in China, India and beyond.",
    },
  ],
};

// ---------- Interface text (headings, buttons, labels) ----------

export const ui = {
  meta: {
    title: "Golden Goat Myanmar · Naturally Nourishing Fruit Juices",
    description:
      "Golden Goat Myanmar makes My King natural fruit juices, tamarind paste and toddy palm jaggery with no added sugar or preservatives, made at the foot of Mount Popa.",
  },
  common: {
    home: "Home",
    breadcrumb: "Breadcrumb",
    carousel: { prev: "Previous", next: "Next" },
  },
  header: {
    mainNav: "Main",
    mobileNav: "Mobile",
    join: "Join with us",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  footer: {
    blurb: "Value-added agri-food manufacturing from the heart of Myanmar. Natural fruit juices and squashes with no added sugar or preservatives.",
    explore: "Explore",
    trending: "Trending Products",
    contact: "Contact",
    rights: "All rights reserved.",
    tagline: "Made in Myanmar · Naturally Nourishing",
  },
  home: {
    hero: {
      photoAlt: "My King juices on a wooden table below Mount Popa",
      explore: "Explore More",
      join: "Join with us",
    },
    story: {
      explore: "Explore More",
      photoAlt: "The Golden Goat team at a My King promotion",
      badge: "Family-founded",
    },
    products: {
      eyebrow: "My King · 我的王",
      title: "Best Sellers",
      text: "Juices, squashes, tamarind paste and toddy palm jaggery with no added cane sugar, artificial colours or preservatives.",
      viewAll: "View all products",
    },
    impactEyebrow: "Impact & Sustainability",
    awards: {
      eyebrow: "Recognition",
      title: "Certified at home, awarded abroad",
      link: "See our journey",
    },
    stories: {
      eyebrow: "Stories & Events",
      title: "Stories from Golden Goat",
      viewAll: "View all",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Loved by juice lovers across Myanmar",
      stars: "5 out of 5 stars",
    },
    whereToBuy: {
      eyebrow: "Where to Buy",
      title: "Find My King near you",
      text: "In modern trade supercenters, convenience stores, tea shops and online across Myanmar.",
    },
  },
  product: {
    brand: "My King",
    filterLabel: "Filter products",
    all: "All",
    categories: { Juice: "Juice", Squash: "Squash", Paste: "Paste", Jaggery: "Jaggery", Snack: "Snack" },
    badges: { "Best seller": "Best seller", "Export ready": "Export ready", New: "New" },
  },
  productsPage: {
    meta: {
      title: "Products · Golden Goat Myanmar",
      description:
        "My King natural fruit juices, squashes, tamarind paste and toddy palm jaggery with no added cane sugar or preservatives.",
    },
    hero: {
      eyebrow: "My King · 我的王",
      title: "Naturally good, from Myanmar",
      text: "Fruit juices and squashes, pure tamarind paste and toddy palm jaggery, crafted with natural ingredients and nothing artificial.",
      crumb: "Products",
    },
    promises: [
      { title: "No added cane sugar", text: "Sweetened only with traditional toddy palm jaggery." },
      { title: "No preservatives", text: "A 24-month natural shelf life at room temperature." },
      { title: "Myanmar FDA certified", text: "Made under a Ministry of Health food manufacturing recommendation." },
      { title: "GACC export approved", text: "Cleared for export into China." },
    ],
    wholesale: {
      alt: "My King juices stocked on a supermarket shelf",
      eyebrow: "Wholesale & Export",
      title: "Stock My King in your store",
      text: "We supply supermarkets, convenience stores, tea shops and distributors across Myanmar, and B2B buyers in China. Bottles come 12 per carton.",
      offerLabel: "Wholesale offer",
      cartons: "cartons",
      cartonsFree: "cartons free",
    },
    cta: {
      title: "Looking for a distribution partner?",
      text: "Tell us about your market and order volume. We'll send prices, samples and export documents.",
    },
  },
  productPage: {
    crumb: "Products",
    sizes: "Sizes",
    shelfLife: "Shelf life",
    certified: "Certified",
    inquiry: "Order or wholesale inquiry",
    all: "All products",
    sceneEyebrow: "From nature to bottle",
    related: "You may also like",
  },
  blog: {
    meta: {
      title: "Blog · Golden Goat Myanmar",
      description: "News, awards, events and product stories from Golden Goat Myanmar and the My King brand.",
    },
    hero: {
      eyebrow: "Blog",
      title: "Stories from Golden Goat",
      text: "Awards, exhibitions, partnerships and the people and products behind My King.",
    },
    featured: "Featured",
    readStory: "Read the story",
    readMore: "Read more",
    filterLabel: "Filter stories",
    all: "All",
    empty: "No stories in this category yet.",
    categories: {
      Awards: "Awards",
      Events: "Events",
      Partnerships: "Partnerships",
      Community: "Community",
      Media: "Media",
      Products: "Products",
    },
    allStories: "All stories",
    back: "Back to all stories",
    more: "More stories",
    minRead: "min read",
    share: "Share",
    copyLink: "Copy link",
    copied: "Link copied",
    aboutStory: "About this story",
    published: "Published",
    category: "Category",
    readingTime: "Reading time",
    prev: "Previous story",
    next: "Next story",
    ctaTitle: "Interested in My King?",
    ctaText: "Ask us about retail, wholesale or export. Our team replies within two working days.",
    ctaButton: "Contact our team",
    externalLabel: "Watch or read more",
  },
  cta: {
    title: "Let's bring the goodness of natural fruits to the world",
    text: "Retail, wholesale or export: tell us what you need and our team will get back to you.",
    join: "Join with us",
    products: "Our products",
  },
  about: {
    meta: {
      title: "About Us · Golden Goat Myanmar",
      description:
        "From a family business to a GACC-approved exporter: the story, mission, team and journey of Golden Goat Myanmar, maker of My King natural juices.",
    },
    hero: {
      crumb: "About Us",
      title: "Born at the foot of",
      titleAccent: "Mount Popa.",
      text: "A family business since 2021, turning the fruit of Myanmar's volcanic dry zone into natural juices, with no added cane sugar and no preservatives.",
      bgAlt: "Mount Popa and the Taung Kalat temple rising above the forest",
      photos: [
        { alt: "Juice bottles on the Golden Goat production line", caption: "Our factory" },
        { alt: "Customers tasting My King juice at a sampling tent", caption: "Tasting days" },
        { alt: "The My King booth at a food trade fair", caption: "Trade fairs" },
      ],
    },
    story: {
      eyebrow: "Our Story",
      title: "A family business, rooted in Myanmar's natural bounty",
      stats: ["Founded", "Above sea level", "Local market share"],
      feet: " ft",
      alts: [
        "My King juices, tamarind paste and jaggery in market baskets",
        "A climber tapping toddy palm sap",
        "Tamarind concentrate beneath a tamarind tree",
      ],
    },
    mission: { title: "Our Mission", sub: "Commitment to quality" },
    vision: { title: "Our Vision", sub: "Preservation & partnership" },
    journey: {
      eyebrow: "Our Journey",
      title: "From a family kitchen to the China–ASEAN Expo",
      text: "Five years of steady growth, certification and international recognition.",
    },
    team: {
      eyebrow: "Our Team",
      title: "The people behind My King",
      workforceAlt: "Women farmers in an orange orchard below Mount Popa",
    },
    process: {
      eyebrow: "How We Work",
      title: "From volcanic soil",
      titleAccent: "to your glass",
      text: "Five things that make a bottle of My King, from the trees we buy from to what happens to the seeds.",
    },
    business: { audience: "Who drinks My King", channels: "Where we sell" },
    certs: {
      eyebrow: "Qualifications & Compliance",
      title: "Registered, inspected and export-approved",
      text: "Golden G.O.A.T Myanmar Co., Ltd was founded on December 29, 2021, to produce natural juice with no added sugars or preservatives.",
      gaccBadge: "Approved exporter · 2025",
      gaccTitle: "China GACC Approval",
      gaccText: "Registered with the General Administration of Customs of China for export into China.",
    },
  },
  contact: {
    meta: {
      title: "Contact · Golden Goat Myanmar",
      description: "Contact Golden Goat Myanmar about My King products, wholesale, export or partnerships. Kyauk Padaung Township, Mandalay Region.",
    },
    hero: { eyebrow: "Contact", title: "Let's work together" },
    reach: {
      eyebrow: "Reach Us",
      title: "We'd love to hear from you",
      office: "Factory & office",
      phone: "Phone",
      email: "Email",
    },
    formTitle: "Get In Touch",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email Address",
      subject: "Subject",
      subjectPlaceholder: "Wholesale, export, product question…",
      message: "Comment or Message",
      messagePlaceholder: "How can we help?",
      send: "Send Message",
      sent: "Your email app should open with the message ready to send. If it doesn't, write to",
      defaultSubject: "Website inquiry",
    },
    mapTitle: "Map of Kyauk Padaung Township, Mandalay Region",
    openMaps: "Open in Maps",
    faq: { eyebrow: "FAQ", title: "Frequently asked questions" },
  },
  notFound: {
    title: "This page wandered off the mountain",
    text: "The page you're looking for doesn't exist or has moved.",
    home: "Back to home",
    products: "Browse products",
  },
};
