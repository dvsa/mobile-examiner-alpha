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

    let faultType;
    let currValue;

    switch(action.type) {
        case FaultStoreActions.RESET_FAULTS:
            state = INITIAL_STATE;
            return {
                ...state
            };
        case FaultStoreActions.LOAD_FAULTS:
            return {
                ...state
            };
        case FaultStoreActions.ADD_FAULTS:
            const faultAddAction = action as FaultAddAction;
            faultType = faultAddAction.payload.faultType;
            currValue = state[faultType] || 0;
            const add = {
                [faultType]: ++currValue,
            }

            return {
                ...state,
                ...add
            };
        case FaultStoreActions.DELETE_FAULTS:
            const faultDeleteAction = action as FaultDeleteAction;
            faultType = faultDeleteAction.payload.faultType;
            currValue = state[faultType] || 0;
            const minus = {
                [faultType]: --currValue,
            };

            return {
                ...state,
                ...minus
            };

            case FaultStoreActions.UNDO_FAULTS:
                const faultUndoAction = action as FaultUndoAction;
                if (faultUndoAction.payload.id && faultUndoAction.payload.action === 'ADD') {
                    ({ faultType } = faultUndoAction.payload)

                    return {
                        ...state,
                        [faultType]: --state[faultType]
                    }
                }

                return {
                    ...state
                };
    }

    return state;
}