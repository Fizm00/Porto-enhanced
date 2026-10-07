import { Hero } from "../components/sections/Hero.tsx";
import { Statement } from "../components/sections/Statement.tsx";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-paper text-ink">
      <Hero />
      <Statement />
    </main>
  );
}
