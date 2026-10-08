import React, { useRef, useEffect } from "react";
import { beyondContent } from "../../content/personal.ts";
import { gsap, useGSAP } from "../../lib/gsap.ts";
import { useReducedMotion } from "../../hooks/useReducedMotion.ts";

export interface BeyondProps {
  className?: string;
}

export const Beyond: React.FC<BeyondProps> = ({ className = "" }) => {
  const { title, subtitle, photos, chapters, rightNow } = beyondContent;
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  // 1. Precise headline font size calculation for 1440px desktop
  // Scales Big Shoulders Display 900 so "Beyond the work" spans exactly left-to-right margin without wrapping
  useEffect(() => {
    const updateTitleSize = () => {
      if (!titleRef.current || !titleContainerRef.current) return;
      if (window.innerWidth < 1024) {
        titleRef.current.style.fontSize = "";
        return;
      }
      // Measure single unconstrained line width at 100px base
      titleRef.current.style.fontSize = "100px";
      const containerWidth = titleContainerRef.current.clientWidth;
      const textWidth = titleRef.current.scrollWidth;
      if (textWidth > 0 && containerWidth > 0) {
        const calculatedSize = (containerWidth / textWidth) * 100;
        titleRef.current.style.fontSize = `${calculatedSize}px`;
      }
    };

    updateTitleSize();
    if (document.fonts) {
      document.fonts.ready.then(updateTitleSize);
    }
    window.addEventListener("resize", updateTitleSize);
    return () => window.removeEventListener("resize", updateTitleSize);
  }, []);

  // 2. GSAP Scoped Animations
  // - Photos: clip-path wipe inset(0 100% 0 0) -> inset(0), 0.9s expo.out once at 25% viewport (top 75%)
  // - Chapter titles: line mask reveal
  // - Paragraphs & Right now: static, no animation
  useGSAP(
    () => {
      if (reducedMotion) return;

      // Photo wipe animations
      const photoElements = sectionRef.current?.querySelectorAll<HTMLElement>(".photo-wipe");
      photoElements?.forEach((img) => {
        gsap.fromTo(
          img,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 0.9,
            ease: "expo.out",
            scrollTrigger: {
              trigger: img,
              start: "top 75%",
              once: true,
            },
          }
        );
      });

      // Chapter title mask reveal per line
      const titleLines = sectionRef.current?.querySelectorAll<HTMLElement>(".title-mask-line");
      titleLines?.forEach((line) => {
        gsap.fromTo(
          line,
          { yPercent: 105 },
          {
            yPercent: 0,
            duration: 0.9,
            ease: "expo.out",
            scrollTrigger: {
              trigger: line,
              start: "top 80%",
              once: true,
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="beyond"
      className={`w-full bg-paper text-ink overflow-hidden py-20 lg:py-[160px] select-none ${className}`}
      style={{ backgroundColor: "#F2EFE8", color: "#0E0E0E" }}
      aria-label="Beyond the work"
    >
      <div className="w-full px-5 md:px-10">
        {/* =========================================================================
            1. SECTION TITLE: "Beyond the work"
            - Desktop: Big Shoulders Display 900, one line, exact margin-to-margin
            - 24px below, columns 8-12: Instrument Sans 22px stone
            - Mobile: Breaks naturally into 2 or 3 lines
            ========================================================================= */}
        <div ref={titleContainerRef} className="w-full overflow-hidden">
          <h2
            ref={titleRef}
            className="font-display font-black text-ink uppercase leading-[0.85] tracking-tight whitespace-normal lg:whitespace-nowrap text-[clamp(44px,13.5vw,76px)]"
          >
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 mt-6">
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="font-body text-[18px] lg:text-[22px] leading-[1.45] text-stone font-normal">
              {subtitle}
            </p>
          </div>
        </div>

        {/* =========================================================================
            2. THREE CHAPTERS (160px vertical rhythm between chapters on desktop)
            ========================================================================= */}
        <div className="mt-12 sm:mt-16 lg:mt-[160px] space-y-14 sm:space-y-20 lg:space-y-[160px]">
          {/* ───────────────────────────────────────────────────────────────────────
              BAB 1: "GUNPLA"
              - Cols 1-8: Gunpla cutting bench landscape 4:3
              - Cols 9-12: Title "GUNPLA" (~7vw) aligned to photo top, paragraph aligned to photo bottom
              - Caption: 1 sentence, Instrument Sans 14px stone under photo
              ─────────────────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-8 items-stretch">
            {/* Photo Column (Cols 1-8) */}
            <div className="lg:col-span-8 flex flex-col order-1">
              <div className="-mx-5 lg:mx-0 w-[calc(100%+40px)] lg:w-full aspect-[4/3] overflow-hidden bg-paper">
                <img
                  src={photos.gunpla.src}
                  alt={photos.gunpla.alt}
                  className="w-full h-full object-cover rounded-none photo-wipe select-none"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 font-body text-[14px] leading-snug text-stone">
                {photos.gunpla.caption}
              </p>
            </div>

            {/* Narrative Column (Cols 9-12) */}
            <div className="lg:col-span-4 flex flex-col justify-between pt-2 lg:pt-0 pb-0 lg:pb-7 order-2">
              <div className="overflow-hidden">
                <h3 className="font-display font-extrabold text-[44px] lg:text-[7vw] uppercase leading-[0.88] tracking-tight text-ink">
                  <span className="block overflow-hidden">
                    <span className="title-mask-line block">GUNPLA</span>
                  </span>
                </h3>
              </div>
              <div className="mt-6 lg:mt-0">
                <p className="font-body text-[18px] lg:text-[22px] leading-[1.45] text-ink font-normal">
                  {chapters[0].paragraph}
                </p>
              </div>
            </div>
          </div>

          {/* ───────────────────────────────────────────────────────────────────────
              BAB 2: "WALKING TO TUGU"
              - Cols 1-4: Title in 3 lines (~7vw) and paragraph below it
              - Cols 7-12: Tugu portrait photo 4:5
              - Cols 4-6: Smaller drafting desk photo overlapping Tugu photo's bottom-left by 24px
              - Mobile: Photos stacked full-width without overlap, title & paragraph below
              ─────────────────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-8 items-start">
            {/* Left Narrative Column (Cols 1-4 on Desktop, below photos on mobile) */}
            <div className="lg:col-span-4 flex flex-col order-2 lg:order-1 pt-2 lg:pt-0">
              <div className="overflow-hidden">
                <h3 className="font-display font-extrabold text-[44px] lg:text-[7vw] uppercase leading-[0.88] tracking-tight text-ink">
                  <span className="block overflow-hidden">
                    <span className="title-mask-line block">WALKING</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="title-mask-line block">TO</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="title-mask-line block">TUGU</span>
                  </span>
                </h3>
              </div>
              <p className="mt-8 font-body text-[18px] lg:text-[22px] leading-[1.45] text-ink font-normal max-w-[34ch]">
                {chapters[1].paragraph}
              </p>
            </div>

            {/* Right Photo Area (Cols 5-12 Desktop with 24px overlap, stacked on mobile) */}
            <div className="lg:col-span-8 lg:col-start-5 order-1 lg:order-2 relative flex flex-col">
              {/* Photo 1: Tugu Portrait 4:5 (Right-aligned in desktop area) */}
              <div className="-mx-5 lg:mx-0 w-[calc(100%+40px)] lg:w-[68%] lg:ml-auto">
                <div className="w-full aspect-[4/5] overflow-hidden bg-paper">
                  <img
                    src={photos.tugu.src}
                    alt={photos.tugu.alt}
                    className="w-full h-full object-cover rounded-none photo-wipe select-none"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 font-body text-[14px] leading-snug text-stone">
                  {photos.tugu.caption}
                </p>
              </div>

              {/* Photo 2: Smaller Drafting Desk (Overlaps bottom-left of Tugu by 24px on desktop) */}
              <div className="-mx-5 lg:mx-0 w-[calc(100%+40px)] lg:w-[40%] mt-8 lg:mt-0 lg:absolute lg:bottom-6 lg:left-0 lg:z-10">
                <div className="w-full aspect-[4/3] overflow-hidden bg-paper">
                  <img
                    src={photos.desk.src}
                    alt={photos.desk.alt}
                    className="w-full h-full object-cover rounded-none photo-wipe select-none"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 font-body text-[14px] leading-snug text-stone">
                  {photos.desk.caption}
                </p>
              </div>
            </div>
          </div>

          {/* ───────────────────────────────────────────────────────────────────────
              BAB 3: "KOPI & IEM"
              - Display title Big Shoulders 900 margin-to-margin (~9vw) on top
              - Cols 1-6: Coffee landscape photo + paragraph in cols 1-4 below it
              - Cols 7-12: IEM cable landscape photo, shifted down 120px from coffee photo
              - Mobile: Photos stacked full-width without overlap, title and paragraph below
              ─────────────────────────────────────────────────────────────────────── */}
          <div className="flex flex-col">
            {/* Title Display on Top */}
            <div className="w-full overflow-hidden mb-8 lg:mb-16 order-2 lg:order-1 pt-4 lg:pt-0">
              <h3 className="font-display font-black text-ink uppercase leading-[0.88] tracking-tight text-[clamp(44px,9vw,170px)]">
                <span className="block overflow-hidden">
                  <span className="title-mask-line block">COFFEE & IEMS</span>
                </span>
              </h3>
            </div>

            {/* Photos & Paragraph Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-12 items-start order-1 lg:order-2">
              {/* Left Column (Cols 1-6): Coffee Photo + Paragraph in Cols 1-4 */}
              <div className="lg:col-span-6 flex flex-col">
                <div className="-mx-5 lg:mx-0 w-[calc(100%+40px)] lg:w-full aspect-[16/10] overflow-hidden bg-paper">
                  <img
                    src={photos.coffee.src}
                    alt={photos.coffee.alt}
                    className="w-full h-full object-cover rounded-none photo-wipe select-none"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 font-body text-[14px] leading-snug text-stone">
                  {photos.coffee.caption}
                </p>

                {/* Paragraph directly under coffee photo, restricted to Cols 1-4 width */}
                <div className="mt-8 lg:mt-10 lg:w-[68%]">
                  <p className="font-body text-[18px] lg:text-[22px] leading-[1.45] text-ink font-normal">
                    {chapters[2].paragraph}
                  </p>
                </div>
              </div>

              {/* Right Column (Cols 7-12): IEM Photo, shifted down 120px on desktop */}
              <div className="lg:col-span-6 flex flex-col lg:pt-[120px]">
                <div className="-mx-5 lg:mx-0 w-[calc(100%+40px)] lg:w-full aspect-[16/10] overflow-hidden bg-paper">
                  <img
                    src={photos.iem.src}
                    alt={photos.iem.alt}
                    className="w-full h-full object-cover rounded-none photo-wipe select-none"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 font-body text-[14px] leading-snug text-stone">
                  {photos.iem.caption}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. "RIGHT NOW"
            - 1px ink rule above
            - 3 rows margin-to-margin separated by 1px ink 20% rules, py 32px
            - Cols 1-3: Label in Instrument Sans 22px stone
            - Cols 4-12: Value in Big Shoulders 800 ~48px uppercase ink
            - Zero signal color used anywhere
            - Mobile: Stacked (label on top of value)
            ========================================================================= */}
        <div className="mt-16 sm:mt-20 lg:mt-[160px] border-t border-ink w-full">
          {rightNow.items.map((item, idx) => (
            <div
              key={idx}
              className="border-b border-ink/20 py-6 lg:py-[32px] grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-2 items-baseline"
            >
              <div className="lg:col-span-3">
                <span className="font-body text-[18px] lg:text-[22px] leading-[1.4] text-stone font-normal">
                  {item.label}
                </span>
              </div>
              <div className="lg:col-span-9">
                <span className="font-display font-extrabold text-[28px] sm:text-[38px] lg:text-[48px] uppercase leading-[0.95] tracking-tight text-ink block">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beyond;
