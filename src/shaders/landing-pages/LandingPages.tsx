import { useMemo } from "react";

import {
  splitTypographyProps,
  usePageTypography,
  type PageTypographyProps,
} from "./pageTypography";
import { LandingPageFrame, type LandingPageProps } from "./LandingPageFrame";
export { LandingPageFrame, applyBackgroundPresentation } from "./LandingPageFrame";
export type { LandingPageFrameProps, LandingPageProps } from "./LandingPageFrame";
import { SYLVA_TYPOGRAPHY } from "./pageRecipes";
import innerGreenSource from "../sylva-living-world/sources/inner-green-3d.html?raw";
import {
  MAPLE_AUTUMN_STYLE,
  SAKURA_SUNSET_STYLE,
  SEQUOIA_MIST_STYLE,
  applyMapleAutumnVariant,
  applySakuraSunsetVariant,
  applySequoiaMistVariant,
} from "../sylva-living-world/SylvaLivingWorldScene";

export const SYLVA_HERO_VARIANTS = [
  "living-green",
  "sakura-sunset",
  "maple-autumn",
  "sequoia-mist",
] as const;
export type SylvaHeroVariant = (typeof SYLVA_HERO_VARIANTS)[number];

export type SylvaHeroProps = LandingPageProps &
  PageTypographyProps & {
    variant?: SylvaHeroVariant;
    paperBg?: boolean;
    presentation?: "page" | "background";
  };

const SYLVA_HERO_BASE_URL = "/landing-pages/inner-green-3d.html";
const SYLVA_HERO_ASSET_DIR = "inner-green-assets/";
const SYLVA_HERO_ASSET_BASE = `${SYLVA_HERO_BASE_URL.replace(/[^/]+$/, "")}${SYLVA_HERO_ASSET_DIR}`;

type SylvaHeroChromeTone = {
  edge: string;
  lift: string;
  panel: string;
  drop: string;
  nearPanel: string;
  mark: string;
  markInk: string;
  plate: string;
};

const SYLVA_HERO_CHROME_TONES: Record<
  Exclude<SylvaHeroVariant, "living-green">,
  SylvaHeroChromeTone
> = {
  "sakura-sunset": {
    edge: "255, 236, 243",
    lift: "255, 240, 246",
    panel: "48, 33, 43",
    drop: "20, 10, 18",
    nearPanel: "53, 35, 46",
    mark: "#f3e9ee",
    markInk: "#33222c",
    plate: "58, 40, 51",
  },
  "maple-autumn": {
    edge: "228, 240, 246",
    lift: "232, 244, 250",
    panel: "33, 41, 47",
    drop: "8, 14, 18",
    nearPanel: "37, 46, 53",
    mark: "#e8eff2",
    markInk: "#23303a",
    plate: "34, 46, 54",
  },
  "sequoia-mist": {
    edge: "236, 244, 232",
    lift: "238, 246, 232",
    panel: "38, 48, 40",
    drop: "16, 24, 18",
    nearPanel: "43, 54, 44",
    mark: "#eef3e8",
    markInk: "#26302a",
    plate: "48, 60, 50",
  },
};

function sylvaHeroChromeStyle(tone: SylvaHeroChromeTone) {
  return `<style data-threeui-sylva-hero-chrome>
.dock {
  border-color: rgba(${tone.edge}, 0.13) !important;
  background:
    linear-gradient(180deg, rgba(${tone.lift}, 0.06), rgba(${tone.lift}, 0) 42%),
    rgba(${tone.panel}, 0.76) !important;
  box-shadow: 0 calc(8 * var(--u)) calc(22 * var(--u)) rgba(${tone.drop}, 0.34),
              inset 0 1px rgba(${tone.lift}, 0.07) !important;
}

.dock-item[data-near="true"] {
  border-color: rgba(${tone.edge}, 0.20) !important;
  background: rgba(${tone.nearPanel}, 0.94) !important;
  box-shadow: 0 calc(7 * var(--u)) calc(16 * var(--u)) rgba(${tone.drop}, 0.32) !important;
}

.dock-mark {
  background: ${tone.mark} !important;
  border-color: ${tone.mark} !important;
  color: ${tone.markInk} !important;
}

.dock-mark[data-near="true"] {
  background: #fff !important;
  border-color: #fff !important;
  color: ${tone.markInk} !important;
}

.dock-item--enter { background: rgba(${tone.lift}, 0.085) !important; }

.pill-glass {
  position: absolute;
  z-index: 4;
  left: calc(644 * var(--u));
  top: calc(360 * var(--u));
  width: calc(204 * var(--u));
  height: calc(62 * var(--u));
  margin: calc(-31 * var(--u)) 0 0 calc(-102 * var(--u));
  border-radius: 999px;
  pointer-events: none;
  -webkit-backdrop-filter: blur(calc(13 * var(--u))) saturate(1.16);
  backdrop-filter: blur(calc(13 * var(--u))) saturate(1.16);
  background: rgba(${tone.plate}, 0.22);
}

.play-wrap::before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 50%;
  top: 50%;
  width: calc(90 * var(--u));
  height: calc(90 * var(--u));
  margin: calc(-45 * var(--u)) 0 0 calc(-45 * var(--u));
  border-radius: 50%;
  -webkit-backdrop-filter: blur(calc(13 * var(--u))) saturate(1.16);
  backdrop-filter: blur(calc(13 * var(--u))) saturate(1.16);
  background: rgba(${tone.plate}, 0.22);
}
</style>`;
}

