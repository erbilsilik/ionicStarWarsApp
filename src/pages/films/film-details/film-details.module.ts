import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmDetailsPage } from './film-details';

@NgModule({
  declarations: [
    FilmDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmDetailsPage),
  ],
})
export class FilmDetailsPageModule {}
