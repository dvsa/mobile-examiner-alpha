import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComponentLibraryPage } from '../component-library/component-library';

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

}
