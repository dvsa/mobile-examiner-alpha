import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PolicyDataPage } from '../policy-data/policy-data';
import { InitiateDrivingPeriodPage } from '../initiate-driving-period/initiate-driving-period';
import { EndTestReasonPage } from '../end-test-reason/end-test-reason';

@Component({
  selector: 'page-pretest-checks',
  templateUrl: 'pretest-checks.html',
})
export class PretestChecksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PretestChecksPage');
  }

  goToEndTestReason() {
    this.navCtrl.push(EndTestReasonPage);
  }

  goToInitiateTest() {
    this.navCtrl.push(InitiateDrivingPeriodPage);
  }

  goToPolicyData() {
    this.navCtrl.push(PolicyDataPage);
  }

}
