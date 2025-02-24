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
    allowedHosts: [
      "e82d-2001-fb1-16d-5614-f98f-1c34-c196-5f67.ngrok-free.app",
      "localhost",
      "0.0.0.0",
    ],
  },
});
