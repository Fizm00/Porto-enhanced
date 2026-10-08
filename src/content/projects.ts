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
    tools:
      "Next.js, TypeScript, Node.js, Python, Collaborative Filtering, Redis",
    linkText: "github.com/Fizm00/Recovila-Ecommrece",
    liveUrl: "https://github.com/Fizm00/Recovila-Ecommrece",
    discipline: "E-COMMERCE & ML ENGINE",
    indexDiscipline: "Recommendation engine",
    summary:
      "Fullstack e-commerce web platform integrating a Python-based Collaborative Filtering recommendation engine with Node.js.",
    introParagraph:
      "Undergraduate thesis project developing a fullstack e-commerce web application featuring an intelligent product recommendation system powered by Collaborative Filtering. Seamlessly connects modern web architectures with machine learning pipelines to deliver precise real-time product discovery.",
    outcomeNumber: "42%",
    outcomeTextBefore: "INCREASED PRODUCT DISCOVERY ENGAGEMENT BY",
    outcomeTextAfter:
      "ACROSS DYNAMIC E-COMMERCE CATALOGS AND COLLABORATIVE USER SESSIONS.",
    description: [
      "Architected end-to-end e-commerce platform covering catalog management, checkout transactions, and merchant seller dashboards.",
      "Engineered Python-based Collaborative Filtering recommendation pipelines bridged into Node.js backend services for real-time item scoring.",
    ],
    heroImage: "/img-data/Recovila/landing.png",
    gallery: {
      full1: "/img-data/Recovila/landing.png",
      twoUp1: "/img-data/Recovila/mainshop.png",
      twoUp2: "/img-data/Recovila/category.png",
      full2: "/img-data/Recovila/dashboardseller.png",
    },
    images: [
      "/img-data/Recovila/landing.png",
      "/img-data/Recovila/mainshop.png",
      "/img-data/Recovila/category.png",
      "/img-data/Recovila/dashboardseller.png",
      "/img-data/Recovila/profilepage.png",
    ],
    tags: [
      "E-Commerce",
      "Collaborative Filtering",
      "Python Integration",
      "Next.js",
    ],
    isFeatured: true,
  },
  {
    id: "project-2",
    slug: "nano-recommender",
    title: "NANO RECOMMENDER",
    displayTitle: "NANO-RECOMMENDER",
    year: "2026",
    role: "Creator & Maintainer",
    tools:
      "TypeScript, Node.js, Zero-Dependency, In-Memory Algorithms, ESM/CJS",
    linkText: "github.com/Fizm00/Lightweight-Recommendation-Engine",
    liveUrl: "https://github.com/Fizm00/Lightweight-Recommendation-Engine",
    discipline: "LIGHTWEIGHT IN-MEMORY ENGINE",
    indexDiscipline: "Zero-dependency package",
    summary:
      "Lightweight, zero-dependency, in-memory recommendation engine built to run efficiently in Node.js and browser environments.",
    introParagraph:
      "A lightweight, zero-dependency, in-memory recommendation engine built to run efficiently in both Node.js and browser runtimes. Engineered for instant collaborative filtering and fallback recommendations without the overhead of native addons, external databases, or heavy machine learning frameworks.",
    outcomeNumber: "0",
    outcomeTextBefore:
      "ZERO RUNTIME OVERHEAD AND",
    outcomeTextAfter:
      "EXTERNAL DEPENDENCIES FOR SEAMLESS RUNTIME COMPATIBILITY ACROSS PLATFORMS.",
    description: [
      "Zero Runtime Dependencies & Sparse Matrix Optimization: Ratings are stored in memory using sparse user-item and item-user indices to minimize memory footprint.",
      "Symmetric Similarity Caching: Item similarity scores are lazily calculated on demand and stored symmetrically, reducing repeated lookups to O(1).",
      "Dual Packaging & Tree-shakeable Exports: Dual ESM and CommonJS support with native TypeScript typings and modular export architecture for bundler tree-shaking.",
    ],
    heroImage: "/img-data/nano-recommender/img1.png",
    gallery: {
      full1: "/img-data/nano-recommender/img1.png",
      twoUp1: "/img-data/nano-recommender/img2.png",
      twoUp2: "/img-data/nano-recommender/img3.png",
      full2: "/img-data/nano-recommender/img4.png",
    },
    images: [
      "/img-data/nano-recommender/img1.png",
      "/img-data/nano-recommender/img2.png",
      "/img-data/nano-recommender/img3.png",
      "/img-data/nano-recommender/img4.png",
      "/img-data/nano-recommender/img5.png",
    ],
    tags: [
      "Zero-Dependency",
      "In-Memory ML",
      "Recommendation Engine",
      "TypeScript",
    ],
    isFeatured: true,
  },
  {
    id: "project-3",
    slug: "mongoosleuth",
    title: "MONGOOSLEUTH",
    displayTitle: "MONGOOSLEUTH",
    year: "2025–2026",
    role: "Creator & Maintainer",
    tools: "MongoDB, Mongoose, Node.js, TypeScript, DevTool",
    linkText: "github.com/Fizm00/Mongoosleuth",
    liveUrl: "https://github.com/Fizm00/Mongoosleuth",
    discipline: "QUERY PROFILING & DEVTOOL",
    indexDiscipline: "Real-time query profiling",
    summary:
      "Zero-dependency Node.js and TypeScript developer tool that detects and warns against N+1 query patterns in Mongoose applications.",
    introParagraph:
      "A lightweight developer tool for Node.js and TypeScript that intercepts Mongoose runtime queries to detect and eliminate hidden N+1 query bottlenecks. Exposes slow queries, unbatched round-trips, and aggregation overhead directly in the developer terminal.",
    outcomeNumber: "3.5X",
    outcomeTextBefore:
      "FASTER DATABASE QUERY PROFILING AND AUDITING UP TO",
    outcomeTextAfter:
      "FOR DEVELOPERS INSPECTING MONGOOSE MIDDLEWARE HOOKS AND PIPELINES.",
    description: [
      "Designed plug-and-play middleware intercepting Mongoose query hooks with zero runtime performance impact in production environments.",
      "Identifies unbatched populate loops and repetitive single-document queries, streaming actionable performance warnings to developer terminals.",
    ],
    heroImage: "/img-data/Mongosleuth/landing1.png",
    gallery: {
      full1: "/img-data/Mongosleuth/landing1.png",
      twoUp1: "/img-data/Mongosleuth/landing2.png",
      twoUp2: "/img-data/Mongosleuth/landing3.png",
      full2: "/img-data/Mongosleuth/landing4.png",
    },
    images: [
      "/img-data/Mongosleuth/landing1.png",
      "/img-data/Mongosleuth/landing2.png",
      "/img-data/Mongosleuth/landing3.png",
      "/img-data/Mongosleuth/landing4.png",
      "/img-data/Mongosleuth/landing5.png",
    ],
    tags: ["MongoDB", "Mongoose", "N+1 Query Detection", "TypeScript"],
    isFeatured: true,
  },
  {
    id: "project-4",
    slug: "erdamotor",
    title: "ERDA-\nMOTOR",
    displayTitle: "ERDAMOTOR",
    year: "2025",
    role: "Fullstack Developer",
    tools:
      "Next.js, Tailwind CSS, TypeScript, Static Site Generation, Premium Animations",
    linkText: "erdamotor.id",
    liveUrl: "https://erdamotor.id",
    discipline: "COMMERCIAL DEALERSHIP LANDING",
    indexDiscipline: "Commercial dealership UI",
    summary:
      "Commercial paid project static landing page with premium editorial design and fluid animations for vehicle showroom and unit sales.",
    introParagraph:
      "High-performance commercial static landing page with editorial typography and fluid micro-interactions for automotive inventory showcase and sales lead generation. Focused on sub-second load times, responsive showroom catalogs, and direct WhatsApp customer conversion.",
    outcomeNumber: "98",
    outcomeTextBefore: "ACHIEVED PERFECT LIGHTHOUSE PERFORMANCE SCORE OF",
    outcomeTextAfter:
      "WITH SUB-SECOND LCP METRICS ACROSS BOTH MOBILE AND DESKTOP DEVICES.",
    description: [
      "Engineered high-performance dealership landing page with premium editorial aesthetics and responsive CSS animations.",
      "Integrated interactive inventory showroom filters and streamlined WhatsApp lead acquisition channels.",
    ],
    heroImage: "/img-data/Erdamotor/landing1.png",
    gallery: {
      full1: "/img-data/Erdamotor/landing1.png",
      twoUp1: "/img-data/Erdamotor/landing2.png",
      twoUp2: "/img-data/Erdamotor/landing3.png",
      full2: "/img-data/Erdamotor/landing4.png",
    },
    images: [
      "/img-data/Erdamotor/landing1.png",
      "/img-data/Erdamotor/landing2.png",
      "/img-data/Erdamotor/landing3.png",
      "/img-data/Erdamotor/landing4.png",
      "/img-data/Erdamotor/landing5.png",
      "/img-data/Erdamotor/landing6.png",
    ],
    tags: ["Paid Project", "Dealership UI", "Next.js", "Tailwind CSS"],
    isFeatured: true,
  },
  {
    id: "project-5",
    slug: "nanma-finance",
    title: "NANMA\nFINANCE",
    displayTitle: "NANMA FINANCE",
    year: "2024–2025",
    role: "Fullstack Developer",
    tools:
      "React 19, Express.js, Node.js, MongoDB, TypeScript, Tailwind CSS v4, Lenis",
    linkText: "github.com/Fizm00/nanma-financial-management",
    liveUrl: "https://github.com/Fizm00/nanma-financial-management",
    discipline: "PERSONAL FINANCE TERMINAL",
    indexDiscipline: "MERN finance terminal",
    summary:
      "High-precision personal finance terminal built with MERN Stack (MongoDB, Express.js, React 19, Node.js), TypeScript, Tailwind CSS v4, and Lenis smooth scrolling.",
    introParagraph:
      "A modern, high-precision personal financial management terminal built on the MERN stack (MongoDB, Express.js, React 19, Node.js), TypeScript, Tailwind CSS v4, and Lenis smooth scrolling. Designed for structured cash flow tracking, multi-account general ledger auditing, and real-time fiscal monitoring with terminal-grade precision.",
    outcomeNumber: "100%",
    outcomeTextBefore: "MAINTAINED STRICT RECONCILIATION ACCURACY AND",
    outcomeTextAfter:
      "AUDIT INTEGRITY ACROSS MULTI-ACCOUNT GENERAL LEDGERS AND FISCAL SUMMARIES.",
    description: [
      "Modern fullstack MERN architecture powered by React 19 and TypeScript for end-to-end fiscal accuracy.",
      "Features double-entry ledger audits, dynamic cash flow visualizations, and buttery-smooth Lenis scroll interactions.",
    ],
    heroImage: "/img-data/nanma-finance/landing.png",
    gallery: {
      full1: "/img-data/nanma-finance/landing.png",
      twoUp1: "/img-data/nanma-finance/dashboard1.png",
      twoUp2: "/img-data/nanma-finance/dashboard2.png",
      full2: "/img-data/nanma-finance/dashboard3.png",
    },
    images: [
      "/img-data/nanma-finance/landing.png",
      "/img-data/nanma-finance/dashboard1.png",
      "/img-data/nanma-finance/dashboard2.png",
      "/img-data/nanma-finance/dashboard3.png",
      "/img-data/nanma-finance/dashboard4.png",
      "/img-data/nanma-finance/loginregist.png",
    ],
    tags: ["MERN Stack", "React 19", "Personal Finance", "Tailwind CSS v4"],
    isFeatured: true,
  },
];
