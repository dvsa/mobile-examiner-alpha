import { Injectable } from '@angular/core';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { combineReducers } from 'redux';
import { IFaultState } from './fault-store.model'
import { INITIAL_STATE, totalsReducer as totals } from './totals.reducer';
import { faultReducer as faults } from './fault.reducer';
import { FaultStoreActions } from './fault-store.action';

declare var require;

var reduxLogger = require('redux-logger');

/*
  Generated class for the FaultStoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FaultStoreProvider {

  constructor(public store: NgRedux<IFaultState>,
    public faultActions: FaultStoreActions,
    public devTools: DevToolsExtension) {

      const reducers = combineReducers<IFaultState>({totals, faults});

      store.configureStore(
        reducers,
        INITIAL_STATE,
        [reduxLogger.createLogger()],
        devTools.isEnabled() ? [devTools.enhancer()] : []);

      this.faultActions.loadFaults();

  }

    reset() {
      this.faultActions.resetFaults();
    }

    addFault(id, faultType) {
      this.faultActions.addFault(id, faultType);
    }

    removeFault(id, faultType) {
      this.faultActions.removeFault(id, faultType);
    }

    undoFault(lastFault) {
      if(lastFault) {
        this.faultActions.undoLastFault(lastFault);        
      }  
    }

}
