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
  availability: "Available Now",
  availableDate: "Now",
  positioning:
    "Software engineer specializing in high-performance web applications, scalable backend architectures, intelligent recommendation systems, and open-source developer tooling.",
  statement: {
    lead: "I'm a",
    keyword: "software engineer",
    revealed:
      "in Yogyakarta. I work across the stack: React and Next.js up front, Node and Postgres behind it, Python when the problem is data.",
    dimmed:
      "I like projects where I get to see the whole thing work, from the button to the database.",
    unrevealed:
      "I like projects where I get to see the whole thing work, from the button to the database.",
    full: "I'm a software engineer in Yogyakarta. I work across the stack: React and Next.js up front, Node and Postgres behind it, Python when the problem is data. I like projects where I get to see the whole thing work, from the button to the database.",
  },
  bio: [
    "Software engineer and fullstack developer focusing on low-latency web backends, intelligent recommendation systems, and developer productivity tooling.",
    "Creator of open-source projects including nano-recommender and Mongoosleuth, with comprehensive production experience across high-performance web architectures.",
  ],
  facts: [
    {
      title: "Precision Craft",
      detail:
        "Building Real Grade and Master Grade Gunpla model kits, including MG Freedom 2.0 and MG Hi-ν Gundam.",
    },
    {
      title: "Daily Transit",
      detail:
        "Walking a regular 7 km round-trip loop between home and Tugu Yogyakarta.",
    },
    {
      title: "Manual Extraction",
      detail:
        "Brewing manual pour-over coffee (V60), dialing in single-origin Temanggung Arabica and Pati Petik Merah roast profiles.",
    },
    {
      title: "Acoustic Tuning",
      detail:
        "In-Ear Monitor enthusiast dialing in custom parametric EQ profiles via Equalizer APO.",
    },
  ],
};

export interface BeyondPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export interface BeyondChapter {
  id: string;
  title: string;
  subtitle?: string;
  paragraph: string;
}

export interface RightNowItem {
  label: string;
  value: string;
}

export interface BeyondContent {
  title: string;
  subtitle: string;
  photos: {
    gunpla: BeyondPhoto;
    tugu: BeyondPhoto;
    desk: BeyondPhoto;
    coffee: BeyondPhoto;
    iem: BeyondPhoto;
  };
  chapters: BeyondChapter[];
  rightNow: {
    title: string;
    items: RightNowItem[];
  };
}

export const beyondContent: BeyondContent = {
  title: "Beyond the work",
  subtitle: "What I do when the laptop is closed.",
  photos: {
    gunpla: {
      id: "photo-gunpla",
      src: "/personal/gunpla.jpg",
      alt: "Gunpla cutting bench with mechanical kit parts and precision nippers",
      caption: "Gunpla cutting bench on Saturday mornings.",
    },
    tugu: {
      id: "photo-tugu",
      src: "/personal/tugu.jpg",
      alt: "Night walk pathway past Tugu Yogyakarta landmark",
      caption: "Late night walk past Tugu, 7 km loop.",
    },
    desk: {
      id: "photo-desk",
      src: "/personal/desk.jpg",
      alt: "Minimalist workspace desk with custom 68-key mechanical keyboard and drafting tools",
      caption: "Work desk and 68-key custom board.",
    },
    coffee: {
      id: "photo-coffee",
      src: "/personal/coffee.jpg",
      alt: "Manual pour-over coffee dripper extracting single-origin beans",
      caption: "Morning pour-over, Temanggung natural.",
    },
    iem: {
      id: "photo-iem",
      src: "/personal/iem.jpg",
      alt: "Braided custom audio IEM cable and machined brass acoustic nozzles",
      caption: "Braided IEM cable and brass nozzles.",
    },
  },
  chapters: [
    {
      id: "chapter-gunpla",
      title: "GUNPLA",
      paragraph:
        "Precision mechanical modeling is how I reset between coding sessions. I assemble Real Grade and Master Grade Gunpla kits, calibrating joint tolerances and surface finishes.",
    },
    {
      id: "chapter-tugu",
      title: "WALKING TO TUGU",
      paragraph:
        "Yogyakarta keeps my head clear every evening. A routine seven-kilometer round-trip walk to Tugu unwinds complex architectural knots before shipping to production.",
    },
    {
      id: "chapter-coffee-iem",
      title: "COFFEE & IEMS",
      paragraph:
        "Dialing in nuances through manual pour-overs and acoustic tuning. Savoring Temanggung beans while tuning high-resolution audio profiles in Equalizer APO.",
    },
  ],
  rightNow: {
    title: "RIGHT NOW",
    items: [
      { label: "Brewing", value: "Temanggung Arabica & Pati Petik Merah" },
      { label: "Listening", value: "Custom IEM profiles via Equalizer APO" },
      { label: "Building", value: "MG Hi-ν Gundam outer armor assembly" },
    ],
  },
};
