import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { PostTestSummaryPage } from '../post-test-summary/post-test-summary';

@Component({
  selector: 'page-test-result',
  templateUrl: 'test-result.html'
})
export class TestResultPage {
  postTestSummaryPage: Page = PostTestSummaryPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestResultPage');
  }

  goBack() {
    this.navCtrl.pop({ animate: false });
  }
}
