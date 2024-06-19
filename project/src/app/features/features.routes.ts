import { Routes } from '@angular/router';
import { BaseComponent } from './base';

export const FEATURES_ROUTES: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
    ]
  },
];
