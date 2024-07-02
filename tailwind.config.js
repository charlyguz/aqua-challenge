/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '80': '20rem', // 320px
        '100': '25rem', // 400px
        '120': '30rem', // 480px
      },
      colors:{
        'primary': '#242424',
        'blue-dark': '#1E3A5F',
        'blue-medium-dark': '#27496D',
        'blue-light': '#3B82F6',
        'blue-very-light': '#E0F7FF',
        'gray-light': '#D1D5DB',
        'gray-medium': '#4B5563',
        'gray-dark': '#1F2937',
        'white': '#FFFFFF',

      }
    },
  },
  plugins: [],
}