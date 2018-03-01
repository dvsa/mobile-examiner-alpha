import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-initiate-driving-period',
  templateUrl: 'initiate-driving-period.html',
})
export class InitiateDrivingPeriodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InitiateDrivingPeriodPage');
  }

}
