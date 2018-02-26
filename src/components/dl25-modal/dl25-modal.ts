import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'dl25-modal',
  templateUrl: 'dl25-modal.html'
})
export class Dl25ModalComponent {

  faultData: any;

  constructor(public params: NavParams, public viewCtrl: ViewController) {
    this.faultData = params.get('faultData');
  }

  closeModal() {
   this.viewCtrl.dismiss();
  }

  isNormalRow(faultData) {
    return !faultData.hasRadioButtons && !faultData.hasCheckBoxes && !faultData.hasQuestion && !faultData.hasSupplementaryRadioButtons;
  }

}
