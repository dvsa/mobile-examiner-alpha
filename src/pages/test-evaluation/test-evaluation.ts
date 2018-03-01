import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EndTestReasonPage } from '../end-test-reason/end-test-reason';
import { StopTestPage } from '../stop-test/stop-test';

@Component({
  selector: 'page-test-evaluation',
  templateUrl: 'test-evaluation.html',
})
export class TestEvaluationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestEvaluationPage');
  }

  goToStopTest() {
    this.navCtrl.push(StopTestPage);
  }

  goToEndTestReason() {
    this.navCtrl.push(EndTestReasonPage);
  }

}
