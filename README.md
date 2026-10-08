# Firza Himawan — Portfolio

> High-performance, editorial personal portfolio of Firza Himawan, Software Engineer based in Yogyakarta. Built with Vite, React 19, TypeScript, Tailwind CSS v4, GSAP, and Lenis.

---

## ⚡ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with design tokens defined in `@theme`
- **Animation & Motion**: [GSAP](https://greensock.com/gsap/) (`useGSAP`, `ScrollTrigger`) + [Lenis](https://lenis.darkroom.engineering/) (Smooth Scroll)
- **Routing**: [wouter](https://github.com/molefrog/wouter) (Minimalist router)
- **3D & Shaders**: Interactive ThreeUI scene & fluid WebGL transitions
- **Self-hosted Typography**: `@fontsource/big-shoulders-display`, `@fontsource/instrument-sans`, `@fontsource/dm-mono`

---

## 📁 Project Structure

```text
src/
├── assets/             # Brand and visual assets
├── components/
│   ├── layout/         # Nav, MenuOverlay, Preloader
│   ├── sections/       # Hero, Statement, WorkPanels, WorkIndex, Skills, Beyond, Contact
│   └── ui/             # FitText, LiquidReveal
├── content/            # Data source files (projects.ts, personal.ts, skills.ts, site.ts)
├── hooks/              # useLenis, useReducedMotion
├── lib/                # gsap registry, motion tokens
├── pages/              # Home, Project (work/:slug), Work, BeyondPage, ContactPage, NotFound
├── shaders/            # WebGL & 3D scene modules
├── styles/             # globals.css (@theme), fonts.css
├── App.tsx             # Root routing and preloader orchestration
└── main.tsx            # Application entry point
```

---

## 🛠️ Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Check build & types**:
   ```bash
   npm run build
   ```

4. **Lint codebase**:
   ```bash
   npm run lint
   ```

---

## 🚀 Deploy to Vercel

### Option 1: Vercel Git Integration (Recommended)
1. Push your repository to GitHub / GitLab / Bitbucket:
   ```bash
   git push origin master
   ```
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel will automatically detect **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**. The included `vercel.json` ensures SPA rewrites work seamlessly for all `/work/:slug` URLs with zero 404 errors.

### Option 2: Vercel CLI
```bash
# Install Vercel CLI globally if not already installed
npm i -g vercel

# Deploy preview
vercel

# Deploy to production
vercel --prod
```
