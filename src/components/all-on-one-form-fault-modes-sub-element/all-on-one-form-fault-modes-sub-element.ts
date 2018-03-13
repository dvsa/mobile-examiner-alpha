import { Component, Input } from '@angular/core';
import { FaultModeProvider } from '../../providers/fault-mode/fault-mode';
import { FaultStoreProvider } from '../../providers/fault-store/fault-store';
import { NgRedux } from '@angular-redux/store';
import { IFaultCounter } from '../button-element/button-element';

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
    private faultStore: FaultStoreProvider,
    private ngRedux: NgRedux<IFaultCounter>) {
    // as it checks all the sections
    this.ngRedux.select(state => Object.keys(state.faults)
      .filter(key => key === this.section)
      .map(sectionName => {
        return state.faults[sectionName];
      })).subscribe(data => {
        if (data.length > 0) {
          this.faultCounter = data[0].fault;
          this.serious = !!data[0].serious;
          this.hasDangerous = !!data[0].dangerous;
        }
      });

      this.ngRedux.select(state => state.faults.lastFault)
      .subscribe(data => this.isLastFault = (data && data.id === this.section));
  }

  isDisabled() {
    return this.faultMode === 'view-only';
  }

  addFault(faultMode: string) {
    if (faultMode === 'driving-faults') this.addDrivingFault();
    if (faultMode === 'serious') this.updateSerious();
    if (faultMode === 'dangerous') this.updateDangerous();
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

}
