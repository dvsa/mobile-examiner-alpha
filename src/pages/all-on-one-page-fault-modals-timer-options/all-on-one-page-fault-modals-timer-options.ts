import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AllOnOnePageFaultModalsTimerOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-all-on-one-page-fault-modals-timer-options',
  templateUrl: 'all-on-one-page-fault-modals-timer-options.html',
})
export class AllOnOnePageFaultModalsTimerOptionsPage {

  delay: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onChange() {
    console.log(this.delay);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllOnOnePageFaultModalsTimerOptionsPage');
  }

}
