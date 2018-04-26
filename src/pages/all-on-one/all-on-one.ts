import { HazardRecorderProvider } from './../../providers/hazard-recorder/hazard-recorder';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FaultStoreProvider } from '../../providers/fault-store/fault-store';

/**
 * Generated class for the AllOnOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-on-one',
  templateUrl: 'all-on-one.html'
})
export class AllOnOnePage {
  isDButtonPressed = false;
  isSButtonPressed = false;
  selectedManeuver = '';

  @ViewChild('manoeuvresButton') manoeuvresButton;
  @ViewChild('ecoButton') ecoButton;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private hazardRecorderProvider: HazardRecorderProvider,
    private faultStore: FaultStoreProvider
  ) {}

  dButtonClicked() {
    this.hazardRecorderProvider.resetHazardRecording();
    if (this.isDButtonPressed) {
      this.isDButtonPressed = false;
      return;
    }

    this.isDButtonPressed = true;
    this.isSButtonPressed = false;

    if (this.hazardRecorderProvider.isRemovingFaultsEnabled) {
      this.hazardRecorderProvider.enableDangerousRemoving(() => (this.isDButtonPressed = false));
    } else {
      this.hazardRecorderProvider.enableDangerousRecording(() => (this.isDButtonPressed = false));
    }
  }

  sButtonClicked() {
    this.hazardRecorderProvider.resetHazardRecording();
    if (this.isSButtonPressed) {
      this.isSButtonPressed = false;
      return;
    }

    this.isDButtonPressed = false;
    this.isSButtonPressed = true;

    if (this.hazardRecorderProvider.isRemovingFaultsEnabled) {
      this.hazardRecorderProvider.enableSeriousRemoving(() => (this.isSButtonPressed = false));
    } else {
      this.hazardRecorderProvider.enableSeriousRecording(() => (this.isSButtonPressed = false));
    }
  }

  selectManeuver(maneuverName: string, maneuverText: string, $event: any) {
    ['PR', 'RR', 'RPC', 'FP'].filter((man) => man !== maneuverName).forEach((manName) => {
      this.faultStore.removeFault('manoeuver' + manName + 'Controlv1', maneuverText, 'serious');
      this.faultStore.removeFault('manoeuver' + manName + 'Observationv1', maneuverText, 'serious');
      this.faultStore.removeFault('manoeuver' + manName + 'Controlv1', maneuverText, 'dangerous');
      this.faultStore.removeFault(
        'manoeuver' + manName + 'Observationv1',
        maneuverText,
        'dangerous'
      );
    }, this);

    this.selectedManeuver = $event.target.checked ? maneuverName : '';
  }
}
