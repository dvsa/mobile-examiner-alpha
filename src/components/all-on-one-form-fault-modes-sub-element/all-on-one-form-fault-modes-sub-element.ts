import { Component, Input } from '@angular/core';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';

@Component({
  selector: 'all-on-one-form-fault-modes-sub-element',
  templateUrl: 'all-on-one-form-fault-modes-sub-element.html'
})
export class AllOnOneFormFaultModesSubElementComponent {

  @Input() text: string;
  @Input() faultMode: string;
  serious: boolean = false;
  dangerous: boolean = false;
  counter: number = 0;

  constructor(private faultsService: FaultsScorecardProvider) {
  }

  isDisabled() {
    return this.faultMode === 'view-only';
  }

  addFault(faultMode: string) {
    if (faultMode === 'driving-faults') this.addDrivingFault();
    if (faultMode === 'serious') this.updateSerious();
    if (faultMode === 'dangerous') this.updateDangerous();
  }

  addDrivingFault() {
    this.counter++;
    this.faultsService.addDrivingFault();
  }

  removeDrivingFault() {
    if (this.counter > 0) {
      this.counter--;
      this.faultsService.removeDrivingFault();
    }
  }

  updateSerious() {
    if (!this.serious) {
      this.faultsService.addSerious();
      this.serious = true;
    } else {
      this.faultsService.removeSerious();
      this.serious = false;
    }
  }

  updateDangerous() {
    if (!this.dangerous) {
      this.faultsService.addDangerous();
      this.dangerous = true;
    } else {
      this.faultsService.removeDangerous();
      this.dangerous = false;
    }  
  }

}
