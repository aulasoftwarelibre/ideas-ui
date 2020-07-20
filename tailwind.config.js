module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1500px",
      },
      colors: {
        orange: "#ff8a00",
        gray: "#5c5c5c",
        gorange: ["#ffc000", "#ff8a00"],
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
