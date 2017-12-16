import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanetsPage } from './planets';

@NgModule({
  declarations: [
    PlanetsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanetsPage),
  ],
})
export class PlanetsPageModule {}
