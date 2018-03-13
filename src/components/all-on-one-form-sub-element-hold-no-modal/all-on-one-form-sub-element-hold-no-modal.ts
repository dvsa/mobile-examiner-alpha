import { Component, Input } from '@angular/core';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';
import { HazardRecorderProvider } from '../../providers/hazard-recorder/hazard-recorder';
import { NgRedux } from '@angular-redux/store';
import { IFaultCounter } from '../button-element/button-element';
import { Observable } from 'rxjs/Observable';
import { FaultStoreProvider } from '../../providers/fault-store/fault-store';

@Component({
  selector: 'all-on-one-form-sub-element-hold-no-modal',
  templateUrl: 'all-on-one-form-sub-element-hold-no-modal.html'
})
export class AllOnOneFormSubElementHoldNoModalComponent {

  @Input('section') section: string = '';
  @Input() text: string;

  serious: boolean = false;
  dangerous: boolean = false;

  faultCounter: number;
  isLastFault: boolean

  constructor(private faultsService: FaultsScorecardProvider,
              private hazardRecorderProvider: HazardRecorderProvider,
              private ngRedux: NgRedux<IFaultCounter>,
              private faultStore: FaultStoreProvider) {
        // this might not be the most performant way to do things,
    // as it checks all the sections
    this.ngRedux.select(state => Object.keys(state.faults)
      .filter(key => key === this.section)
      .map(sectionName => {
        return state.faults[sectionName];
      })).subscribe(data => {
        if (data.length > 0) {
          this.faultCounter = data[0].fault;
          this.serious = !!data[0].serious;
          this.dangerous = !!data[0].dangerous;
        }
      });

      this.ngRedux.select(state => state.faults.lastFault)
      .subscribe(data => this.isLastFault = (data && data.id === this.section));
  }

  addDrivingFault() {
    // prevent fault marking
    if (this.dangerous || this.serious) return;

    this.faultStore.addFault(this.section, 'fault');
    this.faultsService.addDrivingFault();
  }

  recordHazard() {
    if (this.hazardRecorderProvider.isDangerousRecordingEnabled) {
      this.updateDangerous();
      this.hazardRecorderProvider.disableRecording();
    } else if (this.hazardRecorderProvider.isSeriousRecordingEnabled) {
      this.updateSerious();
      this.hazardRecorderProvider.disableRecording();
    }
  }

  updateSerious() {
    this.serious = !this.serious;
    if (!this.serious) {
      this.faultStore.removeFault(this.section, 'serious');
      return this.faultsService.removeSerious();
    }
   
    this.faultStore.addFault(this.section, 'serious');  
    return this.faultsService.addSerious();
  }

  updateDangerous() {
    this.dangerous = !this.dangerous;
    if (!this.dangerous) {
      this.faultStore.removeFault(this.section, 'dangerous')
      return this.faultsService.removeDangerous();
    }

    this.faultStore.addFault(this.section, 'dangerous');
    return this.faultsService.addDangerous();
  }

}
