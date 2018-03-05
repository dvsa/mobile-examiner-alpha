import { Component, Input } from '@angular/core';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';
import { ModalController } from 'ionic-angular';
import { PressedFaultModalComponent } from '../pressed-fault-modal/pressed-fault-modal';
import { SidebarFaultDataProvider } from '../../providers/sidebar-fault-data/sidebar-fault-data';

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
  @Input() section;
  @Input() pageName;

  constructor(
    private faultsService: FaultsScorecardProvider, 
    public modalCtrl: ModalController,
    public faultsDataService: SidebarFaultDataProvider) {
  }

  addDrivingFault() {
    this.item.counter++;
    this.faultsService.addDrivingFault();
  }

  faultHold(name) {
    this.modalCtrl.create(PressedFaultModalComponent, {
      item: this.item,
      section: this.section,
      pageName: this.pageName
    }).present();  
  }

}
