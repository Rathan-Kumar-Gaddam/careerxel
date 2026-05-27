import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F1832",
        slate: "#1A1F2E",
        navy: "#14182A",
        panel: "#232A3E",
        panel2: "#2C3450",
        panel3: "#364065",
        line: "#3D4A6B",
        mist: "#A0AAC0",
        paper: "#F4F6FB",
        paper2: "#FBFCFE",
        blue: "#4A8BFF",
        royal: "#2A5FD9",
        amber: "#4A8BFF",
        burnt: "#2A5FD9",
        cream: "#C2D8FF",
        d1: "#EAF0FB",
        d3: "#6B7590",
        d4: "#3F4A66"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"]
      },
      boxShadow: {
        glow: "0 22px 80px rgba(74,139,255,0.22)"
      }
    }
  },
  plugins: []
};

export default config;
