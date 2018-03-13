import { Injectable } from '@angular/core';

/*
  Generated class for the HazardRecorderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HazardRecorderProvider {

  isSeriousRecordingEnabled = false
  isDangerousRecordingEnabled = false

  constructor() {
  }

  completionClosure:()=>void

  enableSeriousRecording(completionClosure:()=>void) {
    this.isSeriousRecordingEnabled = true;
    this.completionClosure = completionClosure
  }

  enableDangerousRecording(completionClosure:()=>void) {
    this.isDangerousRecordingEnabled = true;
    this.completionClosure = completionClosure
  }

  disableRecording() {
    this.isSeriousRecordingEnabled = false;
    this.isDangerousRecordingEnabled = false;
    this.completionClosure();
  }

}
