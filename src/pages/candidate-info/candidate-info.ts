import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeclarationConsentPage } from '../declaration-consent/declaration-consent';
import { PolicyDataPage } from '../policy-data/policy-data';

@Component({
  selector: 'page-candidate-info',
  templateUrl: 'candidate-info.html',
})
export class CandidateInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CandidateInfoPage');
  }

  goToDeclaration() {
    this.navCtrl.push(DeclarationConsentPage);
  }

  goToPolicyData() {
    this.navCtrl.push(PolicyDataPage);
  }

}
