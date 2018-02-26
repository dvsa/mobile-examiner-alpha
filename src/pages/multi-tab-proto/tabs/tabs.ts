import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ManoeuvrePage } from "../manoeuvre/manoeuvre";
import { CompetencyPage } from '../competency/competency';
import { MultiTabLegalPage } from '../mt-legal/mt-legal';

/**
 * Generated class for the ManoeuvrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1 = ManoeuvrePage;
  tab2 = CompetencyPage;
  tab3 = MultiTabLegalPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
