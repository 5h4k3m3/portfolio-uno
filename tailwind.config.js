/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        baseColor: "#f8f1f7",
        background: "#d8e2f0",
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
