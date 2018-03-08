import { SidebarPrototypePage } from './../sidebar-prototype/sidebar-prototype';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from "../multi-tab-proto/tabs/tabs";
import { ComponentLibraryPage } from '../component-library/component-library';
import { Dl25ButtonsModalsPage } from '../dl25-buttons-modals/dl25-buttons-modals';
import { AllOnOnePage } from '../all-on-one/all-on-one';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  multiTabPage = TabsPage;
  sidebar = SidebarPrototypePage;
  componentLibrary = ComponentLibraryPage;
  buttonsModals = Dl25ButtonsModalsPage;
  allOnOnePage = AllOnOnePage;

  constructor(public navCtrl: NavController) {
  }

}
