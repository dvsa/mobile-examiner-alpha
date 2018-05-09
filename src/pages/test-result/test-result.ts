import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { PostTestSummaryPage } from '../post-test-summary/post-test-summary';
import { FaultStoreProvider } from '../../providers/fault-store/fault-store';
import { IFaultSummary } from '../../components/test-summary/interfaces/IFaultSummary';
import { TestResult } from '../../components/test-summary/enums/TestResult';
import { PassDataCollectionPage } from '../pass-data-collection/pass-data-collection';
import { MediaObject } from '@ionic-native/media';
import { File, DirectoryEntry, FileEntry } from '@ionic-native/file';

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

  isRecording = false;
  playing = false;

  audio: MediaObject;
  fileName = 'audio_debrief.m4a';
  fileLength = 0;
  fileSize = '';
  debriefConsent = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private faultStore: FaultStoreProvider,
    private file: File,
    private toastCtrl: ToastController
  ) {
    this.faultStore
      .getFaultTotals()
      .subscribe((faultSummaries) => (this.faultSummaries = faultSummaries));
    this.testResult = this.faultStore.getTestResult();
    this.debriefConsent = this.faultStore.getDebriefConsentStatus();

    if (this.debriefConsent) {
      const toast = this.toastCtrl.create({
        message: 'Candidate has given permission to be recorded',
        position: 'bottom',
        duration: 3000
      });

      toast.present();
    }
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
      this.stopRecordingAudio();
    }
    if (this.stopOrDestroyRecording === 'destroy') {
      this.deleteAudio();
    }
    this.stopOrDestroyRecording = this.stopOrDestroyRecording === 'stop' ? 'destroy' : 'stop';
  };

  togglePlayOrPause = () => {
    if (this.playOrPauseRecording === 'play') {
      if (this.isRecording) {
        this.resumeRecording();
      } else {
        this.playAudio();
      }
    }
    if (this.playOrPauseRecording === 'pause') {
      if (this.isRecording) {
        this.pauseRecording();
      } else {
        this.pauseAudio();
      }
    }
    this.playOrPauseRecording = this.playOrPauseRecording === 'play' ? 'pause' : 'play';
  };

  // audio debrief
  recordAudio() {
    if (!this.isRecording) {
      this.file
        .createFile(this.file.dataDirectory, this.fileName, true)
        .then(() => {
          const src = this.file.dataDirectory.replace(/^file:\/\//, '') + this.fileName;
          // ionic media.create is buggy (getDuration returns always -1), the solution is to use raw cordova API
          this.audio = new (<any>window).Media(
            src,
            this.mediaSuccess,
            this.mediaError,
            this.mediaStatus
          );
          this.audio.startRecord();
          this.isRecording = true;
          this.stopOrDesDisabled = false;
          this.playOrPauseDisabled = false;
          this.playOrPauseRecording = 'pause';
        })
        .catch(this.logError);
    }
  }

  stopRecordingAudio() {
    console.log('Stopping recording');

    const self = this;
    this.audio.stopRecord();

    this.countDuration();

    this.file
      .resolveLocalFilesystemUrl(this.file.dataDirectory)
      .then((directoryEntry: DirectoryEntry) => {
        return this.file.getFile(directoryEntry, self.fileName, { create: false });
      })
      .then((fileEntry: FileEntry) => {
        fileEntry.file((fileObject) => {
          console.log(fileObject.size);
          self.fileSize = '' + fileObject.size + ' bytes';
        }, this.logError);
        self.isRecording = false;
        self.playOrPauseRecording = 'play';
      })
      .catch(this.logError);
  }

  // Workaround In order to get file duration, we need to play recording
  countDuration() {
    let counter = 0;
    this.audio.play();

    const timerDur = setInterval(() => {
      // workaround we can't stop playback just after call .play(). We trying to do it in interval...
      this.audio.pause();
      this.audio.stop();
      counter = counter + 100;
      if (counter > 2000) {
        clearInterval(timerDur);
      }
      this.audio.getDuration();
      const dur = this.audio.getDuration();
      if (dur > 0) {
        clearInterval(timerDur);
        this.fileLength = dur;
      }
    }, 100);
  }

  playAudio() {
    const self = this;
    this.playing = true;
    this.audio.play();
    setTimeout(() => {
      if (self.fileLength) {
        self.playOrPauseRecording = 'play';
      }
    }, Math.ceil(self.fileLength) * 1000);
  }

  pauseAudio() {
    this.playing = false;
    this.audio.pause();
  }

  deleteAudio() {
    this.audio.stop();
    this.audio.release();
    this.file.removeFile(this.file.dataDirectory, 'audio_debrief.m4a');
    this.isRecording = false;
    this.fileLength = null;
    this.fileSize = null;
    this.playOrPauseRecording = 'pause';
    this.stopOrDesDisabled = true;
    this.playOrPauseDisabled = true;
  }

  pauseRecording() {
    this.audio.pauseRecord();
  }

  resumeRecording() {
    this.audio.resumeRecord();
  }

  mediaSuccess(e) {
    console.log('media success ' + e);
  }

  mediaError(e) {
    console.log('media error ' + e);
  }

  mediaStatus(e) {
    console.log('media status ' + e);
  }

  logError(error) {
    console.log(error);
  }
}
