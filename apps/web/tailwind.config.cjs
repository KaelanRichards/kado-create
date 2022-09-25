/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
  },
  content: ['./pages/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  variants: {
    extend: {},
  },
  darkMode: 'media',
  presets: [require('../../tailwind-workspace-preset.js')],
};
