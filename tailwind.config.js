/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      smoke: '#DCDCDC',
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      gray: colors.zinc
    },
    fontFamily: {
      h1: ['alumni', 'sans-serif'],
      h2: ['Bebas Neue', 'sans-serif'],
      cta:['roboto', 'sans-serif'],
      body:['montserrat', 'sans-serif']

    },
    extend: {
            gridTemplateColumns: {
        principal: 'repeat(12, minmax(0, 64px))'
      }
    }
  },
  plugins: []
}

