import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
    alias: {
      "@src": "/src",
      "@pages": "/src/pages",
      "@routes": "/src/routes",
    },
  },
  build: {
    outDir: "build",
  },
  server: {
    port: 3000,
  },
});
