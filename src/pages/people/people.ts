import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {
  people: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    this.people = this.apiProvider.getPeople();
  }

  openDetails(person) {
    this.navCtrl.push('PeopleDetailsPage', {person: person});
  }
}
