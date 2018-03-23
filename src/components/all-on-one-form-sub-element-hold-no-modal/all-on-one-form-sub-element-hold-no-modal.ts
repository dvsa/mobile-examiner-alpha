import { Component, Input, ElementRef } from '@angular/core';
import { HazardRecorderProvider } from '../../providers/hazard-recorder/hazard-recorder';

import { FaultStoreProvider } from '../../providers/fault-store/fault-store';

declare const Hammer: any;
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

  constructor(
    private hazardRecorderProvider: HazardRecorderProvider,
    private faultStore: FaultStoreProvider,
    public el: ElementRef) {

    this.faultStore.lastFault$
      .subscribe(data => this.isLastFault = (data && data.id === this.section));

    this.faultStore.currentfaults$
      .subscribe(data => {
        this.faultCounter = data[this.section] ? data[this.section].fault : 0;
        this.serious = data[this.section] ? !!data[this.section].serious : false;
        this.dangerous = data[this.section] ? !!data[this.section].dangerous : false;
      });
  }

  ngAfterViewInit() {
    const button = this.el.nativeElement;
    const mc = new Hammer.Manager(button);
    mc.add(new Hammer.Press({
      event: 'press',
      time: 600
    }));

    mc.on('press', (e) => {
      this.addDrivingFault();
    })

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
    } else if (this.hazardRecorderProvider.isRemovingFaultsEnabled) {
      this.faultStore.removeFault(this.section, 'fault');
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
