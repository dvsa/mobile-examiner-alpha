import { Component, Input } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { FaultStoreProvider } from '../../providers/fault-store/fault-store';
import { IFaultState, IFaultElementState } from '../../providers/fault-store/fault-store.model';

import { ModalController } from 'ionic-angular';
import { ButtonModalComponent } from '../button-modal/button-modal';

export interface IFaultCounter {
  faults: IFaultElementState,
  totals: IFaultState
}

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

  @Input('section') section: string;

  @Input()
  text: string;

  //public fault$: Observable<any>;

  faultCounter: number;
  hasSerious: boolean = false;
  hasDangerous: boolean = false;
  isLastFault: boolean

  constructor(private faultStore: FaultStoreProvider,
    private ngRedux: NgRedux<IFaultCounter>,
    public modalCtrl: ModalController) {

    // this might not be the most performant way to do things,
    // as it checks all the sections
    this.ngRedux.select(state => Object.keys(state.faults)
      .filter(key => key === this.section)
      .map(sectionName => {
        return state.faults[sectionName];
      })).subscribe(data => {
        if (data.length > 0) {
          this.faultCounter = data[0].fault;
          this.hasSerious = !!data[0].serious;
          this.hasDangerous = !!data[0].dangerous;
        }
      });

      this.ngRedux.select(state => state.faults.lastFault)
      .subscribe(data => this.isLastFault = (data && data.id === this.section));

  }

  openFaultModal() {
    this.modalCtrl.create(ButtonModalComponent, {
      item: this,
    }).present();
  }

  addFault() {
    // prevent fault marking
    if (this.hasDangerous || this.hasSerious) return;

    this.faultStore.addFault(this.section, 'fault');
  }

}
