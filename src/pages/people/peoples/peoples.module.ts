import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeoplesPage } from './peoples';

@NgModule({
  declarations: [
    PeoplesPage,
  ],
  imports: [
    IonicPageModule.forChild(PeoplesPage),
  ],
})
export class PeoplesPageModule {}
