import { initFederation } from '@angular-architects/module-federation';

initFederation({
    "battle-simulator": "http://localhost:4202/remoteEntry.js",
    "pokedex": "http://localhost:4201/remoteEntry.js",
  })
  .catch((err) => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
