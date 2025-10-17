/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          'light': '#bbf7d0',
          'lightest': '#f0fdf4',
          'dark': '#14532d',
          'green': '#4CAF50',
          'blue': '#007bff',
          'red': '#e74c3c',
          'yellow': '#ffc107',
        }
      }
    },
  },
  plugins: [],
};
