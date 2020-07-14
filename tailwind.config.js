module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#f00",
        blue: "#00f",
      },
      linearGradientColors: (theme) => theme("colors"),
      radialGradientColors: (theme) => theme("colors"),
      conicGradientColors: (theme) => theme("colors"),
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus"],
  },
  plugins: [require("tailwindcss-gradients")],
};
