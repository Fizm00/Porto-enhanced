import { siteConfig } from "../../content/site.ts";

export interface NavProps {
  onMenuClick?: () => void;
}

export function Nav({ onMenuClick }: NavProps) {
  return (
    <header className="w-full h-[56px] flex items-center justify-between px-5 md:px-10 bg-paper text-ink select-none relative z-30">
      {/* Wordmark Left */}
      <a
        href="/"
        className="font-mono text-xs md:text-sm uppercase tracking-wider text-ink hover:text-signal transition-colors"
      >
        {siteConfig.name}
      </a>

      {/* Centered Navigation Links (Desktop) */}
      <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8 font-mono text-sm text-ink">
        {siteConfig.navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hover:text-signal transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Menu Right */}
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open navigation menu"
        className="font-mono text-xs md:text-sm text-ink hover:text-signal transition-colors cursor-pointer"
      >
        Menu
      </button>
    </header>
  );
}

export default Nav;
