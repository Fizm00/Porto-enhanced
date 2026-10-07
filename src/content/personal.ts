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
    tail: string;
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
    lead: "[PLACEHOLDER]",
    keyword: "[PLACEHOLDER]", // single statement keyword rendered in Signal color
    tail: "[PLACEHOLDER]",
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
