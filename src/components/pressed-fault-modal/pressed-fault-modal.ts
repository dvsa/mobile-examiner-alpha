import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { FaultDataProvider } from '../../providers/fault-data/fault-data';
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

  constructor(
    public params: NavParams, 
    public viewCtrl: ViewController, 
    public faultsService: FaultDataProvider,
    private faultsScorecardService: FaultsScorecardProvider) {
    this.item = params.get('item');
  }

  closeModal() {
    setTimeout(() => this.viewCtrl.dismiss(), 200); 
  }

  removeDrivingFault() {
    if (this.item.counter > 0) this.item.counter--;
    this.faultsScorecardService.removeDrivingFault();
  }

}
