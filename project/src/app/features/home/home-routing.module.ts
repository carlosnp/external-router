import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBaseComponent } from './pages/home-base';
import { ThankYouComponent } from '../components';
import { ExternalRedirectGuard } from '../../core/guards';

const routes: Routes = [
  { path: '', component: HomeBaseComponent },
  {
    path: 'thank-you',
    component: ThankYouComponent,
  },
  {
    path: 'external-router',
    canActivate: [ExternalRedirectGuard],
    component: ThankYouComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
