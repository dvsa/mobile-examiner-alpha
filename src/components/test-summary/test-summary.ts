import { Component, Input } from '@angular/core';
import { IFaultSummary } from './interfaces/IFaultSummary';

@Component({
  selector: 'test-summary',
  templateUrl: 'test-summary.html'
})
export class TestSummaryComponent {

  @Input() faultSummaries: { [key: string]: IFaultSummary };
  @Input() testResult: string;
  drivingFaultSummary: IFaultSummary;
  seriousFaultSummary: IFaultSummary;
  dangerousFaultSummary: IFaultSummary;

  constructor() {
  }

  ngOnInit() {
    this.drivingFaultSummary = this.faultSummaries.drivingFaultSummary;
    this.seriousFaultSummary = this.faultSummaries.seriousFaultSummary;
    this.dangerousFaultSummary = this.faultSummaries.dangerousFaultSummary;
  }
}
