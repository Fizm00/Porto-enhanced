export default function NotFound() {
  return (
    <main className="min-h-screen p-10 bg-paper text-ink">
      <div className="max-w-4xl space-y-6">
        <span className="font-mono text-sm tracking-wide text-stone">
          404 — Not Found
        </span>
        <h1 className="font-display font-black text-6xl uppercase tracking-tight text-ink">
          Page Not Found
        </h1>
        <p className="font-body text-base text-ink">
          The requested page could not be located.
        </p>
        <div className="pt-4 font-mono text-sm">
          <a href="/" className="underline text-ink hover:text-signal">
            Return to Home
          </a>
        </div>
      </div>
    </main>
  );
}
