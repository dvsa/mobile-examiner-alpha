import { Component } from '@angular/core';
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
  numFaults: number = 0;
  numDangerous: number = 0;
  numSerious: number = 0;

  @select(['totals', 'fault']) readonly faultMarks$: Observable<number>;
  @select(['totals', 'dangerous']) readonly dangerousMarks$: Observable<number>;
  @select(['totals', 'serious']) readonly seriousMarks$: Observable<number>;

  isRemoveButtonPressed = false;

  constructor(private hazardProvider: HazardRecorderProvider) {
    this.faultMarks$.subscribe(numFaults => {
      this.numFaults = numFaults;
      this.toggleRemoveDisabledButton()
    });

    this.dangerousMarks$.subscribe(numDangerousMarks => {
      this.numDangerous = numDangerousMarks;
      this.toggleRemoveDisabledButton()
    })

    this.seriousMarks$.subscribe(numSerious => {
      this.numSerious = numSerious
      this.toggleRemoveDisabledButton()
    })

    this.toggleRemoveDisabledButton()
  }

  toggleRemoveDisabledButton() {
    if (this.numDangerous > 0 || this.numFaults > 0 || this.numSerious > 0) {
      this.isRemoveDisabled = false;
    } else {
      this.isRemoveDisabled = true;
    }
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
