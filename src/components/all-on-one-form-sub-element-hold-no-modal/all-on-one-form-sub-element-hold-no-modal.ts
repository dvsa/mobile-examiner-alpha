import { Component, Input } from '@angular/core';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';
import { HazardRecorderProvider } from '../../providers/hazard-recorder/hazard-recorder';

@Component({
  selector: 'all-on-one-form-sub-element-hold-no-modal',
  templateUrl: 'all-on-one-form-sub-element-hold-no-modal.html'
})
export class AllOnOneFormSubElementHoldNoModalComponent {

  @Input()
  text: string;
  serious: boolean = false;
  dangerous: boolean = false;
  counter: number = 0;

  constructor(private faultsService: FaultsScorecardProvider, private hazardRecorderProvider: HazardRecorderProvider) {
  }

  addDrivingFault() {
    this.counter++;
    this.faultsService.addDrivingFault();
  }

  recordHazard(){
    if(this.hazardRecorderProvider.isDangerousRecordingEnabled) {
      this.updateDangerous(); 
      this.hazardRecorderProvider.disableRecording();
    } else if(this.hazardRecorderProvider.isSeriousRecordingEnabled){
      this.updateSerious();
      this.hazardRecorderProvider.disableRecording();
    }
  }

  updateSerious() {
    this.serious = !this.serious;
    if (!this.serious) return this.faultsService.removeSerious();
    return this.faultsService.addSerious();
  }

  updateDangerous() {
    this.dangerous = !this.dangerous;
    if (!this.dangerous) return this.faultsService.removeDangerous();
    return this.faultsService.addDangerous();
  }

}
