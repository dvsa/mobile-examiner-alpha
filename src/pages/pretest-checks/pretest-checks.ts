import { AllOnOnePage } from './../all-on-one/all-on-one';
import { EyesightFaultRecordingModalPage } from './../eyesight-fault-recording-modal/eyesight-fault-recording-modal';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PolicyDataPage } from '../policy-data/policy-data';
import { EndTestReasonPage } from '../end-test-reason/end-test-reason';
import { Page } from 'ionic-angular/navigation/nav-util';
import { TellMeModalComponent } from '../../components/tell-me-modal/tell-me-modal';

@Component({
  selector: 'page-pretest-checks',
  templateUrl: 'pretest-checks.html'
})
export class PretestChecksPage {
  endTestReasonPage: Page = EndTestReasonPage;
  policyDataPage: Page = PolicyDataPage;
  tellMeQuestionId: string;
  eyeSightSeriousFault = false;
  disableBackdropDismissModalOption = { enableBackdropDismiss: false };

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {}

  showTellMeOptions() {
    const tellMeQuestionModal = this.modalCtrl.create(
      TellMeModalComponent,
      { selectedTellMeQuestionId: this.tellMeQuestionId },
      this.disableBackdropDismissModalOption
    );

    tellMeQuestionModal.onDidDismiss((selectedTellMeQuestionId, role: string) => {
      if (role !== 'dismiss') {
        this.tellMeQuestionId = selectedTellMeQuestionId;
      }
    });

    tellMeQuestionModal.present();
  }

  showEyesightFaultRecordingModal() {
    const eyesightFaultRecordingModal = this.modalCtrl.create(
      EyesightFaultRecordingModalPage,
      null,
      this.disableBackdropDismissModalOption
    );

    eyesightFaultRecordingModal.onDidDismiss((flag) => {
      this.eyeSightSeriousFault = flag;
    });

    eyesightFaultRecordingModal.present();
  }

  gotoDL25() {
    this.navCtrl.push(AllOnOnePage, {}, { animate: false });
  }
}
