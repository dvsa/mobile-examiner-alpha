import { Component, ViewChild, HostListener } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PolicyDataPage } from '../policy-data/policy-data';
import { PretestChecksPage } from '../pretest-checks/pretest-checks';
import { EndTestReasonPage } from '../end-test-reason/end-test-reason';
import { Page } from 'ionic-angular/navigation/nav-util';

import { SignaturePad } from 'angular2-signaturepad/signature-pad';

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
  endTestReasonPage: Page = EndTestReasonPage;
  signature;
  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  signaturePadOptions: Object = {
    minWidth: 5,
    canvasWidth: 500,
    canvasHeight: 300,
    throttle: 0,
    backgroundColor: '#ffffff'
  };

  @HostListener('window:navExpand')
  onNavExpand(event) {
    setTimeout(() => {
      this.signaturePad.resizeCanvas();
      this.signaturePad.fromData(this.signature);
    }, 700);
    console.log('resize');
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    this.signature = this.signaturePad.toData();
  }

  clearSignaturePad() {
    this.signaturePad.clear();
    console.log('cleared pad');
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  ionViewDidLoad() {
    this.signaturePad.resizeCanvas();
    console.log('ionViewDidLoad DeclarationConsentPage');
  }
}
