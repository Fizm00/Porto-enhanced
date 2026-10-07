---
name: Portfolio Firza Himawan
description: A loud, fast, human portfolio. Giant condensed type, paper and ink bands, one signal color. Editorial and broadcast energy, never a SaaS template.
colors:
  primary: "#0E0E0E"
  secondary: "#F2EFE8"
  tertiary: "#FF4A1C"
  neutral: "#8A867D"
  surface: "#F2EFE8"
  surface-inverse: "#0E0E0E"
  on-surface: "#0E0E0E"
  on-surface-inverse: "#F2EFE8"
  accent: "#FF4A1C"
  line: "#0E0E0E"
typography:
  display:
    fontFamily: "Big Shoulders Display"
    fontWeight: 900
    fontSize: "22vw"
    lineHeight: 0.85
    letterSpacing: "-0.01em"
  headline-xl:
    fontFamily: "Big Shoulders Display"
    fontWeight: 800
    fontSize: "7vw"
    lineHeight: 0.92
    letterSpacing: "0"
  headline-md:
    fontFamily: "Big Shoulders Display"
    fontWeight: 800
    fontSize: "48px"
    lineHeight: 1
    letterSpacing: "0"
  body-lg:
    fontFamily: "Instrument Sans"
    fontWeight: 400
    fontSize: "22px"
    lineHeight: 1.45
    letterSpacing: "0"
  body-md:
    fontFamily: "Instrument Sans"
    fontWeight: 400
    fontSize: "17px"
    lineHeight: 1.6
    letterSpacing: "0"
  label-md:
    fontFamily: "DM Mono"
    fontWeight: 400
    fontSize: "14px"
    lineHeight: 1.4
    letterSpacing: "0"
rounded:
  none: 0
  sm: 0
  md: 0
  lg: 0
  full: 9999
spacing:
  unit: 8
  margin-desktop: 40
  margin-mobile: 20
  gutter: 24
  section-y: 160
---

# Overview

**Brand & style.** A personal portfolio that feels like a sports broadcast crossed with an editorial poster. Speed is the idea: type so large it bleeds off the edges, hard cuts instead of soft fades, and a single signal color used like a flag. The person behind the work should be felt: conversational copy, real details, no corporate tone.

**Inspiration, not imitation.** Learn from award-winning athlete and studio sites: huge typography, cinematic scroll sequences, one memorable 3D object, sharp transitions. Do not reuse any brand color, logo, imagery, layout or copy from any existing site.

**Rhythm.** Full-bleed bands alternate between paper and ink. No two adjacent sections share the same background or layout skeleton.

# Colors

| Role                       | Value   | Use                                                                 |
| -------------------------- | ------- | ------------------------------------------------------------------- |
| Ink (primary)              | #0E0E0E | Text on paper, dark bands, thick rules                              |
| Paper (secondary)          | #F2EFE8 | Page background, text on ink                                        |
| Signal (tertiary / accent) | #FF4A1C | One thing per screen: a single word, a progress line, a hover state |
| Stone (neutral)            | #8A867D | Secondary metadata only, never body text                            |

- Signal color covers at most 8% of any screen. It is flat, never a gradient, never a glow.
- Body text is ink on paper or paper on ink. Contrast must meet WCAG AA.
- The menu overlay is the single exception: it may use Signal as a full background.
- No purple, no cyan, no gradient mesh, no glassmorphism, no blur.

# Typography

- **Display and headlines:** Big Shoulders Display, 800-900, uppercase, very tight line-height (0.85-1). The name in the hero fills the full width edge to edge.
- **Body:** Instrument Sans, 17-22 px, line-height 1.45-1.6, maximum 62 characters per line.
- **Metadata:** DM Mono 14 px for years, roles, coordinates, times. Sentence case. Never use mono for decorative labels.
- Minimum text size 13 px anywhere. No tiny uppercase eyebrow labels above headings.
- Never color a single word in a heading as decoration. The one exception is the single statement keyword in Signal color on the statement screen.
- Numerals in counters and indexes use tabular figures.

# Layout & spacing

- 12-column grid. Desktop frame 1440 px, margins 40 px, gutter 24 px. Mobile frame 390 px, margins 20 px, 4 columns.
- Compose asymmetrically. Large type may touch or bleed past the margins. Images are hard-cropped rectangles, some full-bleed, some set on the grid.
- Vertical rhythm is uneven on purpose: 160 px between sections by default, with some full-height (100vh) bands.
- Navigation is a thin top bar (56 px): wordmark left, three text links, "Menu" right. No icons, no pills.

# Elevation & depth

Flat. No drop shadows, no blur, no inner glow, no translucent panels. Depth comes from color blocks, overlapping type and images, and huge scale contrast.

# Shapes

Hard rectangles only. Corner radius 0 everywhere. The only circle in the system is the custom cursor.

