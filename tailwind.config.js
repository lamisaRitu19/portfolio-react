/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        flirt: "#782850",
        black: "#000000",
        nero: "#282828",
        russian: "#000028",
        lightGrey: "#c8c8c8",
        whiteSmoke: "#f0f0f0",
        nobel: "#a0a0a0",
        grey: "#787878",
      },
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
          "url('/src/assets/background/pink-smoke-background.jpg')",
      },
    },
  },
  plugins: [],
};
