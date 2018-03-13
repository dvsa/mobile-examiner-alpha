import { Component, Input } from '@angular/core';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';
import { FaultDataProvider } from '../../providers/fault-data/fault-data';
import { NavController, ViewController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'dl25-modal-row',
  templateUrl: 'dl25-modal-row.html'
})
export class Dl25ModalRowComponent {

  @Input() hasSections: boolean;
  @Input() section: string;
  @Input() faultTitle: string;
  @Input() isRemoveMode: boolean;

  _subscription: Subscription;
  serious: boolean;
  dangerous: boolean;
  numDrivingFaults: number;
  closing: boolean = false;

  constructor(
    private faultsScoreCardProvider: FaultsScorecardProvider, 
    private faultDataProvider: FaultDataProvider,
    private viewCtrl: ViewController, 
    private navCtrl: NavController) {
      this._subscription = faultDataProvider.change.subscribe(() => { 
        this.recalculateFaults();
      });
  }

  ngOnInit() {
    const fault = this.faultDataProvider.getFault(this.faultTitle, this.section, null);
    this.numDrivingFaults = fault.faults.df;
    this.serious = fault.faults.s;
    this.dangerous = fault.faults.d;
  }

  recalculateFaults() {
    const fault = this.faultDataProvider.getFault(this.faultTitle, this.section, null);
    this.numDrivingFaults = fault.faults.df;
    this.serious = fault.faults.s;
    this.dangerous = fault.faults.d;
  }

  // faultHold(section) {
  //   this.modalCtrl.create(ButtonsModalsPressedFaultModalComponent, {
  //     item: {
  //       name: section,
  //       faultTitle: this.faultTitle,
  //       counter: this.numDrivingFaults
  //     },
  //   }).present();
  // }

  addOrRemoveDrivingFault(faultTitle, section) {
    if (this.isRemoveMode) {
      this.removeDrivingFault(faultTitle, section);
    } else {
      this.addDrivingFault(faultTitle, section);
    }
  }

  addDrivingFault(faultTitle, section) {
    this.faultsScoreCardProvider.addDrivingFault();
    this.faultDataProvider.addDrivingFault(faultTitle, section);
    const fault = this.faultDataProvider.getFault(this.faultTitle, this.section, null);
    this.numDrivingFaults = fault.faults.df;
    this.closeModal();
  }

  removeDrivingFault(faultTitle, section) {
    if (this.numDrivingFaults > 0) {
      this.faultsScoreCardProvider.removeDrivingFault();
      this.faultDataProvider.removeDrivingFault(faultTitle, section);
      this.numDrivingFaults = this.faultDataProvider.getFault(this.faultTitle, this.section, null).faults.df;
      this.closeModal();    
    }
  }

  updateSerious(faultTitle, section) {
    if (!this.serious) {
      this.faultsScoreCardProvider.removeSerious();
      this.faultDataProvider.removeSerious(this.faultTitle, this.section);
      this.closeModal();
      return;
    }
    this.faultsScoreCardProvider.addSerious();
    this.faultDataProvider.addSerious(faultTitle, section);
    this.serious = this.faultDataProvider.getFault(this.faultTitle, this.section, null).faults.s;
    this.closeModal();    
  }

  updateDangerous(faultTitle, section) {
    if (!this.dangerous) {
      this.faultsScoreCardProvider.removeDangerous();
      this.faultDataProvider.removeDangerous(this.faultTitle, this.section);
      this.closeModal();
      return;      
    }
    this.faultsScoreCardProvider.addDangerous();
    this.faultDataProvider.addDangerous(faultTitle, section);
    this.dangerous = this.faultDataProvider.getFault(this.faultTitle, this.section, null).faults.d;
    this.closeModal();    
  }

  closeModal() {
    if (this.closing) {
      return;
    }

    this.closing = true;

    setTimeout(() => {
      if (this.navCtrl.isActive(this.viewCtrl)) {
        this.navCtrl.pop();
      }
    }, 200); 
  }

}
