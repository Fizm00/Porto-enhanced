import { projects } from "../content/projects.ts";

export default function Work() {
  return (
    <main className="min-h-screen p-10 bg-paper text-ink">
      <div className="max-w-4xl space-y-6">
        <span className="font-mono text-sm tracking-wide text-stone">
          Route: /work
        </span>
        <h1 className="font-display font-black text-5xl uppercase tracking-tight text-ink">
          Selected Work
        </h1>
        <p className="font-body text-base text-ink">
          Work index page placeholder. Projects loaded: {projects.length}.
        </p>
        <ul className="space-y-2 border-t border-ink pt-4 font-mono text-sm">
          {projects.map((project) => (
            <li key={project.id}>
              <a
                href={`/work/${project.slug}`}
                className="underline text-ink hover:text-signal"
              >
                {project.title} ({project.year}) — {project.role}
              </a>
            </li>
          ))}
        </ul>
        <div className="pt-4 font-mono text-sm">
          <a href="/" className="underline text-ink hover:text-signal">
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