# Components

- **Button (primary):** solid ink on paper (or paper on ink), 56 px high, label in DM Mono 14 px, radius 0. Hover state inverts colors. Never a pill, never a gradient, no arrow icon.
- **Text link:** underlined with a 2 px rule, hover turns the rule Signal color.
- **Project panel:** full-bleed image, project title in display type overlapping the image, year and role in mono at the top right, "View project" text link at the bottom right. No card, no border, no shadow.
- **Index row (project list):** one project per row, fixed row height (about 170 px), 1 px ink rule between rows. Title in headline-xl, year and discipline in mono on the right. On hover the row's own project image becomes the background of that row: it fills the row edge to edge between the margins, hard-edged, clipped to the row, with a flat 35% ink overlay, and all text switches to paper color. Signal color appears only as a small square next to the row number. Images never float, never overlap neighboring rows, and never carry captions.
- **Marquee:** one giant line of display type running edge to edge, slightly skewed. Used once on the page.
- **Counter:** huge numerals, bottom-left, bleeding off the edge (preloader).
- **Contact CTA:** the email address set in display type, paper color on the ink band, broken into two lines after the "@" so the longer line spans exactly from margin to margin and is never cropped. It turns Signal color only on hover, with the caption changing from "Click to copy" to "Copied to clipboard". The screen holds at most five elements: top bar, headline, one availability sentence, the email, and a one-row footer. Space between them is intentional and framed by 1 px hairline rules.
- **Tags:** plain text separated by commas. Never pills or chips.
- **Menu overlay:** full-screen Signal-colored background (the only full-screen use of Signal). Links stacked in display type, filling about 70% of the screen height, line-height 0.92 with a visible gap between lines; lines must never overlap. On hover, the other links switch to paper color and the hovered link stays ink. Right column: email, socials, and a local time without seconds. All text is ink at 100% opacity.

# Imagery

- Photography and project imagery: high contrast, tightly cropped, real work only. Use clearly marked placeholders where real assets are missing.
- Hero object: one sculptural 3D-looking object (ink and chrome with a single Signal highlight) placed between the first and second name lines so the letters interleave with it. Mark it as a placeholder if it is not a real render.
- No stock illustrations, no cartoon 3D, no abstract blob shapes, no floating particles.

# Voice

Conversational, specific, a little playful. Short sentences. First person. Real facts instead of adjectives. Banned phrases: passionate, crafting experiences, seamless, cutting-edge, unlock, elevate, "Hi, I'm ... 👋".

# Do's and Don'ts

**Do**

- Make the name or project title the largest element on every key screen.
- Use one idea per screen and leave space.
- Keep hard edges, flat color, and strong alignment to the grid.
- Show real, specific details (cities, tools, outcomes).

**Don't**

- Don't use identical cards in rows, feature grids with icons, or testimonial carousels.
- Don't add drop shadows, gradients, glass effects or rounded corners.
- Don't use pills, badges, eyebrow labels, or arrow icons on every link.
- Don't use bouncing "scroll down" arrows or decorative sparkles.
- Don't invent technical-looking metadata. No codes like "01.1 //", no captions like "tolerance", "radius" or "cadence", no "system telemetry" or "live state" boxes, no bracketed section references, no fake reference IDs. A caption is one plain sentence.
- Don't put frames, borders, white mats or polaroid edges around photos. Photos are hard-cropped rectangles.
- Don't use serif fonts anywhere. If a font fails to load, fall back to a sans-serif.
- Don't number sections or add category labels such as "04 / DISPATCH", "Direct line" or "Response within 24 hours". Don't repeat the same city more than once per screen.
- Don't color large text Signal in its default state. Signal belongs to hover, a single word, or a progress line.
- Don't crop the email address or any key text at the edge of the screen. Bleeding is for decorative display type only, never for information the visitor needs to read.
- Don't show clocks with seconds or bracketed time zones. A time is "Yogyakarta, 12:31".
- Don't let state frames (hover, copied, active) change anything except the property that changes. Font, weight, size, spacing and position stay identical to the default frame.
- Don't let lines of stacked display type overlap or touch. Keep line-height at 0.9 or more and a visible gap between lines.
- Don't use the words "telemetry", "dispatch", "channels" or "index mode", and don't add status text such as "[ACTIVE]". Say what the thing is in plain words.
- Don't set text at low opacity on the Signal background. Use ink at 100% for contrast.
- Don't float thumbnails or previews over other rows or text. Hover images live inside their own row.
- Don't wrap labels in square brackets, don't use "//" separators, and don't set mono labels in all caps.
- Don't add arrows to links or avatar/user icons to the navigation. Use plain text ("Menu").
- Don't write generic copy or invent facts about the person. Mark missing content as [PLACEHOLDER].
