const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff8a00",
        "primary-light": "#ffc000",
        secondary: "#5c5c5c",
        "primary-to-light": ["#ffc000", "#ff8a00"],
      },
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
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
  plugins: [require("tailwindcss-gradients"), require("@tailwindcss/ui")],
};
