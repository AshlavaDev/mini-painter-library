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
        'golden': '#c6a53e',
        'neogreen': '#5cdb95'
      }
    },
    fontFamily: {
      'display': ['Forum', ...defaultTheme.fontFamily.serif],
      'sans': ['Noto-Sans-Japanese', ...defaultTheme.fontFamily.sans],
      'serif': ['Playfair-Display', ...defaultTheme.fontFamily.serif]
    },
    backgroundImage: {
      'darkhero': "url('/assets/images/darker-background.jpg')",
      'lighthero': "url('/assets/images/lighter-background.jpg')",
      'waterhero': "url('/assets/images/watery-background.jpg')",
      'multihero': "url('/assets/images/sampler-background.jpg')"
    }
  },
  plugins: [],
}
