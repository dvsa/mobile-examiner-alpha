import { Component, Input } from '@angular/core';
import { FaultStoreProvider } from '../../providers/fault-store/fault-store';
import { ModalController } from 'ionic-angular';
import { ButtonModalComponent } from '../button-modal/button-modal';

/**
 * Generated class for the MarksComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'button-element',
  templateUrl: 'button-element.html'
})
export class ButtonElementComponent {

  @Input('section') section: string
  @Input()
  text: string;

  faultCounter: number;
  hasSerious: boolean = false;
  hasDangerous: boolean = false;
  isLastFault: boolean

  constructor(private faultStore: FaultStoreProvider,
    public modalCtrl: ModalController) {

    this.faultStore.lastFault$
    .subscribe(data => this.isLastFault = (data && data.id === this.section));

    this.faultStore.currentfaults$
    .subscribe(data => {
        this.faultCounter = data[this.section] ? data[this.section].fault : 0;
        this.hasSerious = data[this.section] ? !!data[this.section].serious : false;
        this.hasDangerous = data[this.section] ? !!data[this.section].dangerous : false;
    });
  }

  openFaultModal() {
    this.modalCtrl.create(ButtonModalComponent, {
      item: this,
    }).present();
  }

  addFault() {
    // prevent fault marking
    if (this.hasDangerous || this.hasSerious) return;

    this.faultStore.addFault(this.section,  'fault');
  }

}
