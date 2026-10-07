import { useRef } from "react";
import { personalInfo } from "../../content/personal.ts";
import { gsap, useGSAP } from "../../lib/gsap.ts";
import { useReducedMotion } from "../../hooks/useReducedMotion.ts";

export function Statement() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const reducedMotion = useReducedMotion();

  // Words that animate from 0.25 to 1.0 on scroll
  const dimmedWords = personalInfo.statement.dimmed.split(" ");

  useGSAP(
    () => {
      if (reducedMotion) return;

      const dimmedWordElements = sectionRef.current?.querySelectorAll(".dimmed-word");
      if (!dimmedWordElements || dimmedWordElements.length === 0) return;

      gsap.to(dimmedWordElements, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          end: "bottom 30%",
          scrub: 0.5,
        },
        opacity: 1,
        stagger: 0.05,
        ease: "none",
      });
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
  );

  return (
    <section
      ref={sectionRef}
      aria-label="Personal Statement"
      className="relative w-full min-h-screen flex items-center bg-ink text-paper px-5 md:px-10 py-16 md:py-20 select-none overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Left-aligned within 10 columns (max-w-[83.333%] of 12 cols) */}
        <h2
          ref={textRef}
          className="font-display font-extrabold uppercase leading-[0.92] text-[7.5vw] sm:text-[6.8vw] md:text-[6.1vw] lg:text-[6.2vw] tracking-normal text-left max-w-full lg:max-w-[88%]"
        >
          {/* First 60% words: Full Paper */}
          <span className="text-paper">{personalInfo.statement.lead} </span>

          {/* Exactly ONE keyword in Signal (#FF4A1C) */}
          <span className="text-signal">{personalInfo.statement.keyword} </span>

          {/* Remaining of initial 60%: Full Paper */}
          <span className="text-paper">{personalInfo.statement.revealed} </span>

          {/* Remaining 40% words: Paper at 25% opacity for scroll reveal */}
          {dimmedWords.map((word, index) => (
            <span
              key={`dimmed-${index}`}
              className={`dimmed-word inline-block ${
                reducedMotion ? "opacity-100 text-paper" : "opacity-25 text-paper"
              }`}
            >
              {word}
              {index < dimmedWords.length - 1 ? "\u00A0" : ""}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}

export default Statement;
