/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'header': 'Staatliches, cursive'
      },
      colors: {
        'purple-4noobs': '#6814CA',
        'dark-purple': '#1E0B35'
      }
    },
  },
  plugins: [],
}