const SYLVA_HERO_SCENES: Record<
  Exclude<SylvaHeroVariant, "living-green">,
  {
    style: string;
    apply: (source: string) => string;
  }
> = {
  "sakura-sunset": {
    style: SAKURA_SUNSET_STYLE,
    apply: applySakuraSunsetVariant,
  },
  "maple-autumn": {
    style: MAPLE_AUTUMN_STYLE,
    apply: applyMapleAutumnVariant,
  },
  "sequoia-mist": {
    style: SEQUOIA_MIST_STYLE,
    apply: applySequoiaMistVariant,
  },
};

const PAPER_WHITE_OVERRIDE = `<style data-threeui-paper-bg>
html, body {
  background: #F2EFE8 !important;
}
.hero {
  background:
    radial-gradient(66% 56% at 26% 90%, rgba(255, 216, 176, 0.15) 0%, rgba(255, 216, 176, 0) 74%),
    radial-gradient(74% 64% at 92% 2%, rgba(242, 239, 232, 0.40) 0%, rgba(242, 239, 232, 0) 72%),
    #F2EFE8 !important;
}
.hero::after {
  background:
    radial-gradient(76% 48% at 44% 118%, rgba(255, 206, 158, 0.24) 0%, rgba(255, 194, 150, 0.08) 44%, rgba(255, 188, 146, 0) 86%),
    linear-gradient(180deg, rgba(255, 206, 160, 0) 56%, rgba(255, 200, 156, 0.028) 78%, rgba(255, 206, 160, 0.070) 100%) !important;
}
#scene {
  opacity: 1 !important;
}
</style>`;

export function buildSylvaHeroDocument(
  variant: Exclude<SylvaHeroVariant, "living-green">,
  paperBg = false
) {
  const scene = SYLVA_HERO_SCENES[variant];
  const paperStyle = paperBg ? PAPER_WHITE_OVERRIDE : "";
  const rooted = innerGreenSource
    .replaceAll(SYLVA_HERO_ASSET_DIR, SYLVA_HERO_ASSET_BASE)
    .replace(
      "</head>",
      `${scene.style}${sylvaHeroChromeStyle(SYLVA_HERO_CHROME_TONES[variant])}${paperStyle}</head>`
    )
    .replace(
      '<div class="pill-clip">',
      '<span class="pill-glass" aria-hidden="true"></span>\n    <div class="pill-clip">'
    );
  if (!rooted.includes("pill-glass")) {
    throw new Error("Sylva hero chrome no longer matches the authored page.");
  }
  return scene.apply(rooted);
}

const SYLVA_HERO_TITLES: Record<SylvaHeroVariant, string> = {
  "living-green": "Sylva — Into the living world",
  "sakura-sunset": "Sylva — Sakura Sunset",
  "maple-autumn": "Sylva — Maple Autumn",
  "sequoia-mist": "Sylva — Sequoia Mist",
};

export function SylvaHero({
  variant = "living-green",
  paperBg = false,
  presentation,
  ...props
}: SylvaHeroProps) {
  const safeVariant = SYLVA_HERO_VARIANTS.includes(variant)
    ? variant
    : "living-green";
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(SYLVA_TYPOGRAPHY, type);
  const srcDoc = useMemo(
    () =>
      safeVariant === "living-green"
        ? undefined
        : buildSylvaHeroDocument(safeVariant, paperBg),
    [safeVariant, paperBg]
  );

  return (
    <LandingPageFrame
      {...frame}
      key={`${safeVariant}-${paperBg ? "paper" : "default"}`}
      backgroundCanvasSelector={
        presentation === "background" ? "#scene" : undefined
      }
      backgroundVisualSelector={
        presentation === "background" ? ".hero" : undefined
      }
      customization={customization}
      title={SYLVA_HERO_TITLES[safeVariant]}
      sourceUrl={SYLVA_HERO_BASE_URL}
      srcDoc={srcDoc}
      style={{
        background: paperBg ? "#F2EFE8" : undefined,
        ...frame.style,
      }}
    />
  );
}

export default SylvaHero;
