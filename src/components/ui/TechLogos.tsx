import React from "react";
import StackIcon, { type IconName } from "tech-stack-icons";

export interface TechLogoProps {
  name: string;
  className?: string;
  size?: number;
  variant?: "light" | "dark" | "grayscale";
  style?: React.CSSProperties;
}

// Normalized lookup map from skill aliases to tech-stack-icons IconName
const ICON_MAP: Record<string, IconName> = {
  // Languages & Runtimes
  typescript: "typescript",
  ts: "typescript",
  javascript: "js",
  js: "js",
  nodejs: "nodejs",
  node: "nodejs",
  python: "python",
  py: "python",
  java: "java",
  kotlin: "kotlin",
  php: "php",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",

  // Frameworks & Web
  react: "react",
  reactjs: "react",
  nextjs: "nextjs",
  next: "nextjs",
  expressjs: "expressjs",
  express: "expressjs",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap5",
  bootstrap4: "bootstrap4",
  bootstrap5: "bootstrap5",
  streamlit: "streamlit",

  // Databases & Machine Learning
  mongodb: "mongodb",
  mongoose: "mongoose",
  postgresql: "postgresql",
  postgres: "postgresql",
  redis: "redis",
  pytorch: "pytorch",
  tensorflow: "tensorflow",

  // Tooling & DevOps
  git: "git",
  github: "github",
  postman: "postman",
  docker: "docker",
  figma: "figma",
  linux: "linux",
  bash: "bash",
  restapis: "openapi",
  restapi: "openapi",
  rest: "openapi",
  api: "openapi",
  openapi: "openapi",
  swagger: "swagger",
  vite: "vitejs",
  vitejs: "vitejs",
  three: "threejs",
  threejs: "threejs",
  graphql: "graphql",
};

export const TechLogo: React.FC<TechLogoProps> = ({
  name,
  className = "w-5 h-5",
  size = 20,
  variant = "dark",
  style,
}) => {
  const norm = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  const iconName: IconName = ICON_MAP[norm] || (norm as IconName);

  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size, ...style }}
    >
      <StackIcon
        name={iconName}
        variant={variant}
        className="w-full h-full"
      />
    </span>
  );
};

export default TechLogo;
