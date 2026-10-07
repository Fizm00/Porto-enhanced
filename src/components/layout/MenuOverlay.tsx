import React, { useState, useEffect } from "react";
import { siteConfig } from "../../content/site.ts";
import { personalInfo } from "../../content/personal.ts";
import { scrollToTarget } from "../../hooks/useLenis.ts";

export interface MenuOverlayProps {
  isOpen?: boolean;
  onClose?: () => void;
  forcedHoveredLink?: "WORK" | "ABOUT" | "CONTACT" | null;
  className?: string;
  isStatic?: boolean;
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({
  isOpen = false,
  onClose,
  forcedHoveredLink = null,
  className = "",
  isStatic = false,
}) => {
  const [internalHover, setInternalHover] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen || isStatic) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isStatic, onClose]);

  const currentHover = forcedHoveredLink !== null ? forcedHoveredLink : internalHover;

  const links = [
    { label: "WORK", href: "#work" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  const email = personalInfo.email || "himawanfirza21@gmail.com";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      onClose?.();
      // Wait for menu slide-out slightly or scroll immediately
      setTimeout(() => {
        scrollToTarget(href);
      }, 250);
    }
  };

  const containerClasses = isStatic
    ? `w-full min-h-screen lg:min-h-[900px] bg-signal text-ink flex flex-col justify-between select-none ${className}`
    : `fixed inset-0 z-50 w-full min-h-screen bg-signal text-ink flex flex-col justify-between select-none overflow-y-auto transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
      } ${className}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className={containerClasses}
      style={{
        backgroundColor: "#FF4A1C",
        color: "#0E0E0E",
      }}
    >
      {/* 1. TOP BAR: wordmark at left, "Close" at right in DM Mono 14px */}
      <header className="w-full h-[56px] px-5 md:px-10 max-w-[1440px] mx-auto flex items-center justify-between">
        <a
          href="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              onClose?.();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="font-mono text-[14px] uppercase text-ink font-medium tracking-tight"
        >
          {siteConfig.name}
        </a>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="font-mono text-[14px] uppercase text-ink cursor-pointer bg-transparent border-0 p-0 font-medium tracking-tight hover:opacity-80 transition-opacity"
        >
          Close
        </button>
      </header>

      {/* 2. MAIN BODY: Stacked links (left) + Info column (right aligned to bottom of stack) */}
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-10 flex-1 flex flex-col lg:flex-row justify-between items-start lg:items-end py-8 lg:py-12 gap-10">
        {/* LEFT: Stacked Links in Big Shoulders Display 900, ~70% screen height */}
        <nav
          aria-label="Menu links"
          className="flex flex-col gap-4 lg:gap-5"
          onMouseLeave={() => {
            if (forcedHoveredLink === null) setInternalHover(null);
          }}
        >
          {links.map((link) => {
            // When any link is hovered:
            // The hovered link stays ink (#0E0E0E).
            // All other links switch to paper color (#F2EFE8).
            // When no link is hovered, all links are ink (#0E0E0E).
            const isHovered = currentHover === link.label;
            const hasAnyHover = currentHover !== null;
            const textColor = hasAnyHover
              ? isHovered
                ? "#0E0E0E"
                : "#F2EFE8"
              : "#0E0E0E";

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                onMouseEnter={() => {
                  if (forcedHoveredLink === null) setInternalHover(link.label);
                }}
                className="font-display font-black uppercase text-ink transition-colors duration-150 block"
                style={{
                  fontSize: "clamp(72px, 14.5vw, 195px)",
                  lineHeight: 0.92,
                  color: textColor,
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* RIGHT: Aligned to bottom of stack */}
        <div className="flex flex-col items-start gap-4 lg:self-end mb-2 lg:mb-4">
          {/* Email in Instrument Sans 22px underlined with a 2px rule */}
          <div>
            <a
              href={`mailto:${email}`}
              className="font-body text-[20px] lg:text-[22px] text-ink underline decoration-2 underline-offset-4"
              style={{ color: "#0E0E0E" }}
            >
              {email}
            </a>
          </div>

          {/* Socials: GitHub, LinkedIn, Website one per line in Instrument Sans 22px */}
          <div className="flex flex-col gap-1 font-body text-[20px] lg:text-[22px] text-ink">
            <a
              href="https://github.com/Fizm00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:opacity-80 transition-opacity"
              style={{ color: "#0E0E0E" }}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/firzahimawan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:opacity-80 transition-opacity"
              style={{ color: "#0E0E0E" }}
            >
              LinkedIn
            </a>
            <a
              href="https://erdamotor.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:opacity-80 transition-opacity"
              style={{ color: "#0E0E0E" }}
            >
              Website
            </a>
          </div>

          {/* Time: DM Mono 14px, no seconds, no time zone */}
          <div
            className="font-mono text-[14px] text-ink mt-2"
            style={{ color: "#0E0E0E" }}
          >
            Yogyakarta, 12:38
          </div>
        </div>
      </div>

      {/* 3. FOOTER: Copyright at left in Instrument Sans 14px, nothing at right */}
      <footer className="w-full h-[56px] px-5 md:px-10 max-w-[1440px] mx-auto flex items-center justify-between">
        <div
          className="font-body text-[14px] text-ink"
          style={{ color: "#0E0E0E" }}
        >
          © 2026 Firza Himawan
        </div>
        <div />
      </footer>
    </div>
  );
};

export default MenuOverlay;
