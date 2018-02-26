import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ManoeuvrePage } from "../manoeuvre/manoeuvre";
import { CompetencyPage } from '../competency/competency';
import { LegalPage } from '../legal/legal';

/**
 * Generated class for the ManoeuvrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-twoCol',
  templateUrl: 'two-col.html',
})
export class TwoColPage {

  tab1 = ManoeuvrePage;
  tab2 = CompetencyPage;
  tab3 = LegalPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
