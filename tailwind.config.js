/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softBlueGray: 'rgba(31, 42, 75, 0.59)',
        darkBlueGray: '#1f2a4b',
        coolGray: '#9ea3b2',
        oceanBlue: '#4a77e5',
        errorRed: '#ff9900'
      },
      fontFamily: ['Roboto', 'sans-serif']
    },
  },
  plugins: [],
}