import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { JournalPage } from '../journal/journal';
import { LdtmModePage } from '../ldtm-mode/ldtm-mode';
import { PolicyDataPage } from '../policy-data/policy-data';
import { ManageDeviceDebriefStoragePage } from '../manage-device-debrief-storage/manage-device-debrief-storage';
import { TrainerModePage } from '../trainer-mode/trainer-mode';
import { DashboardComponentLinks } from './enums/dashboard-component-links';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  title: string = 'Dashboard';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    navCtrl.remove(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  goToPage(page: string) {
    if (page === DashboardComponentLinks.JournalPage) return this.navCtrl.push(JournalPage);
    if (page === DashboardComponentLinks.LdtmModePage) return this.navCtrl.push(LdtmModePage);
    if (page === DashboardComponentLinks.PolicyDataPage) return this.navCtrl.push(PolicyDataPage);
    if (page === DashboardComponentLinks.ManageDeviceDebriefStoragePage) return this.navCtrl.push(ManageDeviceDebriefStoragePage);
    if (page === DashboardComponentLinks.TrainerModePage) return this.navCtrl.push(TrainerModePage);
  }

}
