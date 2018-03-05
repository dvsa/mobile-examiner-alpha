import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IFormPage } from '../../sheared/interfaces';
import { SidebarFaultDataProvider } from '../../providers/sidebar-fault-data/sidebar-fault-data';

@Component({
  selector: 'page-sidebar-prototype',
  templateUrl: 'sidebar-prototype.html',
})
export class SidebarPrototypePage {
  @ViewChild('content') _NAV: NavController

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public faultsService: SidebarFaultDataProvider) {
  }

  ionViewDidLoad() {
    this.sectionToLoad(this.formSections[0]);
  }

  sectionToLoad(formPage: IFormPage) {
    this._NAV.setRoot(formPage.page, { options: formPage });
  }

  formSections: any[] = this.faultsService.formSections;

}
