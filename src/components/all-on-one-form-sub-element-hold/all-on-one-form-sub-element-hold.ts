import { Component, Input } from '@angular/core';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';
import { ModalController } from 'ionic-angular';
import { PressedFaultModalComponentAOOP } from '../pressed-fault-modal-aoop/pressed-fault-modal-aoop';

@Component({
  selector: 'all-on-one-form-sub-element-hold',
  templateUrl: 'all-on-one-form-sub-element-hold.html'
})
export class AllOnOneFormSubElementHoldComponent {

  @Input()
  text: string;
  serious: boolean = false;
  dangerous: boolean = false;
  counter: number = 0;

  constructor(private faultsService: FaultsScorecardProvider, public modalCtrl: ModalController ) {
  }

  openFaultModal() {
    this.modalCtrl.create(PressedFaultModalComponentAOOP, {
      item: this,
    }).present();
  }

  addDrivingFault() {
    this.counter++;
    this.faultsService.addDrivingFault();
  }

  removeDrivingFault() {
    if (this.counter > 0) {
      this.counter--;
      this.faultsService.removeDrivingFault();
    }
  }

  updateSerious() {
    if (!this.serious) return this.faultsService.removeSerious();
    return this.faultsService.addSerious();
  }

  updateDangerous() {
    if (!this.dangerous) return this.faultsService.removeDangerous();
    return this.faultsService.addDangerous();
  }

}
