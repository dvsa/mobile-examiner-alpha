import { FaultStoreActions, FaultAddAction, FaultDeleteAction, FaultUndoAction } from './fault-store.action';
import { IFaultState } from './fault-store.model';
import { Action } from 'redux';

export const INITIAL_STATE: IFaultState = {
    fault: 0,
    serious: 0,
    dangerous: 0
};

export function totalsReducer(state: IFaultState = INITIAL_STATE,
     action: Action): IFaultState {

    switch(action.type) {
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
    const { faultType } = faultAddAction.payload;
    let currValue = state[faultType] || 0;

    return {
        ...state,
        [faultType]: ++currValue,
    };
}

const deleteFault = (state, action) => {
    const faultDeleteAction = action as FaultDeleteAction;
    const { faultType } = faultDeleteAction.payload;

    let currValue = state[faultType] || 0;
    if (currValue > 0) {
        return {
            ...state,
            [faultType]: --currValue,
        };
    } else {
        return state;
    }
}

const undoFault = (state, action) => {
    const faultUndoAction = action as FaultUndoAction;
    if (faultUndoAction.payload.id && faultUndoAction.payload.action === 'ADD') {
        const { faultType } = faultUndoAction.payload;

        return {
            ...state,
            [faultType]: --state[faultType]
        }
    }

    return state;
}