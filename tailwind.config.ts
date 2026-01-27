import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bluevora: {
          dark: "#032B44",
          DEFAULT: "#0B8ECF",
          light: "#7ED3F7",
          teal: "#0FB9B1",
          sand: "#F5F1E6"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(3, 43, 68, 0.12)"
      },
      borderRadius: {
        xl: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;

