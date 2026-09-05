import { SITE, canonical } from "./site";

export type ServiceSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type Service = {
  slug: string;
  /** Short label used in navigation and internal links. */
  navLabel: string;
  /** Full service name used in headings and schema. */
  name: string;
  eyebrow: string;
  h1: string;
  subtitle: string;
  seoTitle: string;
  seoDescription: string;
  /** Opening, human-first explanation of the service. */
  intro: string[];
  sections: ServiceSection[];
  process: { title: string; body: string }[];
  useCases: string[];
  /** Products in this repository that genuinely evidence this service. */
  evidence: { slug: string; note: string }[];
  faqs: { q: string; a: string }[];
  /** Slugs of other services worth linking to from this page. */
  related: string[];
  icon: "smartphone" | "layers" | "brain" | "code" | "globe";
};

export const services: Service[] = [
  {
    slug: "app-development",
    navLabel: "App Development",
    name: "App Development",
    eyebrow: "Services",
    h1: "App Development Company in Pakistan",
    subtitle:
      "VYORA.AI designs, builds and ships applications end to end from Lahore, Pakistan — the same way we build our own products.",
    seoTitle: "App Development Company in Pakistan | VYORA.AI",
    seoDescription:
      "VYORA.AI is an app development company in Lahore, Pakistan building mobile and web applications end to end — discovery, design, engineering, testing and release.",
    intro: [
      "App development is the full process of turning an idea into working software that people can install, open and rely on. It covers far more than writing code: it includes deciding what the app should do, how it should feel, how data moves through it, how it is tested, and how it keeps working after release.",
      "VYORA.AI is a product-building company based in Lahore, Pakistan. We build applications for our own product line and for the people who come to us with an idea, which means every project we take on is run the same way our own products are run — with research, iteration and long-term maintenance in mind.",
    ],
    sections: [
      {
        heading: "What app development includes",
        body: [
          "A complete app project moves through several distinct stages. Skipping any of them is the usual reason an app ships late, costs more than expected, or fails to hold users.",
        ],
        bullets: [
          "Product discovery — defining the audience, the problem and the smallest version worth building",
          "UX and interface design — screens, flows, states and accessibility",
          "Frontend engineering — the app itself, on mobile or the web",
          "Backend and API work — data models, authentication, storage and business logic",
          "Testing — functional, device and edge-case testing before release",
          "Release — store submission, review handling and staged rollout",
          "Maintenance — updates, platform changes, bug fixes and new features",
        ],
      },
      {
        heading: "Platforms we build for",
        body: [
          "We build Android and cross-platform mobile applications, and web applications that run in any modern browser. Where a product genuinely needs both, we plan a shared backend so mobile and web stay in sync rather than drifting into two separate products.",
        ],
      },
      {
        heading: "How we decide what to build",
        body: [
          "We do not build random apps. Before engineering starts we agree on who the app is for, what specific problem it removes, and what the first release must contain to be useful. Everything outside that gets scheduled for later rather than quietly added to the first build.",
          "This is the same approach behind our own products, and it is the main reason they reach release rather than staying prototypes.",
        ],
      },
    ],
    process: [
      { title: "Discovery", body: "We define the audience, the problem and the scope of a first useful release." },
      { title: "Design", body: "Flows and screens are designed before code, so the build has a clear target." },
      { title: "Build", body: "Frontend, backend and integrations are engineered in reviewable increments." },
      { title: "Test", body: "Functional and device testing, plus the edge cases real users will hit." },
      { title: "Release", body: "Store submission or deployment, with a staged rollout where it helps." },
      { title: "Iterate", body: "We keep improving after launch based on how the product is actually used." },
    ],
    useCases: [
      "Turning an early concept into a first shippable release",
      "Building a consumer app that needs accounts, data and offline behaviour",
      "Rebuilding an existing app that has become slow or hard to maintain",
      "Adding a mobile companion to an existing web product",
    ],
    evidence: [
      { slug: "flowdash", note: "Our first app to reach production and release publicly on Google Play." },
      { slug: "opencpp", note: "A learning app currently running through a closed testing cycle." },
      { slug: "sugarkill", note: "A health and nutrition product in active development." },
    ],
    faqs: [
      {
        q: "What kinds of apps does VYORA.AI build?",
        a: "Mobile applications for Android and cross-platform targets, and web applications. Our own product line spans personal finance, education, health, social and lifestyle categories.",
      },
      {
        q: "Where is VYORA.AI based?",
        a: "VYORA.AI is based in Lahore, Punjab, Pakistan, and builds for a global audience.",
      },
      {
        q: "Do you handle the app after launch?",
        a: "Yes. Platform requirements, devices and user expectations all change, so we treat maintenance and iteration as part of the work rather than an add-on.",
      },
    ],
    related: ["mobile-app-development", "ai-development", "software-development", "web-development"],
    icon: "layers",
  },
  {
    slug: "mobile-app-development",
    navLabel: "Mobile App Development",
    name: "Mobile App Development",
    eyebrow: "Services",
    h1: "Mobile App Development Company in Pakistan",
    subtitle:
      "Android and cross-platform mobile applications built in Lahore — from first concept through store release and ongoing updates.",
    seoTitle: "Mobile App Development Company in Pakistan | VYORA.AI",
    seoDescription:
      "VYORA.AI builds Android and cross-platform mobile apps from Lahore, Pakistan — product design, engineering, testing, Play Store release and long-term maintenance.",
    intro: [
      "Mobile app development is its own discipline. A phone has limited screen space, unreliable connectivity, strict battery and permission rules, and a store review process standing between your build and your users. An app that ignores any of those constraints gets uninstalled quickly.",
      "We build mobile applications for our own product line, which means we have gone through the whole cycle ourselves: store listings, review feedback, closed testing tracks, staged rollouts and post-release fixes.",
    ],
    sections: [
      {
        heading: "What we handle on a mobile project",
        body: [
          "Mobile work carries requirements that web software does not, and each of them affects the build from the first day rather than the last.",
        ],
        bullets: [
          "Offline behaviour and local data storage",
          "Account creation, secure sign-in and session handling",
          "Notifications and background activity within platform limits",
          "Permissions handled transparently, requested only when needed",
          "Performance on mid-range and older devices, not just flagships",
          "Store listing, screenshots, policy compliance and review handling",
        ],
      },
      {
        heading: "Testing across real devices",
        body: [
          "Screen sizes, Android versions and manufacturer customisations all change how an app behaves. We test across a range of devices and conditions — including poor connectivity and low storage — before a release goes out.",
          "For products that warrant it, we run a closed testing phase first. OpenCpp is currently in exactly that stage, which is where lesson structure and practice flow get refined before a public launch.",
        ],
      },
      {
        heading: "Release and beyond",
        body: [
          "Getting to the store is a milestone, not the finish line. Flowdash is live on Google Play and continues to receive work: fixes, refinements and new capability driven by how people actually use it.",
        ],
      },
    ],
    process: [
      { title: "Scope", body: "Define the audience, the core job the app does, and the first release." },
      { title: "Design", body: "Mobile-first flows, states and accessible interface work." },
      { title: "Engineer", body: "App build plus the backend, API and data layer it depends on." },
      { title: "Device testing", body: "Real devices, varied Android versions, poor-network conditions." },
      { title: "Store release", body: "Listing, policy compliance, review handling and rollout." },
      { title: "Support", body: "Updates, platform changes and feature work after launch." },
    ],
    useCases: [
      "A consumer Android app that needs to work offline",
      "A learning or habit product that depends on progress tracking",
      "A first store release for a team that has never shipped an app",
      "Refreshing an app that no longer meets current platform requirements",
    ],
    evidence: [
      { slug: "flowdash", note: "In production on Google Play with offline functionality and data export." },
      { slug: "opencpp", note: "Running a closed testing track ahead of a public release." },
      { slug: "giffy", note: "A communication product in development for mobile." },
    ],
    faqs: [
      {
        q: "Which mobile platforms do you build for?",
        a: "Android and cross-platform builds. Flowdash, our first production app, is publicly available on Google Play.",
      },
      {
        q: "Can you take an app all the way to the Play Store?",
        a: "Yes — we handle the listing, policy requirements, review process and rollout, and we have done it for our own product.",
      },
      {
        q: "Do you build backends for mobile apps?",
        a: "Yes. Accounts, data models, APIs and storage are part of the same project rather than something handled separately.",
      },
    ],
    related: ["app-development", "ai-development", "web-development", "software-development"],
    icon: "smartphone",
  },
  {
    slug: "ai-development",
    navLabel: "AI Development",
    name: "AI Development",
    eyebrow: "Services",
    h1: "AI Development Company in Pakistan",
    subtitle:
      "AI applications, agents and integrations built into real product workflows — not left as demos.",
    seoTitle: "AI Development Company in Pakistan | VYORA.AI",
    seoDescription:
      "VYORA.AI is an AI development company in Lahore, Pakistan building AI applications, AI agents and model integrations that work inside real products.",
    intro: [
      "Most AI work fails at the same point: the model works in isolation, but nothing around it does. There is no clear input, no handling for wrong answers, no cost control, and no place in the product where the output actually helps someone.",
      "Our AI work starts from the product side. We identify a task a person currently does slowly or repetitively, decide whether a model genuinely improves it, and then build the surrounding software — the prompts, the data flow, the fallbacks and the interface — that makes the result trustworthy.",
    ],
    sections: [
      {
        heading: "What we build with AI",
        body: [
          "AI is a capability inside a product, not a product category on its own. These are the shapes it usually takes in the work we do.",
        ],
        bullets: [
          "AI application development — apps whose core value comes from a model, such as analysis, scanning or personalisation",
          "AI agents — systems that carry out multi-step tasks against real tools and data",
          "AI integration — adding model-driven features to software that already exists",
          "Assistive interfaces — search, summarisation, suggestions and guided input",
          "Data plumbing — the retrieval, structuring and validation a good result depends on",
        ],
      },
      {
        heading: "Making AI features reliable",
        body: [
          "Language models are probabilistic, so the engineering around them matters more than the model choice. We constrain inputs, validate outputs against the shape the product expects, design what happens when a call fails or returns nonsense, and keep a non-AI path available wherever the product would otherwise break.",
          "We also treat cost and latency as design constraints from the start, because an AI feature that is slow or expensive per use will not survive contact with real traffic.",
        ],
      },
      {
        heading: "Privacy and honesty about limits",
        body: [
          "We are clear with users about what is AI-generated and what is not, and we are careful about what data leaves the device or the backend. Where a feature cannot be made dependable, we say so rather than shipping something that looks impressive and misleads people.",
        ],
      },
    ],
    process: [
      { title: "Identify", body: "Find the task where a model genuinely beats the current approach." },
      { title: "Prototype", body: "Test feasibility and output quality before committing to a build." },
      { title: "Engineer", body: "Build the data flow, validation and interface around the model." },
      { title: "Guard", body: "Handle failures, bad output, latency and cost limits explicitly." },
      { title: "Integrate", body: "Place the feature where it fits the user's real workflow." },
      { title: "Refine", body: "Improve prompts, retrieval and behaviour based on real usage." },
    ],
    useCases: [
      "Adding an AI-assisted feature to an existing mobile or web app",
      "Building a product whose core experience is model-driven",
      "Automating a repetitive internal task with an agent that uses real tools",
      "Summarisation, classification or personalisation inside an existing workflow",
    ],
    evidence: [
      { slug: "horoguide", note: "An AI and lifestyle product currently in development." },
      { slug: "sugarkill", note: "A health and nutrition product where analysis features are in development." },
    ],
    faqs: [
      {
        q: "Does VYORA.AI build AI agents?",
        a: "Yes. We build agents that carry out multi-step tasks against real tools and data, with explicit handling for failures and unexpected output.",
      },
      {
        q: "Can you add AI to an app we already have?",
        a: "Yes — AI integration into existing software is a large part of this work, and it usually needs less rebuilding than people expect.",
      },
      {
        q: "How do you keep AI features from producing wrong results?",
        a: "By constraining inputs, validating outputs against the structure the product expects, and designing a clear fallback path when a model call fails or returns something unusable.",
      },
    ],
    related: ["app-development", "mobile-app-development", "software-development", "web-development"],
    icon: "brain",
  },
  {
    slug: "software-development",
    navLabel: "Software Development",
    name: "Software Development",
    eyebrow: "Services",
    h1: "Software Development Company in Pakistan",
    subtitle:
      "Custom software, backends and APIs engineered to stay maintainable long after the first release.",
    seoTitle: "Software Development Company in Pakistan | VYORA.AI",
    seoDescription:
      "VYORA.AI is a software development company in Lahore, Pakistan building custom software, backends, APIs and product engineering for a global audience.",
    intro: [
      "Custom software is worth building when off-the-shelf tools force a team to work in a way that does not match how it actually operates. The value is not novelty — it is removing the manual work, duplicate entry and workarounds that accumulate around a poor fit.",
      "We build software the way we build our own products: a clear data model first, an API that other things can safely depend on, and code that a different engineer can pick up in six months without archaeology.",
    ],
    sections: [
      {
        heading: "What we build",
        body: [
          "Our software work covers the layers underneath and around the interfaces people see.",
        ],
        bullets: [
          "Custom software built around a specific workflow",
          "Backend services, data models and business logic",
          "API development — the interfaces our own products run on",
          "Authentication, permissions and secure data handling",
          "Integrations between systems that were never designed to talk to each other",
          "Product engineering — research, design, build, test and iterate as one cycle",
        ],
      },
      {
        heading: "API development",
        body: [
          "An API is a contract. Once something depends on it, changing it carelessly breaks things downstream. We design endpoints around the operations a client actually needs, keep responses predictable, version deliberately, and document what exists rather than leaving it to guesswork.",
        ],
      },
      {
        heading: "Maintainability as a requirement",
        body: [
          "Most of a software system's cost arrives after launch. We keep dependencies deliberate, avoid clever code where plain code will do, and write the tests that protect the paths a failure would actually hurt. That is what makes the second year of a product cheaper than the first.",
        ],
      },
    ],
    process: [
      { title: "Understand", body: "Map the real workflow, including the parts done in spreadsheets." },
      { title: "Model", body: "Design the data model and the API contract before building on top." },
      { title: "Build", body: "Backend, logic and integrations, in reviewable increments." },
      { title: "Test", body: "Cover the paths where failure has real consequences." },
      { title: "Deploy", body: "Ship to a real environment with monitoring in place." },
      { title: "Maintain", body: "Keep it secure, current and understandable over time." },
    ],
    useCases: [
      "Replacing a spreadsheet-driven process with real software",
      "Building the backend and API behind a mobile or web product",
      "Connecting two systems that currently need manual copying between them",
      "Taking over software that has become risky to change",
    ],
    evidence: [
      { slug: "flowdash", note: "Production software with secure accounts, offline storage and data export." },
      { slug: "wishes", note: "A social product in development on our own backend and API work." },
    ],
    faqs: [
      {
        q: "Do you build APIs as a standalone service?",
        a: "Yes. APIs, data models and backend services are core work for us — they are what our own products run on.",
      },
      {
        q: "What does product engineering mean at VYORA.AI?",
        a: "Running the full cycle in-house: research, design, build, test and iterate, rather than handing a specification down a chain.",
      },
      {
        q: "Can you work on existing software rather than starting fresh?",
        a: "Yes. Taking over and stabilising an existing system is often the more sensible option, and we will say so when it is.",
      },
    ],
    related: ["web-development", "app-development", "ai-development", "mobile-app-development"],
    icon: "code",
  },
  {
    slug: "web-development",
    navLabel: "Web Development",
    name: "Web Development",
    eyebrow: "Services",
    h1: "Web Development Company in Pakistan",
    subtitle:
      "Web applications, dashboards and product sites that stay fast, accessible and maintainable as they grow.",
    seoTitle: "Web Development Company in Pakistan | VYORA.AI",
    seoDescription:
      "VYORA.AI builds web applications, dashboards and product sites from Lahore, Pakistan — fast, accessible, search-friendly and built to grow.",
    intro: [
      "The web is where most software is first encountered. A web application has to load quickly on an average connection, work with a keyboard and a screen reader, render meaningfully for search engines, and keep doing all of that as features accumulate.",
      "We build web applications and product sites with those properties treated as requirements rather than a later optimisation pass.",
    ],
    sections: [
      {
        heading: "What we build for the web",
        body: [
          "From marketing surfaces through to the interfaces a team uses every day.",
        ],
        bullets: [
          "Web application development — real product interfaces, not brochures",
          "Dashboards and internal tools built around actual daily use",
          "Server-rendered product sites that search engines can read",
          "Accessible interfaces with proper semantics and keyboard support",
          "Responsive layouts that hold up from small phones to wide desktops",
          "The backend and API layer behind all of it",
        ],
      },
      {
        heading: "Performance and accessibility",
        body: [
          "Speed is a feature. We keep JavaScript payloads deliberate, render meaningful HTML on the server where it helps, and avoid the layout shifts and blocking resources that make a page feel broken on a slow connection.",
          "Accessibility follows the same logic: correct heading structure, real semantic elements, visible focus, and respect for reduced-motion preferences. It improves the experience for everyone, not only for people using assistive technology.",
        ],
      },
      {
        heading: "Built to be found",
        body: [
          "A web product that cannot be crawled is invisible. We build with server-rendered content, clean URLs, per-page metadata, canonical links and structured data in place from the start — the same architecture this site runs on.",
        ],
      },
    ],
    process: [
      { title: "Define", body: "Agree the audience, the content model and the first release." },
      { title: "Design", body: "Layouts, states and responsive behaviour across breakpoints." },
      { title: "Build", body: "Frontend, backend and integrations with performance budgets in mind." },
      { title: "Verify", body: "Accessibility, responsiveness, crawlability and speed checks." },
      { title: "Launch", body: "Deploy with correct status codes, canonicals and a working sitemap." },
      { title: "Improve", body: "Iterate on real usage rather than assumptions." },
    ],
    useCases: [
      "A web application that needs accounts, data and a real interface",
      "An internal dashboard replacing scattered spreadsheets",
      "A fast, crawlable product or company site",
      "A web companion to an existing mobile app",
    ],
    evidence: [
      { slug: "flowdash", note: "A production product supported by our own web and backend engineering." },
      { slug: "wishes", note: "A social product in development spanning web and mobile surfaces." },
    ],
    faqs: [
      {
        q: "Do you build web apps or just websites?",
        a: "Both, though most of our work is web application development — interfaces with accounts, data and real functionality behind them.",
      },
      {
        q: "Is search visibility part of a web build?",
        a: "Yes. Server-rendered content, clean URLs, per-page metadata, canonical links and structured data are part of the build, not a later add-on.",
      },
      {
        q: "Can a web app share a backend with a mobile app?",
        a: "Yes, and it usually should — one API and one data model keeps the two surfaces consistent instead of drifting apart.",
      },
    ],
    related: ["software-development", "app-development", "ai-development", "mobile-app-development"],
    icon: "globe",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export function serviceLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.seoDescription,
    url: canonical(`/services/${service.slug}`),
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "City", name: "Lahore" },
      "Worldwide",
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: canonical("/connect"),
    },
  };
}
