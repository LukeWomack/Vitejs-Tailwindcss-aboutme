/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#1e40af',
        'dark-bg': '#0f172a',
        'light-bg': '#f8fafc',
      },
    },
  },
  plugins: [],
};
