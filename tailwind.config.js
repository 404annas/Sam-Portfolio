/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      colors: {
        first: '#F2F666',
        second: '#D42531',
        third: "#171822"
      },
    },
  },
  plugins: [],
}

