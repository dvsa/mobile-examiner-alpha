import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EndTestReasonPage } from '../end-test-reason/end-test-reason';
import { PolicyDataPage } from '../policy-data/policy-data';
import { TestResultPage } from '../test-result/test-result';
import { Page } from 'ionic-angular/navigation/nav-util';

@Component({
  selector: 'page-stop-test',
  templateUrl: 'stop-test.html',
})
export class StopTestPage {

  testResultPage: Page = TestResultPage;
  endTestReasonPage: Page = EndTestReasonPage;
  policyDataPage: Page = PolicyDataPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StopTestPage');
  }
  
}
