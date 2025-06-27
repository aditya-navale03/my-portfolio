import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Get Vite mode (e.g., 'development' or 'production')
const mode = process.env.NODE_ENV;

export default defineConfig({
  base: "/my-portfolio/", // 👈 must match repo name with slashes
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
