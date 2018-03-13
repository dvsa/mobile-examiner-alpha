import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'dl25-modal',
  templateUrl: 'dl25-modal.html'
})
export class Dl25ModalComponent {

  faultData: any;
  isRemoveMode: boolean = false;

  constructor(public params: NavParams, public viewCtrl: ViewController) {
    this.faultData = params.get('faultData');
  }

  closeModal() {
   this.viewCtrl.dismiss();
  }

  isNormalRow(faultData) {
    return !faultData.hasRadioButtons && !faultData.hasCheckboxes && !faultData.hasQuestion && !faultData.hasSupplementaryRadioButtons;
  }

  toggleRemoveMode() {
    this.isRemoveMode = !this.isRemoveMode;
  }

}
