import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the FaultModeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FaultModeProvider {

  faultMode: string = 'view-only';
  resetDelay: number = 2000;
  resetFaultModeDelay: number = 5000;
  faultRecordingTimeout;
  faultModeIdleTimeout;

  change: Subject<any> = new Subject<any>();

  constructor() {
  }

  public get(): string {
    return this.faultMode;
  }

  public onFaultModeChange() {
    this.resetTimeout();
    this.faultModeIdleTimeout = setTimeout(() => {
      this.faultMode = 'view-only';
      this.change.next(this.faultMode);
    }, this.resetFaultModeDelay);
  }

  public setFaultModeResetDelay(delay: number) {
    this.resetFaultModeDelay = delay;
  }

  public resetTimeout() {
    clearTimeout(this.faultRecordingTimeout);
    clearTimeout(this.faultModeIdleTimeout);
  }

  public setResetDelay(delay: number) {
    this.resetDelay = delay;
  }

  public reset() {
    clearTimeout(this.faultRecordingTimeout);
    clearTimeout(this.faultModeIdleTimeout);
    this.faultRecordingTimeout = setTimeout(() => {
      this.faultMode = 'view-only';
      this.change.next(this.faultMode);
    }, this.resetDelay);
  }

}
