import { useState } from "react";
import { Statement } from "../components/sections/Statement.tsx";

export function StatementPage() {
  const [activeFrame, setActiveFrame] = useState<"progress" | "revealed">("progress");

  return (
    <div className="relative w-full bg-ink text-paper min-h-screen">
      {/* Frame Switcher Bar (Fixed top-right for design inspection) */}
      <div className="fixed top-4 right-5 md:right-10 z-50 flex items-center gap-2 bg-ink/90 border border-stone/30 p-1">
        <button
          onClick={() => setActiveFrame("progress")}
          className={`font-mono text-[12px] px-3 py-1 uppercase transition-colors ${
            activeFrame === "progress"
              ? "bg-paper text-ink font-medium"
              : "text-stone hover:text-paper"
          }`}
        >
          Frame 1: 60% In Progress
        </button>
        <button
          onClick={() => setActiveFrame("revealed")}
          className={`font-mono text-[12px] px-3 py-1 uppercase transition-colors ${
            activeFrame === "revealed"
              ? "bg-signal text-paper font-medium"
              : "text-stone hover:text-paper"
          }`}
        >
          Frame 2: 100% Revealed
        </button>
      </div>

      {/* Renders the selected frame */}
      <Statement frame={activeFrame} headingTag="h1" />
    </div>
  );
}

export function StatementProgressPage() {
  return <Statement frame="progress" headingTag="h1" />;
}

export function StatementRevealedPage() {
  return <Statement frame="revealed" headingTag="h1" />;
}

export default StatementPage;
