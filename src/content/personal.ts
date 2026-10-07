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
  availability: "[PLACEHOLDER]", // e.g. "Available for select commissions starting Q2."
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
