/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
        mont: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        lato: ['"Lato"', ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        'rgba-5-26-145': 'rgba(5, 26, 145, 1)',
        'rgba-6-28-147': 'rgba(6, 28, 147, 1)',
        'rgba-34-132-241': 'rgba(34, 132, 241, 1)',
        'rgba-31-128-235': 'rgba(31, 128, 235, 1)',
      },
    },
  },
  plugins: [
    require('tailwindcss-gradient-text'),
  ],
}
