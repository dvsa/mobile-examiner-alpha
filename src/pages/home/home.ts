import { SidebarPrototypePage } from './../sidebar-prototype/sidebar-prototype';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from "../multi-tab-proto/tabs/tabs";
import { ComponentLibraryPage } from '../component-library/component-library';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  multiTabPage = TabsPage;

  constructor(public navCtrl: NavController) {
  }

  goToSidebarPrototype() {
    this.navCtrl.push(SidebarPrototypePage);
  }

  goToComponentLibrary() {
    this.navCtrl.push(ComponentLibraryPage);
  }

}
