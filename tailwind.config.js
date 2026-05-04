/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["'Space Mono'", "monospace"],
        titleFont: ["'Share Tech Mono'", "monospace"],
        sans: ["'Inter'", "sans-serif"],
      },
      colors: {
        bodyColor: "#0a0a0a",
        lightText: "#a1a1aa",
        boxBg: "#121212",
        designColor: "#00f0ff", // Neon Cyan
        darkGray: "#1a1a1a",
        neonPurple: "#b026ff",
      },
      boxShadow: {
        shadowOne: "0 0 15px rgba(0, 240, 255, 0.1)",
        glow: "0 0 20px rgba(0, 240, 255, 0.4)",
      },
    },
  },
  plugins: [],
};