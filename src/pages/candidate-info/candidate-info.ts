import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeclarationConsentPage } from '../declaration-consent/declaration-consent';
import { PolicyDataPage } from '../policy-data/policy-data';
import { Page } from 'ionic-angular/navigation/nav-util';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { AppConfigProvider } from '../../providers/app-config/app-config';
import { PretestChecksPage } from '../pretest-checks/pretest-checks';

@Component({
  selector: 'page-candidate-info',
  templateUrl: 'candidate-info.html'
})
export class CandidateInfoPage {
  declarationConsentPage: Page = DeclarationConsentPage;
  policyDataPage: Page = PolicyDataPage;
  pretestChecksPage: Page = PretestChecksPage;
  signature: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public configService: AppConfigProvider
  ) {
    this.signature = this.navParams.get('signature');
  }

  confirmIdentity() {
    this.navCtrl.push(this.pretestChecksPage);
  }
}
