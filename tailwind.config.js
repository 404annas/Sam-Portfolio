/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      colors: {
        first: '#b6684a',
        second: '#D42531',
        third: "#171822",
        forth: "#1B1720",
        fifth: "#4D4F32",
        six: "#92543b"
      },
    },
  },
  plugins: [],
}

