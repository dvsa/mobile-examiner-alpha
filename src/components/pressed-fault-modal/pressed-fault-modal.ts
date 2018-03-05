import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';

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

  item: any;
  serious: boolean;
  dangerous: boolean;

  constructor(
    public params: NavParams, 
    public viewCtrl: ViewController, 
    // public faultsService: FaultDataProvider,
    private faultsService: FaultsScorecardProvider) {
    this.item = params.get('item');
  }

  closeModal() {
    setTimeout(() => this.viewCtrl.dismiss(), 200); 
  }

  removeDrivingFault() {
    if (this.item.counter > 0) this.item.counter--;
    this.faultsService.removeDrivingFault();
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
