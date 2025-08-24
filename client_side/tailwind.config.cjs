/** @type {import("tailwindcss").Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        josefinSans: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("daisyui")],
};
