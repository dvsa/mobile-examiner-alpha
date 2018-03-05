import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

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


  constructor(public viewCtrl: ViewController) {
  }

  closeModal() {
    this.viewCtrl.dismiss();
   }

}
