import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EndTestReasonPage } from '../end-test-reason/end-test-reason';
import { PolicyDataPage } from '../policy-data/policy-data';
import { TestResultPage } from '../test-result/test-result';

@Component({
  selector: 'page-stop-test',
  templateUrl: 'stop-test.html',
})
export class StopTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StopTestPage');
  }

  goToTestResult() {
    this.navCtrl.push(TestResultPage);
  }

  goBackToTestEvaluation() {
    this.navCtrl.pop();
  }
  
  goToEndTestReason() {
    this.navCtrl.push(EndTestReasonPage);
  }

  goToPolicyData() {
    this.navCtrl.push(PolicyDataPage);
  }
}
