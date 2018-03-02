import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CollectLicenseSignaturePage } from '../collect-license-signature/collect-license-signature';

@Component({
  selector: 'page-record-debrief',
  templateUrl: 'record-debrief.html',
})
export class RecordDebriefPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecordDebriefPage');
  }

  goToCollectLicense() {
    this.navCtrl.push(CollectLicenseSignaturePage);
  }

}
