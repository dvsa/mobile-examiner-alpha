import { SidebarPrototypePage } from './../sidebar-prototype/sidebar-prototype';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from "../multi-tab-proto/tabs/tabs";
import { ComponentLibraryPage } from '../component-library/component-library';
import { Dl25ButtonsModalsPage } from '../dl25-buttons-modals/dl25-buttons-modals';
import { AllOnOnePageFaultModes } from '../all-on-one-fault-modes/all-on-one-fault-modes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  multiTabPage = TabsPage;
  sidebar = SidebarPrototypePage;
  componentLibrary = ComponentLibraryPage;
  buttonsModals = Dl25ButtonsModalsPage;
  allOnOnePageFaultModes = AllOnOnePageFaultModes;

  constructor(public navCtrl: NavController) {
  }

}
