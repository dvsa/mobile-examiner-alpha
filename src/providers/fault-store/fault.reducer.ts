import { FaultStoreActions, FaultAddAction, FaultDeleteAction } from './fault-store.action';
import { IFaultElementState } from './fault-store.model';
import { Action } from 'redux';

const INITIAL_STATE: IFaultElementState = {};

export function faultReducer(state: IFaultElementState = INITIAL_STATE,
     action: Action): IFaultElementState {

    let id;
    let faultType;
    let lastFault;
    let currFaults;
    let newFault;

    switch(action.type) {

        case FaultStoreActions.RESET_FAULTS:
            return {};
        case FaultStoreActions.LOAD_FAULTS:
            return {
                ...state
            };
        case FaultStoreActions.ADD_FAULTS:
            const faultAddAction = action as FaultAddAction;
            ({ id, faultType } = faultAddAction.payload);
            currFaults = state[id] || {};
            newFault = { [faultType]: currFaults[faultType] ? ++currFaults[faultType] : 1 }
            const add = {
                [id] : {
                    ...currFaults,
                    ...newFault
                }
            }
            lastFault = {
                id,
                faultType,
                action: 'ADD'
            }

            return {
                ...state,
                ...add,
                lastFault
            };

        case FaultStoreActions.DELETE_FAULTS:
            const faultDeleteAction = action as FaultDeleteAction;
            ({ id, faultType } = faultDeleteAction.payload);
            currFaults = state[id] || {};
            newFault = currFaults[faultType] ? { [faultType]: --currFaults[faultType] } : {}
            const minus = {
                [id] : {
                    ...currFaults,
                    ...newFault
                }
            };

            lastFault = {
                id,
                faultType,
                action: 'DELETE'
            };

            return {
                ...state,
                ...minus,
                lastFault
            };

        // this can currently only undo the last added fault,
        // so there is no need to check the command
        case FaultStoreActions.UNDO_FAULTS:
            if (state.lastFault.id) {
                ({ id, faultType } = state.lastFault);
                currFaults = state[id] || {};
                console.log('current fault: ', currFaults[faultType])
                if (currFaults[faultType] > 0) {
                    newFault = { [faultType]: --currFaults[faultType] };
                } else {
                    newFault = { [faultType]: ++currFaults[faultType] };
                }
                //newFault = currFaults[faultType] > 0 ? { [faultType]: --currFaults[faultType] } : {}

                console.log(newFault)

                const undoValue = {
                    [id] : {
                        ...currFaults,
                        ...newFault
                    }
                }

                console.log(undoValue)

                return {
                    ...state,
                    ...undoValue,
                    lastFault: {}
                }
            }

            return {
                ...state
            };

    }

    return state;
}