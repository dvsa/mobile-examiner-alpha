import { Component } from '@angular/core';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';

/**
 * Generated class for the FaultControlsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fault-controls',
  templateUrl: 'fault-controls.html'
})
export class FaultControlsComponent {

  serious: boolean;
  dangerous: boolean;

  constructor(private faultsService: FaultsScorecardProvider) {
  }

  addDrivingFault() {
    this.faultsService.addDrivingFault();
  }

  removeDrivingFault() {
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
