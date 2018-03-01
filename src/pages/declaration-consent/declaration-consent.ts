import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PolicyDataPage } from '../policy-data/policy-data';
import { PretestChecksPage } from '../pretest-checks/pretest-checks';
import { EndTestReasonPage } from '../end-test-reason/end-test-reason';

/**
 * Generated class for the DeclarationConsentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-declaration-consent',
  templateUrl: 'declaration-consent.html',
})
export class DeclarationConsentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeclarationConsentPage');
  }

  goToPretestChecks() {
    this.navCtrl.push(PretestChecksPage);
  }

  goToPolicyData() {
    this.navCtrl.push(PolicyDataPage);
  }

  goToEndTestReason() {
    this.navCtrl.push(EndTestReasonPage);
  }

}
