import { useRef, useMemo, useEffect } from "react";
import { personalInfo } from "../../content/personal.ts";
import { gsap, useGSAP, ScrollTrigger } from "../../lib/gsap.ts";
import { useReducedMotion } from "../../hooks/useReducedMotion.ts";
import section2Image from "../../assets/section2.jpeg";

export interface StatementProps {
  /**
   * frame mode:
   * - "dynamic": starts at 60% progress and scrubs word-by-word into 100% revealed upon scroll.
   * - "progress": Frame 1 static frame (60% paper, 40% opacity 25%, Signal keyword).
   * - "revealed": Frame 2 static frame (100% paper, Signal keyword).
   */
  frame?: "dynamic" | "progress" | "revealed";
  headingTag?: "h1" | "h2";
}

export function Statement({ frame, headingTag = "h2" }: StatementProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const reducedMotion = useReducedMotion();

  // Resolve frame from prop or URL search param (?frame=progress | ?frame=revealed | ?frame=1 | ?frame=2)
  const resolvedFrame = useMemo(() => {
    if (frame) return frame;
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const f = searchParams.get("frame") || searchParams.get("statement");
      if (f === "progress" || f === "1") return "progress";
      if (f === "revealed" || f === "2") return "revealed";
    }
    return "dynamic";
  }, [frame]);

  // Derive words array from personalInfo.statement
  const leadWords = useMemo(
    () => personalInfo.statement.lead.trim().split(/\s+/),
    []
  );
  const keyword = personalInfo.statement.keyword;
  const revealedWords = useMemo(
    () => personalInfo.statement.revealed.trim().split(/\s+/),
    []
  );
  const unrevealedWords = useMemo(
    () => personalInfo.statement.unrevealed.trim().split(/\s+/),
    []
  );

  const isStaticProgress = resolvedFrame === "progress";
  const isStaticRevealed = resolvedFrame === "revealed" || reducedMotion;

  // Refresh ScrollTrigger when DOM is fully settled
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  // GSAP word-by-word dynamic scroll-reveal
  useGSAP(
    () => {
      if (isStaticProgress || isStaticRevealed || !sectionRef.current) return;

      const words = sectionRef.current.querySelectorAll<HTMLSpanElement>(
        ".statement-unrevealed-word"
      );
      if (!words || words.length === 0) return;

      // Pin section and scrub words word-by-word from 25% opacity to 100% paper
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: "top top",
          end: "+=100%",
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        words,
        { opacity: 0.25 },
        {
          opacity: 1,
          stagger: 0.08,
          ease: "none",
        }
      );
    },
    { scope: sectionRef, dependencies: [isStaticProgress, isStaticRevealed] }
  );

  const Heading = headingTag;

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="Personal Statement"
      className="relative w-full min-h-screen flex flex-col justify-center bg-ink text-paper px-5 md:px-10 py-16 md:py-24 select-none overflow-hidden z-10"
    >
      {/* Background image with darkened/black aesthetic overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img
          src={section2Image}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.1]"
        />
        {/* Dark ink overlay and soft vignette so text is perfectly legible */}
        <div className="absolute inset-0 bg-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/20 to-ink/85" />
      </div>

      {/* 12-column grid layout container (max-w: 1360px, gap: 24px) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-[1360px] mx-auto items-center my-auto">
        {/* 10 columns left-aligned statement */}
        <div className="col-span-1 md:col-span-10">
          <Heading
            ref={textRef}
            className="font-display font-extrabold uppercase leading-[0.92] tracking-normal [word-spacing:0.05em] text-left"
            style={{
              fontSize: "clamp(32px, min(6.5vw, 8.2vh), 88px)",
            }}
          >
            {/* First 60% of words in paper color */}
            {leadWords.map((word, idx) => (
              <span key={`lead-${idx}`} className="text-paper">
                {word}{" "}
              </span>
            ))}

            {/* Exactly one key word in Signal (#FF4A1C) */}
            <span className="text-signal">{keyword}{" "}</span>

            {/* Remaining part of the first 60% */}
            {revealedWords.map((word, idx) => (
              <span key={`rev-${idx}`} className="text-paper">
                {word}{" "}
              </span>
            ))}

            {/* Remaining 40% of words (illuminates word-by-word during scroll scrub) */}
            {unrevealedWords.map((word, idx) => {
              const defaultOpacity = isStaticRevealed ? 1 : 0.25;
              return (
                <span
                  key={`unrev-${idx}`}
                  className="statement-unrevealed-word text-paper inline"
                  style={{ opacity: defaultOpacity }}
                >
                  {word}
                  {idx < unrevealedWords.length - 1 ? " " : ""}
                </span>
              );
            })}
          </Heading>
        </div>
      </div>
    </section>
  );
}

export default Statement;
