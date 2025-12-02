/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-900": "#060712",
        "glass-900": "rgba(255,255,255,0.06)",
      },
      boxShadow: {
        "neon-cyan": "0 6px 30px rgba(6, 182, 212, 0.12)",
        "neon-glow": "0 8px 40px rgba(124,58,237,0.12)",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      animation: {
        blob: "blob 14s infinite",
      },
    },
  },
  plugins: [],
};
