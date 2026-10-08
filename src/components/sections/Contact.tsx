import React, { useState, useRef, useEffect } from "react";
import { Nav } from "../layout/Nav.tsx";
import { siteConfig } from "../../content/site.ts";
import { personalInfo } from "../../content/personal.ts";
import { FitText } from "../ui/FitText.tsx";
import { gsap, useGSAP } from "../../lib/gsap.ts";
import { useReducedMotion } from "../../hooks/useReducedMotion.ts";

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
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(forceState === "copied");
  const [isHovered, setIsHovered] = useState(forceState === "hover");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reducedMotion = useReducedMotion();

  const emailRaw = personalInfo.email || "himawanfirza21@gmail.com";
  const emailLower = emailRaw.toLowerCase();

  // Split email into two parts after '@'
  const atIndex = emailRaw.indexOf("@");
  const line1 = atIndex !== -1 ? emailRaw.slice(0, atIndex + 1).toUpperCase() : emailRaw.toUpperCase();
  const line2 = atIndex !== -1 ? emailRaw.slice(atIndex + 1).toUpperCase() : "GMAIL.COM";

  // Detect mobile / touch environment
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia("(hover: none)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Format time in Yogyakarta (WIB / UTC+7) - Hours & Minutes only
  const [localTime, setLocalTime] = useState(() => {
    try {
      return new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    } catch {
      return "12:31";
    }
  });

  useEffect(() => {
    const updateTime = () => {
      try {
        setLocalTime(
          new Date().toLocaleTimeString("en-GB", {
            timeZone: "Asia/Jakarta",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })
        );
      } catch {
        // Fallback
      }
    };
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  // Derive effective copied and hovered states
  const effectiveCopied = forceState === "copied" || copied;
  const effectiveHovered = forceState === "hover" || isHovered;

  // Handle clipboard copy
  const handleCopy = () => {
    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);

    if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(emailLower).then(
        () => {
          setCopied(true);
          copyTimeoutRef.current = setTimeout(() => {
            setCopied(false);
          }, 1200);
        },
        () => {
          window.location.href = `mailto:${emailLower}`;
        }
      );
    } else {
      window.location.href = `mailto:${emailLower}`;
    }
  };

  // Back to top scroll with Lenis (duration 1.2s, ease expo.inOut)
  const handleBackToTop = () => {
    const expoInOut = (t: number) =>
      t === 0
        ? 0
        : t === 1
        ? 1
        : t < 0.5
        ? Math.pow(2, 20 * t - 10) / 2
        : (2 - Math.pow(2, -20 * t + 10)) / 2;

    const lenis = window.__lenis;
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.2,
        easing: expoInOut,
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // GSAP Email mask reveal per line (translateY 100% -> 0, 0.8s, ease expo.out, stagger 80ms, once at 30% viewport)
  useGSAP(
    () => {
      if (reducedMotion) return;

      const lines = sectionRef.current?.querySelectorAll<HTMLElement>(".email-mask-line");
      if (lines && lines.length > 0) {
        gsap.fromTo(
          lines,
          { yPercent: 100 },
          {
            yPercent: 0,
            duration: 0.8,
            ease: "expo.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%", // Once the section band reaches 30% down the viewport
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const captionText = effectiveCopied ? "Copied to clipboard" : "Click to copy";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`w-full min-h-[100svh] bg-ink text-paper flex flex-col justify-between pt-16 lg:pt-[96px] pb-0 select-none ${className}`}
      style={{ backgroundColor: "#0E0E0E", color: "#F2EFE8" }}
      aria-label="Contact"
    >
      {/* Optional Nav bar */}
      {showNav && <Nav onMenuClick={onMenuClick} theme="ink" activeLink="Contact" />}

      {/* Main Container - Exact margin alignment matching all other sections */}
      <div className="w-full px-5 md:px-10 flex-1 flex flex-col justify-between">
        {/* =========================================================================
            TOP ROW:
            - 1px hairline rule in paper 20% spanning container width
            - 64px below line:
              Cols 1-6: "Got something worth building?" in Big Shoulders 800 (64px, leading 0.95)
              Cols 9-12: availability sentence in Instrument Sans 22px + "Yogyakarta, 12:31" in DM Mono 14px
            ========================================================================= */}
        <div className="w-full">
          <div className="w-full border-t border-paper/20" />

          <div className="w-full mt-10 lg:mt-[64px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-6 items-start">
              {/* Cols 1-6: Headline */}
              <div className="lg:col-span-6">
                <h2 className="font-display font-extrabold text-[32px] sm:text-[48px] lg:text-[64px] uppercase leading-[0.95] text-paper tracking-tight">
                  Got something
                  <br />
                  worth building?
                </h2>
              </div>

              {/* Cols 9-12: Availability & Yogyakarta Local Time */}
              <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-start">
                <p className="font-body text-[18px] lg:text-[22px] leading-[1.45] text-paper/70 font-normal">
                  {siteConfig.availability}
                </p>
                <div className="mt-3 lg:mt-4 font-mono text-[14px] text-stone">
                  Yogyakarta, {localTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            EMAIL BLOCK:
            - Anchored to bottom of band, 48px above the footer line
            - Entire email address is one interactive button
            - Fitted dynamically across container width with FitText
            - Line 1 left-aligned, Line 2 right-aligned, caption aligned to Line 2 baseline
            ========================================================================= */}
        <div className="w-full mt-16 lg:mt-24 mb-10 lg:mb-[48px]">
          <button
            type="button"
            onClick={handleCopy}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
            onMouseMove={(e) => {
              if (!isMobile) {
                setCursorPos({ x: e.clientX, y: e.clientY });
              }
            }}
            aria-label={`Copy email address ${emailLower}`}
            className="w-full text-left cursor-pointer bg-transparent border-0 p-0 m-0 group focus:outline-none block"
          >
            <FitText
              line1={line1}
              line2={line2}
              captionText={captionText}
              isHovered={effectiveHovered}
              copied={effectiveCopied}
            />
          </button>
        </div>

        {/* =========================================================================
            FOOTER:
            - 1px hairline rule in paper 20% spanning container width
            - One line on desktop, vertical padding 32px, Instrument Sans 14px
            - Left: GitHub, LinkedIn, Website (32px gap)
            - Center: "Back to top" text link (Lenis scrollTo 0, duration 1.2s, expo.inOut)
            - Right: Copyright © 2026 Firza Himawan
            - Mobile: Stacked layout
            ========================================================================= */}
        <footer className="w-full">
          <div className="w-full border-t border-paper/20" />

          <div className="w-full py-8 lg:py-[32px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 font-body text-[14px] text-paper/70">
            {/* Left: Social Links (32px gap / gap-8) */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <a
                href={siteConfig.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper transition-colors duration-150 py-1"
              >
                GitHub
              </a>
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper transition-colors duration-150 py-1"
              >
                LinkedIn
              </a>
              <a
                href="https://fizm-portofolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper transition-colors duration-150 py-1"
              >
                Website
              </a>
              <a
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper transition-colors duration-150 py-1"
              >
                WhatsApp
              </a>
            </div>

            {/* Center (Desktop) / Secondary group on mobile */}
            <div className="order-last md:order-none w-full md:w-auto flex flex-col md:flex-row md:items-center justify-between md:justify-center gap-4 md:gap-0">
              <button
                type="button"
                onClick={handleBackToTop}
                className="hover:text-paper transition-colors duration-150 cursor-pointer text-left md:text-center select-none"
              >
                Back to top
              </button>

              <span className="block md:hidden text-paper/40">
                © {siteConfig.year} {siteConfig.name}
              </span>
            </div>

            {/* Right: Copyright on Desktop */}
            <div className="hidden md:block select-none">
              © {siteConfig.year} {siteConfig.name}
            </div>
          </div>
        </footer>
      </div>

      {/* =========================================================================
          CUSTOM DESKTOP CURSOR (The only circle in the design system)
          Displays "Copy" on email hover, and "Copied" for 1.2s after click
          ========================================================================= */}
      {effectiveHovered && !isMobile && (
        <div
          aria-hidden="true"
          className="fixed pointer-events-none z-50 flex items-center justify-center w-16 h-16 rounded-full bg-paper text-ink font-mono text-[13px] font-bold tracking-wider select-none shadow-none"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            transform: "translate(-50%, -50%)",
            transition: "opacity 0.15s ease",
          }}
        >
          {effectiveCopied ? "Copied" : "Copy"}
        </div>
      )}
    </section>
  );
};

export default Contact;
