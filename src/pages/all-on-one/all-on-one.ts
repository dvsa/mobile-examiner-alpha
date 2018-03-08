import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';
import { FaultModeProvider } from '../../providers/fault-mode/fault-mode';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the AllOnOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-on-one',
  templateUrl: 'all-on-one.html',
})
export class AllOnOnePage {

  faultMode: string;
  _faultModeSubscription: Subscription;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private faultsService: FaultsScorecardProvider,
    public faultModeService: FaultModeProvider) {
      this.faultMode = faultModeService.get();
      this._faultModeSubscription = faultModeService.change.subscribe((faultMode: string) => this.faultMode = faultMode);
  }

  ionViewDidEnter() {
    this.faultsService.reset();
  }

}
