/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./projects/**/*.{html,ts}'],
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