/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    colors: {
      primary: "#ea4443",
      secondary: "#3d3d3d",
    },
    extend: {
      fontFamily: {
        noto: ["Noto Sans"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
