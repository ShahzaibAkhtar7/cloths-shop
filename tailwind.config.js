/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        cream: { 50: "#fdfaf5", 100: "#faf4e8", 200: "#f5e8cc" },
        stone: { 850: "#1c1917" },
        sand:  { 400: "#c9a96e", 500: "#b8935a", 600: "#9a7a48" },
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease forwards",
        "fade-in":    "fadeIn 0.4s ease forwards",
        "slide-left": "slideLeft 0.5s ease forwards",
      },
      keyframes: {
        fadeUp:    { "0%": { opacity: 0, transform: "translateY(24px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
        fadeIn:    { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        slideLeft: { "0%": { opacity: 0, transform: "translateX(24px)" }, "100%": { opacity: 1, transform: "translateX(0)" } },
      },
    },
  },
  plugins: [],
};
