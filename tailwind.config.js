/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'ska1': '#00001A',
        'ska2': '#0C0C22',
        'ska3': '#13142A',
        'ska4': '#1A1A33',
        'ska5': '#21213B',
        'ska6': '#32314E',
        'ska7': '#4E4C6B',
        'ska8': '#6C6889',
        'ska9': '#8A87A9',
        'ska10': '#AAA6CA',
      },
      animation: {
        appear: 'appear 2s ease-in-out forwards 5s',
      },
      keyframes: {
        appear: {
          from: {opacity: 0},
          to: {
          opacity: 1}
        }
      }
    },
  },
  plugins: [],
}