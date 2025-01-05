const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "battle-simulator": "http://localhost:4202/remoteEntry.js",
    "pokedex": "http://localhost:4201/remoteEntry.js",
  },  

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});