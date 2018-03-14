import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EndTestReasonPage } from '../end-test-reason/end-test-reason';
import { StopTestPage } from '../stop-test/stop-test';
import { Page } from 'ionic-angular/navigation/nav-util';

@Component({
  selector: 'page-test-evaluation',
  templateUrl: 'test-evaluation.html',
})
export class TestEvaluationPage {

  stopTestPage: Page = StopTestPage;
  endTestReasonPage: Page = EndTestReasonPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestEvaluationPage');
  }

}
