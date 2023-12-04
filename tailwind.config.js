/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "0",
        },
      },
      fontFamily: {
        sans: ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "hero-pattern":
          "url('/src/assets/background/adelin-preda--tOr_T4qTpQ-unsplash.jpg')",
      },
    },
  },
  plugins: [],
};
