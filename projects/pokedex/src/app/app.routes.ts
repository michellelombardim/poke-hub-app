import { Route } from '@angular/router';
import { GlobalViewerComponent } from './layout/global-viewer/global-viewer.component';
import { StatisticsComponent } from './layout/statistics/statistics.component';
import { EventListenerGuard } from './core/guards/event-listener/event-listener.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    canActivate: [EventListenerGuard],
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
