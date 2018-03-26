import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { HazardRecorderProvider } from '../../providers/hazard-recorder/hazard-recorder';
import { Subscription } from 'rxjs/Subscription';

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

  isRemoveDisabled: boolean = false;
  subscription: Subscription;
  numFaults: number;

  @select(['totals', 'fault']) readonly faultMarks$: Observable<number>;
  @select(['totals', 'dangerous']) readonly dangerousMarks$: Observable<number>;
  @select(['totals', 'serious']) readonly seriousMarks$: Observable<number>;

  @Input() options;

  isRemoveButtonPressed = false;

  constructor(private hazardProvider: HazardRecorderProvider) {
    this.subscription = hazardProvider.change.subscribe(hazardProviderClass => {
      this.toggleRemoveButtonState(hazardProviderClass);
    });
    this.faultMarks$.subscribe(numFaults => {
      this.numFaults = numFaults;
      if (this.numFaults < 1) {
        this.isRemoveDisabled = true;
      } else {
        this.isRemoveDisabled = false;
      }
    });
  }

  toggleRemoveButtonState(hazardProviderClass: HazardRecorderProvider) {
    const enabledFault = this.hazardProvider.getEnabled();
    if (this.numFaults < 1) return this.isRemoveDisabled = true;
    if (enabledFault !== null && enabledFault !== 'remove') return this.isRemoveDisabled = true;
    return this.isRemoveDisabled = false;
  }

  enableRemovingFaults() {
    this.isRemoveButtonPressed = !this.isRemoveButtonPressed;
    this.hazardProvider.enableRemovingFaults(() => this.isRemoveButtonPressed = false);
  }

}
