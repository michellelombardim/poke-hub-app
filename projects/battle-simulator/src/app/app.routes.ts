import { Route } from '@angular/router';
import { BattlefieldComponent } from './layout/battlefield/battlefield.component';
import { RecordComponent } from './layout/record/record.component';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      { path: '', component: BattlefieldComponent },
      {
        path: 'list',
        component: RecordComponent,
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
