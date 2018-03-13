import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ComponentLibraryPage } from '../component-library/component-library';
import { Dl25ButtonsModalsPage } from '../dl25-buttons-modals/dl25-buttons-modals';
import { AllOnOnePageFaultModes } from '../all-on-one-fault-modes/all-on-one-fault-modes';
import { AllOnOnePage } from '../all-on-one/all-on-one';
import { AllOnOnePage3 } from '../all-on-one-3/all-on-one-3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  componentLibrary = ComponentLibraryPage;
  buttonsModals = Dl25ButtonsModalsPage;
  allOnOnePageFaultModes = AllOnOnePageFaultModes;
  allOnOnePage = AllOnOnePage;
  allOnOnePage3 = AllOnOnePage3;

  constructor(public navCtrl: NavController) {
  }

}
