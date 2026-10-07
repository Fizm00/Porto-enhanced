import { useState } from "react";
import { Switch, Route } from "wouter";
import { useLenis } from "./hooks/useLenis.ts";
import Preloader from "./components/layout/Preloader.tsx";
import Home from "./pages/Home.tsx";
import Work from "./pages/Work.tsx";
import Project from "./pages/Project.tsx";
import NotFound from "./pages/NotFound.tsx";

export default function App() {
  useLenis();
  const [preloaderDone, setPreloaderDone] = useState(false);

  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  const forcedProgress = searchParams?.has("progress")
    ? Number(searchParams.get("progress"))
    : undefined;

  return (
    <>
      {(!preloaderDone || forcedProgress !== undefined) && (
        <Preloader
          progress={forcedProgress}
          autoAnimate={forcedProgress === undefined}
          onComplete={() => setPreloaderDone(true)}
        />
      )}
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/work/:slug" component={Project} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
