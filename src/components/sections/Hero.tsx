import { Nav } from "../layout/Nav.tsx";
import { personalInfo } from "../../content/personal.ts";
import { SylvaLivingWorldScene } from "../../shaders/sylva-living-world/SylvaLivingWorldScene.tsx";

export interface HeroProps {
  onMenuClick?: () => void;
}

export function Hero({ onMenuClick }: HeroProps) {
  const firstNameLetters = ["F", "I", "R", "Z", "A"];
  const lastNameLetters = ["H", "I", "M", "A", "W", "A", "N"];

  return (
    <section className="bg-[#313a41] text-paper relative flex flex-col justify-between min-h-screen w-full select-none overflow-hidden">
      {/* THREEUI SYLVA LIVING WORLD 3D SCENE (Scene-only, Maple Autumn variant, uncompressed canonical ThreeUI) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-auto">
        <SylvaLivingWorldScene
          variant="maple-autumn"
          className="w-full h-full"
        />
      </div>

      {/* TOP BAR (56px) */}
      <div className="relative z-20 pointer-events-auto">
        <Nav onMenuClick={onMenuClick} theme="transparent" />
      </div>

      {/* HERO CENTER SECTION WITH GIANT CONDENSED DISPLAY TYPE */}
      <div className="relative flex-1 flex flex-col justify-center items-center px-5 md:px-10 overflow-hidden w-full z-10 pointer-events-none">
        {/* LINE 1: FIRST NAME */}
        <div className="w-full flex justify-between items-center">
          <h1 className="giant-title font-display text-paper w-full text-center flex justify-between select-none drop-shadow-sm">
            {firstNameLetters.map((char, index) => (
              <span key={`first-${index}`}>{char}</span>
            ))}
          </h1>
        </div>

        {/* LINE 2: LAST NAME */}
        <div className="w-full flex justify-between items-center">
          <div
            aria-hidden="true"
            className="giant-title font-display text-paper w-full text-center flex justify-between select-none drop-shadow-sm"
          >
            {lastNameLetters.map((char, index) => (
              <span key={`last-${index}`}>{char}</span>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM ROW WITH SUBTLE DUSK GROUND SHIELD */}
      <footer className="w-full px-5 md:px-10 pb-8 pt-16 md:pt-28 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 items-end z-20 relative pointer-events-auto bg-gradient-to-t from-[#313a41] via-[#313a41]/75 via-60% to-transparent text-paper">
        {/* Left: Positioning (max 4 columns) */}
        <div className="col-span-1 md:col-span-5 pr-0 md:pr-6">
          <p className="font-body text-[17px] sm:text-[19px] md:text-[22px] leading-[1.35] text-paper font-normal tracking-tight max-w-[500px]">
            {personalInfo.positioning}
          </p>
        </div>

        {/* Center: Scroll + 40px line */}
        <div className="hidden md:flex col-span-2 flex-col items-center justify-end pb-1">
          <span className="font-mono text-[14px] text-paper uppercase tracking-wider mb-2">
            Scroll
          </span>
          <div className="w-[1px] h-[40px] bg-paper"></div>
        </div>

        {/* Right: Location & Availability (2 lines in DM Mono) */}
        <div className="col-span-1 md:col-span-5 flex flex-row md:flex-col justify-between md:justify-end items-end text-right font-mono text-[14px] leading-relaxed text-paper">
          <span>Based in {personalInfo.location}</span>
          <span>{personalInfo.availability}</span>
        </div>

        {/* Mobile-only Scroll */}
        <div className="flex md:hidden col-span-1 justify-center items-center pt-2">
          <div className="flex flex-col items-center">
            <span className="font-mono text-[11px] text-paper uppercase tracking-wider mb-1.5">
              Scroll
            </span>
            <div className="w-[1px] h-[32px] bg-paper"></div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Hero;
