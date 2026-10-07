import { siteConfig } from "../../content/site.ts";
import { scrollToTarget } from "../../hooks/useLenis.ts";

export interface NavProps {
  onMenuClick?: () => void;
  theme?: "paper" | "ink" | "transparent";
  activeLink?: "Work" | "About" | "Contact";
}

export function Nav({ onMenuClick, theme = "paper", activeLink }: NavProps) {
  const isTransparent = theme === "transparent";
  const isInk = theme === "ink";
  const bgClass = isTransparent
    ? "bg-transparent text-paper"
    : isInk
    ? "bg-ink text-paper"
    : "bg-paper text-ink";
  const textClass = isInk || isTransparent ? "text-paper" : "text-ink";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToTarget(href);
    }
  };

  return (
    <header
      className={`w-full h-[56px] px-5 md:px-10 flex items-center justify-between border-b border-transparent z-40 select-none ${bgClass}`}
      style={{
        backgroundColor: isTransparent ? "transparent" : isInk ? "#0E0E0E" : "#F2EFE8",
        color: isInk || isTransparent ? "#F2EFE8" : "#0E0E0E",
      }}
    >
      {/* Wordmark Left */}
      <a
        href="/"
        className={`font-mono text-[14px] tracking-tight uppercase font-medium ${textClass} hover:opacity-80 transition-opacity duration-150`}
      >
        {siteConfig.name}
      </a>

      {/* Centered Nav Links */}
      <nav
        aria-label="Main navigation"
        className="hidden md:flex items-center gap-10 font-mono text-[14px]"
      >
        {siteConfig.navLinks.map((link) => {
          const isActive = activeLink === link.label;
          return (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`relative transition-colors duration-150 ${
                isActive
                  ? `${textClass} font-medium`
                  : `${textClass} opacity-80 hover:opacity-100`
              }`}
            >
              {link.label}
              {isActive && (
                <span
                  className="absolute left-0 -bottom-1.5 w-full h-[2px] bg-paper"
                  style={{ backgroundColor: isInk ? "#F2EFE8" : "#0E0E0E" }}
                />
              )}
            </a>
          );
        })}
      </nav>


      {/* Menu Right */}
      <button
        type="button"
        onClick={
          onMenuClick ??
          (() => {
            window.location.href = "/menu";
          })
        }
        aria-label="Open navigation menu"
        className={`font-mono text-[14px] cursor-pointer ${textClass} hover:opacity-80 transition-opacity duration-150 bg-transparent border-0 p-0`}
      >
        Menu
      </button>
    </header>
  );
}

export default Nav;

