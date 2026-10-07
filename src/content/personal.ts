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
  role: "[PLACEHOLDER]",
  discipline: "[PLACEHOLDER]",
  location: "Yogyakarta",
  timezone: "Asia/Jakarta",
  email: "[PLACEHOLDER]", // e.g. "firza@example.com"
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
    full:
      "I BUILD SYSTEMS LIKE I TUNE HARDWARE: RELENTLESS ABOUT LATENCY, UNCOMPROMISING ON PRECISION. WHETHER SCALING RECOMMENDATION ENGINES IN NODE OR INSPECTING MONGOOSE QUERIES AT MIDNIGHT, I CRAFT RESILIENT BACKENDS THAT NEVER CRUMBLE UNDER LOAD AND MAKE COMPLEX ARCHITECTURES LOOK EFFORTLESS.",
  },
  bio: [
    "[PLACEHOLDER]",
    "[PLACEHOLDER]",
  ],
  facts: [
    {
      title: "[PLACEHOLDER]",
      detail: "[PLACEHOLDER]",
    },
    {
      title: "[PLACEHOLDER]",
      detail: "[PLACEHOLDER]",
    },
  ],
};
