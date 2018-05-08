import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
  stopOrDestroyRecording: string = 'stop';

  // audio debrief

  recordButtonText = 'Record audio';
  startingRecording = true;
  playButtonText = 'Play';

  audio: MediaObject;
  playing = false;
  buttonDisabled = true;
  fileName = 'audio_debrief.m4a';
  fileLength = '';
  fileSize = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private faultStore: FaultStoreProvider,
    private file: File
  ) {
    this.faultStore
      .getFaultTotals()
      .subscribe((faultSummaries) => (this.faultSummaries = faultSummaries));
    this.testResult = this.faultStore.getTestResult();
  }

  getNextPage(): Page {
    return this.testResult === TestResult.Fail
      ? this.postTestSummaryPage
      : this.passDataCollectionPage;
  }

  goBack() {
    this.navCtrl.pop({ animate: false });
  }

  toggleStopOrDestroy() {
    this.stopOrDestroyRecording = this.stopOrDestroyRecording === 'stop' ? 'destroy' : 'stop';
  }

  // audio debrief
  recordAudio() {
    if (this.startingRecording) {
      this.file
        .createFile(this.file.dataDirectory, this.fileName, true)
        .then(() => {
          let src = this.file.dataDirectory.replace(/^file:\/\//, '') + this.fileName;
          // ionic media.create is buggy (getDuration returns always -1), the solution is to use raw cordova API
          this.audio = new (<any>window).Media(
            src,
            this.mediaSuccess,
            this.mediaError,
            this.mediaStatus
          );
          this.audio.startRecord();
          this.recordButtonText = 'Pause audio recording';
          this.startingRecording = false;
        })
        .catch(this.logError);
    } else if (!this.startingRecording) {
      if (this.recordButtonText == 'Pause audio recording') {
        this.recordButtonText = 'Resume audio recording';
        this.audio.pauseRecord();
      } else if (this.recordButtonText == 'Resume audio recording') {
        this.recordButtonText = 'Pause audio recording';
        this.audio.resumeRecord();
      }
    }
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

  stopRecordingAudio() {
    console.log('Stopping recording');

    var self = this;
    this.audio.stopRecord();
    this.buttonDisabled = null;
    this.recordButtonText = 'Record audio';
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
      })
      .catch(this.logError);
  }

  // Workaround In order to get file duration, we need to play recording
  countDuration() {
    var counter = 0;
    this.audio.play();

    var timerDur = setInterval(() => {
      // workaround we can't stop playback just after call .play(). We trying to do it in interval...
      this.audio.pause();
      this.audio.stop();
      counter = counter + 100;
      if (counter > 2000) {
        clearInterval(timerDur);
      }
      this.audio.getDuration();
      var dur = this.audio.getDuration();
      if (dur > 0) {
        clearInterval(timerDur);
        this.fileLength = dur + ' sec';
      }
    }, 100);
  }

  playAudio() {
    if (this.playing === false) {
      this.playing = true;
      this.playButtonText = 'Pause';
      this.audio.play();
    } else {
      this.playButtonText = 'Play';

      this.playing = false;
      this.audio.pause();
    }
  }

  deleteAudio() {
    this.audio.release();
    this.file.removeFile(this.file.dataDirectory, 'audio_debrief.m4a');
    this.buttonDisabled = true;
    this.playButtonText = 'Play';
    this.startingRecording = true;
    this.fileLength = null;
    this.fileSize = null;
  }
}
