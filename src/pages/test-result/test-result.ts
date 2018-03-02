import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecordDebriefPage } from '../record-debrief/record-debrief';

@Component({
  selector: 'page-test-result',
  templateUrl: 'test-result.html',
})
export class TestResultPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestResultPage');
  }

  goToRecordDebrief() {
    this.navCtrl.push(RecordDebriefPage);
  }

}
