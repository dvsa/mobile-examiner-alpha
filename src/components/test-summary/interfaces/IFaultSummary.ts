import { IFault } from "./IFault";

export enum FaultTitle {
    Dangerous = 'Dangerous',
    Serious = 'Serious',
    DriverFaults = 'Driver Faults'
}

export interface IFaultSummary {
    title: FaultTitle,
    total: number,
    faults: IFault[]
}
