// eslint-disable-next-line no-undef
const { colors } = require('./src/constants/colors')
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors
    }
  },
  plugins: []
}
