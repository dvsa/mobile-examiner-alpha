import { Component } from '@angular/core';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';

/**
 * Generated class for the FaultsScorecardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'faults-scorecard',
  templateUrl: 'faults-scorecard.html'
})
export class FaultsScorecardComponent {

  drivingFaults: number;
  serious: number;
  dangerous: number;

  constructor(faultsService: FaultsScorecardProvider) {
    this.drivingFaults = faultsService.drivingFaults;
    this.serious = faultsService.serious;
    this.dangerous = faultsService.dangerous;
  }

}
