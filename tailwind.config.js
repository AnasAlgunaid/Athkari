/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        grayColor: "#ecf0f2",
        whiteColor: "#fdfdfd",
        greenColor: "#00ac68",
        blackColor: "#030f19",
        secondaryTextColor: "#9097aa",
      },
      fontFamily: {
        Almarai: ["Almarai", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
