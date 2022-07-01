/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
        'krona': ['Krona One', 'sans-serif'],
    },
    colors: {
      white: {
        300: '#EEEAE1'
      },
      black: {
        900: '#0A080A'
      }
    }
},
  plugins: [],
};
