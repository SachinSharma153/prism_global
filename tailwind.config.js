/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7757',
        secondary: '#331811',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
      screens: {
        'xs': '320px',
        'md': '768px',
        'lg': '1188px',
        'xl': '1440px',
        '2xl': '1920px',
      },
      spacing: {
        '16': '16px',
        '20': '20px',
        '32': '32px',
        '220': '220px',
      },
    },
  },
  plugins: [],
}