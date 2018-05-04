import {
  FaultStoreActions,
  FaultAddAction,
  FaultDeleteAction,
  FaultAction
} from './fault-store.action';
import { IFaultElementState } from './fault-store.model';
import { Action } from 'redux';
import { upperFirst } from 'lodash';

const INITIAL_STATE: IFaultElementState = {};

export function faultReducer(
  state: IFaultElementState = INITIAL_STATE,
  action: Action
): IFaultElementState {
  switch (action.type) {
    case FaultStoreActions.RESET_FAULTS:
      return INITIAL_STATE;
    case FaultStoreActions.RESET_FAULT:
      return resetFault(state, action);
    case FaultStoreActions.LOAD_FAULTS:
      return state;
    case FaultStoreActions.ADD_FAULTS:
      return addFault(state, action);
    case FaultStoreActions.DELETE_FAULTS:
      return deleteFault(state, action);
  }

  return state;
}

const resetFault = (state, action) => {
  const faultAction = action as FaultAction;
  const { id: faultId } = faultAction.payload;

  if (state[faultId]) {
    const { [faultId]: deleted, ...newState } = state;
    return {
      ...newState
    };
  }

  return state;
};

const addFault = (state, action) => {
  const faultAddAction = action as FaultAddAction;
  let { faultText } = faultAddAction.payload;
  const { id, faultType } = faultAddAction.payload;
  const currFaults = state[id] || {};

  faultText = upperFirst(faultText);
  return {
    ...state,
    [id]: {
      ...currFaults,
      faultText,
      [faultType]: currFaults[faultType] ? (currFaults[faultType] += 1) : 1
    }
  };
};

const deleteFault = (state, action) => {
  const faultDeleteAction = action as FaultDeleteAction;
  let newFaultState;
  const { id } = faultDeleteAction.payload;
  let { faultType } = faultDeleteAction.payload;
  const currFaults = state[id] || {};
  if (currFaults[faultType] > 0) {
    newFaultState = { [faultType]: (currFaults[faultType] -= 1) };
  } else {
    ({ faultType, ...newFaultState } = currFaults);
  }

  const minus = {
    [id]: {
      ...currFaults,
      ...newFaultState
    }
  };

  return {
    ...state,
    ...minus
  };
};
