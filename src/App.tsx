import { Switch, Route } from "wouter";
import { useLenis } from "./hooks/useLenis.ts";
import Home from "./pages/Home.tsx";
import Work from "./pages/Work.tsx";
import Project from "./pages/Project.tsx";
import NotFound from "./pages/NotFound.tsx";

export default function App() {
  useLenis();

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/work/:slug" component={Project} />
      <Route component={NotFound} />
    </Switch>
  );
}
