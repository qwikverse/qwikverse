/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.purple,
        secondary: colors.sky,
      },
      fontFamily: {
        sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        blinker: {
          '0%': { opacity: 50 },
          '50%': { opacity: 0 },
          '100%': { opacity: 100 },
        }
      },
      animation: {
        'blink-hard': 'blinker 1s step-end infinite',
        'blink-soft': 'blinker 1.5s step-end infinite',
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
