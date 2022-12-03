/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#344E41",
        secondary: "#3A5A40",
        tertiory: "#588157",
        lightPrimary: "#A3B18A",
        lightSecondary: "#DAD7CD",

        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
