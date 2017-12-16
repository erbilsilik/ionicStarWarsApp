import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmsPage } from './films';

@NgModule({
  declarations: [
    FilmsPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmsPage),
  ],
})
export class FilmsPageModule {}
