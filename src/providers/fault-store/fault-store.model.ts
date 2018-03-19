export interface IState {
    totals: IFaultState,
    faults: IFaultElementState
}

export interface IFaultState {
    fault?: number,
    dangerous?: number,
    serious?: number
}

export interface ILastFaultState {
    id: string,
    faultType: string,
    action: string
}

export interface IFaultElementState {
    lastFault?: ILastFaultState,
    [id: string]: any
}

export interface IFaultPayload {
    id: string,
    faultType: string
};

export interface ILastFaultPayload {
    id: string,
    faultType: string,
    action: string
};
