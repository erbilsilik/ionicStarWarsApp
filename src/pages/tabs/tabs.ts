import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1 = 'FilmsPage';
  tab2 = 'PeoplePage';
  tab3 = 'PlanetsPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) { }
}
