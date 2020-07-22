const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ideaOrange: "#ff8a00",
        gorange: ["#ffc000", "#ff8a00"],
      },
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      linearGradientColors: (theme) => theme("colors"),
      radialGradientColors: (theme) => theme("colors"),
      conicGradientColors: (theme) => theme("colors"),
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus"],
    backgroundImage: ["hover", "responsive"],
  },
  plugins: [
    require("tailwindcss-gradients"), 
    require("@tailwindcss/ui"),
  ],
};
