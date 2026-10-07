import { WorkPanels } from "../components/sections/WorkPanels.tsx";
import { WorkIndex } from "../components/sections/WorkIndex.tsx";

export default function Work() {
  return (
    <main className="w-full min-h-screen bg-paper text-ink">
      <WorkIndex forcedHoverRow={3} />
    </main>
  );
}

export function WorkPanelsPage() {
  return (
    <main className="w-full min-h-screen bg-ink text-paper">
      <WorkPanels />
    </main>
  );
}

export function WorkFrameAPage() {
  return (
    <main className="w-full min-h-screen bg-ink text-paper">
      <WorkPanels forcedFrame="a" />
    </main>
  );
}

export function WorkFrameBPage() {
  return (
    <main className="w-full min-h-screen bg-ink text-paper">
      <WorkPanels forcedFrame="b" />
    </main>
  );
}

export function WorkIndexPage() {
  return (
    <main className="w-full min-h-screen bg-paper text-ink">
      <WorkIndex forcedHoverRow={3} />
    </main>
  );
}
