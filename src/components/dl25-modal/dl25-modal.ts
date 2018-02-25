import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the Dl25ModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
interface FaultSection {
  title: string;
}
interface FaultData {
  title: string;
  sections: FaultSection[];
}
@Component({
  selector: 'dl25-modal',
  templateUrl: 'dl25-modal.html'
})
export class Dl25ModalComponent {

  faultData: FaultData;

  constructor(public params: NavParams, public viewCtrl: ViewController) {
    this.faultData = params.get('faultData');
  }

  closeModal() {
   this.viewCtrl.dismiss();
  }

}
