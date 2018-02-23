import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComponentLibraryPage } from '../component-library/component-library';
import { Dl25ButtonsModalsPage } from '../dl25-buttons-modals/dl25-buttons-modals';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToComponentLibrary() {
    this.navCtrl.push(ComponentLibraryPage);
  }

  goToButtonsModals() {
    this.navCtrl.push(Dl25ButtonsModalsPage);
  }

}
