import React, { useState } from "react";
import {
  skills,
  skillCategories,
  skillCategoryLabels,
  projectSlugToName,
  type Skill,
  type SkillCategory,
} from "../../content/skills.ts";

export interface SkillsProps {
  className?: string;
}

export const Skills: React.FC<SkillsProps> = ({ className = "" }) => {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const handleMouseEnter = (skill: Skill) => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      setHoveredSkill(skill);
    }
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section
      id="skills"
      className={`w-full bg-ink text-paper py-20 lg:py-[160px] select-none ${className}`}
      style={{ backgroundColor: "#0E0E0E", color: "#F2EFE8" }}
      aria-label="What I build with"
    >
      <div className="w-full px-5 md:px-10">
        {/* =========================================================================
            TITLE ROW (12-column grid across full viewport width)
            Columns 1-7: "What I build with" in Big Shoulders Display 900 (~10vw), paper
            Columns 8-12: Subtitle in Instrument Sans 22px, paper 70%
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 items-end mb-10 lg:mb-[64px]">
          <div className="lg:col-span-7">
            <h2 className="font-display font-black text-[clamp(36px,9.6vw,180px)] uppercase leading-[0.88] tracking-tight text-paper text-left">
              What I build with
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 mt-3 lg:mt-0 lg:pb-3">
            <p className="font-body text-[16px] sm:text-[18px] lg:text-[22px] leading-[1.45] text-paper/70 font-normal">
              Brighter means daily. Dimmer means I've shipped with it.
            </p>
          </div>
        </div>

        {/* =========================================================================
            FOUR CATEGORY ROWS (64px below title, margin to margin)
            Separated by 1px rules (border-paper/20) above, between, and below
            Vertical padding per row: 40px (py-[40px])
            ========================================================================= */}
        <div className="border-t border-paper/20 w-full">
          {skillCategories.map((category: SkillCategory) => {
            const categorySkills = skills.filter((s) => s.category === category);
            const isCategoryHovered =
              hoveredSkill &&
              hoveredSkill.category === category &&
              hoveredSkill.usedIn &&
              hoveredSkill.usedIn.length > 0;

            const usedInText = isCategoryHovered
              ? `Used in ${hoveredSkill.usedIn
                  .map((slug) => projectSlugToName[slug] || slug)
                  .join(", ")}`
              : "";

            return (
              <div
                key={category}
                className="relative border-b border-paper/20 py-6 sm:py-8 lg:py-[40px]"
              >
                {/* Desktop top-right contextual indicator: DM Mono 14px, stone, zero layout shift */}
                <div
                  aria-hidden="true"
                  className={`hidden lg:block absolute top-3 lg:top-4 right-0 pointer-events-none select-none text-right font-mono text-[14px] text-stone transition-opacity duration-200 ${
                    usedInText ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {usedInText}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-3 sm:gap-y-4 items-start">
                  {/* Columns 1-3: Category name (Instrument Sans 22px, paper 70%) */}
                  <div className="lg:col-span-3">
                    <h3 className="font-body text-[16px] sm:text-[18px] lg:text-[22px] leading-[1.4] text-paper/70 font-normal">
                      {skillCategoryLabels[category] || category}
                    </h3>
                  </div>

                  {/* Columns 4-12: Display items (Big Shoulders Display 800, uppercase, ~64px, leading 0.95) */}
                  <div className="lg:col-span-9">
                    <p className="font-display font-extrabold text-[26px] sm:text-[36px] lg:text-[64px] uppercase leading-[0.95] tracking-tight">
                      {categorySkills.map((skill, index) => {
                        const isHovered = hoveredSkill?.name === skill.name;
                        const isLast = index === categorySkills.length - 1;

                        return (
                          <React.Fragment key={skill.name}>
                            <span
                              onMouseEnter={() => handleMouseEnter(skill)}
                              onMouseLeave={handleMouseLeave}
                              className={`inline cursor-default transition-colors duration-200 ${
                                isHovered
                                  ? "text-signal"
                                  : skill.daily
                                  ? "text-paper lg:hover:text-signal"
                                  : "text-paper/40 lg:hover:text-signal"
                              }`}
                            >
                              {skill.name}
                            </span>
                            {!isLast && (
                              <span className="text-paper/40 select-none">, </span>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
