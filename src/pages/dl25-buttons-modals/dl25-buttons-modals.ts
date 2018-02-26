import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Dl25ModalComponent } from '../../components/dl25-modal/dl25-modal';
import { FaultDataProvider } from '../../providers/fault-data/fault-data';
import { Subscription } from 'rxjs/Subscription';
// import faultData from './fault-data';

@Component({
  selector: 'page-dl25-buttons-modals',
  templateUrl: 'dl25-buttons-modals.html',
})
export class Dl25ButtonsModalsPage {

  columns: any;
  _subscription: Subscription;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public faultDataProvider: FaultDataProvider) {
      this.columns = faultDataProvider.getFaultData();
      this._subscription = faultDataProvider.change.subscribe((value) => { 
        this.columns = value; 
      });
  }

  createModal(faultData) {
    this.modalCtrl.create(Dl25ModalComponent, {
      faultData
    }).present();
  }

}
