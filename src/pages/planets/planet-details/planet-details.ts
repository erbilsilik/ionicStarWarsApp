import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-planet-details',
  templateUrl: 'planet-details.html',
})
export class PlanetDetailsPage {
  planet: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.planet = this.navParams.get('planet');
  }
}
