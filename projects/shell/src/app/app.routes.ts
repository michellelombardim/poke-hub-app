import { Route } from '@angular/router';
import {
  loadRemoteEntry,
  loadRemoteModule,
} from '@angular-architects/module-federation-runtime';
import { HomeComponent } from './layout/home/home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'pokedex', pathMatch: 'full' },
      {
        path: 'pokedex',
        loadChildren: () =>
          loadRemoteModule('pokedex', './Routes').then((m) => m.appRoutes),
      },
      {
        path: 'battle-simulator',
        loadChildren: () =>
          loadRemoteModule('battle-simulator', './Routes').then(
            (m) => m.appRoutes,
          ),
      },
    ],
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
