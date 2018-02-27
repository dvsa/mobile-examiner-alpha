import { Component } from '@angular/core';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';

/**
 * Generated class for the FaultControlsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fault-controls-multiTab',
  templateUrl: 'fault-controls-multiTab.html'
})
export class FaultControlsMultiTabComponent {

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
    if (this.numDrivingFaults > 0) {
      this.numDrivingFaults--;
      this.faultsService.removeDrivingFault();
    }
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
