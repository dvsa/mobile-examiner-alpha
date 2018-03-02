import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EndTestReasonPage } from '../end-test-reason/end-test-reason';
import { TestEvaluationPage } from '../test-evaluation/test-evaluation';

@Component({
  selector: 'page-initiate-driving-period',
  templateUrl: 'initiate-driving-period.html',
})
export class InitiateDrivingPeriodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InitiateDrivingPeriodPage');
  }

  goToEndTestReason() {
    this.navCtrl.push(EndTestReasonPage);
  }

  goToTestEvaluation() {
    this.navCtrl.push(TestEvaluationPage);
  }

}
