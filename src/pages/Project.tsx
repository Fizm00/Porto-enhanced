import { useParams } from "wouter";
import { projects } from "../content/projects.ts";

export default function Project() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  return (
    <main className="min-h-screen p-10 bg-paper text-ink">
      <div className="max-w-4xl space-y-6">
        <span className="font-mono text-sm tracking-wide text-stone">
          Route: /work/:slug ({slug})
        </span>
        <h1 className="font-display font-black text-5xl uppercase tracking-tight text-ink">
          {project ? project.title : "Project Not Found"}
        </h1>
        {project ? (
          <div className="space-y-4">
            <p className="font-body text-base text-ink">{project.summary}</p>
            <div className="font-mono text-sm text-stone border-t border-ink pt-4">
              <p>Year: {project.year}</p>
              <p>Role: {project.role}</p>
              <p>Discipline: {project.discipline}</p>
            </div>
          </div>
        ) : (
          <p className="font-body text-base text-ink">
            No project matches slug &ldquo;{slug}&rdquo;.
          </p>
        )}
        <div className="pt-4 font-mono text-sm flex gap-4">
          <a href="/work" className="underline text-ink hover:text-signal">
            Back to Work
          </a>
          <a href="/" className="underline text-ink hover:text-signal">
            Home
          </a>
        </div>
      </div>
    </main>
  );
}
