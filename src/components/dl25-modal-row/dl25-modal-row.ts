import { Component, Input } from '@angular/core';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';

/**
 * Generated class for the Dl25ModalRowComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dl25-modal-row',
  templateUrl: 'dl25-modal-row.html'
})
export class Dl25ModalRowComponent {

  @Input() hasSections: boolean;
  @Input() section: string;
  @Input() faultTitle: string;

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
