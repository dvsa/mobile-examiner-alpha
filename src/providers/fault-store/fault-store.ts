import { Injectable } from '@angular/core';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { combineReducers } from 'redux';

import { Observable } from 'rxjs/Observable';
import { IState, ILastFaultState, IFaultElementState } from './fault-store.model';
import { faultReducer as faults } from './fault.reducer';
import { FaultStoreActions } from './fault-store.action';
import { upperFirst } from 'lodash';
import { IFault } from '../../components/test-summary/interfaces/IFault';
import { TestResult } from '../../components/test-summary/enums/TestResult';

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

  INITIAL_STATE: IState = {
    faults: {},
    totals: {}
  };

  drivingFaults = [];
  seriousFaults = [];
  dangerousFaults = [];

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

  /**
   * This method returns the string 'Pass' or 'Fail' depending on the outcome of
   * the test.
   *
   * It also computes the the numbers of the different types of faults and
   * stores the representation of the faults required by the test-summary
   * screen.
   *
   * {@link TestSummaryComponent}
   */
  getTestResultAndCalculateFaultTotals(): TestResult {
    let drivingFaults = 0;
    let dangerousFaults = 0;
    let seriousFaults = 0;
    this.seriousFaults = [];
    this.dangerousFaults = [];
    this.drivingFaults = [];
    const sectionRegEx = new RegExp(/^[a-z]*/);
    const data = this.getTotals();
    Object.keys(data.faults).forEach((fault) => {
      if (fault === 'lastFault') {
        return false;
      }
      if (data.faults[fault].fault) {
        drivingFaults += data.faults[fault].fault;
        const section = upperFirst(fault.match(sectionRegEx)[0]);
        this.drivingFaults.push({
          name: section + ' - ' + data.faults[fault].faultText,
          total: data.faults[fault].fault
        });
      }
      if (data.faults[fault].dangerous) {
        dangerousFaults += data.faults[fault].dangerous;
        const section = upperFirst(fault.match(sectionRegEx)[0]);
        this.dangerousFaults.push({
          name: section + ' - ' + data.faults[fault].faultText,
          total: data.faults[fault].fault
        });
      }
      if (data.faults[fault].serious) {
        seriousFaults += data.faults[fault].serious;
        const section = upperFirst(fault.match(sectionRegEx)[0]);
        this.seriousFaults.push({
          name: section + ' - ' + data.faults[fault].faultText,
          total: data.faults[fault].fault
        });
      }
    });

    this.drivingFaultsNumber = drivingFaults;
    this.seriousFaultsNumber = seriousFaults;
    this.dangerousFaultsNumber = dangerousFaults;

    if (drivingFaults >= 16 || dangerousFaults > 0 || seriousFaults > 0) {
      return TestResult.Fail;
    }

    return TestResult.Pass;
  }

  getNumberOfDrivingFaults(): number {
    return this.drivingFaultsNumber;
  }

  getNumberOfDangerousFaults(): number {
    return this.dangerousFaultsNumber;
  }

  getNumberOfSeriousFaults(): number {
    return this.seriousFaultsNumber;
  }

  getDrivingFaults(): IFault[] {
    return this.drivingFaults;
  }

  getSeriousFaults(): IFault[] {
    return this.seriousFaults;
  }

  getDangerousFaults(): IFault[] {
    return this.dangerousFaults;
  }
}
