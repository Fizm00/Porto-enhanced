import { useParams, Link } from "wouter";
import { projects } from "../content/projects.ts";

export interface ProjectProps {
  onMenuClick?: () => void;
  params?: Record<string, string | undefined>;
}

export default function Project() {
  const { slug } = useParams<{ slug: string }>();

  // Find project by slug or fallback to project 1 (recovila)
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const currentProject = projectIndex >= 0 ? projects[projectIndex] : projects[0];

  // Calculate next project (circular array)
  const nextIndex = (projectIndex >= 0 ? projectIndex + 1 : 1) % projects.length;
  const nextProject = projects[nextIndex];

  return (
    <main className="w-full min-h-screen bg-paper text-ink selection:bg-signal selection:text-paper">
      {/* 1. TOP NAVIGATION (56px) - Navigasi Kembali ke Halaman Landing */}
      <header className="w-full bg-paper z-40 sticky top-0 border-b border-ink/10 select-none">
        <div className="w-full h-[56px] px-5 md:px-10 flex items-center justify-between font-mono text-[13px] md:text-[14px]">
          {/* Wordmark Kiri - Menuju Landing Page */}
          <Link
            href="/"
            className="tracking-tight uppercase font-medium text-ink hover:opacity-80 transition-opacity duration-150"
          >
            Firza Himawan
          </Link>

          {/* Tombol Kembali Kanan - Menuju Landing Page */}
          <Link
            href="/"
            className="tracking-tight uppercase font-medium text-ink hover:text-signal transition-colors duration-150 inline-flex items-center min-h-[44px]"
          >
            <span className="hidden sm:inline">Back to home</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
      </header>

      {/* 2. FULL-BLEED HERO IMAGE WITH OVERLAPPING DISPLAY TITLE */}
      <section className="relative w-full select-none" aria-label="Project Hero">
        {/* Full-bleed hero image */}
        <div className="relative w-full h-[50vh] sm:h-[65vh] md:h-[80vh] overflow-hidden bg-ink">
          <img
            src={currentProject.heroImage}
            alt={currentProject.displayTitle || currentProject.title}
            className="w-full h-full object-cover grayscale opacity-65"
            style={{ filter: "grayscale(100%) contrast(120%) brightness(0.42)" }}
            loading="eager"
          />
          {/* Dark ink overlay */}
          <div
            className="absolute inset-0 bg-ink/45 pointer-events-none"
            aria-hidden="true"
          />
          {/* Bottom fade for title legibility */}
          <div
            className="absolute inset-x-0 bottom-0 h-44 sm:h-60 bg-gradient-to-t from-ink/95 via-ink/60 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Project title overlapping the lower edge of the image */}
          <div className="absolute bottom-3 sm:bottom-6 md:bottom-8 left-5 md:left-10 right-5 md:right-10 z-10 pointer-events-none">
            <h1 className="font-display font-black text-paper text-[clamp(36px,11vw,190px)] leading-[0.84] tracking-[-0.03em] uppercase select-none break-words">
              {currentProject.displayTitle || currentProject.title}
            </h1>
          </div>
        </div>
      </section>

      {/* 3. FOUR-COLUMN META ROW IN DM MONO (Role, Year, Tools, Link) */}
      <section className="w-full px-5 md:px-10 mt-6 sm:mt-8 md:mt-12 select-none" aria-label="Project Metadata">
        <div className="w-full border-t border-b border-ink py-5 sm:py-6 md:py-7 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 font-mono">
          {/* Col 1: Role */}
          <div>
            <div className="text-stone text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.16em] mb-1 sm:mb-1.5">
              Role
            </div>
            <div className="text-ink text-[13px] sm:text-[14px] md:text-[15px] font-normal leading-snug">
              {currentProject.role}
            </div>
          </div>

          {/* Col 2: Year */}
          <div>
            <div className="text-stone text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.16em] mb-1 sm:mb-1.5">
              Year
            </div>
            <div className="text-ink text-[13px] sm:text-[14px] md:text-[15px] font-normal leading-snug">
              {currentProject.year}
            </div>
          </div>

          {/* Col 3: Tools */}
          <div>
            <div className="text-stone text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.16em] mb-1 sm:mb-1.5">
              Tools
            </div>
            <div className="text-ink text-[13px] sm:text-[14px] md:text-[15px] font-normal leading-snug break-words">
              {currentProject.tools}
            </div>
          </div>

          {/* Col 4: Link (No icons) */}
          <div>
            <div className="text-stone text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.16em] mb-1 sm:mb-1.5">
              Link
            </div>
            <div>
              <a
                href={currentProject.liveUrl || "#"}
                target="_blank"
                rel="noreferrer"
                className="text-ink text-[13px] sm:text-[14px] md:text-[15px] font-normal tracking-tight border-b border-ink hover:text-signal hover:border-signal transition-colors duration-150 inline-block pb-0.5 break-all"
              >
                {currentProject.linkText || "Visit project"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTRO PARAGRAPH IN BODY-LG (6 columns wide, offset to the right) */}
      <section className="w-full px-5 md:px-10 py-12 sm:py-16 md:py-24" aria-label="Project Overview">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="hidden md:block md:col-span-6" aria-hidden="true" />
          <div className="col-span-1 md:col-span-6">
            <p className="font-body text-[17px] sm:text-[21px] md:text-[25px] leading-[1.4] text-ink font-normal tracking-tight max-w-[620px]">
              {currentProject.introParagraph}
            </p>
          </div>
        </div>
      </section>

      {/* 5. ALTERNATING FULL-BLEED AND TWO-UP IMAGES (Hard-cropped, no cards/shadows) */}
      <section className="w-full space-y-8 sm:space-y-12 md:space-y-16" aria-label="Project Imagery">
        {/* Gallery Image 1: Full-Bleed */}
        <div className="w-full h-[40vh] sm:h-[55vh] md:h-[75vh] overflow-hidden bg-ink select-none relative">
          <img
            src={currentProject.gallery.full1}
            alt={`${currentProject.title} detail view 1`}
            className="w-full h-full object-cover grayscale opacity-75"
            style={{ filter: "grayscale(100%) contrast(115%) brightness(0.58)" }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-ink/30 pointer-events-none" aria-hidden="true" />
        </div>

        {/* Gallery Image 2 & 3: Two-Up Images */}
        <div className="w-full px-5 md:px-10 select-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="w-full h-[28vh] sm:h-[40vh] md:h-[58vh] overflow-hidden bg-ink relative">
              <img
                src={currentProject.gallery.twoUp1}
                alt={`${currentProject.title} component view`}
                className="w-full h-full object-cover grayscale opacity-75"
                style={{ filter: "grayscale(100%) contrast(115%) brightness(0.58)" }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/30 pointer-events-none" aria-hidden="true" />
            </div>
            <div className="w-full h-[28vh] sm:h-[40vh] md:h-[58vh] overflow-hidden bg-ink relative">
              <img
                src={currentProject.gallery.twoUp2}
                alt={`${currentProject.title} architectural view`}
                className="w-full h-full object-cover grayscale opacity-75"
                style={{ filter: "grayscale(100%) contrast(115%) brightness(0.58)" }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/30 pointer-events-none" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Gallery Image 4: Full-Bleed */}
        <div className="w-full h-[40vh] sm:h-[55vh] md:h-[75vh] overflow-hidden bg-ink select-none relative">
          <img
            src={currentProject.gallery.full2}
            alt={`${currentProject.title} detail view 2`}
            className="w-full h-full object-cover grayscale opacity-75"
            style={{ filter: "grayscale(100%) contrast(115%) brightness(0.58)" }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-ink/30 pointer-events-none" aria-hidden="true" />
        </div>
      </section>

      {/* 6. OUTCOME STATEMENT IN HEADLINE-XL WITH ONE NUMBER IN SIGNAL COLOR */}
      <section className="w-full px-5 md:px-10 py-14 sm:py-20 md:py-32 select-none" aria-label="Project Outcome">
        <div className="max-w-[1180px]">
          <h2 className="font-display font-black text-ink text-2xl sm:text-4xl md:text-6xl lg:text-[84px] leading-[0.92] tracking-[-0.03em] uppercase">
            <span>{currentProject.outcomeTextBefore} </span>
            <span className="text-signal">{currentProject.outcomeNumber}</span>
            <span> {currentProject.outcomeTextAfter}</span>
          </h2>
        </div>
      </section>

      {/* 7. INK BAND: "NEXT" + NEXT PROJECT TITLE SPANNING FULL WIDTH */}
      <section className="w-full bg-ink text-paper py-14 sm:py-20 md:py-28 px-5 md:px-10 select-none" aria-label="Next Project">
        <div className="w-full">
          <div className="font-mono text-[12px] sm:text-[13px] md:text-[14px] text-stone tracking-[0.2em] uppercase mb-3 sm:mb-4 md:mb-6">
            Next project
          </div>
          <Link
            href={`/work/${nextProject.slug}`}
            className="block font-display font-black text-paper text-[clamp(36px,10.5vw,180px)] leading-[0.84] tracking-[-0.03em] uppercase hover:text-signal transition-colors duration-150 break-words"
          >
            {nextProject.displayTitle || nextProject.title}
          </Link>
        </div>
      </section>

      {/* 8. BOTTOM FOOTER BAR */}
      <footer className="w-full bg-ink text-paper px-5 md:px-10 py-5 border-t border-paper/15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 font-mono text-[12px] md:text-[13px] select-none">
        <div>Firza Himawan 2026</div>
        <div>Editorial design & art direction</div>
      </footer>
    </main>
  );
}
