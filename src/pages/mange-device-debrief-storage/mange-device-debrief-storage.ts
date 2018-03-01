import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-mange-device-debrief-storage',
  templateUrl: 'mange-device-debrief-storage.html',
})
export class MangeDeviceDebriefStoragePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MangeDeviceDebriefStoragePage');
  }

}
