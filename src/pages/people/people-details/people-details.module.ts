import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeopleDetailsPage } from './people-details';

@NgModule({
  declarations: [
    PeopleDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PeopleDetailsPage),
  ],
})
export class PeopleDetailsPageModule {}
