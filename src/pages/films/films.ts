import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {
  films: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    this.films = this.apiProvider.getFilms();
  }

  openDetails(film) {
    this.navCtrl.push('FilmDetailsPage', {film: film});
  }
}
