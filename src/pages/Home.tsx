import { siteConfig } from "../content/site.ts";
import { personalInfo } from "../content/personal.ts";

export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-paper text-ink">
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="font-mono text-sm tracking-wide text-stone">
            Phase 0 — Setup Verification
          </span>
          <h1 className="font-display font-black text-6xl uppercase tracking-tight text-ink mt-2">
            {siteConfig.name}
          </h1>
        </div>

        <p className="font-body text-xl leading-relaxed text-ink max-w-xl">
          Body typography rendered in Instrument Sans. Fast, readable, and strictly non-serif editorial layout.
        </p>

        <div className="border-t border-ink pt-4 font-mono text-sm space-y-1 text-stone">
          <p>Location: {personalInfo.location}</p>
          <p>Font Display: Big Shoulders Display (800 / 900)</p>
          <p>Font Body: Instrument Sans (400 - 700)</p>
          <p>Font Mono: DM Mono (400 / 500)</p>
        </div>

        <div className="flex gap-4 font-mono text-sm pt-4">
          <a href="/work" className="underline text-ink hover:text-signal">
            View /work route
          </a>
          <a href="/work/placeholder-project-1" className="underline text-ink hover:text-signal">
            View /work/:slug route
          </a>
          <a href="/unknown-route" className="underline text-ink hover:text-signal">
            View 404 route
          </a>
        </div>
      </div>
    </main>
  );
}
