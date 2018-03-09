import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';

/**
 * Generated class for the AllOnOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-on-one-3',
  templateUrl: 'all-on-one-3.html',
})
export class AllOnOnePage3 {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private faultsService: FaultsScorecardProvider) {
  }

  ionViewDidEnter() {
    this.faultsService.reset();
  }

}
