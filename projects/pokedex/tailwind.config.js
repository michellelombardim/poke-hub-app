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
        pokemonYellow: '#FFCC00',
        pokemonRed: '#FF0000',
        pokemonBlue: '#00AEEF',
        pokemonGreen: '#4CAF50',
      },
    },
  },
  plugins: [require('daisyui')],
};
