import { HazardRecorderProvider } from './../../providers/hazard-recorder/hazard-recorder';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';
import { FaultStoreProvider } from '../../providers/fault-store/fault-store';
import { CustomHammerConfigProvider } from '../../providers/custom-hammer-config/custom-hammer-config';

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
  isDButtonPressed = false;
  isSButtonPressed = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private faultsService: FaultsScorecardProvider,
    private hazardRecorderProvider: HazardRecorderProvider,
    private faultStore: FaultStoreProvider,
    private hammerConfigService: CustomHammerConfigProvider) {
  }

  ionViewDidEnter() {
    this.faultsService.reset();
    this.faultStore.reset();
  }

  dButtonClicked() {
    this.hazardRecorderProvider.resetHazardRecording()
    if (this.isDButtonPressed) {
      this.isDButtonPressed = false;
      return
    }

    this.isDButtonPressed = true;
    this.isSButtonPressed = false;

    if (this.hazardRecorderProvider.isRemovingFaultsEnabled) {
      this.hazardRecorderProvider.enableDangerousRemoving(() => this.isDButtonPressed = false)
    } else {
      this.hazardRecorderProvider.enableDangerousRecording(() => this.isDButtonPressed = false)
    }
  }

  sButtonClicked() {
    this.hazardRecorderProvider.resetHazardRecording()
    if (this.isSButtonPressed) {
      this.isSButtonPressed = false;
      return
    }

    this.isDButtonPressed = false;
    this.isSButtonPressed = true;

    if (this.hazardRecorderProvider.isRemovingFaultsEnabled) {
      this.hazardRecorderProvider.enableSeriousRemoving(() => this.isSButtonPressed = false)
    } else {
      this.hazardRecorderProvider.enableSeriousRecording(() => this.isSButtonPressed = false)
    }
  }

}
