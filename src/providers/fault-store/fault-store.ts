import { Injectable } from '@angular/core';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { combineReducers } from 'redux';

import { Observable } from 'rxjs/Observable';
import { IState, ILastFaultState, IFaultElementState } from './fault-store.model';
import { faultReducer as faults } from './fault.reducer';
import { FaultStoreActions } from './fault-store.action';

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
  currentfaults$: Observable<IFaultElementState>;

  INITIAL_STATE: IState = {
    faults: {},
    totals: {}
  };

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
    this.currentfaults$ = this.store.select((state) => state.faults);
  }

  reset() {
    this.faultActions.resetFaults();
  }

  addFault(id, faultType) {
    this.faultActions.addFault(id, faultType);
  }

  removeFault(id, faultType, faultCounter?) {
    this.faultActions.removeFault(id, faultType, faultCounter);
  }

  undoFault() {
    const currState = this.store.getState();
    this.faultActions.undoLastFault(currState.faults.lastFault);
  }

  getTotals() {
    return this.store.getState();
  }
}
