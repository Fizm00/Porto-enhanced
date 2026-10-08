import { useState } from "react";
import { projects } from "../../content/projects.ts";

export interface WorkIndexProps {
  forcedHoverRow?: number; // 1-indexed (e.g. 3 for Row 3)
  onMenuClick?: () => void;
  className?: string;
}

export function WorkIndex({
  forcedHoverRow = 3,
  className = "",
}: WorkIndexProps) {
  // Query param detection (?hover=3 or ?hover=none)
  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  const hoverParam = searchParams?.get("hover");

  const defaultHovered =
    hoverParam === "none"
      ? null
      : hoverParam
      ? parseInt(hoverParam, 10) - 1
      : forcedHoverRow
      ? forcedHoverRow - 1
      : 2;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(defaultHovered);

  return (
    <section
      className={`w-full min-h-screen bg-paper text-ink flex flex-col justify-between select-none py-12 md:py-20 ${className}`}
      style={{ backgroundColor: "#F2EFE8", color: "#0E0E0E" }}
      aria-label="Work Index"
    >
      {/* MAIN INDEX CONTENT CONTAINER */}
      <div className="w-full px-5 md:px-10 flex-1 flex flex-col justify-between py-6 md:py-8">
        <div>
          {/* SUB-HEADER BAR */}
          <div className="w-full border-t border-b border-ink py-2.5 mb-0 flex flex-col sm:flex-row justify-between items-start sm:items-center font-mono text-[13px] md:text-[14px] text-ink">
            <div>Index 05 projects</div>
            <div className="flex items-center gap-8 md:gap-14">
              <span className="text-stone">Archive 2023–2026</span>
              <span className="text-stone">Systems architecture</span>
            </div>
          </div>

          {/* FIVE ROWS LIST */}
          <div className="w-full">
            {projects.slice(0, 5).map((project, index) => {
              const rowNum = String(index + 1).padStart(2, "0");
              const isHovered = hoveredIndex === index;

              return (
                <a
                  key={project.id}
                  href={`/work/${project.slug}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(defaultHovered)}
                  className="relative block w-full h-[120px] sm:h-[145px] md:h-[170px] border-b border-ink overflow-hidden cursor-pointer transition-colors duration-150"
                  style={{
                    backgroundColor: isHovered ? "transparent" : "#F2EFE8",
                  }}
                >
                  {/* HOVERED STATE BACKGROUND IMAGE (Letterbox crop, calibrated dark ink overlay) */}
                  {isHovered && (
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-ink">
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale opacity-65"
                        style={{ filter: "grayscale(100%) contrast(120%) brightness(0.42)" }}
                      />
                      {/* Dark ink overlay */}
                      <div
                        className="absolute inset-0 bg-ink/50"
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  {/* ROW CONTENT CONTAINER */}
                  <div className="relative z-10 w-full h-full flex items-center justify-between px-2 md:px-4 pointer-events-none">
                    {/* LEFT: Project Number & 12px Signal Square */}
                    <div className="flex items-center gap-2 sm:gap-3 w-[40px] sm:w-[60px] md:w-[80px] shrink-0">
                      <span
                        className={`font-mono text-[13px] sm:text-[14px] md:text-[15px] font-normal transition-colors duration-150 ${
                          isHovered ? "text-paper" : "text-ink"
                        }`}
                      >
                        {rowNum}
                      </span>
                      {/* Exact 12px Signal Square (#FF4A1C) */}
                      {isHovered && (
                        <div
                          className="w-[10px] sm:w-[12px] h-[10px] sm:h-[12px] shrink-0"
                          style={{ backgroundColor: "#FF4A1C" }}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* CENTER-LEFT: Project Title in Headline-XL */}
                    <div className="flex-1 pr-3 sm:pr-6 overflow-hidden">
                      <h2
                        className={`font-display font-black text-[28px] sm:text-5xl md:text-6xl lg:text-[76px] leading-[0.84] tracking-[-0.03em] uppercase transition-colors duration-150 whitespace-pre-line break-words ${
                          isHovered ? "text-paper" : "text-ink"
                        }`}
                      >
                        {project.title}
                      </h2>
                    </div>

                    {/* RIGHT: Discipline & Year */}
                    <div className="flex items-center justify-end gap-3 sm:gap-8 md:gap-16 shrink-0 text-right font-mono text-[12px] sm:text-[13px] md:text-[14px]">
                      {/* Short Discipline in sentence case (hidden on small mobile screens to prevent cramming) */}
                      <span
                        className={`hidden sm:inline transition-colors duration-150 ${
                          isHovered ? "text-paper" : "text-stone"
                        }`}
                      >
                        {project.indexDiscipline || project.discipline}
                      </span>
                      {/* Year */}
                      <span
                        className={`w-auto sm:w-[48px] text-right transition-colors duration-150 ${
                          isHovered ? "text-paper" : "text-ink"
                        }`}
                      >
                        {project.year}
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* BOTTOM SECTION: 3 COLUMNS */}
        <div className="w-full pt-12 md:pt-16 pb-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Column 1: Infrastructure Statement */}
          <div className="col-span-1 md:col-span-5 pr-0 md:pr-4">
            <p className="font-body text-[15px] sm:text-[16px] leading-[1.4] text-ink font-normal tracking-tight max-w-[420px]">
              High-velocity software infrastructure, algorithmic engines, and distributed in-memory systems engineered for low-overhead performance.
            </p>
          </div>

          {/* Column 2: Availability / Advisory Statement */}
          <div className="col-span-1 md:col-span-5 pr-0 md:pr-4">
            <p className="font-body text-[15px] sm:text-[16px] leading-[1.4] text-ink font-normal tracking-tight max-w-[340px]">
              Systems architecture and technical advisory engagements considered for Q2 2026 onward.
            </p>
          </div>

          {/* Column 3: "All archives" Text Link */}
          <div className="col-span-1 md:col-span-2 flex justify-start md:justify-end items-start pt-1">
            <a
              href="/work"
              className="font-mono text-[13px] md:text-[14px] text-ink tracking-tight underline underline-offset-4 decoration-[1.5px] decoration-ink hover:text-signal hover:decoration-signal transition-colors duration-150 select-none"
            >
              All archives
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER BAR */}
      <footer className="w-full px-5 md:px-10 py-4 border-t border-ink flex justify-between items-center font-mono text-[12px] md:text-[13px] text-ink select-none">
        <div>Firza Himawan 2026</div>
        <div>Editorial design & art direction</div>
      </footer>
    </section>
  );
}

export default WorkIndex;
