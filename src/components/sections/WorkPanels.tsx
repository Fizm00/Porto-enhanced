import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap.ts";
import { projects, type Project } from "../../content/projects.ts";

export interface WorkPanelsProps {
  forcedFrame?: "a" | "b";
  className?: string;
}

export function WorkPanels({ forcedFrame, className = "" }: WorkPanelsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [transitionProgress, setTransitionProgress] = useState(0); // 0 to 1 between current and next project

  // Query parameter detection (?frame=a or ?frame=b)
  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  const frameQuery = searchParams?.get("frame");
  const effectiveFrame = forcedFrame || (frameQuery === "a" || frameQuery === "b" ? frameQuery : null);

  const isFrameA = effectiveFrame === "a";
  const isFrameB = effectiveFrame === "b";

  // When forcedFrame is set, we freeze on that specific state
  const isForced = isFrameA || isFrameB;

  // Project 1 and Project 2 for the transition
  const project1 = projects[0] || ({} as Project);
  const project2 = projects[1] || ({} as Project);

  // In Frame B: left 55% is Project 1, right 45% is Project 2
  // That means Project 2 clips from 55% to 100% (inset: top 0, right 0, bottom 0, left 55%)
  const frameBSplitPercent = 55;

  useGSAP(
    () => {
      if (isForced) return;

      const container = containerRef.current;
      if (!container) return;

      const panels = container.querySelectorAll<HTMLElement>(".work-panel-layer");
      if (panels.length <= 1) return;

      // Create a master pinned scrub timeline
      const totalTransitions = panels.length - 1;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${totalTransitions * 240}vh`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          onUpdate: (self) => {
            const overallProgress = self.progress * totalTransitions;
            const currentIndex = Math.min(
              Math.floor(overallProgress),
              totalTransitions - 1
            );
            const subProgress = overallProgress - currentIndex;

            setActiveProjectIndex(currentIndex);
            setTransitionProgress(subProgress);
          },
        },
      });

      // Animate hard vertical curtain clip-path for each panel
      // Panel 0 is the base. Panel 1 wipes over it from right (100% -> 0%), holds, then Panel 2 over Panel 1, etc.
      panels.forEach((panel, i) => {
        if (i === 0) return; // Panel 0 is base
        tl.fromTo(
          panel,
          {
            clipPath: "inset(0% 0% 0% 100%)", // hidden to the right
          },
          {
            clipPath: "inset(0% 0% 0% 0%)", // fully revealed
            ease: "none",
            duration: 1,
          }
        );
        // Hold stationary on current panel before next transition starts
        tl.to({}, { duration: 0.6 });
      });
    },
    { scope: containerRef, dependencies: [isForced] }
  );

  return (
    <section
      ref={containerRef}
      id="work"
      className={`relative w-full h-screen overflow-hidden bg-ink text-paper select-none ${className}`}
      style={{ minHeight: "900px" }}
      aria-label="Selected Work"
    >
      {/* =========================================================================
          FRAME A (Static) OR DYNAMIC INTERACTIVE BASE: PANEL 1
          ========================================================================= */}
      <div
        className="work-panel-layer absolute inset-0 w-full h-full z-10"
        style={
          isFrameB
            ? {
                // In Frame B: left 55% is Project 1
                clipPath: `inset(0% ${100 - frameBSplitPercent}% 0% 0%)`,
              }
            : undefined
        }
      >
        {/* Full-bleed high contrast project image */}
        <img
          src={project1.heroImage}
          alt={project1.title}
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-95"
          loading="eager"
        />

        {/* Top-Left: Numbering & Section Name */}
        <div className="absolute top-8 md:top-10 left-8 md:left-12 z-20">
          <span className="font-mono text-[13px] md:text-[14px] tracking-[0.2em] text-paper uppercase select-none">
            01 / 05 — SELECTED WORK
          </span>
        </div>

        {/* Left Edge: Rotated Discipline / Category */}
        <div className="hidden lg:block absolute left-8 md:left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-left z-20 pointer-events-none">
          <span className="font-mono text-[11px] md:text-[12px] tracking-[0.22em] text-paper/80 uppercase select-none whitespace-nowrap">
            {project1.discipline}
          </span>
        </div>

        {/* Top-Right: Year & Role in DM Mono */}
        <div className="absolute top-8 md:top-10 right-14 md:right-16 z-20 text-right font-mono text-[13px] md:text-[14px] text-paper tracking-[0.14em] leading-[1.4] select-none">
          <div>{project1.year}</div>
          <div>{project1.role}</div>
        </div>

        {/* Bottom-Left: Project Title (Overlapping Image in Display Type ~14vw) */}
        <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 z-20 max-w-[85vw] pointer-events-none select-none">
          <h2 className="font-display font-black text-paper text-[clamp(64px,14vw,196px)] leading-[0.84] tracking-[-0.03em] uppercase">
            {project1.title}
          </h2>
        </div>

        {/* Bottom-Right: "View project" Text Link */}
        <div className="absolute bottom-10 md:bottom-14 right-14 md:right-16 z-20">
          <a
            href={`/work/${project1.slug}`}
            className="font-mono text-[13px] md:text-[14px] tracking-[0.16em] uppercase text-paper hover:text-signal transition-colors duration-150 inline-block border-b-2 border-paper hover:border-signal pb-0.5 select-none"
          >
            VIEW PROJECT
          </a>
        </div>
      </div>

      {/* =========================================================================
          FRAME B: PANEL 2 REVEALED ON RIGHT (45% in Frame B, or animated scrub)
          ========================================================================= */}
      {(isFrameB || (!isForced && projects.length > 1)) && (
        <div
          className={`work-panel-layer absolute inset-0 w-full h-full z-20 ${
            isFrameB ? "" : "pointer-events-none"
          }`}
          style={{
            // Hard vertical straight edge, perfectly straight, no feather, no blur
            clipPath: isFrameB
              ? `inset(0% 0% 0% ${frameBSplitPercent}%)`
              : undefined,
          }}
        >
          {/* Full-bleed high contrast project image 2 */}
          <img
            src={project2.heroImage}
            alt={project2.title}
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-95"
            loading="eager"
          />

          {/* Top-Left: Numbering & Section Name for Panel 2 */}
          <div className="absolute top-8 md:top-10 left-8 md:left-12 z-20">
            <span className="font-mono text-[13px] md:text-[14px] tracking-[0.2em] text-paper uppercase select-none">
              02 / 05 — SELECTED WORK
            </span>
          </div>

          {/* Left Edge: Rotated Discipline for Panel 2 */}
          <div className="hidden lg:block absolute left-8 md:left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-left z-20 pointer-events-none">
            <span className="font-mono text-[11px] md:text-[12px] tracking-[0.22em] text-paper/80 uppercase select-none whitespace-nowrap">
              {project2.discipline}
            </span>
          </div>

          {/* Top-Right: Year & Role for Panel 2 */}
          <div className="absolute top-8 md:top-10 right-14 md:right-16 z-20 text-right font-mono text-[13px] md:text-[14px] text-paper tracking-[0.14em] leading-[1.4] select-none">
            <div>{project2.year}</div>
            <div>{project2.role}</div>
          </div>

          {/* Bottom-Left / Center: Project 2 Title visible in the split area */}
          <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 z-20 max-w-[85vw] pointer-events-none select-none">
            <h2 className="font-display font-black text-paper text-[clamp(64px,14vw,196px)] leading-[0.84] tracking-[-0.03em] uppercase">
              {project2.title}
            </h2>
          </div>

          {/* Bottom-Right: "View project" for Panel 2 */}
          <div className="absolute bottom-10 md:bottom-14 right-14 md:right-16 z-20">
            <a
              href={`/work/${project2.slug}`}
              className="font-mono text-[13px] md:text-[14px] tracking-[0.16em] uppercase text-paper hover:text-signal transition-colors duration-150 inline-block border-b-2 border-paper hover:border-signal pb-0.5 select-none"
            >
              VIEW PROJECT
            </a>
          </div>
        </div>
      )}

      {/* =========================================================================
          PANELS 3, 4, 5 (FOR FULL 5-PROJECT INTERACTIVE SCRUB)
          ========================================================================= */}
      {!isForced &&
        projects.slice(2).map((project, idx) => {
          const panelNum = idx + 3;
          return (
            <div
              key={project.id}
              className="work-panel-layer absolute inset-0 w-full h-full z-20 pointer-events-none"
              style={{
                clipPath: "inset(0% 0% 0% 100%)", // hidden initially
              }}
            >
              <img
                src={project.heroImage}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-95"
                loading="lazy"
              />

              <div className="absolute top-8 md:top-10 left-8 md:left-12 z-20">
                <span className="font-mono text-[13px] md:text-[14px] tracking-[0.2em] text-paper uppercase select-none">
                  0{panelNum} / 05 — SELECTED WORK
                </span>
              </div>

              <div className="hidden lg:block absolute left-8 md:left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-left z-20 pointer-events-none">
                <span className="font-mono text-[11px] md:text-[12px] tracking-[0.22em] text-paper/80 uppercase select-none whitespace-nowrap">
                  {project.discipline}
                </span>
              </div>

              <div className="absolute top-8 md:top-10 right-14 md:right-16 z-20 text-right font-mono text-[13px] md:text-[14px] text-paper tracking-[0.14em] leading-[1.4] select-none">
                <div>{project.year}</div>
                <div>{project.role}</div>
              </div>

              <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 z-20 max-w-[85vw] pointer-events-none select-none">
                <h2 className="font-display font-black text-paper text-[clamp(64px,14vw,196px)] leading-[0.84] tracking-[-0.03em] uppercase">
                  {project.title}
                </h2>
              </div>

              <div className="absolute bottom-10 md:bottom-14 right-14 md:right-16 z-20">
                <a
                  href={`/work/${project.slug}`}
                  className="font-mono text-[13px] md:text-[14px] tracking-[0.16em] uppercase text-paper hover:text-signal transition-colors duration-150 inline-block border-b-2 border-paper hover:border-signal pb-0.5 select-none"
                >
                  VIEW PROJECT
                </a>
              </div>
            </div>
          );
        })}

      {/* =========================================================================
          RIGHT EDGE: THIN VERTICAL PROGRESS BAR OF 5 SEGMENTS
          ========================================================================= */}
      <div
        className="absolute right-5 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-40 select-none"
        aria-label="Project slide indicator"
      >
        {[0, 1, 2, 3, 4].map((segIndex) => {
          const heightPercent = isFrameA
            ? (segIndex === 0 ? 100 : 0)
            : isFrameB
            ? (segIndex === 0 ? 100 : segIndex === 1 ? 50 : 0)
            : segIndex <= activeProjectIndex
            ? 100
            : segIndex === activeProjectIndex + 1
            ? Math.round(transitionProgress * 100)
            : 0;

          return (
            <div
              key={`seg-${segIndex}`}
              className="relative w-[2.5px] h-7 md:h-8 bg-paper/25 overflow-hidden"
            >
              {/* Signal colored fill bar */}
              <div
                className="w-full bg-signal transition-all duration-75"
                style={{
                  height: `${heightPercent}%`,
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WorkPanels;
