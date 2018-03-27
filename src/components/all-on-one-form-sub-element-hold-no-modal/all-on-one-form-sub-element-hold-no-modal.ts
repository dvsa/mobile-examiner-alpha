import { Component, Input, ElementRef } from '@angular/core';
import { HazardRecorderProvider } from '../../providers/hazard-recorder/hazard-recorder';

import { FaultStoreProvider } from '../../providers/fault-store/fault-store';
import { AllOnOnePageFaultModalsTimerOptionsPage } from '../../pages/all-on-one-page-fault-modals-timer-options/all-on-one-page-fault-modals-timer-options';
import { ModalController } from 'ionic-angular';
import { AoopCustomHammerConfigPage } from '../../pages/aoop-custom-hammer-config/aoop-custom-hammer-config';
import { CustomHammerConfigProvider } from '../../providers/custom-hammer-config/custom-hammer-config';

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

  mc: any;

  constructor(
    private hazardRecorderProvider: HazardRecorderProvider,
    private faultStore: FaultStoreProvider,
    public modalCtrl: ModalController,
    public customHammerConfig: CustomHammerConfigProvider,
    public el: ElementRef) {

    faultStore.lastFault$
      .subscribe(data => this.isLastFault = (data && data.id === this.section));

    faultStore.currentfaults$
      .subscribe(data => {
        this.faultCounter = data[this.section] ? data[this.section].fault : 0;
        this.serious = data[this.section] ? !!data[this.section].serious : false;
        this.dangerous = data[this.section] ? !!data[this.section].dangerous : false;
      });

    customHammerConfig.change.subscribe(newDuration => {
      this.resetHammer(newDuration);
    });
  }

  ngAfterViewInit() {
    const button = this.el.nativeElement;
    this.mc = new Hammer.Manager(button);
    const hammerPress = new Hammer.Press({
      event: 'press',
      time: this.customHammerConfig.pressDuration
    });
    this.mc.add(hammerPress);
    
    this.mc.on('press', (e) => {
      this.addDrivingFault();
    });
  }

  resetHammer(newDuration: number) {
    this.mc.remove('press');
    const hammerPress = new Hammer.Press({
      event: 'press',
      time: newDuration
    });
    this.mc.add(hammerPress);
  }

  openCustomerHammgerConfig() {
    const modal = this.modalCtrl.create(AoopCustomHammerConfigPage);
    modal.present();
  }

  addDrivingFault() {
    // prevent fault marking
    if (this.dangerous || this.serious) return;

    this.faultStore.addFault(this.section, 'fault');
  }

  recordHazard() {
    if (this.hazardRecorderProvider.isDangerousRecordingEnabled) {
      this.addDangerousFault();
    } else if (this.hazardRecorderProvider.isSeriousRecordingEnabled) {
      this.addSeriousFault();
    } else if (this.hazardRecorderProvider.isRemovingFaultsEnabled) {
      if (this.hazardRecorderProvider.isDangerousRemovingEnabled) {
        this.removeDangerousFault()
      } else if (this.hazardRecorderProvider.isSeriousRemovingEnabled) {
        this.removeSeriousFault()
      } else {
        this.faultStore.removeFault(this.section, 'fault', this.faultCounter);
      }
    }

    this.hazardRecorderProvider.disableRecording();    
  }

  addSeriousFault() {
    if (this.serious || this.dangerous) return
    this.serious = true
    this.faultStore.addFault(this.section, 'serious');
  }

  removeSeriousFault() {
    if (!this.serious) return
    this.serious = false
    this.faultStore.removeFault(this.section, 'serious');
  }

  addDangerousFault() {
    if (this.dangerous) return
    this.dangerous = true;
    this.faultStore.addFault(this.section, 'dangerous');    
  }

  removeDangerousFault() {
    if (!this.dangerous) return    
    this.dangerous = false;
    this.faultStore.removeFault(this.section, 'dangerous')    
  }

}
