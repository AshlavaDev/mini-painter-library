/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
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
    },
    backgroundImage: {
      'dark-hero': "url('./src/assets/images/darker-background.jpg')",
      'light-hero': "url('./src/assets/images/lighter-background.jpg')",
      'water-hero': "url('./src/assets/images/watery-background.jpg')",
      'multi-hero': "url('./src/assets/images/sampler-background.jpg')"
    }
  },
  plugins: [],
}
