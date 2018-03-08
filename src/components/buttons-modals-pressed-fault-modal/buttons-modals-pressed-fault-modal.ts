import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';
import { FaultDataProvider } from '../../providers/fault-data/fault-data';

/**
 * Generated class for the PressedFaultModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'buttons-modals-pressed-fault-modal',
  templateUrl: 'buttons-modals-pressed-fault-modal.html'
})
export class ButtonsModalsPressedFaultModalComponent {

  item: any;
  serious: boolean;
  dangerous: boolean;

  constructor(
    public params: NavParams, 
    public viewCtrl: ViewController, 
    public faultsDataService: FaultDataProvider,
    private faultsService: FaultsScorecardProvider) {
    this.item = params.get('item');
  }

  closeModal() {
    setTimeout(() => this.viewCtrl.dismiss(), 200); 
  }

  removeDrivingFault(faultTitle, itemName) {
    if (this.item.counter > 0) {
      this.faultsDataService.removeDrivingFault(faultTitle, itemName);
      this.faultsService.removeDrivingFault();
    }
  }

  updateSerious(faultTitle, itemName) {
    if (!this.serious) {
      this.faultsDataService.removeSerious(faultTitle, itemName);
      return this.faultsService.removeSerious();
    }
    this.faultsDataService.addSerious(faultTitle, itemName);
    return this.faultsService.addSerious();
  }

  updateDangerous(faultTitle, itemName) {
    if (!this.dangerous) {
      this.faultsDataService.removeDangerous(faultTitle, itemName);
      return this.faultsService.removeDangerous();
    }
    this.faultsDataService.addDangerous(faultTitle, itemName);
    return this.faultsService.addDangerous();
  }

}
