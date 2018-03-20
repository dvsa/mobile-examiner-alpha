import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';

/**
 * Generated class for the PressedFaultModalComponentAOOP component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pressed-fault-modal-aoop',
  templateUrl: 'pressed-fault-modal-aoop.html'
})
export class PressedFaultModalComponentAOOP {

  item: any;

  constructor(
    public params: NavParams, 
    public viewCtrl: ViewController, 
    private faultsService: FaultsScorecardProvider) {
    this.item = params.get('item');
  }

  closeModal() {
    setTimeout(() => this.viewCtrl.dismiss(), 200); 
  }

  removeDrivingFault() {
    if (this.item.counter > 0) this.item.counter--;
    this.faultsService.removeDrivingFault();
    this.closeModal();
  }

  updateSerious() {
    if (!this.item.serious) return this.faultsService.removeSerious();
    return this.faultsService.addSerious();
  }

  updateDangerous() {
    if (!this.item.dangerous) return this.faultsService.removeDangerous();
    return this.faultsService.addDangerous();
  }

}
