import { siteConfig } from "../../content/site.ts";

export interface NavProps {
  onMenuClick?: () => void;
}

export function Nav({ onMenuClick }: NavProps) {
  return (
    <header className="w-full h-[56px] px-5 md:px-10 flex items-center justify-between border-b border-transparent z-40 bg-paper select-none">
      {/* Wordmark Left */}
      <a
        href="/"
        className="font-mono text-[14px] tracking-tight uppercase font-medium text-ink hover:text-signal transition-colors duration-150"
      >
        {siteConfig.name}
      </a>

      {/* Centered Nav Links */}
      <nav aria-label="Main navigation" className="hidden md:flex items-center gap-10 font-mono text-[14px]">
        {siteConfig.navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-ink hover:text-signal transition-colors duration-150"
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
        className="font-mono text-[14px] cursor-pointer text-ink hover:text-signal transition-colors duration-150 bg-transparent border-0 p-0"
      >
        Menu
      </button>
    </header>
  );
}

export default Nav;
