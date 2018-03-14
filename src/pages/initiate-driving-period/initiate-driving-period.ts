import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EndTestReasonPage } from '../end-test-reason/end-test-reason';
import { TestEvaluationPage } from '../test-evaluation/test-evaluation';
import { Page } from 'ionic-angular/navigation/nav-util';

@Component({
  selector: 'page-initiate-driving-period',
  templateUrl: 'initiate-driving-period.html',
})
export class InitiateDrivingPeriodPage {

  endTestReasonPage: Page = EndTestReasonPage;
  testEvaluationPage: Page = TestEvaluationPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InitiateDrivingPeriodPage');
  }

}
