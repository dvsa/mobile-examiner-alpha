import { Component } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { NavParams, ViewController } from 'ionic-angular';
import { FaultStoreProvider } from '../../providers/fault-store/fault-store';

/**
 * Generated class for the PressedFaultModalComponentAOOP component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'button-modal',
  templateUrl: 'button-modal.html'
})
export class ButtonModalComponent {

  item: any;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController,
    private faultsStoreService: FaultStoreProvider) {
    this.item = params.get('item');

    if (!this.item.hasSerious && this.item.hasDangerous) this.item.hasSerious = this.item.hasDangerous;
  }

  closeModal() {
    setTimeout(() => this.viewCtrl.dismiss(), 200); 
  }

  updateSerious() {
    return this.faultsStoreService.addFault(this.item.section, 'serious');
  }

  updateDangerous() {
    return this.faultsStoreService.addFault(this.item.section, 'dangerous');
  }

}
