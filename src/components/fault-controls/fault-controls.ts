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


  constructor(private faultsService: FaultsScorecardProvider) {
  }

  addDrivingFault() {
    this.faultsService.addDrivingFault();
  }

  removeDrivingFault() {
    this.faultsService.removeDrivingFault();
  }

  addSerious() {
    this.faultsService.addSerious();
  }

  addDangerous() {
    this.faultsService.addDangerous();
  }

}
