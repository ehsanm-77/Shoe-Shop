/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './main.js', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundSize: {
        '100%': '100% 100%',
        16: '4rem',
      },
    },
  },
  plugins: [],
};
