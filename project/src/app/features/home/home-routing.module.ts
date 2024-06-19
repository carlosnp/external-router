import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBaseComponent } from './pages/home-base';
import { ThankYouComponent } from '../components';

const routes: Routes = [
  { path: '', component: HomeBaseComponent },
  {
    path: 'thank-you',
    component: ThankYouComponent,
  },
  // {
  //   path: 'external-router',
  //   canActivate: [ExternalUrlRedirectGuard],
  //   component: ExternalRouterComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
