import { Injectable } from '@angular/core';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { combineReducers } from 'redux';

import { Observable } from 'rxjs/Observable';
import { IState, ILastFaultState, IFaultElementState, ITestResults } from './fault-store.model';
import { faultReducer as faults } from './fault.reducer';
import { FaultStoreActions } from './fault-store.action';
import { upperFirst } from 'lodash';
import { TestResult } from '../../components/test-summary/enums/TestResult';
import { FaultTitle } from '../../components/test-summary/enums/FaultTitle';
import { Observer } from 'rxjs';

declare var require;

const reduxLogger = require('redux-logger');

/*
  Generated class for the FaultStoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FaultStoreProvider {

  lastFault$: Observable<ILastFaultState>;
  currentFaults$: Observable<IFaultElementState>;
  testResult: TestResult;

  INITIAL_STATE: IState = {
    faults: {},
    totals: {}
  };

  testResults$: Observable<ITestResults>;

  drivingFaultsNumber = 0;
  seriousFaultsNumber = 0;
  dangerousFaultsNumber = 0;

  constructor(
    public store: NgRedux<IState>,
    public faultActions: FaultStoreActions,
    public devTools: DevToolsExtension
  ) {
    const reducers = combineReducers<IState>({ faults });

    store.configureStore(
      reducers,
      this.INITIAL_STATE,
      [reduxLogger.createLogger()],
      devTools.isEnabled() ? [devTools.enhancer()] : []
    );

    this.faultActions.loadFaults();
    this.lastFault$ = this.store.select((state) => state.faults.lastFault);
    this.currentFaults$ = this.store.select((state) => state.faults);
  }

  reset() {
    this.faultActions.resetFaults();
  }

  addFault(id, text, faultType) {
    this.faultActions.addFault(id, text, faultType);
  }

  removeFault(id, text, faultType, faultCounter?) {
    this.faultActions.removeFault(id, text, faultType, faultCounter);
  }

  undoFault() {
    const currState = this.store.getState();
    this.faultActions.undoLastFault(currState.faults.lastFault);
  }

  getTotals() {
    return this.store.getState();
  }

  calculateFaultTotals(): ITestResults {

    let drivingFaultsNum = 0;
    let dangerousFaultsNum = 0;
    let seriousFaultsNum = 0;
    const seriousFaults = [];
    const dangerousFaults = [];
    const drivingFaults = [];
    const sectionRegEx = new RegExp(/^[a-z]*/);
    const data = this.getTotals();
    Object.keys(data.faults).forEach((fault) => {
      if (fault === 'lastFault') {
        return false;
      }
      if (data.faults[fault].fault) {
        drivingFaultsNum += data.faults[fault].fault;
        const section = upperFirst(fault.match(sectionRegEx)[0]);
        drivingFaults.push({
          name: section + ' - ' + data.faults[fault].faultText,
          total: data.faults[fault].fault
        });
      }
      if (data.faults[fault].dangerous) {
        dangerousFaultsNum += data.faults[fault].dangerous;
        const section = upperFirst(fault.match(sectionRegEx)[0]);
        dangerousFaults.push({
          name: section + ' - ' + data.faults[fault].faultText,
          total: data.faults[fault].fault
        });
      }
      if (data.faults[fault].serious) {
        seriousFaultsNum += data.faults[fault].serious;
        const section = upperFirst(fault.match(sectionRegEx)[0]);
        seriousFaults.push({
          name: section + ' - ' + data.faults[fault].faultText,
          total: data.faults[fault].fault
        });
      }
    });

    this.drivingFaultsNumber = drivingFaultsNum;
    this.seriousFaultsNumber = seriousFaultsNum;
    this.dangerousFaultsNumber = dangerousFaultsNum;

    const dangerousFaultSummary = {
      title: FaultTitle.Dangerous,
      total: dangerousFaultsNum,
      faults: dangerousFaults
    }
    const seriousFaultSummary = {
      title: FaultTitle.Serious,
      total: seriousFaultsNum,
      faults: seriousFaults
    }
    const drivingFaultSummary = {
      title: FaultTitle.DriverFaults,
      total: drivingFaultsNum,
      faults: drivingFaults
    }

    return { dangerousFaultSummary, seriousFaultSummary, drivingFaultSummary }

  }

  getFaultTotals(): Observable<ITestResults> {
    return new Observable((observer: Observer<any>) => {
      observer.next(this.calculateFaultTotals());
      observer.complete();
    });
  }

  calculateTestResult() {
    if (this.drivingFaultsNumber >= 16 || this.seriousFaultsNumber > 0 || this.dangerousFaultsNumber > 0) {
      return this.testResult = TestResult.Fail;
    }
    return this.testResult = TestResult.Pass;
  }

  getTestResult(): TestResult {
    this.calculateTestResult();
    return this.testResult;
  }

}
