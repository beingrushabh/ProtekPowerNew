import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

// 👇 Updated config
export default defineConfig({
  plugins: [reactRouter()],
  build: {
    outDir: "dist", // default, but just to be clear
  },
});
