import { Component, Input } from '@angular/core';
import { IFaultSummary, FaultTitle } from '../interfaces/IFaultSummary';
import { find } from 'lodash';

@Component({
  selector: 'test-summary-section',
  templateUrl: 'test-summary-section.html'
})
export class TestSummarySectionComponent {
  @Input() summary: IFaultSummary;

  faultTitleColourMap = [
    { title: FaultTitle.Dangerous, colour: 'failRed' },
    { title: FaultTitle.Serious, colour: 'seriousYellow' },
    { title: FaultTitle.DriverFaults, colour: 'dark' }
  ];

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

  constructor() {}

  getFaultTitleColour(title: FaultTitle) {
    return find(this.faultTitleColourMap, { title }).colour;
  }
}
