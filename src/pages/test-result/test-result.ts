import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { CollectLicenseSignaturePage } from '../collect-license-signature/collect-license-signature';

@Component({
  selector: 'page-test-result',
  templateUrl: 'test-result.html',
})
export class TestResultPage {

  collectLicenseSignaturePage: Page = CollectLicenseSignaturePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestResultPage');
  }

}
