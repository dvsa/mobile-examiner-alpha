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
    { title: FaultTitle.DriverFaults, colour: 'dark' },
  ]

  constructor() {
  }

  getFaultTitleColour(title: FaultTitle) {
    return find(this.faultTitleColourMap, { 'title': title }).colour;
  }

}
