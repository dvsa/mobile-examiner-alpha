import { Component, Input } from '@angular/core';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';

@Component({
  selector: 'all-on-one-form-sub-element',
  templateUrl: 'all-on-one-form-sub-element.html'
})
export class AllOnOneFormSubElementComponent {

  @Input()
  text: string;

  serious: boolean;
  dangerous: boolean;
  numDrivingFaults: number = 0;

  constructor(private faultsService: FaultsScorecardProvider) {
  }

  addDrivingFault() {
    this.numDrivingFaults++;
    this.faultsService.addDrivingFault();
  }

  removeDrivingFault() {
    if (this.numDrivingFaults > 0) this.numDrivingFaults--;
    this.faultsService.removeDrivingFault();
  }

  updateSerious() {
    if (!this.serious) return this.faultsService.removeSerious();
    return this.faultsService.addSerious();
  }

  updateDangerous() {
    if (!this.dangerous) return this.faultsService.removeDangerous();
    return this.faultsService.addDangerous();
  }

}
