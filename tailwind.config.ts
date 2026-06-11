import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f0928",
        muted: "#9892b8",
        brand: "#00F8FF",
        "primary-blue": "#00F8FF",
        "brand-light": "#8EFDFF",
        "brand-mid": "#00D4DC",
        "brand-dark": "#00A8B0",
        "shape-blue": "#00D4DC",
        "button-border": "#8EFDFF",
        "light-blue": "#00F8FF",
        "input-bg": "#f4f3f9",
        "steel-blue": "#8EFDFF",
        navy: {
          DEFAULT: "#0f0928",
          800: "#13123a",
          900: "#0a0820",
        },
        teal: {
          deep: "#00A8B0",
          dark: "#009098",
          light: "#00D4DC",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-jakarta)", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      fontSize: {
        body: ["17px", { lineHeight: "30px" }],
      },
      borderRadius: {
        pill: "999px",
        card: "24px",
        "card-lg": "32px",
      },
      boxShadow: {
        "blue-glow": "0 18px 40px -12px rgba(0, 248, 255, 0.45)",
        "blue-glow-lg": "0 24px 60px -10px rgba(0, 248, 255, 0.45)",
        soft: "0 20px 60px -20px rgba(15, 9, 40, 0.18)",
        "brand-glow": "0 0 24px rgba(0, 248, 255, 0.35)",
      },
      backgroundImage: {
        "blue-gradient":
          "linear-gradient(120deg, #00D4DC 0%, #00F8FF 100%)",
        "heading-gradient":
          "linear-gradient(96deg, #00F8FF 0%, #8EFDFF 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
