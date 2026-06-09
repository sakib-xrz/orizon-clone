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
        "primary-blue": "#2b00d4",
        "shape-blue": "#3a28dc",
        "button-border": "#919ff7",
        "light-blue": "#2c98f0",
        "input-bg": "#f4f3f9",
        "steel-blue": "#a9aaee",
        navy: {
          DEFAULT: "#0f0928",
          800: "#13123a",
        },
        teal: {
          deep: "#1d6f78",
          dark: "#16585f",
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
        "blue-glow": "0 18px 40px -12px rgba(43, 0, 212, 0.55)",
        "blue-glow-lg": "0 24px 60px -10px rgba(43, 0, 212, 0.55)",
        soft: "0 20px 60px -20px rgba(15, 9, 40, 0.18)",
      },
      backgroundImage: {
        "blue-gradient":
          "linear-gradient(120deg, #2b00d4 0%, #3a28dc 45%, #4f4cff 100%)",
        "heading-gradient":
          "linear-gradient(96deg, #2c98f0 0%, #2b00d4 50%, #3a28dc 100%)",
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
