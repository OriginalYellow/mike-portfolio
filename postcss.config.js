/* eslint-disable import/no-extraneous-dependencies */

// import tailwindcss from 'tailwindcss';
// import autoprefixer from 'autoprefixer';

const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    autoprefixer({
      add: true,
      grid: true,
    }),
  ],
};
