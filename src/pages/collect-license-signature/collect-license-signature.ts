import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { PostTestSummaryPage } from '../post-test-summary/post-test-summary';

/**
 * Generated class for the CollectLicenseSignaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-collect-license-signature',
  templateUrl: 'collect-license-signature.html'
})
export class CollectLicenseSignaturePage {
  postTestSummaryPage: Page = PostTestSummaryPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectLicenseSignaturePage');
  }
}
