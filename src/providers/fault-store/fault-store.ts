import { Injectable } from '@angular/core';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { combineReducers } from 'redux';

import { Observable } from 'rxjs/Observable';
import { IState, IFaultElementState, ITestResults } from './fault-store.model';
import { faultReducer as faults } from './fault.reducer';
import { FaultStoreActions } from './fault-store.action';
import { upperFirst } from 'lodash';
import { TestResult } from '../../components/test-summary/enums/TestResult';
import { FaultTitle } from '../../components/test-summary/enums/FaultTitle';
import { Observer } from 'rxjs';

declare var require;

const reduxLogger = require('redux-logger');

@Injectable()
export class FaultStoreProvider {
  currentFaults$: Observable<IFaultElementState>;
  testResult: TestResult;

  INITIAL_STATE: IState = {
    faults: {}
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
    this.currentFaults$ = this.store.select((state) => state.faults);
  }

  reset() {
    this.faultActions.resetFaults();
  }

  resetFault(id) {
    this.faultActions.resetFault(id);
  }

  addFault(id, text, faultType) {
    this.faultActions.addFault(id, text, faultType);
  }

  removeFault(id, text, faultType, faultCounter?) {
    this.faultActions.removeFault(id, text, faultType, faultCounter);
  }

  getState() {
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

    const { faults } = this.getState();
    Object.keys(faults).forEach((fault) => {
      if (faults[fault].fault) {
        drivingFaultsNum += faults[fault].fault;
        const section = upperFirst(fault.match(sectionRegEx)[0]);
        drivingFaults.push({
          name: section + ' - ' + faults[fault].faultText,
          total: faults[fault].fault
        });
      }
      if (faults[fault].dangerous) {
        dangerousFaultsNum += faults[fault].dangerous;
        const section = upperFirst(fault.match(sectionRegEx)[0]);
        dangerousFaults.push({
          name: section + ' - ' + faults[fault].faultText,
          total: faults[fault].fault
        });
      }
      if (faults[fault].serious) {
        seriousFaultsNum += faults[fault].serious;
        const section = upperFirst(fault.match(sectionRegEx)[0]);
        seriousFaults.push({
          name: section + ' - ' + faults[fault].faultText,
          total: faults[fault].fault
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
    };
    const seriousFaultSummary = {
      title: FaultTitle.Serious,
      total: seriousFaultsNum,
      faults: seriousFaults
    };
    const drivingFaultSummary = {
      title: FaultTitle.DrivingFaults,
      total: drivingFaultsNum,
      faults: drivingFaults
    };

    return { dangerousFaultSummary, seriousFaultSummary, drivingFaultSummary };
  }

  getFaultTotals(): Observable<ITestResults> {
    return new Observable((observer: Observer<any>) => {
      observer.next(this.calculateFaultTotals());
      observer.complete();
    });
  }

  calculateTestResult() {
    const failResult =
      this.drivingFaultsNumber >= 16 ||
      this.seriousFaultsNumber > 0 ||
      this.dangerousFaultsNumber > 0;
    this.testResult = failResult ? TestResult.Fail : TestResult.Pass;
    return this.testResult;
  }

  getTestResult(): TestResult {
    this.calculateTestResult();
    return this.testResult;
  }
}
