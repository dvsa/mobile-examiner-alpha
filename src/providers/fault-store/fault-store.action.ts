import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';
import { IFaultPayload, ILastFaultPayload } from './fault-store.model';

export type FaultAction = FluxStandardAction<null, null>;
export type FaultUndoAction = FluxStandardAction<ILastFaultPayload, null>;
export type FaultAddAction = FluxStandardAction<IFaultPayload, null>;
export type FaultDeleteAction = FluxStandardAction<IFaultPayload, null>;
@Injectable()
export class FaultStoreActions {
  static readonly RESET_FAULTS = 'RESET_FAULTS';
  static readonly LOAD_FAULTS = 'LOAD_FAULTS';
  static readonly ADD_FAULTS = 'ADD_FAULTS';
  static readonly DELETE_FAULTS = 'DELETE_FAULTS';
  static readonly UNDO_FAULTS = 'UNDO_FAULTS';

  @dispatch()
  resetFaults = (): FaultAction => ({
    type: FaultStoreActions.RESET_FAULTS,
    meta: null,
    payload: null
  });

  @dispatch()
  loadFaults = (): FaultAction => ({
    type: FaultStoreActions.LOAD_FAULTS,
    meta: null,
    payload: null
  });

  @dispatch()
  addFault = (id: string, faultText: string, faultType: string): FaultAddAction => ({
    type: FaultStoreActions.ADD_FAULTS,
    meta: null,
    payload: { id, faultText, faultType }
  });

  @dispatch()
  removeFault = (
    id: string,
    faultText: string,
    faultType: string,
    faultCounter?: number
  ): FaultDeleteAction => ({
    type: FaultStoreActions.DELETE_FAULTS,
    meta: null,
    payload: { id, faultText, faultType, faultCounter }
  });

  @dispatch()
  undoLastFault = ({ id, faultType, faultText, action }): FaultUndoAction => ({
    type: FaultStoreActions.UNDO_FAULTS,
    meta: null,
    payload: { id, faultType, faultText, action }
  });
}
