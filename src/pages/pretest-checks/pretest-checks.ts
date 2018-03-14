import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PolicyDataPage } from '../policy-data/policy-data';
import { InitiateDrivingPeriodPage } from '../initiate-driving-period/initiate-driving-period';
import { EndTestReasonPage } from '../end-test-reason/end-test-reason';
import { Page } from 'ionic-angular/navigation/nav-util';

@Component({
  selector: 'page-pretest-checks',
  templateUrl: 'pretest-checks.html',
})
export class PretestChecksPage {

  endTestReasonPage: Page = EndTestReasonPage;
  initiateDrivingPeriodPage: Page = InitiateDrivingPeriodPage;
  policyDataPage: Page = PolicyDataPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PretestChecksPage');
  }

}
