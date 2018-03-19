import { Component, Input } from '@angular/core';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';
import { HazardRecorderProvider } from '../../providers/hazard-recorder/hazard-recorder';
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

  constructor(private hazardRecorderProvider: HazardRecorderProvider,
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

  addDrivingFault() {
    // prevent fault marking
    if (this.dangerous || this.serious) return;

    this.faultStore.addFault(this.section, 'fault');
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
    }
   
    this.faultStore.addFault(this.section, 'serious');
  }

  updateDangerous() {
    this.dangerous = !this.dangerous;
    if (!this.dangerous) {
      this.faultStore.removeFault(this.section, 'dangerous')
    }

    this.faultStore.addFault(this.section, 'dangerous');
  }

}
