import { Nav } from "../layout/Nav.tsx";
import { personalInfo } from "../../content/personal.ts";

export interface HeroProps {
  onMenuClick?: () => void;
}

export function Hero({ onMenuClick }: HeroProps) {
  const firstNameLetters = ["F", "I", "R", "Z", "A"];
  const lastNameLetters = ["H", "I", "M", "A", "W", "A", "N"];

  return (
    <section className="bg-paper text-ink relative flex flex-col justify-between min-h-screen w-full select-none overflow-hidden">
      {/* TOP BAR (56px) */}
      <Nav onMenuClick={onMenuClick} />

      {/* HERO CENTER SECTION WITH INTERLEAVED SCULPTURAL OBJECT */}
      <div className="relative flex-1 flex flex-col justify-center items-center px-5 md:px-10 overflow-hidden w-full">
        {/* LINE 1: FIRST NAME (Passing BEHIND the 3D sculpture) */}
        <div className="w-full flex justify-between items-center z-10 pointer-events-none">
          <h1 className="giant-title font-display text-ink w-full text-center flex justify-between select-none">
            {firstNameLetters.map((char, index) => (
              <span key={`first-${index}`}>{char}</span>
            ))}
          </h1>
        </div>

        {/* CENTERED 3D SCULPTURAL OBJECT (Overlaps First and Second Name) */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="relative w-[280px] h-[450px] sm:w-[340px] sm:h-[540px] md:w-[380px] md:h-[600px] flex flex-col items-center justify-center">
            {/* Rendered Image */}
            <img
              src="/hero-sculpture.png"
              alt="Monolithic sculptural 3D object in ink and chrome metal with signal red accent (Placeholder render)"
              className="w-full h-full object-contain mix-blend-multiply"
              loading="eager"
            />
            {/* Editorial Mono Placeholder Tag */}
            <div className="absolute bottom-4 bg-paper/90 px-2 py-0.5 border border-ink text-[11px] font-mono tracking-widest uppercase text-ink whitespace-nowrap">
              [PLACEHOLDER // 3D SCULPTURE OBJECT]
            </div>
          </div>
        </div>

        {/* LINE 2: LAST NAME (Passing IN FRONT OF the 3D sculpture) */}
        <div className="w-full flex justify-between items-center z-30 pointer-events-none">
          <div
            aria-hidden="true"
            className="giant-title font-display text-ink w-full text-center flex justify-between select-none"
          >
            {lastNameLetters.map((char, index) => (
              <span key={`last-${index}`}>{char}</span>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <footer className="w-full px-5 md:px-10 pb-8 pt-4 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 items-end z-40 bg-paper">
        {/* Left: Positioning (max 4 columns) */}
        <div className="col-span-1 md:col-span-5 pr-0 md:pr-6">
          <p className="font-body text-[17px] sm:text-[19px] md:text-[22px] leading-[1.35] text-ink font-normal tracking-tight max-w-[500px]">
            {personalInfo.positioning}
          </p>
        </div>

        {/* Center: Scroll + 40px line */}
        <div className="hidden md:flex col-span-2 flex-col items-center justify-end pb-1">
          <span className="font-mono text-[14px] text-ink uppercase tracking-wider mb-2">
            Scroll
          </span>
          <div className="w-[1px] h-[40px] bg-ink"></div>
        </div>

        {/* Right: Location & Availability (2 lines in DM Mono) */}
        <div className="col-span-1 md:col-span-5 flex flex-row md:flex-col justify-between md:justify-end items-end text-right font-mono text-[14px] leading-relaxed text-ink">
          <span>Based in {personalInfo.location}</span>
          <span>{personalInfo.availability}</span>
        </div>

        {/* Mobile-only Scroll */}
        <div className="flex md:hidden col-span-1 justify-center items-center pt-2">
          <div className="flex flex-col items-center">
            <span className="font-mono text-[11px] text-ink uppercase tracking-wider mb-1.5">
              Scroll
            </span>
            <div className="w-[1px] h-[32px] bg-ink"></div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Hero;
