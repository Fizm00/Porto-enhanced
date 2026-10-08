import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    cors: true,
  },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/") || id.includes("node_modules/wouter/")) {
            return "vendor-react";
          }
          if (id.includes("node_modules/gsap/") || id.includes("node_modules/@gsap/")) {
            return "vendor-gsap";
          }
          if (id.includes("node_modules/lenis/")) {
            return "vendor-lenis";
          }
          if (id.includes("tech-stack-icons")) {
            return "tech-icons";
          }
        },
      },
    },
  },
});
