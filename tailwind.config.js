const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      backgroundImage: (theme) => ({
        hero: "url('/assets/hero.svg')",
      }),
      colors: {
        primary: "#ff8a00",
        "primary-light": "#ffc000",
        secondary: "#5c5c5c",
      },
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      default: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus"],
    backgroundImage: ["hover", "responsive"],
    margin: ["responsive", "first"],
  },
  plugins: [require("@tailwindcss/ui")],
};
