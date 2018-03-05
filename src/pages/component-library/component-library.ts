import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { PressedFaultModalComponent } from '../../components/pressed-fault-modal/pressed-fault-modal';

/**
 * Generated class for the ComponentLibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-component-library',
  templateUrl: 'component-library.html',
})
export class ComponentLibraryPage {

  item = {
    counter: 0,
    name: 'Control'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  createModal(name) {
    this.modalCtrl.create(PressedFaultModalComponent, {
      name
    }).present();
  }
  
}
