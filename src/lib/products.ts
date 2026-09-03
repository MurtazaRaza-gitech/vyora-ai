export type ProductStatus = "In Production" | "Closed Testing" | "In Development";

export type Product = {
  name: string;
  slug: string;
  status: ProductStatus;
  category: string;
  shortDescription: string;
  detailedDescription: string[];
  features: string[];
  externalUrl?: string;
  externalLabel?: string;
  ctaLabel: string;
  /** Icon key resolved by the UI layer. */
  icon: "wallet" | "code" | "leaf" | "heart" | "smile" | "stars";
  seoTitle: string;
  seoDescription: string;
  availability: string;
  /** schema.org applicationCategory value. */
  appCategory: string;
};

export const products: Product[] = [
  {
    name: "Flowdash",
    slug: "flowdash",
    appCategory: "FinanceApplication",
    status: "In Production",
    category: "Personal Finance & Productivity",
    shortDescription:
      "An all-in-one personal finance and schedule management app for tracking expenses, managing budgets, and building better financial habits.",
    detailedDescription: [
      "Flowdash is an all-in-one personal finance and schedule management app that helps users track expenses, manage budgets, set savings goals, organize events, and build better financial habits.",
      "It is our first product to reach production and is publicly available on Google Play.",
    ],
    features: [
      "Budget tracking",
      "Expense logging",
      "Savings goals",
      "Schedule and events",
      "Notifications",
      "Streaks and achievements",
      "Offline functionality",
      "Data export",
      "Secure account management",
    ],
    externalUrl:
      "https://play.google.com/store/apps/details?id=com.flowdash.flowdash",
    externalLabel: "Google Play",
    ctaLabel: "Get Flowdash",
    icon: "wallet",
    seoTitle: "Flowdash — Personal Finance & Schedule App | VYORA.AI",
    seoDescription:
      "Flowdash by VYORA.AI is an Android app for expense tracking, budgets, savings goals and schedules. Available now on Google Play.",
    availability: "Publicly available on Google Play",
  },
  {
    name: "OpenCpp",
    slug: "opencpp",
    appCategory: "EducationalApplication",
    status: "Closed Testing",
    category: "Education / Programming",
    shortDescription:
      "A focused learning app for practising C++ programming through a structured, accessible mobile experience.",
    detailedDescription: [
      "OpenCpp is a focused learning application designed to help users learn and practice C++ programming through an accessible, structured mobile experience.",
      "The app is currently in closed testing. It is not publicly available yet, and we are using the testing phase to refine lesson structure, exercises and the practice flow.",
    ],
    features: [
      "Structured C++ lessons",
      "Hands-on practice exercises",
      "Mobile-first learning flow",
      "Progress tracking",
    ],
    ctaLabel: "Currently in Testing",
    icon: "code",
    seoTitle: "OpenCpp — Mobile C++ Learning App | VYORA.AI",
    seoDescription:
      "OpenCpp by VYORA.AI is a mobile app for learning and practising C++ programming. Currently in closed testing.",
    availability: "Closed testing — not publicly available",
  },
  {
    name: "SugarKill",
    slug: "sugarkill",
    appCategory: "HealthApplication",
    status: "In Development",
    category: "Health, Nutrition & Healthy Lifestyle",
    shortDescription:
      "A smart nutrition and healthy-lifestyle app that helps people reduce sugar, understand what they eat, and build better everyday habits.",
    detailedDescription: [
      "SugarKill is a smart nutrition and healthy-lifestyle app designed to help people reduce sugar, understand what they eat, and build healthier everyday habits.",
      "It combines nutrition intelligence with gamification, so tracking what you eat feels like progress rather than paperwork. SugarKill is a lifestyle and habit product — it does not diagnose, treat or cure any condition.",
    ],
    features: [
      "AI-powered food scanning",
      "Nutrition information",
      "Verified nutrition data",
      "Sugar and calorie tracking",
      "Food Score",
      "Healthier food guidance",
      "Exercise tracking",
      "Progress tracking",
      "XP and points",
      "Levels",
      "Badges",
      "Leaderboards",
    ],
    ctaLabel: "In Development",
    icon: "leaf",
    seoTitle: "SugarKill — AI Nutrition & Habit App | VYORA.AI",
    seoDescription:
      "SugarKill by VYORA.AI is an AI nutrition app for sugar tracking, food scanning and healthy habits. Currently in development.",
    availability: "In development — not yet released",
  },
  {
    name: "WISHES",
    slug: "wishes",
    appCategory: "SocialNetworkingApplication",
    status: "In Development",
    category: "Social / Connection",
    shortDescription:
      "A global social platform built around meaningful wishes, human connection, care and positive interactions.",
    detailedDescription: [
      "WISHES is a global social platform built around meaningful wishes, human connection, care, and positive interactions, giving people a new way to express that they are thinking about one another.",
      "The idea is simple: most platforms are built for broadcasting. WISHES is being built for caring — a place where a small gesture reaches the person it was meant for.",
    ],
    features: [
      "Send and receive meaningful wishes",
      "Connection-first social graph",
      "Positive interaction design",
      "Global reach",
    ],
    ctaLabel: "In Development",
    icon: "heart",
    seoTitle: "WISHES — Global Social Wishing Platform | VYORA.AI",
    seoDescription:
      "WISHES by VYORA.AI is a social platform built around meaningful wishes, care and human connection. Currently in development.",
    availability: "In development — not yet released",
  },
  {
    name: "Giffy",
    slug: "giffy",
    appCategory: "SocialNetworkingApplication",
    status: "In Development",
    category: "Communication / Social",
    shortDescription:
      "A playful new form of communication where people talk without typing — reactions, emotions and personality instead of text.",
    detailedDescription: [
      "Giffy explores a playful new form of communication where people can express reactions, emotions, ideas, and personality without relying on traditional text.",
      "A way to communicate without text: fun, expressive communication where people can talk without talking.",
    ],
    features: [
      "Text-free expression",
      "Visual reactions",
      "Lightweight and fast",
      "Built for everyday conversation",
    ],
    ctaLabel: "In Development",
    icon: "smile",
    seoTitle: "Giffy — Communicate Without Text | VYORA.AI",
    seoDescription:
      "Giffy by VYORA.AI is a visual communication app for expressing reactions and emotions without text. Currently in development.",
    availability: "In development — not yet released",
  },
  {
    name: "Horoguide",
    slug: "horoguide",
    appCategory: "LifestyleApplication",
    status: "In Development",
    category: "AI / Lifestyle / Astrology",
    shortDescription:
      "A modern AI-based horoscope and life-guidance platform offering personalised daily, weekly and monthly experiences.",
    detailedDescription: [
      "Horoguide is a modern AI-based horoscope and life-guidance platform designed to provide meaningful, personalized guidance using user data, intelligent analysis, and astrology-focused experiences.",
      "Horoguide is an entertainment and personalised guidance product. It is not medical, financial or psychological advice.",
    ],
    features: [
      "Personalized horoscope experiences",
      "Daily horoscope",
      "Weekly horoscope",
      "Monthly horoscope",
      "Life guidance",
      "Astrology-focused AI interaction",
      "Relationship matching",
      "Personalized suggestions",
    ],
    ctaLabel: "In Development",
    icon: "stars",
    seoTitle: "Horoguide — AI Horoscope & Guidance App | VYORA.AI",
    seoDescription:
      "Horoguide by VYORA.AI is an AI horoscope and life-guidance platform with daily, weekly and monthly personalised readings. In development.",
    availability: "In development — not yet released",
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export function productLd(p: Product) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: p.name,
    applicationCategory: p.appCategory,
    operatingSystem: "Android",
    description: p.shortDescription,
    creator: { "@type": "Organization", name: "VYORA.AI" },
    featureList: p.features,
    applicationSuite: "VYORA.AI",
    inLanguage: "en",
  };
  if (p.externalUrl) {
    base.url = p.externalUrl;
    base.installUrl = p.externalUrl;
  }
  return base;
}
