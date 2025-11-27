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
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          layout: {
            radius: {
              small: "5px",
            },
          },
          colors: {
            secondary: {
              50: "#F6F0E1",
              500: "#D4B36A",
              900: "#9D854F",
              DEFAULT: "#9D854F",
            },
            primary: {
              50: "#D8DEF6",
              500: "#32407A",
              900: "#1B244B",
              DEFAULT: "#1B244B",
            },
          },
        },
        dark: {
          layout: {
            radius: {
              small: "5px",
            },
          },
          colors: {
            secondary: {
              50: "#F6F0E1",
              500: "#D4B36A",
              900: "#9D854F",
              DEFAULT: "#9D854F",
            },
            primary: {
              50: "#D8DEF6",
              500: "#32407A",
              900: "#1B244B",
              DEFAULT: "#1B244B",
            },
          },
        },
      },
    }),
  ],
};

module.exports = config;
