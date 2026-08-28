import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-teal": "#007F78",
        "accent-teal": "#00A99D",
        "dark-text": "#1A2332",
        "section-bg": "#F7F9FA",
        "cta-yellow": "#F5C518",
        "light-teal": "#E0F5F3",
        "error-red": "#E63946",
        "deep-teal": "#00615C",
        "ink-teal": "#102C2B",
        mint: "#83DDD4",
        "muted-text": "#5F7077",
        hairline: "#DCE9E7",
      },
      fontFamily: {
        playfair: ["Georgia", "Bitstream Charter", "DejaVu Serif", "serif"],
        sans: ["Aptos", "Segoe UI", "Helvetica Neue", "Arial", "Liberation Sans", "sans-serif"],
      },
      fontSize: {
        h1: ["clamp(2.1rem, 3.2vw, 3rem)", { lineHeight: "1.1", fontWeight: "700" }],
        "h1-sm": ["clamp(2.1rem, 3.2vw, 3rem)", { lineHeight: "1.1", fontWeight: "700" }],
        h2: ["clamp(1.7rem, 2.3vw, 2.25rem)", { lineHeight: "1.18", fontWeight: "700" }],
        "h2-sm": ["clamp(1.7rem, 2.3vw, 2.25rem)", { lineHeight: "1.18", fontWeight: "700" }],
        h3: ["1.125rem", { lineHeight: "1.35", fontWeight: "700" }],
        body: ["1rem", { lineHeight: "1.7" }],
        small: ["0.8125rem", { lineHeight: "1.5" }],
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        gutter: "24px",
      },
    },
  },
  plugins: [],
};
export default config;
