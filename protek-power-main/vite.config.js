// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { reactRouter } from "@react-router/dev/vite";

export default defineConfig({
  base: "./",                 // needed for shared hosting/subfolders
  plugins: [react(), reactRouter()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
