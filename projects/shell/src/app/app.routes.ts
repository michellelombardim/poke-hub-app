import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';

export const appRoutes: Route[] = [
  {
    path: 'pokedex',
    loadComponent: () =>
      loadRemoteModule('pokedex', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'battle-simulator',
    loadComponent: () =>
      loadRemoteModule('battle-simulator', './Component').then(
        (m) => m.AppComponent,
      ),
  },
];
