import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Dl25ModalComponent } from '../../components/dl25-modal/dl25-modal';

/**
 * Generated class for the Dl25ButtonsModalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dl25-buttons-modals',
  templateUrl: 'dl25-buttons-modals.html',
})
export class Dl25ButtonsModalsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  createModal(data) {
    this.modalCtrl.create(Dl25ModalComponent, {
      text: data
    }).present();
  }

}
