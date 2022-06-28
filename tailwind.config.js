/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        baseColor: "#f8f1f7",
        background: "#b0e1ff",
        mainText: "#3d3d3d",
        subText: "#cccbcb",
        accent: "#b699ff",
      },
    },
    fontFamily: {
      zenMaru: ["Zen Maru Gothic", "sans-serif"],
    },
  },
  plugins: [],
};
