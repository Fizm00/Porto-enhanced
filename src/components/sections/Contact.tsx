import React, { useState } from "react";
import { Nav } from "../layout/Nav.tsx";
import { personalInfo } from "../../content/personal.ts";

export interface ContactProps {
  className?: string;
  forceState?: "default" | "copied" | "hover";
  onMenuClick?: () => void;
  showNav?: boolean;
}

export const Contact: React.FC<ContactProps> = ({
  className = "",
  forceState,
  onMenuClick,
  showNav = false,
}) => {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isSignalState =
    forceState === "copied" ||
    forceState === "hover" ||
    copied ||
    isHovered;

  const captionText =
    forceState === "copied" || copied
      ? "Copied to clipboard"
      : isHovered
      ? "Copied to clipboard"
      : "Click to copy";

  const email = personalInfo.email || "hello@firzahimawan.com";

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className={`w-full min-h-screen lg:min-h-[900px] bg-ink text-paper flex flex-col justify-between select-none ${className}`}
      style={{ backgroundColor: "#0E0E0E", color: "#F2EFE8" }}
      aria-label="Contact"
    >
      {/* 1. TOP BAR (only rendered if explicitly requested) */}
      {showNav && (
        <Nav onMenuClick={onMenuClick} theme="ink" activeLink="Contact" />
      )}

      {/* MAIN CONTAINER: framed with 1440px desktop grid */}
      <div className={`w-full max-w-[1440px] mx-auto px-5 md:px-10 flex-1 flex flex-col justify-between ${showNav ? "" : "pt-12 md:pt-20"}`}>
        {/* TOP BLOCK */}
        <div className="w-full">
          {/* 2. 1px hairline rule in paper color at 20% opacity */}
          <div className={`w-full border-t border-paper/20 ${showNav ? "mt-12 md:mt-24" : "mt-0"}`} />

          {/* 3. Headline and status row: 64px below the rule */}
          <div className="w-full mt-10 md:mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-6 items-start">
              {/* Left (cols 1-7): Headline in headline-md (48px), paper color, two lines */}
              <div className="lg:col-span-7">
                <h2 className="font-display font-extrabold text-[36px] sm:text-[44px] lg:text-[48px] uppercase leading-[0.95] text-paper">
                  Got something
                  <br />
                  worth building?
                </h2>
              </div>

              {/* Right (cols 8-12): One plain sentence in body-lg, paper at 70%, and time in DM Mono 14px stone */}
              <div className="lg:col-span-5 flex flex-col justify-start">
                <p className="font-body text-[18px] lg:text-[22px] leading-[1.45] text-paper/70 max-w-[460px]">
                  I'm taking on one new project from July.
                </p>
                <div className="mt-3 md:mt-4 font-mono text-[14px] text-stone">
                  Yogyakarta, 12:31
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INTENTIONALLY EMPTY SPACE: framed by the two hairline rules */}

        {/* BOTTOM BLOCK: anchored to bottom, 48px above footer rule */}
        <div className="w-full mt-16 md:mt-24 mb-10 md:mb-12">
          {/* 4. Giant email address in Big Shoulders Display 900, broken into two lines after '@' */}
          <div
            onClick={handleCopy}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="cursor-pointer group inline-block w-full"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleCopy();
              }
            }}
            aria-label={`Copy email address ${email}`}
          >
            <div
              className={`font-display font-black uppercase leading-[0.85] tracking-tight transition-colors duration-150 ${
                isSignalState ? "text-signal" : "text-paper"
              }`}
              style={{
                fontSize: "clamp(46px, 11.2vw, 162px)",
                color: isSignalState ? "#FF4A1C" : "#F2EFE8",
              }}
            >
              <div>FIRZAHIMAWAN@</div>
              <div className="break-all sm:break-normal">GMAIL.COM</div>
            </div>

            {/* Caption directly under it in Instrument Sans 14px */}
            <p
              className={`mt-3 md:mt-4 font-body text-[14px] transition-colors duration-150 ${
                isSignalState ? "text-signal" : "text-stone"
              }`}
              style={{
                color: isSignalState ? "#FF4A1C" : "#8A867D",
              }}
            >
              {captionText}
            </p>
          </div>
        </div>
      </div>

      {/* 5. FOOTER: 1px hairline rule in paper at 20% opacity + footer row */}
      <footer className="w-full border-t border-paper/20">
        <div className="w-full max-w-[1440px] mx-auto px-5 md:px-10 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-body text-[14px] text-paper/70">
          {/* Left: GitHub, LinkedIn, Website with 32px (gap-8) between them */}
          <div className="flex items-center gap-8">
            <a
              href="https://github.com/Fizm00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/70 hover:text-paper transition-colors duration-150"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/firzahimawan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/70 hover:text-paper transition-colors duration-150"
            >
              LinkedIn
            </a>
            <a
              href="https://erdamotor.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/70 hover:text-paper transition-colors duration-150"
            >
              Website
            </a>
          </div>

          {/* Right: Copyright */}
          <div>© 2026 Firza Himawan</div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
