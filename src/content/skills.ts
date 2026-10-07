export interface SkillItem {
  name: string;
  url: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "LANGUAGES & RUNTIMES",
    skills: [
      { name: "TypeScript", url: "https://www.typescriptlang.org/" },
      { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Node.js", url: "https://nodejs.org/" },
      { name: "Python", url: "https://www.python.org/" },
      { name: "Java", url: "https://www.oracle.com/java/" },
      { name: "Kotlin", url: "https://kotlinlang.org/" },
      { name: "PHP", url: "https://www.php.net/" },
      { name: "HTML5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    ],
  },
  {
    title: "FRAMEWORKS & WEB",
    skills: [
      { name: "React", url: "https://reactjs.org/" },
      { name: "Next.js", url: "https://nextjs.org/" },
      { name: "Express.js", url: "https://expressjs.com/" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
      { name: "Bootstrap", url: "https://getbootstrap.com/" },
      { name: "Streamlit", url: "https://streamlit.io/" },
    ],
  },
  {
    title: "DATABASES & MACHINE LEARNING",
    skills: [
      { name: "MongoDB", url: "https://www.mongodb.com/" },
      { name: "Mongoose", url: "https://mongoosejs.com/" },
      { name: "PostgreSQL", url: "https://www.postgresql.org/" },
      { name: "Redis", url: "https://redis.io/" },
      { name: "PyTorch", url: "https://pytorch.org/" },
      { name: "TensorFlow", url: "https://www.tensorflow.org/" },
    ],
  },
  {
    title: "TOOLING & DEVOPS",
    skills: [
      { name: "Git", url: "https://git-scm.com/" },
      { name: "Postman", url: "https://www.postman.com/" },
      { name: "Docker", url: "https://www.docker.com/" },
      { name: "Figma", url: "https://www.figma.com/" },
      { name: "Linux", url: "https://www.linux.org/" },
      { name: "REST APIs", url: "https://restfulapi.net/" },
    ],
  },
];
