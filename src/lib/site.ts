export const SITE = {
  name: "VYORA.AI",
  legalName: "VYORA.AI",
  url: "https://vyora.aitech.workers.dev",
  /** Single social preview image used across the site. Update centrally. */
  ogImage:
    "https://storage.googleapis.com/gpt-engineer-file-uploads/Ibjxc64JEnXucV0b05MoT0WnY0E2/social-images/social-1777022539063-vyora_logo_2.webp",
  email: "Vyora.ai001@gmail.com",
  gmailCompose:
    "https://mail.google.com/mail/?view=cm&fs=1&to=Vyora.ai001@gmail.com",
  foundingDate: "2023",
  registeredYear: "2026",
  description:
    "VYORA.AI is a technology and product-building company creating mobile apps, web applications, AI products, APIs, agents, and software for a global audience.",
  address: {
    street: "Bahar Shah Road, Momin Street, Street 20, Joray Pul, Al Faisal Town",
    city: "Lahore",
    region: "Punjab",
    postalCode: "54000",
    country: "PK",
    countryName: "Pakistan",
  },
} as const;

export const NAV = [
  { to: "/", label: "Origin" },
  { to: "/about", label: "About" },
  { to: "/minds", label: "Minds" },
  { to: "/creations", label: "Creations" },
  { to: "/vision", label: "Vision" },
  { to: "/pulse", label: "Pulse" },
  { to: "/connect", label: "Connect" },
] as const;

export const canonical = (path: string) =>
  `${SITE.url}${path === "/" ? "/" : path}`;

type MetaInput = {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
};

/** Builds the standard meta + canonical link set for a leaf route. */
export function pageMeta({ title, description, path, ogType = "website" }: MetaInput) {
  const url = canonical(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: ogType },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { property: "og:image", content: SITE.ogImage },
      { name: "twitter:image", content: SITE.ogImage },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: canonical(it.path),
    })),
  };
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: "VYORA AI",
  url: `${SITE.url}/`,
  email: SITE.email,
  description: SITE.description,
  foundingDate: SITE.foundingDate,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  areaServed: "Worldwide",
  slogan: "Building apps that actually help people live better.",
  makesOffer: [
    "Mobile app development",
    "AI application development",
    "Web application development",
    "Software product development",
    "API development",
    "AI agent development",
    "AI integration services",
    "Product engineering",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name, provider: { "@id": `${SITE.url}/#organization` } },
  })),
  founder: [
    { "@type": "Person", name: "M. Shehram Mehmood", jobTitle: "Founder" },
    { "@type": "Person", name: "Murtaza Raza", jobTitle: "Co-Founder" },
    { "@type": "Person", name: "Hussnain Zia Ullah", jobTitle: "Co-Founder" },
  ],
  knowsAbout: [
    "Mobile app development",
    "AI application development",
    "Web application development",
    "API development",
    "AI agents",
    "Software product engineering",
  ],
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: `${SITE.url}/`,
  name: SITE.name,
  publisher: { "@id": `${SITE.url}/#organization` },
  inLanguage: "en",
};

export const CAPABILITIES = [
  {
    title: "Mobile app development",
    body: "Android and cross-platform mobile applications, from first concept through store release.",
  },
  {
    title: "AI application development",
    body: "Applications built around AI features such as scanning, analysis, personalisation and assistance.",
  },
  {
    title: "Web application development",
    body: "Web software and dashboards that stay fast, accessible and maintainable as they grow.",
  },
  {
    title: "API & backend development",
    body: "APIs, data models and backend services that our own products run on.",
  },
  {
    title: "AI agents & integrations",
    body: "Connecting AI models into real product workflows instead of leaving them as demos.",
  },
  {
    title: "Product engineering",
    body: "Research, design, build, test and iterate — we run the full product cycle in-house.",
  },
] as const;

export function personLd(p: {
  name: string;
  role: string;
  about: string[];
  skills: readonly string[];
  image?: string;
  linkedin?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: p.name,
    jobTitle: p.role,
    description: p.about[0],
    knowsAbout: [...p.skills],
    worksFor: { "@id": `${SITE.url}/#organization` },
    url: canonical("/minds"),
    ...(p.linkedin ? { sameAs: [p.linkedin] } : {}),
  };
}
