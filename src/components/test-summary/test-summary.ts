import { Component } from '@angular/core';
import { IFaultSummary } from './interfaces/IFaultSummary';
import { FaultTitle } from './enums/FaultTitle';
import { FaultStoreProvider } from '../../providers/fault-store/fault-store';

@Component({
  selector: 'test-summary',
  templateUrl: 'test-summary.html'
})
export class TestSummaryComponent {
  testResult: string;
  faultSummaries: IFaultSummary[];

  constructor(private faultStore: FaultStoreProvider) {
    this.testResult = this.faultStore.getTestResultAndCalculateFaultTotals();
    this.faultSummaries = [
      {
        title: FaultTitle.Dangerous,
        total: this.faultStore.getNumberOfDangerousFaults(),
        faults: this.faultStore.getDangerousFaults()
      },
      {
        title: FaultTitle.Serious,
        total: this.faultStore.getNumberOfSeriousFaults(),
        faults: this.faultStore.getSeriousFaults()
      },
      {
        title: FaultTitle.DriverFaults,
        total: this.faultStore.getNumberOfDrivingFaults(),
        faults: this.faultStore.getDrivingFaults()
      }
    ];
  }
}
