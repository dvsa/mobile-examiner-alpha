import { FaultStoreActions, FaultAddAction, FaultDeleteAction } from './fault-store.action';
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
    case FaultStoreActions.LOAD_FAULTS:
      return state;
    case FaultStoreActions.ADD_FAULTS:
      return addFault(state, action);
    case FaultStoreActions.DELETE_FAULTS:
      return deleteFault(state, action);
    case FaultStoreActions.UNDO_FAULTS:
      return undoFault(state, action);
  }

  return state;
}

const addFault = (state, action) => {
  const faultAddAction = action as FaultAddAction;
  let { faultText } = faultAddAction.payload;
  const { id, faultType } = faultAddAction.payload;
  const currFaults = state[id] || {};
  const lastFault = { id, faultType, faultText, action: 'ADD' };

  faultText = upperFirst(faultText);
  return {
    ...state,
    lastFault,
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
  const lastFault = { id, faultType, action: 'DELETE' };
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
    ...minus,
    lastFault
  };
};

const undoFault = (state, action) => {
  if (state.lastFault.id) {
    let newFaultState;
    const { lastFault, ...newState } = state;
    const { id, faultType } = lastFault;
    const currFaults = state[id] || {};

    if (currFaults[faultType] > 1) {
      newFaultState = { [faultType]: (currFaults[faultType] -= 1) };
    } else {
      ({ [faultType]: faultType, ...newFaultState } = currFaults);
    }

    const undoValue = {
      [id]: {
        ...newFaultState
      }
    };

    if (Object.keys(newFaultState).length === 0) {
      ({ [id]: id, ...newState } = newState);
      return newState;
    }

    return {
      ...newState,
      ...undoValue
    };
  }

  return state;
};
