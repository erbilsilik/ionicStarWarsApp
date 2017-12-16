import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-people-details',
  templateUrl: 'people-details.html',
})
export class PeopleDetailsPage {
  person: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.person = this.navParams.get('person');
  }
}
