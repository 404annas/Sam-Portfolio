/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      colors: {
        first: '#F3F768',
        second: '#D63137',
        third: "#171822",
        forth: "#1B1720",
        fifth: "#4D4F32",
        six: "#D63137",
        seven: "#F3F769"
      },
    },
  },
  plugins: [],
}

