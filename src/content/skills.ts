export type SkillCategory = "Languages" | "Frameworks" | "Data" | "Tooling";

export interface Skill {
  name: string;
  category: SkillCategory;
  daily: boolean;
  usedIn: string[];
}

export const skills: Skill[] = [
  // ── Languages & Runtimes ──────────────────────────────────────────────────
  {
    name: "TypeScript",
    category: "Languages",
    daily: true,
    usedIn: ["recovila", "nano-recommender", "mongoosleuth", "erdamotor"],
  },
  {
    name: "JavaScript",
    category: "Languages",
    daily: true,
    usedIn: ["nanma-finance"],
  },
  {
    name: "Node.js",
    category: "Languages",
    daily: true,
    usedIn: ["recovila", "nano-recommender", "mongoosleuth", "nanma-finance"],
  },
  {
    name: "Python",
    category: "Languages",
    daily: true,
    usedIn: ["recovila"],
  },
  {
    name: "Java",
    category: "Languages",
    daily: false, // [PLACEHOLDER]
    usedIn: [], // [PLACEHOLDER]
  },
  {
    name: "Kotlin",
    category: "Languages",
    daily: false, // [PLACEHOLDER]
    usedIn: [], // [PLACEHOLDER]
  },
  {
    name: "PHP",
    category: "Languages",
    daily: false, // [PLACEHOLDER]
    usedIn: [], // [PLACEHOLDER]
  },
  {
    name: "HTML5",
    category: "Languages",
    daily: true,
    usedIn: ["erdamotor", "nanma-finance", "recovila"],
  },
  {
    name: "CSS3",
    category: "Languages",
    daily: true,
    usedIn: ["erdamotor", "nanma-finance", "recovila"],
  },

  // ── Frameworks & Web ───────────────────────────────────────────────────────
  {
    name: "React",
    category: "Frameworks",
    daily: true,
    usedIn: ["nanma-finance"],
  },
  {
    name: "Next.js",
    category: "Frameworks",
    daily: true,
    usedIn: ["recovila", "erdamotor"],
  },
  {
    name: "Express.js",
    category: "Frameworks",
    daily: true,
    usedIn: ["nanma-finance"],
  },
  {
    name: "Tailwind CSS",
    category: "Frameworks",
    daily: true,
    usedIn: ["erdamotor", "nanma-finance"],
  },
  {
    name: "Bootstrap",
    category: "Frameworks",
    daily: false, // [PLACEHOLDER]
    usedIn: [], // [PLACEHOLDER]
  },
  {
    name: "Streamlit",
    category: "Frameworks",
    daily: false, // [PLACEHOLDER]
    usedIn: [], // [PLACEHOLDER]
  },

  // ── Data & ML ─────────────────────────────────────────────────────────────
  {
    name: "MongoDB",
    category: "Data",
    daily: true,
    usedIn: ["mongoosleuth"],
  },
  {
    name: "Mongoose",
    category: "Data",
    daily: true,
    usedIn: ["mongoosleuth"],
  },
  {
    name: "PostgreSQL",
    category: "Data",
    daily: true,
    usedIn: ["nanma-finance"],
  },
  {
    name: "Redis",
    category: "Data",
    daily: true,
    usedIn: ["recovila"],
  },
  {
    name: "PyTorch",
    category: "Data",
    daily: false, // [PLACEHOLDER]
    usedIn: [], // [PLACEHOLDER]
  },
  {
    name: "TensorFlow",
    category: "Data",
    daily: false, // [PLACEHOLDER]
    usedIn: [], // [PLACEHOLDER]
  },

  // ── Tooling & DevOps ──────────────────────────────────────────────────────
  {
    name: "Git",
    category: "Tooling",
    daily: true,
    usedIn: ["recovila", "nano-recommender", "mongoosleuth", "erdamotor", "nanma-finance"],
  },
  {
    name: "Postman",
    category: "Tooling",
    daily: true,
    usedIn: ["recovila", "erdamotor", "nanma-finance"],
  },
  {
    name: "Docker",
    category: "Tooling",
    daily: false, // [PLACEHOLDER]
    usedIn: [], // [PLACEHOLDER]
  },
  {
    name: "Figma",
    category: "Tooling",
    daily: false, // [PLACEHOLDER]
    usedIn: ["erdamotor"],
  },
  {
    name: "Linux",
    category: "Tooling",
    daily: true, // [PLACEHOLDER]
    usedIn: [], // [PLACEHOLDER]
  },
  {
    name: "REST APIs",
    category: "Tooling",
    daily: true,
    usedIn: ["erdamotor", "recovila"],
  },
];

export const skillCategories: SkillCategory[] = [
  "Languages",
  "Frameworks",
  "Data",
  "Tooling",
];

export const skillCategoryLabels: Record<SkillCategory, string> = {
  Languages: "Languages",
  Frameworks: "Frameworks",
  Data: "Data",
  Tooling: "Tooling",
};

export const projectSlugToName: Record<string, string> = {
  "recovila": "Recovila",
  "nano-recommender": "Nano-Recommender",
  "mongoosleuth": "Mongoosleuth",
  "erdamotor": "Erdamotor",
  "nanma-finance": "Nanma Finance",
};
