// tailwind.config.js
const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["{app,pages}/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      black: colors.black,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      trueGray: colors.trueGray,
      warmGray: colors.warmGray,
      yellow: colors.yellow,
      amber: colors.amber,
      lime: colors.lime,
      green: colors.green,
      cyan: colors.cyan,
      emerald: colors.emerald,
      teal: colors.teal,
      lightBlue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    extend: {
      colors: {
        "regal-blue": "#243c5a",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
