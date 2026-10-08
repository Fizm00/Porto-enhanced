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
  availability: string;
  year: number;
  navLinks: NavLink[];
  socialLinks: {
    github: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    whatsapp: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Firza Himawan",
  title: "Firza Himawan — Software Engineer",
  tagline: "A loud, fast, human portfolio.",
  description:
    "Software engineer specializing in high-performance web applications, scalable backend architectures, intelligent recommendation systems, and open-source developer tooling.",
  location: "Yogyakarta",
  coordinates: "-7.7956° S, 110.3695° E",
  availability: "I'm taking on one new project from July.",
  year: 2026,
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: {
    github: "https://github.com/Fizm00",
    twitter: "https://erdamotor.id",
    linkedin: "https://linkedin.com/in/firzahimawan",
    instagram: "https://erdamotor.id",
    whatsapp: "https://wa.me/6281320732375",
  },
};
