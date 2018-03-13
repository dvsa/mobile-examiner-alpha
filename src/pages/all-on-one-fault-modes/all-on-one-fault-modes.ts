import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';
import { FaultModeProvider } from '../../providers/fault-mode/fault-mode';
import { Subscription } from 'rxjs/Subscription';
import { AllOnOnePageFaultModalsTimerOptionsPage } from '../all-on-one-page-fault-modals-timer-options/all-on-one-page-fault-modals-timer-options';
import { FaultStoreProvider } from '../../providers/fault-store/fault-store';

/**
 * Generated class for the AllOnOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-on-one-fault-modes',
  templateUrl: 'all-on-one-fault-modes.html',
})
export class AllOnOnePageFaultModes {

  faultMode: string;
  _faultModeSubscription: Subscription;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private faultsService: FaultsScorecardProvider,
    public faultModeService: FaultModeProvider,
    public modalCtrl: ModalController,
    private faultStore: FaultStoreProvider) {
      this.faultMode = faultModeService.get();
      this._faultModeSubscription = faultModeService.change.subscribe(faultMode => this.faultMode = faultMode);
  }

  openTimerOptions() {
    const modal = this.modalCtrl.create(AllOnOnePageFaultModalsTimerOptionsPage);
    modal.present();
  }

  onFaultModeChange() {
    this.faultModeService.onFaultModeChange();
  }

  ionViewDidEnter() {
    this.faultStore.reset();
    this.faultsService.reset();
  }

}
