export interface Project {
  id: string;
  slug: string;
  title: string;
  displayTitle?: string;
  year: string;
  role: string;
  tools: string;
  liveUrl?: string;
  linkText?: string;
  discipline: string;
  indexDiscipline?: string;
  summary: string;
  introParagraph: string;
  outcomeNumber: string;
  outcomeTextBefore: string;
  outcomeTextAfter: string;
  description: string[];
  heroImage: string;
  gallery: {
    full1: string;
    twoUp1: string;
    twoUp2: string;
    full2: string;
  };
  images: string[];
  tags: string[];
  isFeatured: boolean;
}

export const projects: Project[] = [
  {
    id: "project-1",
    slug: "recovila",
    title: "RECOVILA",
    displayTitle: "RECOVILA",
    year: "2025–2026",
    role: "Lead Fullstack Developer",
    tools: "TypeScript, Node.js, Next.js, Redis, Collaborative Filtering",
    linkText: "github.com/Fizm00",
    liveUrl: "https://github.com/Fizm00",
    discipline: "E-COMMERCE & ML ENGINE",
    indexDiscipline: "Recommendation engine",
    summary:
      "Engineered an e-commerce platform integrated with a collaborative filtering recommendation engine to personalize product discovery.",
    introParagraph:
      "Engineered an e-commerce platform integrated with a collaborative filtering recommendation engine to personalize product discovery. Designed low-latency catalog caching pipelines, resilient transaction flows, and modular recommendation microservices.",
    outcomeNumber: "42%",
    outcomeTextBefore: "BOOSTED PRODUCT DISCOVERY ENGAGEMENT BY",
    outcomeTextAfter:
      "ACROSS DYNAMIC E-COMMERCE CATALOGS AND COLLABORATIVE USER SESSIONS.",
    description: [
      "Engineered real-time recommendation scoring pipelines and distributed catalog queries for peak enterprise loads.",
      "Designed collaborative filtering algorithms to deliver hyper-personalized item suggestions.",
    ],
    heroImage: "/projects/project-1.jpg",
    gallery: {
      full1: "/projects/project-1.jpg",
      twoUp1: "/projects/project-2.jpg",
      twoUp2: "/projects/project-3.jpg",
      full2: "/projects/project-4.jpg",
    },
    images: ["/projects/project-1.jpg"],
    tags: ["E-Commerce", "Collaborative Filtering", "TypeScript", "Next.js"],
    isFeatured: true,
  },
  {
    id: "project-2",
    slug: "nano-recommender",
    title: "NANO-\nRECOMMENDER",
    displayTitle: "NANO-RECOMMENDER",
    year: "2026",
    role: "Creator & Maintainer",
    tools: "Node.js, TypeScript, npm, Zero-Dependency",
    linkText: "npmjs.com/package/@fizm/nano-recommender",
    liveUrl: "https://www.npmjs.com/package/@fizm/nano-recommender",
    discipline: "OPEN-SOURCE DEVELOPER TOOLING",
    indexDiscipline: "Zero-dependency package",
    summary:
      "Built and published a lightweight, zero-dependency recommendation engine on npm designed for fast integration across Node.js environments.",
    introParagraph:
      "Built and published a lightweight, zero-dependency recommendation engine on npm designed for fast integration across Node.js environments. Focused on minimal bundle footprint, instant execution, and zero runtime overhead for edge and serverless runtimes.",
    outcomeNumber: "0",
    outcomeTextBefore: "DELIVERED A LIGHTWEIGHT PACKAGE WITH ZERO RUNTIME OVERHEAD AND",
    outcomeTextAfter:
      "EXTERNAL DEPENDENCIES FOR MAXIMUM COMPATIBILITY ACROSS NODE ENVIRONMENTS.",
    description: [
      "Authored clean matrix factorization and cosine similarity heuristics optimized for CPU efficiency.",
      "Published as @fizm/nano-recommender on npm with comprehensive TypeScript declarations and unit test coverage.",
    ],
    heroImage: "/projects/project-2.jpg",
    gallery: {
      full1: "/projects/project-2.jpg",
      twoUp1: "/projects/project-3.jpg",
      twoUp2: "/projects/project-4.jpg",
      full2: "/projects/project-5.jpg",
    },
    images: ["/projects/project-2.jpg"],
    tags: ["Node.js", "npm Package", "Recommendation System", "TypeScript"],
    isFeatured: true,
  },
  {
    id: "project-3",
    slug: "mongoosleuth",
    title: "MONGOO-\nSLEUTH",
    displayTitle: "MONGOOSLEUTH",
    year: "2025–2026",
    role: "Creator & Maintainer",
    tools: "MongoDB, Mongoose, Node.js, TypeScript",
    linkText: "github.com/Fizm00/mongoosleuth",
    liveUrl: "https://github.com/Fizm00",
    discipline: "QUERY PROFILING & DEVTOOL",
    indexDiscipline: "Real-time query profiling",
    summary:
      "Authored an open-source developer utility library to streamline real-time query inspection, debugging, and performance profiling for Mongoose/MongoDB.",
    introParagraph:
      "Authored an open-source developer utility library to streamline real-time query inspection, debugging, and performance profiling for Mongoose/MongoDB. Surfaces slow queries, index bottlenecks, and redundant pipeline stages directly in local runtime logs.",
    outcomeNumber: "3.5X",
    outcomeTextBefore: "ACCELERATED QUERY DEBUGGING AND PIPELINE PROFILING SPEED BY",
    outcomeTextAfter:
      "FOR DEVELOPERS AUDITING COMPLEX MONGOOSE HOOKS AND AGGREGATION PIPELINES.",
    description: [
      "Engineered plug-and-play middleware intercepting Mongoose query hooks with zero production overhead.",
      "Built formatted terminal telemetry showing exact execution time and missing compound indices.",
    ],
    heroImage: "/projects/project-3.jpg",
    gallery: {
      full1: "/projects/project-3.jpg",
      twoUp1: "/projects/project-4.jpg",
      twoUp2: "/projects/project-5.jpg",
      full2: "/projects/project-1.jpg",
    },
    images: ["/projects/project-3.jpg"],
    tags: ["MongoDB", "Mongoose", "DevTool", "TypeScript"],
    isFeatured: true,
  },
  {
    id: "project-4",
    slug: "erdamotor",
    title: "ERDA-\nMOTOR",
    displayTitle: "ERDAMOTOR",
    year: "2025",
    role: "Fullstack Developer",
    tools: "Next.js, Tailwind CSS, TypeScript, REST API",
    linkText: "erdamotor.id",
    liveUrl: "https://erdamotor.id",
    discipline: "COMMERCIAL AUTOMOTIVE PLATFORM",
    indexDiscipline: "Commercial dealership UI",
    summary:
      "Designed and launched a vehicle dealership landing page featuring a premium UI, responsive layouts, and performance optimizations tailored for lead generation.",
    introParagraph:
      "Designed and launched a vehicle dealership landing page featuring a premium UI, responsive layouts, and performance optimizations tailored for lead generation. Tuned image assets and rendering pipelines to ensure instant initial load times on mobile devices.",
    outcomeNumber: "98",
    outcomeTextBefore: "ACHIEVED A PERFECT LIGHTHOUSE PERFORMANCE SCORE OF",
    outcomeTextAfter:
      "WITH SUB-SECOND LCP METRICS ACROSS ALL MOBILE AND DESKTOP VIEWPORTS.",
    description: [
      "Developed high-conversion inventory display showcase with intuitive filter criteria.",
      "Optimized Core Web Vitals to sustain sub-second first contentful paint across 4G networks.",
    ],
    heroImage: "/projects/project-4.jpg",
    gallery: {
      full1: "/projects/project-4.jpg",
      twoUp1: "/projects/project-5.jpg",
      twoUp2: "/projects/project-1.jpg",
      full2: "/projects/project-2.jpg",
    },
    images: ["/projects/project-4.jpg"],
    tags: ["Next.js", "Dealership Web", "Tailwind CSS", "Lead Generation"],
    isFeatured: true,
  },
  {
    id: "project-5",
    slug: "nanma-finance",
    title: "NANMA\nFINANCE",
    displayTitle: "NANMA FINANCE",
    year: "2024–2025",
    role: "Fullstack Developer",
    tools: "React, Node.js, Express, PostgreSQL, Chart.js",
    linkText: "github.com/Fizm00",
    liveUrl: "https://github.com/Fizm00",
    discipline: "FINANCIAL OPERATIONS APP",
    indexDiscipline: "Structured cash flow system",
    summary:
      "Built a financial tracking web application for structured cash flow recording, budget allocation, and operational reporting.",
    introParagraph:
      "Built a financial tracking web application for structured cash flow recording, budget allocation, and operational reporting. Designed intuitive accounting workflows, automated audit totals, and responsive data visualization for monthly ledger reconciliations.",
    outcomeNumber: "100%",
    outcomeTextBefore: "MAINTAINED STRICT RECONCILIATION ACCURACY AND",
    outcomeTextAfter:
      "AUDIT INTEGRITY ACROSS MULTI-ACCOUNT CASH FLOW LEDGERS AND FISCAL SUMMARIES.",
    description: [
      "Created structured double-entry ledger models ensuring balanced cash flow audits.",
      "Engineered exportable cash-flow summaries and interactive charts for monthly budget tracking.",
    ],
    heroImage: "/projects/project-5.jpg",
    gallery: {
      full1: "/projects/project-5.jpg",
      twoUp1: "/projects/project-1.jpg",
      twoUp2: "/projects/project-2.jpg",
      full2: "/projects/project-3.jpg",
    },
    images: ["/projects/project-5.jpg"],
    tags: ["Financial Management", "PostgreSQL", "React", "Node.js"],
    isFeatured: true,
  },
];

