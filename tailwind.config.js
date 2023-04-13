/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['Oswald', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
