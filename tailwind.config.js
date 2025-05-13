import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        primary: {
          DEFAULT: "#FF7700", // Orange as the main primary color
          50: "#FFF0E6",
          100: "#FFE1CC",
          200: "#FFC499",
          300: "#FFA666",
          400: "#FF8933",
          500: "#FF7700", // Base orange color
          600: "#E66900",
          700: "#CC5E00",
          800: "#B35200",
          900: "#994700",
        },
        // Keep other colors as they are
        danger: "#e74c3c",
        success: "#2ecc71",
        warning: "#f39c12",
        default: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
    },
  },
  // darkMode: "class",
  plugins: [heroui()],
};

module.exports = config;