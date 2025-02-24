/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#10B981",
        secondary: "#6366F1",
        background: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
