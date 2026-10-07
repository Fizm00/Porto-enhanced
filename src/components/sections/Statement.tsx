import { useRef } from "react";
import { personalInfo } from "../../content/personal.ts";
import { gsap, useGSAP } from "../../lib/gsap.ts";
import { useReducedMotion } from "../../hooks/useReducedMotion.ts";

export function Statement() {
  const sectionRef = useRef<HTMLElement>(null);
  const unrevealedRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !unrevealedRef.current || !sectionRef.current) return;

      gsap.to(unrevealedRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 45%",
          end: "bottom 35%",
          scrub: true,
        },
        opacity: 1,
        ease: "none",
      });
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
  );

  return (
    <section
      ref={sectionRef}
      aria-label="Personal Statement"
      className="relative w-full min-h-screen flex flex-col justify-center bg-ink text-paper px-5 md:px-10 overflow-hidden select-none"
    >
      {/* 12-column grid layout container (max-w: 1360px, gap: 24px) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-[1360px] mx-auto items-center">
        {/* 10 columns left-aligned statement */}
        <div className="col-span-1 md:col-span-10">
          <h2 className="font-display font-extrabold uppercase text-[7.5vw] md:text-[6.8vw] leading-[0.94] tracking-normal [word-spacing:0.05em] text-left">
            <span className="text-paper">{personalInfo.statement.lead}</span>{" "}
            <span className="text-signal">{personalInfo.statement.keyword}</span>{" "}
            <span className="text-paper">{personalInfo.statement.revealed}</span>{" "}
            <span
              ref={unrevealedRef}
              className={`transition-opacity duration-300 ${
                reducedMotion
                  ? "opacity-100 text-paper"
                  : "text-paper/25"
              }`}
            >
              {personalInfo.statement.unrevealed}
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Statement;
