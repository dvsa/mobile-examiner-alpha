import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';
import { Dl25ModalComponent } from '../../components/dl25-modal/dl25-modal';
import { FaultDataProvider } from '../../providers/fault-data/fault-data';
import { Subscription } from 'rxjs/Subscription';
import _ from 'lodash';
import { FaultsScorecardProvider } from '../../providers/faults-scorecard/faults-scorecard';

@Component({
  selector: 'page-dl25-buttons-modals',
  templateUrl: 'dl25-buttons-modals.html',
})
export class Dl25ButtonsModalsPage {

  columns: any;
  _subscription: Subscription;
  manouevreComplete: boolean = false;
  normalStop1Complete: boolean = false;
  normalStop2Complete: boolean = false;
  drivingTimeComplete: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    public faultDataProvider: FaultDataProvider,
    public faultsService: FaultsScorecardProvider) {
      this.columns = faultDataProvider.getFaultData();
      this._subscription = faultDataProvider.change.subscribe((value) => { 
        this.columns = value; 
      });
  }

  ionViewDidEnter() {
    this.faultsService.reset();
    this.faultDataProvider.reset();
    this.columns = this.faultDataProvider.getFaultData();
  }

  createModal(faultData) {
    this.modalCtrl.create(Dl25ModalComponent, {
      faultData
    }).present();
  }

  getNumberOfFaults(fault) {
    if (!fault.hasSections) return fault.faults.df;
    return _(fault.sections)
      .map((subSection: any) => subSection.faults.df)
      .reduce((acc, prev) => acc + prev);
  }

  hasSeriousFault(fault) {
    if (!fault.hasSections) return fault.faults.s;
    return _(fault.sections)
      .map((subSection: any) => subSection.faults.s)
      .reduce((acc, prev) => acc + prev) > 0;
  }

  hasDangerousFault(fault) {
    if (!fault.hasSections) return fault.faults.d;
    return _(fault.sections)
      .map((subSection: any) => subSection.faults.d)
      .reduce((acc, prev) => acc + prev) > 0;
  }

  manouevreClick() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Manouevres',
      buttons: [
        {
          text: 'Reverse Park',
          handler: () => {
            this.manouevreComplete = !this.manouevreComplete;
          }
        },{
          text: 'Forward park',
          handler: () => {
            this.manouevreComplete = !this.manouevreComplete;
          }
        },{
          text: 'Reverse right',
          handler: () => {
            this.manouevreComplete = !this.manouevreComplete;
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  normalStop1Click() {
    this.normalStop1Complete = !this.normalStop1Complete;
  }

  normalStop2Click() {
    this.normalStop2Complete = !this.normalStop2Complete;
  }

}
