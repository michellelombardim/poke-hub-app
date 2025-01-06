import { Route } from '@angular/router';
import { GlobalViewerComponent } from './layout/global-viewer/global-viewer.component';
import { StatisticsComponent } from './layout/statistics/statistics.component';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      { path: '', component: GlobalViewerComponent },
      {
        path: 'stats',
        component: StatisticsComponent,
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
