import { Component, Input } from '@angular/core';
import { FaultModeProvider } from '../../providers/fault-mode/fault-mode';
import { FaultStoreProvider } from '../../providers/fault-store/fault-store';

@Component({
  selector: 'all-on-one-form-fault-modes-sub-element',
  templateUrl: 'all-on-one-form-fault-modes-sub-element.html'
})
export class AllOnOneFormFaultModesSubElementComponent {

  @Input() text: string;
  @Input() faultMode: string;
  @Input() section: string;
  serious: boolean = false;
  dangerous: boolean = false;
  counter: number = 0;
  faultCounter: number;
  hasSerious: boolean = false;
  hasDangerous: boolean = false;
  isLastFault: boolean

  constructor(
    private faultModeService: FaultModeProvider,
    private faultStore: FaultStoreProvider) {

    this.faultStore.lastFault$
      .subscribe(data => this.isLastFault = (data && data.id === this.section));

    this.faultStore.currentfaults$
      .subscribe(data => {
          this.faultCounter = data[this.section] ? data[this.section].fault : 0;
          this.serious = data[this.section] ? !!data[this.section].serious : false;
          this.dangerous = data[this.section] ? !!data[this.section].dangerous : false;
      });
  }

  isDisabled() {
    return this.faultMode === 'view-only' || (this.faultMode === 'remove-mode' && this.faultCounter === 0) ;
  }

  addFault(faultMode: string) {
    if (faultMode === 'driving-faults') this.addDrivingFault();
    if (faultMode === 'serious') this.updateSerious();
    if (faultMode === 'dangerous') this.updateDangerous();
    if (faultMode === 'remove-mode') this.removeFault();
    this.faultModeService.reset();
  }

  addDrivingFault() {
    this.counter++;
    // prevent fault marking
    if (this.hasDangerous || this.hasSerious) return;
    this.faultStore.addFault(this.section, 'fault');
  }

  updateSerious() {
    if (!this.serious) {
      this.faultStore.addFault(this.section, 'serious');  
      this.serious = true;
    } else {
      this.faultStore.removeFault(this.section, 'serious');
      this.serious = false;
    }
  }

  updateDangerous() {
    if (!this.dangerous) {
      this.faultStore.addFault(this.section, 'dangerous');
      this.dangerous = true;
    } else {
      this.faultStore.removeFault(this.section, 'dangerous')
      this.dangerous = false;
    }
  }

  removeFault() {
    if (this.faultCounter > 0) {
      this.faultStore.removeFault(this.section, 'fault')
    }
  }

}
