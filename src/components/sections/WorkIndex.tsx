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
                <article
                  key={project.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(defaultHovered)}
                  className="relative w-full h-[170px] border-b border-ink flex items-center overflow-hidden cursor-pointer transition-colors duration-150"
                  style={{
                    backgroundColor: isHovered ? "transparent" : "#F2EFE8",
                  }}
                >
                  {/* HOVERED STATE BACKGROUND IMAGE (Letterbox crop, flat 35% ink overlay) */}
                  {isHovered && (
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale contrast-125 brightness-95"
                      />
                      {/* Flat 35% ink overlay (#0E0E0E at 35% opacity) */}
                      <div
                        className="absolute inset-0"
                        style={{ backgroundColor: "rgba(14, 14, 14, 0.35)" }}
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  {/* ROW CONTENT CONTAINER */}
                  <div className="relative z-10 w-full flex items-center justify-between px-2 md:px-4 pointer-events-none">
                    {/* LEFT: Project Number & 12px Signal Square */}
                    <div className="flex items-center gap-3 w-[60px] md:w-[80px] shrink-0">
                      <span
                        className={`font-mono text-[14px] md:text-[15px] font-normal transition-colors duration-150 ${
                          isHovered ? "text-paper" : "text-ink"
                        }`}
                      >
                        {rowNum}
                      </span>
                      {/* Exact 12px Signal Square (#FF4A1C) */}
                      {isHovered && (
                        <div
                          className="w-[12px] h-[12px] shrink-0"
                          style={{ backgroundColor: "#FF4A1C" }}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* CENTER-LEFT: Project Title in Headline-XL */}
                    <div className="flex-1 pr-6 overflow-hidden">
                      <h2
                        className={`font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.84] tracking-[-0.03em] uppercase transition-colors duration-150 whitespace-pre-line ${
                          isHovered ? "text-paper" : "text-ink"
                        }`}
                      >
                        {project.title}
                      </h2>
                    </div>

                    {/* RIGHT: Discipline & Year */}
                    <div className="flex items-center justify-end gap-8 md:gap-16 shrink-0 text-right font-mono text-[13px] md:text-[14px]">
                      {/* Short Discipline in sentence case */}
                      <span
                        className={`transition-colors duration-150 ${
                          isHovered ? "text-paper" : "text-stone"
                        }`}
                      >
                        {project.indexDiscipline || project.discipline}
                      </span>
                      {/* Year */}
                      <span
                        className={`w-[48px] text-right transition-colors duration-150 ${
                          isHovered ? "text-paper" : "text-ink"
                        }`}
                      >
                        {project.year}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* BOTTOM SECTION: 3 COLUMNS */}
        <div className="w-full pt-12 md:pt-16 pb-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Column 1: Infrastructure Statement */}
          <div className="col-span-1 md:col-span-5 pr-0 md:pr-4">
            <p className="font-body text-[15px] sm:text-[16px] leading-[1.4] text-ink font-normal tracking-tight max-w-[420px]">
              High-throughput software infrastructure, algorithmic engines, and distributed memory architectures built for zero-drift performance.
            </p>
          </div>

          {/* Column 2: Availability / Advisory Statement */}
          <div className="col-span-1 md:col-span-5 pr-0 md:pr-4">
            <p className="font-body text-[15px] sm:text-[16px] leading-[1.4] text-ink font-normal tracking-tight max-w-[340px]">
              Advisory and principal systems architecture roles for Q2 2026 onwards.
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
        <div>Firza Himawan 2025</div>
        <div>Editorial design & art direction</div>
      </footer>
    </section>
  );
}

export default WorkIndex;
