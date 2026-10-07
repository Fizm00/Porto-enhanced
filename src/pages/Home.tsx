import { useState } from "react";
import { Hero } from "../components/sections/Hero.tsx";
import { Statement } from "../components/sections/Statement.tsx";
import { WorkPanels } from "../components/sections/WorkPanels.tsx";
import { WorkIndex } from "../components/sections/WorkIndex.tsx";
import { Beyond } from "../components/sections/Beyond.tsx";
import { Skills } from "../components/sections/Skills.tsx";
import { Contact } from "../components/sections/Contact.tsx";
import { MenuOverlay } from "../components/layout/MenuOverlay.tsx";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="w-full min-h-screen bg-paper text-ink relative">
      <Hero onMenuClick={() => setIsMenuOpen(true)} />
      <Statement />
      <WorkPanels />
      <WorkIndex />
      <Skills />
      <Beyond />
      <Contact />

      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </main>
  );
}



