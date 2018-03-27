import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeclarationConsentPage } from '../declaration-consent/declaration-consent';
import { PolicyDataPage } from '../policy-data/policy-data';
import { Page } from 'ionic-angular/navigation/nav-util';

@Component({
  selector: 'page-candidate-info',
  templateUrl: 'candidate-info.html'
})
export class CandidateInfoPage {
  declarationConsentPage: Page = DeclarationConsentPage;
  policyDataPage: Page = PolicyDataPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
