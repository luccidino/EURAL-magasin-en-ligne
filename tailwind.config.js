/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        violetGradientStart: '#e0bbff',
        violetGradientEnd: '#4b0082'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Bebas Neue', 'sans-serif']
      }
    },
  },
  plugins: [],
}
