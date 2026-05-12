import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dune: {
          50: "#f7f5f0",
          100: "#ebe6d8",
          200: "#d6ccb1",
          300: "#b8a987",
          400: "#9d8a65",
          500: "#82724e",
          600: "#6a5b3e",
          700: "#544832",
          800: "#3d3325",
          900: "#26201a",
          950: "#15110d",
        },
        ocean: {
          50: "#f1f7f8",
          100: "#dbeaec",
          200: "#b8d5da",
          300: "#85b6bf",
          400: "#52929e",
          500: "#3a7884",
          600: "#2f626f",
          700: "#28505b",
          800: "#23424c",
          900: "#1e3741",
          950: "#0f1f26",
        },
        gorse: {
          400: "#e2b94a",
          500: "#c89c2c",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "noise":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
