import { MenuOverlay } from "../components/layout/MenuOverlay.tsx";

export default function MenuPage() {
  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  const isFrameB =
    pathname.endsWith("/frame-b") ||
    searchParams?.get("frame") === "2" ||
    searchParams?.get("frame") === "b" ||
    searchParams?.get("hover") === "ABOUT";

  return (
    <main className="w-full min-h-screen bg-signal">
      <MenuOverlay
        isOpen={true}
        isStatic={true}
        forcedHoveredLink={isFrameB ? "ABOUT" : null}
      />
    </main>
  );
}

export function MenuFrameAPage() {
  return (
    <main className="w-full min-h-screen bg-signal">
      <MenuOverlay isOpen={true} isStatic={true} forcedHoveredLink={null} />
    </main>
  );
}

export function MenuFrameBPage() {
  return (
    <main className="w-full min-h-screen bg-signal">
      <MenuOverlay isOpen={true} isStatic={true} forcedHoveredLink="ABOUT" />
    </main>
  );
}
