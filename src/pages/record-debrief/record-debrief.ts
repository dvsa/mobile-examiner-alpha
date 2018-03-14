import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CollectLicenseSignaturePage } from '../collect-license-signature/collect-license-signature';
import { Page } from 'ionic-angular/navigation/nav-util';

@Component({
  selector: 'page-record-debrief',
  templateUrl: 'record-debrief.html',
})
export class RecordDebriefPage {

  collectLicenseSignaturePage: Page = CollectLicenseSignaturePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecordDebriefPage');
  }

}
