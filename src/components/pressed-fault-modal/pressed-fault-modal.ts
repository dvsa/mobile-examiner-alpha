import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PressedFaultModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pressed-fault-modal',
  templateUrl: 'pressed-fault-modal.html'
})
export class PressedFaultModalComponent {

  faultData: any;

  constructor(public params: NavParams, public viewCtrl: ViewController) {
    this.faultData = params.get('faultData');
  }

  closeModal() {
   this.viewCtrl.dismiss();
  }

}
