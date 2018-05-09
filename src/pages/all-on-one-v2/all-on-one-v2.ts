import { HazardRecorderProvider } from './../../providers/hazard-recorder/hazard-recorder';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { FaultStoreProvider } from '../../providers/fault-store/fault-store';

/**
 * Generated class for the AllOnOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export enum manoeuvre {
  PREFIX = 'manoeuvre',
  CONTROL = 'Ctrl',
  OBSERVATION = 'Obs'
}

@Component({
  selector: 'page-all-on-one-v2',
  templateUrl: 'all-on-one-v2.html'
})
export class AllOnOneV2Page {
  isDButtonPressed = false;
  isSButtonPressed = false;
  isEcoCompleted = false;
  selectedManoeuvre = '';
  manoeuvreBtns = {
    RR: 'Reverse / Right',
    RPR: 'Reverse Park (Road)',
    RPC: 'Reverse Park (Carpark)',
    FP: 'Forward Park'
  };

  manoeuvreKeys = [];

  @ViewChild('manoeuvresButton') manoeuvresButton;
  @ViewChild('ecoButton') ecoButton;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private hazardRecorderProvider: HazardRecorderProvider,
    private faultStore: FaultStoreProvider,
    private menuCtrl: MenuController
  ) {
    this.manoeuvreKeys = Object.keys(this.manoeuvreBtns);
  }

  ionViewDidEnter() {
    this.menuCtrl.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menuCtrl.swipeEnable(true);
  }

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

  setEco($event: any) {
    this.isEcoCompleted = $event.target.checked;
  }

  isEcoComplete() {
    return this.isEcoCompleted;
  }

  createSection(key: string, type: string) {
    return `${manoeuvre.PREFIX}${key}${type}`;
  }

  setPixelVal(setValue, val) {
    return setValue ? `${val}px` : 0;
  }

  isManoeuvreSelected(key) {
    return this.selectedManoeuvre === key;
  }

  selectManoeuvre(manoeuvreName: string, $event: any) {
    this.selectedManoeuvre = $event.target.checked ? manoeuvreName : '';

    const filteredManoeuvres =
      this.selectedManoeuvre === ''
        ? this.manoeuvreKeys
        : this.manoeuvreKeys.filter((man) => man !== manoeuvreName);

    filteredManoeuvres.forEach((manName) => {
      this.faultStore.resetFault(`${manoeuvre.PREFIX}${manName}${manoeuvre.CONTROL}`);
      this.faultStore.resetFault(`${manoeuvre.PREFIX}${manName}${manoeuvre.OBSERVATION}`);
    }, this);
  }
}
