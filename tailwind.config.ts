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
        muted: "#665f82",
        "primary-blue": "#007980",
        "shape-blue": "#00AEB8",
        "button-border": "#8EFDFF",
        "light-blue": "#00F8FF",
        "input-bg": "#f4f3f9",
        "steel-blue": "#8EFDFF",
        navy: {
          DEFAULT: "#0f0928",
          800: "#13123a",
        },
        teal: {
          deep: "#007980",
          dark: "#005F66",
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
        "blue-glow": "0 18px 40px -12px rgba(0, 121, 128, 0.55)",
        "blue-glow-lg": "0 24px 60px -10px rgba(0, 121, 128, 0.55)",
        soft: "0 20px 60px -20px rgba(15, 9, 40, 0.18)",
      },
      backgroundImage: {
        "blue-gradient":
          "linear-gradient(120deg, #007980 0%, #00AEB8 45%, #00F8FF 100%)",
        "heading-gradient":
          "linear-gradient(96deg, #00F8FF 0%, #007980 50%, #00AEB8 100%)",
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
