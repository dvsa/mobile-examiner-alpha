import { Injectable } from '@angular/core';

/*
  Generated class for the FaultsScorecardProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FaultsScorecardProvider {

  drivingFaults: number = 0;
  serious: number = 0;
  dangerous: number = 0;

  constructor() {
  }

  addDrivingFault() {
    this.drivingFaults++;
  }

  addSerious() {
    this.serious++;
  }

  addDangerous() {
    this.dangerous++;
  }

}
