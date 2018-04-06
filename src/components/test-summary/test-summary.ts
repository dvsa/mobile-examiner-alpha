import { Component } from '@angular/core';
import { IFaultSummary, FaultTitle } from './interfaces/IFaultSummary';

@Component({
  selector: 'test-summary',
  templateUrl: 'test-summary.html'
})
export class TestSummaryComponent {

  faultSummaries: IFaultSummary[] = [
    {
      title: FaultTitle.Dangerous,
      total: 4,
      faults: [
        { name: 'Positioning - Lane Discipline', total: 3 },
        { name: 'Response to signs - Other Road Users', total: 1 }
      ]
    },
    {
      title: FaultTitle.Serious,
      total: 3,
      faults: [
        { name: 'Judgement - Cutting Corners', total: 2 },
        { name: 'Awareness / Planning', total: 1 },
        { name: 'Overtaking', total: 1 }
      ]
    },
    {
      title: FaultTitle.DriverFaults,
      total: 8,
      faults: [
        { name: 'Judgement - Cutting Corners', total: 2 },
        { name: 'Awareness / Planning', total: 1 },
        { name: 'Overtaking', total: 1 },
        { name: 'Positioning - Lane Discipline', total: 3 },
        { name: 'Response to signs - Other Road Users', total: 1 }
      ]
    }
  ];

  constructor() {
  }

}
