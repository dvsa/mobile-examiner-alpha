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
  faultModeTimeout;
  change: Subject<any> = new Subject<any>();

  constructor() {
  }

  public get(): string {
    return this.faultMode;
  }

  public set(faultMode: string): void {
    this.faultMode = faultMode;
    this.resetTimeout();
    this.change.next(this.faultMode);
  }

  public resetTimeout() {
    clearTimeout(this.faultModeTimeout);
  }

  public reset() {
    clearTimeout(this.faultModeTimeout);
    this.faultModeTimeout = setTimeout(() => {
      this.faultMode = 'view-only';
      this.change.next(this.faultMode);
    }, this.resetDelay);
  }

}
