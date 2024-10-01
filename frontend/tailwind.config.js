import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': '320px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        // Todo: Change Site Colors
        darkbg: "#000", // used (mainly) for background
        prim: "#FCBA04", // used for CTA buttons
        secondary: "#A52422", // flexible use
        white: "#FFFFFF", // used for text
        gray: "#7EBDC2", // used for lighter text
      },
    },
  },
  plugins: [require('daisyui')],
};
