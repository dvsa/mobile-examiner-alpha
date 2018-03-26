import { FaultStoreActions, FaultAddAction, FaultDeleteAction } from './fault-store.action';
import { IFaultElementState } from './fault-store.model';
import { Action } from 'redux';

const INITIAL_STATE: IFaultElementState = {};
// let id;
// let faultType;
// let lastFault;
// let currFaults;
// let newFaultState;

export function faultReducer(state: IFaultElementState = INITIAL_STATE,
     action: Action): IFaultElementState {

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
        const { id, faultType } = faultAddAction.payload;
        const currFaults = state[id] || {};
        const lastFault = { id, faultType, action: 'ADD' };

        return {
            ...state,
            [id]: {
                ...currFaults,
                [faultType]: currFaults[faultType] ? ++currFaults[faultType] : 1
            },
            lastFault
        };
}

const deleteFault = (state, action) => {
    const faultDeleteAction = action as FaultDeleteAction;
    let newFaultState;
    let { id, faultType } = faultDeleteAction.payload;
    const currFaults = state[id] || {};
    const lastFault = { id, faultType, action: 'DELETE' };
    if(currFaults[faultType] > 0) {
        newFaultState = { [faultType]: --currFaults[faultType] };
    } else {
        ({ faultType, ...newFaultState } = currFaults);
    }

    const minus = {
        [id] : {
            ...currFaults,
            ...newFaultState
        }
    };

    return {
        ...state,
        ...minus,
        lastFault
    };
}

const undoFault = (state, action) => {
    let newState;
    if (state.lastFault.id) {
        let newFaultState;
        let {lastFault, ...newState} = state;
        const { id, faultType } = lastFault;
        const currFaults = state[id] || {};

        if(currFaults[faultType] > 1) {
            newFaultState = { [faultType]: --currFaults[faultType] };
        } else {
            ({ [faultType]: faultType, ...newFaultState } = currFaults);
        }

        const undoValue = {
            [id] : {
                ...newFaultState
            }
        }

        if (Object.keys(newFaultState).length === 0){
            ({ [id]: id, ...newState } = newState);
            return newState;
        } else {
            return {
                ...newState,
                ...undoValue
            }
        }
    }

    return state;
}