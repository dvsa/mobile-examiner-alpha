import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';
import { SidebarFaultDataProvider } from '../../providers/sidebar-fault-data/sidebar-fault-data';

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
  section: any;
  pageName: string;
  serious: boolean;
  dangerous: boolean;

  constructor(
    public params: NavParams, 
    public viewCtrl: ViewController, 
    public faultDataService: SidebarFaultDataProvider,
    private faultsService: FaultsScorecardProvider) {
    this.item = params.get('item');
    this.section = params.get('section');
    this.pageName = params.get('pageName');
    this.serious = this.item.isSerious;
    this.dangerous = this.item.isDangerous;
  }

  closeModal() {
    setTimeout(() => this.viewCtrl.dismiss(), 200); 
  }

  removeDrivingFault() {
    if (this.item.counter > 0) {
      const subSectionName = !!this.section.header ? this.section.header : null;
      this.faultDataService.removeDrivingFault(this.pageName, subSectionName, this.item.name);
      this.faultsService.removeDrivingFault();
      this.closeModal();
    }
  }

  updateSerious() {
    if (!this.serious) return this.faultsService.removeSerious();
    const subSectionName = !!this.section.header ? this.section.header : null;
    this.faultDataService.updateSerious(this.pageName, subSectionName, this.item.name);
    return this.faultsService.addSerious();
  }

  updateDangerous() {
    if (!this.dangerous) return this.faultsService.removeDangerous();
    const subSectionName = !!this.section.header ? this.section.header : null;
    this.faultDataService.updateDangerous(this.pageName, subSectionName, this.item.name);
    return this.faultsService.addDangerous();
  }

}
