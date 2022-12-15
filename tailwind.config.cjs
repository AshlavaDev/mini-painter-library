/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkblue': '#05386B',
        'offwhite': '#edf5e1',
        'golden': '#c6a53e'
      }
    },
    fontFamily: {
      'display': ['Forum', ...defaultTheme.fontFamily.serif],
      'sans': ['Noto-Sans-Japanese', ...defaultTheme.fontFamily.sans],
      'serif': ['Playfair-Display', ...defaultTheme.fontFamily.serif]
    }
  },
  plugins: [],
}
