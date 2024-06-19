import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeaturesService } from "./features.service";
import { RouterModule } from '@angular/router';
import { FEATURES_ROUTES } from './features.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(FEATURES_ROUTES)],
  providers: [FeaturesService]
})
export class FeaturesModule {}