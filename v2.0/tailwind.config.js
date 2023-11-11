/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '8px': '8px',
        '16px': '16px',
        '24px': '24px',
      },
    },
  },
  plugins: [],
}
