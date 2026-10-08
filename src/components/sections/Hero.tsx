import { Nav } from "../layout/Nav.tsx";
import { personalInfo } from "../../content/personal.ts";
import { SylvaLivingWorldScene } from "../../shaders/sylva-living-world/SylvaLivingWorldScene.tsx";
import { LiquidReveal } from "../ui/LiquidReveal.tsx";
import faceheroImage from "../../assets/facehero.png";
import facehero3Image from "../../assets/facehero3.png";

export interface HeroProps {
  onMenuClick?: () => void;
}

export function Hero({ onMenuClick }: HeroProps) {
  const firstNameLetters = ["F", "I", "R", "Z", "A"];
  const lastNameLetters = ["H", "I", "M", "A", "W", "A", "N"];

  return (
    <section className="bg-paper text-ink relative flex flex-col justify-between min-h-screen w-full select-none overflow-hidden">
      {/* LIQUID REVEAL FULL-BLEED BACKGROUND (z-0) */}
      <LiquidReveal
        beforeSrc={faceheroImage}
        afterSrc={facehero3Image}
      />

      {/* LAYER 1 (z-10): LAST NAME "HIMAWAN" (Placed BEHIND falling leaves, vibrant signal orange) */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-5 md:px-10 overflow-hidden w-full z-10 pointer-events-none">
        {/* Invisible spacer for Line 1 (FIRZA) */}
        <div className="w-full flex justify-start items-center opacity-0 select-none" aria-hidden="true">
          <span className="giant-title font-display flex gap-[clamp(2px,0.6vw,12px)]">
            {firstNameLetters.map((char, index) => (
              <span key={`spacer-first-${index}`}>{char}</span>
            ))}
          </span>
        </div>

        {/* LINE 2: LAST NAME (HIMAWAN) */}
        <div className="w-full flex justify-start items-center">
          <div
            aria-hidden="true"
            className="giant-title font-display text-signal flex gap-[clamp(2px,0.6vw,12px)] select-none"
          >
            {lastNameLetters.map((char, index) => (
              <span key={`last-${index}`}>{char}</span>
            ))}
          </div>
        </div>
      </div>

      {/* LAYER 2 (z-20): THREEUI SYLVA LIVING WORLD 3D SCENE (Falling maple leaves drift below navbar) */}
      <div className="absolute inset-x-0 bottom-0 top-14 w-full z-20 overflow-hidden pointer-events-none">
        <SylvaLivingWorldScene
          variant="maple-autumn"
          transparentBg={true}
          leavesOnly={true}
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
          <h1 className="giant-title font-display text-ink flex gap-[clamp(2px,0.6vw,12px)] select-none">
            {firstNameLetters.map((char, index) => (
              <span key={`first-${index}`}>{char}</span>
            ))}
          </h1>
        </div>

        {/* Invisible spacer for Line 2 (HIMAWAN) */}
        <div className="w-full flex justify-start items-center opacity-0 select-none" aria-hidden="true">
          <span className="giant-title font-display flex gap-[clamp(2px,0.6vw,12px)]">
            {lastNameLetters.map((char, index) => (
              <span key={`spacer-last-${index}`}>{char}</span>
            ))}
          </span>
        </div>
      </div>

      {/* SOFT CONTRAST SCRIM (z-30): Guarantees text never clashes with portrait clothing */}
      <div
        className="absolute inset-x-0 bottom-0 h-52 sm:h-40 bg-gradient-to-t from-paper via-paper/90 via-55% to-transparent pointer-events-none z-30"
        aria-hidden="true"
      />

      {/* BOTTOM ROW: Positioning, Scroll, Location & Availability (z-40) */}
      <footer className="w-full px-5 md:px-10 pb-8 pt-4 md:pt-8 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-0 items-end z-40 relative pointer-events-auto text-ink">
        {/* Left: Positioning (max 4 columns) */}
        <div className="col-span-1 md:col-span-5 pr-0 md:pr-6">
          <p className="font-body text-[15px] sm:text-[18px] md:text-[22px] leading-[1.38] text-ink font-normal tracking-tight max-w-[500px]">
            {personalInfo.positioning}
          </p>
        </div>

        {/* Center: Scroll + 40px line (Desktop only) */}
        <div className="hidden md:flex col-span-2 flex-col items-center justify-end pb-1">
          <span className="font-mono text-[14px] text-ink uppercase tracking-wider mb-2">
            Scroll
          </span>
          <div className="w-[1px] h-[40px] bg-ink"></div>
        </div>

        {/* Right: Location & Availability + Mobile Scroll (Side-by-side on mobile, right-aligned on desktop) */}
        <div className="col-span-1 md:col-span-5 flex flex-row md:flex-col justify-between md:justify-end items-end text-left md:text-right font-mono text-[13px] sm:text-[14px] leading-relaxed text-ink pt-2 md:pt-0">
          <div className="flex flex-col text-left md:text-right gap-0.5">
            <span>Based in {personalInfo.location}</span>
            <span>{personalInfo.availability}</span>
          </div>

          {/* Mobile-only Scroll cleanly aligned to the right of location info */}
          <div className="flex md:hidden flex-col items-center pl-4 shrink-0">
            <span className="font-mono text-[11px] text-ink uppercase tracking-wider mb-1">
              Scroll
            </span>
            <div className="w-[1px] h-[28px] bg-ink"></div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Hero;
