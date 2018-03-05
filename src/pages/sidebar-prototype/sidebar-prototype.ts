import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IFormPage } from '../../sheared/interfaces';
import { SidebarFaultDataProvider } from '../../providers/sidebar-fault-data/sidebar-fault-data';
import _ from 'lodash';

@Component({
  selector: 'page-sidebar-prototype',
  templateUrl: 'sidebar-prototype.html',
})
export class SidebarPrototypePage {

  @ViewChild('content') _NAV: NavController

  activeSection: string;
  testStarted: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public faultsService: SidebarFaultDataProvider) {
  }

  ionViewDidLoad() {
    this.activeSection = 'Precautions';
    this.sectionToLoad(this.formSections[3]);
  }

  sectionToLoad(formPage: IFormPage) {
    this.testStarted = true;
    this._NAV.setRoot(formPage.page, { options: formPage });
    setTimeout(() => this.activeSection = formPage.pageName, 150);
  }

  isActive(pageName: string) {
    return pageName === this.activeSection ? 'active menu-item' : 'menu-item';
  }

  sumSectionFaults(sectionName: string): number {
    const section: Object = _(this.formSections).find(section => section.pageName === sectionName);
    const sectionFaults = _(section).get('pageOptions.sections');
    const items = _(sectionFaults).flatMap('items');
    return items
      .map('counter')
      .reduce((acc, prev) => acc + prev);
  }

  formSections: any[] = this.faultsService.formSections;

}
