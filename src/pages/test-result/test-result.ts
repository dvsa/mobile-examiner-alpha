import { AudioRecorderProvider } from './../../providers/audio-recorder/audio-recorder';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { PostTestSummaryPage } from '../post-test-summary/post-test-summary';
import { FaultStoreProvider } from '../../providers/fault-store/fault-store';
import { IFaultSummary } from '../../components/test-summary/interfaces/IFaultSummary';
import { TestResult } from '../../components/test-summary/enums/TestResult';
import { PassDataCollectionPage } from '../pass-data-collection/pass-data-collection';

@Component({
  selector: 'page-test-result',
  templateUrl: 'test-result.html'
})
export class TestResultPage {
  postTestSummaryPage: Page = PostTestSummaryPage;
  passDataCollectionPage: Page = PassDataCollectionPage;
  testResult: string;
  faultSummaries: {
    [key: string]: IFaultSummary;
  };

  // audio related
  stopOrDestroyRecording: string = 'stop';
  stopOrDesDisabled: boolean = true;

  playOrPauseRecording: string = 'pause';
  playOrPauseDisabled: boolean = true;

  isRecording = this.audioRecorder.getIsRecording();
  fileLength = this.audioRecorder.getFileLength();

  debriefConsent = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private faultStore: FaultStoreProvider,
    private toastCtrl: ToastController,
    private audioRecorder: AudioRecorderProvider
  ) {
    this.faultStore
      .getFaultTotals()
      .subscribe((faultSummaries) => (this.faultSummaries = faultSummaries));
    this.testResult = this.faultStore.getTestResult();
    // this.debriefConsent = this.faultStore.getDebriefConsentStatus();
    this.debriefConsent = true;

    if (this.debriefConsent) {
      const toast = this.toastCtrl.create({
        message: 'Candidate has given permission to be recorded',
        position: 'bottom',
        duration: 3000
      });

      toast.present();
    }
  }

  recordAudio() {
    this.audioRecorder.recordAudio();
  }

  getNextPage(): Page {
    return this.testResult === TestResult.Fail
      ? this.postTestSummaryPage
      : this.passDataCollectionPage;
  }

  goBack() {
    this.navCtrl.pop({ animate: false });
  }

  toggleStopOrDestroy = () => {
    if (this.stopOrDestroyRecording === 'stop') {
      this.audioRecorder.stopRecordingAudio();
    }
    if (this.stopOrDestroyRecording === 'destroy') {
      this.audioRecorder.deleteAudio();
    }
    this.stopOrDestroyRecording = this.stopOrDestroyRecording === 'stop' ? 'destroy' : 'stop';
  };

  togglePlayOrPause = () => {
    if (this.playOrPauseRecording === 'play') {
      if (this.isRecording) {
        this.audioRecorder.resumeRecording();
      } else {
        this.audioRecorder.playAudio();
      }
    }
    if (this.playOrPauseRecording === 'pause') {
      if (this.isRecording) {
        this.audioRecorder.pauseRecording();
      } else {
        this.audioRecorder.pauseAudio();
      }
    }
    this.playOrPauseRecording = this.playOrPauseRecording === 'play' ? 'pause' : 'play';
  };
}
