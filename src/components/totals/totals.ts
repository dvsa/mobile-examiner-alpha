import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { HazardRecorderProvider } from '../../providers/hazard-recorder/hazard-recorder';

/**
 * Generated class for the TotalsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'totals',
  templateUrl: 'totals.html'
})
export class TotalsComponent {

  @select(['totals', 'fault']) readonly faultMarks$: Observable<number>;
  @select(['totals', 'dangerous']) readonly dangerousMarks$: Observable<number>;
  @select(['totals', 'serious']) readonly seriousMarks$: Observable<number>;

  isRemoveButtonPressed = false;

  constructor(private hazardProvider: HazardRecorderProvider) {
  }

  enableRemovingFaults() {
    this.isRemoveButtonPressed = !this.isRemoveButtonPressed;
    this.hazardProvider.enableRemovingFaults(() => this.isRemoveButtonPressed = false);
  }

}
