import { Component, Input } from '@angular/core';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the FaultControlsV2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fault-controls-v2',
  templateUrl: 'fault-controls-v2.html'
})
export class FaultControlsV2Component {

  @Input() item;

  constructor(private faultsService: FaultsScorecardProvider, public alertCtrl: AlertController) {
  }

  addDrivingFault() {
    this.item.counter++;
    this.faultsService.addDrivingFault();
  }

  removeDrivingFault() {
    if (this.item.counter > 0) this.item.counter--;
    this.faultsService.removeDrivingFault();
  }

  faultHold() {
    const alert = this.alertCtrl.create({
      title: 'Fault held!',
      subTitle: 'Add serious/dangerous and remove driving faults',
      buttons: ['OK']
    });
    alert.present();
  }

  // updateSerious() {
  //   if (!this.serious) return this.faultsService.removeSerious();
  //   return this.faultsService.addSerious();
  // }

  // updateDangerous() {
  //   if (!this.dangerous) return this.faultsService.removeDangerous();
  //   return this.faultsService.addDangerous();
  // }

}
