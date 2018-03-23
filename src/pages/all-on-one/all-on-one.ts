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

  isDisabled(faultRecordingType: string): boolean {
    const enabledFaultRecordingType = this.hazardRecorderProvider.getEnabled();
    if (enabledFaultRecordingType !== null) {
      return faultRecordingType === enabledFaultRecordingType ? false : true;
    }
    return false; 
  }

  hazardButtonClicked(isDangerous: boolean) {
    if(isDangerous) {
      this.isDButtonPressed = !this.isDButtonPressed;
      this.hazardRecorderProvider.enableDangerousRecording(()=> this.isDButtonPressed = false)
    } else {
      this.isSButtonPressed = !this.isSButtonPressed;
      this.hazardRecorderProvider.enableSeriousRecording(()=> this.isSButtonPressed = false)
    }
  }

}
