export interface Project {
  id: string;
  slug: string;
  title: string;
  year: string;
  role: string;
  discipline: string;
  summary: string;
  description: string[];
  heroImage: string;
  images: string[];
  liveUrl?: string;
  tags: string[];
  isFeatured: boolean;
}

export const projects: Project[] = [
  {
    id: "project-1",
    slug: "placeholder-project-1",
    title: "[PLACEHOLDER PROJECT 1]",
    year: "2026",
    role: "[PLACEHOLDER ROLE]",
    discipline: "[PLACEHOLDER DISCIPLINE]",
    summary: "[PLACEHOLDER SUMMARY]",
    description: [
      "[PLACEHOLDER DESCRIPTION PARAGRAPH 1]",
      "[PLACEHOLDER DESCRIPTION PARAGRAPH 2]",
    ],
    heroImage: "/placeholder-hero-1.webp",
    images: ["/placeholder-1.webp"],
    liveUrl: "[PLACEHOLDER]",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    isFeatured: true,
  },
  {
    id: "project-2",
    slug: "placeholder-project-2",
    title: "[PLACEHOLDER PROJECT 2]",
    year: "2025",
    role: "[PLACEHOLDER ROLE]",
    discipline: "[PLACEHOLDER DISCIPLINE]",
    summary: "[PLACEHOLDER SUMMARY]",
    description: [
      "[PLACEHOLDER DESCRIPTION PARAGRAPH 1]",
      "[PLACEHOLDER DESCRIPTION PARAGRAPH 2]",
    ],
    heroImage: "/placeholder-hero-2.webp",
    images: ["/placeholder-2.webp"],
    liveUrl: "[PLACEHOLDER]",
    tags: ["Web Design", "GSAP", "Creative Development"],
    isFeatured: true,
  },
  {
    id: "project-3",
    slug: "placeholder-project-3",
    title: "[PLACEHOLDER PROJECT 3]",
    year: "2025",
    role: "[PLACEHOLDER ROLE]",
    discipline: "[PLACEHOLDER DISCIPLINE]",
    summary: "[PLACEHOLDER SUMMARY]",
    description: [
      "[PLACEHOLDER DESCRIPTION PARAGRAPH 1]",
    ],
    heroImage: "/placeholder-hero-3.webp",
    images: ["/placeholder-3.webp"],
    liveUrl: "[PLACEHOLDER]",
    tags: ["Frontend Architecture", "Performance"],
    isFeatured: false,
  },
];
