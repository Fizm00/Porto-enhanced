import { Nav } from "../layout/Nav.tsx";
import { personalInfo } from "../../content/personal.ts";
import { SylvaLivingWorldScene } from "../../shaders/sylva-living-world/SylvaLivingWorldScene.tsx";
import faceheroImage from "../../assets/facehero.png";

export interface HeroProps {
  onMenuClick?: () => void;
}

export function Hero({ onMenuClick }: HeroProps) {
  const firstNameLetters = ["F", "I", "R", "Z", "A"];
  const lastNameLetters = ["H", "I", "M", "A", "W", "A", "N"];

  return (
    <section className="bg-paper text-ink relative flex flex-col justify-between min-h-screen w-full select-none overflow-hidden">
      {/* BACKGROUND IMAGE (z-0): Editorial studio portrait */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img
          src={faceheroImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-[80%_center] md:object-right lg:object-center opacity-95"
          loading="eager"
        />
      </div>

      {/* LAYER 1 (z-10): LAST NAME "HIMAWAN" (Placed BEHIND the 3D tree scene) */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-5 md:px-10 overflow-hidden w-full z-10 pointer-events-none">
        {/* Invisible spacer for Line 1 (FIRZA) */}
        <div className="w-full flex justify-start items-center opacity-0 select-none" aria-hidden="true">
          <span className="giant-title font-display flex gap-[clamp(8px,1.8vw,28px)]">
            {firstNameLetters.map((char, index) => (
              <span key={`spacer-first-${index}`}>{char}</span>
            ))}
          </span>
        </div>

        {/* LINE 2: LAST NAME (HIMAWAN) */}
        <div className="w-full flex justify-start items-center">
          <div
            aria-hidden="true"
            className="giant-title font-display text-ink flex gap-[clamp(8px,1.8vw,28px)] select-none"
          >
            {lastNameLetters.map((char, index) => (
              <span key={`last-${index}`}>{char}</span>
            ))}
          </div>
        </div>
      </div>

      {/* LAYER 2 (z-20): THREEUI SYLVA LIVING WORLD 3D SCENE (Transparent background, Maple Autumn) */}
      <div className="absolute inset-0 w-full h-full z-20 overflow-hidden pointer-events-auto">
        <SylvaLivingWorldScene
          variant="maple-autumn"
          transparentBg={true}
          className="w-full h-full"
        />
      </div>

      {/* TOP BAR (z-40, 56px) */}
      <div className="relative z-40 pointer-events-auto">
        <Nav onMenuClick={onMenuClick} theme="transparent" />
      </div>

      {/* LAYER 3 (z-30): LINE 1 FIRST NAME "FIRZA" (Passing IN FRONT OF the 3D scene) */}
      <div className="relative flex-1 flex flex-col justify-center items-start px-5 md:px-10 overflow-hidden w-full z-30 pointer-events-none">
        {/* LINE 1: FIRST NAME (FIRZA) */}
        <div className="w-full flex justify-start items-center">
          <h1 className="giant-title font-display text-ink flex gap-[clamp(8px,1.8vw,28px)] select-none">
            {firstNameLetters.map((char, index) => (
              <span key={`first-${index}`}>{char}</span>
            ))}
          </h1>
        </div>

        {/* Invisible spacer for Line 2 (HIMAWAN) */}
        <div className="w-full flex justify-start items-center opacity-0 select-none" aria-hidden="true">
          <span className="giant-title font-display flex gap-[clamp(8px,1.8vw,28px)]">
            {lastNameLetters.map((char, index) => (
              <span key={`spacer-last-${index}`}>{char}</span>
            ))}
          </span>
        </div>
      </div>

      {/* BOTTOM ROW WITH PAPER GROUND SHIELD FOR 100% CONTRAST */}
      <footer className="w-full px-5 md:px-10 pb-8 pt-16 md:pt-28 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 items-end z-40 relative pointer-events-auto bg-gradient-to-t from-paper via-paper/95 via-60% to-transparent text-ink">
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
