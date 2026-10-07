import { useParams, Link } from "wouter";
import { Nav } from "../components/layout/Nav.tsx";
import { projects } from "../content/projects.ts";

export interface ProjectProps {
  onMenuClick?: () => void;
  params?: Record<string, string | undefined>;
}

export default function Project({ onMenuClick }: ProjectProps) {
  const { slug } = useParams<{ slug: string }>();

  // Find project by slug or fallback to project 1 (recovila)
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const currentProject = projectIndex >= 0 ? projects[projectIndex] : projects[0];

  // Calculate next project (circular array)
  const nextIndex = (projectIndex >= 0 ? projectIndex + 1 : 1) % projects.length;
  const nextProject = projects[nextIndex];

  return (
    <main className="w-full min-h-screen bg-paper text-ink selection:bg-signal selection:text-paper">
      {/* 1. TOP NAVIGATION (56px) */}
      <header className="w-full bg-paper z-40 relative">
        <Nav onMenuClick={onMenuClick} />
      </header>

      {/* 2. FULL-BLEED HERO IMAGE WITH OVERLAPPING DISPLAY TITLE */}
      <section className="relative w-full select-none" aria-label="Project Hero">
        {/* Full-bleed hero image */}
        <div className="relative w-full h-[65vh] sm:h-[72vh] md:h-[82vh] overflow-hidden bg-ink">
          <img
            src={currentProject.heroImage}
            alt={currentProject.displayTitle || currentProject.title}
            className="w-full h-full object-cover grayscale contrast-125 brightness-95"
            loading="eager"
          />
          {/* Subtle bottom fade to ensure paper letters read crisp at the image boundary */}
          <div
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/70 via-ink/30 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Project title overlapping the lower edge of the image */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-5 md:left-10 right-5 md:right-10 z-10 pointer-events-none">
            <h1 className="font-display font-black text-paper text-[clamp(60px,13.5vw,190px)] leading-[0.82] tracking-[-0.03em] uppercase select-none">
              {currentProject.displayTitle || currentProject.title}
            </h1>
          </div>
        </div>
      </section>

      {/* 3. FOUR-COLUMN META ROW IN DM MONO (Role, Year, Tools, Link) */}
      <section className="w-full px-5 md:px-10 mt-8 md:mt-12 select-none" aria-label="Project Metadata">
        <div className="w-full border-t border-b border-ink py-6 md:py-7 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 font-mono">
          {/* Col 1: Role */}
          <div>
            <div className="text-stone text-[12px] md:text-[13px] uppercase tracking-[0.16em] mb-1.5">
              Role
            </div>
            <div className="text-ink text-[14px] md:text-[15px] font-normal leading-snug">
              {currentProject.role}
            </div>
          </div>

          {/* Col 2: Year */}
          <div>
            <div className="text-stone text-[12px] md:text-[13px] uppercase tracking-[0.16em] mb-1.5">
              Year
            </div>
            <div className="text-ink text-[14px] md:text-[15px] font-normal leading-snug">
              {currentProject.year}
            </div>
          </div>

          {/* Col 3: Tools */}
          <div>
            <div className="text-stone text-[12px] md:text-[13px] uppercase tracking-[0.16em] mb-1.5">
              Tools
            </div>
            <div className="text-ink text-[14px] md:text-[15px] font-normal leading-snug">
              {currentProject.tools}
            </div>
          </div>

          {/* Col 4: Link (No icons) */}
          <div>
            <div className="text-stone text-[12px] md:text-[13px] uppercase tracking-[0.16em] mb-1.5">
              Link
            </div>
            <div>
              <a
                href={currentProject.liveUrl || "#"}
                target="_blank"
                rel="noreferrer"
                className="text-ink text-[14px] md:text-[15px] font-normal tracking-tight border-b border-ink hover:text-signal hover:border-signal transition-colors duration-150 inline-block pb-0.5"
              >
                {currentProject.linkText || "Visit project"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTRO PARAGRAPH IN BODY-LG (6 columns wide, offset to the right) */}
      <section className="w-full px-5 md:px-10 py-16 md:py-24" aria-label="Project Overview">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="hidden md:block md:col-span-6" aria-hidden="true" />
          <div className="col-span-1 md:col-span-6">
            <p className="font-body text-[20px] sm:text-[22px] md:text-[25px] leading-[1.38] text-ink font-normal tracking-tight max-w-[620px]">
              {currentProject.introParagraph}
            </p>
          </div>
        </div>
      </section>

      {/* 5. ALTERNATING FULL-BLEED AND TWO-UP IMAGES (Hard-cropped, no cards/shadows) */}
      <section className="w-full space-y-12 md:space-y-16" aria-label="Project Imagery">
        {/* Gallery Image 1: Full-Bleed */}
        <div className="w-full h-[55vh] sm:h-[65vh] md:h-[75vh] overflow-hidden bg-ink select-none">
          <img
            src={currentProject.gallery.full1}
            alt={`${currentProject.title} detail view 1`}
            className="w-full h-full object-cover grayscale contrast-125 brightness-95"
            loading="lazy"
          />
        </div>

        {/* Gallery Image 2 & 3: Two-Up Images */}
        <div className="w-full px-5 md:px-10 select-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="w-full h-[42vh] sm:h-[50vh] md:h-[58vh] overflow-hidden bg-ink">
              <img
                src={currentProject.gallery.twoUp1}
                alt={`${currentProject.title} component view`}
                className="w-full h-full object-cover grayscale contrast-125 brightness-95"
                loading="lazy"
              />
            </div>
            <div className="w-full h-[42vh] sm:h-[50vh] md:h-[58vh] overflow-hidden bg-ink">
              <img
                src={currentProject.gallery.twoUp2}
                alt={`${currentProject.title} architectural view`}
                className="w-full h-full object-cover grayscale contrast-125 brightness-95"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Gallery Image 4: Full-Bleed */}
        <div className="w-full h-[55vh] sm:h-[65vh] md:h-[75vh] overflow-hidden bg-ink select-none">
          <img
            src={currentProject.gallery.full2}
            alt={`${currentProject.title} detail view 2`}
            className="w-full h-full object-cover grayscale contrast-125 brightness-95"
            loading="lazy"
          />
        </div>
      </section>

      {/* 6. OUTCOME STATEMENT IN HEADLINE-XL WITH ONE NUMBER IN SIGNAL COLOR */}
      <section className="w-full px-5 md:px-10 py-20 md:py-32 select-none" aria-label="Project Outcome">
        <div className="max-w-[1180px]">
          <h2 className="font-display font-black text-ink text-4xl sm:text-5xl md:text-7xl lg:text-[84px] leading-[0.88] tracking-[-0.03em] uppercase">
            <span>{currentProject.outcomeTextBefore} </span>
            <span className="text-signal">{currentProject.outcomeNumber}</span>
            <span> {currentProject.outcomeTextAfter}</span>
          </h2>
        </div>
      </section>

      {/* 7. INK BAND: "NEXT" + NEXT PROJECT TITLE SPANNING FULL WIDTH */}
      <section className="w-full bg-ink text-paper py-20 md:py-28 px-5 md:px-10 select-none" aria-label="Next Project">
        <div className="w-full">
          <div className="font-mono text-[13px] md:text-[14px] text-stone tracking-[0.2em] uppercase mb-4 md:mb-6">
            Next
          </div>
          <Link
            href={`/work/${nextProject.slug}`}
            className="block font-display font-black text-paper text-[clamp(56px,12.5vw,180px)] leading-[0.82] tracking-[-0.03em] uppercase hover:text-signal transition-colors duration-150"
          >
            {nextProject.displayTitle || nextProject.title}
          </Link>
        </div>
      </section>

      {/* 8. BOTTOM FOOTER BAR */}
      <footer className="w-full bg-ink text-paper px-5 md:px-10 py-5 border-t border-paper/15 flex justify-between items-center font-mono text-[12px] md:text-[13px] select-none">
        <div>Firza Himawan 2025</div>
        <div>Editorial design & art direction</div>
      </footer>
    </main>
  );
}
