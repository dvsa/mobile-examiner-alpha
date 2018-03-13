import { HazardRecorderProvider } from './../../providers/hazard-recorder/hazard-recorder';
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
    private hazardRecorderProvider: HazardRecorderProvider) {
  }

  ionViewDidEnter() {
    this.faultsService.reset();
  }

  hazardButtonClicked(isDangerous: boolean) {
    if(isDangerous) {
      this.isDButtonPressed = !this.isDButtonPressed;
      this.hazardRecorderProvider.enableDangerousRecording(()=> {this.isDButtonPressed = false;})
    } else {
      this.isSButtonPressed = !this.isSButtonPressed;
      this.hazardRecorderProvider.enableSeriousRecording(()=> {this.isSButtonPressed = false;})
    }

  }

}
