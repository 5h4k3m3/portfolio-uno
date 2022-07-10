/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        baseColor: "#e8edf9",
        background: "#E1EAFE",
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
