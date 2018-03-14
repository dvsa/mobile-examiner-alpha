import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecordDebriefPage } from '../record-debrief/record-debrief';
import { Page } from 'ionic-angular/navigation/nav-util';

@Component({
  selector: 'page-test-result',
  templateUrl: 'test-result.html',
})
export class TestResultPage {

  recordDebriefPage: Page = RecordDebriefPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestResultPage');
  }

}
