import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Dl25ModalComponent } from '../../components/dl25-modal/dl25-modal';

/**
 * Generated class for the Dl25ButtonsModalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface FaultSection {
  title: string;
}
interface FaultData {
  title: string;
  sections: FaultSection[];
}

@Component({
  selector: 'page-dl25-buttons-modals',
  templateUrl: 'dl25-buttons-modals.html',
})
export class Dl25ButtonsModalsPage {

  mockFaultData: FaultData = {
    title: 'Signals',
    sections: [{
      title: 'Controls'
    }, {
      title: 'Observations'
    }]
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  createModal(data: FaultData) {
    this.modalCtrl.create(Dl25ModalComponent, {
      title: data.title,
      sections: data.sections
    }).present();
  }

}
