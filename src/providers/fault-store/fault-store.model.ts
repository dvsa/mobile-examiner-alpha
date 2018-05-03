import { IFaultSummary } from "../../components/test-summary/interfaces/IFaultSummary";

export interface IState {
  totals: IFaultState;
  faults: IFaultElementState;
}

export interface IFaultState {
  fault?: number;
  dangerous?: number;
  serious?: number;
}

export interface ILastFaultState {
  id: string;
  faultType: string;
  faultText: string;
  action: string;
}

export interface IFaultElementState {
  lastFault?: ILastFaultState;
  [id: string]: any;
}

export interface IFaultPayload {
  id: string;
  faultText: string;
  faultType: string;
  faultCounter?: number;
}

export interface ILastFaultPayload {
  id: string;
  faultText: string;
  faultType: string;
  action: string;
}

export interface ITestResults {
  [summary: string]: IFaultSummary;
}
