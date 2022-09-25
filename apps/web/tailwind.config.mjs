import { join } from 'path';

const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require('../../tailwind-workspace-preset.js')],
};
