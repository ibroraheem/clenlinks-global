/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1d2e4a',
          light: '#6ba3c9'
        },
        secondary: {
          DEFAULT: '#2e3a59',
          light: '#a0a0a0'
        }
      },
    },
  },
  plugins: [],
};