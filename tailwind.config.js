/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#d2dbee",
        mainText: "#3d3d3d",
        subText: "#a8adb5",
        accent: "#b699ff",
      },
    },
    fontFamily: {
      zenMaru: ["Zen Maru Gothic", "sans-serif"],
    },
  },
  plugins: [],
};
