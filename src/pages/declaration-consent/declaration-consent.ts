// import { DeviceAuthentication } from '../../types/device-authentication';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AppConfigProvider } from '../../providers/app-config/app-config';
import { PolicyDataPage } from '../policy-data/policy-data';
import { PretestChecksPage } from '../pretest-checks/pretest-checks';
import { EndTestReasonPage } from '../end-test-reason/end-test-reason';
import { Page } from 'ionic-angular/navigation/nav-util';

import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { CandidateInfoPage } from '../candidate-info/candidate-info';

declare var cordova: any;

/**
 * Generated class for the DeclarationConsentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-declaration-consent',
  templateUrl: 'declaration-consent.html'
})
export class DeclarationConsentPage {
  pretestChecksPage: Page = PretestChecksPage;
  policyDataPage: Page = PolicyDataPage;
  candidateInfopage: Page = CandidateInfoPage;
  endTestReasonPage: Page = EndTestReasonPage;
  signaturePadOptions: any;
  signature: any;
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  errMsg: string = '';
  cordovaVar: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public configService: AppConfigProvider // private deviceAuth: DeviceAuthentication,
  ) // private platform: Platform
  {
    this.signaturePadOptions = configService.getSignaturePadOptions();
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    this.signature = this.signaturePad.toDataURL();
  }

  clearSignaturePad() {
    this.signaturePad.clear();
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
  }

  ionViewDidLoad() {
    this.signaturePad.resizeCanvas();
  }

  continue() {
    this.cordovaVar = cordova;
    const successCB = (isAuthenticated: boolean) => {
      console.log('Is Auth? ' + isAuthenticated);
      if (isAuthenticated) {
        this.navCtrl.push(this.candidateInfopage, { signature: this.signature });
      }
    };

    const failureCB = (errorMsg: string) => {
      this.errMsg = errorMsg;
      if (errorMsg === 'cordova_not_available') {
        this.navCtrl.push(this.candidateInfopage, { signature: this.signature });
      } else {
        console.log(errorMsg);
      }
    };

    if (window.hasOwnProperty('cordova')) {
      cordova.plugins.DeviceAuthentication.runAuthentication(
        'Please authenticate yourself to proceed',
        successCB,
        failureCB
      );
    } else {
      console.log('cordova not available');
      this.navCtrl.push(this.candidateInfopage, { signature: this.signature });
    }
  }
}
