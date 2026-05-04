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
        "primary-teal": "#00A99D",
        "dark-text": "#1A2332",
        "section-bg": "#F7F9FA",
        "cta-yellow": "#F5C518",
        "light-teal": "#E0F5F3",
        "error-red": "#E63946",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      fontSize: {
        h1: ["3.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "h1-sm": ["3rem", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["2.25rem", { lineHeight: "1.3", fontWeight: "700" }],
        "h2-sm": ["2rem", { lineHeight: "1.3", fontWeight: "700" }],
        h3: ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }],
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
