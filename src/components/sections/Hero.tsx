import { Nav } from "../layout/Nav.tsx";
import { personalInfo } from "../../content/personal.ts";

export interface HeroProps {
  onMenuClick?: () => void;
}

export function Hero({ onMenuClick }: HeroProps) {
  const firstNameLetters = ["F", "I", "R", "Z", "A"];
  const lastNameLetters = ["H", "I", "M", "A", "W", "A", "N"];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between bg-paper text-ink overflow-hidden select-none">
      {/* 56px Top Bar */}
      <Nav onMenuClick={onMenuClick} />

      {/* Main Hero Display Stage */}
      <div className="relative w-full flex-1 flex flex-col justify-center px-5 md:px-10 my-auto py-2">
        <div className="relative w-full max-w-[1440px] mx-auto">
          {/* Line 1: FIRST NAME (Behind 3D Object, z-index: 5) */}
          <div
            aria-label="FIRZA"
            className="relative z-5 w-full flex justify-between font-display font-black text-ink uppercase leading-[0.85] text-[17vw] sm:text-[17.5vw] md:text-[18vw] tracking-[-0.01em] select-none"
          >
            {firstNameLetters.map((char, index) => (
              <span key={`first-${index}`} className="block">
                {char}
              </span>
            ))}
          </div>

          {/* Centered Sculptural 3D Object (Middle Layer, z-index: 10) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[52%] z-10 flex flex-col items-center pointer-events-none">
            <div className="relative w-[130px] sm:w-[200px] md:w-[270px] lg:w-[310px] max-h-[58vh] flex items-center justify-center">
              <img
                src="/hero-sculpture.jpg"
                alt="Sculptural abstract monolithic 3D object in ink, chrome, and signal highlight"
                className="w-full h-auto object-contain mix-blend-multiply select-none"
                loading="eager"
              />
            </div>
          </div>

          {/* Line 2: LAST NAME (In Front of 3D Object, z-index: 20) */}
          <div
            aria-label="HIMAWAN"
            className="relative z-20 w-full flex justify-between font-display font-black text-ink uppercase leading-[0.85] text-[17vw] sm:text-[17.5vw] md:text-[18vw] tracking-[-0.01em] select-none mt-4 sm:mt-6 md:mt-8"
          >
            {lastNameLetters.map((char, index) => (
              <span key={`last-${index}`} className="block">
                {char}
              </span>
            ))}
          </div>

          {/* Placeholder Indicator Box (Cleanly positioned below Line 2, z-index: 30) */}
          <div className="relative z-30 flex justify-center mt-3 sm:mt-5">
            <div className="border border-ink bg-paper px-2.5 py-0.5 text-center font-mono text-[9px] sm:text-[11px] md:text-xs text-ink tracking-tight uppercase whitespace-nowrap">
              [PLACEHOLDER // 3D SCULPTURE OBJECT]
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Information Row */}
      <footer className="relative z-20 w-full px-5 md:px-10 pb-6 md:pb-10 pt-2 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          {/* Left: Positioning Sentence (max 4 columns wide) */}
          <div className="md:col-span-5 lg:col-span-4">
            <p className="font-body text-[15px] sm:text-[17px] md:text-[20px] lg:text-[22px] leading-[1.38] text-ink">
              {personalInfo.positioning}
            </p>
          </div>

          {/* Center: Scroll Indicator (Desktop) */}
          <div className="hidden md:flex md:col-span-2 lg:col-span-4 justify-center items-end">
            <div className="flex flex-col items-center select-none pb-1">
              <span className="font-mono text-xs uppercase tracking-wider text-ink">
                SCROLL
              </span>
              <div className="w-[1px] h-[40px] bg-ink mt-2" />
            </div>
          </div>

          {/* Right: City & Availability */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-row md:flex-col justify-between md:justify-end items-end font-mono text-xs md:text-sm text-ink space-y-0 md:space-y-1">
            <p>Based in {personalInfo.location}</p>
            <p>{personalInfo.availability}</p>
          </div>

          {/* Mobile-only Scroll Indicator */}
          <div className="flex md:hidden justify-center items-center pt-2">
            <div className="flex flex-col items-center select-none">
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink">
                SCROLL
              </span>
              <div className="w-[1px] h-[32px] bg-ink mt-1.5" />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Hero;
