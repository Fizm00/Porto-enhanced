import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "../lib/gsap.ts";
import { useReducedMotion } from "./useReducedMotion.ts";

declare global {
  interface Window {
    __lenis?: Lenis | null;
  }
}


export function scrollToTarget(target: string | HTMLElement, offset = 0) {
  if (typeof window === "undefined") return;

  const lenis = window.__lenis;
  if (lenis) {
    lenis.scrollTo(target, { offset, duration: 1.4 });
    return;
  }

  const el =
    typeof target === "string" ? document.querySelector(target) : target;
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function useLenis() {
  const reducedMotion = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (reducedMotion || typeof window === "undefined") {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
        window.__lenis = null;
      }
      return;
    }

    const lenis = new Lenis();
    lenisRef.current = lenis;
    window.__lenis = lenis;

    const handleScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", handleScroll);

    const handleTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(handleTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(handleTicker);
      lenis.destroy();
      lenisRef.current = null;
      window.__lenis = null;
    };
  }, [reducedMotion]);

  return lenisRef;
}
