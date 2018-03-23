import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the HazardRecorderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HazardRecorderProvider {

  isSeriousRecordingEnabled = false
  isDangerousRecordingEnabled = false
  isRemovingFaultsEnabled = false
  change: Subject<any> = new Subject();

  constructor() {
  }

  completionClosure:()=>void

  enableSeriousRecording(completionClosure:()=>void) {
    this.isSeriousRecordingEnabled = true;
    this.change.next(this);
    this.completionClosure = completionClosure
  }

  enableDangerousRecording(completionClosure:()=>void) {
    this.isDangerousRecordingEnabled = true;
    this.change.next(this);
    this.completionClosure = completionClosure
  }

  enableRemovingFaults(callback) {
    this.isRemovingFaultsEnabled = true;
    this.change.next(this);
    this.completionClosure = callback
  }

  getEnabled(): string {
    if (this.isDangerousRecordingEnabled) return 'dangerous';
    if (this.isRemovingFaultsEnabled) return 'remove';
    if (this.isSeriousRecordingEnabled) return 'serious';
    return null;
  }

  disableRecording() {
    this.isSeriousRecordingEnabled = false;
    this.isDangerousRecordingEnabled = false;
    this.isRemovingFaultsEnabled = false;
    this.change.next(this);
    this.completionClosure();
  }

}
