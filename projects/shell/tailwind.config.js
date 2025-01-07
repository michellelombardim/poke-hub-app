const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        pokemonYellow: '#FFB81C',
        pokemonRed: '#D40000',
        pokemonBlue: '#0077B3',
        pokemonGreen: '#388E3C',
      },
    },
  },
  plugins: [require('daisyui')],
};
