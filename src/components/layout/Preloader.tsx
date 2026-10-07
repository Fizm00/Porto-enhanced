import { useState, useEffect, useRef } from "react";
import { siteConfig } from "../../content/site.ts";
import { gsap } from "../../lib/gsap.ts";
import { useReducedMotion } from "../../hooks/useReducedMotion.ts";

export interface PreloaderProps {
  /** If provided, overrides current progress (e.g. 73 for visual verification) */
  progress?: number;
  /** Whether the preloader should auto-animate from 0 to 100 and exit */
  autoAnimate?: boolean;
  /** Duration in seconds for the count-up animation */
  duration?: number;
  /** Callback fired when preloader exit animation completes */
  onComplete?: () => void;
}

export function Preloader({
  progress: controlledProgress,
  autoAnimate = true,
  duration = 1.6,
  onComplete,
}: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const reducedMotion = useReducedMotion();
  const [animatedValue, setAnimatedValue] = useState<number>(0);

  const isControlled = controlledProgress !== undefined;
  const displayValue = isControlled ? controlledProgress : (reducedMotion ? 100 : animatedValue);

  useEffect(() => {
    if (isControlled) {
      if (progressBarRef.current) {
        gsap.set(progressBarRef.current, {
          scaleX: Math.min(Math.max(controlledProgress / 100, 0), 1),
        });
      }
      return;
    }

    if (reducedMotion) {
      if (progressBarRef.current) {
        gsap.set(progressBarRef.current, { scaleX: 1 });
      }
      onComplete?.();
      return;
    }

    if (!autoAnimate) {
      return;
    }

    const state = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        // Exit transition: slide preloader up out of view
        if (containerRef.current) {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.7,
            ease: "power3.inOut",
            onComplete: () => {
              onComplete?.();
            },
          });
        } else {
          onComplete?.();
        }
      },
    });

    tl.to(state, {
      value: 100,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        setAnimatedValue(Math.floor(state.value));
        if (progressBarRef.current) {
          gsap.set(progressBarRef.current, {
            scaleX: state.value / 100,
          });
        }
      },
    });

    return () => {
      tl.kill();
    };
  }, [controlledProgress, isControlled, autoAnimate, duration, reducedMotion, onComplete]);

  return (
    <div
      ref={containerRef}
      role="status"
      aria-live="polite"
      aria-label={`Loading portfolio, progress ${displayValue} percent`}
      className="fixed inset-0 z-50 w-full h-full overflow-hidden bg-ink select-none"
    >
      {/* Top Bar */}
      <header className="relative z-10 w-full flex items-center justify-between px-5 pt-6 sm:px-10 sm:pt-8 text-paper font-mono text-xs sm:text-sm tracking-wider uppercase">
        <span className="font-mono whitespace-nowrap">{siteConfig.name}</span>
        <span className="font-mono whitespace-nowrap">LOADING</span>
      </header>

      {/* Giant Bottom-Left Counter */}
      <div
        ref={counterRef}
        className="absolute bottom-0 left-0 font-display font-black text-paper tabular-nums tracking-tighter leading-[0.72] select-none pointer-events-none transform -translate-x-[4vw] translate-y-[5vh] sm:-translate-x-[2.8vw] sm:translate-y-[6vh] text-[56vh] sm:text-[72vh]"
      >
        {displayValue}
      </div>

      {/* Bottom Progress Line */}
      <div
        ref={progressBarRef}
        className="absolute bottom-0 left-0 w-full h-[2px] bg-signal origin-left pointer-events-none z-10"
        style={{
          transform: `scaleX(${
            isControlled
              ? Math.min(Math.max(controlledProgress / 100, 0), 1)
              : (reducedMotion ? 1 : animatedValue / 100)
          })`,
        }}
      />
    </div>
  );
}

export default Preloader;
