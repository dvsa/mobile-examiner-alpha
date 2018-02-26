import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the FaultsScorecardProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
interface ReportState {
  drivingFaults: number,
  serious: number,
  dangerous: number
}
@Injectable()
export class FaultsScorecardProvider {

  reportState: ReportState = {
    drivingFaults: 0,
    serious: 0,
    dangerous: 0
  }
  change: Subject<ReportState> = new Subject<ReportState>();

  constructor() {
  }

  addDrivingFault() {
    this.reportState.drivingFaults++;
    this.change.next(this.reportState);
  }

  removeDrivingFault() {
    if (this.reportState.drivingFaults > 0) this.reportState.drivingFaults--;
    this.change.next(this.reportState);
  }

  addSerious() {
    this.reportState.serious++;
    this.change.next(this.reportState);
  }

  addDangerous() {
    this.reportState.dangerous++;
    this.change.next(this.reportState);
  }

  removeSerious() {
    if (this.reportState.serious > 0) this.reportState.serious--;
    this.change.next(this.reportState);
  }

  removeDangerous() {
    if (this.reportState.dangerous > 0) this.reportState.dangerous--;
    this.change.next(this.reportState);
  }

}
