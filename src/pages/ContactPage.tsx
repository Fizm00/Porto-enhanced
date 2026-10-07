import { Contact } from "../components/sections/Contact.tsx";

export default function ContactPage() {
  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  const isCopied =
    searchParams?.get("state") === "copied" ||
    searchParams?.get("state") === "hover" ||
    pathname.endsWith("/frame-b");

  return (
    <main className="w-full min-h-screen bg-ink text-paper">
      <Contact
        forceState={isCopied ? "copied" : undefined}
        showNav={false}
      />
    </main>
  );
}

export function ContactFrameAPage() {
  return (
    <main className="w-full min-h-screen bg-ink text-paper">
      <Contact forceState="default" showNav={false} />
    </main>
  );
}

export function ContactFrameBPage() {
  return (
    <main className="w-full min-h-screen bg-ink text-paper">
      <Contact forceState="copied" showNav={false} />
    </main>
  );
}
