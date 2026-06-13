/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'SF Pro Text', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#e6ebff',
          200: '#c4ceff',
          300: '#9eaeff',
          400: '#6b7dff',
          500: '#3b4bff',
          600: '#2835d9',
          700: '#1f29a8',
          800: '#181f7f',
          900: '#111659'
        }
      },
      boxShadow: {
        'soft': '0 18px 45px rgba(15, 23, 42, 0.25)'
      }
    },
  },
  plugins: [],
};
