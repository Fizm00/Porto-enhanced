export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  description: string;
  location: string;
  coordinates: string;
  year: number;
  navLinks: NavLink[];
  socialLinks: {
    github: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Firza Himawan",
  title: "Firza Himawan — Portfolio",
  tagline: "A loud, fast, human portfolio.",
  description:
    "A loud, fast, human portfolio. Giant condensed type, paper and ink bands, one signal color. Editorial and broadcast energy, never a SaaS template.",
  location: "Yogyakarta",
  coordinates: "[PLACEHOLDER]", // e.g. -7.7956° S, 110.3695° E
  year: 2026,
  navLinks: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
  socialLinks: {
    github: "[PLACEHOLDER]",
    twitter: "[PLACEHOLDER]",
    linkedin: "[PLACEHOLDER]",
    instagram: "[PLACEHOLDER]",
  },
};
