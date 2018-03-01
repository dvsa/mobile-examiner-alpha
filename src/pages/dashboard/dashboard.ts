import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { JournalPage } from '../journal/journal';
import { LdtmModePage } from '../ldtm-mode/ldtm-mode';
import { PolicyDataPage } from '../policy-data/policy-data';
import { ManageDeviceDebriefStoragePage } from '../manage-device-debrief-storage/manage-device-debrief-storage';
import { TrainerModePage } from '../trainer-mode/trainer-mode';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  title: string = 'Dashboard';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  goToPage(page: string) {
    if (page === 'JournalPage') return this.navCtrl.push(JournalPage);
    if (page === 'LdtmModePage') return this.navCtrl.push(LdtmModePage);
    if (page === 'PolicyDataPage') return this.navCtrl.push(PolicyDataPage);
    if (page === 'ManageDeviceDebriefStoragePage') return this.navCtrl.push(ManageDeviceDebriefStoragePage);
    if (page === 'TrainerModePage') return this.navCtrl.push(TrainerModePage);
  }

}
