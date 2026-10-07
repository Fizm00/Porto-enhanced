import React from "react";
import { skillCategories } from "../../content/skills.ts";
import { TechLogo } from "../ui/TechLogos.tsx";

export interface SkillsProps {
  className?: string;
}

export const Skills: React.FC<SkillsProps> = ({ className = "" }) => {
  const [catLanguages, catFrameworks, catData, catTooling] = skillCategories;

  return (
    <section
      id="skills"
      className={`relative w-full text-paper py-24 md:py-32 select-none overflow-hidden ${className}`}
      style={{ backgroundColor: "#0E0E0E", color: "#F2EFE8" }}
      aria-label="Skills & Capabilities"
    >
      {/* Background Video with Dark Aesthetic Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center filter brightness-[0.5] contrast-[1.1]"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_084718_72a17915-4964-4059-afcd-22d59399b72e.mp4"
            type="video/mp4"
          />
        </video>
        {/* Layered dark ink overlays for deep mood and maximum text legibility */}
        <div className="absolute inset-0 bg-ink/65" />
        
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-10">
        {/* SECTION TITLE */}
        <div className="w-full mb-12 md:mb-16">
          <h2 className="font-display font-black text-paper text-[10vw] uppercase leading-[0.85] tracking-tight">
            CAPABILITIES
          </h2>
        </div>

        {/* =========================================================================
            BENTO GRID (Asymmetrical 2x2: Wide + Narrow / Narrow + Wide)
            Dark background with crisp 1px hairline rules and real official tech logos
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          {/* -----------------------------------------------------------------------
              BLOCK 1 (WIDE: 8 COLS): Languages & Runtimes
              ----------------------------------------------------------------------- */}
          <div className="lg:col-span-8 bg-ink/75 border border-paper/15 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-extrabold text-[32px] sm:text-[38px] uppercase leading-none text-paper mb-6">
                {catLanguages.title}
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {catLanguages.skills.map((skill) => (
                <a
                  key={skill.name}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3.5 border border-paper/10 hover:border-signal bg-paper/[0.02] hover:bg-paper/[0.05] transition-all duration-150"
                >
                  <span className="text-paper/80 group-hover:text-signal transition-colors duration-150 shrink-0">
                    <TechLogo name={skill.name} size={20} />
                  </span>
                  <span className="font-mono text-[14px] text-paper group-hover:text-signal transition-colors duration-150 truncate">
                    {skill.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              BLOCK 2 (NARROW: 4 COLS): Frameworks & Web
              ----------------------------------------------------------------------- */}
          <div className="lg:col-span-4 bg-ink/75 border border-paper/15 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-extrabold text-[32px] sm:text-[38px] uppercase leading-none text-paper mb-6">
                {catFrameworks.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 pt-2">
              {catFrameworks.skills.map((skill) => (
                <a
                  key={skill.name}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3.5 border border-paper/10 hover:border-signal bg-paper/[0.02] hover:bg-paper/[0.05] transition-all duration-150"
                >
                  <span className="text-paper/80 group-hover:text-signal transition-colors duration-150 shrink-0">
                    <TechLogo name={skill.name} size={20} />
                  </span>
                  <span className="font-mono text-[14px] text-paper group-hover:text-signal transition-colors duration-150 truncate">
                    {skill.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              BLOCK 3 (NARROW: 4 COLS): Databases & Machine Learning
              ----------------------------------------------------------------------- */}
          <div className="lg:col-span-4 bg-ink/75 border border-paper/15 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-extrabold text-[32px] sm:text-[38px] uppercase leading-none text-paper mb-6">
                {catData.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 pt-2">
              {catData.skills.map((skill) => (
                <a
                  key={skill.name}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3.5 border border-paper/10 hover:border-signal bg-paper/[0.02] hover:bg-paper/[0.05] transition-all duration-150"
                >
                  <span className="text-paper/80 group-hover:text-signal transition-colors duration-150 shrink-0">
                    <TechLogo name={skill.name} size={20} />
                  </span>
                  <span className="font-mono text-[14px] text-paper group-hover:text-signal transition-colors duration-150 truncate">
                    {skill.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              BLOCK 4 (WIDE: 8 COLS): Tooling & DevOps
              ----------------------------------------------------------------------- */}
          <div className="lg:col-span-8 bg-ink/75 border border-paper/15 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-extrabold text-[32px] sm:text-[38px] uppercase leading-none text-paper mb-6">
                {catTooling.title}
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {catTooling.skills.map((skill) => (
                <a
                  key={skill.name}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3.5 border border-paper/10 hover:border-signal bg-paper/[0.02] hover:bg-paper/[0.05] transition-all duration-150"
                >
                  <span className="text-paper/80 group-hover:text-signal transition-colors duration-150 shrink-0">
                    <TechLogo name={skill.name} size={20} />
                  </span>
                  <span className="font-mono text-[14px] text-paper group-hover:text-signal transition-colors duration-150 truncate">
                    {skill.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
