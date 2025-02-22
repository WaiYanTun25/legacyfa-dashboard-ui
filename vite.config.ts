import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
    alias: {
      "@src": "/src",
      "@pages": "/src/pages",
      "@routes": "/src/routes",
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@schemas": "/src/schemas",
      "@services": "/src/services",
      "@hooks": "/src/hooks",
    },
  },
  build: {
    outDir: "build",
  },
  server: {
    port: 3000,
  },
});
