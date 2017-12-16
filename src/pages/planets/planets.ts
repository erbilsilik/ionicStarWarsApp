import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-planet',
  templateUrl: 'planets.html',
})
export class PlanetsPage {
  planets: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    this.planets = this.apiProvider.getPlanets();
  }

  openDetails(planet) {
    this.navCtrl.push('PlanetDetailsPage', {planet: planet});
  }
}
