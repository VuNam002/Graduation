
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Segoe UI", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        invite: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
