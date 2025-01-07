const cypress = require('eslint-plugin-cypress/flat');
const baseConfig = require('../../eslint.base.config.cjs');

module.exports = [
  cypress.configs['recommended'],

  ...baseConfig,
  {
    rules: [
      {
        test: /\.m?js$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
];
