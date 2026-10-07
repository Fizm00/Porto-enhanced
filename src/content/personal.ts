export interface PersonalFact {
  title: string;
  detail: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  discipline: string;
  location: string;
  timezone: string;
  email: string;
  availability: string;
  availableDate: string;
  positioning: string;
  statement: {
    lead: string;
    keyword: string;
    revealed: string;
    dimmed: string;
    unrevealed: string;
    full: string;
  };
  bio: string[];
  facts: PersonalFact[];
}

export const personalInfo: PersonalInfo = {
  name: "Firza Himawan",
  role: "Software Engineer, Fullstack Developer",
  discipline: "Fullstack Engineering & Open Source",
  location: "Yogyakarta",
  timezone: "Asia/Jakarta",
  email: "himawanfirza21@gmail.com",
  availability: "Available March 2026",
  availableDate: "March 2026",
  positioning:
    "Software engineer specializing in high-performance web applications, scalable backend architectures, intelligent recommendation systems, and open-source developer tooling.",
  statement: {
    lead: "I BUILD SYSTEMS LIKE I TUNE HARDWARE:",
    keyword: "RELENTLESS",
    revealed:
      "ABOUT LATENCY, UNCOMPROMISING ON PRECISION. WHETHER SCALING RECOMMENDATION ENGINES IN NODE OR INSPECTING MONGOOSE QUERIES AT MIDNIGHT,",
    dimmed:
      "I CRAFT RESILIENT BACKENDS THAT NEVER CRUMBLE UNDER LOAD AND MAKE COMPLEX ARCHITECTURES LOOK EFFORTLESS.",
    unrevealed:
      "I CRAFT RESILIENT BACKENDS THAT NEVER CRUMBLE UNDER LOAD AND MAKE COMPLEX ARCHITECTURES LOOK EFFORTLESS.",
    full: "I BUILD SYSTEMS LIKE I TUNE HARDWARE: RELENTLESS ABOUT LATENCY, UNCOMPROMISING ON PRECISION. WHETHER SCALING RECOMMENDATION ENGINES IN NODE OR INSPECTING MONGOOSE QUERIES AT MIDNIGHT, I CRAFT RESILIENT BACKENDS THAT NEVER CRUMBLE UNDER LOAD AND MAKE COMPLEX ARCHITECTURES LOOK EFFORTLESS.",
  },
  bio: [
    "Software engineer and fullstack developer focused on low-latency web backends, intelligent recommendation systems, and developer productivity tooling.",
    "Creator of open-source projects including nano-recommender and Mongoosleuth, with extensive production experience in high-performance web architectures.",
  ],
  facts: [
    {
      title: "Precision Craft",
      detail:
        "Assembles Real Grade and Master Grade Gunpla kits, including the MG Freedom 2.0 and MG Hi-ν Gundam.",
    },
    {
      title: "Daily Transit",
      detail:
        "Maintains a regular 7 km round-trip walking routine between residence and Tugu Yogyakarta.",
    },
    {
      title: "Manual Extraction",
      detail:
        "Enjoys manual pour-over coffee (V60), particularly exploring flavor profiles of Temanggung Arabica and Pati Petik Merah beans.",
    },
    {
      title: "Acoustic Tuning",
      detail:
        "In-Ear Monitor (IEM) enthusiast who tunes custom parametric sound profiles via Equalizer APO.",
    },
  ],
};

export interface BeyondPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export interface BeyondBlock {
  title: string;
  paragraph: string;
}

export interface RightNowItem {
  label: string;
  value: string;
}

export interface BeyondContent {
  title: string;
  hobbies: string[];
  photos: BeyondPhoto[];
  blocks: BeyondBlock[];
  rightNow: {
    title: string;
    items: RightNowItem[];
  };
}

export const beyondContent: BeyondContent = {
  title: "Beyond the work",
  hobbies: ["GUNPLA", "YOGYAKARTA WALKS", "MANUAL POUR-OVER", "IEM TUNING"],
  photos: [
    {
      id: "photo-1",
      src: "/personal/gunpla.jpg",
      alt: "Gunpla cutting bench with mechanical kit pieces and precision nippers",
      caption: "Gunpla bench, Saturday mornings.",
    },
    {
      id: "photo-2",
      src: "/personal/tugu.jpg",
      alt: "Night walk pathway past Tugu Yogyakarta landmark",
      caption: "Night walk past Tugu, 7 km loop.",
    },
    {
      id: "photo-3",
      src: "/personal/coffee.jpg",
      alt: "Hand pour-over coffee dripper brewing single-origin coffee",
      caption: "Morning pour-over, Temanggung natural.",
    },
    {
      id: "photo-4",
      src: "/personal/iem.jpg",
      alt: "Custom braided IEM audio cable and machined brass acoustic nozzles",
      caption: "Braided IEM cable and brass nozzles.",
    },
    {
      id: "photo-5",
      src: "/personal/desk.jpg",
      alt: "Minimalist drafting desk with custom 68-key mechanical keyboard and drafting tools",
      caption: "Drafting desk and 68-key board.",
    },
  ],
  blocks: [
    {
      title: "PRECISION CRAFT",
      paragraph:
        "Precision mechanical modeling is my reset. When stepping away from codebases, I assemble Real Grade and Master Grade Gunpla kits—including the MG Freedom 2.0 and MG Hi-ν Gundam—spending forty hours calibrating joint tolerances and surface finishes.",
    },
    {
      title: "DAILY TRANSIT",
      paragraph:
        "Yogyakarta keeps my thinking grounded. A regular seven-kilometer round-trip walking routine between my residence and Tugu Yogyakarta clears out architectural bottlenecks before they ever reach production.",
    },
    {
      title: "ACOUSTICS & EXTRACTION",
      paragraph:
        "Dialing in nuance: brewing manual V60 pour-overs with Temanggung Arabica and Pati Petik Merah beans, while tuning custom parametric EQ sound profiles via Equalizer APO for high-resolution IEM listening sessions.",
    },
  ],
  rightNow: {
    title: "RIGHT NOW",
    items: [
      { label: "Brewing", value: "Temanggung Arabica & Pati Petik Merah" },
      { label: "Listening", value: "Custom IEM profile via Equalizer APO" },
      { label: "Building", value: "MG Hi-ν Gundam armor assembly" },
    ],
  },
};
