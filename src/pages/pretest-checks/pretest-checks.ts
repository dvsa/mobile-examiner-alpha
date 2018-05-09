import { FaultStoreProvider } from './../../providers/fault-store/fault-store';
import { AllOnOneV2Page } from './../all-on-one-v2/all-on-one-v2';
import { EyesightFaultRecordingModalPage } from './../eyesight-fault-recording-modal/eyesight-fault-recording-modal';
import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PolicyDataPage } from '../policy-data/policy-data';
import { EndTestReasonPage } from '../end-test-reason/end-test-reason';
import { Page } from 'ionic-angular/navigation/nav-util';
import { TellMeModalComponent } from '../../components/tell-me-modal/tell-me-modal';
import { select } from '@angular-redux/store';

@Component({
  selector: 'page-pretest-checks',
  templateUrl: 'pretest-checks.html'
})
export class PretestChecksPage {
  @ViewChild('isAutomatic') isAutomaticInput;
  endTestReasonPage: Page = EndTestReasonPage;
  policyDataPage: Page = PolicyDataPage;
  eyeSightSeriousFault = false;
  disableBackdropDismissModalOption = { enableBackdropDismiss: false };
  preCheck = {
    isEyesightCompleted: false,
    carRegistration: null,
    tellMeQuestionId: null,
    isAutomatic: null
  };

  @select(['faults', 'tellMe']) tellMeState$;

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    private faultStore: FaultStoreProvider
  ) {}

  resetTellMe() {
    this.faultStore.resetFault('tellMe');
  }

  setTellMeState(questionId, faultType, $event) {
    const isActive = $event.currentTarget.className.includes('active');
    const faultMethod = isActive ? 'removeFault' : 'addFault';

    // reset other faults if we are setting a new one
    // we could build in better functionality in the reducers to handle this kind of logic..BETA!!
    if (!isActive) this.resetTellMe();

    this.faultStore[faultMethod]('tellMe', questionId, faultType);
  }

  showTellMeOptions = () => {
    const tellMeQuestionModal = this.modalCtrl.create(
      TellMeModalComponent,
      { selectedTellMeQuestionId: this.preCheck.tellMeQuestionId },
      this.disableBackdropDismissModalOption
    );

    tellMeQuestionModal.onDidDismiss((selectedTellMeQuestionId, role: string) => {
      if (role !== 'dismiss') {
        this.preCheck.tellMeQuestionId = selectedTellMeQuestionId;
      }
    });

    tellMeQuestionModal.present();
  };

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

  gotoDL25(form) {
    if (form.valid) {
      this.navCtrl.push(AllOnOneV2Page, {}, { animate: false });
    }
  }

  automaticInputChanged(event, secondInput) {
    secondInput.checked = false;
    this.preCheck.isAutomatic = event.target.checked;
    this.isAutomaticInput.control.markAsDirty();
  }
}
