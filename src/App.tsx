import { useState } from "react";
import { Switch, Route } from "wouter";
import { useLenis } from "./hooks/useLenis.ts";
import Preloader from "./components/layout/Preloader.tsx";
import Home from "./pages/Home.tsx";
import Work, { WorkFrameAPage, WorkFrameBPage, WorkPanelsPage, WorkIndexPage } from "./pages/Work.tsx";
import Project from "./pages/Project.tsx";
import BeyondPage from "./pages/BeyondPage.tsx";
import ContactPage, { ContactFrameAPage, ContactFrameBPage } from "./pages/ContactPage.tsx";
import MenuPage, { MenuFrameAPage, MenuFrameBPage } from "./pages/MenuPage.tsx";
import SkillsPage from "./pages/SkillsPage.tsx";
import NotFound from "./pages/NotFound.tsx";

import { StatementPage, StatementProgressPage, StatementRevealedPage } from "./pages/StatementPage.tsx";

export default function App() {
  useLenis();
  const [preloaderDone, setPreloaderDone] = useState(false);

  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";
  const isDirectPreview =
    pathname.startsWith("/statement") ||
    pathname.startsWith("/work/frame-") ||
    pathname.startsWith("/work-index") ||
    pathname.startsWith("/work/index") ||
    pathname === "/work" ||
    pathname.startsWith("/beyond") ||
    pathname.startsWith("/contact") ||
    pathname.startsWith("/menu") ||
    pathname.startsWith("/skills") ||
    searchParams?.has("frame") ||
    searchParams?.has("hover") ||
    searchParams?.has("state");

  const forcedProgress = searchParams?.has("progress")
    ? Number(searchParams.get("progress"))
    : undefined;

  return (
    <>
      {!isDirectPreview &&
        (!preloaderDone || forcedProgress !== undefined) && (
          <Preloader
            progress={forcedProgress}
            autoAnimate={forcedProgress === undefined}
            onComplete={() => setPreloaderDone(true)}
          />
        )}
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/statement" component={StatementPage} />
        <Route path="/statement/progress" component={StatementProgressPage} />
        <Route path="/statement/revealed" component={StatementRevealedPage} />
        <Route path="/work/frame-a" component={WorkFrameAPage} />
        <Route path="/work/frame-b" component={WorkFrameBPage} />
        <Route path="/work/panels" component={WorkPanelsPage} />
        <Route path="/work/index" component={WorkIndexPage} />
        <Route path="/work-index" component={WorkIndexPage} />
        <Route path="/work" component={Work} />
        <Route path="/work/:slug" component={Project} />
        <Route path="/beyond" component={BeyondPage} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/contact/frame-a" component={ContactFrameAPage} />
        <Route path="/contact/frame-b" component={ContactFrameBPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/menu/frame-a" component={MenuFrameAPage} />
        <Route path="/menu/frame-b" component={MenuFrameBPage} />
        <Route path="/menu" component={MenuPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}



